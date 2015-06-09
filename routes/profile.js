/**
 * Created by lenovo1 on 2015/6/7.
 */
module.exports = {
    selfinfo : function (req, res, next){
        res.send("profile-selfinfo");
    },
    save : function (req, res, next){
        res.send("profile-save");
    }

}