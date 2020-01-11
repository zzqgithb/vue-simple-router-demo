/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/10 15:47
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/10 15:47
 * @Description
 **/
interface IParse {
  name: string;
  pluginUrls: string[];
  tempBlob?: string;

  initPlugin: () => void;
}

interface IParseStatic {
  new (options: IParse): IParse;

  /**
   * 下载插件代码
   * @param pluginUrl
   */
  download: (pluginUrls: string[]) => Promise<string>;
}
export { IParse, IParseStatic };
