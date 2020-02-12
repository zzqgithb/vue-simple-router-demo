/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/11 15:02
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/11 15:02
 * @Description
 **/
import Vue from "@/types/vue";

declare module "vue/types/vue" {
  interface Vue {
    __proto__: any;
    _data: {
      [str: string]: any;
    };
    $route: any;
    $createCtrl: (Ctor: any, params?: object) => any;
    [str: string]: any;
  }
}
