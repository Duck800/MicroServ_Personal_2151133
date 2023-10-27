import Request from "@/utils/Request.js";  // 在每个 api 文件里都要引入这两个文件
import Message from "@/utils/Message.js"  // 在每个 api 文件里都要引入这两个文件
import router from "@/router/index.js"

export function GetInfo(params) {
    return Request({
        method: 'GET',
        url: 'https://route.showapi.com/9-2?showapi_appid=1503256&showapi_sign=826a61cff95b4ffc89b1ef1ee2b0d63a',
        params: params 
    }).then(function (response) {
        if (response.status === 200) {
            return response.data;  // 返回 code + msg + data
        } else {
            Message.error("天气信息获取失败");
            return null;
        }
    }).catch(function (error) {
        console.log(error);
    })
}
