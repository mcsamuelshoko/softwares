import React from 'react';

// import styles from './Avatar.css';

export interface AvatarProps {
  url: string;
  styling?: string;
}

export function Avatar({url,styling}: Readonly<AvatarProps>) {
  return <div>
  <div className="p-2 bg-white rounded-4xl  overflow-y-clip">
    <img
      src={url}
      alt="avatar"
      className={" w-full rounded-3xl object-cover"+ ' '+ (styling ?? 'w-full lg:h-[60vh] object-cover')}
    />
  </div>
</div>
}
