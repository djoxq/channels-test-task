import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>{children}</div>;
};

export default Container;
