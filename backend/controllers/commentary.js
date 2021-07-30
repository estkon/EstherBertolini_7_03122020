const jwt = require('jsonwebtoken');

const fsOrigin = require('fs')
const fs = require('fs').promises
const path = require('path')

let Post = require("../models").Post
let User = require("../models").User
let Commentary = require("../models").Commentary
let Likes = require("../models").Likes;


exports.createComment = async (req, res, next) =>{
    let user = await User.findOne({
        where:{ id: req.body.userId}
    })
    Commentary.create({
        content: req.body.commentary,
        UserId: req.body.userId,
        PostId: req.body.postId,
        userName: user.firstname +" "+ user.lastname
    }).then(() =>{
        res.status(200).json("post created")
    }).catch(err => {
        console.log(err)
        res.status(500).json({ error: "POST_CREATED_ERROR" })
    })


}
exports.findOneComment = (req, res, next) => {
    Commentary.findOne()
      .then(commentaries => res.status(200).json(commentaries))
      .catch(error => {
          console.log(error);
          res.status(500).json("error get Comentaries")
      });
  };

  
exports.deleteComment = async (req, res, next) => {
    let commentId = req.params.id
        const comment = await Commentary.findOne({ where: { id: commentId }})
        
        await comment.destroy()
            .then(() => res.status(200).json("commentaire supprimé"))
            .catch(err => res.status(500).json("le commentaire n'a pas pu étre supprimé !", err))
        }