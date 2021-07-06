import { useCallback } from "react";
import { useBoolean } from "./useBoolean";

const useRerender = () => {
  const [, , , toggle] = useBoolean();

  const rerender = useCallback(toggle, []);

  return rerender;
};

export { useRerender };
