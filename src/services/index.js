const AirportService = require("./airport-direct-service");
const CrudService = require("./crud-service");
const FlightService = require("./flights-services");

module.exports = {
    CityService : require("./city-services"),
    FlightService : require("./flights-services"),
    AirportService: require('./airport-direct-service'),
    CrudService: require('./crud-service')
}