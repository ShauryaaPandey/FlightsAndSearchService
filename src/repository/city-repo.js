// const city = require('../models/city');
//better way 
const { City } = require('../models/index');
//it returns all the models we will be making inside the models folder 
//whole DB object is returned 
//it is having db.city



class CityRepo {
  //directly access the name key 
  //instead of obj.key 
  async createCity({ name }) {
    try {
      return await City.create({ name });
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw error;
    }
  }

  async deleteCity({ cityid }) {
    try {
      return await City.destroy({
        where: { id: cityid }
      });
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw error;
    }
  }
  
        //which city   what we want to update
        //data will be key value pair 
        //what we want to update and with which value 
  async updateCity(cityid , data) {
     try {
       const city = await City.update(data,{
        where: {
           id : cityid
        }
       });
       return city;
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw error;
    }
  }



  async getCity(cityid) {
    try {
      return await City.findByPk(cityid); 
    } catch (error) {
      console.log("Something went wrong in the repo layer");
      throw error;
    }
  }

}


module.exports = CityRepo;
//ab ye hm export kr rhe to ise hm khi or import kr skte h is class ko
//agr file/folder hota to hme require krne s ho jata 
//per ye part of code to import/export  