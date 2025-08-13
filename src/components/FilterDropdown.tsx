import React, { useEffect } from "react";
import { FaFilter } from "react-icons/fa6";
import { ChevronDownIcon, Divide } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterDropdownProps {
  filterData: string[];
  selected: string;
  onSelectFilter: (value: string) => void;
  className: string;
  useDate: boolean;
}

export const FilterDropdown = ({ filterData, useDate, selected, onSelectFilter, className}: FilterDropdownProps) => {
  const [selectedValue, setSelectedValue] = React.useState<string>(
    selected || filterData[0]
  );

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected, filterData]);

  // Handle change and immediately send the value to the parent
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue); // Update internal state for UI
    onSelectFilter(newValue); // <--- Send value to parent
  };

  return (
    <div className="flex justify w-full">
      <div className={className}>
        <select
          name="userFilter"
          id="userFilter"
          className="cursor-pointer bg-white hover:opacity-75 text-[14px] opacity-95 w-full h-full"
          onChange={handleChange}
          value={selectedValue}
        >
          {filterData?.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* date */}
      {useDate && <CalendarComponent />}
    </div>
  );
};

// date component
export function CalendarComponent() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="!border-0 hover:!bg-white hover:opacity-75 cursor-pointer !shadow-none gap-3 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
