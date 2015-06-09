/**
 * Created by lenovo1 on 2015/6/7.
 */
module.exports = {
    add : function (req, res, next){
        res.send("friends-add");
    },
    del : function (req, res, next){
        res.send("friends-del");
    },
    chat : function (req, res, next){
        res.send("friends-chat");
    }
}