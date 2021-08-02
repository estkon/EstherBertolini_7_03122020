const path = require('path');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const routerUser = require('./routes/user');
const routerPost = require('./routes/post');
const routerComment = require('./routes/commentary');
require('dotenv').config()

const app = express();

app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express());
app.use('/images',express.static(path.join(__dirname, '/images')));
app.use('/api/user', routerUser);
app.use('/api/post', routerPost);
app.use('/api/comment', routerComment);

module.exports = app;

