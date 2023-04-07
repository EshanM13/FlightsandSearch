const express = require('express');
const {PORT} = require ('./config/serverconfig');

const startAndSetupServer = async() =>{
    const app = express ();

    app.listen(PORT, ()=>{
        console.log(`Listening at ${PORT}`);
    });
}

startAndSetupServer();