"use client";

import { useGetAutomations } from "@/hooks/queries/use-get-automations";
import AutomationCard from "./automationCard";

const AutomationContainer = () => {
  const { data } = useGetAutomations();

  return (
    <div className="flex flex-col gap-4">
      {data?.map((item) => <AutomationCard key={item.id} data={item} />)}
    </div>
  );
};

export default AutomationContainer;
