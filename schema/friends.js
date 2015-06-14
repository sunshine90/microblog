var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var friends = new Schema({
    me: { type: Schema.Types.ObjectId, ref: 'user' },
    other: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    time: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('friends', friends, 'friends');