"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePath } from "@/hooks/use-path";
import { AlignJustifyIcon } from "lucide-react";
import SidebarItems from "../sidebar/sidebarItems";
import { Separator } from "../ui/separator";
import ProfileInfo from "../sidebar/profileInfo";
import UpgradeButton from "../sidebar/upgradeButton";

const SheetMenu = ({ slug }: { slug: string }) => {
  const { currentRoute } = usePath();

  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustifyIcon />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between bg-[radial-gradient(160%_50%_at_10%_0%,rgba(173,167,167,0.19)_15%,rgba(5,3,11,1)_85%)] p-4">
        <SheetTitle className="hidden">Navigation Menu</SheetTitle>
        <div className="flex w-full flex-col items-center gap-24">
          <h1 className="font-serif text-3xl font-bold text-[#3352CC]">
            OptiGram
          </h1>
          <div className="flex w-full flex-col gap-10 text-lg">
            <SidebarItems currentRoute={currentRoute} slug={slug} />
            <div className="w-full px-4">
              <Separator orientation="horizontal" className="bg-muted w-full" />
            </div>
            <ProfileInfo />
          </div>
        </div>
        <UpgradeButton />
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
