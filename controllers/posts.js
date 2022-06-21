const PostsModel = require("../models/posts");
const projection = "-_id id title content createdAt";

async function getAllItems(req, res) {
    try{
        const data = await PostsModel.find({}, projection);
        if(!data){
            return res.status(404).json({msg: "No data found"});
        }
        res.status(200).json({data});
    }catch (e) {
        res.status(500).json({e});
    }
}

async function createItem(req, res){
    try{
        const data = await PostsModel.create(req.body);

        if(!data){
            return res.status(404).json({msg: "No data found"});
        }
        res.status(200).json({data});
    }catch (e) {
        res.status(500).json({e});
    }
}

async function viewItem(req, res) {
    try{
        const data = await PostsModel.findOne({id: req.params.id}, projection);

        if(!data){
            return res.status(404).json({msg: "No data found"});
        }
        res.status(200).json({data});
    }catch (e) {
        res.status(500).json({e});
    }
}

async function deleteItem(req, res) {
    try{
        const data = await  PostsModel.findOneAndDelete({id: req.params.id});

        if(!data){
            return res.status(404).json({msg: "No data found"});
        }
        res.status(200).json({data});
    }catch (e) {
        res.status(500).json({e});
    }
}



async function updateItem(req, res) {
    try{
        const data = await  PostsModel.findOneAndUpdate({id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        });

        if(!data){
            return res.status(404).json({msg: "No data found"});
        }
        res.status(200).json({data});
    }catch (e) {
        res.status(500).json({e});
    }
}


module.exports = {
    getAllItems,
    createItem,
    viewItem,
    deleteItem,
    updateItem
}
