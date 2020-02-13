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
JE.setLSItem = function(key: string, val: any) {
  uni.setStorageSync(key, val);
};
JE.getLSItem = function(key: string): any {
  return uni.getStorageSync(key);
};
