import { useEffect, useState } from "react";
import DashBoardCard from "@/components/DashBoardCard";
import { columns } from "@/components/table/assets/Columns";
import { DataTable } from "../../../components/table/DataTable";
import {
  FaBoxesStacked,
  FaTriangleExclamation,
  FaWarehouse,
} from "react-icons/fa6";
import type { AssetTableProps } from "@/types";
import ScreenHeader from "@/components/ScreenHeader";
import { Modal } from "@/components/Modals/Modal";
import { InputField } from "@/components/InputField";

// Dummy data based on AssetTableProps type definition
async function getData(): Promise<AssetTableProps[]> {
  return [
    {
      id: "1",
      material: "Cement",
      currentStock: "100 bags",
      stockLevel: 100,
      unitPrice: 3500,
      totalValue: 350000,
      location: "Warehouse A",
      actions: "View",
    },
    {
      id: "2",
      material: "Steel Rods",
      currentStock: "50 bundles",
      stockLevel: 50,
      unitPrice: 12000,
      totalValue: 600000,
      location: "Warehouse B",
      actions: "View",
    },
    {
      id: "3",
      material: "Bricks",
      currentStock: "5000 pcs",
      stockLevel: 5000,
      unitPrice: 100,
      totalValue: 500000,
      location: "Site 1",
      actions: "View",
    },
    {
      id: "4",
      material: "Sand",
      currentStock: "20 tons",
      stockLevel: 20,
      unitPrice: 25000,
      totalValue: 500000,
      location: "Site 2",
      actions: "View",
    },
  ];
}

export const Assets = () => {
  const [data, setData] = useState<AssetTableProps[]>([]);
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
        <div className="text-gray-500">Loading assets...</div>
      </div>
    );
  }

  return (
    <>
      <ScreenHeader
        title="Asset & Material Management"
        subtitle="Track construction material, tools and equipment across all sites"
        buttons={[
          <Modal
            icon={false}
            buttonIcon={false}
            btnName="Restock Items"
            heading="Restock Materials"
            subHeading="Add stock to existing materials"
            buttonName="Add Stock"
            triggerBgColor="dsecondary"
          >
            <form className="grid grid-cols-2 gap-4">
              <InputField id="restockItem" label="Select Material" placeholder="Dangote Cement (450bags)" />
              <InputField id="quantity" label="Quantity to add" placeholder="0" type="number" />
              <InputField id="unitCost" label="Unit Cost" placeholder="0.00" type="number" />
              <InputField id="supplier" label="Supplier" placeholder="Supplier name" />
              <InputField id="storage" label="Storage Location" placeholder="Site # warehouse" />
              <InputField id="date" label="Date" placeholder="Select date" type="date" />
            </form>
          </Modal>,
          <Modal
            icon={false}
            buttonIcon={false}
            btnName="Add Material"
            heading="Add New Material/Asset"
            subHeading="Register a new material, tool, or equipment in the system"
            buttonName="Add Stock"
          >
            <form className="grid grid-cols-2 gap-4">
              <InputField id="materialName" label="Material Name" placeholder=".e.g. Dangote Cement" />
              <InputField id="measurementUnit" label="Unit of Measurement" placeholder="e.g. bags, tons" type="text" />
              <InputField id="initialStock" label="Initial Stock" placeholder="0" type="number" />
              <InputField id="minimumStock" label="Minimum Stock" placeholder="0" type="number" />
              <InputField id="maximumStock" label="Maximum Stock" placeholder="0" type="number" />
              <InputField id="unitPrice" label="Unit Price" placeholder="0.00" type="number" />
              <InputField id="primarySupplier" label="Primary Supplier" placeholder="Supplier name" />
              <InputField id="storageLocation" label="Storage Location" placeholder="Select location" />
              <InputField id="category" label="Category" placeholder="select Category" />

            </form>
          </Modal>,
        ]}
      />
      <div className="w-full space-y-6 sm:space-y-8">
        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <DashBoardCard
            topLabel="Total Inventory Value"
            number={700000}
            bottomLabel="Current stock value"
            icon={<FaWarehouse />}
            iconBgColor="bg-[rgba(254,197,61,0.2)]"
            iconColor="text-dtertiary"
            showFCFA={true}
            numberColor="text-dblack"
            fcfaColor="text-gray-600"
          />
          <DashBoardCard
            topLabel="Total Items"
            number={495}
            bottomLabel="Tracked materials"
            icon={<FaBoxesStacked />}
            iconBgColor="bg-[rgba(59,130,246,0.2)]"
            iconColor="text-dprimary"
            showFCFA={true}
            numberColor="text-dblack"
            fcfaColor="text-gray-600"
          />
          <DashBoardCard
            topLabel="Low Stock Items"
            number={20}
            bottomLabel="Need restocking"
            icon={<FaTriangleExclamation />}
            iconBgColor="bg-[rgba(209,255,186,0.2)]"
            iconColor="text-dgreen"
            numberColor="text-dblack"
            fcfaColor="text-gray-600"
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
