var mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/selfLearn';
mongoose.connect(mongoURL);
const db = mongoose.connection;
/**
* 连接成功
*/
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + mongoURL);
});

db.on('open',()=>{
    console.log('Mongoose connection success');
});

/**
* 连接异常
*/
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
* 连接断开
*/
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
