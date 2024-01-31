'use client'
import { UserContext } from '@/context/UserProvider';
import React, {useContext, useEffect, useState} from 'react'

const Home = () => {
  const [count, setCount] = useState(0);
 

  const increment = () =>{
    setCount(count + 1)
  }
  // tenery
  const decrement = () =>{
    setCount( count < 1 ? count :  count - 1)
  }

  useEffect(()=> {
    // Function to execute
    console.log('Clicks: ', count);

    // Clean Up Function
    return ()=> {
      console.log("loading");
    }
  }, [count]); //Dependency array


  const person =  useContext(UserContext)


  return (
    <section className='min-h-dvh  flex justify-center items-center'>
        <div className='bg-white w-96 text-center p-3 shadow-lg shadow-green-200 rounded'>
          <p>
            Full Name: {person.name} <br />
            Age: {person.age}
          </p>
          <h1 className='text-2xl mb-10'>Counter</h1>
          
          <h1 className='text-3xl font-mono'>
           {count}
          </h1>

          <button onClick={increment} className='bg-purple-400 py-2 px-5 rounded-full border-none'> Increase </button>
          <button onClick={decrement} className='bg-purple-400 py-2 px-5 rounded-full border-none'> Decrease </button>
        </div>
    </section>
  )
}

export default Home
