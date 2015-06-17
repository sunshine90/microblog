/**
 * Created by lenovo1 on 2015/6/7.
 */
var _friends = require("../schema/friends");

module.exports = {
    add : function (req, res, next){
        // 如果已经登录
        if(req.flag){
            var meId = req.session.user[0]._id;  // 假设获取到的该user 的sessionId

            // 此处应该改为post提交数据过来，防止篡改friendId
            var friendId = req.query.friendId;  // 前端传送一个friendid进行数据的储存

            // 此处查询的ID为session的meid
            _friends.findOne({me: meId}, function(err, me){
                if(err){
                    console.log("errMessage: " + err);
                } else {

                    if(me){
                        // 查到了 me 的ID
                        var otherIdArr = me.other;
                        var flag = false; //数组中存在该朋友id
                        for(var i = 0; i < otherIdArr.length; i++){
                            if(friendId == otherIdArr[i]){  // 如果存在该朋友ID
                                flag = true;
                            }
                        }

                        if(flag){
                            console.log("该朋友已经存在您的朋友圈中！");
                            res.send("该朋友已经存在您的朋友圈中！");
                        } else {
                            otherIdArr.push(friendId);
                            me.save(function(err, result){
                                if(!err){
                                    console.log("添加好友成功！");
                                    res.send("添加好友成功！");
                                }
                            });
                        }
                    } else {
                        // 当未创建 朋友圈的时候
                        var otherArr = [];
                        otherArr.push(friendId);
                        _friends.create({me: meId, other: otherArr}, function(err, result){
                            if(err) {
                                console.log("errMessage: " + err);
                            }
                            else {
                                res.send("添加好友成功！");
                            }
                        });
                    }
                }
            });
        }
        // 未登录的状况下
        else {
            res.send("跳转到登录页面！");
        }
    },
    del : function (req, res, next){
        //if(req.flag){
        //    var meId = req.session.user[0]._id; // 模拟session数据

            var meId = "5578459caa5f8a23784911b0";

            // 用post方式提交过来数据
            var friendId = req.query.friendId; // 需要删除朋友的ID

            // 通过查找session数据查找到该对象，进行朋友iD的删除
            _friends.findOne({me: meId}, function(err, me){
                if(!err){
                    var friendIdArr = me.other;

                    for(var i = 0; i < friendIdArr.length; i++){
                        if(friendIdArr[i] == friendId){
                            friendIdArr.splice(i, 1); // 删除当前id
                            me.save(function(err, result){
                                console.log(result);
                                res.send("已经移除朋友数据！");
                            });
                        }
                    }
                }
            });
        //}
        //// 未登录状况下
        //else {
        //    res.send("跳转到登录界面！");
        //}
    },
    // 查询该session下的所有friends
    findAll : function(req, res, next){
        //if(req.flag){     // 判断session 是否存在
            //var meId = req.session.user[0]._id;

            var meId = "5578459caa5f8a23784911b0";
            _friends.findOne({me: meId})
                .populate("other")
                .exec(function(err, results){
                    res.send(JSON.stringify(results));
                });
        //}
        //else {
        //    res.send("跳转到登录界面！");
        //}
    },

    chat : function (req, res, next){
        res.send("friends-chat");
    }
}