const jwt = require('jsonwebtoken');

const fsOrigin = require('fs')
const fs = require('fs').promises
const path = require('path')

let Post = require("../models").Post
let User = require("../models").User
let Commentary = require("../models").Commentary
let Likes = require("../models").Likes;
const commentary = require('../models/commentary');

exports.createComment = (req, res, next) =>{
    Commentary.create({
        content: req.body.commentary.commentary,
        UserId: req.body.commentary.userId

    }).then(() =>{
        res.status(200).json("post created")
    }).catch(err => {
        console.log(err)
        res.status(500).json({ error: "POST_CREATED_ERROR" })
    })


}
exports.getAllComments = (req, res, next) => {
    Post.findAll({include:[User]})
      .then(posts => res.status(200).json(posts))
      .catch(error => {
          console.log(error);
          res.status(500).json("error getAllPosts")
      });
  };

  
exports.deleteComment = async (req, res, next) => {
    let commentId = req.params.id
        const comment = await Commentary.findOne({ where: { id: commentId }})
        }
        await comment.destroy()
            .then(() => res.status(200).json("commentaire supprimé"))
            .catch(err => res.status(500).json("le commentaire n'a pas pu étre supprimé !", err))
}
  