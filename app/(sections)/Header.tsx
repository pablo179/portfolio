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
    <>
      <div className='columns'>
        <div className='column is-two-thirds content is-medium'>
          <p className='text-3xl'>{greet}</p>
          <h1>{titleFirst}</h1>
          <h2 className='mt-0'>{titleSecond}</h2>
          <p className='mt-10'>{description}</p>
        </div>
        <div className='column'>
          <figure className='image'>
            <Image
              src='/assets/pic_prof.png'
              alt='logo'
              width={384}
              height={384}
              priority
              className='pic_profile'
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
