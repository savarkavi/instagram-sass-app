"use client";

import { usePath } from "@/hooks/use-path";
import { useUser } from "@clerk/nextjs";

import React from "react";

const MainBreadCrumb = () => {
  const { currentRoute } = usePath();
  const { user } = useUser();

  return (
    <div className="flex w-full flex-col items-center py-12">
      {currentRoute === "home" && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-400">Welcome back</p>
          <p className="text-3xl capitalize">{user?.fullName}</p>
        </div>
      )}
    </div>
  );
};

export default MainBreadCrumb;
