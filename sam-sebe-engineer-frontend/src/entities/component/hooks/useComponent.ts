import { useQuery } from "@tanstack/react-query";
import { componentApi } from "../api/componentApi";

export const useComponent = (id: number) => {
    return useQuery({
        queryKey: ['component', id],
        queryFn: () => componentApi.getById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })
}