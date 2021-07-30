const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config')
const auth = require('../middlewares/auth')

const postCtrl = require('../controllers/post');


router.post('/',auth, multer,  postCtrl.createPost);
router.get('/', auth, postCtrl.getAllPosts);
router.delete('/:id',auth, postCtrl.deletePost);
router.post('/like/:id', auth, postCtrl.likePost)

module.exports = router;