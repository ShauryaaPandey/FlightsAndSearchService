const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helpers');

class FlightService {
    
    //ek hi jgh object bnado 
    constructor(){
        this.airplaneRepo = new AirplaneRepository();
        this.flightRepo = new FlightRepository();
    }

     async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error : 'Arrival time cannot be less than the departure time.'};
            }
            const airplane = await this.airplaneRepo.getAirplane(data.airplaneId);
            const flight = await this.flightRepo.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw {error}; 
        }
     }

     async getAllFlightData(data){
         try{
             const flights = await this.flightRepo.getAllFlights(data);
             return flights;
         }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
         }
     }
}

module.exports = FlightService;



/**
 * what the data look like , sent from controller to service layer
 * {
 * flightNumber, 
 *  airplaneId
 * departureAirportId
 * arrivalAirportId
 * arrivalTime
 * departureTime
 * price
 * boardingGate
 *  totalSeats-> from AIRPLANE fetch  
 * }
 */