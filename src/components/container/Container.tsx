import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={`container ${className}`} style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>{children}</div>;
};

export default Container;
