const commentsModel = require("../models/comments")
const PostsModel = require("../models/posts");
const mongoose = require("mongoose")
const objID = mongoose.Types.ObjectId;


async function createComment(req, res){
    try{
        const posts = await PostsModel.findOne({postID: req.params.id})
        const comment = await commentsModel.create({
            username: req.body.username,
            content: req.body.content,
            post: posts
        })

        res.status(200).json({comment})

    }catch (e) {
        res.status(404).json(e.message)
    }

}

async function viewComments(req, res){
    try{
        const data = await commentsModel.findOne({commentID: req.params.commentID}).populate("post");
        if(!data){
            return res.status(404).json({msg: "No data found"});
        }
        res.status(200).json(data.post);
    }catch (e) {
        res.status(500).json(e.message);
    }
}

async function deleteComment(req, res){
    try{
        const comment = await commentsModel.findOneAndUpdate(
            {commentID: req.params.commentID},
            {
                '$unset': {post: 1}
            }, {new: true}
        )


        if (!comment){
            return res.status(404).json({msg: "No comment found"});
        }
        res.status(200).json({comment});

    }catch (e) {
        res.status(500).json(e.message);
    }
}

async function updateComment(req, res){
    try{
            const post = await commentsModel.findOneAndUpdate(
                {commentID: req.params.commentID},
                req.body
            )

        if (!post){
            return res.status(404).json({msg: "No post found"});
        }

        res.status(200).json({post});
    }catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports = {
    createComment,
    viewComments,
    deleteComment,
    updateComment
}
