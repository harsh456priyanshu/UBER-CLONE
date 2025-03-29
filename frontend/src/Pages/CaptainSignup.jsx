import React , {useState} from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData , setUserData] = useState({});

  const submitHandeler = (e) => {
    e.preventDefault();
    
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }


  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt='Logo' />

        <form onSubmit={(e) => {
          submitHandeler(e)
        }}>

          <h3 className='text-base font-medium mb-2'>What's our Captain's Name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] rounded px-4  w-1/2 py-2 border   text-base placeholder:text-sm'
              type='text'
              placeholder='first Name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] rounded px-4 w-1/2 py-2 border text-base placeholder:text-sm'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
          <h3 className='text-base font-medium mb-5'>What's our  Captain's email</h3>
          <input
            required
            className='bg-[#eeeeee] rounded px-4 mb-5 py-2 border w-full text-base placeholder:text-sm'
            type='email'
            placeholder='email@example.com'
            value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
          />

          <h3 className='text-base font-medium mb-2'>Enter Password</h3>

          <input
            required
            className='bg-[#eeeeee] rounded mb-5 px-4 py-2 border w-full text-base placeholder:text-sm'
            type='password'
            placeholder='password'
            value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
          />

          <button className='bg-[#111] text-white font-semibold  mt-7 rounded px-4 py-2 w-full text-lg'>Login</button>


          <p className='text-center'>Already have a Account <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
        </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>By proceeding , your consent to get call , whatsapp of SMS messages , including by automated means, from Uber and its affiliates to the number provided</p>
      </div>
    </div>
  )
}

export default CaptainSignup
