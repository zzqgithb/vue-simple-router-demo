export default class Parse {
  constructor(options) {
    this.name = options.name;
    this.pluginUrls = options.pluginUrls;
    this.tempBlob = options.tempBlob;
  }
  /**
   * 初始化组件
   */
  initPlugin() {
    globalThis.eval.call(this, this.tempBlob);
  }
  /**
   * 下载文件 将所有依赖都读取到， DEMO使用
   */
  static download(urlLists) {
    const urlPromises = urlLists.map(url => {
      return Parse.downloadFiles(url);
    });
    return new Promise(resolve => {
      Promise.all(urlPromises).then(results => {
        resolve(results.reduce((func, targetFunc) => func + targetFunc));
      });
    });
  }
  /**
   * 下载组件
   * @param url
   * @param func
   */
  static downloadFiles(url) {
    url = url.replace("dev", "dev");
    return new Promise(resolve => {
      uni.request({
        url,
        success(res) {
          if (res.statusCode === 200) {
            resolve(res.data);
          }
        }
      });
      // uni.downloadFile({
      //   url,
      //   success(res) {
      //     if (res.statusCode === 200) {
      //       // 读取资源文件
      //       plus.io.resolveLocalFileSystemURL(res.tempFilePath, file => {
      //         // 读取文本
      //         // TODO 定义全局变量
      //         const reader = new plus.io.FileReader();
      //         reader.onloadend = (e: any) => {
      //           resolve(e.target.result);
      //         };
      //         reader.readAsText(file);
      //       });
      //     }
      //   }
      // });
    });
  }
  /**
   * 创建一个插件解析类
   * @param options
   */
  static async create(options) {
    let Cons = Parse;
    const blobUrl = await Cons.download(options.pluginUrls);
    return new Promise(resolve => {
      const parse = new Cons({
        name: options.name,
        pluginUrls: options.pluginUrls,
        tempBlob: blobUrl
      });
      resolve(parse);
    });
  }
}
//# sourceMappingURL=Parse.js.map
