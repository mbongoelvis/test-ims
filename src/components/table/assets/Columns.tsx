"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ProgressBar } from "@/components/ui/progress-bar"
import { FaEdit, FaTrash, FaEye } from "react-icons/fa"
import type { AssetTableProps } from "@/types"


export const columns: ColumnDef<AssetTableProps>[] = [
  {
    accessorKey: "material",
    header: "Material/Asset",
  },
  {
    accessorKey: "currentStock",
    header: "Current Stock Level",
  },
  {
    accessorKey: "stockLevel",
    header: "Stock Level",
    cell: ({ row }) => {
      return <ProgressBar value={row.getValue("stockLevel")} size="sm" />
    },
  },
  {
    accessorKey: "unitPrice",
    header: () => <div className="text-left">Unit Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("unitPrice"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "XAF",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
   {
    accessorKey: "totalValue",
    header: () => <div className="text-left">Total Value</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalValue"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "XAF",
      }).format(amount)
 
      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const project = row.original
      
      return (
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden w-fit">
          {/* View Details Button */}
          <button
            onClick={() => {
              console.log("View project details:", project.id)
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
              console.log("Edit project:", project.id)
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
              console.log("Delete project:", project.id)
              // Add your delete logic here
            }}
            className="flex items-center justify-center p-2 hover:bg-red-50 hover:text-red-600 text-gray-600 transition-colors duration-200"
            title="Delete"
          >
            <FaTrash color="#EF3826" className="h-4 w-4" />
          </button>
        </div>
      )
    },
  },
]



