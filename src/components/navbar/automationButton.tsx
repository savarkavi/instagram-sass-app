"use client";

import { WorkflowIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useCreateAutomation } from "@/hooks/mutations/automations/use-create-automation";

const AutomationButton = () => {
  const { mutate } = useCreateAutomation();

  return (
    <Button
      onClick={() => mutate()}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-sm text-white lg:h-10 lg:w-48"
    >
      <div className="flex w-full items-center justify-center gap-2">
        <WorkflowIcon />
        <span className="hidden lg:inline">Create Automation</span>
      </div>
    </Button>
  );
};

export default AutomationButton;
