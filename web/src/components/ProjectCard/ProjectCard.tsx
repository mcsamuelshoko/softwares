import React from 'react';
import { Button } from '../';

// import styles from './ProjectCard.css';

export interface ProjectCardProps {
  title: string;
  description: string;
  openLink: string;
  moreLink: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, imageUrl, openLink, moreLink }: Readonly<ProjectCardProps>) {
  return <div className={'w-80 h-96 border-4 border-gray-100 shadow-sm  bg-primary text-offWhite rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 space-y-4 flex flex-col justify-between'}>
    <div>
      <img src={imageUrl} alt={title + " project image"} className='rounded-2xl mb-4' />
      <p className='font-display text-2xl opacity-50  mb-1'>{title}</p>
      <p className='text-normal '>{description}</p>
    </div>
    <div className='flex justify-between'>
      <Button title='Open' color='primary' target='blank' linkUrl={openLink}></Button>
      <Button title='More' linkUrl={moreLink}></Button>
    </div>
  </div>;
}
