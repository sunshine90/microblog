var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nest_mid_user = new Schema({
    nestid: { type: Schema.Types.ObjectId, ref: 'nest' },
    userid: { type: Schema.Types.ObjectId, ref: 'user' },
    time: Date
});

module.exports = mongoose.model('nest_mid_user', nest_mid_user, 'nest_mid_user');