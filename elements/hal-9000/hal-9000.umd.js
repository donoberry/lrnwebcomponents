!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],n):n((e=e||self).Hal9000={},e.polymerElement_js)}(this,function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,n,t){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var a=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}(e,n);if(a){var i=Object.getOwnPropertyDescriptor(a,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function l(){var e,n,t=(e=["\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n[hidden] {\n  display: none;\n}\n        </style>\n<slot></slot>"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return l=function(){return t},t}var c=function(e){function t(){var e,n,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),n=this;var i=(e=!(a=o(t).call(this))||"object"!=typeof a&&"function"!=typeof a?r(n):a).pathFromUrl(decodeURIComponent("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href)),s="".concat(i,"lib/annyang/annyang.min.js");if(window.addEventListener("es-bridge-annyang-loaded",e._annyangLoaded.bind(r(e))),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("annyang",s),void 0!==window.speechSynthesis){e.synth=window.speechSynthesis,e.voices=e.synth.getVoices();for(var l=0;l<e.voices.length;l++)e.voices[l].default&&(e.defaultVoice=e.voices[l].name)}return e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(t,n.PolymerElement),a(t,[{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}}],[{key:"template",get:function(){return n.html(l())}},{key:"properties",get:function(){var e={commands:{name:"commands",type:Object,value:{},observer:"_commandsChanged"},respondsTo:{name:"respondsTo",type:String,value:"(hal)",observer:"_respondsToChanged"},debug:{name:"debug",type:Boolean,value:!1,observer:"_debugChanged"},auto:{name:"auto",type:Boolean,reflectToAttribute:!0,observer:"_autoChanged"},enabled:{name:"enabled",type:Boolean,reflectToAttribute:!0,observer:"_enabledChanged"},pitch:{name:"pitch",type:Number,reflectToAttribute:!0,value:.9},rate:{name:"rate",type:Number,reflectToAttribute:!0,value:.9},language:{name:"language",type:String,reflectToAttribute:!0,value:"en-US"}};return s(o(t),"properties",this)&&(e=Object.assign(e,s(o(t),"properties",this))),e}},{key:"tag",get:function(){return"hal-9000"}}]),a(t,[{key:"connectedCallback",value:function(){s(o(t.prototype),"connectedCallback",this).call(this),window.Hal9000=window.Hal9000||{},window.Hal9000.instance=this}},{key:"clickObject",value:function(e){this.__text=e,this.commands[e].object.click(),this.commands[e].object.focus()}},{key:"_commandsChanged",value:function(e){this.addCommands(e)}},{key:"addCommands",value:function(e){this.annyang&&this.annyang.addCommands(e)}},{key:"speak",value:function(e){this.__text=e,this.synth?(this.utter=new SpeechSynthesisUtterance(this.__text),this.utter.pitch=this.pitch,this.utter.rate=this.rate,this.utter.lang=this.language,this.utter.voice=this.defaultVoice,this.synth.speak(this.utter)):console.warn("I have no voice...")}},{key:"_annyangLoaded",value:function(){if(this.annyang=window.annyang,this.annyang){this.annyang.addCommands(this.commands),this.annyang.debug(this.debug),this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.enabled&&this.annyang.start();var e=new CustomEvent("hal-9000-online",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(e)}}},{key:"_respondsToChanged",value:function(e,n){this.annyang&&this.annyang.removeCommands();var t={};for(var a in this.commands)a.replace(n,e)!==a?t[a.replace(n,e)]=this.commands[a]:t[a]=this.commands[a];this.set("commands",t)}},{key:"_autoChanged",value:function(e){this.enabled=e}},{key:"_enabledChanged",value:function(e){this.annyang&&(e?this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.annyang.start():this.annyang.abort())}},{key:"_debugChanged",value:function(e,n){this.annyang&&this.annyang.debug(e)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-annyang-loaded",this._annyangLoaded.bind(this)),s(o(t.prototype),"disconnectedCallback",this).call(this)}}]),t}();window.customElements.define(c.tag,c),window.Hal9000=window.Hal9000||{},window.Hal9000.requestAvailability=function(){window.Hal9000.instance||(window.Hal9000.instance=new c)},e.Hal9000=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=hal-9000.umd.js.map
