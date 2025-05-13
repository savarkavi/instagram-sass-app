import { SignOutButton, useClerk, useUser } from "@clerk/nextjs";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProfileInfo = () => {
  const { openUserProfile } = useClerk();
  const { user } = useUser();

  const handleProfileClick = () => {
    openUserProfile();
  };

  return (
    <div className="flex flex-col gap-8">
      <div
        className="flex w-fit cursor-pointer items-center gap-4 px-2"
        onClick={handleProfileClick}
      >
        <div className="relative h-7 w-7 rounded-full">
          <Image
            src={user?.imageUrl || "/"}
            alt="user avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <p>Profile</p>
      </div>
      <SignOutButton>
        <div className="flex w-fit cursor-pointer items-center gap-4 px-2">
          <LogOutIcon />
          <p>Sign out</p>
        </div>
      </SignOutButton>
    </div>
  );
};

export default ProfileInfo;
