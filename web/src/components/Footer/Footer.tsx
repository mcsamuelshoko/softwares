import React from 'react';

// import styles from './Footer.css';

export interface FooterProps {
}

export function Footer({ }: FooterProps) {
  return <footer className={''}>
    <div>
      <img src="logo" alt="mcsamuel's logo" className='' />
      <div>
        <p>Mc Samuel Shoko</p>
        <p>Thats all folks, thanks for stopping by ❤️</p>
      </div>
    </div>
    <div className='flex flex-col'>
      <ul className='space-x-4 flex flex-wrap underline'>
        <li><a href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5" title="visit LinkedIn">Linkedin</a></li>
        <li><a href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)">X (Twitter)</a></li>
        <li><a href="https://discord.com/users/generalseven" title="Visit Discord">Discord</a></li>
        <li><a href="https://github.com/mcsamuelshoko" title="Visit Github">Github</a></li>
        <li><a href="https://instagram.com/mcsamuelshoko" title="Visit Instagram">Instagram</a></li>
        <li><a href="https://linktr.ee/mcsamuelshoko" title="visit Linktree profile">Linktree</a></li>
      </ul>
    </div>
    <div className='h-40'> </div>
    <div className='p-8'>
      <p>All rights Reserved &copy; 2023 &mdash; {(new Date().getFullYear())}</p>
    </div>
  </footer>;
}
