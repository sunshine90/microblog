/**
 * Created by lenovo1 on 2015/6/7.
 */
var _user = require("../schema/user");
var tool = require("./tool");

// 个人信息
module.exports = {
    // 个人信息 的展示   -----------------------------------需要判断session
    selfinfo : function (req, res, next){
        //req.session.user[0]._id     // session id的获取

        var selfId = "55811802aa5f8a00c00a22c2"; // 测试数据

        _user.findOne({_id: selfId}).select({password: false})
            .exec(function(err, result){
                res.send(JSON.stringify({
                            "nickname": result.nickname,
                            "gender": result.gender,
                            "attractive": result.attractive,
                            "email": result.email,
                            "photo": result.photo,
                            "info": result.info
                        }));
            });
    },
    // 修改个人信息
    save : function (req, res, next){

        var update = {info: "infomation1"};      // 获取更新内容 -------------

        var flag = false;  // 判断是否更新成功
        var selfId = "55811802aa5f8a00c00a22c2";  // 获取到当前的session id值对该user更新数据
        _user.findOne({_id: selfId}).exec(function(err, user){
            _user.update({_id: selfId},{$set:update},function(err){
                if(!err){
                    flag = true;
                    res.send("success");
                }else {
                    res.send("fail");
                }
            })
        });
        // 重置session的值
        if(flag){
            _user.finOne({_id: selfId}, function(err, fuser){
                if(!err){
                    req.session.user = fuser;
                }
            })
        }
    }
}