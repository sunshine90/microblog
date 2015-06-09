var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var friends = new Schema({
    _id: Schema.Types.ObjectId,
    me: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    other: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    time: Date
});

module.exports = mongoose.model('friends', friends);