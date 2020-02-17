/**
 * @Author : ZiQin Zhai
 * @Date : 2020/2/17 16:48
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/2/17 16:48
 * @Description 授权相关逻辑
 **/
const TOKEN_KEY = "authorization";
const CURRENT_USER = "_current_user_";

export function getToken(): string | void {
  return JE.getLSItem(TOKEN_KEY);
}

export function setToken(val: string) {
  JE.setLSItem(TOKEN_KEY, val);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
  JE.setLSItem(CURRENT_USER, null);
}

const beforeLoginUrl = "beforeLoginUrl";

// 获取之前页面的信息
export function getBeforeUrl(): string | void {
  return JE.getLSItem(beforeLoginUrl);
}

export function setBeforeUrl(url: string) {
  return JE.setLSItem(beforeLoginUrl, url);
}

export function removeBeforeUrl() {
  JE.setLSItem(beforeLoginUrl, "");
}
