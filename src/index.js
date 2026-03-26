const express = require("express"); 
//we can keep .dotenv in another config folder 
const bodyParser = require('body-parser');


const APIroutes = require('./routes/index');

//is trh kisi dusre self made ko accessing 
const {PORT} = require('./config/serverConfig');

const CityRepo = require("./repository/city-repo");

const setupAndStartServer = async()=>{

    //create the express object
    //inbuilt express object
    const app = express();
    //now we dont need to use another PORT var
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    //mapping the router object
    //any incoming req wit API , map with APIroutes
    app.use('/api' , APIroutes);


    //starting the app
    app.listen(3000,()=>{
         console.log(`Server started at ${PORT}`);
        // const repo = new CityRepo();
        // repo.createCity({name : "Sitapur"});
    });
}

setupAndStartServer();