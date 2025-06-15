import React from 'react'
import { useState , useEffect , useContext , useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import { SocketContext} from "../Context/SocketContext"
import  { UserDataContext} from "../Context/UserContext"


const Home = () => {
  const [ pickup , setPickup ] = useState('')
  const [ destination , setDestination ] = useState('')
  const [ panelOpen , setPanelOpen ]  = useState(false)
  const [ vehiclePanel, setVehiclePanel ] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen , setVehiclePanelOpen] = useState(false)
  const [ confirmRidePanel , setConfirmRidePanel ] = useState(false)
  const [vehicleFound , setVehicleFound] = useState(false)
  const [ waitingForDriver , setWaitingForDriver] = useState(false)

    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [ vehicleType, setVehicleType ] = useState(null)
    const [ ride, setRide ] = useState(null)


    const { socket } = useContext(SocketContext)
    const { user }  = useContext(UserDataContext)

    useEffect(() => {
        socket.emit("join", { userType: "user", userId: user._id })
    }, [ user ])



    const handlPickupChange = async (e) => {
      setPickup(e.target.value);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL || 'http://localhost:8000'}/maps/get-suggestions`, {
          params: { input: e.target.value },
          headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setPickupSuggestions(response.data);
      } catch (error) {
      console.error("Error fetching pickup suggestions:", error);
      }
    }

    const handleDestinationChange = async (e) => {
      setDestination(e.target.value);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL || 'http://localhost:8000'}/maps/get-suggestions`, {
          params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
        });
        setDestinationSuggestions(response.data);
      } catch (error) {
      console.error("Error fetching destination suggestions:", error);
      }
    }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
        gsap.to(panelRef.current, {
          height:'70%',
          // opacity:1
          padding:24
        })
        gsap.to(panelCloseRef.current, {
          opacity:1
        })
    } else {
           gsap.to(panelRef.current, {
          height:'0%',
          //opacity:0
          padding:20
          
        })
        gsap.to(panelCloseRef.current, {
          opacity:0
        })
      }
    }, [panelOpen])


  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current , {
        transform:'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current , {
        transform: 'translateY(100%)'
      })
    }
}, [ vehiclePanel ])   


useGSAP(function(){
  if(confirmRidePanel){
    gsap.to(confirmRidePanelRef.current , {
      transform:'translateY(0)'
    })
  } else {
    gsap.to(confirmRidePanelRef.current , {
      transform: 'translateY(100%)'
    })
  }
}, [ confirmRidePanel])   

useGSAP(function(){
  if(vehicleFound){
    gsap.to(vehicleFoundRef.current , {
      transform:'translateY(0)'
    })
  } else {
    gsap.to(vehicleFoundRef.current , {
      transform: 'translateY(100%)'
    })
  }
}, [ vehicleFound])  


useGSAP(function(){
  if( waitingForDriver){
    gsap.to( waitingForDriverRef.current , {
      transform:'translateY(0)'
    })
  } else {
    gsap.to( waitingForDriverRef.current , {
      transform: 'translateY(100%)'
    })
  }
}, [ waitingForDriver ])  


   async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL   || 'http://localhost:8000'}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(response.data)
        setFare(response.data)


    }

    async function createRide() {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL   || 'http://localhost:8000'}/rides/create`, {
                pickup,
                destination,
                vehicleType
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error creating ride:", error);
        }
    }







  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src='https://1000logos.net/wp-content/uploads/2021/04/Uber-logo.png' />
      <div onClick={() => {
        setPanelOpen(false)
      }} 
      className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover'  src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=''/>
      </div>
      <div className='bg-white flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} className='absolute  opacity-0 right-6 top-6 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e) => {
           submitHandler(e)
        }}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
          <input
          onClick={() => {
            setPanelOpen(true)
            setActiveField('pickup')
          }}
          value={pickup}
          onChange={handlPickupChange}
          className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
          type='text'
          placeholder='Add a pick-up location'
          />
          <input
           onClick={() => {
            setPanelOpen(true)
            setActiveField('destination')
          }}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
            type='text'
             placeholder='Enter your destination'
             value={destination}
          onChange={handleDestinationChange}
             />
        </form>
           <button
               onClick={findTrip}
               className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
               Find Trip
            </button>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen }
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={ setDestination}
                        activeField={activeField }
                    />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white'>
     <VehiclePanel
     selectVehicle={setVehicleType}
      fare = {fare}  setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>


      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
     < ConfirmRide
     createRide = {createRide}
     pickup = {pickup}
     destination = {destination}
     fare = {fare}
     vehicleType = {vehicleType}


      setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef}  className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
     < LookingForDriver

    createRide = {createRide}
     pickup = {pickup}
     destination = {destination}
     fare = {fare}
     vehicleType = {vehicleType}

      setVehicleFound={setVehicleFound} />
      </div> 

      
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0  px-3 py-6 pt-12 bg-white'>
     < WaitingForDriver waitingForDriver={waitingForDriver} />
      </div> 
      
      

    </div>
  )
}

export default Home