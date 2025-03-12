import React from 'react';
// import styles from './BigButton.css';

export interface BigButtonProps {
  title: string;
  link: string;
  svgUrl: string;
  styling?: string;
  color?: 'primary' | 'secondary';
}

export function BigButton({ title, link, svgUrl, styling, color = 'secondary' }: Readonly<BigButtonProps>) {
  const handleOpenLink = () => {
    window.open(link, '_blank');
  };
  const imageUrl: string = "https://images.unsplash.com/photo-1517196084897-498e0abd7c2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const colorStyling: string = (color === 'primary' ? 'bg-accent/90' : 'bg-offWhite/70');

  return <button type='button' title={'goto ' + title} onClick={handleOpenLink} className={colorStyling + '  border-8 border-gray-200 shadow-sm text-primary bg-blend-soft-light hover:bg-blend-lighten hover:opacity-90  rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 md:p-8 px-16 font-medium text-xl hover:cursor-pointer hover:text-gray-400 hover:shadow-md transition-all ' + styling}
    style={{
      backgroundImage: `url('${imageUrl}')`,
      // filter: "saturate(0)",
      backgroundSize: "cover",
      boxShadow: `inset 0 -12px 24px 0 #2D4E4E,
      inset 0 18px 27px 0 #457373
      `,
      // inset 20 4 22px 0 #385C5C,
      // inset -18 4 37px 0 #355F5F

    }} >{
      <div className='flex items-center justify-center'
      // style={{ backgroundImage: `url('https://www.makistudio.online/images/site/waves-abstract.png')`, }}
      >
        <img src={svgUrl} alt="svg icon" className='h-10 md:h-12' />
        <p className='text-2xl md:text-3xl lg:text-4xl ml-8'>{title}</p>
      </div>
    }</button>;
}
