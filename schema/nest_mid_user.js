var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 一个人对应一个小窝id，一个小窝也对应一个userid

var nest_mid_user = new Schema({
    nestid: { type: Schema.Types.ObjectId, ref: 'nest' },
    userid: { type: Schema.Types.ObjectId, ref: 'user' },
    time: {type: Date, default: Date.now()}
});

//nest_mid_user.statics = {
//   findRefByNestid : function(nestId, callback){
//       this.findOne(nestid: nestId).populate()
//   }
//};

module.exports = mongoose.model('nest_mid_user', nest_mid_user, 'nest_mid_user');