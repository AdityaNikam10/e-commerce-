
if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path:'config/.env'
    })
    
}



const app = require('./app');

//handling uncaught exceptions

process.on("uncaught Exception",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`shutting down the server for handling uncaught exception`)
});



//create server

const server =app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);

    
})
