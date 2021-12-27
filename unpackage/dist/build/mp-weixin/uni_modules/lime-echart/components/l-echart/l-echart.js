(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/lime-echart/components/l-echart/l-echart"],{"383c":function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"3ea9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),i=u(n("aeab")),a=s(n("f063")),o=n("3f3a");function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function s(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=r?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}return n.default=t,e&&e.set(t,n),n}function u(t){return t&&t.__esModule?t:{default:t}}function h(t){return v(t)||d(t)||l(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function v(t){if(Array.isArray(t))return p(t)}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){g(a,r,i,o,c,"next",t)}function c(t){g(a,r,i,o,c,"throw",t)}o(void 0)}))}}var w={name:"lime-echart",props:{type:{type:String,default:"2d"},ec:{type:Object,default:function(){}},onInit:Function,customStyle:String,isAutoPlay:Boolean,isDisableScroll:Boolean,isEnable:Boolean,isClickable:{type:Boolean,default:!0}},data:function(){return{use2dCanvas:!0,width:null,height:null,nodeWidth:null,nodeHeight:null,canvasNode:null,config:{},inited:!1,finished:!1,file:"",platform:""}},computed:{canvasId:function(){return"lime-echart".concat(this._uid)}},watch:{"ec.option":{deep:!0,handler:function(t,e){this.isAutoPlay&&(this.ec.clear&&this.clear(),this.setOption(t))}}},beforeDestroy:function(){this.clear(),this.dispose()},created:function(){a.registerPreprocessor((function(t){t&&t.series&&(t.series.length>0?t.series.forEach((function(t){t.progressive=0})):"object"===typeof t.series&&(t.series.progressive=0))}));var e=t.getSystemInfoSync(),n=e.SDKVersion,r=e.version,i=e.platform,c=e.environment;this.isPC=/windows/i.test(i),this.use2dCanvas="2d"===this.type&&(0,o.compareVersion)(n,"2.9.2")>=0&&!(/ios/i.test(i)&&/7.0.20/.test(r)||/wxwork/i.test(c))&&!this.isPC},mounted:function(){var t;!(this.ec&&!(null===(t=this.ec)||void 0===t?void 0:t.lazyLoad)||this.isEnable)||this.onInit?this.onInit&&this.init(this.onInit):this.init()},methods:{setChart:function(t,e){var n=this;return y(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.enabled();case 2:if("function"!==typeof t||!n.chart){e.next=5;break}return e.next=5,t(n.chart);case 5:case"end":return e.stop()}}),e)})))()},setOption:function(){var t=arguments,e=this;return y(r.default.mark((function n(){var i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.enabled();case 2:e.chart&&e.chart.setOption?(i=e.chart).setOption.apply(i,h(t)):console.warn("组件还未初始化");case 3:case"end":return n.stop()}}),n)})))()},showLoading:function(){var t=this;return y(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.enabled();case 2:t.chart&&t.chart.showLoading();case 3:case"end":return e.stop()}}),e)})))()},hideLoading:function(){this.chart&&this.chart.hideLoading()},clear:function(){this.chart&&this.chart.clear()},dispose:function(){this.chart&&this.chart.dispose()},canvasToTempFilePath:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.use2dCanvas,i=this.canvasId,a=this.canvasNode;return new Promise((function(o,c){var s=Object.assign({canvasId:i,success:o,fail:c},n);r&&(delete s.canvasId,s.canvas=a),t.canvasToTempFilePath(s,e)}))},init:function(t,e){var n=this;return y(r.default.mark((function e(){var i,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.getContext();case 2:if(i=e.sent,"function"!==typeof t){e.next=9;break}return e.next=6,t(i);case 6:n.chart=e.sent,e.next=15;break;case 9:o=i.canvas,n.chart=a.init(o,null,i),o.setChart(n.chart),n.ec&&n.ec.option&&n.setOption(n.ec.option),n.inited=!0,n.$emit("inited",!0);case 15:case"end":return e.stop()}}),e)})))()},enabled:function(){var t=this;return y(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isEnable){e.next=3;break}return e.next=3,t.getContext();case 3:case"end":return e.stop()}}),e)})))()},getContext:function(){var e=this,n=this.use2dCanvas,r=this.type,c=void 0===r?"2d":r,s=this.config,u=o.devicePixelRatio;return s.canvas?Promise.resolve(s):new Promise(n?function(n){t.createSelectorQuery().in(e).select("#".concat(e.canvasId)).fields({node:!0,size:!0}).exec((function(t){var r=t[0],o=r.node,s=r.width,h=r.height;s=s||300,h=h||300;var f=o.getContext(c);o.width=s*u,o.height=h*u;var l=new i.default(f,e.canvasId,!0,o);a.setCanvasCreator((function(){return l})),e.canvasNode=o,e.config={canvas:l,width:s,height:h,devicePixelRatio:u},n(e.config)}))}:function(n){t.createSelectorQuery().in(e).select("#".concat(e.canvasId)).boundingClientRect().exec((function(r){if(r){var c=r[0],s=c.width,h=c.height;s=s||300,h=h||300,u=e.isPC?o.devicePixelRatio:1,e.nodeWidth=s*u,e.nodeHeight=h*u;var f=t.createCanvasContext(e.canvasId,e),l=new i.default(f,e.canvasId,!1);a.setCanvasCreator((function(){return l})),e.config={canvas:l,width:s,height:h,devicePixelRatio:u},n(e.config)}}))})},touchStart:function(t){if(this.chart&&t.touches.length>0){var e=t.touches[0],n=this.chart.getZr().handler;n.dispatch("mousedown",{zrX:e.x,zrY:e.y}),n.dispatch("mousemove",{zrX:e.x,zrY:e.y}),n.processGesture((0,o.wrapTouch)(t),"start")}},touchMove:function(t){if(this.chart&&t.touches.length>0){var e=t.touches[0],n=this.chart.getZr().handler;n.dispatch("mousemove",{zrX:e.x,zrY:e.y}),n.processGesture((0,o.wrapTouch)(t),"change")}},touchEnd:function(t){if(this.chart){var e=t.changedTouches?t.changedTouches[0]:{},n=this.chart.getZr().handler;n.dispatch("mouseup",{zrX:e.x,zrY:e.y}),this.isClickable&&n.dispatch("click",{zrX:e.x,zrY:e.y}),n.processGesture((0,o.wrapTouch)(t),"end")}}}};e.default=w}).call(this,n("543d")["default"])},"5aa7":function(t,e,n){},"6a9f":function(t,e,n){"use strict";n.r(e);var r=n("3ea9"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"9e98":function(t,e,n){"use strict";var r=n("5aa7"),i=n.n(r);i.a},bf55:function(t,e,n){"use strict";n.r(e);var r=n("383c"),i=n("6a9f");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("9e98");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"7869eb26",null,!1,r["a"],o);e["default"]=s.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/lime-echart/components/l-echart/l-echart-create-component',
    {
        'uni_modules/lime-echart/components/l-echart/l-echart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bf55"))
        })
    },
    [['uni_modules/lime-echart/components/l-echart/l-echart-create-component']]
]);
