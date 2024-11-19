import { useEffect, useState } from "react";

const useSlide = (items: string | any[], intervalDuration = 5000) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [items.length, intervalDuration]);

  return { currentIndex: index, currentItem: items[index] };
};

export default useSlide;
