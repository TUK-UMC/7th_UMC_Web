import React from 'react';

const Input = ({ type, placeholder, register, name, error }) => (
  <div className="form-group">
    <input type={type} placeholder={placeholder} {...register(name)} />
    {error && <p className="error-message">{error.message}</p>}
  </div>
);

export default Input;