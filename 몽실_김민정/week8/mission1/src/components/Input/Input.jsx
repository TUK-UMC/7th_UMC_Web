import { forwardRef } from "react";
import "./Input.css";

export const Input = forwardRef(({ width, ...rest }, ref) => {
  return <input {...rest} className='input-container' ref={ref} />;
});
