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
      src="https://images.pexels.com/photos/29193172/pexels-photo-29193172/free-photo-of-captivating-cherry-blossoms-with-traffic-light-in-japan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      alt="a portrait of Mc Samuel Shoko"
      className={" w-full rounded-3xl object-cover"+ ' '+ (styling ?? 'h-[60vh]')}
    />
  </div>
</div>
}
