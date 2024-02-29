
const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(require("./src/middelware/findSeach"))
const PORT = process.env.PORT ||3000
const db = require("./src/db/db")
db()
app.use(require("./src/middelware/logger"))


// router
app.get("/",(req,res)=>{
    res.send({
        message:"amasayafa"
    })
})
app.use(require("./src/middelware/auth"))
app.use("/users",require("./src/routes/user"))
app.use("/rooms",require("./src/routes/room"))
app.use("/resavartions",require("./src/routes/resavartion"))
app.use("/auth",require("./src/routes/auth"))
app.use('/documents', require("./src/routes/documents"))

app.listen(PORT,console.log("first",`${PORT}`))