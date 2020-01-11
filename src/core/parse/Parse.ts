/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/10 15:43
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/10 15:43
 * @Description 组件解析类，用于导出一个组件
 **/
import { IParse, IParseStatic } from "./IParse";
export default class Parse implements IParse {
  name: string; // 组件名称
  pluginUrls: string[];
  tempBlob?: string;

  constructor(options: IParse) {
    this.name = options.name;
    this.pluginUrls = options.pluginUrls;
    this.tempBlob = options.tempBlob;
  }

  /**
   * 初始化组件
   */
  initPlugin(): void {
    window.eval(<string>this.tempBlob);
  }

  /**
   * 下载文件 将所有依赖都读取到， DEMO使用
   */
  static download(urlLists: string[]): Promise<string> {
    const urlPromises: Promise<string>[] = urlLists.map(url => {
      return Parse.downloadFiles(url);
    });

    return new Promise<string>(resolve => {
      Promise.all(urlPromises).then((results: string[]) => {
        resolve(
          results.reduce(
            (func: string, targetFunc: string) => func + targetFunc
          )
        );
      });
    });
  }

  /**
   * 下载组件
   * @param url
   * @param func
   */
  static downloadFiles(url: string): Promise<string> {
    return new Promise<any>(resolve => {
      // #ifdef H5
      uni.request({
        url,
        success(res) {
          if (res.statusCode === 200) {
            resolve(<string>res.data);
          }
        }
      });
      // #endif
      // #ifndef H5
      url = url.replace("dev", "http://dev.suanbanyun.com");
      uni.downloadFile({
        url,
        success(res) {
          console.log(res);
          if (res.statusCode === 200) {
            // 读取资源文件
            plus.io.resolveLocalFileSystemURL(res.tempFilePath, file => {
              // 读取文本
              if (plus) {
                // TODO 定义全局变量
                const reader = new plus.io.FileReader();
                reader.onloadend = (e: any) => {
                  resolve("123");
                };
                reader.readAsText(file);
              }
            });
            resolve(res.tempFilePath);
          }
        }
      });
      // #endif
    });
  }

  /**
   * 创建一个插件解析类
   * @param options
   */
  static async create(options: IParse): Promise<Parse> {
    let Cons: IParseStatic = Parse;
    const blobUrl: string = await Cons.download(options.pluginUrls);
    return new Promise<Parse>(resolve => {
      const parse: Parse = new Cons(<IParse>{
        name: options.name,
        pluginUrls: options.pluginUrls,
        tempBlob: blobUrl
      });
      resolve(parse);
    });
  }
}
