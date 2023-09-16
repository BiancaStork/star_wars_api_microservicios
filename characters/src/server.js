const express = require("express");
const morgan = require("morgan");
// const router= require("./routes");

const server=express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/characters", require("./routes"));

//manejo de errores
server.use("*", (req, res)=>{
    res.status(404).send("Not Found"); //probar usar el manejador de errores propio
});
//manejador de errores propio, sobreescribiendo el manejador de errores x defecto de express
//el manejador de errores x defecto de express envia una traza con informacino "sensible" que nunca nos deberia pasar en nuestras aplicaciones---> Nunca deberiamos enviar informacion sensible al cliente 
server.use((err, req, res, next)=>{
    // res.send("manejador de errores!")
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    });

});


module.exports=server;