// src/components/InputField.tsx

/*
    * InputField component for reusable input fields with optional icons and error messages.
    * This component is designed to work with shadcn/ui's Label and Input components.
    * It supports custom widths and integrates well with form validation.
    * 
    * Props:
    * - label: Optional label for the input field. 
    * - id: Unique identifier for the input field (required for accessibility).
    * - icon: Optional icon to display inside the input field.
    * - errorMessage: Optional error message to display below the input field.
    * - width: Custom width for the input field (e.g., "w-full", "w-1/2", "max-w-md").
    *  - className: Additional classes for styling.
    * - type: Input type (default is 'text').
    * - ...props: Other input attributes (e.g., placeholder, onChange).
    * 
    * @Example usage:
    * <InputField
    *  id="email"
    *  label="Email Address"
    *  placeholder="you@example.com"
    *  type="email"
    *  value={formData.email}
    *  onChange={handleChange}
    *  errorMessage={errors.email}
    *  icon={<MailIcon />}
    * />
*/

import * as React from 'react';
import { Label } from '@/components/ui/label'; // shadcn/ui's Label
import { Input } from '@/components/ui/input'; // shadcn/ui's Input
import { cn } from '@/lib/utils'; // Utility for conditional class names (shadcn/ui provides this)
import type { InputFieldProps } from '@/types';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';


export const InputField: React.FC<InputFieldProps> = ({ label, id, icon, errorMessage, width, type = 'text', className, ref, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Determine the actual input type based on password visibility
  const inputType = type === 'password' && showPassword ? 'text' : type;

  // Determine if we should show the password toggle icon
  const showPasswordToggle = type === 'password';

  // Determine padding based on icon presence and type
  const getInputPadding = () => {
    if (showPasswordToggle) {
      return icon ? 'pl-10 pr-10' : 'pr-10'; // Space for both icons or just password toggle
    } else if (icon) {
      return 'pl-10'; // Space for left icon only
    }
    return ''; // No extra padding
  };

  return (
    <div className={cn("space-y-1", width)}>
      {label && (
        <Label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}
      <div className="relative">
        {/* Left icon (for non-password fields or password fields with additional icons) */}
        {icon && !showPasswordToggle && (
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none px-3">
            {icon}
          </div>
        )}

        {/* Left icon for password fields */}
        {icon && showPasswordToggle && (
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none px-3">
            {icon}
          </div>
        )}

        {/* Password visibility toggle (always on the right for password fields) */}
        {showPasswordToggle && (
          <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="cursor-pointer hover:text-gray-700 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>
        )}

        <Input
          type={inputType}
          id={id}
          ref={ref}
          className={cn(
            'block w-full rounded-md border-dsecondary-20 placeholder:font-normal focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
            getInputPadding(), // Dynamic padding based on icons
            errorMessage ? 'border-red-500 focus:ring-red-500' : '', // Error styling
            className
          )}
          aria-invalid={errorMessage ? 'true' : 'false'} // ARIA attribute for accessibility
          aria-describedby={errorMessage ? `${id}-error` : undefined} // Link error message
          {...props}
        />
      </div>
      {errorMessage && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  );
};