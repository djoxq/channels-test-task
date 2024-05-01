import React from 'react';
import styles from './Header.module.css';
import Container from '../container';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="/vite.svg" alt="Logo" />
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
