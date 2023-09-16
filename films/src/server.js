const express = require("express");
const morgan = require("morgan");


const server=express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/films", require("./routes"));

//manejo de errores
server.use("*", (req, res)=>{
    res.status(404).send("Not Found"); //probar usar el manejador de errores propio
});
//manejador de errores
server.use((err, req, res, next)=>{
   
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });

});


module.exports=server;