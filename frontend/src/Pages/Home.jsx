import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1572239780645-203c467a49b5?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16 ml-8' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n"  alt='Logo' />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
      </div>
    </div>
  )
}

export default Home;
