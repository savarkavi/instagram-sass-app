import {
  HomeIcon,
  RocketIcon,
  SettingsIcon,
  UserRoundPenIcon,
  WorkflowIcon,
} from "lucide-react";
import { v4 as uuid } from "uuid";

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

export const PRICING_PLANS = [
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
