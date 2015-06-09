var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nest = new Schema({
    _id: Schema.Types.ObjectId
    nestid: [{ type: Schema.Types.ObjectId, ref: 'nest' }],
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    time: Date
});