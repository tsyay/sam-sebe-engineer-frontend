import { useQuery } from "@tanstack/react-query";
import { kitApi } from "../api/kitApi";

export const useKit = (id: number) => {
  return useQuery({
    queryKey: ["kit", id],
    queryFn: () => kitApi.getById(id),
    enabled: !! id,
  });
};
