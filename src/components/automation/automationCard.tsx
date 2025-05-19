import { usePath } from "@/hooks/use-path";
import { AutomationData } from "@/lib/types";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

const AutomationCard = ({ data }: { data: AutomationData }) => {
  const { pathname } = usePath();

  return (
    <Link
      href={`${pathname}/${data.id}`}
      className="w-full max-w-[800px] rounded-xl bg-[#202020] p-4"
    >
      <div className="flex items-center justify-between">
        <p className="text-lg">{data.name}</p>
        <p className="text-gray-400">
          {format(data.createdAt, "MMMM do yyyy")}
        </p>
      </div>
    </Link>
  );
};

export default AutomationCard;
