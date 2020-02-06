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
interface requestConfig {
  url: string; // 请求url
  data: any; // 数据
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
  public baseUrl: string = "/dev";
  public header?: object;
  private static instance: JeHttp;

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
    console.log(config);
    return config;
  }

  // 数据返回之后的操作
  private afterResponseFilter(responseData: any): any {}

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
        this.afterResponseFilter(data);
        _success(data);
      };
    } else {
      // 通过promise执行
      req.success = (data: any): any => {
        this.afterResponseFilter(data);
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
        this.afterResponseFilter(e);
        _fail(e);
      };
    } else {
      req.fail = (e: any): any => {
        this.afterResponseFilter(e);
        next(e);
      };
    }
  }

  /**
   * 处理请求数据
   * @param req
   */
  private transformRequest(req: requestConfig): void {
    req.url = this.baseUrl + req.url;
  }

  /**
   * 发送请求
   */
  request(config: requestConfig): Promise<any> {
    return new Promise(
      (resolve: (data: any) => any, reject: (data: any) => any) => {
        this.transformRequest(config);
        // 前置拦截器
        let req = this.beforeRequestFilter(config);
        // 后置成功拦截器
        this.transformResponseSuccess(config, resolve);
        // 后置异常拦截器
        this.transformResponseFail(config, reject);
        uni.request(req);
      }
    );
  }
}

const ajax = JeHttp.create();
export default ajax.request;
