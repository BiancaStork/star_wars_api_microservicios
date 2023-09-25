const Characters=require("../data");
const {response} = require("../utils");


module.exports= async(req, res)=>{
const { id } = req.params;
 const character = await Characters.del_data(id)
  response(res,200,character)
}
