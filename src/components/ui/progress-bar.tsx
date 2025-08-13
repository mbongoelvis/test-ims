interface ProgressBarProps {
  value: number
  max?: number
  showPercentage?: boolean
  size?: "sm" | "md" | "lg"
  color?: "blue" | "green" | "orange" | "red" | "purple"
  className?: string
}

const sizeConfig = {
  sm: {
    height: "h-1 sm:h-1.5",
    text: "text-[8px] sm:text-[10px]",
    padding: "px-1"
  },
  md: {
    height: "h-1.5 sm:h-2 md:h-2.5",
    text: "text-[9px] sm:text-[10px] md:text-xs",
    padding: "px-1 sm:px-1.5"
  },
  lg: {
    height: "h-2 sm:h-2.5 md:h-3",
    text: "text-[10px] sm:text-xs md:text-sm",
    padding: "px-1.5 sm:px-2"
  }
}

const colorConfig = {
  blue: {
    bg: "bg-blue-100",
    fill: "bg-gradient-to-r from-blue-400 to-blue-600",
    text: "text-blue-700"
  },
  green: {
    bg: "bg-green-100",
    fill: "bg-gradient-to-r from-green-400 to-green-600",
    text: "text-green-700"
  },
  orange: {
    bg: "bg-orange-100",
    fill: "bg-gradient-to-r from-orange-400 to-orange-600",
    text: "text-orange-700"
  },
  red: {
    bg: "bg-red-100",
    fill: "bg-gradient-to-r from-red-400 to-red-600",
    text: "text-red-700"
  },
  purple: {
    bg: "bg-purple-100",
    fill: "bg-gradient-to-r from-purple-400 to-purple-600",
    text: "text-purple-700"
  }
}

export function ProgressBar({ 
  value, 
  max = 100, 
  showPercentage = true, 
  size = "md", 
  color = "blue",
  className = "" 
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const sizeClasses = sizeConfig[size]
  const colorClasses = colorConfig[color]
  
  // Determine color based on percentage if using default blue
  const getColorByProgress = (percent: number) => {
    if (color !== "blue") return colorClasses
    
    if (percent >= 80) return colorConfig.green
    if (percent >= 60) return colorConfig.blue
    if (percent >= 40) return colorConfig.orange
    return colorConfig.red
  }
  
  const progressColor = getColorByProgress(percentage)
  
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {/* Percentage Text */}
      {showPercentage && (
        <span 
          className={`${sizeClasses.text} ${progressColor.text} font-medium whitespace-nowrap mb-1 sm:mb-1.5 text-left`}
        >
          {Math.round(percentage)}%
        </span>
      )}
      
      {/* Progress Bar */}
      <div className={`w-full rounded-full overflow-hidden ${progressColor.bg} ${sizeClasses.height}`}>
        <div
          className={`${sizeClasses.height} ${progressColor.fill} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export type { ProgressBarProps }
