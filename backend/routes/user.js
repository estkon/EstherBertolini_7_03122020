const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const userCtrl = require('../controllers/user');


router.post('/signup',  userCtrl.signup);
router.get('/', auth, userCtrl.getAllUsers);
router.post('/login',  userCtrl.login);
router.delete('/profil/:id', auth, userCtrl.deleteUser);

module.exports = router;