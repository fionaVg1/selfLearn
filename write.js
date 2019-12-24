const debug = require('debug')('music:write');
const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/selfLearn';
const write = async (movies) => {
    mongoose.connect(mongoURL);
    const db = mongoose.connection;
    var Schema = mongoose.Schema;
    var movieSchema = new Schema({
        movieId: { type: String },
        name: { type: String },
        score: { type: String },
        href: { type: String },
        imageSrc: { type: String }
    });
    var Movie = mongoose.model('douBanMovie', movieSchema);
    /**
    * 连接成功
    */
    db.on('connected', function () {
        console.log('Mongoose connection open ');
        for (let movie of movies) {
            var _movie = new Movie();
            _movie.movieId = movie.movieId;
            _movie.name = movie.name;
            _movie.score = movie.score;
            _movie.href = movie.href;
            _movie.imageSrc = movie.imageSrc;
            _movie.save();
        }
    });

};
module.exports = write;