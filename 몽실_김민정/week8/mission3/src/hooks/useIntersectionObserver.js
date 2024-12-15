import { useEffect, useState } from "react";

export const useIntersectionObserver = ({ threshold, callback }) => {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      {
        threshold: 1,
      }
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [callback, target, threshold]);

  return { setTarget };
};
