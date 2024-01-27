'use client'
import React, { useState } from 'react'

const page = () => {
    const [bg, setBg] = useState('rgb(255, 255, 255)');
  return (
    <main className='min-h-dvh flex justify-center items-center p-3'>
        <div className='w-96 p-5 shadow-lg rounded'>
            <button className='border border-black rounded-full w-full py-2 mb-10'>
                Generate Color
            </button>

            <div className="w-full h-96 border-2 border-black" style={{ backgroundColor: bg }}></div>

            <p className='my-5 font-bold'>
               RGB VALUE:   {bg}
            </p>
        </div>
    </main>
  )
}

export default page
