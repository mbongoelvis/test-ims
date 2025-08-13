import type { ColumnDef } from "@tanstack/react-table"
import { Status, type StatusVariant } from "@/components/StatusComponent"
import { ProgressBar } from "@/components/ui/progress-bar"
import { FaSort } from "react-icons/fa6"
import { FaEdit, FaTrash, FaEye } from "react-icons/fa"
import { Button } from "@/components/ui/button"


// This type is used to define the shape of our data.
export type Project = {
  id: string
  code: string
  name: string
  progress: number
  budget: number
  location: string
  status: StatusVariant
  actions?: React.ReactNode
}

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="!px-0 !py-0 hover:bg-transparent justify-start h-auto min-h-0 font-semibold text-left cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <FaSort className="" style={{ fontSize: '12px', width: '12px', height: '12px' }}/>
        </Button>
      )
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      return <ProgressBar value={row.getValue("progress")} size="sm" />
    },
  },
  {
    accessorKey: "budget",
     header: () => <div className="text-left">Budget</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("budget"))
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Status status={row.getValue("status")} />
    },
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



