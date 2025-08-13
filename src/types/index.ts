export interface DashBoardCardProps {
  topLabel: string;
  number: string | number;
  bottomLabel?: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  showFCFA?: boolean;
  formatNumber?: boolean;
  numberColor?: string;
  fcfaColor?: string;
}

// Define the props for the InputField component
export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string; // id is crucial for accessibility (linking label to input)
  icon?: React.ReactNode; // Optional icon element
  errorMessage?: string; // Message to display if validation fails
  // Prop for customizable width
  width?: string; // e.g., "w-full", "w-1/2", "max-w-md", "w-[300px]" etc.
  ref?: React.Ref<HTMLInputElement>;
}

// Props for the button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "with-plus"
    | "without-plus"
    | "transparent"
    | "with-upload"
    | "with-delete"
    | "secondary";
  size?: "sm" | "md" | "lg";
  padding?: string; // e.g., "py-2", "px-4"
  isLoading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
}

// Props for upcoming events component
export interface UpcomingEventsProps {
  events?: Array<{
    id: string;
    title: string;
    date: string;
    time: string;
  }>;
  maxEvents?: number; // Maximum number of events to display
  className?: string; // Additional classes for styling
}

//Props for asset table columns
export interface AssetTableProps {
  id: string; // Unique identifier for the column
  material: string;
  currentStock: string;
  stockLevel: number;
  unitPrice: number;
  totalValue: number;
  location: string;
  actions?: React.ReactNode; // Optional actions column for buttons or links
}

export interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  buttons?: React.ReactNode;
  actions?: React.ReactNode; // Optional actions column for buttons or links 
}

//Props for carwash table columns
export interface CarWashTableProps {
  id: string;
  income: string;
  expenses: string;
  totalrevenue: string;
  location: string;
  date: string;
  actions: string;
}

// Props for project progress component
export interface ProjectProgressProps {
  projectName: string;
  progressPercentage: number;
  amount: string;
}
export interface FarmProjectProps {
  id: string; // Unique identifier for the column
  name: string;
  dateStarted: string;
  progress: number;
  income: number;
  expenditure: number;
  location: string;
  actions?: React.ReactNode; // Optional actions column for buttons or links
}