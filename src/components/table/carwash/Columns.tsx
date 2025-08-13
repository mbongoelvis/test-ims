"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import type { CarWashTableProps } from "@/types";


export const columns: ColumnDef<CarWashTableProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "income",
    header: "Income",
    cell: ({row}) => {
      const value = row.getValue("income") as string;
      return <span className="!text-dprimary">{value}</span>;
    }
  },
  {
    accessorKey: "expenses",
    header: "Expenses",
    cell: ({row}) => {
      const value = row.getValue("expenses") as string;
      return <span className="!text-ddanger">{value}</span>;
    }
  },
  {
    accessorKey: "totalrevenue",
    header: "Total Revenue",
    cell: ({row}) => {
      const value = row.getValue("totalrevenue") as string;
      return <span className="!text-dgreen">{value}</span>;
    }
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const carwashRecord = row.original;

      return (
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden w-fit">
          {/* View Details Button */}
          <button
            onClick={() => {
              console.log("View carwash details:", carwashRecord.id);
              // Add your view details logic here
            }}
            className="flex items-center justify-center p-2 hover:bg-green-50 hover:text-green-600 text-gray-600 transition-colors duration-200"
            title="View details"
          >
            <FaEye className="h-4 w-4" />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200"></div>

          {/* Edit Button */}
          <button
            onClick={() => {
              console.log("Edit carwash record:", carwashRecord.id);
              // Add your edit logic here
            }}
            className="flex items-center justify-center p-2 hover:bg-blue-50 hover:text-blue-600 text-gray-600 transition-colors duration-200"
            title="Edit"
          >
            <FaEdit className="h-4 w-4" />
          </button>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-200"></div>

          {/* Delete Button */}
          <button
            onClick={() => {
              console.log("Delete carwash record:", carwashRecord.id);
              // Add your delete logic here
            }}
            className="flex items-center justify-center p-2 hover:bg-red-50 hover:text-red-600 text-gray-600 transition-colors duration-200"
            title="Delete"
          >
            <FaTrash color="#EF3826" className="h-4 w-4" />
          </button>
        </div>
      );
    },
  },
];
