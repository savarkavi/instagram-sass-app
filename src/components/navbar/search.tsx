import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex w-full items-center rounded-full border border-[#3352CC] px-3 text-sm lg:px-4 lg:py-1 lg:text-base">
      <SearchIcon color="#3352CC" className="size-4 lg:size-6" />
      <Input
        placeholder="Search by name, email or status"
        className="w-full flex-1 border-none ring-0 outline-none focus-visible:border-none focus-visible:ring-0 dark:bg-transparent"
      />
    </div>
  );
};

export default Search;
