import React from "react";
import Search from "./search";
import AutomationButton from "./automationButton";
import NotificationButton from "./notificationButton";
import SheetMenu from "./sheetMenu";

const Navbar = ({ slug }: { slug: string }) => {
  return (
    <div className="lg:ml-[250px] lg:px-8">
      <div className="flex w-full items-center justify-between gap-12">
        <div className="lg:hidden">
          <SheetMenu slug={slug} />
        </div>
        <div className="flex w-full items-center gap-4 lg:gap-6">
          <Search />
          <AutomationButton />
          <NotificationButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
