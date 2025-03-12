import React from 'react';
import { SOCIAL_URLS } from '../../shared/shared-constants';

// import styles from './Footer.css';

export interface FooterProps {
  baseUrl:string;
}

export function Footer({ baseUrl }: FooterProps) {
  return <footer className={'bg-primary text-offWhite p-8 text-xl place-content-center'}>
    <div className=' -mb-36'>
    <div className='place-items-center'>
        <p className='text-7xl font-display font-bold opacity-50'>Mc Samuel Shoko</p>
        <p className='py-8 text-2xl'>Thats all folks!, thanks for stopping by 👋😄</p>
    </div>
      <img src={baseUrl+"/favicon.svg"} alt="mcsamuel's logo" className='opacity-30 h-64 relative -left-40 z-20' />

    </div>
    <div className='flex flex-col'>
      <ul className='space-x-4 space-y-8 flex  flex-wrap justify-between max-w-4xl mx-auto '>
        <li><a target='_blank' href={SOCIAL_URLS.linkedIn} className='underline hover:text-accent transition-all' title="visit LinkedIn">Linkedin</a></li>
        <li><a target='_blank' href={SOCIAL_URLS.twitter} className='underline hover:text-accent transition-all' title="Visit X(Twitter)">X (Twitter)</a></li>
        <li><a target='_blank' href={SOCIAL_URLS.discord} className='underline hover:text-accent transition-all' title="Visit Discord">Discord</a></li>
        <li><a target='_blank' href={SOCIAL_URLS.github} className='underline hover:text-accent transition-all' title="Visit Github">Github</a></li>
        <li><a target='_blank' href={SOCIAL_URLS.designsPortfolio} className='underline hover:text-accent transition-all' title="See my designs">Designs</a></li>
        <li><a target='_blank' href={SOCIAL_URLS.linkTree} className='underline hover:text-accent transition-all' title="visit Linktree profile">Linktree</a></li>
      </ul>
    </div>
    <div className='h-16'> </div>
    <div className='text-4xl opacity-50 font-display place-items-center'>
      <p>All rights Reserved &copy; 2023 &mdash; {(new Date().getFullYear())}</p>
    </div>
    {/* <span className='text-lg'>Made with love ❤️ and passion 🔥 = ❤️‍🔥</span> */}
  </footer>;
}
