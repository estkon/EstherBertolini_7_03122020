const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')

const commentCtrl = require('../controllers/commentary');


router.post('/',auth,  commentCtrl.createComment);
// router.get('/', auth, commentCtrl.findAllComments);
router.get('/:id', auth, commentCtrl.findOneComment);
router.delete('/:id',auth, commentCtrl.deleteComment);

module.exports = router;