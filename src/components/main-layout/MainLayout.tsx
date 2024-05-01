import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header.tsx';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout
