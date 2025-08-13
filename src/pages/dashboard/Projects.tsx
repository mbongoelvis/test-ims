import { useEffect, useState } from "react";
import DashBoardCard from "@/components/DashBoardCard";
import { columns, type Project } from "../../components/table/projects/Columns";
import { DataTable } from "../../components/table/DataTable";
import { FaMoneyCheck, FaBriefcase, FaUsers } from "react-icons/fa6";

async function getData(): Promise<Project[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      code: "PRJ001",
      name: "Downtown Office Complex",
      progress: 75,
      budget: 2500000,
      location: "New York, NY",
      status: "Inprogress",
      actions: "View Details"
    },
     {
      id: "489df34a",
      code: "PRJ002", 
      name: "Residential Tower",
      progress: 45,
      budget: 1800000,
      location: "Los Angeles, CA",
      status: "On Hold",
      actions: "View Details"
    },
       {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },
      {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },  {
      id: "489df64c",
      code: "PRJ005", 
      name: "Hotel Renovation",
      progress: 20,
      budget: 1300000,
      location: "Bamenda",
      status: "Completed",
      actions: "View Details"
    },
  ];
}

export const Projects = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const projectData = await getData();
        setData(projectData);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setData([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* Dashboard Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        <DashBoardCard
          topLabel="Total Inventory"
          number={10}
          bottomLabel="Projects in the works"
          icon={<FaBriefcase />}
          iconBgColor="bg-[rgba(254,197,61,0.2)]"
          iconColor="text-dtertiary"
        />
        <DashBoardCard
          topLabel="Total Budget"
          number={20000}
          bottomLabel="Across all projects"
          icon={<FaMoneyCheck />}
          iconBgColor="bg-[rgba(59,130,246,0.2)]"
          iconColor="text-dprimary"
          showFCFA={true}
        />
        <DashBoardCard
          topLabel="Team Members"
          number={20}
          bottomLabel="Across all pojects"
          icon={<FaUsers />}
          iconBgColor="bg-[rgba(209,255,186,0.2)]"
          iconColor="text-dgreen"
        />
      </div>
      
      {/* Data Table Section */}
      <div className="w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};
