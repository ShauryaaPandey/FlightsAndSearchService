
const {ClientErrorsCodes,ServerErrorsCodes,SuccessCodes} = require('../utils/error-codes'); 

const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price   
    ){ //if any of the body params is missing
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data : {},
            success : false,
            message : "Invalid Body params",
            err : 'Missing mandatory properties to create a flight'
        });
    }

    //else if every condition satisfied
    next();
}

module.exports = {
    validateCreateFlight
}