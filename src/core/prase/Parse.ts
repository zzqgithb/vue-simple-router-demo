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
  pluginUrl: string;
  tempBlob?: string;

  constructor(options: IParse) {
    this.name = options.name;
    this.pluginUrl = options.pluginUrl;
    this.tempBlob = options.tempBlob;
  }

  /**
   * 初始化组件
   */
  initPlugin(): void {
    window.eval(<string>this.tempBlob);
  }

  /**
   * 下载文件
   */
  static download(): Promise<string> {
    return new Promise<string>(resolve => {
      uni.request({
        url: "http://test.suanbanyun.com/static/js/je-all-min-a4aa4630dc.js",
        success: function(res) {
          if (res.statusCode === 200) {
            let JEdata: string = <string>res.data;
            uni.request({
              url:
                "http://test.suanbanyun.com/pro/client/index.min-0710cad0ca.js",
              success: function(res) {
                if (res.statusCode === 200) {
                  resolve(JEdata + <string>res.data);
                }
              }
            });
          }
        }
      });
    });
  }

  static getFiles(){
    return new Promise(resolve=>{

    })
  }

  /**
   * 创建一个插件解析类
   * @param options
   */
  static async create(options: IParse): Promise<Parse> {
    let Cons: IParseStatic = Parse;
    const blobUrl: string = await Cons.download(options.pluginUrl);
    return new Promise<Parse>(resolve => {
      const parse: Parse = new Cons(<IParse>{
        name: options.name,
        pluginUrl: options.pluginUrl,
        tempBlob: blobUrl
      });
      parse.initPlugin();
      resolve();
    });
  }
}
