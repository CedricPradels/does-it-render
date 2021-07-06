import { useBoolean } from "./useBoolean";

const useRerender = () => {
  const [, , , rerender] = useBoolean();

  return rerender;
};

export { useRerender };
