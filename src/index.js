const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require ('./config/serverconfig');


const startAndSetupServer = async() =>{
    // create express object
    const app = express ();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))


    app.listen(PORT, ()=>{
        console.log(`Listening at ${PORT}`);
    });
}

startAndSetupServer();