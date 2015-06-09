var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    info: String,
    nickname: String,
    photo: String,
    gender: String,
    attractive: Number
})

module.exports = mongoose.model('user', user);