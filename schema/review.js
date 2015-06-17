/**
 * Created by lenovo1 on 2015/6/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 小窝信息的评论内容    需要看评论的时候点击发送该说说的id 用review进行查询显示评论的信息 发送过来的id进行查询iminnest

var review = new Schema({
    iminnestid: { type: Schema.Types.ObjectId, ref: 'iminnest' },   // 关联发起者（说说的id）
    observer: { type: Schema.Types.ObjectId, ref: 'user' },     // 谁发起评论（评论者）
    target: { type: Schema.Types.ObjectId, ref: 'user' },       // 评论谁（如果）
    time: {type: Date, default: Date.now()},
    content: {type: String, default : ""}   // 评论内容
});

module.exports = mongoose.model('review', review, 'reviews');