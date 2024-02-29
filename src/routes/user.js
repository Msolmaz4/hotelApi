"use strict"

const router = require('express').Router()




const user = require("../controllers/user_controller")
const permiss = require("../middelware/permiss")
router.route("/")
.get(permiss.isAdmin, user.list)
.post(user.create)
router.route("/:id")
.get(user.read)
.patch(user.update)
.put(user.update)
.delete(permiss.isAdmin ,user.delete)

module.exports = router