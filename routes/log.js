var mongoose = require("mongoose");
var userModel = require("../schema/user");
var tool = require("./tool");

//mongoose.connect(tool.dbUrl);


module.exports = {
    login : function (req, res, next){
        // 获取表单数据对象
        var user = req.body;
        userModel.find(user, function(err, result){
            if(err){
                console.log("错误信息显示："+err);
            }
            else {
                if(result.length != 1){
                    res.send(tool.jsonModel("fail", ""));
                }
                else {
                    // session值的存取
                    req.session.user = result;
                    // 响应json数据
                    res.send(tool.jsonModel("success", result[0]));
                }
            }
        });
    },
    logup : function (req, res, next){
        res.send("log-logup");
    },
    logout : function (req, res, next){
        res.send("log-logout");
    },
    search : function (req, res, next){
        res.send("log-search");
    }
}



