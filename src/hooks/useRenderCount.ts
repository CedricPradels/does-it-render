import { useRef } from "react";

const useRenderCount = () => {
  const renderCount = useRef<number>(0);
  console.log("before", renderCount.current);

  renderCount.current = renderCount.current + 1;

  console.log("after", renderCount.current);
  return renderCount.current;
};

export { useRenderCount };
