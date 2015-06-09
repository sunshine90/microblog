/**
 * Created by lenovo1 on 2015/6/7.
 */
module.exports = {
    setup : function (req, res, next){
        res.send("nest-setup");
    },
    del : function (req, res, next){
        res.send("nest-del");
    },
    join : function (req, res, next){
        res.send("nest-join");
    },
    chat : function (req, res, next){
        res.send("nest-chat");
    },
    publish : function (req, res, next){
        res.send("nest-publish");
    }
}