/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/4 14:48
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/4 14:48
 * @Description ajax工具类
 **/
type httpRequest =
  | "OPTIONS"
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "TRACE"
  | "CONNECT"
  | undefined;
export interface requestConfig {
  url?: string; // 请求url
  data?: any; // 数据
  params?: any;
  header?: object; // 请求头
  method?: httpRequest; //请求类型
  timeout?: number;
  dataType?: string;
  responseType?: string;
  sslVerify?: boolean;
  success?: (data: any) => any;
  fail?: (data: any) => any;
  complete?: (data: any) => any;
}
class JeHttp {
  public baseUrl: string = "/api"; //反向代理
  public header?: object;
  private static instance: JeHttp;

  private defaultParams: requestConfig = {
    method: "POST",
  };

  /**
   * 创建单例模式的JeHttp
   */
  public static create() {
    if (!JeHttp.instance) {
      JeHttp.instance = new JeHttp();
    }
    return JeHttp.instance;
  }

  private constructor() {}

  /**
   * 设置基础url
   * @param url
   */
  public setBaseUrl(url: string): void {
    if (url.charAt(url.length - 1) === "/") {
      url = url.substr(0, url.length - 1);
    }
    this.baseUrl = url;
  }

  /**
   * 请求拦截器
   * @param config
   */
  private beforeRequestFilter(config: requestConfig): requestConfig {
    config.header = {
      authorization: "zbB868rucQbi8mrr8lW",
      "Platform-Agent": "AppleWebKit/537.36 (KHTML, like Gecko)",
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type":
        config.method === "POST"
          ? "application/x-www-form-urlencoded; charset=UTF-8"
          : "application/json; charset=UTF-8",
    };
    return config;
  }

  // 数据返回之后的操作
  private afterResponseFilter(response: any): any {
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
  private transformResponseSuccess(req: requestConfig, next?: any): void {
    // 通过callback执行
    if (req.success) {
      const _success = req.success;
      req.success = (data: any): any => {
        data = this.afterResponseFilter(data);
        _success(data);
      };
    } else {
      // 通过promise执行
      req.success = (data: any): any => {
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
  private transformResponseFail(req: requestConfig, next: any): void {
    if (req.fail) {
      const _fail = req.fail;
      req.fail = (e: any): any => {
        _fail(e);
        next(e);
      };
    } else {
      req.fail = (e: any): any => {
        next(e);
      };
    }
  }

  /**
   * 合并请求参数
   */
  private mergeConfig(config: requestConfig) {
    return Object.assign(config, this.defaultParams);
  }

  /**
   * 处理请求数据
   * @param req
   */
  private transformRequest(req: requestConfig): requestConfig {
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
  static request(config: requestConfig): Promise<any> {
    let _this = JeHttp.instance;
    return new Promise(
      (resolve: (data: any) => any, reject: (data: any) => any) => {
        config = _this.transformRequest(config);
        // 前置拦截器
        let req = _this.beforeRequestFilter(config);
        // 后置成功拦截器
        _this.transformResponseSuccess(config, resolve);
        // 后置异常拦截器
        _this.transformResponseFail(config, reject);
        uni.request(req);
      }
    );
  }
}
const ajax = JeHttp.create();
export default JeHttp;
