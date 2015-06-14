var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//С�����û���ʱ��Ϣ

var iminnest = new Schema({
    from: { type: Schema.Types.ObjectId, ref: 'user' },
    time: Date,
    nestid: { type: Schema.Types.ObjectId, ref: 'nest' },
    content: {type: String, default : ""},
    location: {type: String, default : ""}
});

module.exports = mongoose.model('iminnest', iminnest, 'iminnest');