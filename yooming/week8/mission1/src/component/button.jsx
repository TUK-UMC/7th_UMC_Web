import './button.css';

function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
