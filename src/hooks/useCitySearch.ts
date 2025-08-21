import { useQuery } from '@tanstack/react-query';
import { searchCities, CityResult } from '@/api/cities';
import { useMemo } from 'react';

export const useCitySearch = (query: string) => {
  const debouncedQuery = useMemo(() => {
    // Only search if query has at least 2 characters or is empty
    return query.length >= 2 || query.length === 0 ? query : '';
  }, [query]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['cities', debouncedQuery],
    queryFn: () => searchCities(debouncedQuery, 1),
    enabled: true, // Always enabled, let the API handle empty queries
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  return {
    cities: data?.items || [],
    isLoading,
    error,
    hasMore: data?.hasMore || false
  };
};