import { useState, useCallback, useEffect } from "react";
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

  const handleInfinityScroll = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("보이자나");
          fetchNextPage();
        }
      });
    },
    [fetchNextPage]
  );

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
    setLastMovieId(data ? data?.pages[0].results.length - 1 : null);
  }, [lastMovieId, data, handleInfinityScroll]);

  if (isLoading) {
    return <SkeletonPosterGrid />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return { data, lastMovieId, observeLastElement };
};
