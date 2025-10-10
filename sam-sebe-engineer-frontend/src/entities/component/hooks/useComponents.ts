import { useQuery } from "@tanstack/react-query";
import { componentApi } from "../api/componentApi";

export const useComponents = () => {
    return useQuery({
        queryKey: ['components'],
        queryFn: componentApi.getAll,
        staleTime: 1000 * 60 * 5
    })
}