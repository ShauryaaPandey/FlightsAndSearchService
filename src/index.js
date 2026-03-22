const express = require("express"); 
//we can keep .dotenv in another config folder 

//is trh kisi dusre self made ko accessing 
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async()=>{

    //create the express object
    //inbuilt express object
    const app = express();
    //now we dont need to use another PORT var
    //starting the app
    app.listen(3000,()=>{
         console.log(`Server started at ${PORT}`);
        
    });
}


setupAndStartServer();