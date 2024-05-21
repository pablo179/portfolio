'use client';
import { useState, useEffect } from 'react';

export default function ProyectModal({ trigger }: { trigger: boolean }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal(trigger);
  }, [trigger]);

  return (
    <div className='absolute left-0 top-0 h-screen w-screen'>
      {showModal ? (
        <div className='flex h-full w-full items-center justify-center bg-black bg-opacity-50'>
          <div className='h-96 w-96 rounded-lg bg-white p-4 drop-shadow-lg'>
            <div className='h-1/2 w-full bg-red-500'>
              <h1 className='text-2xl font-bold'>Project 1</h1>
              <p className='text-sm'>This is project 1</p>
            </div>
            <div className='h-1/2 w-full bg-green-500'>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
