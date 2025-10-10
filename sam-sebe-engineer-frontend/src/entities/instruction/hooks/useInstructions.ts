import { useQuery } from "@tanstack/react-query";
import { instructionApi } from "../api/instructionApi";

export const useInstructions = () => {
  return useQuery({
    queryKey: ["instructions"],
    queryFn: instructionApi.getAll,
    staleTime: 1000 * 60 * 5,
  });
};
