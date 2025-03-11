import React from 'react';

// import styles from './BigButton.css';

export interface BigButtonProps {
  title: string;
  link: string;
  svgUrl: string;
  styling?:string;
}

export function BigButton({title, link,svgUrl,styling}: BigButtonProps) {
  return <button type='button' className={'bg-primary text-offWhite  rounded-2xl md:rounded-3xl lg:rounded-4xl p-8 px-16 font-medium text-xl'+' '+styling}>{
    <div className='flex items-center'>
        <img src={svgUrl} alt="svg icon" className='h-16 invert'/>
        <p className='text-4xl ml-8'>{title}</p>
    </div>
  }</button>;
}
