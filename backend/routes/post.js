const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config')

const postCtrl = require('../controllers/post');


router.post('/', multer,  postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;