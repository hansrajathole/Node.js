const express  = require('express');
const router = express.Router()
const postController = require("../controllers/post.controller")
const protecteRoute = require("../middleware/protecteRoute")


router.post("/create",protecteRoute,postController.createController)
router.patch("/update/:id",protecteRoute,postController.likesController)



module.exports = router