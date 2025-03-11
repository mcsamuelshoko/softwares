import React from 'react';

// import styles from './TechnologiesSection.css';

export interface TechnologiesSectionProps {
  title: string;
  description: string;
  technologies: { name: string, logoUrl: string,websiteUrl: string }[];
  animate?: { direction?: 'left' | 'right', duration?: string }
}

export function TechnologiesSection({ title, description, technologies, animate = { direction: 'right', duration: '10' } }: Readonly<TechnologiesSectionProps>) {
  return <div className={'space-y-4'}>
    <p className='text-2xl font-display font-medium opacity-50'>{title}</p>
    <p className='max-w-xl'>{description}</p>
    <div>
      <div className='flex flex-wrap overflow-y-hidden space-x-8 space-y-4'>
        {
          technologies.map((tech, index) => <div key={title + index} className=''>
            <img src={tech.logoUrl} alt={tech.name + ' icon'} title={'visit ' + tech.name} className='h-12 lg:h-16' />
            {/* {tech.name} */}
          </div>)
        }
      </div>
    </div>

  </div>;
}
