import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instructionApi } from "../api/instructionApi";
import type { Instruction } from "../model/Instruction";

export const useCreateInstruction = () => {
  const queryClient = useQueryClient();

  return useMutation<Instruction, Error, Instruction>({
    mutationFn: (newInstruction) => {
      return instructionApi.create(newInstruction);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["instructions"] });
    },
  });
};
