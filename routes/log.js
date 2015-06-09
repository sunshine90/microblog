/**
 * Created by lenovo1 on 2015/6/7.
 */
var tool = require("./tool");

module.exports = {
    login : function (req, res, next){
      /*  // 获取表单数据对象
        var user = req.body;
        console.log(user);

        // 登录成功后定向到某一个页面
        res.redirect("/loginOk.html");*/
        var status = "success";
        var jsonStr = {
            name : "nihao",
            age : 12
        }
        res.send(tool.jsonModel(status, jsonStr));
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



