const express= require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware")


const app = express();
app.use(morgan("dev"));

//distribuyo las peticiones
app.use("/characters", createProxyMiddleware({
    //target:"http://localhost:8001",
    target: "http://characters:8001",  //le indico el puerto donde va a escuchar
    changeOrigin:true,
}));

app.use("/films", createProxyMiddleware({
    //target: "http://localhost:8002", 
    target: "http://films:8002",  
    changeOrigin:true,
}));

app.use("/planets", createProxyMiddleware({
    //target: "http://localhost:8003",
     target: "http://planets:8003",  
    changeOrigin:true,
}));

app.listen(8000, ()=>{
    console.log("Gateway on port 8000")
})