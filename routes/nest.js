/**
 * Created by lenovo1 on 2015/6/7.
 */
var _nest = require("../schema/nest");
var _nest_mid_user = require("../schema/nest_mid_user");
var _review = require("../schema/review");
var _iminnest = require("../schema/imInNest");
var tool = require("./tool");

module.exports = {
    index : function(req, res, next){
        var rightData = [],
            leftData = [],
            flow = [],
            jsonStr = {};

        _nest.find({}).populate("owner", "nickname").limit(14)
            .exec(function(err, data){
                if(err) throw err;
                for(var i = 0; i < data.length; i++) {
                    if(i < 3) {
                        leftData.push({
                            "img" : data[i].img,
                            "title1" : data[i].title,
                            "title2" : data[i].owner.nickname,
                            "note" : data[i].content
                        })
                    }else if(i>=3 && i<6){
                        rightData.push({
                            "img" : data[i].img,
                            "title1" : data[i].title,
                            "title2" : data[i].owner.nickname,
                            "note" : data[i].content
                        })
                    }else{
                        flow.push({
                            "content" : data[i].content,
                            "attention" : data[i].attention,
                            "join" : data[i].join
                        });
                    }
                }
                // json 数据格式化
                jsonStr = {
                    "index" : {
                        "leftData" : leftData,
                        "rightData" : rightData
                    },
                    "flow" : flow
                };

                res.send(JSON.stringify(jsonStr));
            });

    },
    nav : function (req, res, next) {
        var _type = req.query.type;
        _nest.find({type: _type}, function(err, nest){
            if(!err){
                res.send(JSON.stringify(nest));
            }
        });

    },
    // 小窝的创建
    setup : function (req, res, next){
        // 获取 当前对象的 user 的id
        var createDemo = {
            "owner" : "55801d5705ca9ccc23ad6974",   // 获取session数据
            "title": "小窝title",
            "type": "nest type",
            "content": "小窝content"
        };
        _nest.create(createDemo, function(err, nest){
            if(!err){
                res.send(tool.jsonModel("success",nest));
            } else {
                res.send(tool.jsonModel("fail",""));
            }
        });
    },
    // 小窝删除
    del : function (req, res, next){
        // 前端传送nestdid过来进行小窝的删除
        var nestId = "557fdd59e104ba601ffc42f7";

        _nest.remove({_id: nestId}, function(err, data){
            console.log(data);
            if(!err){
                res.send(tool.jsonModel("success", data));
            }else{
                res.send(tool.jsonModel("fail", ""));
            }
        });

    },
    // 加入小窝
    join : function (req, res, next){
        // 加入小窝时 需要知道nestid， 和当前的user 的session id
        var nest_mid_user_obj = {
            nestid : "557fdd59e104ba601ffc42f7",
            userid : "5578459caa5f8a23784911b0"
        };

        _nest_mid_user.create(nest_mid_user_obj, function(err, result){
            if(!err){
                // 添加小窝人数
                _nest_mid_user.addJoin(function(err, data){
                    res.send(tool.jsonModel("success", result));
                });
            } else {
                res.send(tool.jsonModel("fail", ""));
            }
        });

    },
    // 对状态的评论
    chat : function (req, res, next){
        // 创建一条评论       -- 需要知道前端确认评论对象 对说说的评价 传数据“reviewType:iminnest”, 对评论人评论  传数据“reviewType:review”
        // waitting   -----
        res.send("nest-chat");
    },
    // 小窝的发布消息  对应小窝内容
    publish : function (req, res, next){
        // 说说内容的发布

        var iminnestObj = {
            nestid : "557fdcf3598031c027c8e2f8",    // 前端传nestid过来，
            from : "5578459caa5f8a23784911b0",      // 当前user的session id值
            content : "你好",
            location : "重庆"
        };

        _iminnest.create(iminnestObj, function(err, iminnest){
            if(!err){
                res.send(tool.jsonModel("success", iminnest));
            } else {
                res.send(tool.jsonModel("fail", ""));
            }
        });
    },
    // 当前用户创建了的小窝
    established : function(req, res, next) {
        var ownerid = "55801d5705ca9ccc23ad6974";   // 获取当前的session
        _nest.find({owner: ownerid})
            .populate("owner", "_id")
            .exec(function(err, result){
                var estab = [];
                for(var i = 0; i < result.length; i++){
                    var rs = result[i];
                    estab.push({
                        "_id" : rs.owner._id,
                        "type": rs.type,
                        "time": tool.dateFormat(rs.time),
                        "level": rs.level,
                        "img" : rs.img,
                        "title" : rs.title,
                        "attention": rs.attention,
                        "content" : rs.content,
                        "join" : rs.join
                    });
                }
                res.send(JSON.stringify(estab));
            });
    },
    // 根据小窝的ID进行查询小窝的信息
    searchInfo : function(req, res, next) {
        // 需要获取 小窝的ID 值
        var nestid = "55803b8b73d55a9c0d54e2b7";
        _nest.findOne({_id: nestid})
            .exec(function(err, result) {
                res.send(JSON.stringify(result));
            });

    },
    // 根据小窝的ID查询当前小窝的所有信息以及发布的说说
    findAllIM : function(req, res, next) {
        var _nestid = "55803b8b73d55a9c0d54e2b7";
        _iminnest.find({nestid: _nestid})
            .exec(function(err, result){
                if(!err){
                    res.send(JSON.stringify(result));
                }
            });

        /*_iminnest.create({
            "from" : "55811802aa5f8a00c00a22c2",
            "content" : "nest content",
            "location" : "from owner",
            "nestid" : "55803b8b73d55a9c0d54e2b7"
        },function(err, result){
            console.log(result);
        })*/
    }


};