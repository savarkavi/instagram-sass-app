import {
  HomeIcon,
  RocketIcon,
  SettingsIcon,
  UserRoundPenIcon,
  WorkflowIcon,
} from "lucide-react";
import { v4 as uuid } from "uuid";
import { FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type SidebarMenu = {
  id: string;
  label: string;
  icon: React.ElementType;
};

export const SIDEBAR_MENU: SidebarMenu[] = [
  {
    id: uuid(),
    label: "home",
    icon: HomeIcon,
  },
  {
    id: uuid(),
    label: "contacts",
    icon: UserRoundPenIcon,
  },
  {
    id: uuid(),
    label: "automations",
    icon: WorkflowIcon,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: RocketIcon,
  },
  {
    id: uuid(),
    label: "settings",
    icon: SettingsIcon,
  },
];

export type PricingPlans = {
  id: string;
  label: string;
  description: string;
  price: string;
  features: string[];
};

export const PRICING_PLANS: PricingPlans[] = [
  {
    id: uuid(),
    label: "FREE",
    description:
      "Use simple features to manage your audience. Great for testing.",
    price: "₹0",
    features: [
      "No credit card required",
      "Boost engagement with target responses",
      "Automate comment replies",
      "2 active integrations",
    ],
  },
  {
    id: uuid(),
    label: "PRO",
    description:
      "Use Advanced and A.I powered features to scale your bussiness.",
    price: "₹1199",
    features: [
      "Everything included from free plan",
      "A.I powered target responses",
      "Advanced analytics and insights",
      "Unlimited integrations",
    ],
  },
];

export type AutomationTrigger = {
  id: string;
  type: string;
  label: string;
  description: string;
  icon: IconType;
};

export const AUTOMATION_TRIGGERS: AutomationTrigger[] = [
  {
    id: uuid(),
    type: "COMMENT",
    label: "User comments on my post",
    description: "Select if you want to automate comments on your post",
    icon: FaInstagram,
  },
  {
    id: uuid(),
    type: "DM",
    label: "User sends me a DM",
    description: "Select if you want to automate DMs",
    icon: FaInstagram,
  },
];
