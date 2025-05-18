import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const IntegrationCard = () => {
  return (
    <div className="mt-16 flex w-full max-w-[800px] flex-col gap-4 rounded-xl border border-[#3352CC] p-4">
      <div className="flex items-center gap-4 text-xl">
        <FaInstagram className="size-6 text-[#3352CC]" />
        <p>Connect your accounts</p>
      </div>
      <p className="text-gray-400">
        To connect your account, you need an{" "}
        <span className="text-white">Instagram Business</span> or{" "}
        <span className="text-white">Creator </span>
        account.
      </p>
      <div className="mt-6">
        <Label htmlFor="username">What&apos;s your Instagram username?</Label>
        <Input
          className="mt-4 border-none ring-0 outline-none focus-visible:border-none focus-visible:ring-0"
          placeholder="john_doe"
        />
      </div>
      <p className="mt-8 max-w-[400px] text-gray-400">
        We are committed to protecting your data and privacy and abide by
        Meta&apos;s <span className="underline">Developer Platform Terms.</span>
      </p>
    </div>
  );
};

export default IntegrationCard;
