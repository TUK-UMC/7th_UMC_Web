import { useState, useEffect } from "react";
import { SkeletonPosterGrid } from "../components/SkeletonPosterGrid";
import { ErrorPage } from "../pages/ErrorPage";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfinityScroll = ({ queryFn, queryKey }) => {
  const [lastMovieId, setLastMovieId] = useState(0);

  const { data, error, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) => {
      return queryFn(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return null;
    },
  });

  const observeLastElement = (lastElement) => {
    if (!lastElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(lastElement);

    return () => {
      observer.disconnect();
    };
  };

  useEffect(() => {
    const lastId = data?.pages[0].results
      ? data?.pages[0].results.length - 1
      : data?.pages[0].length - 1;
    setLastMovieId(data ? lastId : null);
  }, [lastMovieId, data]);

  if (isLoading) {
    return <SkeletonPosterGrid />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return { data, lastMovieId, observeLastElement };
};
