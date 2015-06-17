var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    info: {type: String, default : ""},
    password : {type: String},
    nickname: {type: String, default : ""},
    photo: {type: String, default: "img/default-head-img.jpg"},
    gender: {type: String, default: "男"},
    attractive: {type:Number, default: 0},
    email : {type: String, unique: true}
});

module.exports = mongoose.model('user', user, 'users');
