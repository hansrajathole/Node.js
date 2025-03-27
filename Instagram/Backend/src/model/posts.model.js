import mongoose from 'mongoose'

const postsSchema = new mongoose.Schema({
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    media :{
        type: Object,
        required: true
    },
    caption : {
        type: String,
        required: true
    },
    likes : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default : [0]
        }
    ],
    Comment : [
        {
         
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            
        }    
    ]
}, { timestamps: true })


postsSchema.statics.getAuthorPosts = async function(authorId) {
    if (!authorId) {
        throw new Error("Author is required");
    }

    const posts = await this.find({
        user: authorId
    }).sort({createdAt : -1})

    return posts;
};

postsSchema.methods.updateCaption = async function(caption){

    this.caption = caption
    await this.save()

    return this
}

// postsSchema.statics.getRecentPosts = function(limit){
//     if(!limit){
//         throw new Error("limit is required")
//     }

//     const posts = await this.find().sort({createdAt : -1}).limit(limit)

//     return posts
// }


const postModel = mongoose.model('Post', postsSchema)

export default postModel