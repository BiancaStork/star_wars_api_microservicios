const { Schema } = require("mongoose");

const characterSchema = new Schema({
   _id: String, //para id normalmente en mongo se usa Schema.Types.ObjectId
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String, //por el momento lo dejamos como String--> despues ver con la doc. de mongoose ["MALE", "FEMALE" "N/A"]
    homeworld: {type:String, ref:"Planet"}, //Referencia al id del PLaneta
    films: [{type:String, ref:"Film"}] //Array de Referencia  a Peliculas
});

module.exports=characterSchema;