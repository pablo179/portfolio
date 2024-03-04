'use client';
import { memo, useContext } from 'react';
import { Context } from '@/context/LanguajeContext';
import Image from 'next/image';
// Create a context

function Header() {
  const { getText } = useContext(Context);
  const [greet, titleFirst, titleSecond, description] = [
    'greet',
    'title-first',
    'title-second',
    'description',
  ].map(getText);
  return (
    <div className='flex w-full h-64'>
      <div className='h-full w-full flex flex-col justify-between' >
        <p className='text-3xl'>{greet}</p>
        <div>
          <h1 className='text-4xl font-bold'>{titleFirst}</h1>
          <h2 className='text-3xl font-bold'>{titleSecond}</h2>
        </div>
        <p className='
          text-left
          text-base
          pr-24
        ' >{description}</p>
      </div>
      <div className='w-96 h-full relative' >
        <Image src='/pic_prof.png' alt='logo' width={384} height={384} style={{ width: '100%', height: 'auto' }} priority/>
      </div>
    </div>
  );
}

export default memo(Header);
