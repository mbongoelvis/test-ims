/*
  // Usage examples:
  <Buttons variant="with-plus">Add Item</Buttons>
  <Buttons variant="without-plus">Submit</Buttons>
  <Buttons variant="transparent">Cancel</Buttons>

  // With loading state:
  <Buttons variant="with-plus" isLoading loadingText="Adding...">Add Item</Buttons>

  // With different sizes:
  <Buttons variant="with-plus" size="sm">Small Plus Button</Buttons>
  <Buttons variant="without-plus" size="lg">Large Button</Buttons>

*/



import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";
import { FaPlus, FaUpload, FaTrash } from "react-icons/fa6";

export const Buttons: React.FC<ButtonProps> = ({
  variant,
  size,
  padding,
  isLoading,
  loadingText,
  className,
  children,
  ...props
}) => {
  // Define button variants and sizes

  const getButtonVariant = () => {
    switch (variant) {
      case 'with-plus':
        return 'default';
      case 'with-upload':
        return 'default';
      case 'with-delete':
        return 'default';
      case 'without-plus':
        return 'default';
      case 'transparent':
        return 'ghost';
      case 'secondary':
        return 'default';
      default:
        return 'default';
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'sm':
        return 'sm';
      case 'md':
        return 'default';
      case 'lg':
        return 'lg';
      default:
        return 'default';
    }
  };
  // Combine classes for the button
  const buttonClasses = cn(
    // Custom colors for default buttons
    (variant === 'with-plus' || variant === 'with-upload' || variant === 'without-plus') &&
      'bg-dprimary hover:bg-dprimary/70 hover:cursor-pointer text-white duration-300',

    // Custom colors for delete button
    variant === 'with-delete' &&
      'bg-ddanger hover:bg-ddanger/70 hover:cursor-pointer duration-300',

    // Transparent button styles
    variant === 'transparent' &&
      'bg-transparent hover:bg-ddanger hover:text-white hover:border-none hover:cursor-pointer border border-dsecondary-50 text-dsecondary duration-300 hover:border-ddanger',

    // Secondary (black) button styles
    variant === 'secondary' &&
      'bg-dsecondary hover:bg-dsecondary/70 hover:cursor-pointer text-white duration-300',

    padding && padding,
    className
  );

  return (
      <Button
        variant={getButtonVariant()}
        size={getButtonSize()}
        disabled={isLoading}
        className={buttonClasses}
        {...props}
      >
        {isLoading ? (
          <span>{loadingText || 'Loading...'}</span>
        ) : (
          <>
            {variant === 'with-plus' && <FaPlus className="w-4 h-4 mr-1" />}
            {variant === 'with-upload' && <FaUpload className="w-4 h-4 mr-1" />}
            {variant === 'with-delete' && <FaTrash className="w-4 h-4 mr-1" />}
            {/* No icon for secondary variant */}
            {children}
          </>
        )}
      </Button>
   );
 };
