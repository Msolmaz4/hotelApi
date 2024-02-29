
const mongoose = require("mongoose")

const db = ()=>{
 try {
    mongoose.connect(process.env.MONGO_DB)
        .then(() => console.log('Connected!'));
 } catch (error) {
      console.log("hatalar vardb Connect bak")
 }
}

module.exports = db