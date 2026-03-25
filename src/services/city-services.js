const { CityRepo } = require('../repository/index');
//improrting from the repo layer colecitvely in form of the object 

class CityService {
    constructor(){
        this.CityRepo = new CityRepo();
    }

    async createCity(data){
          try {
             const city = await this.CityRepo.createCity(data);
             return city;
          } catch (error) {
             console.log("Something went wrong at service layer");
             throw {error};
          }
    }

    async deleteCity(cityid){
          try {
             const response =await this.CityRepo.deleteCity(cityid);
             return response;
          } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
          }
    }

    async updateCity(cityid,data){
          try {
            const city =await this.CityRepo.updateCity(cityid,data);
            return city;
          } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
          }
    }

    async getCity(cityid){
          try {
            const city = await this.CityRepo.getCity(cityid);
            return city;
          } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
          }
    }
}


module.exports = CityService;