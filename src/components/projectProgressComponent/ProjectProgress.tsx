import React from "react";
import type { ProjectProgressProps } from "@/types";

export const ProjectProgress = ({
  projectName,
  progressPercentage,
  amount,
}: ProjectProgressProps) => {
  return (
    <div className="w-full min-h-12">
      {/* heading section */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-dsecondary-50">{projectName}</p>
        <div className="flex gap-2">
          <p className="text-sm text-dsecondary-50">{progressPercentage}%</p>
          <p className="text-sm text-dsecondary-50">{amount}</p>
        </div>
      </div>
      <div>
        <div className="w-full h-2 bg-[#E5E7EB] rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-dprimary"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
