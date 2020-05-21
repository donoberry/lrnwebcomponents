!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("countup.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","countup.js"],t):t((e=e||self).CountUpElement={},e.litElement_js,e.IntersectionObserverMixin_js,e.countup_js)}(this,function(e,t,n,r){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=f(["\n:host {\n  display: inline-flex;\n  --count-up-color: #000000;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.wrapper {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n#counter {\n  color: var(--count-up-color);\n  font-weight: var(--count-up-number-font-weight);\n  font-size: var(--count-up-number-font-size);\n}\n      "]);return d=function(){return e},e}function y(){var e=f(['\n\n<div class="wrapper">\n  <slot name="prefix"></slot>\n  <div id="counter"></div>\n  <slot name="suffix"></slot>\n</div>']);return y=function(){return e},e}var b=function(e){function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a(this,p(i).call(this))).start=0,e.end=100,e.duration=2.5,e.noeasing=!1,e.decimalplaces=0,e.separator=",",e.decimal=".",e.prefixtext=" ",e.suffixtext=" ",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,n.IntersectionObserverMixin(t.LitElement)),o(i,[{key:"render",value:function(){return t.html(y())}}],[{key:"styles",get:function(){return[t.css(d())]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Count up",description:"count up js wrapper with minimal styling",icon:"icons:android",color:"green",groups:["Up"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[{property:"start",description:"",inputMethod:"textfield"},{property:"end",description:"",inputMethod:"textfield"},{property:"duration",description:"",inputMethod:"textfield"},{property:"noeasing",description:"",inputMethod:"boolean"},{property:"decimalplaces",description:"",inputMethod:"textfield"},{property:"separator",description:"",inputMethod:"textfield"},{property:"decimal",description:"",inputMethod:"textfield"},{property:"prefix",description:"",inputMethod:"textfield"},{property:"suffix",description:"",inputMethod:"textfield"}],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},l(p(i),"properties",this),{start:{type:Number},end:{type:Number},duration:{type:Number},noeasing:{type:Boolean},decimalplaces:{type:Number},separator:{type:String},decimal:{type:String},prefixtext:{type:String},suffixtext:{type:String},thresholds:{type:Array},rootMargin:{type:String,attribute:"root-margin"},ratio:{type:Number,reflect:!0},visibleLimit:{type:Number,reflect:!0,attribute:"visible-limit"},elementVisible:{type:Boolean}})}},{key:"tag",get:function(){return"count-up"}}]),o(i,[{key:"firstUpdated",value:function(){var e={startVal:this.start,decimalPlaces:this.decimalplaces,duration:this.duration,useEasing:!this.noeasing,separator:this.separator,decimal:this.decimal,prefix:this.prefixtext,suffix:this.suffixtext};this._countUp=new r.CountUp(this.shadowRoot.querySelector("#counter"),this.end,e)}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"elementVisible"==n&&t[n]&&t._countUp.start()})}}]),i}();customElements.define(b.tag,b),e.CountUp=r.CountUp,e.CountUpElement=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=count-up.umd.js.map
