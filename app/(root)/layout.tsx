import React, { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">FriDay</h2>
        </a>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
