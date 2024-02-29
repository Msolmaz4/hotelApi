"use strict"

const router = require('express').Router()




const resavartion = require("../controllers/resavartion_controller")

router.route("/")
.get(resavartion.list)
.post(resavartion.create)
router.route("/:id")
.get(resavartion.read)
.patch(resavartion.update)
.put(resavartion.update)
.delete(resavartion.delete)

module.exports = router