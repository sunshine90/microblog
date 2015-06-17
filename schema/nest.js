var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nest = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'user' },    // 用户名 title2
    type: {type: String, default : ""},     // 小窝的类型
    time: {type: Date, default: Date.now()},        // 小窝创建时间
    level: {type: Number, default : 0},     // 小窝的级别
    img : {type: String, default:"img/default-head-img.jpg"},       // 小窝头像
    title : {type: String},         // 小窝的名称 title1
    attention: {type: Number, default : 0},      // 活跃度
    content : {type: String},       // 小窝的描述信息
    join : {type: Number, default : 1}       // 加入的人数

});


nest.statics = {
    addJoin : function (id, callback) {
        this.findOne({_id: id}).exec(function(err, nest){
            nest.join += 1;
            nest.save(callback);
        });
    },
    addAttention : function(id, callback) {
        this.findOne({_id: id}, function(err, nest){
            nest.attention += 1;
            nest.save(callback);
        });
    }
};

module.exports = mongoose.model('nest', nest, 'nest');