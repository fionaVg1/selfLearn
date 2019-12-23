var mongoose = require('./db.js');
const debug = require('debug')('music:write');
var Schema = mongoose.Schema;
var movieSchema = new Schema({
    movieId:{type:String},
    name:{type:String},
    score:{type:String},
    href:{type:String},
    imageSrc:{type:String}
});
var Movie = mongoose.model('Movie',movieSchema,'douBanMovie');
const write = async (movies)=>{
    debug('开始写入豆瓣热映电影');
    for(let movie of movies){
        var _movie = new Movie();
        _movie.movieId = movie.movieId;
        _movie.name = movie.name;
        _movie.score = movie.score;
        _movie.href = movie.href;
        _movie.imageSrc = movie.imageSrc;
        _movie.save();   
    }
};
module.exports = write;