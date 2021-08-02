const express = require('express');
const router = express.Router();

const token = require('../middlewares/auth')

const userCtrl = require('../controllers/user');


router.post('/inscription', userCtrl.signup);
router.get('/', token, userCtrl.getAllUsers);
router.post('/connexion', userCtrl.login);
router.delete('/:id',token, userCtrl.deleteUser);
router.get('/:id', token, userCtrl.getOneUser);

module.exports = router;