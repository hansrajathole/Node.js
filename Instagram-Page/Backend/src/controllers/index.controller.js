const postModel = require("../models/posts.model")

module.exports.feedController = async (req, res) => {

    try {
        const posts = await postModel.aggregate([
            {
              '$lookup': {
                'from': 'users', 
                'localField': '_id', 
                'foreignField': 'posts', 
                'as': 'author'
              }
            }, {
              '$unwind': {
                'path': '$author'
              }
            }
          ]);

          

        res.status(200).json({ post: posts });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}
