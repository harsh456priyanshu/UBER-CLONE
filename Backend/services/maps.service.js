const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apikey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`;

    try {
        const response = await axios.get(url);
        if(response.data.status  === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        }else{
            throw new Error('Unable to fetch coordinats');
        }
    }catch ( error ) {
        console.log(error);
        throw error;
    }

}


module.exports.getDistanceTime = async (origin , destination) => {

    if(!origin || !destination){
        throw new Error('Origin and Destination are Required');
    }
    const apikey = process.env.GOOGLE_MAPS_API;
    // const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`;
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apikey}`;
    try {
        const response = await axios.get(url);
        if(response.data.status  === 'OK') {

            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No routes found');
            }
            return response.data.rows[ 0].elements[0];  
        }else{
            throw new Error('Unable to fetch coordinats');
        }
    }catch ( err ) {
        console.log(err);
        throw err;
    }

}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input) {
        throw new Error('query is Required');
    }

    const apikey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apikey}`;


    try {
        const response = await axios.get(url);
        if(response.data.status === 'OK') {
             return response.data.predictions;
            //   return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new Error('Unable to fetch Suggstions');
        }

    }catch (err) {
        console.log(err);
        throw err;
    }
}
