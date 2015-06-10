var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nest = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'user' },
    type: {type: String, default : ""},
    time: Date,
    level: {type: Number, default : 0},
    liveness: {type: Number, default : 0}
});


module.exports = mongoose.model('nest', nest, 'nest');