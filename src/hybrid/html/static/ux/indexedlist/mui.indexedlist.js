/**
 * IndexedList
 * 类似联系人应用中的联系人列表，可以按首字母分组
 * 右侧的字母定位工具条，可以快速定位列表位置
 * varstion 1.0.0
 * by Houfeng
 * Houfeng@DCloud.io
 **/

(function($, window, document) {
  let classSelector = function(name) {
    return "." + $.className(name);
  };

  let IndexedList = ($.IndexedList = $.Class.extend({
    /**
     * 通过 element 和 options 构造 IndexedList 实例
     **/
    init: function(holder, options) {
      let self = this;
      self.options = options || {};
      self.box = holder;
      if (!self.box) {
        throw "实例 IndexedList 时需要指定 element";
      }
      self.createDom();
      self.findElements();
      self.caleLayout();
      self.bindEvent();
    },
    createDom: function() {
      let self = this;
      self.el = self.el || {};
      //styleForSearch 用于搜索，此方式能在数据较多时获取很好的性能
      self.el.styleForSearch = document.createElement("style");
      (document.head || document.body).appendChild(self.el.styleForSearch);
    },
    findElements: function() {
      let self = this;
      self.el = self.el || {};
      self.el.search = self.box.querySelector(
        classSelector("indexed-list-search")
      );
      self.el.searchInput = self.box.querySelector(
        classSelector("indexed-list-search-input")
      );
      self.el.searchClear = self.box.querySelector(
        classSelector("indexed-list-search") + " " + classSelector("icon-clear")
      );
      self.el.bar = self.box.querySelector(classSelector("indexed-list-bar"));
      self.el.barItems = [].slice.call(
        self.box.querySelectorAll(classSelector("indexed-list-bar") + " a")
      );
      self.el.inner = self.box.querySelector(
        classSelector("indexed-list-inner")
      );
      self.el.items = [].slice.call(
        self.box.querySelectorAll(classSelector("indexed-list-item"))
      );
      self.el.liArray = [].slice.call(
        self.box.querySelectorAll(classSelector("indexed-list-inner") + " li")
      );
      self.el.alert = self.box.querySelector(
        classSelector("indexed-list-alert")
      );
    },
    caleLayout: function() {
      let self = this;
      let withoutSearchHeight =
        self.box.offsetHeight - self.el.search.offsetHeight + "px";
      self.el.bar.style.height = withoutSearchHeight;
      self.el.inner.style.height = withoutSearchHeight;
      let barItemHeight =
        (self.el.bar.offsetHeight - 40) / self.el.barItems.length + "px";
      self.el.barItems.forEach(function(item) {
        item.style.height = barItemHeight;
        item.style.lineHeight = barItemHeight;
      });
    },
    scrollTo: function(group) {
      let self = this;
      let groupElement = self.el.inner.querySelector(
        '.mui-indexed-list-inner [data-group="' + group + '"]'
      );
      if (
        !groupElement ||
        (self.hiddenGroups && self.hiddenGroups.indexOf(groupElement) > -1)
      ) {
        return;
      }
      self.el.inner.scrollTop = groupElement.offsetTop;
    },
    bindBarEvent: function() {
      let self = this;
      let pointElement = null;
      let findStart = function(event) {
        if (pointElement) {
          pointElement.classList.remove("active");
          pointElement = null;
        }
        self.el.bar.classList.add("active");
        let point = event.changedTouches ? event.changedTouches[0] : event;
        pointElement = document.elementFromPoint(point.pageX, point.pageY);
        if (pointElement) {
          //linzhichao 2016-5-20
          let group = pointElement.innerText.trim().replaceAll("\n", "");
          if (group && group.length == 1) {
            pointElement.classList.add("active");
            self.el.alert.innerText = group;
            self.el.alert.classList.add("active");
            self.scrollTo(group);
          }
        }
        event.preventDefault();
      };
      let findEnd = function(event) {
        self.el.alert.classList.remove("active");
        self.el.bar.classList.remove("active");
        if (pointElement) {
          pointElement.classList.remove("active");
          pointElement = null;
        }
      };
      self.el.bar.addEventListener(
        "touchmove",
        function(event) {
          findStart(event);
        },
        false
      );
      self.el.bar.addEventListener(
        "touchstart",
        function(event) {
          findStart(event);
        },
        false
      );
      document.body.addEventListener(
        "touchend",
        function(event) {
          findEnd(event);
        },
        false
      );
      document.body.addEventListener(
        "touchcancel",
        function(event) {
          findEnd(event);
        },
        false
      );
    },
    search: function(keyword) {
      let self = this;
      keyword = (keyword || "").toLowerCase();
      let selectorBuffer = [];
      let groupIndex = -1;
      let itemCount = 0;
      let liArray = self.el.liArray;
      let itemTotal = liArray.length;
      self.hiddenGroups = [];
      let checkGroup = function(currentIndex, last) {
        if (itemCount >= currentIndex - groupIndex - (last ? 0 : 1)) {
          selectorBuffer.push(
            classSelector("indexed-list-inner li") +
              ":nth-child(" +
              (groupIndex + 1) +
              ")"
          );
          self.hiddenGroups.push(liArray[groupIndex]);
        }
        groupIndex = currentIndex;
        itemCount = 0;
      };
      liArray.forEach(function(item) {
        let currentIndex = liArray.indexOf(item);
        if (item.classList.contains($.className("indexed-list-group"))) {
          checkGroup(currentIndex, false);
        } else {
          let text = (item.innerText || "").toLowerCase();
          let value = (item.getAttribute("data-value") || "").toLowerCase();
          let tags = (item.getAttribute("data-tags") || "").toLowerCase();
          if (
            keyword &&
            text.indexOf(keyword) < 0 &&
            value.indexOf(keyword) < 0 &&
            tags.indexOf(keyword) < 0
          ) {
            selectorBuffer.push(
              classSelector("indexed-list-inner li") +
                ":nth-child(" +
                (currentIndex + 1) +
                ")"
            );
            itemCount++;
          }
          if (currentIndex >= itemTotal - 1) {
            checkGroup(currentIndex, true);
          }
        }
      });
      if (selectorBuffer.length >= itemTotal) {
        self.el.inner.classList.add("empty");
      } else if (selectorBuffer.length > 0) {
        self.el.inner.classList.remove("empty");
        self.el.styleForSearch.innerText =
          selectorBuffer.join(", ") + "{display:none;}";
      } else {
        self.el.inner.classList.remove("empty");
        self.el.styleForSearch.innerText = "";
      }
    },
    bindSearchEvent: function() {
      let self = this;
      self.el.searchInput.addEventListener(
        "input",
        function() {
          let keyword = this.value;
          self.search(keyword);
        },
        false
      );
      $(self.el.search).on(
        "tap",
        classSelector("icon-clear"),
        function() {
          self.search("");
        },
        false
      );
    },
    bindEvent: function() {
      let self = this;
      self.bindBarEvent();
      self.bindSearchEvent();
    }
  }));

  //mui(selector).indexedList 方式
  $.fn.indexedList = function(options) {
    //遍历选择的元素
    this.each(function(i, element) {
      if (element.indexedList) return;
      element.indexedList = new IndexedList(element, options);
    });
    return this[0] ? this[0].indexedList : null;
  };
})(mui, window, document);
