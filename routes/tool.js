/**
 * Created by lenovo1 on 2015/6/8.
 */
module.exports = {
    // �ļ�JSON�������ַ�������ʽ��ǰ��
    jsonModel : function (sta, data){
        return JSON.stringify({
            status : sta,
            responseText : data
        })
    }
}