const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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
            return res.status(200).json({
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