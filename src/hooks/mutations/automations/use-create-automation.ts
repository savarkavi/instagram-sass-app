import { createAutomation } from "@/actions/automations";
import { AutomationData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateAutomation = () => {
  const queryClient = useQueryClient();
  const queryKey: QueryKey = ["user-automations"];

  const mutation = useMutation({
    mutationFn: createAutomation,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });

      const previousState = queryClient.getQueryData(queryKey);

      const newAutomation = {
        id: `optimistic-${Date.now()}`,
        name: "Untitled",
        active: false,
        userId: "temp-user-id",
        trigger: null,
        post: null,
        actions: [],
        keywords: [],
        createdAt: new Date(),
      };

      queryClient.setQueryData<AutomationData[]>(queryKey, (oldData) => {
        if (!oldData) {
          return [newAutomation];
        } else {
          return [newAutomation, ...oldData];
        }
      });

      toast.success("Automation created");

      return { previousState };
    },

    onError: (error, variables, context) => {
      queryClient.setQueryData(queryKey, context?.previousState);
      console.log(error);
      toast.error("Failed to create the automation");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return mutation;
};
