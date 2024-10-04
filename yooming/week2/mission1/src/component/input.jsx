import './input.css';

function Input({ value, onChange, placeholder, className = '' }) {
  return (
    <input
      className={`custom-input ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
