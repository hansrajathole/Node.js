// const { params } = require('params')
const Chat = require('../models/chat.model')
module.exports.indexController = function(req, res){
    res.send("index page")
}

// module.exports.ChatController = async function(req, res){
//     const { from , to , msg } = req.query
//     console.log(from);
    
//     const newChat = new Chat({
//         from : from,
//         to : to ,
//         msg : msg,
//         // created_at : new Date()
//     })
//     console.log(newChat);
//     await newChat.save()
//     res.send("send msg")
    
// }

module.exports.chatController = async function(req , res){
    const chats = await Chat.find()
    res.render("index",{chats})
    
}

module.exports.addNewChatController = async function(req, res){
    res.render('newChat')
}
module.exports.newChatController = async function(req, res){
    
    const {from, to , msg} = req.body
    newChat = Chat({
        from:from,
        to :to,
        msg : msg
    })
    await newChat.save()
    res.redirect('/chats')
}

module.exports.deleteController = async function(req, res){
    let {id} = req.params
    await Chat.findByIdAndDelete(id)
    res.redirect("/chats")
}
module.exports.editController = async function(req, res){
    let { id } = req.params
    const chat = await Chat.findById(id)
    res.render("edit", { chat })
}