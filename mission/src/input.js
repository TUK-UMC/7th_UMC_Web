import React from 'react';

const Input = ({ type, placeholder, register, name, error }) => {
  return React.createElement(
    'div',
    { className: 'form-group' },
    React.createElement('input', { type, placeholder, ...register(name) }),
    error && React.createElement('p', { className: 'error-message' }, error.message)
  );
};

export default Input;
