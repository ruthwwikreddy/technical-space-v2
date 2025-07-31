import React from 'react';

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function PageContainer({ children, className = '', id }: PageContainerProps) {
  return (
    <div id={id} className={`min-h-screen bg-black pt-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
}