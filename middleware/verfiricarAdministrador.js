const { response } = require("express");
const VerificarAdministrador = (req,res=response,next)=>{
    // verificar la informacion enviada
   /* {
        "user":{
            "nombre":"Juan",
            "usuario":"j@gmail.com",
            "rol":"Administrador,Usuario",
            "clave":"123456"
        },
        "token":'asdasdasdasd31423423rwefsdf_',
    }*/
    if(!req.body.user){
        return res.status(500).json(
            {
                mensaje:'Datos del usuario son incorrectos'
            }
        )
    }
    const {rol,nombre} =req.body.user;
    if(rol!=='ADMIN'){
        return res.status(401).json({
            mensaje:`${nombre}, su rol no permite consultar este recurso`
        })
    }
   next();
}

module.exports=VerificarAdministrador;