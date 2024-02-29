"use strict"

const router = require('express').Router()




const room = require("../controllers/room_controller")
const permiss = require("../middelware/permiss")

router.route("/")
.get(permiss.isLogin,room.list)
.post(room.create)
router.route("/:id")
.get(room.read)
.patch(room.update)
.put(room.update)
.delete(permiss.isAdmin,room.delete)

module.exports = router