/**
 * @Author : ZiQin Zhai
 * @Date : 2020/1/6 17:24
 * @Version : 1.0
 * @Last Modifined by : ZiQin Zhai
 * @Last Modifined time : 2020/1/6 17:24
 * @Description 缩放类
 * */
const MAX = 2;
const MIN = 0.3;
/**
 * 初始化
 * @param el 元素
 */
function Scale({ el, parent }) {
  this.el = null;
  this.parent = null;
  this.baseWidht = 0; // 初始化宽度
  this.salce = 0; // 缩放比例
  this.step = 0.1; // 缩放阈值

  this.init(el, parent);
  this.initButton();
  this.caleScale();
  this.doScale();
}

/**
 * 初始化EL
 * @param el
 */
Scale.prototype.init = function(el, parent) {
  if (JE.isString(el)) {
    el = document.querySelectorAll(el);
  }
  if (JE.isString(parent)) {
    parent = document.querySelectorAll(parent);
  } else if (!parent) {
    parent = [document.body];
  }
  if (!el) {
    console.error("el参数异常");
    return;
  }
  this.el = el[0];
  this.parent = parent[0];
};

/**
 * 计算宽度与缩放比例
 */
Scale.prototype.caleScale = function() {
  this.baseWidht = this.el.clientWidth;
  // 缩放比例
  this.salce = this.parent.clientWidth / this.baseWidht;
};

/**
 * 缩放
 */
Scale.prototype.doScale = function() {
  const style = {
    "transform-origin": "left top",
    transform: `scale(${this.salce})`,
  };
  Object.assign(this.el.style, style);
};

/**
 * 创建Button
 */
Scale.prototype.initButton = function() {
  const btnWrapper = document.createElement("div");
  const styles = {
    position: "fixed",
    right: "20px",
    bottom: "50px",
  };

  const btnStyles = {
    "font-size": "40px",
    color: "rgba(83,109,254,0.3)",
  };

  const add = document.createElement("i");
  add.className = "jeicon jeicon-new-fine-plus-circle add doScale";
  const sub = document.createElement("i");
  sub.className = "jeicon jeicon-new-fine-minus-circle sub doScale";
  btnWrapper.appendChild(add);
  btnWrapper.appendChild(sub);
  Object.assign(sub.style, btnStyles);
  Object.assign(add.style, btnStyles);

  Object.assign(btnWrapper.style, styles);
  document.body.append(btnWrapper);
  this.initEvents();
};

/**
 * 初始化事件
 */
Scale.prototype.initEvents = function() {
  const _this = this;
  bindEvents(document.body, "doScale", "click", e => {
    const { target } = e;
    let idx = 1;
    // 缩小操作
    if (target.className.indexOf("sub") !== -1) {
      idx = -1;
    }
    const moved = _this.salce + idx * _this.step;
    _this.salce = Math.min(Math.max(MIN, moved), MAX);
    _this.doScale();
  });
};

/**
 * 事件代理
 * @param el
 * @param agent
 * @param action
 * @param cb
 */
function bindEvents(el, agent, action, cb) {
  el.addEventListener("click", e => {
    const { target } = e;
    if (target.classList.value.indexOf(agent) !== -1) {
      cb(e);
    }
  });
}
