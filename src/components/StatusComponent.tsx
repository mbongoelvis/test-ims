type StatusVariant = "Inprogress" | "Completed" | "Rejected" | "On Hold"

interface StatusProps {
  status: StatusVariant
  className?: string
}

const statusConfig: Record<StatusVariant, {
  label: string
  className: string
}> = {
  "Inprogress": {
    label: "In Progress",
    className: "bg-dlight-violet/71 text-dviolet  hover:bg-dlight-violet/30"
  },
  "Completed": {
    label: "Completed",
    className: "bg-dlight-green/54 text-dgreen  hover:bg-dlight-green/30"
  },
  "Rejected": {
    label: "Rejected",
    className: "bg-dlight-red/54 text-dred  hover:bg-dlight-red/30"
  },
  "On Hold": {
    label: "On Hold",
    className: "bg-dlight-red/54 text-dred  hover:bg-dlight-red/30"
  }
}

export function Status({ status, className = "" }: StatusProps) {
  const config = statusConfig[status]
  
  const baseClasses = "inline-flex items-center justify-center rounded-[6px] sm:rounded-[8px] md:rounded-[10px] px-2 sm:px-3 md:px-[15px] py-1 sm:py-1.5 md:py-2 text-[10px] sm:text-xs md:text-[10px] font-medium sm:font-medium transition-colors duration-200 whitespace-nowrap"
  const combinedClasses = `${baseClasses} ${config.className} ${className}`
  
  return (
    <span className={combinedClasses}>
      {config.label}
    </span>
  )
}

export type { StatusVariant }
