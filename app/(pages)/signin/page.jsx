import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const page = () => {
  return (
    <section>
        <div className="min-h-dvh flex justify-center items-center">
            <div className="shadow-lg p-5 rounded-lg">
                <p className="text-center text-3xl mb-10">
                    Sign Up For a Free Account
                </p>

                <form action="">
                    <input type="email" placeholder='Enter your Email Address' className='border rounded-lg w-full py-2 px-3 mb-5' />

                    <button className='bg-blue-600 w-full rounded-full py-2 text-white mb-5 '>
                        Sign Up
                    </button>
                </form>

                <button className='bg-emerald-600 py-2 w-full rounded-full text-white'>
                   <FontAwesomeIcon icon={faGoogle} />  Sign Up with Google 
                </button>
            </div>
        </div>
    </section>
  )
}

export default page
