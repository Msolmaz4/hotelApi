const Room = require("../models/room")


module.exports = {

    list:async (req,res)=>{
         const data = await res.getModelList(Room)
         
         res.status(200).send({
            error:false,
            data,
            details:await res.getModelListDetails(Room)
         })


    },
    create:async(req,res)=>{
       
        const data = await Room.create(req.body)
        res.status(201).send({
            error:false,
            data
        })
    },
    read:async(req,res)=>{
        const data = await Room.findOne({_id:req.params.id})
        res.status(202).send({
            error:false,
            data
        })
    },
    update:async(req,res)=>{
           console.log(req.params)
        const data = await Room.updateOne({_id:req.params.id},req.body)
        res.status(200).send({
            error:false,
            new:await Room.findOne({_id:req.params.id})
        })
    },
    delete :async(req,res)=>{
        const data = await Room.deleteOne({_id:req.params.id})
        res.status(data.deletedCount ? 204 : 404).send({
            // error:false,
            error:!data.deletedCount,
             data
            })
    }


}
