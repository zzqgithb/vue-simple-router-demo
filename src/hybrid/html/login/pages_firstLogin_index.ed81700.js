!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("Vue"));else if("function"==typeof define&&define.amd)define(["Vue"],e);else{var n="object"==typeof exports?e(require("Vue")):e(t.Vue);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=103)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,u){var c,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,e){return c.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},function(t,e,n){t.exports=n(6)},function(t,e){function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)})}}},function(e,n){e.exports=t},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.fetchLogin=function(t){var e=JE.getPushInfo(),n=e.clientid,r=e.token,u=Object.assign(t,{apkId:JE.getApkID(),apkName:JE.getLSItem("apkName"),apkKey:JE.getLSItem("apkCode"),cid:n,token:r,type:plus.os.name});return a(u),(0,o.default)(i.POST_LOGIN,{},{type:"post",data:u}).then(function(t){return t}).catch()},e.checkingUser=function(t){return(0,o.default)(i.POST_CHECK_USER,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchSendValidateCode=function(t){return(0,o.default)(i.POST_SEND_VALIDATECODE,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchUpdatePwd=function(t){return a(t),(0,o.default)(i.POST_UPDATE_PWD,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchHasUser=function(t){return(0,o.default)(i.POST_HAS_USER,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchSearchUserCompany=function(t){return(0,o.default)(i.GET_SEARCH_COMPANY,t,{}).then(function(t){return t}).catch()},e.fetchGetIndustry=function(t){return(0,o.default)(i.GET_INDUSTRY,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchJoinCompany=function(t){return(0,o.default)(i.POST_JOIN_COMPANY,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchCheckValidate=function(t){return(0,o.default)(i.POST_CHECK_VALIDATECODE,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchRegsiterAccount=function(t){return(0,o.default)(i.POST_REGISTER_ACOOUNT,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchSearchUserCode=function(t){return(0,o.default)(i.POST_USER_CODE,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchCreateState=function(t){return(0,o.default)(i.POST_APP_CREATE_STATE,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchAppCreateUser=function(t){return(0,o.default)(i.POST_APP_REGISTER_USER,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchAppDingTalkInfo=function(t){return(0,o.default)(i.POST_APP_DINGTALK_INFO,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetcDingTalkToken=function(t){return(0,o.default)(i.GET_DINGTALK_TOKEN,t,{}).then(function(t){return t}).catch()},e.fetchDingTalkPersistent=function(t,e){return(0,o.default)(i.GET_DINGTALK_PERSISTENT_CODE,t,{type:"post",data:e}).then(function(t){return t}).catch()},e.fetchDingTalkSNSToken=function(t){return(0,o.default)(i.GET_DINGTALK_SNS_TOKEN,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchDingTalkUserInfo=function(t){return(0,o.default)(i.GET_DINGTALK_USERINFO,{},{type:"post",data:t}).then(function(t){return t}).catch()},e.fetchPostPhoneQRCode=function(t){return(0,o.default)(i.POST_SET_PHONE_QRCODE,{},{type:"post",data:t}).then(function(t){return t}).catch()};var o=r(n(7)),i=n(8),a=function(t){var e={j_dept:"d",j_username:"u",j_password:"p"};for(var n in e)t.hasOwnProperty(n)&&(t[e[n]]=window.btoa(window.btoa(t[n])),delete t[n])}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=T(a,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?p:l,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",d="executing",p="completed",h={};function v(){}function m(){}function _(){}var g={};g[i]=function(){return this};var y=Object.getPrototypeOf,E=y&&y(y(N([])));E&&E!==n&&r.call(E,i)&&(g=E);var O=_.prototype=v.prototype=Object.create(g);function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function b(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var u=s(t[n],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function T(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:x}}function x(){return{value:e,done:!0}}return m.prototype=O.constructor=_,_.constructor=m,_[u]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},P(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,o){var i=new b(c(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},P(O),O[u]="Generator",O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(w),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),w(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;w(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t;return(t=JE).fetch.apply(t,arguments)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GET_DINGTALK_USERINFO=e.GET_DINGTALK_SNS_TOKEN=e.GET_DINGTALK_PERSISTENT_CODE=e.GET_DINGTALK_TOKEN=e.POST_SET_PHONE_QRCODE=e.POST_APP_DINGTALK_INFO=e.POST_APP_REGISTER_USER=e.POST_APP_CREATE_STATE=e.POST_USER_CODE=e.POST_REGISTER_ACOOUNT=e.POST_CHECK_VALIDATECODE=e.POST_CHECK_USER=e.POST_HAS_USER=e.GET_INDUSTRY=e.POST_JOIN_COMPANY=e.GET_SEARCH_COMPANY=e.POST_UPDATE_PWD=e.POST_SEND_VALIDATECODE=e.POST_LOGIN=void 0;e.POST_LOGIN="/rbac/login/login";e.POST_SEND_VALIDATECODE="/rbac/login/sendRandom";e.POST_UPDATE_PWD="/rbac/login/modifyPw";e.GET_SEARCH_COMPANY="/rbac/login/searchUserCompany";e.POST_JOIN_COMPANY="/je/app/AppUser/joinCompany";e.GET_INDUSTRY="/je/saas/saasYh/searchUsertrade";e.POST_HAS_USER="/rbac/login/validateRegister";e.POST_CHECK_USER="/rbac/login/checkUser";e.POST_CHECK_VALIDATECODE="/rbac/login/validateRandom";e.POST_REGISTER_ACOOUNT="/je/saas/saasYh/register";e.POST_USER_CODE="/rbac/login/getIdentityByUserCode";e.POST_APP_CREATE_STATE="/je/saas/saasYh/createState";e.POST_APP_REGISTER_USER="/je/saas/saasYh/registerDsf";e.POST_APP_DINGTALK_INFO="/je/app/login/getDingTalkInfo";e.POST_SET_PHONE_QRCODE="/je/app/login/setPhoneQRcode";e.GET_DINGTALK_TOKEN="https://oapi.dingtalk.com/sns/gettoken";e.GET_DINGTALK_PERSISTENT_CODE="https://oapi.dingtalk.com/sns/get_persistent_code";e.GET_DINGTALK_SNS_TOKEN="https://oapi.dingtalk.com/sns/get_sns_token";e.GET_DINGTALK_USERINFO="https://oapi.dingtalk.com/sns/getuserinfo"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"openWindow",{enumerable:!0,get:function(){return r.openWindow}}),Object.defineProperty(e,"previewImage",{enumerable:!0,get:function(){return r.previewImage}}),Object.defineProperty(e,"refresh",{enumerable:!0,get:function(){return r.refresh}}),Object.defineProperty(e,"capture",{enumerable:!0,get:function(){return r.capture}}),Object.defineProperty(e,"pick",{enumerable:!0,get:function(){return r.pick}}),Object.defineProperty(e,"zipImg",{enumerable:!0,get:function(){return r.zipImg}}),Object.defineProperty(e,"uploaderImg",{enumerable:!0,get:function(){return r.uploaderImg}}),Object.defineProperty(e,"getRem",{enumerable:!0,get:function(){return o.getRem}}),Object.defineProperty(e,"px2rem",{enumerable:!0,get:function(){return o.px2rem}}),Object.defineProperty(e,"windowDimensions",{enumerable:!0,get:function(){return o.windowDimensions}}),Object.defineProperty(e,"isApplicationExist",{enumerable:!0,get:function(){return o.isApplicationExist}});var r=n(10),o=n(14)},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.openWindow=function(t){var e=t.url,n=t.id,r=void 0===n?e:n,o=t.title,i=void 0===o?"":o,a=t.type,c=void 0===a?"default":a,f=t.hideNView,l=void 0!==f&&f,d=t.styles,p=(d=void 0===d?{}:d).statusbar,h=void 0===p?"#536DFE":p,v=d.popGesture,m=void 0===v?"close":v,_=(0,u.default)(d,["statusbar","popGesture"]),g=t.handleHeadClick,y=void 0===g?{}:g,E=(0,u.default)(t,["url","id","title","type","hideNView","styles","handleHeadClick"]),O=s({styles:s({statusbar:{background:h},popGesture:m,titleNView:!l&&{type:c,titleText:i,titleSize:"17px",titleColor:"#fff",autoBackButton:!0,backgroundColor:"#536dfe"},softinputMode:"adjustResize"},_)},E),P=mui.openWindow(s({url:e,id:r,show:{aniShow:"pop-in"}},O));if(!JE.isEmpty(y)){var b=y.center,T=y.right,S=plus.screen.resolutionWidth;P.getTitleNView().addEventListener("click",function(t){var e=t.clientX;var n=function(){switch(!0){case e<0:return!1;case b&&e>=parseInt(.2*S,10)&&e<=parseInt(.8*S,10):if(!T)return!0;case T&&e>=parseInt(.8*S,10):return!0;default:return!1}}();n&&mui.fire(P,"handleHeadClick")})}return P},e.previewImage=function(t,e){plus.nativeUI.previewImage(t,e)},e.refresh=function(t){plus.webview.currentWebview().setPullToRefresh({support:!0,height:"50px",range:"200px",contentdown:{caption:"下拉可以刷新"},contentover:{caption:"释放立即刷新"},contentrefresh:{caption:"正在刷新..."}},t)},e.capture=function(){return new Promise(function(t,e){var n=plus.camera.getCamera();n.captureImage(function(e){t(e)},function(t){e(t)})})},e.pick=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.multiple,n=void 0!==e&&e,r=t.maximum,o=void 0===r?n?9:1:r;return new Promise(function(t,e){plus.gallery.pick(function(e){var n=e.files;t(n||[e])},function(t){e(t)},{maximum:o,system:!1,multiple:n,onmaxed:function(){plus.nativeUI.toast("最多只能选择".concat(o,"张图片"))}})})},e.zipImg=f,e.uploaderImg=function(t){var e,n=t.path,r=t.hideWaiting,a=void 0!==r&&r,u=t.params,c=void 0===u?{}:u;function s(t){return new Promise(function(e,n){var r=plus.uploader.createUpload(JE.buildURL("".concat(JE.getUrlMaps("je.core.document.file"),"?login=TRUE")),{method:"POST",blocksize:204800,priority:100},function(t,r){200==r?e(t):n(t)});r.addFile(t,{key:"files"}),r.addData("filePath","/filestem"),r.addData("filePath","{ uploadType: 'TEMP' }"),JE.each(c,function(t,e){r.addData(t,e)}),r.setRequestHeader("authorization",JE.getLSItem("authorization")),r.start()})}a||(e=plus.nativeUI.showWaiting("正在上传"));return new Promise(function(){var t=(0,i.default)(o.default.mark(function t(r,i){var a,u;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=Array.isArray(n)?n:[n],t.next=3,Promise.all(a.map(function(t){return f(t)}));case 3:u=t.sent,Promise.all(u.map(function(t){return s(t)})).then(function(t){r(t)}).catch(function(t){i(t)}).then(function(){e&&e.close()});case 5:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}())};var o=r(n(2)),i=r(n(3)),a=r(n(11)),u=r(n(12));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){(0,a.default)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function f(t){return new Promise(function(e,n){plus.zip.compressImage({src:t,dst:"_doc/temp/".concat(+new Date,"_").concat(Math.floor(1e4*Math.random()),".jpg"),quality:70},function(t){var n=t.target;e(n)},function(t){JE.msg(t.message),n(t)})})}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(13);t.exports=function(t,e){if(null==t)return{};var n,o,i=r(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},function(t,e){t.exports=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}},function(t,e,n){"use strict";function r(){var t=window.lib.flexible.dpr,e=window.document.documentElement.getBoundingClientRect().width;return e/t>540&&(e=540*t),e/10}Object.defineProperty(e,"__esModule",{value:!0}),e.windowDimensions=function(){return window.screen.height},e.getRem=r,e.px2rem=function(t){var e=r();return parseFloat(t)/e},e.isApplicationExist=function(t){switch(t){case"weixin":return plus.runtime.isApplicationExist({pname:"com.tencent.mm",action:"weixin://"})&&1==JE.getSystemConfig("JE_SHOW_WX");case"qq":return plus.runtime.isApplicationExist({pname:"com.tencent.mobileqq",action:"mqqapi://"})&&1==JE.getSystemConfig("JE_SHOW_QQ");default:return!1}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toastValidate=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"请输入";e||mui.toast("".concat(n).concat(t),{duration:"long",type:"div"});return e},e.validate=void 0;e.validate={isNull:function(t){return!!t},isPhone:function(t){return!!/^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(t)},regPwd:function(t){return!!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(t)},regEmail:function(t){return!!/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(t)},isNum:function(t){return!!/^[0-9]+$/.test(t)}}},function(t,e,n){"use strict";n.r(e);var r=n(17),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"Headerbar",props:{centerColor:{type:String,default:"#ffffff"},leftColor:{type:String,default:"#ffffff"},rightColor:{type:String,default:"#ffffff"},appointUrl:{type:String,default:""},bgColor:{type:String,default:"#536DFE"},isCustom:{type:Boolean,default:!1}},data:function(){return{showLeftBack:!1,headerStyle:{background:this.bgColor}}},computed:{},created:function(){},mounted:function(){this.headerStyle.top=this.handleImmer,this.$slots.leftOption&&(this.showLeftBack=!1)},methods:{back:function(){this.appointUrl?this.$router.replace({name:this.appointUrl}):mui.back()}}};e.default=r},function(t,e,n){},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-bar"},[n("div",{staticClass:"header-bar-custom",style:t.headerStyle},[t.isCustom?[t._t("customHeader")]:[n("div",{staticClass:"left-option option-item"},[t.showLeftBack?n("div",{on:{tap:t.back}},[n("i",{staticClass:"jeicon jeicon-angle-left",style:{color:t.leftColor}}),t._v(" "),n("span",{style:{color:t.leftColor}},[t._v("返回")])]):n("div",[t._t("leftOption")],2)]),t._v(" "),n("div",{staticClass:"center-option option-item",style:{color:t.centerColor}},[t._t("title")],2),t._v(" "),n("div",{staticClass:"right-option option-item",style:{color:t.rightColor}},[t._t("rightOption")],2)]],2)])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(19),o=n(16);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n(30);var a=n(1),u=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);u.options.__file="index.vue",e.default=u.exports},function(t,e,n){"use strict";var r=n(18);n.n(r).a},,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(45),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(2)),i=r(n(3)),a=n(15),u=n(5),c=n(9),s={name:"FirstLogin",components:{},data:function(){return{loginInfo:{},sendAuthCode:!0,auth_time:0,phone:"",validateCode:"",deptName:"",userName:"",params:{}}},created:function(){},mounted:function(){var t=plus.webview.currentWebview();this.params=t;var e=this.params.phone;this.phone="".concat(e.substr(0,3),"****").concat(e.substr(7)),this.deptName=this.params.deptName,this.userName="null"==this.params.userName?"":this.params.userName},methods:{next:function(){var t=(0,i.default)(o.default.mark(function t(){var e;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if((0,a.toastValidate)("验证码",a.validate.isNull(this.validateCode))){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,(0,u.fetchCheckValidate)({email:this.params.phone,type:"PHONE",cz:"ZH",code:this.validateCode});case 4:if(!(e=t.sent).success){t.next=9;break}(0,c.openWindow)({url:"./pages_firstLoginSetPwd/index.html",id:"__firstLoginSetPwdView",title:"重置密码",extras:{phone:this.params.phone,deptId:this.params.deptId,validateCode:this.validateCode}}),t.next=11;break;case 9:return mui.toast(e.msg),t.abrupt("return",!1);case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getValidateCode:function(){var t=(0,i.default)(o.default.mark(function t(){var e,n,r=this;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.sendAuthCode){t.next=6;break}return t.next=3,(0,u.fetchSendValidateCode)({email:this.params.phone,type:"PHONE",cz:"ZH"});case 3:e=t.sent,mui.toast(e.msg),e.success&&(this.sendAuthCode=!1,this.auth_time=59,n=setInterval(function(){r.auth_time--,r.auth_time<=0&&(r.sendAuthCode=!0,clearInterval(n))},1e3));case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}};e.default=s},function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"first-login"},[n("header-bar",{attrs:{"center-color":"#3D3C3C","left-color":"#536DFE","bg-color":""}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("设置新密码")])]),t._v(" "),n("div",{staticClass:"first-login-content"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"desc"},[t._v("\n        请先获取短信验证码。您的手机号"+t._s(t.phone)+"\n      ")]),t._v(" "),n("div",{staticClass:"user-info-pwd-message "},[n("span",{staticClass:"text"},[t._v("短信验证码")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.validateCode,expression:"validateCode"}],staticClass:"form-input",attrs:{type:"number",placeholder:"输入验证码",maxlength:"6",pattern:"\\d*",oninput:"if(value.length>6)value=value.slice(0,6)"},domProps:{value:t.validateCode},on:{input:function(e){e.target.composing||(t.validateCode=e.target.value)}}}),t._v(" "),n("button",{staticClass:"get-validate-code",on:{tap:t.getValidateCode}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.sendAuthCode,expression:"sendAuthCode"}]},[t._v("获取")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.sendAuthCode,expression:"!sendAuthCode"}]},[t._v(t._s(t.auth_time)+"s")])])]),t._v(" "),n("button",{staticClass:"set-pwd-btn",on:{tap:t.next}},[t._v("\n        下一步\n      ")]),t._v(" "),n("div",{staticClass:"message"},[n("div",[t._v("提示：您已经被"+t._s(t.deptName)+" 管理员 "+t._s(t.userName?t.userName:"某某")+"先生／女士添加为该公司员工， 首次登录需重新设置。")])])])])],1)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(0),o=r(n(4)),i=r(n(104)),a=r(n(29));o.default.component("header-bar",a.default),o.default.config.productionTip=!1,o.default.config.devtools=!0,new o.default({render:function(t){return t(i.default)}}).$mount("#app")},function(t,e,n){"use strict";n.r(e);var r=n(82),o=n(44);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n(105);var a=n(1),u=Object(a.a)(o.default,r.a,r.b,!1,null,null,null);u.options.__file="index.vue",e.default=u.exports},function(t,e,n){"use strict";var r=n(46);n.n(r).a}])});