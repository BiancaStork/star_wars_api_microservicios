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


//con populate() le digo que me referencie/popule con el modelo que le espeifico con "ref:" por ej. en homeworld(planets) y en films(films)
 characterSchema.statics.list = async function () {
    return await this.find()
    .populate("homeworld",["_id", "name"])
    .populate("films", ["_id", "title"])
 };
 
 characterSchema.statics.get = async function (id){
    return await this.findById(id)
    .populate("homeworld",["_id", "name"])
    .populate("films", ["_id", "title"])
 };

characterSchema.statics.insert = async function(character){
    return await this.create(character)
}

module.exports=characterSchema;