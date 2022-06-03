const express = require('express');
require('dotenv').config();
const http = require('http');
const https = require('https');
const fs = require('fs');
const route = require('./routes/route');
const connectToMongo = require('./database/dbConnection');
connectToMongo();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(route);



/*** ssl implementation ***/

if(process.env.ENABLE_SSL === 'true'){
    
    /******  create a folder 'cert' & inside cert put your privateKey and certificate files and add the filepath accordingly *******/ 

    const privateKey = fs.readFileSync("filePath","utf-8");
    const certificate = fs.readFileSync("filePath","utf-8");
    const credentials = {key : privateKey, cert : certificate};

    https.createServer(credentials,app).listen(port, ()=>{
        console.log(`server started on port ${port}`);
    });
}
else{

    http.createServer(app).listen(port, ()=>{
        console.log(`server started on port ${port}`);
    })
}


