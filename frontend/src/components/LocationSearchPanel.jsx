import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props);

    //sample array for location
    const locations = [
        "24B , Near Copoor's cafe Seriyans School",
        "22B , Near Malotra cafe Seriyans School",
        "20B , Near kapoor's cafe Seriyans School",
        "27D , Near Sinha's cafe Seriyans School"
    ]



  return (
    <div>
     {/* this is just a Sample Data */}

    {
        locations.map(function(elum , idx){
            return <div key={idx} onClick={() => {
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }} 
            
            className='flex gap-4  border-2 p-3 border-gray-50 active:border-black rounded-xl my-4  justify-start'>
            <h2  className='bg-[#eee] flex gap-4  my-4 h-8 w-12 justify-center items-center'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elum}</h4>
         </div>
        })
    }
    </div>
  )
}

export default LocationSearchPanel
