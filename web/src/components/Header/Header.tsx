import React from 'react';

// import styles from './Header.css';
export interface HeaderProps {
  activeLink: 'home' | 'projects' | 'skills' | 'contact' | 'resume' | 'about',
  baseUrl: string;
}

export function Header({ activeLink = 'home', baseUrl }: Readonly<HeaderProps>) {
  const activeLinkStyling: string = 'text-accent font-bold';
  const finalUrl: string = (activeLink === 'home' ? "" : (baseUrl + '/'));

  return <header className=' md:flex flex-wrap  place-content-center  md:p-8'>
    <nav className={"rounded-full border-4 border-gray-300 p-1.5 place-content-center place-items-center px-12 bg-primary backdrop-blur-xl text-white font-display text-xl "}>
      <ul className='flex flex-wrap space-x-4'>
        <li><a href={baseUrl + "/"} className={['', (activeLink == 'home' ? activeLinkStyling : '')].join(' ')}>
          <img src={baseUrl + '/logo.svg'} alt="mcsamuel shoko swe logo" className='h-8' /></a></li>
        <li><a href={finalUrl + "#"} className={['hover:text-accent transition-all', (activeLink == 'home' ? activeLinkStyling : '')].join(' ')}>Home</a></li>
        <li><a href={finalUrl + "#projects"} className={['hover:text-accent transition-all', (activeLink == 'projects' ? activeLinkStyling : '')].join(' ')}>Projects</a></li>
        <li><a href={finalUrl + "#skills"} className={['hover:text-accent transition-all', (activeLink == 'skills' ? activeLinkStyling : '')].join(' ')}>Skills</a></li>
        <li><a href={finalUrl + "#contact"} className={['hover:text-accent transition-all', (activeLink == 'contact' ? activeLinkStyling : '')].join(' ')}>Contact</a></li>
        <li><a href={finalUrl + "#resume"} className={['hover:text-accent transition-all', (activeLink == 'resume' ? activeLinkStyling : '')].join(' ')}>Resume</a></li>
        <li><a href={finalUrl + "#about"} className={['hover:text-accent transition-all', (activeLink == 'about' ? activeLinkStyling : '')].join(' ')}>About</a></li>
      </ul>
    </nav>
  </header>;
}
