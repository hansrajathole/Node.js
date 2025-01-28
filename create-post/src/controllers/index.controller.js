const userModel = require("../models/user.model");
const postModel = require("../models/post.model");
module.exports.indexController = function (req, res) {
  res.render("index");
};
module.exports.createUser = async function (req, res) {
  const { username, profileImg, email, bio } = req.body;
  const newUser = await userModel.create({
    username,
    profileImg,
    email,
    bio,
  });

  res.redirect("/home");
};

module.exports.homeController = async function (req, res) {
  const users = await userModel.find({})
  const user =users[users.length-1]
  console.log(user);
  const posts = await postModel.find({});
  res.render("home",{posts,user});
};

module.exports.createController = async function (req, res) {
  res.render("createPost");
}

module.exports.createPostController = function (req, res) {
  const { postImage, caption } = req.body;
  console.log(req.body);
  
  const newPost = postModel.create({
    postImage,
    caption,
  });
  res.redirect("/home");
}

module.exports.likePost = async function (req, res) {
  const id = req.params.id;
  const post = await postModel.findById(id);  
  await postModel.findByIdAndUpdate(id, { likes: post.likes + 1});
  res.redirect("/home");

}

module.exports.deletePost = async function(req,res){
  await postModel.findByIdAndDelete(req.params.id)
  res.redirect("/home")

}
