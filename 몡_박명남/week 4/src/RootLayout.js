import React from 'react';
import './RootLayout.css';

function RootLayout({ children }) {
  return (
    <div className="root-layout">
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default RootLayout;
