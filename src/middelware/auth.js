"use strict";
const jwt = require("jsonwebtoken");
module.exports = async(req,res,next)=>{

    const auth = req.headers?.authorization || null;
    console.log(auth,"autjjjjjjjj")
    const token = auth ? auth.split(" ") :  null
     console.log(token,"authdaki token")
     if (token && token[0] == "Bearer") {
        
        jwt.verify(token[1], process.env.ACCESS_KEY, (error, data) => {
            console.log(data,"authwiderdata")
          req.user = data;
          next(); 
        });
     } else {
        next(); 
     }
}
