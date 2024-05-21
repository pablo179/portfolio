"use client"

import { memo, useContext } from 'react';
import { Context } from '@/context/LanguajeContext';

const LangButton = () => {
    const { lang, setLang } = useContext(Context);
    return (
        <div className="flex justify-end">
            <button
                className="button is-primary"
                onClick={() => {
                    setLang(lang === 'es' ? 'en' : 'es');
                }}
            >
                {lang === 'es' ? 'EN' : 'ES'}
            </button>
        </div>
    );
}

export default memo(LangButton);