import { Prisma } from "@/generated/prisma";

export const automationDataInclude = {
  trigger: true,
  post: true,
  actions: true,
  keywords: true,
} satisfies Prisma.AutomationInclude;

export type AutomationData = Prisma.AutomationGetPayload<{
  include: typeof automationDataInclude;
}>;
