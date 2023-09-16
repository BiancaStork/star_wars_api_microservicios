
const Character = require("../data");
const {response} = require("../utils");

module.exports= async (req, res)=>{
    const newCharacter = await Character.create();
    response(res,201,newCharacter);

    //res.status(200).send("Creando un personajes")
}