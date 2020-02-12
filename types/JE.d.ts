/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/6 16:59
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/6 16:59
 * @Description JE头文件
 **/
import { requestConfig } from "@/je/utils/ajax";
declare namespace JE {
  function ajax(config: requestConfig): any;
}
