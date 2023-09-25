//const films = require("./films.json");
const axios = require("axios");
const url = "http://database:8004/Film";
//const url = "http://localhost:8004/Film"

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
    film
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
    film
  );
  return data;
},
};