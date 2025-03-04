import React, { type ReactNode } from 'react';

// import styles from './SectionPage.css';

export interface SectionPageProps {
  children: ReactNode
}

export function SectionPage({ children }: SectionPageProps) {
  return <div className={'p-8  rounded-t-4xl bg-gradient-to-b from-gray-200 to-transparent'}>
    {children}
  </div>;
}
