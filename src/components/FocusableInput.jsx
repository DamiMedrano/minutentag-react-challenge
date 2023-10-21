/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */
import React, { useEffect, useRef, useState, forwardRef } from "react";

function Input(props, ref) {
  return <input ref={ref} {...props} />;
}

const TextInput = forwardRef(Input);

export function FocusableInput({ focused: propFocused, ...rest }) {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (propFocused && inputRef.current && !focused) {
      inputRef.current.focus();
      setFocused(true);
    } else if (!propFocused && focused) {
      inputRef.current.blur();
      setFocused(false);
    }
  }, [propFocused, focused]);

  return <TextInput ref={inputRef} {...rest} />;
}
