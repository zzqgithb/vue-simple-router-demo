/**
 * @Author : ZiQin Zhai
 * @Date : 2019/8/1 18:35
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2019/8/1 18:35
 * @Description
 * */
module.exports.pages = function() {
  const pages = {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "轻云蒜瓣",
    },
  };
  return pages;
};
