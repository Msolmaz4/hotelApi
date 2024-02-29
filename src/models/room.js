


const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomnumber: {
      type: Number,
      unique: true,
      required: true,
    },
    image: {
      type:Array,
      default:[]
    },
    price: {
      type: Number,
      required: true,
    },
    bedType: {
      type: String,
      enum: ["tek", "cift", "aile", "kRAL"],
    },
  },
  {
    collection: "rooms",
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", RoomSchema);







// const mongoose = require("mongoose");





// const RoomSchema = new mongoose.Schema(
//   {
//     roomnumber: {
//       type: Number,
//       unique: true,
//       required: true,
//     },
//     image: {
//       type: String,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     bedType: {
//       type: String,
//       enum: ["tek", "cift", "aile", "kRAL"],
//     },
//     resarvationId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Resarvation",
//     },
//   },
//   {collection: "rooms",
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Room", RoomSchema);
