import React from 'react';

// import styles from './Button.css';

export interface ButtonProps {
  title: string;
  linkUrl: string;
  color?: 'primary' | 'secondary';
  target?: 'current' | 'blank';
  iconUrl?: string;
  border?: boolean;
}

export function Button({ title, linkUrl, color = 'secondary', target = 'current', iconUrl = '', border = false }: Readonly<ButtonProps>) {

  const openSvgUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M10.25 3.75h-2.5a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-2.5m-6.5-10h5.5c.276 0 .526.112.707.293m.293 6.207v-5.5a1 1 0 0 0-.293-.707M12.75 11.25l6.5-6.5l.707-.707'/%3E%3C/svg%3E";
  const imgUrl: string = (iconUrl.length > 0 ? iconUrl : openSvgUrl)
  const colorStyling: string = (color === 'primary' ? 'bg-accent text-primary' : 'bg-offWhite text-primary');
  const borderStyling: string = (border ? " border-4 border-gray-200 " : "");

  return <a href={linkUrl} target={target === 'blank' ? "_blank" : "_self"} className=''>
    <button type='button'
      className={['capitalize px-8 flex items-center space-x-2 rounded-4xl hover:cursor-pointer hover:opacity-70 hover:shadow', colorStyling, borderStyling].join(' ')}>
      {(target === 'blank' || iconUrl ? <img src={iconUrl || imgUrl} alt={'button icon'} className='h-5' /> : '')}
      <p className='font-bold p-1'>{title}</p>
    </button>
  </a>;
}
