const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index.controller')

// router.get('/',indexController.indexController)
// router.get('/chat',indexController.ChatController)
router.get('/chats',indexController.chatController)
router.get('/addnewchat',indexController.addNewChatController)
router.post('/newchat',indexController.newChatController)
router.get("/chats:id/edit",indexController.editController)
router.get("/chats:id",indexController.deleteController)


module.exports = router