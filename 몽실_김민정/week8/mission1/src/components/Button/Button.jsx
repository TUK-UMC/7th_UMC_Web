import "./Button.css";

export const Button = ({ children, className, active, ...rest }) => {
  return (
    <button
      className={`button-container ${
        active ? "active" : "disabled"
      } ${className}`}
      disabled={!active}
      {...rest}
    >
      {children}
    </button>
  );
};
