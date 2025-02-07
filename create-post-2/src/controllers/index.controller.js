module.exports.indexController = function(req , res){
    res.cookie("token","")
    res.render("index")
}