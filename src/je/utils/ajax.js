class JeHttp {
    constructor() {
        this.baseUrl = "/api"; //反向代理
        this.defaultParams = {
            method: "POST",
        };
    }
    /**
     * 创建单例模式的JeHttp
     */
    static create() {
        if (!JeHttp.instance) {
            JeHttp.instance = new JeHttp();
        }
        return JeHttp.instance;
    }
    /**
     * 设置基础url
     * @param url
     */
    setBaseUrl(url) {
        if (url.charAt(url.length - 1) === "/") {
            url = url.substr(0, url.length - 1);
        }
        this.baseUrl = url;
    }
    /**
     * 请求拦截器
     * @param config
     */
    beforeRequestFilter(config) {
        config.header = {
            authorization: "zbB868rucQbi8mrr8lW",
            "Platform-Agent": "AppleWebKit/537.36 (KHTML, like Gecko)",
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": config.method === "POST"
                ? "application/x-www-form-urlencoded; charset=UTF-8"
                : "application/json; charset=UTF-8",
        };
        return config;
    }
    // 数据返回之后的操作
    afterResponseFilter(response) {
        const { data, statusCode } = response;
        if (statusCode === 200) {
            if (data !== null) {
                if (data.success === false) {
                    // 用户失效
                    if (data.code == "UNKOWN_LOGINUSER") {
                        alert("用户失效");
                    }
                }
            }
            return data;
        }
        return response;
    }
    /**
     * 处理请求前的参数
     * @param req
     * @param next
     */
    transformResponseSuccess(req, next) {
        // 通过callback执行
        if (req.success) {
            const _success = req.success;
            req.success = (data) => {
                data = this.afterResponseFilter(data);
                _success(data);
            };
        }
        else {
            // 通过promise执行
            req.success = (data) => {
                data = this.afterResponseFilter(data);
                next(data);
            };
        }
    }
    /**
     * 请求失败的拦截器
     * @param req
     * @param next
     */
    transformResponseFail(req, next) {
        if (req.fail) {
            const _fail = req.fail;
            req.fail = (e) => {
                _fail(e);
                next(e);
            };
        }
        else {
            req.fail = (e) => {
                next(e);
            };
        }
    }
    /**
     * 合并请求参数
     */
    mergeConfig(config) {
        return Object.assign(config, this.defaultParams);
    }
    /**
     * 处理请求数据
     * @param req
     */
    transformRequest(req) {
        req.url = this.baseUrl + req.url;
        req = this.mergeConfig(req);
        // 兼容params参数
        if (req.params) {
            req.data = req.params;
        }
        return req;
    }
    /**
     * 发送请求
     */
    static request(config) {
        let _this = JeHttp.instance;
        return new Promise((resolve, reject) => {
            config = _this.transformRequest(config);
            // 前置拦截器
            let req = _this.beforeRequestFilter(config);
            // 后置成功拦截器
            _this.transformResponseSuccess(config, resolve);
            // 后置异常拦截器
            _this.transformResponseFail(config, reject);
            uni.request(req);
        });
    }
}
const ajax = JeHttp.create();
export default JeHttp;
//# sourceMappingURL=ajax.js.map