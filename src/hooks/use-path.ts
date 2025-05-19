import { usePathname } from "next/navigation";

export const usePath = () => {
  const pathname = usePathname();

  const pathSplit = pathname.split("/");

  let currentRoute;

  if (pathSplit.length === 3) {
    currentRoute = "home";
  } else {
    currentRoute = pathSplit[pathSplit.length - 1];
  }

  return { currentRoute, pathname };
};
