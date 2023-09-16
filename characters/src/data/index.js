const characters = require("./characters.json");

module.exports={
 list: async ()=>{
    return characters;
 },
 create: async()=>{
   throw Error("Hay un Error en la BDD al crear el personaje");
 }
};
