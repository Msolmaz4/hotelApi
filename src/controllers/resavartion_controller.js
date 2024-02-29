

const Reservation = require("../models/reservation")


module.exports = {

    list:async (req,res)=>{
         const data = await res.getModelList(Reservation,["roomId","userId"])
         console.log(data,"list")
         
         res.status(200).send({
            error:false,
            data,
            details:await res.getModelListDetails(Reservation)
         })
    },
    create:async(req,res)=>{
         
        const data = await Reservation.create(req.body)
        res.status(201).send({
            error:false,
            data
        })
    },
    read:async(req,res)=>{
        const data = await Reservation.findOne({_id:req.params.id})
        res.status(202).send({
            error:false,
            data
        })
    },
    update:async(req,res)=>{
           console.log(req.params)
        const data = await Reservation.updateOne({_id:req.params.id},req.body)
        res.status(200).send({
            error:false,
            new:await Reservation.findOne({_id:req.params.id})
        })
    },
    delete :async(req,res)=>{
        const data = await Reservation.deleteOne({_id:req.params.id})
        res.status(data.deletedCount ? 204 : 404).send({
            error:!data.deletedCount,
             data
            })
    }
}




// const Resarvartion = require("../models/resavartion")


// module.exports = {

//     list:async (req,res)=>{
//          const data = await res.getModelList(Resarvartion,"users")
         
//          res.status(200).send({
//             error:false,
//             data,
//             details:await res.getModelListDetails(Resarvartion)
//          })


//     },
//     create:async(req,res)=>{
       
//         const data = await Resarvartion.create(req.body)
//         res.status(201).send({
//             error:false,
//             data
//         })
//     },
//     read:async(req,res)=>{
//         const data = await Resarvartion.findOne({_id:req.params.id})
//         res.status(202).send({
//             error:false,
//             data
//         })
//     },
//     update:async(req,res)=>{
//            console.log(req.params)
//         const data = await Resarvartion.updateOne({_id:req.params.id},req.body)
//         res.status(200).send({
//             error:false,
//             new:await Resarvartion.findOne({_id:req.params.id})
//         })
//     },
//     delete :async(req,res)=>{
//         const data = await Resarvartion.deleteOne({_id:req.params.id})
//         res.status(data.deletedCount ? 204 : 404).send({
//             // error:false,
//             error:!data.deletedCount,
//              data
//             })
//     }


// }
