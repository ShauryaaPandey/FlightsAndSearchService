//CREATING AN END TO END API

//hmne class puri service layer s utha liii
const {CityService} = require('../services/index') 

//will be using that class objects now
const cityService = new CityService();
//object name should be diff from class name 



// req from frontend , then working in backend
//then resp send to backend 


/**
 * 
 * POST req
 * data --> req.body 
 */
const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        //returning in form of json
        return res.status(201).json({
              data : city,
              success : true,
              message : "Successfullly created the city",
              err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
             data : {},
             success : false,
             message: "Not able to create the city",
             err : error
        });
    }
}  


//request type , URL
//DELETE. --> /city/:id (URL pattern)
const destroy = async (req,res) => {
    try {
          const response = await cityService.deleteCity(req.params.id); 
          return res.status(200).json({
              data : response,
              success : true,
              message : "Successfullly deleted the city",
              err : {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
             data : {},
             success : false,
             message: "Not able to delete the city",
             err : error
        });
    }
}  

                              //what updates
//patch request && /city/:id && req-->body
const update = async (req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id,req.body); 
          return res.status(200).json({
              data : response,
              success : true,
              message : "Successfullly got the city",
              err : {}
        });   
    } catch (error) {
        console.log(error);
        console.log(error);
        return res.status(500).json({
             data : {},
             success : false,
             message: "Not able to update the city",
             err : error
        });
    }
}  




//req type and URL 
//GET ---> /city/:id
const get =async (req,res) => {
    try {
         const response = await cityService.getCity(req.params.id); 
          return res.status(200).json({
              data : response,
              success : true,
              message : "Successfullly got the city",
              err : {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
             data : {},
             success : false,
             message: "Not able to get the city",
             err : error
        });
    }
}  

//making fxn all qeuries related to single one
const getAll = async(req,resp) => {
      try {
         const cities  = await cityService.getAllCities(req.query);
         return resp.status(200).json({
              data : cities,
              success : true,
              message : "Successfullly fetched all cities",
              err : {}
        });
      } catch (error) {
        console.log(error);
        return resp.status(500).json({
             data : {},
             success : false,
             message: "Not able to Fetch the city",
             err : error
        });
      }
}

module.exports = {
    create,
    destroy, 
    get,
    update,
    getAll
}