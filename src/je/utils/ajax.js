var JeHttp = /** @class */ (function () {
    function JeHttp() {
        this.baseUrl = "/dev";
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
        console.log(config);
        return config;
    };
    // 数据返回之后的操作
    JeHttp.prototype.afterResponseFilter = function (responseData) { };
    /**
     * 处理请求前的参数
     * @param req
     * @param next
     */
    JeHttp.prototype.transformResponseSuccess = function (req, next) {
        var _this = this;
        // 通过callback执行
        if (req.success) {
            var _success_1 = req.success;
            req.success = function (data) {
                _this.afterResponseFilter(data);
                _success_1(data);
            };
        }
        else {
            // 通过promise执行
            req.success = function (data) {
                _this.afterResponseFilter(data);
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
        var _this = this;
        if (req.fail) {
            var _fail_1 = req.fail;
            req.fail = function (e) {
                _this.afterResponseFilter(e);
                _fail_1(e);
            };
        }
        else {
            req.fail = function (e) {
                _this.afterResponseFilter(e);
                next(e);
            };
        }
    };
    /**
     * 处理请求数据
     * @param req
     */
    JeHttp.prototype.transformRequest = function (req) {
        req.url = this.baseUrl + req.url;
    };
    /**
     * 发送请求
     */
    JeHttp.prototype.request = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.transformRequest(config);
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
export default ajax.request;
//# sourceMappingURL=ajax.js.map