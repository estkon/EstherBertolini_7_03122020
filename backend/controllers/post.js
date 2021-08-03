const jwt = require('jsonwebtoken');

const fsOrigin = require('fs')
const fs = require('fs').promises
const path = require('path')

let Post = require("../models").Post
let User = require("../models").User
let Commentary = require("../models").Commentary
let Likes = require("../models").Likes
const { Op } = require("sequelize");


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
    Post.findAll({include:[User, Commentary, Likes], order:[['updatedAt', 'DESC']] })
      .then(posts => res.status(200).json(posts))
      .catch(error => {
          console.log(error);
          res.status(500).json("impossible de récupérer les posts")
          
      });
      
  };
  exports.getOnePost = (req, res, next) => {
    Post.findOne({include:[User, Commentary, Likes], order:[['updatedAt', 'DESC'],[{model:Commentary}, 'updatedAt', 'DESC']] })
      .then(posts => res.status(200).json(posts))
      .catch(error => {
          console.log(error);
          res.status(500).json("impossible de récupérer le post")
          
      });
      
  };
  exports.likePost = async (req, res, next) => {
    console.log(req.body)
    let { UserId, PostId, like } = req.body // recupérer dans le body

    if (like == 0) { // si like
        const _like = await Likes.create({ UserId, PostId, like }) // créer un like avec userId, PostID
        if (_like) res.status(201).json("like ajouté")
        else res.status(200).json({ err: "impossible de créer le like" })
    } else {// Supprimer like
        const _like = await Likes.findOne({ where: { [Op.and]: [{ UserId, PostId }] } })// chercher le like avec ce postID et UserId
        if(_like){
            _like.destroy().then(()=>res.status(200).json("like supprimé"))
            .catch(err=> {
                 console.log(err)
                 res.status(200).json({ err: "impossible de supprimer le like" })
            })
            }
            else{res.status(200).json('impossible d\'ajouter le like')}

            
    }
}
    

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