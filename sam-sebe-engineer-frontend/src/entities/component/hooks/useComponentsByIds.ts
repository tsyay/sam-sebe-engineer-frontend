import { useQuery } from '@tanstack/react-query'
import { componentApi } from '../api/componentApi'

export const useComponentsByIds = (ids: number[]) => {
  return useQuery({
    queryKey: ['components-by-ids', ids],
    queryFn: () => componentApi.getByIds(ids),
    enabled: ids.length > 0,
  })
}