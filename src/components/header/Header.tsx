import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../container';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/vite.svg" alt="Logo" />
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
