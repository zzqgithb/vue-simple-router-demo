/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/6 17:01
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/6 17:01
 * @Description
 **/
require("./je.min.js");
import ajax from "@/je/utils/ajax";
JE.ajax = ajax.request;
JE.setLSItem = function (key, val) {
    uni.setStorageSync(key, val);
};
JE.getLSItem = function (key) {
    return uni.getStorageSync(key);
};
//# sourceMappingURL=je.mixins.js.map