//const planets = require("./planets.json");
const axios = require("axios");
const url = "http://database:8004/Planet";
//const url = "http://localhost:8004/Planet"


module.exports={
 list: async ()=>{
    const { data } = await axios.get(url);
    return data;
 },
 getOne: async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
},
 create: async()=>{
  // throw Error("Hay un Error en la BDD al crear el personaje");
  const { data } = await axios.post(
    url,
   planet
  );
  return data;
 },
 del_data: async (id) => {
  const { data } = await axios.delete(
    `${url}/${id}`
  );
  return data;
},

upd_data: async (id, character) => {
  const { data } = await axios.put(
    `${url_conn}/${id}`,
    planet
  );
  return data;
},
};