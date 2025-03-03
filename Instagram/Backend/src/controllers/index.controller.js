import User from "../model/user.model.js";
import Post from "../model/posts.model.js";

export const feedController = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const posts = await Post.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "posts",
          as: "author",
        },
      },
      {
        $unwind: {
          path: "$author",
        },
      },
    ]);

    // console.log(posts.reverse())
    posts.reverse();
    // res.status(200).json({ post: posts, Profile : req.user.profilePicture});
    res.status(200).json({ message: "user feed data found", posts, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const userProfileController = async (req, res) => {
  try {

    const id = req.params.id
    const posts = await Post.getAuthorPosts(id);
    const user = await User.findById(id).lean();
    const selfData = await User.findById(req.user._id).lean()
    console.log(selfData);
    
    res.status(200).json({ message: "user data found", userData: user, posts  , selfData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
