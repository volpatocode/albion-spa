import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    handleSize();
  }, [windowSize]);

  return windowSize;
};

export default useWindowSize;