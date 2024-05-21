"use client"
import { memo, useContext } from 'react';
import { Context } from '@/context/LanguajeContext';

const LabelComponent = ({ label }: { label: string }) => {
    const { getText } = useContext(Context);
    const text = getText(label);
    return (
        <> { text }</>
    )
}

export default memo(LabelComponent);