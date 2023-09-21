const server = require("./src/server.js");

const { Character, Film, Planet } = require("./src/database")
// Planet.list().then((res)=>console.log(res))
// Planet.get(200).then(res=>console.log(res)); 
// Planet.insert({
//     _id: "200",
//     name: "PlanetaPrueba",
    
// }).then(res=>console.log(res))


server.listen(8004, ()=>{
    console.log("Database service on PORT 8004");
});