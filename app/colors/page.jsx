'use client'
import React, { useState } from 'react'
import BgCover from '@/components/BgCover';

const page = () => {
    const [bg, setBg] = useState('rgb(255, 255, 255)');
  return (
    <main className='min-h-dvh flex justify-center items-center p-3'>
        <div className='w-96 p-5 shadow-lg rounded'>
            <button className='border border-black rounded-full w-full py-2 mb-10'>
                Generate Color
            </button>


            <BgCover color={bg} size={54} rounded={true} />
        </div>
    </main>
  )
}

export default page
