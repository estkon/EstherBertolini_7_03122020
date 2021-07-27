const jwt = require('jsonwebtoken');

const fsOrigin = require('fs')
const fs = require('fs').promises
const path = require('path')

let Post = require("../models").Post
let User = require("../models").User
let Commentary = require("../models").Commentary
let Likes = require("../models").Likes

exports.createPost = (req, res, next) =>{
    req.body.post = JSON.parse(req.body.post);
    let fileName = null
    if(req.file){
         fileName = `/images/${req.file.filename}`;
    }
    Post.create({
        title: req.body.post.title,
        content: req.body.post.post,
        image: fileName,
        UserId: req.body.post.userId

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

  exports.getOnePost = (req, res, next) => {
    Post.findOne ({where:{id: req.params.id, include:[User]}}) //récupération de l'id et des infos user
      .then(post => res.status(200).json(post))
      .catch(error => {
          console.log(error);
          res.status(500).json("error getOnePost")
      });
  };

exports.deletePost = async (req, res, next) => {
    let postId = req.params.id
        const post = await Post.findOne({ where: { id: postId }})
        if (post.image !== null) {
            let imagePath = path.join(__dirname, '..' + post.image.trim())
            if(fsOrigin.existsSync(imagePath)){
                await fs.unlink(imagePath)
            }
        }
        await post.destroy()
            .then(() => res.status(200).json("post supprimé"))
            .catch(err => res.status(500).json("le post n'as pas pu étre supprimé !", err))
}
  