
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: function (value) {
          return value.length >= 4;
        },
        message: "userName msut be at least 4",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value.length >= 4;
        },
        message: "password must be at leat 4",
      },
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          if (value.includes("@")) {
            return value;
          }
        },
        message: "email@ ist nict includes",
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);









// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema(
//   {
//     resarvationId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Resarvation",
//     },

//     username: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//       validate: {
//         validator: function (value) {
//           return value.length >= 4;
//         },
//         message: "userName msut be at least 4",
//       },
//     },
//     password: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (value) {
//           return value.length >= 4;
//         },
//         message: "password must be at leat 4",
//       },
//     },
//     email: {
//       type: String,
//       required: true,
//       validate: {
//         validator: function (value) {
//           if (value.includes("@")) {
//             return value;
//           }
//         },
//         message: "email@ ist nict includes",
//       },
//     },
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     collection: "users",
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("User", UserSchema);
