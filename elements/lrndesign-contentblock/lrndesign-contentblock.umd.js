!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e=e||self).LrndesignContentblock={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(){var e,t,n=(e=["\n      <style>\n        :host {\n          display: inline-block;\n          position: relative;\n          box-sizing: border-box;\n        }\n      </style>\n      <h3>[[title]]</h3>\n      <slot></slot>\n    "],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var u=function(e){function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i(this,r(u).apply(this,arguments))}var c,f,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(u,t.PolymerElement),c=u,s=[{key:"template",get:function(){return t.html(l())}},{key:"tag",get:function(){return"lrndesign-contentblock"}},{key:"properties",get:function(){return{title:{type:String}}}}],(f=null)&&n(c.prototype,f),s&&n(c,s),u}();window.customElements.define(u.tag,u),e.LrndesignContentblock=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-contentblock.umd.js.map
