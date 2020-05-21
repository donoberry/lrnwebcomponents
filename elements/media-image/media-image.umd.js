!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-modal/lib/simple-modal-handler.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-modal/lib/simple-modal-handler.js"],t):t((e=e||self).MediaImage={},e.litElement_js,e.schemaBehaviors_js,e.simpleModalHandler_js)}(this,function(e,t,n,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?f(e):t}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(){var e=g(["\n        :host {\n          display: block;\n        }\n\n        .caption {\n          padding-bottom: 25px;\n          border-bottom: dashed 2px lightgray;\n          margin-bottom: 25px;\n          line-height: 1.5;\n          font-size: 18px;\n        }\n\n        .caption ::slotted(*) {\n          margin-top: 0;\n        }\n        .caption ::slotted(*:last-child) {\n          margin-bottom: 0;\n        }\n      "]);return h=function(){return e},e}function b(){var e=g(['\n              <slot id="slot"></slot>\n            ']);return b=function(){return e},e}function y(){var e=g(['\n      <div class="caption">\n        ',"\n      </div>\n    "]);return y=function(){return e},e}function v(){var e=g(["\n        :host {\n          display: block;\n        }\n\n        .citation {\n          font-size: 12.8px;\n          font-style: italic;\n          color: #4c4c4c;\n          margin: 15px 0 15px;\n        }\n      "]);return v=function(){return e},e}function w(){var e=g(['\n      <div class="citation"><slot></slot></div>\n    ']);return w=function(){return e},e}function x(){var e=g(['\n      <iron-image src="','" alt="','"></iron-image>\n    ']);return x=function(){return e},e}function k(){var e=g(["\n        :host {\n          display: block;\n        }\n        :host(:hover) {\n          cursor: pointer;\n        }\n        iron-image {\n          width: 100%;\n          --iron-image-width: 100%;\n        }\n        :host([round]) iron-image {\n          border-radius: 50%;\n        }\n      "]);return k=function(){return e},e}function j(){var e=g(['\n            <media-image-caption>\n              <slot name="caption">\n                ',"\n              </slot>\n            </media-image-caption>\n          "]);return j=function(){return e},e}function O(){var e=g(['\n            <figure-label\n              title="','"\n              description="','"\n            ></figure-label>\n          ']);return O=function(){return e},e}function _(){var e=g(["\n      ",'\n      <media-image-image\n        ?round="','"\n        resource="','-image"\n        source="','"\n        modal-title="','"\n        alt="','"\n      ></media-image-image>\n      <media-image-citation>\n        <slot name="citation">\n          ',"\n        </slot>\n      </media-image-citation>\n      ","\n    "]);return _=function(){return e},e}function L(){var e=g(['\n        :host {\n          display: block;\n          width: auto;\n          margin: auto;\n          --box-background-color: #f7f6ef;\n        }\n\n        :host([card]) {\n          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);\n          padding: 20px;\n        }\n\n        :host([box]) {\n          background-color: var(--box-background-color);\n          padding: 20px;\n        }\n\n        @media screen and (min-width: 450px) {\n          :host([size="small"]) {\n            max-width: 50%;\n          }\n        }\n\n        @media screen and (min-width: 650px) {\n          :host([size="small"]) {\n            max-width: 35%;\n          }\n        }\n\n        @media screen and (min-width: 900px) {\n          :host([size="small"]) {\n            max-width: 25%;\n          }\n        }\n\n        :host([offset="left"]) {\n          float: left;\n          margin: var(--media-image-offset-width, 1.5vw);\n          margin-left: calc(-2 * var(--media-image-offset-width, 1.5vw));\n          padding-left: calc(4 * var(--media-image-offset-width, 1.5vw));\n          margin-top: 0;\n          margin-bottom: calc(0.1 * var(--media-image-offset-width, 1.5vw));\n        }\n\n        :host([offset="right"]) {\n          float: right;\n          margin: var(--media-image-offset-width, 1.5vw);\n          margin-right: calc(-2 * var(--media-image-offset-width, 1.5vw));\n          padding-right: calc(4 * var(--media-image-offset-width, 1.5vw));\n          margin-top: 0;\n          margin-bottom: calc(0.1 * var(--media-image-offset-width, 1.5vw));\n        }\n\n        :host([offset="wide"]) {\n          margin: 0 calc(-1 * var(--media-image-offset-wide-width, 3.5vw));\n          max-width: 100vw;\n        }\n\n        :host([offset="narrow"]) {\n          max-width: var(--media-image-offset-narrow-max-width, 500px);\n          margin: auto;\n        }\n      ']);return L=function(){return e},e}var S=function(e){function i(){var e;return r(this,i),(e=d(this,u(i).call(this))).modalTitle="",e.source="",e.citation="",e.caption="",e.figureLabelTitle="",e.figureLabelDescription="",e.alt="",e.size="wide",e.round=!1,e.card=!1,e.box=!1,e.offset="none",setTimeout(function(){import("@polymer/iron-icons/iron-icons.js")},0),e}return s(i,n.SchemaBehaviors(t.LitElement)),a(i,null,[{key:"styles",get:function(){return[t.css(L())]}}]),a(i,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"caption"==n&&t._computeHasCaption(t[n]),["figureLabelTitle","figureLabelDescription"].includes(n)&&(t.__figureLabel=t._hasFigureLabel(t.figureLabelTitle,t.figureLabelDescription)),["figureLabelTitle","caption"].includes(n)&&(t.modalTitle=t.figureLabelTitle?t.figureLabelTitle:t.caption,t.modalTitle+=t.figureLabelDescription?" - "+t.figureLabelDescription:""),"__figureLabel"==n&&t[n]&&import("@lrnwebcomponents/figure-label/figure-label.js")})}},{key:"render",value:function(){return t.html(_(),this.__figureLabel?t.html(O(),this.figureLabelTitle,this.figureLabelDescription):"",this.round,this.schemaResourceID,this.source,this.modalTitle,this.alt,this.citation,this._hasCaption?t.html(j(),this.caption):"")}},{key:"_hasFigureLabel",value:function(e,t){return e.length>0||t.length>0}},{key:"_computeHasCaption",value:function(){this._hasCaption=this.caption.length>0||null!==this.querySelector('[slot="caption"]')}},{key:"connectedCallback",value:function(){var e=this;m(u(i.prototype),"connectedCallback",this).call(this),this._observer=new MutationObserver(function(t){e._computeHasCaption()}),this._observer.observe(this,{childList:!0})}},{key:"disconnectedCallback",value:function(){this._observer.disconnect(),m(u(i.prototype),"disconnectedCallback",this).call(this)}}],[{key:"tag",get:function(){return"media-image"}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},m(u(i),"properties",this),{__figureLabel:{type:Boolean},modalTitle:{type:String},_hasCaption:{type:Boolean},source:{type:String},citation:{type:String},caption:{type:String},alt:{type:String},size:{type:String,reflect:!0},round:{type:Boolean},card:{type:Boolean,reflect:!0},box:{type:Boolean,reflect:!0},offset:{type:String,reflect:!0},figureLabelTitle:{type:String,attribute:"figure-label-title"},figureLabelDescription:{type:String,attribute:"figure-label-description"}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Styled image",descrption:"An image gizmo with the ability to provide simple, consistent styling and accessibility options.",icon:"editor:insert-photo",color:"indigo",groups:["Image","Media"],handles:[{type:"image",source:"source",title:"alt",alt:"alt",citation:"citation",caption:"caption"}],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"source",title:"Source",description:"The URL for the image.",inputMethod:"textfield",icon:"link",required:!0},{property:"alt",title:"Alternative text",description:"Text to describe the image to non-sighted users.",inputMethod:"textfield",icon:"accessibility",required:!1}],configure:[{property:"source",title:"Source",description:"The URL for the image.",inputMethod:"haxupload",icon:"link",required:!0},{property:"alt",title:"Alternative text",description:"Text to describe the image to non-sighted users.",inputMethod:"alt",icon:"accessibility",required:!0},{property:"round",title:"Round image",description:"Crops the image appearance to be circle in shape.",inputMethod:"boolean",icon:"account",required:!1},{property:"card",title:"Card",description:"Apply a drop shadow to give the appearance of being a raised card.",inputMethod:"boolean",icon:"check-box-outline-blank",required:!1},{property:"box",title:"Box",description:"Apply a visual box around the image.",inputMethod:"boolean",icon:"image:crop-square",required:!1},{property:"offset",title:"Offset",description:"Apply a left or right offset to the image.",inputMethod:"select",icon:"image:crop-square",options:{none:"none",left:"left",right:"right",wide:"wide",narrow:"narrow"}},{property:"citation",title:"Citation",description:"Citation for the image.",inputMethod:"textfield",icon:"text-format",required:!1},{property:"caption",title:"Caption",description:"Caption for the image.",inputMethod:"textfield",icon:"text-format",required:!1},{property:"figureLabelTitle",title:"Figure Label Title",description:"Title for the figure label.",inputMethod:"textfield",icon:"text-format",required:!1},{property:"figureLabelDescription",title:"Figure Label Description",description:"Description for the figure label.",inputMethod:"textfield",icon:"text-format",required:!1}]}}}}]),i}();window.customElements.define(S.tag,S);var T=function(e){function n(){var e;return r(this,n),(e=d(this,u(n).call(this))).round=!1,e.modalContent=document.createElement("image-inspector"),e.modalContent.noLeft=!0,e.modalTitle="",setTimeout(function(){import("@polymer/iron-image/iron-image.js"),e.addEventListener("simple-modal-show",e.__modalShowEvent.bind(f(e)))},0),e}return s(n,i.SimpleModalHandler(t.LitElement)),a(n,null,[{key:"styles",get:function(){return[t.css(k())]}}]),a(n,[{key:"__modalShowEvent",value:function(e){import("@lrnwebcomponents/image-inspector/image-inspector.js")}},{key:"render",value:function(){return t.html(x(),this.source,this.alt)}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"source"==n&&(t.modalContent.src=t[n])})}}],[{key:"properties",get:function(){return{source:{type:String},alt:{type:String},round:{type:Boolean,reflect:!0},modalTitle:{type:String,attribute:"modal-title"}}}},{key:"tag",get:function(){return"media-image-image"}}]),n}();window.customElements.define(T.tag,T);var E=function(e){function n(){return r(this,n),d(this,u(n).apply(this,arguments))}return s(n,t.LitElement),a(n,[{key:"render",value:function(){return t.html(w())}}],[{key:"styles",get:function(){return[t.css(v())]}},{key:"tag",get:function(){return"media-image-citation"}}]),n}();window.customElements.define(E.tag,E);var C=function(e){function n(){return r(this,n),d(this,u(n).apply(this,arguments))}return s(n,t.LitElement),a(n,[{key:"render",value:function(){return t.html(y(),this.__hasContent?"":t.html(b()))}}],[{key:"styles",get:function(){return[t.css(h())]}},{key:"tag",get:function(){return"media-image-caption"}}]),n}();window.customElements.define(C.tag,C),e.MediaImage=S,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=media-image.umd.js.map
