"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import type { CarWashTableProps } from "@/types";


export const columns: ColumnDef<CarWashTableProps>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const value = row.getValue("type") as string;
      return (
        <>
          {value == "Income" ? (
            <span className="!text-green-500 py-2 px-3 rounded-lg bg-green-100">
              {value}
            </span>
          ) : (
            <span className="!text-dred py-2 px-3 rounded-lg bg-red-100">
              {value}
            </span>
          )}
        </>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const value = row.getValue("category") as string;
      return (
        <span className="p-2 bg-gray-100 rounded-lg text-sm font-normal">
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const value = row.getValue("description") as string;
      return <span className="text-wrap text-center">{value}</span>;
    },
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => {
      const value = row.getValue("project") as string;
      return <span className="text-wrap text-center">{value}</span>;
    },
  },
  {
    accessorKey: "receiver",
    header: "Receiver",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const value = row.getValue("amount") as string;
      return <span>{value} XAF</span>;
    },
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
