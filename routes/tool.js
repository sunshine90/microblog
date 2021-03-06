/**
 * Created by lenovo1 on 2015/6/8.
 */
module.exports = {
    // 文件JSON化返回字符串的形式到前端
    jsonModel : function (sta, data){
        return JSON.stringify({
            status : sta,
            resText : data
        })
    },
    /* 链接数据库地址 */
    dbUrl : "mongodb://127.0.0.1:27017/testmongo",

    isNullObj: function (obj){
        for(var i in obj){
            if(obj.hasOwnProperty(i)){
                return false;
            }
        }
        return true;
    },
    // 时间格式化
    dateFormat : function(date){
        return date.getFullYear()+"/"+
            (date.getMonth()+1) +"/"+
            date.getDate() +" "+
            date.getHours()+":"+
            date.getMinutes()+":"+
            date.getSeconds();
    }

};