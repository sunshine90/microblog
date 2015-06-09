var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var iminnest = new Schema({
    _id: Schema.Types.ObjectId
    from: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    time: Date,
    nestid: [{ type: Schema.Types.ObjectId, ref: 'next' }],
    content: String,
    location: String
});