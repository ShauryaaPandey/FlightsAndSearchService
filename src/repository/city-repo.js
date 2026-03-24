// const city = require('../models/city');
//better way 
const { City } = require('../models/index');
//it returns all the models we will be making inside the models folder 
//whole DB object is returned 
//it is having db.city



class CityRepo {
  async createCity({ name }) {
    try {
      return await City.create({ name });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteCity({ cityid }) {
    try {
      return await City.destroy({
        where: { id: cityid }
      });
    } catch (error) {
      throw error;
    }
  }
}


module.exports = CityRepo;
//ab ye hm export kr rhe to ise hm khi or import kr skte h is class ko
//agr file/folder hota to hme require krne s ho jata 
//per ye part of code to import/export 