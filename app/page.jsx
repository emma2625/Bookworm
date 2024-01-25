import React from 'react'

const Home = () => {
  return (
    <section className='min-h-dvh  flex justify-center items-center'>
        <div className='bg-white w-96 text-center p-3 shadow-lg shadow-green-200 rounded'>
          <h1 className='text-2xl mb-10'>Counter</h1>

          <h1 className='text-3xl font-mono'>0</h1>

          <button className='bg-purple-400 py-2 w-full rounded-full border-none'> Count </button>
        </div>
    </section>
  )
}

export default Home
