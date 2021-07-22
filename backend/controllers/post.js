const jwt = require('jsonwebtoken');

let Post = require("../models").post
let User = require("../models").user
let Commentary = require("../models").commentary
let Likes = require("../models").likes

exports.createPost = (req, res, next) =>{
    req.body.post = JSON.parse(req.body.post);
    let fileName = null
    if(req.file){
         fileName = `/images/${req.file.filename}`;
    }
    Post.create({
        title:req.body.post.title,
        content:req.body.post.post,
        image:fileName,
        UserId:req.body.post.userId,
    }).then(() =>{
        res.status(200).json("post created")
    }).catch(err => {
        console.log(err)
        res.status(500).json({ error: "POST_CREATED_ERROR" })
    })


}
exports.getAllPosts = (req, res, next) => {
    Post.findAll({include:[User]})
      .then(posts => res.status(200).json(posts))
      .catch(error => {
          console.log(error);
          res.status(500).json("error getAllPosts")
      });
  };
  
