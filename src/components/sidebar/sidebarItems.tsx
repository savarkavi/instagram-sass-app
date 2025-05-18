import { SIDEBAR_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SidebarItemsProps = {
  currentRoute: string;
  slug: string;
};

const SidebarItems = ({ currentRoute, slug }: SidebarItemsProps) => {
  console.log(currentRoute);

  return (
    <div className="flex w-full flex-col gap-4">
      {SIDEBAR_MENU.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.id}
            href={
              item.label === "home"
                ? `/dashboard/${slug}`
                : `/dashboard/${slug}/${item.label}`
            }
            className={cn(
              "hover:bg-muted flex w-full items-center gap-4 rounded-lg p-2",
              currentRoute === item.label && "bg-muted",
            )}
          >
            <Icon />
            <span className="capitalize">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarItems;
