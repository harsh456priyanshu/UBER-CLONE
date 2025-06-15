import React , { useContext } from 'react'
import { CaptainDataContext } from "../Context/CaptainContext"

const CaptainDetails = () => {


    const { captain }  = useContext(CaptainDataContext)

  return (
    <div>
      <div className='flex item-center justify-between'>
                <div className='flex item-center justify-start gap-3'>
                       <div className='flex item-center justify-between'>
                       <img className='h-10 w-10 rounded-full object-cover' src="https://imgs.search.brave.com/nA1wAJkPxFLBaAMtb7ZMHFsWWfmTCeT_uBamN2hR950/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/YXBweS1tYW4tc3R1/ZGVudC13aXRoLWFm/cm8taGFpcmRvLXNo/b3dzLXdoaXRlLXRl/ZXRoLWJlaW5nLWdv/b2QtbW9vZC1hZnRl/ci1jbGFzc2VzXzI3/MzYwOS0xNjYwOC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw" alt="" />
                       <h4 className='text-lg font-medium '>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                       </div>
                        <div>
                            <h4 className='text-xl font-semibold'>₹295.20</h4>
                            <p className='text-sm  text-gray-600 '>Earned</p>
                        </div>
                    </div>
                </div> 
                <div className='flex mt-8 p-3 bg-gray-200 rounded-xl justify-center gap-4 items-start'>
                    <div className='text-center'>
                        <i className='text-3xl font-thin ri-timer-2-line'></i>
                        <h5 className='text-lg font-medium' >10.2</h5>
                        <p className='text-sm text-gray-600' >Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className='text-3xl font-thin ri-speed-up-line'></i>
                        <h5 className='text-lg font-medium' >10.2</h5>
                        <p className='text-sm text-gray-600' >Hours Online</p>
                    </div>
                    <div className='text-center'>
                        <i className='text-3xl font-thin ri-booklet-line'></i>
                        <h5 className='text-lg font-medium' >10.2</h5>
                        <p className='text-sm text-gray-600' >Hours Online</p>
                    </div>
                </div>
    </div>
  )
}

export default CaptainDetails
