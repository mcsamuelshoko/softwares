import React from 'react';

// import styles from './Header.css';
export interface HeaderProps {
  activeLink: 'home' | 'projects' | 'skills' | 'contact' | 'resume' | 'about',
  baseUrl:string;
}

export function Header({ activeLink = 'home',baseUrl }: Readonly<HeaderProps>) {
  const activeLinkStyling: string = 'underline';


  return <div className='hidden md:f lex flex-wrap  justify-center p-4'>
    <header className={"rounded-full border-4 border-gray-300 p-2 px-12 bg-primary backdrop-blur-xl text-white font-display text-xl "}>
      <ul className='flex space-x-4'>
        <li><a href={baseUrl + "/"} className={['', (activeLink == 'home' ? activeLinkStyling : '')].join(' ')}>
        <img src={baseUrl+'/logo.svg'} alt="mcsamuel shoko swe logo" className='h-8'/></a></li>
        <li><a href="#projects" className={['hover:text-accent transition-all', (activeLink == 'projects' ? activeLinkStyling : '')].join(' ')}>Projects</a></li>
        <li><a href="#skills" className={['hover:text-accent transition-all', (activeLink == 'skills' ? activeLinkStyling : '')].join(' ')}>Skills</a></li>
        <li><a href="#contact" className={['hover:text-accent transition-all', (activeLink == 'contact' ? activeLinkStyling : '')].join(' ')}>Contact</a></li>
        <li><a href="#resume" className={['hover:text-accent transition-all', (activeLink == 'resume' ? activeLinkStyling : '')].join(' ')}>Resume</a></li>
        <li><a href="#about" className={['hover:text-accent transition-all', (activeLink == 'about' ? activeLinkStyling : '')].join(' ')}>About</a></li>
      </ul>
    </header>
  </div>;
}
