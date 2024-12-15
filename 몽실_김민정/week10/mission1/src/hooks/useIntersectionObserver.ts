import { useEffect, useState } from "react";

interface propsType {
  threshold: number;
  callback: () => {} | void;
}

export const useIntersectionObserver = ({ threshold, callback }: propsType) => {
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
