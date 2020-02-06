var JeHttp = /** @class */ (function () {
    function JeHttp() {
        this.baseUrl = "/api";
        this.defaultParams = {
            url: "",
            method: "POST",
        };
    }
    /**
     * 创建单例模式的JeHttp
     */
    JeHttp.create = function () {
        if (!JeHttp.instance) {
            JeHttp.instance = new JeHttp();
        }
        return JeHttp.instance;
    };
    /**
     * 设置基础url
     * @param url
     */
    JeHttp.prototype.setBaseUrl = function (url) {
        if (url.charAt(url.length - 1) === "/") {
            url = url.substr(0, url.length - 1);
        }
        this.baseUrl = url;
    };
    /**
     * 请求拦截器
     * @param config
     */
    JeHttp.prototype.beforeRequestFilter = function (config) {
        config.header = {
            authorization: "ZCuuDCYmCKSkIkzSP9R",
            "Platform-Agent": "AppleWebKit/537.36 (KHTML, like Gecko)",
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": config.method === "POST"
                ? "application/x-www-form-urlencoded; charset=UTF-8"
                : "application/json; charset=UTF-8",
        };
        return config;
    };
    // 数据返回之后的操作
    JeHttp.prototype.afterResponseFilter = function (response) {
        var data = response.data, statusCode = response.statusCode;
        if (statusCode === 200) {
            if (data !== null) {
                if (data.success === false) {
                    // 用户失效
                    if (data.code == "UNKOWN_LOGINUSER") {
                        alert("用户失效");
                    }
                }
            }
            return data.obj;
        }
        return response;
    };
    /**
     * 处理请求前的参数
     * @param req
     * @param next
     */
    JeHttp.prototype.transformResponseSuccess = function (req, next) {
        var _this_1 = this;
        // 通过callback执行
        if (req.success) {
            var _success_1 = req.success;
            req.success = function (data) {
                data = _this_1.afterResponseFilter(data);
                _success_1(data);
            };
        }
        else {
            // 通过promise执行
            req.success = function (data) {
                data = _this_1.afterResponseFilter(data);
                next(data);
            };
        }
    };
    /**
     * 请求失败的拦截器
     * @param req
     * @param next
     */
    JeHttp.prototype.transformResponseFail = function (req, next) {
        if (req.fail) {
            var _fail_1 = req.fail;
            req.fail = function (e) {
                _fail_1(e);
                next(e);
            };
        }
        else {
            req.fail = function (e) {
                next(e);
            };
        }
    };
    /**
     * 合并请求参数
     */
    JeHttp.prototype.mergeConfig = function (config) {
        return Object.assign(this.defaultParams, config);
    };
    /**
     * 处理请求数据
     * @param req
     */
    JeHttp.prototype.transformRequest = function (req) {
        req.url = this.baseUrl + req.url;
        req = this.mergeConfig(req);
        return req;
    };
    /**
     * 发送请求
     */
    JeHttp.request = function (config) {
        var _this = JeHttp.instance;
        return new Promise(function (resolve, reject) {
            config = _this.transformRequest(config);
            // 前置拦截器
            var req = _this.beforeRequestFilter(config);
            // 后置成功拦截器
            _this.transformResponseSuccess(config, resolve);
            // 后置异常拦截器
            _this.transformResponseFail(config, reject);
            uni.request(req);
        });
    };
    return JeHttp;
}());
var ajax = JeHttp.create();
export default JeHttp;
//# sourceMappingURL=ajax.js.map