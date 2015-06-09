/**
 * Created by lenovo1 on 2015/6/8.
 */
module.exports = {
    // 文件JSON化返回字符串的形式到前端
    jsonModel : function (sta, data){
        return JSON.stringify({
            status : sta,
            responseText : data
        })
    }
}