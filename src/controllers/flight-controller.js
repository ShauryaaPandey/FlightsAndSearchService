const {ClientErrorsCodes,ServerErrorsCodes,SuccessCodes} = require('../utils/error-codes');

const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
     const flightReqData = {
          flightNumber : req.body.flightNumber,
          airplaneId:req.body.airplaneId,
          departureAirportId:req.body.departureAirportId,
          arrivalAirportId:req.body.arrivalAirportId,
          arrivalTime:req.body.arrivalTime,
          departureTime:req.body.departureTime,
          price:req.body.price
     } 
        const flight = await flightService.createFlight(flightReqData);
        return res.status(SuccessCodes.CREATED).json({
             data : flight,
              success : true,
              message : "Successfullly created the Flight",
              err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
             data : {},
             success : false,
             message: "Not able to create the Flight",
             err : error
        });       
    }
}

const getAll = async(req,res)=>{
       try {
            const resp = await flightService.getAllFlightData(req.query);
            return res.status(SuccessCodes.OK).json({
              data : resp,
              success : true,
              message : "Successfullly Fetched the Flights",
              err : {}
            });
       } catch (error) {
            console.log(error);
            return res.status(500).json({
            data : {},
            success : false,
            message: "Not able to Fetch the Flight",
            err : error
         });
    }
}

module.exports={
     create,
     getAll
}