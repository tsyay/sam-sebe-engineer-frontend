import { getInstructionsByIds } from "../../../../shared"


export const useInstructions = (ids : Number[]) => {
    const instructions = getInstructionsByIds(ids);
    return instructions;
}