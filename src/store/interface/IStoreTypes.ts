/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/10 15:08
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/10 15:08
 * @Description Store全量的接口数据
 **/
import ITestStore from "@/pages/test/store/interface/ITestStore";
import IHome from "@/pages/home/store/IHome";
export default interface IStoreTypes {
  testStore: ITestStore;
  homeStore: IHome;
}
