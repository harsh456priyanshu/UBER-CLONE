const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname , lastname , email , password , color , plate , capacity , vehicleType
}) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain =  await captainModel.create({   // await for the captainModel to create a new captain
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}