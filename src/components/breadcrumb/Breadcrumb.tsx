import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

import { BreadcrumbItem } from './types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" role="navigation" className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <>
            <li className={`${styles.breadcrumbItem} ${index === items.length - 1 ? styles.active : ''}`}>
              {item.path ? <Link to={item.path}>{item.label}</Link> : item.label}
            </li>
            {index < items.length - 1 && <span className={styles.separator}> / </span>} {/* Add slash between items */}
          </>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
