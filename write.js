var mongoose = require('./db.js');
const debug = require('debug')('music:write');
var Schema = mongoose.Schema;
var musicSchema = new Schema({
    musiceId:{type:String},
    name:{type:String},
    imageSrc:{type:String}
});
var Music = mongoose.model('Music',musicSchema);
const write = async (musics)=>{
    debug('开始写入音乐');
    for(let music of musics){
        var _music = new Music();
        _music.musiceId = music.musiceId;
        _music.name = music.name;
        _music.imageSrc = music.imageSrc;
        _music.save();   
    }
};
module.exports = write;