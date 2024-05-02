import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  uiType?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, uiType = 'primary' }) => {
  return (
    <button className={`${styles.button} ${styles[uiType]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
