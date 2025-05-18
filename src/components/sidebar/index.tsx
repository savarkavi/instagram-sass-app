"use client";

import SidebarItems from "./sidebarItems";
import { Separator } from "../ui/separator";
import ProfileInfo from "./profileInfo";
import UpgradeButton from "./upgradeButton";
import { usePath } from "@/hooks/use-path";

const Sidebar = ({ slug }: { slug: string }) => {
  const { currentRoute } = usePath();

  return (
    <div className="fixed top-3 bottom-3 left-3 hidden w-[250px] flex-col items-center justify-between overflow-hidden rounded-lg border-2 border-[#545454] bg-[radial-gradient(160%_50%_at_10%_0%,rgba(173,167,167,0.19)_15%,rgba(5,3,11,1)_85%)] p-4 lg:flex">
      <div className="flex w-full flex-col items-center gap-28">
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
    </div>
  );
};

export default Sidebar;
