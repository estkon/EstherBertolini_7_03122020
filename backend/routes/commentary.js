const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer-config')
const auth = require('../middlewares/auth')

const commentCtrl = require('../controllers/commentary');


router.post('/',auth, multer,  commentCtrl.createComment);
router.get('/:id', auth, commentCtrl.findOneComment);
router.delete('/:id',auth, commentCtrl.deleteComment);

module.exports = router;