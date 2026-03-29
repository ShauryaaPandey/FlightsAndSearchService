const express = require("express"); 
//we can keep .dotenv in another config folder 
const bodyParser = require('body-parser');


const APIroutes = require('./routes/index');

//is trh kisi dusre self made ko accessing 
const {PORT} = require('./config/serverConfig');

const CityRepo = require("./repository/city-repo");

// const sequelize = require('sequelize');

//accessing the tables/models
const {Airplane} = require('./models/index');
const {db} = require('./models/index');

const setupAndStartServer = async()=>{

    //create the express object
    //inbuilt express object
    const app = express();
    //now we dont need to use another PORT var
    
    // ✅ built-in parsers
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //mapping the router object
    //any incoming req wit API , map with APIroutes
    app.use('/api' , APIroutes);


    //starting the app
    app.listen(PORT, async()=>{
         console.log(`Server started at ${PORT}`);
        // const repo = new CityRepo();
        // repo.createCity({name : "Sitapur"});

        // const airports = await Airport.findAll({
        //     include : [{
        //         model : City
        //     }]
        // });
        // console.log(airports);

        //city k basis p airport nikalna 

        // console.log(airports);
        // db.sequelize.sync({alter: true});
        // const city = await City.findOne({
        //     where: {
        //         id : 9
        //     }
        // });
        // const airports = await city.getAirports();


        //we can also add airports directly
        //this method wrong , we cant direclty add 
        // await city.addAirport({
        //     name : 'Jindal Vijaynagar Airport'
        // })

        //first create then add
        // await city.createAirport({
        // name: 'Jindal Vijaynagar Airport'
        // });

        // const airport = await city.getAirports(); // dubara fetch
        // console.log(airport);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
    });
}

setupAndStartServer();