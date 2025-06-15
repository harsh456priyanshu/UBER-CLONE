import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description);
        } else if (activeField === 'destination') {
            setDestination(suggestion.description);
        }
        // setPanelOpen(false);
        // setVehiclePanel(true);
    }

    return (
        <div>
            {suggestions.map((elum, idx) => {
                return (
                    <div
                        key={idx}
                        onClick={() => handleSuggestionClick(elum)}
                        className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'
                    >
                        <h2 className='bg-[#eee] flex gap-4 my-4 h-8 w-12 justify-center items-center'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium'>{elum.description}</h4>
                    </div>
                );
            })}
        </div>
    );
}

export default LocationSearchPanel;
