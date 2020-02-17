/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/17 17:30
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/17 17:30
 * @Description
 **/

const BASE_URL = "/je/phone/app";

/**
 * 加载apk相关
 * @param apkCode apkCode
 */
export function loadApk(apkCode: string) {
  return JE.ajax({
    url: `${BASE_URL}/loadApk`,
    data: {
      apkCode,
    }
  });
}

/**
 * 获取全部的App信息
 */
export function loadApks() {
  return JE.ajax({
    url: `${BASE_URL}/loadApk`,
  });
}

/**
 * 加载首页信息
 * @param apkId
 * @returns {Promise}
 */
export function loadHome({
  apkId,
  plugins = [],
  appId,
}: {
  apkId: string;
  plugins: [];
  appId: string;
}) {
  return JE.ajax({
    url: `${BASE_URL}/loadHome`,
    data: arguments[0],
  });
}
