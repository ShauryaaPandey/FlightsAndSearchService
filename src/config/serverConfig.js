const dotenv = require('dotenv'); //isse env shi s access hopaega 

//from this file we will be accessing the PORT 
dotenv.config();

//then after accessing from here we can export these 
//and import them in the index.js
module.exports = {
    PORT : process.env.PORT 
}