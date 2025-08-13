import React from "react"
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { FilterDropdown } from "../FilterDropdown";
import { FaRotateLeft } from "react-icons/fa6";

import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  type SortingState,
  getSortedRowModel
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[];
  filterDate: string[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterDate
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = React.useState<string>("")


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'includesString',
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  })

  return (
    <div className="w-full space-y-4">
      {/* Search Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
        <div className="relative w-full flex-col gap-3 md:flex-row flex justify-between items-center">
          <div className="w-full sm:max-w-sm border-[#D5D5D5] border-[2px] pl-2 group flex items-center rounded-2xl">
            <FaSearch className="text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search table..."
              value={globalFilter ?? ""}
              onChange={(event) => setGlobalFilter(event.target.value)}
              className="!border-none"
            />
          </div>
          {/* filter stuff and others */}
          <div className="border-[#D5D5D5] w-full flex border-[1px] items-center justify-between rounded-full px-6">
            <FilterDropdown useDate={true} filterDate={filterDate} />
            {/* reset filter */}
            <button
              className="text-sm hover:opacity-75 flex items-center gap-2 cursor-pointer"
              onClick={() => setGlobalFilter("")}
            >
              Reset
              <FaRotateLeft className="opacity-90" />
            </button>
          </div>
        </div>

        {/* Mobile: Show pagination info */}
        <div className="text-sm text-muted-foreground sm:hidden">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block">
        <div className="overflow-hidden rounded-md border relative">
          <Table>
            <TableHeader className="sticky top-0 bg-white z-10 shadow-sm">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="px-2 lg:px-4 bg-white"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="px-2 lg:px-3">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <div
              key={row.id}
              className="border rounded-lg p-4 bg-white shadow-sm"
            >
              {row.getVisibleCells().map((cell, index) => {
                const header = table.getHeaderGroups()[0]?.headers[index];
                const headerText = header
                  ? flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  : "";

                return (
                  <div
                    key={cell.id}
                    className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-sm text-gray-600 min-w-0 flex-shrink-0 mr-4">
                      {headerText}
                    </div>
                    <div className="text-sm text-right min-w-0 flex-1 break-words">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <div className="border rounded-lg p-8 text-center text-gray-500">
            No results found.
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        {/* Results info - hidden on mobile, shown in header instead */}
        <div className="hidden sm:block text-sm text-muted-foreground">
          Showing {table.getRowModel().rows.length} of{" "}
          {table.getPrePaginationRowModel().rows.length} results
        </div>

        {/* Pagination buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="text-xs px-3 py-2"
          >
            Previous
          </Button>

          {/* Page numbers for larger screens */}
          <div className="hidden sm:flex items-center space-x-1">
            <span className="text-sm">
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="text-xs px-3 py-2"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}