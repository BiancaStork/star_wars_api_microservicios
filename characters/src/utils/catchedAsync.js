
//con esta funcion,cuando encuentro un error le paso al manejador de errores de express

module.exports = (fn) =>{
    return function (req, res, next){
        fn(req,res).catch((err)=>{
            next(err);
        })
    }
};