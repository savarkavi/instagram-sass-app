import { getAllAutomations } from "@/actions/automations";
import { useQuery } from "@tanstack/react-query";

export const useGetAutomations = () => {
  const query = useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
  });

  return query;
};
