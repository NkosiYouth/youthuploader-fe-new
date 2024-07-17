import React from 'react';

interface PublicLayoutProps{
    children?: React.ReactElement | React.ReactDOM
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
        {children && children}
    </>
  );
};

export default PublicLayout;
