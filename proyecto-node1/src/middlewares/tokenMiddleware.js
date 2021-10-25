const jwt = require("jsonwebtoken");
verifyToken = ((req,res, next)=>{
    const { token } = req.headers;
    console.log("Este es mi middleware", req.headers)
    jwt.verify(token, "miClave", function(err, decoded)
    {if (err){
        console.log("hubo error al verificar el token");
        res.status(401).send("no autorizado");
        return
    }
      console.log(decoded)
    });
    next();
  });

  module.exports = {
      verifyToken
  }
