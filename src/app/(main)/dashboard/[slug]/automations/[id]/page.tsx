import AutomationTrigger from "@/components/automation/automationTrigger";
import React from "react";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-16 w-full">
        <AutomationTrigger />
      </div>
    </div>
  );
};

export default Page;
