import React from 'react';

// import styles from './Header.css';

export interface HeaderProps {
  activeLink: 'home' | 'projects' | 'skills' | 'contact' | 'resume' | 'about',
}

export function Header({ activeLink = 'home' }: Readonly<HeaderProps>) {
  const activeLinkStyling: string = 'underline';

  return <div className='flex flex-wrap  justify-center p-4'>
    <header className={"rounded-full border-4 border-gray-300 p-2 px-12 bg-black text-gray-50 "}>
      <ul className='flex space-x-4'>
        <li><a href="/" className={['', (activeLink == 'home' ? activeLinkStyling : '')].join(' ')}>my logo</a></li>
        <li><a href="#projects" className={['', (activeLink == 'projects' ? activeLinkStyling : '')].join(' ')}>Projects</a></li>
        <li><a href="#Contact" className={['', (activeLink == 'skills' ? activeLinkStyling : '')].join(' ')}>Contact</a></li>
        <li><a href="#contact" className={['', (activeLink == 'contact' ? activeLinkStyling : '')].join(' ')}>Contact</a></li>
        <li><a href="#resume" className={['', (activeLink == 'resume' ? activeLinkStyling : '')].join(' ')}>Resume</a></li>
        <li><a href="#about" className={['', (activeLink == 'about' ? activeLinkStyling : '')].join(' ')}>About</a></li>
      </ul>
    </header>
  </div>;
}
