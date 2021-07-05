import { useRef } from "react";

const useRenderCount = () => {
  const renderCount = useRef<number>(0);

  renderCount.current++;

  return renderCount.current;
};

export { useRenderCount };
