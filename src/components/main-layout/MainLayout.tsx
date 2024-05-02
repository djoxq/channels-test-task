import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.tsx';
import styles from './MainLayout.module.css';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout
