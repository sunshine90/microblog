var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    name: {type: String, default : ""},
    info: {type: String, default : ""},
    password : {type: String},
    nickname: {type: String, default : "匿名"},
    photo: {type: String},
    gender: {type: String},
    attractive: {type:Number, default: 0}
});

module.exports = mongoose.model('user', user, "users");