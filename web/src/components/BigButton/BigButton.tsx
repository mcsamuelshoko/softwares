import React from 'react';

// import styles from './BigButton.css';

export interface BigButtonProps {
  title: string;
  link: string;
  svgUrl: string;
  styling?:string;
}

export function BigButton({title, link,svgUrl,styling}: BigButtonProps) {
  return <button type='button' className={''+' '+styling}>{
    <div className='flex'>
        <img src={svgUrl} alt="svg icon" className=''/>
        <p>{title}</p>
    </div>
  }</button>;
}
