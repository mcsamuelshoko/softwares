import React from 'react';

// import styles from './Button.css';

export interface ButtonProps {
  title: string;
  linkUrl: string;
  color?: 'primary' | 'secondary';
  target?: 'current' | 'blank';
  iconUrl?: string;
}

export function Button({ title, linkUrl, color = 'secondary', target = 'blank', iconUrl = '' }: Readonly<ButtonProps>) {

  const openSvgUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M10.25 3.75h-2.5a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-2.5m-6.5-10h5.5c.276 0 .526.112.707.293m.293 6.207v-5.5a1 1 0 0 0-.293-.707M12.75 11.25l6.5-6.5l.707-.707'/%3E%3C/svg%3E";
  const imgUrl = (iconUrl.length > 0 ? iconUrl : openSvgUrl)

  return <button type='button'
    className={'capitalize px-8 flex space-x-2 rounded-4xl border-4 border-gray-100 '}>
    <img src={imgUrl} alt={'button icon'} className='h-4' />
    <p>{title}</p>
  </button>;
}
