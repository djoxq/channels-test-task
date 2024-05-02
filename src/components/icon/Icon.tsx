import React from 'react';
import styles from './Icon.module.css';

interface IconProps {
  icon: any; // fix: check later
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Icon: React.FC<IconProps> = ({ icon: Element, onClick }) => {
  return (
    <div onClick={onClick} className={styles.icon}>
      <Element style={{ width: '14px', height: '14px' }} />
    </div>
  );
};

export default Icon;
