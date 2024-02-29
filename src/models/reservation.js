
const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    
    },
    arival_date: {
      type: Date,
    },
    departure_date: {
      type: Date,
      default: new Date()
    },
    guest_number: {
      type: String,
      required: true,
    },
    night: {
      type: Number || String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    totalprice: {
      type: Number,
      default: 0,
    },
  },
  {
    collection:"reservations",
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservation", ReservationSchema);





// const mongoose = require("mongoose");




// const ResavartionSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
    
//     },
//     roomId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Room",
    
//     },
//     arival_date: {
//       type: Date,
     
//     },
//     departure_date: {
//       type: Date,
//       default: new Date()
//     },
//     guest_number: {
//       type: String,
//       required: true,
//     },
//     night: {
//       type: Number || String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     totalprice: {
//       type: Number,
//       default: 0,
//     },
//   },
//   {
//     collection:"resarvations",
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Resarvartion", ResavartionSchema);
