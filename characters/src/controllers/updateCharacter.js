const Character = require("../data");
const {response} = require("../utils");

module.exports= async (req, res)=>{
    const character = await Character.upd_data(req.params.id, req.body);
    response(res,200,character);
}