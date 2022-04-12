import { useEffect, useRef } from "react";

function usePreviousValue(value) {
  const ref = useRef();
  useEffect(() => {
    if (value !== undefined) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
}

export default usePreviousValue;
