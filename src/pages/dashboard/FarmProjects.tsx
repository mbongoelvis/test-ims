import { useEffect, useState } from "react";
import DashBoardCard from "@/components/DashBoardCard";
import { columns } from "@/components/table/farm/Columns";
import { DataTable } from "../../components/table/DataTable";
import {
  FaChartLine,
  FaMoneyBill1,
  FaMoneyBillTrendUp,
} from "react-icons/fa6";
import type { FarmProjectProps } from "@/types";
import { Buttons } from "@/components/Buttons";
import ScreenHeader from "@/components/ScreenHeader";

// Dummy data based on FarmProjectProps type definition
async function getData(): Promise<FarmProjectProps[]> {
  return [
    {
      id: "FP-001",
      name: "Green Valley Expansion",
      dateStarted: "2025-01-15",
      progress: 75,
      income: 1200000,
      expenditure: 800000,
      location: "Green Valley Farm",
      actions: "View",
    },
    {
      id: "FP-002",
      name: "Sunrise Irrigation Upgrade",
      dateStarted: "2025-03-01",
      progress: 40,
      income: 800000,
      expenditure: 500000,
      location: "Sunrise Farm",
      actions: "View",
    },
    {
      id: "FP-003",
      name: "Westfield Organic Pilot",
      dateStarted: "2025-02-10",
      progress: 100,
      income: 500000,
      expenditure: 450000,
      location: "Westfield Farm",
      actions: "View",
    },
    {
      id: "FP-004",
      name: "Riverbend Soil Restoration",
      dateStarted: "2025-04-05",
      progress: 60,
      income: 950000,
      expenditure: 700000,
      location: "Riverbend Farm",
      actions: "View",
    },
  ];
}

export const FarmProjects = () => {
  const [data, setData] = useState<FarmProjectProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const assetData = await getData();
        setData(assetData);
      } catch (error) {
        console.error("Error fetching assets:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading farm projects...</div>
      </div>
    );
  }

  return (
    <>
      <ScreenHeader
        title="Farm Management"
        subtitle="welcome back, elvis. Here's what happening with your system"
        buttons={[
          <Buttons variant="with-plus" size="sm">
            Add Project
          </Buttons>
        ]}
      />
      <div className="w-full space-y-6 sm:space-y-8">
        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <DashBoardCard
            topLabel="Total Income"
            number={25000}
            bottomLabel="Across all farm projects"
            icon={<FaMoneyBillTrendUp />}
            iconBgColor="bg-[rgba(254,197,61,0.2)]"
            iconColor="text-dtertiary"
            showFCFA={true}
          />
          <DashBoardCard
            topLabel="Total Expenses"
            number={495000}
            bottomLabel="Across all farm projects"
            icon={<FaMoneyBill1 />}
            iconBgColor="bg-[rgba(59,130,246,0.2)]"
            iconColor="text-dprimary"
            showFCFA={true}
          />
          <DashBoardCard
            topLabel="Total Revenue"
            number={200000}
            bottomLabel="Across all farm projects"
            icon={<FaChartLine />}
            iconBgColor="bg-[rgba(209,255,186,0.2)]"
            iconColor="text-dgreen"
            showFCFA={true}
          />
        </div>

        {/* Data Table Section */}
        <div className="w-full">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};
