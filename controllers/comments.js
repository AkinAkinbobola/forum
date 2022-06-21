const commentsModel = require("../models/comments")
const PostsModel = require("../models/posts");


async function createComment(req, res){
    try{
        const comment = await commentsModel.create(req.body)
        const data = await PostsModel.findOneAndUpdate(
            {postID: req.params.id},
            {$push: {comments: comment.id}}
        )
        res.status(200).json({data})

    }catch (e) {
        res.status(404).json(e.message)
    }

}

async function viewComments(req, res){
    try{
        const data = await PostsModel.findOne({postID: req.params.id}).populate("comments");
        if(!data){
            return res.status(404).json({msg: "No data found"});
        }
        res.status(200).json({comments: data.comments});
    }catch (e) {
        res.status(500).json(e.message);
    }
}

async function deleteComment(req, res){
    try{
        const data = await PostsModel.findOneAndUpdate({ postID: req.params.id }, {
            '$pull': {
                'comments':{ '_id': req.params.commentID}
            }
        });
        res.status(200).json({data});

    }catch (e) {
        res.status(500).json(e.message);
    }
}

module.exports = {
    createComment,
    viewComments,
    deleteComment
}
