import { FC } from 'react';

import './Input.css';

const Input: FC<{ title: string }> = ({ title }) => {
  return (
    <input
      className="input"
      type="text"
      id="firstName"
      defaultValue="Pedro Duarte"
    />
  );
};

export default Input;
