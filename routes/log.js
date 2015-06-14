var userModel = require("../schema/user");
var tool = require("./tool");

module.exports = {
    login : function (req, res, next){
        var signed = req.flag;
        if(signed){
            var suser = req.session.user[0];
            console.log(suser._id);
            res.send("已登录！");
        } else {
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
        }

    },
    logup : function (req, res, next){  // 注册
        res.send("log-logup");
    },
    logout : function (req, res, next){
        // 登出
        var signed = req.flag;  // 判断是否存在session的值
        if(signed){
            delete req.session.user;
            console.log("登录成功！-- 正在跳转到/index.html");
            res.redirect("/index.html");
        }
        else {
            console.log("未登录，不能登出！");
            res.redirect("/index.html");
        }
    },
    search : function (req, res, next){
        res.send("log-search");
    },
    // 中间件判断是否登录
    signed : function(req, res, next){
        // 检验是否已经有session的值
        if(req.session.user){
            req.flag = true;
            console.log("已登录！")
        }else{
            req.flag = false;
            console.log("未登录！")
        }
        next();
    }
}



