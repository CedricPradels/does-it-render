import { useMemo, useState } from "react";
import * as R from "ramda";

type State = boolean;

type SetTrue = () => void;

type SetFalse = () => void;

type Toggle = () => void;

type Reset = () => void;

type LazyInit = () => boolean;

const useBoolean = (
  init: boolean | LazyInit = true
): [State, SetTrue, SetFalse, Toggle, Reset] => {
  const [state, setState] = useState<boolean>(init);

  const toolbox = useMemo(() => {
    const setTrue = () => setState(true);
    const setFalse = () => setState(false);
    const toggle = () => setState(R.not);
    const reset = () => setState(init);

    return [setTrue, setFalse, toggle, reset] as const;
  }, []);

  return [state, ...toolbox];
};

export { useBoolean };
