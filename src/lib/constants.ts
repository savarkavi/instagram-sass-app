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
