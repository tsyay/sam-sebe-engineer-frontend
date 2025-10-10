import { useQuery } from "@tanstack/react-query";
import { kitApi } from "../api/kitApi";

export const useKits= () => {
  return useQuery({
    queryKey: ["kits"],
    queryFn: () => kitApi.getAll,
    staleTime: 1000 * 60 * 5,
  });
};
