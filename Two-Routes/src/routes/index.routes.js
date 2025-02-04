const express = require("express")
const router = express.Router()
const indexContoller = require("../controller/index.controller")

router.get("/",indexContoller.indexContoller)

module.exports = router