/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/6 16:59
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/6 16:59
 * @Description JE头文件
 **/
declare namespace JE {
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
    data?: any; // 数据
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
  function ajax(config: requestConfig): any;

  function setLSItem(key: string, value: any): void;
  function getLSItem(key: string): any;
}
