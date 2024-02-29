module.exports = {
    isLogin:async(req,res,next)=>{
        if(req.user ){
            next()
        }else {
            res.send("login musss")
        }

    },
    isAdmin :async(req,res,next)=>{
        if(req.user && req.user.isAdmin){
            next()
        }else{
         res.send("isAdmin muss")
        }

    }
}