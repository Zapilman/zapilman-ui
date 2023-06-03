import React, { type FC } from 'react';

import './Button.css';

export interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return (
    <div>
      <button className="buttonWrapper">{title}</button>
    </div>
  );
};

export default Button;
