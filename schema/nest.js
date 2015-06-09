var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nest = new Schema({
    _id: Schema.Types.ObjectId
    owner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    type: [{ type: Schema.Types.ObjectId, ref: 'Type' }],
    time: Date,
    level: Number,
    liveness: Number
});