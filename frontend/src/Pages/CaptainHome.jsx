import React , {useState, useEffect , useContext , useRef} from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SocketContext } from '../Context/SocketContext'
import { CaptainDataContext } from '../Context/CaptainContext'

const CaptainHome = () => {

    const [ridePopupPanel , setRidePopupPanel ] = useState(true)
    const [confirmRidePopupPanel , setConfirmRidePopupPanel ] = useState(false)
    const ridePopupPanelRef = useRef(null)
    const confirmRidePopupPanelRef = useRef(null)


    const { socket } = useContext(SocketContext);
    const { captain } = useContext(CaptainDataContext)

    useEffect(() => {
      socket.emit('join', {
        userId: captain._id,
        userType: 'captain'

      })
    })

    useGSAP(function(){
        if(ridePopupPanel){
          gsap.to(ridePopupPanelRef.current , {
            transform:'translateY(0)'
          })
        } else {
          gsap.to(ridePopupPanelRef.current , {
            transform: 'translateY(100%)'
          })
        }
    }, [ ridePopupPanel ])  


    useGSAP(function(){
        if(confirmRidePopupPanel){
          gsap.to(confirmRidePopupPanelRef.current , {
            transform:'translateY(0)'
          })
        } else {
          gsap.to(confirmRidePopupPanelRef.current , {
            transform: 'translateY(100%)'
          })
        }
    }, [ confirmRidePopupPanel ])  

    return (

        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex  item-center justify-between w-screen' >
                <img className='w-20' src='https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png' />
                <Link to='/captain-home' className=' h-7 w-7 bg-white flex item-center justify-center rounded-full'>
                    <i className='text-lg font-medium ri-logout-box-r-line'></i>
                </Link>
            </div>
            <div className='h-3/5'>
                <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='' />
            </div>
            <div className='h-2/5 p-6'>
                <CaptainDetails />
            </div>
            <div>
                <div ref={ridePopupPanelRef} className='fixed w-full z-10  translate-y-full bottom-0 px-3 py-10 pt-12 bg-white'>
                    < RidePopUp  setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
                </div>
                <div ref={confirmRidePopupPanelRef} className='fixed w-full z-10  translate-y-full h-screen bottom-0 px-3 py-10 pt-12 bg-white'>
                    < ConfirmRidePopUp  setConfirmRidePopupPanel={setConfirmRidePopupPanel}  setRidePopupPanel={setRidePopupPanel} />
                </div>
            </div>
        </div>
    )
}

export default CaptainHome
