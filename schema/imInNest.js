var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//小窝内用户即时信息

var iminnest = new Schema({
    from: { type: Schema.Types.ObjectId, ref: 'user' },
    time: Date,
    nestid: { type: Schema.Types.ObjectId, ref: 'nest' },
    content: {type: String, default : ""},
    location: {type: String, default : ""}
});

module.exports = mongoose.model('iminnest', iminnest, 'iminnest');