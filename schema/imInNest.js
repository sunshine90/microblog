var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var tool = require("../routes/tool");
//小窝内用户状态内容 - 说说 需要看评论的时候点击发送该说说的id 用review进行查询显示评论的信息

var iminnest = new Schema({
    from: { type: Schema.Types.ObjectId, ref: 'user' },   // 谁发起的说说
    time: {type: Date, default: tool.dateFormat(new Date())},
    nestid: { type: Schema.Types.ObjectId, ref: 'nest' },   // 在那个小窝中进行发起的
    content: {type: String, default : ""},      // 发起说说的内容
    location: {type: String, default : ""}      // 发起说说的地方
});

module.exports = mongoose.model('iminnest', iminnest, 'iminnests');