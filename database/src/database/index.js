const mongoose = require("mongoose");
const { MONGO_URI} = require("../config/envs")

//creo la conexion con mongoDB
const conn = mongoose.createConnection(MONGO_URI);

//definimos el modelo de Personajes
const Character = conn.model("Character", require("./schemas/characterSchema"))


Character.find().then(res=>console.log(res));
