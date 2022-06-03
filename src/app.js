const express = require('express');
require('dotenv').config();
const http = require('http');
const https = require('https');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();









if(process.env.ENABLE_SSL === 'true'){
    
    /******  create a folder 'cert' inside put your privateKey and certificate files and add the filepath accordingly *******/ 

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


