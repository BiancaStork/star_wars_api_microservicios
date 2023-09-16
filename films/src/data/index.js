const films = require("./films.json");

module.exports={
 list: async ()=>{
    return films;
 },
 create: async()=>{
   throw Error("Hay un Error en la BDD al intentar crear el Film");
 }
};