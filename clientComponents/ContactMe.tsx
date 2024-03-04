"use client";
import { memo, useContext } from 'react';
import { Context } from '@/context/LanguajeContext';

const ContactMe = () =>  {
    const { getText } = useContext(Context);
    const contactMe = getText('contact-me');
    return (
        <p className='text-xl font-semibold'>{contactMe}</p>
    )
}

export default memo(ContactMe);