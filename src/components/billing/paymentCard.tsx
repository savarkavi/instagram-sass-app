import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";

type PaymentCardProps = {
  label: string;
  currentPlan: "FREE" | "PRO";
};

const PaymentCard = ({ label, currentPlan }: PaymentCardProps) => {
  const isFree = label === "FREE" ? 0 : 1;

  return (
    <div
      className={cn(
        label === currentPlan
          ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          : "bg-muted-foreground",
        "w-[400px] rounded-xl p-[2px]",
      )}
    >
      <div className="h-full w-full rounded-xl bg-stone-900 px-8 py-12">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl">{label}</h2>
          {label === currentPlan && (
            <p className="rounded-full bg-[#3352CC] px-4 py-1 text-sm text-white">
              Current Plan
            </p>
          )}
        </div>
        <p className="mt-2 text-gray-400">
          {PRICING_PLANS[isFree].description}
        </p>
        <p className="mt-8 text-4xl"> {PRICING_PLANS[isFree].price}</p>
        <Button className="mt-8 w-full cursor-pointer bg-gradient-to-br from-[#9685DB] via-[#9434E6] to-[#CC3BD4] text-white">
          {label === "FREE" ? "Get started for free" : "Upgrade to pro"}
        </Button>
        <div className="mt-8 flex flex-col gap-6">
          {PRICING_PLANS[isFree].features.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <CheckCircle2 className="text-gray-400" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
