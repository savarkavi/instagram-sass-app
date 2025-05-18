"use server";

import prisma from "@/lib/prisma";
import { AutomationData, automationDataInclude } from "@/lib/types";
import { currentUser } from "@clerk/nextjs/server";

export const getAllAutomations = async () => {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!dbUser) throw new Error("DB user not found");

  const automations = await prisma.automation.findMany({
    where: {
      userId: dbUser.id,
    },
    include: automationDataInclude,
  });

  return automations as AutomationData[];
};

export const createAutomation = async () => {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!dbUser) throw new Error("DB user not found");

  const newAutomation = await prisma.automation.create({
    data: {
      userId: dbUser.id,
    },
    include: automationDataInclude,
  });

  return newAutomation as AutomationData;
};
