import { getComponentsByIds } from "../../../../shared"


export const useComponents = (ids : Number[]) => {
    const comonents = getComponentsByIds(ids);
    return comonents;
}