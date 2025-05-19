"use client";

import React, { useState } from "react";
import { CheckIcon, CircleAlertIcon, CirclePlusIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { AUTOMATION_TRIGGERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const AutomationTrigger = () => {
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [isTriggerDilogOpen, setIsTriggerDilogOpen] = useState(false);

  const handleSelectTrigger = (type: string) => {
    if (selectedTriggers.find((t) => t === type)) {
      setSelectedTriggers((selectedTriggers) =>
        selectedTriggers.filter((t) => t !== type),
      );
    } else {
      setSelectedTriggers((selectedTriggers) => [...selectedTriggers, type]);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded-xl border bg-[#202020] px-4 py-6">
      <div className="flex items-center gap-2">
        <CircleAlertIcon color="#3352CC" />
        <p>When...</p>
      </div>
      <DropdownMenu
        open={isTriggerDilogOpen}
        onOpenChange={setIsTriggerDilogOpen}
      >
        <DropdownMenuTrigger asChild>
          <Button
            className="flex cursor-pointer items-center gap-2 border-2 border-dotted border-[#3352CC] py-6"
            variant="ghost"
            onClick={() => setIsTriggerDilogOpen(true)}
          >
            <CirclePlusIcon color="#3352CC" />
            <span>Add Trigger</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col gap-3 p-4">
          <DropdownMenuLabel>Select one or more options</DropdownMenuLabel>
          {AUTOMATION_TRIGGERS.map((item) => {
            const isSelected = !!selectedTriggers.find((t) => t === item.type);
            const Icon = item.icon;

            return (
              <DropdownMenuItem
                key={item.id}
                className={cn(
                  "flex cursor-pointer flex-col items-start gap-2 p-4",
                  isSelected
                    ? "bg-[#3352CC] focus:bg-[#3352CC]"
                    : "bg-[#202020]",
                )}
                onClick={() => handleSelectTrigger(item.type)}
                onSelect={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-4">
                  <Icon color={isSelected ? "#fff" : "#3352CC"} />
                  <p className="text-lg">{item.label}</p>
                  {isSelected && <CheckIcon color="#fff" />}
                </div>
                <p
                  className={cn(
                    "text-sm",
                    isSelected ? "text-white" : "text-gray-400",
                  )}
                >
                  {item.description}
                </p>
              </DropdownMenuItem>
            );
          })}
          <div>
            <p className="mt-2 text-sm">
              Add keywords that will trigger the automation
            </p>
          </div>
          <Button
            className="mt-6 w-20 cursor-pointer self-end bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-white"
            onClick={() => setIsTriggerDilogOpen(false)}
          >
            Save
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AutomationTrigger;
