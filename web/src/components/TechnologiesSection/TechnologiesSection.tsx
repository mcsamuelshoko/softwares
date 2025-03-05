import React from 'react';

// import styles from './TechnologiesSection.css';

export interface TechnologiesSectionProps {
  title: string;
  description: string;
  technologies: { name: string, svgUrl: string }[];
  animate?: { direction?: 'left' | 'right', duration?: string }
}

export function TechnologiesSection({ title, description, technologies, animate = { direction: 'right', duration: '10' } }: Readonly<TechnologiesSectionProps>) {
  return <div className={''}>
    <p>{title}</p>
    <p>{description}</p>
    <div>
      <div className='flex overflow-y-hidden'>
        {
          technologies.map((tech, index) => <div key={title + index} className=''>
            <img src={tech.svgUrl} alt={tech.name + ' icon'} title={'visit ' + tech.name} className='h-16' />
          </div>)
        }
      </div>
    </div>

  </div>;
}
