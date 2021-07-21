const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const User = require('../models').user; //récupérer le modèle User

exports.signup = (req, res, next) => {

  //Cryptage de l'email
  var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
  var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
  var encrypted = CryptoJS.AES.encrypt(req.body.email, key, { iv: iv }).toString();

  //chiffrage du mot de passe
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      
      User.create ({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: encrypted,
        password: hash
      })
        .then(()=>{
          res.status(201).json({succes:" user"})
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({error_handler:"SIGNUP"})
      })
  
      
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ error })
    } );
};

exports.login = async (req, res, next) => {
  var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
  var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
  var encrypted = CryptoJS.AES.encrypt(req.body.email, key, { iv: iv }).toString();

  const user = await User.findOne({where: {email:encrypted}})


  if (user === null) {
    res.status(200).json({err: 'Votre email ou mot de passe sont incorrect !'});
} else {

      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            user,
            token: jwt.sign(
              {userId: user.id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    }
};