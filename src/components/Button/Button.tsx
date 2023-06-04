import React, { type FC } from 'react';

import cn from 'classnames';

import styles from './Button.module.scss';

export interface Props {
  title: string;
  fullWidth?: boolean;
}

const Button: FC<Props> = ({ title, fullWidth }) => {
  return (
    <button
      className={cn(styles.buttonWrapper, { [styles.fullWidth]: fullWidth })}
    >
      {title}
    </button>
  );
};

export default Button;
