import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'submit' | 'button';
  uiType?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, uiType = 'primary', type = 'button' }) => {
  return (
    <button className={`${styles.button} ${styles[uiType]}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
