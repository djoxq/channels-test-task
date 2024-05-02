import React from 'react';
import styles from './PaperCard.module.css';

interface PaperCardProps {
  children: React.ReactNode
}

const PaperCard: React.FC<PaperCardProps> = ({ children }) => {
  return (
    <div className={styles.paperCard}>
      {children}
    </div>
  );
};

export default PaperCard;
