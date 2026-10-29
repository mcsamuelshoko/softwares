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
  return <div className={'w-80 h-96 border-4 border-gray-300 shadow-sm  bg-primary text-offWhite rounded-2xl  p-4 space-y-4 flex flex-col justify-between'}>
    <div>
      <img src={imageUrl} alt={title + " project image"} className='rounded-sm mb-4' />
      <p className='font-display font-medium text-2xl text-primary-500  mb-1'>{title}</p>
      <p className='text-normal '>{description}</p>
    </div>
    <div className='flex justify-between'>
      <Button title='Open' color='primary' target='blank' linkUrl={openLink}></Button>
      <Button title='More' linkUrl={moreLink}></Button>
    </div>
  </div>;
}
