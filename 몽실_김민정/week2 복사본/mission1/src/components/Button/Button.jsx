import "./Button.css";

export const Button = ({ children, ...rest }) => {
  return (
    <button className='button-container' {...rest}>
      {children}
    </button>
  );
};
