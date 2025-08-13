import { Modal } from "@/components/Modals/Modal";
import ScreenHeader from "@/components/ScreenHeader";
import React from "react";
import { financeCard } from "@/constants/financeCard";
import DashBoardCard from "@/components/DashBoardCard.js";
import { FilterDropdown } from "@/components/FilterDropdown";
import { ProjectProgress } from "@/components/projectProgressComponent/ProjectProgress";
import { projectProgress } from "@/constants/projectProgress";
import { ChartPie } from "@/components/chart/ChartPie";
import { AddFinanceCategories } from "@/components/popus/AddFinanceCategories";
import { DataTable } from "@/components/table/DataTable";
import { columns } from "@/components/table/FinanceTransactions/Columns";

export const Finance = () => {
  // filter data
  const filterData = ["Expenses", "Income"];
  // date data
  const data = [
    {
      type: "Income",
      category: "Consulting Fees",
      description: "Contribution from partner A",
      project: "Brand Awareness",
      receiver: "Office Depot",
      date: "2025-02-10",
      amount: "77871",
      actions: "view",
    },
    {
      type: "Income",
      category: "Sales Revenue",
      description: "Contribution from partner A",
      project: "New Product Development",
      receiver: "Grand Hotel",
      date: "2025-04-24",
      amount: "71274",
      actions: "view",
    },
    {
      type: "Expenses",
      category: "Office Supplies",
      description: "Monthly electricity bill",
      project: "Office Management",
      receiver: "Eneo Cameroon",
      date: "2025-05-26",
      amount: "55711",
      actions: "view",
    },
    {
      type: "Income",
      category: "Rental Income",
      description: "Payment for expert advisory services",
      project: "General Operations",
      receiver: "Mr Samuel",
      date: "2025-12-11",
      amount: "69100",
      actions: "view",
    },
    {
      type: "Expenses",
      category: "Salaries & Wages",
      description: "Office rent for August",
      project: "Market Expansion Study",
      receiver: "Shareholders Trust",
      date: "2025-01-07",
      amount: "37291",
      actions: "view",
    },
    {
      type: "Expenses",
      category: "Utilities",
      description: "Office rent for August",
      project: "Brand Awareness",
      receiver: "ABC Enterprises",
      date: "2025-11-03",
      amount: "21626",
      actions: "view",
    },
    {
      type: "Income",
      category: "Grant Funding",
      description: "Revenue from online course sales",
      project: "Highway Extension Phase 2",
      receiver: "Mr Samuel",
      date: "2025-10-05",
      amount: "16018",
      actions: "view",
    },
    {
      type: "Income",
      category: "Partner Contributions",
      description: "Payment for expert advisory services",
      project: "Software Upgrade",
      receiver: "ABC Enterprises",
      date: "2025-08-07",
      amount: "8058",
      actions: "view",
    },
    {
      type: "Expenses",
      category: "Equipment Maintenance",
      description: "Monthly electricity bill",
      project: "General Operations",
      receiver: "Building Supplies Co",
      date: "2025-01-26",
      amount: "7167",
      actions: "view",
    },
    {
      type: "Income",
      category: "Partner Contributions",
      description: "Contribution from partner A",
      project: "Financial Growth",
      receiver: "Innovate Corp",
      date: "2025-11-25",
      amount: "86350",
      actions: "view",
    },
  ];
  return (
    <div className="w-full min-h-screen">
      {/* ============= header for the finance page =========== */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center">
        <ScreenHeader
          title="Financial Management"
          subtitle="Track funds income and expenses across all projects"
        />
        <Modal
          buttonName="Add Finance"
          btnName="Add Record"
          heading="Add Finance Category"
          buttonIcon={true}
          subHeading="Add a new finance category"
        >
          {/* income category form */}
          <AddFinanceCategories />
        </Modal>
      </div>
      {/* ============= financial card ============= */}
      <div className="w-full grid-cols-1 gap-3 grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 mt-5">
        {financeCard.map((item, index) => {
          return (
            <DashBoardCard
              iconColor={item.iconColor}
              iconBgColor={item.iconBgColor}
              numberColor={item.numberColor}
              key={index}
              topLabel={item.title}
              number={item.amount}
              bottomLabel={item.bottomLabel}
              icon={item.icon}
            />
          );
        })}
      </div>

      {/* ========= few project details ========== */}
      <div className="grid grid-row-2 md:grid-rows-1 grid-cols-1 md:grid-cols-3 md:min-h-[250px] mt-5 md:gap-5">
        {/* projects */}
        <div
          className="col-span-2 p-3 bg-white rounded-xl"
          style={{
            boxShadow: "6px 6px 54px rgba(0, 0, 0, 0.09)",
          }}
        >
          <h3 className="text-xl font-semibold">Project Budget Utilization</h3>
          <div className="mt-4">
            {projectProgress?.map((project, index) => (
              <ProjectProgress
                key={index}
                projectName={project.projectName}
                progressPercentage={project.progressPercentage}
                amount={project.amount}
              />
            ))}
          </div>
        </div>
        {/* finance category */}
        <div
          className="col-span-1 md:col-span-1 mt-3 md:mt-0 p-3 text-xl font-semibold bg-blue rounded-xl"
          style={{
            boxShadow: "6px 6px 54px rgba(0, 0, 0, 0.09)",
          }}
        >
          <div className="flex ">
            <h3>Finance categories</h3>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
          {/* pi chart section */}
          <div className="mt-2">
            <p className="text-sm text-dsecondary-50 font-normal">
              Income sources
            </p>
            <div className="flex-1">
              <ChartPie />
            </div>
          </div>
        </div>
      </div>

      {/* ========== finance table ========== */}
      <div className="mt-7">
        <DataTable columns={columns} filterData={filterData} data={data} />
      </div>
    </div>
  );
};
