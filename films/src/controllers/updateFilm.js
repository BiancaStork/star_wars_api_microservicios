const Films=require("../data");
const {response}= require("../utils");


module.exports= async(req, res)=>{
const film = await Films.upd_data(req.params.id, req.body);
response(res,200,film)
}