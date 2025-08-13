import * as React from 'react'
import { InputField } from '../InputField'
import { ChevronDownIcon } from "lucide-react";
import { Button } from '../ui/button';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Buttons } from '../Buttons';

export const CreateReminder = () => {
  return (
    <div className="mt-4 font-semibold">
      <h3 className="text-lg">Create New Reminder</h3>
      {/* reminder form */}
      <form className="mt-4">
        {/* title */}
        <div>
          <label>Title</label>
          <InputField
            id="title"
            placeholder="Enter Reminder title"
            className="h-10"
          />
        </div>
        {/* time and date */}
        <div>
          {/* time and date picker */}
          <div>
            <DatePickerAndTime />
          </div>
        </div>
        {/* description */}
        <div className="mt-3">
          <label htmlFor="description" className="text-md font-semibold">
            Description
          </label>
          <Textarea
            id="description"
            placeholder="Enter Reminder description"
            className="!border-2 focus:!border-ring-none !border-dsecondary-20 focus:!border-dprimary mt-2"
          />
        </div>
        {/* create button */}
        <Buttons variant="without-plus" className="w-full mt-4 mb-12 h-10">
          Create Reminder
        </Buttons>
      </form>
    </div>
  );
}

// date picker component
const DatePickerAndTime = () => {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);

    return (
      <div className="flex gap-3 w-full flex-col md:flex-row mt-3 z-90">
        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="date-picker" className="text-md font-semibold">
            Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date-picker"
                className="w-full border-2 !h-10 cursor-pointer text !border-dsecondary-20 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
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
        <div className="flex flex-col w-full gap-3">
          <Label htmlFor="time-picker" className="text-md font-semibold">
            Time
          </Label>
          <Input
            type="time"
            id="time-picker"
            step="1"
            defaultValue="10:30:00"
            onChange={(e) => console.log(e.target.value)}
            className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden !border-dsecondary-20 [&::-webkit-calendar-picker-indicator]:appearance-none h-10"
          />
        </div>
      </div>
    );
  }