import React from 'react';
import { BigButton } from '../BigButton';

// import styles from './Hero.css';

export interface HeroProps {
lastUpdated?:string,
workingOn: {
  title: string,
  link:string,
}

}

export function Hero({lastUpdated = (new Date().getDate()).toString(),workingOn } : HeroProps) {
  return <section id="hero" className={'grid grid-cols-1 md:grid-cols-3'}>
    <div className='md:col-span-2'>
      <section id='portfolio'>P</section>
      <section id='bio'>
        <div>
        <p>I build</p>
        <p>I turn</p>
        </div>
        <div>
          <BigButton title='Github' link=''  svgUrl='' styling=''/>
          <BigButton title='Resume' link='' svgUrl='' styling=''/>
        </div>
      </section>
      <section id='current'>
        <p>Currently, i&apos;m working on this 👉 <a href={workingOn.link} title={'visit '+ workingOn.title} className='underline'>{workingOn.title}</a></p>
      </section>
    </div>
    <div className=''>
        <div className=''>
          <p>BSc. Hons. Computer Science</p>
          <p>University of Zimbabwe</p>
        </div>

        <div>
          <img
          src="https://images.pexels.com/photos/29193172/pexels-photo-29193172/free-photo-of-captivating-cherry-blossoms-with-traffic-light-in-japan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="graduation pic" />
          <p className=''>2023</p>
        </div>
    </div>
  </section>;
}
