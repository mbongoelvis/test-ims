import React from 'react'
import { InputField } from '../InputField';
import { FilterDropdown } from '../FilterDropdown';

export const AddFinanceCategories = () => {
  const data = ["Expenses", "Income"];
  return (
    <div className="mt-5">
      {/* heading */}
      <form>
        <div className="grid grid-cols-2 gap-2">
          <div className="w-full ">
            <p className="text-sm font-medium text-gray-700">Finance Type</p>
            <FilterDropdown
              filterData={data}
              className="rounded-md border-2 w-full px-2 mt-1 h-9 border-dsecondary-20"
            />
          </div>
          <InputField
            id='mimbo'
            label="Finance Category"
            placeholder="Enter category name"
          />
        </div>
        {/* description */}
        <div className="mt-5">
          <label
            htmlFor="Description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            className="w-full border-2 border-dsecondary-20 rounded-md min-h-[100px] p-1 text-sm"
            name="description"
            id="description"
            placeholder="Category description"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
