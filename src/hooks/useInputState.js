import React, { useState } from "react";

function useInputState(initialValue) {
  let [state, setState] = useState(initialValue);
  let handleChange = (e) => {
    setState(e.target.value);
  }
  let reset = () => {
    setState("");
  }

  return [state, handleChange, reset];
}

export default useInputState