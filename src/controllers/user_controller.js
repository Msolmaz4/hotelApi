const User = require("../models/user")
const bcrypt = require('bcrypt')

module.exports = {

    list:async (req,res)=>{
         const data = await res.getModelList(User)
         
         res.status(200).send({
            error:false,
            data,
            details:await res.getModelListDetails(User)
         })


    },
    create:async(req,res)=>{
        console.log(req.body)
       const password =  bcrypt.hashSync(req.body.password,8)
        console.log(password)
        const data = await User.create({...req.body,password})
        res.status(201).send({
            error:false,
            data
        })
    },
    read:async(req,res)=>{
        const data = await User.findOne({_id:req.params.id})
        res.status(202).send({
            error:false,
            data
        })
    },
    update:async(req,res)=>{
           console.log(req.params)
        const data = await User.updateOne({_id:req.params.id},req.body)
        res.status(200).send({
            error:false,
            new:await User.findOne({_id:req.params.id})
        })
    },
    delete :async(req,res)=>{
        const data = await User.deleteOne({_id:req.params.id})
        res.status(data.deletedCount ? 204 : 404).send({
            // error:false,
            error:!data.deletedCount,
             data
            })
    }


}
