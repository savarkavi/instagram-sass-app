import React from "react";
import { Button } from "../ui/button";
import { BellIcon } from "lucide-react";

const NotificationButton = () => {
  return (
    <Button className="h-10 w-10 shrink-0 cursor-pointer rounded-full">
      <BellIcon color="#3352CC" fill="#3352CC" />
    </Button>
  );
};

export default NotificationButton;
