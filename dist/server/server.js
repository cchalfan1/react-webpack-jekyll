const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = express.Router();
const mongo = require('mongodb').MongoClient;
const localDbPath = 'mongodb://localhost:27017';
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
module.exports = app;
//# sourceMappingURL=server.js.map