const planets = require("./planets.json");

module.exports={
 list: async ()=>{
    return planets;
 },
 create: async()=>{
   throw Error("Hay un Error en la BDD al intentar crear el Planeta");
 }
};