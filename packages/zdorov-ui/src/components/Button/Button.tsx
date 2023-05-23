import React, { type FC, type ReactNode } from 'react';

import './Button.css';

export interface Props {
  title: string;
  children?: ReactNode;
}
const Button: FC<Props> = ({ title }) => {
  return (
    <div>
      <button className="buttonWrapper">{title}</button>
    </div>
  );
};

export default Button;
