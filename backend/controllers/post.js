const jwt = require('jsonwebtoken');

const fsOrigin = require('fs')
const fs = require('fs').promises
const path = require('path')

let Post = require("../models").Post
let User = require("../models").User
let Commentary = require("../models").Commentary
let Like = require("../models").Like

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
        res.status(200).json("post créé")
    }).catch(err => {
        console.log(err)
        res.status(500).json({ error: "POST_CREATED_ERROR" })
    })


}
exports.getAllPosts = (req, res, next) => {
    Post.findAll({include:[User, Commentary], order:[['updatedAt', 'DESC']] })
      .then(posts => res.status(200).json(posts))
      .catch(error => {
          console.log(error);
          res.status(500).json("impossible de récupérer les posts")
          
      });
      
  };
  exports.getOnePost = (req, res, next) => {
    Post.findOne({include:[User, Commentary], order:[['updatedAt', 'DESC']] })
      .then(posts => res.status(200).json(posts))
      .catch(error => {
          console.log(error);
          res.status(500).json("impossible de récupérer le post")
          
      });
      
  };
  exports.likePost = async (req, res, next) => {
    console.log(req.body)
    let { UserId, PostId, like } = req.body // recupérer dans le body
    Post.findOne({ where: { id: PostId } }) // chercher le post avec cet id
        .then(post => {
            post.update({lastUpdate: new Date()}) // mettre à jour le post avec la date
        })

    if (like == 0) { // si like
        const _like = await Likes.create({ UserId, PostId, like }) // créer un like avec userId, PostID
        if (_like) res.status(201).json("like ajouté")
        else res.status(200).json({ err: "impossible de créer le like" })
    } else {// Supprimer like
        const _like = await Likes.findOne({ where: { [Op.and]: [{ UserId, PostId }] } })// chercher le like avec ce postID et UserId
        const response = _like.destroy() // le supprimé
        if (response) res.status(201).json("like supprimé ")
        else res.status(200).json({ err: "impossible de supprimer le like" })
    }
},
    

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