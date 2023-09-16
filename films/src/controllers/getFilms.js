const Films=require("../data");
const {response}= require("../utils");


module.exports= async(req, res)=>{

const films = await Films.list()
// res.status(200).json(films);
response(res,200,films)
}