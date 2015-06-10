var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var friends = new Schema({
    me: { type: Schema.Types.ObjectId, ref: 'User' },
    other: { type: Schema.Types.ObjectId, ref: 'User' },
    time: Date
});

module.exports = mongoose.model('friends', friends, 'friends');