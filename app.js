var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var eventsRouter = require('./routes/events');
var hobbiesRouter = require('./routes/hobbies');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/events', eventsRouter);
app.use('/api/hobbies', hobbiesRouter);

app.use(cors());

module.exports = app;
