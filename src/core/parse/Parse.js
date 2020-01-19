import { __awaiter, __generator } from "tslib";
let Parse = /** @class */ (function() {
  function Parse(options) {
    this.name = options.name;
    this.pluginUrls = options.pluginUrls;
    this.tempBlob = options.tempBlob;
  }
  /**
   * 初始化组件
   */
  Parse.prototype.initPlugin = function() {
    globalThis.eval.call(this, this.tempBlob);
  };
  /**
   * 下载文件 将所有依赖都读取到， DEMO使用
   */
  Parse.download = function(urlLists) {
    let urlPromises = urlLists.map(function(url) {
      return Parse.downloadFiles(url);
    });
    return new Promise(function(resolve) {
      Promise.all(urlPromises).then(function(results) {
        resolve(
          results.reduce(function(func, targetFunc) {
            return func + targetFunc;
          })
        );
      });
    });
  };
  /**
   * 下载组件
   * @param url
   * @param func
   */
  Parse.downloadFiles = function(url) {
    url = url.replace("dev", "dev");
    return new Promise(function(resolve) {
      uni.request({
        url: url,
        success: function(res) {
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
  };
  /**
   * 创建一个插件解析类
   * @param options
   */
  Parse.create = function(options) {
    return __awaiter(this, void 0, void 0, function() {
      let Cons, blobUrl;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            Cons = Parse;
            return [4 /*yield*/, Cons.download(options.pluginUrls)];
          case 1:
            blobUrl = _a.sent();
            return [
              2 /*return*/,
              new Promise(function(resolve) {
                let parse = new Cons({
                  name: options.name,
                  pluginUrls: options.pluginUrls,
                  tempBlob: blobUrl
                });
                resolve(parse);
              }),
            ];
        }
      });
    });
  };
  return Parse;
})();
export default Parse;
//# sourceMappingURL=Parse.js.map
