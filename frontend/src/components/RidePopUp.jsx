import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.setRidePopupPanel(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>New Ride Available !</h3>
      <div className='flex item-center justify-between p-3 bg-yellow-400 rounded-lg mt-3'>
        <div className='flex items-center gap-3'>
          <img className='h-12 w-12 rounded-full object-cover' src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png" alt="" />
          <h2 className='text-xl font-medium'>Harsh Patel</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex item-center gap-5  p-3 border-b-2'>
            <i className='text-lg ri-map-pin-user-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-color-600'>KankariyaTalab , Ahemdabad</p>
            </div>
          </div>
          <div className='flex item-center gap-5 p-3 border-b-2'>
            <i className=' text-lg ri-map-pin-2-fill'></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-color-600'>KankariyaTalab , Ahemdabad</p>
            </div>
          </div>
          <div className='flex item-center gap-5 p-3 '>
            <i className=' text-lg ri-currency-line'></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm -mt-1 text-color-600'>Cash</p>
            </div>
          </div>
        </div>

        <div className='flex mt-5 w-full item-center justify-between'>
        <button onClick={() => {
            props.setRidePopupPanel(false)
          }} className=' mt-1 bg-gray-300 text-gray-800 font-semibold p-3 px-8 rounded-lg'>Ignore</button>

          <button onClick={() => {
            props.setConfirmRidePopupPanel(true)
          }} className=' bg-green-600 text-white font-semibold p-3 px-8 rounded-lg'>Accept
          </button>


         
        </div>
      </div>
    </div>
  )
}


export default RidePopUp