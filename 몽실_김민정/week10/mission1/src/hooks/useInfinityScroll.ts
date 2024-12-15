import { useState, useEffect } from "react";
import { SkeletonPosterGrid } from "../components/SkeletonPosterGrid";
import { ErrorPage } from "../pages/ErrorPage";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "./useIntersectionObserver";

interface propsType {
  queryFn: (pageParam: number) => Promise<{
    page: number;
    total_pages: number;
    results: any[];
  }>;

  queryKey: string[];
}

export const useInfinityScroll = ({ queryFn, queryKey }: propsType) => {
  const [lastMovieId, setLastMovieId] = useState(0);

  const { data, error, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) => {
      return queryFn(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : null;
    },
  });

  const handleIntersect = () => {
    fetchNextPage();
  };

  const { setTarget } = useIntersectionObserver({
    callback: handleIntersect,
    threshold: 0.5,
  });

  useEffect(() => {
    if (data?.pages) {
      const lastPage = data.pages[data.pages.length - 1];
      const lastIndex = lastPage.results.length - 1;
      setLastMovieId(lastPage.results[lastIndex]?.id || null);
    }
  }, [data]);

  return { data, lastMovieId, setTarget, isLoading, error };
};
