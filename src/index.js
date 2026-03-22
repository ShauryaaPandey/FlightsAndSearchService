const express = require("express");
require('dotenv').config() //isse env shi s access hopaega 

const setupAndStartServer = async()=>{

    //create the express object
    //inbuilt express object
    const app = express();
    const PORT = 3000;
    //starting the app
    app.listen(3000,()=>{
         console.log(`Server started at ${PORT}`);
         console.log(process.env);
    });
}


setupAndStartServer();