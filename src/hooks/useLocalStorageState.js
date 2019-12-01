import { useState, useEffect} from 'react'

function useLocalStorageState(key, defaultVal) {

  let [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    } catch(e) {
      value = defaultVal;
    }
    console.log("USing value is ", value)
    return value;
  })

  console.log("STATE is ", state);

  useEffect(() => {
    console.log("calling use effect with ", state);
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state])

  return [state, setState]
}

export default useLocalStorageState;