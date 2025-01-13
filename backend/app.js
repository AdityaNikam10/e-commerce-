const database = require('./db/Database');



//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path:'backend/config/.env'
    })
    
}   
const express = require('express');


const app=express()



database();

module.exports=app;
