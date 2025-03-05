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
  return <div className={'rounded-4xl p-4 flex flex-col justify-between'}>
    <div>
      <img src={imageUrl} alt={title + " project image"} />
      <p>{title}</p>
      <p>{description}</p>
    </div>
    <div className='flex justify-between'>
      <Button title='Open' linkUrl={openLink}></Button>
      <Button title='More' linkUrl={moreLink}></Button>
    </div>
  </div>;
}
