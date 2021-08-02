const jwt = require('jsonwebtoken');

const fsOrigin = require('fs')
const fs = require('fs').promises
const path = require('path')


let User = require("../models").User
let Commentary = require("../models").Commentary



exports.createComment = async (req, res, next) =>{
    console.log(req.body)
     User.findByPk(
         req.body.UserId
    ).then(
        user =>{


    Commentary.create({
        content: req.body.commentaire,
        UserId: req.body.UserId,
        PostId: req.body.PostId,
        userName: user.firstname +" "+ user.lastname
    }).then(() =>{
        res.status(200).json("post created")
    }).catch(err => {
        console.log(err)
        res.status(500).json({ error: "POST_CREATED_ERROR" })
    })
}
).catch(err => {
    console.log(err)
    res.status(500).json({ error: "POST_CREATED_ERROR" })
})

}
// exports.getAllComments = (req, res, next) => {
//     Post.findAll({include:[User], order:[['updatedAt', 'DESC']] })
//       .then(comments => res.status(200).json(comments))
//       .catch(error => {
//           console.log(error);
//           res.status(500).json("impossible de récupérer les commentaires")
          
//       });
// }

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