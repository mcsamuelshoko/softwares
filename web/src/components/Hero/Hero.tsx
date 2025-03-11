import React from 'react';
import { BigButton } from '../BigButton';
import { SOCIAL_URLS } from '../../shared/shared-constants';

// import styles from './Hero.css';

export interface HeroProps {
  lastUpdated?: string,
  baseUrl: string,
  workingOn: {
    title: string,
    link: string,
  }

}

export function Hero({ lastUpdated = (new Date().getDate()).toString(), workingOn, baseUrl }: HeroProps) {

  const githubIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from ProIcons by ProCode - https://github.com/ProCode-Software/proicons/blob/main/LICENSE --%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'%3E%3Cpath d='M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146'/%3E%3Cpath d='M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216'/%3E%3C/g%3E%3C/svg%3E";

  const resumeIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from ProIcons by ProCode - https://github.com/ProCode-Software/proicons/blob/main/LICENSE --%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M11.688 3.063a3.5 3.5 0 0 1 1.027.712l5.968 5.97c.3.3.54.647.711 1.026m-7.706-7.708a3.5 3.5 0 0 0-1.448-.313H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53c0-.505-.109-.999-.314-1.45m-7.706-7.707V8.77a2 2 0 0 0 2 2h5.706'/%3E%3C/svg%3E";

  return <section id="hero" className={'grid gap-4 grid-cols-1 md:grid-cols-3 p-8'}>
    <div className='md:col-span-2 space-y-4'>
      <section id='portfolio'>
        <div className='w-full'>
          <img src="/portfolio-banner.png" alt="portfolio-banner" className='rounded-2xl md:rounded-3xl lg:rounded-4xl object-contain w-full' />
        </div>
      </section>
      <section id='bio' className='grid md:grid-cols-2 gap-8'>
        <div className={`bg-primary text-offWhite rounded-2xl md:rounded-3xl lg:rounded-4xl p-8 text-xl place-content-center `}>
          <p>
            I build software that works — backend, full-stack, and beyond. 🚀 <br /> <br />
            I turn ideas into clean code and smart solutions.
          </p>
        </div>
        <div className='space-y-4'>
          <BigButton title='Github' link={SOCIAL_URLS.github} svgUrl={githubIconUrl} styling='w-full' />
          <BigButton title='Resume' link={SOCIAL_URLS.resume} svgUrl={resumeIconUrl} styling='w-full' />
        </div>
      </section>
      <section id='current' className='bg-primary text-offWhite rounded-2xl md:rounded-3xl lg:rounded-4xl p-8  text-2xl'>
        <p>Currently, i&apos;m working on this 👉 <a href={workingOn.link} target='_blank' title={'visit ' + workingOn.title} className='underline hover:text-accent hover:transition-all'>{workingOn.title}</a></p>
      </section>
    </div>
    <div className='space-y-4 space-x-4'>
      <div className='bg-primary text-offWhite rounded-2xl md:rounded-3xl lg:rounded-4xl p-8 font-medium text-xl w-full'>
        <p>BSc. Hons. Computer Science</p>
        <p className='opacity-50'>University of Zimbabwe</p>
      </div>

      <div>
        <img alt="graduation bsc. computer science"src={"/graduation.jpg"} className='rounded-2xl md:rounded-3xl lg:rounded-4xl object-contain min-h-max max-h-screen'/>
        <p className='font-mono opacity-23'>#made_my_mama_proud</p>
        <p className='font-mono hover:opacity-20 opacity-0 transition-all text-sm'>&mdash; remind me not to do this again <b>(going through the pains of a CS degree 😭)</b></p>
      </div>
    </div>
  </section>;
}
