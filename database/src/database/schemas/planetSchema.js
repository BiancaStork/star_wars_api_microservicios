const { Schema } = require("mongoose");

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{String}],
    films: [{type:String, ref:"Film"}]

})

planetSchema.statics.list = async function () {
    return await this.find()
    .populate("films",["_id", "title"])
   
 };

 planetSchema.statics.get = async function (id){
    return await this.findById(id)
    .populate("films",["_id", "title"])
 };

 planetSchema.statics.insert = async function(character){
    return await this.create(character)
}

module.exports=planetSchema;