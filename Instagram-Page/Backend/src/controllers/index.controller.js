const postModel = require("../models/posts.model")

module.exports.feedController = async (req, res) => {
    const post = await postModel.find()

    res.status(200).json({
        data: post,
        message: "Posts fetched successfully"
    })
}
