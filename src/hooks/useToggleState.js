import { useContext, useState } from "react";

function useToggleState(defaultVal = false) {
  let [state, setState] = useState(defaultVal);

  let toggleState = () => {
    setState(!state);
  }
  return [state, toggleState];
}

export default useToggleState;