import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-text-primary mb-4"
      data-aos="fade-up"
    >
      {children}
    </h2>
  );
};

export default SectionTitle; 