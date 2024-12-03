// src/hooks/useInfiniteScroll.js
import { useEffect, useRef } from "react";

export const useInfiniteScroll = (fetchNextPage, hasNextPage) => {
  const observerRef = useRef();

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return observerRef;
};
