import { useQuery } from "@tanstack/react-query";
import { instructionApi } from "../api/instructionApi";

export const useInstruction = (id: number) => {
  return useQuery({
    queryKey: ["instruction", id],
    queryFn: () => instructionApi.getById(id),
    enabled: !! id,
  });
};
