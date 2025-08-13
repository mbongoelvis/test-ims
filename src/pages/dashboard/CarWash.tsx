import React from 'react'
import { Buttons } from "@/components/Buttons";
import DashBoardCard from "@/components/DashBoardCard";
import { FaMoneyBills } from 'react-icons/fa6';
import { DataTable } from "../../components/table/DataTable";
import { columns } from "@/components/table/carwash/Columns";


const data = [
  {
    id: "HR23533",
    income: "25000FCFA",
    expenses: "2000FCFA",
    totalrevenue: "25000FCFA",
    location: "Site C Car wash",
    date: "2025-03-24",
    actions: "view"
  },

  {
    id: "HR23534",
    income: "25000FCFA",
    expenses: "1000FCFA",
    totalrevenue: "50000FCFA",
    location: "Site B Car wash",
    date: "2025-04-23",
    actions: "view"
  },

  {
    id: "HR23534",
    income: "25000FCFA",
    expenses: "25000FCFA",
    totalrevenue: "25000FCFA",
    location: "Site A Car wash",
    date: "2025-02-30",
    actions: "view"
  },

];

export const CarWash = () => {
  return (
    <div>
      <div className="flex gap-0 flex-col md:flex-row md:justify-between">
        <div>
          <h1 className="font-bold text-2xl text-dsecondary">
            Car Wash Management
          </h1>
          <p className="font-medium text-sm text-dsecondary-50/50 pb-[12px] md:pb-[35px]">
            Manage the car wash services offered by your business.
          </p>
        </div>
        <div className="flex gap-2 pb-[12px] md:pb-0">
          <Buttons variant="with-plus" size="sm">
            Add Revenue
          </Buttons>
        </div>
      </div>

      <div className="w-full space-y-6 sm:space-y-8">
        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <DashBoardCard
            topLabel="Total Income"
            number={25000}
            icon={<FaMoneyBills />}
            iconBgColor="bg-[rgba(59,130,246,0.2)]"
            iconColor="text-dprimary"
            showFCFA={true}
            numberColor="text-dprimary"
            fcfaColor="text-dprimary"
          />
          <DashBoardCard
            topLabel="Total Expenses"
            number={2000}
            icon={<FaMoneyBills />}
            iconBgColor="bg-ddanger/20"
            iconColor="text-ddanger"
            showFCFA={true}
            numberColor="text-ddanger"
            fcfaColor="text-ddanger"
          />
          <DashBoardCard
            topLabel="Total Revenue"
            number={56000}
            icon={<FaMoneyBills />}
            iconBgColor="bg-dgreen/20"
            iconColor="text-dgreen"
            showFCFA={true}
            numberColor="text-dgreen"
            fcfaColor="text-dgreen"
          />
        </div>
        {/* Data Table Section */}
        <div className="w-full">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}
