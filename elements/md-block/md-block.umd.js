!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/elements/dom-if.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/elements/dom-if.js"],t):t((e=e||self).MdBlock={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<div>\n<marked-element markdown="[[markdown]]">\n    <div slot="markdown-html"></div>\n    <dom-if if="[[hasSource]]">\n      <script type="text/markdown" src$="[[source]]"><\/script>\n    </dom-if>\n</marked-element>\n</div>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var a=function(e){function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e=c(this,r(n).call(this)),import("@polymer/marked-element/marked-element.js"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,t.PolymerElement),o(n,null,[{key:"template",get:function(){return t.html(u())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Markdown",description:"A block of markdown content directly or remote loaded",icon:"icons:code",color:"yellow",groups:["Block"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"source",title:"Source",description:"Source file for markdown",inputMethod:"textfield",icon:"icons:link"}],configure:[{property:"markdown",title:"Markdown",description:"Raw markdown",inputMethod:"code-editor"},{property:"source",title:"Source",description:"Source file for markdown",inputMethod:"haxupload"}],advanced:[]}}}},{key:"properties",get:function(){var e={source:{name:"source",type:String},hasSource:{name:"hasSource",type:Boolean,computed:"_calculateHasSource(source)"},markdown:{name:"markdown",type:String}};return l(r(n),"properties",this)&&(e=Object.assign(e,l(r(n),"properties",this))),e}}]),o(n,[{key:"_calculateHasSource",value:function(e){return!(!e||""==e)||(this.source=null,!1)}}],[{key:"tag",get:function(){return"md-block"}}]),n}();window.customElements.define(a.tag,a),e.MdBlock=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=md-block.umd.js.map
