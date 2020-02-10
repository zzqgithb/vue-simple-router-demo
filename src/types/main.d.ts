/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/11 15:30
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/11 15:30
 * @Description 头文件入口
 **/
interface Window {
  [key: string]: any;
}

declare module GlobalThis {
  interface globalThis {
    [key: string]: any;
  }
}
