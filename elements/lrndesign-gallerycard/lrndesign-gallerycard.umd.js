!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","lit-element/lit-element.js"],e):e((n=n||self).LrndesignGallerycard={},null,null,null,n.litElement_js)}(this,function(n,e,t,i,r){"use strict";function o(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function a(n){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function c(n,e){return(c=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function l(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var t,i,r,o=a(n);if(e){var c=a(this).constructor;t=Reflect.construct(o,arguments,c)}else t=o.apply(this,arguments);return i=this,!(r=t)||"object"!=typeof r&&"function"!=typeof r?l(i):r}}function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=u(['\n        :host {\n          display: inline-flex;\n        }\n        :host([size="micro"]) {\n          transform: scale(0.5);\n        }\n        :host([size="small"]) {\n          transform: scale(0.8);\n        }\n\n        div.card {\n          border-radius: 4px;\n          margin: 0;\n          width: 100%;\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n        }\n\n        .card-actions {\n          background-color: #f5f5f5;\n          border-radius: 0 0 4px 4px;\n          padding: 0 8px;\n        }\n        .card-actions .card-action-details {\n          display: inline-block;\n          vertical-align: middle;\n          vertical-align: -webkit-baseline-middle;\n          width: 80%;\n        }\n        #avatar {\n          display: inline-block;\n          vertical-align: text-top;\n          transform: scale(0.8);\n        }\n\n        .card-control-height {\n          height: 240px;\n        }\n\n        :host([elevation="0"]) {\n          border: solid 1px #eeeeee;\n        }\n\n        :host([elevation="1"]) {\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n        }\n        :host([elevation="2"]) {\n          box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);\n        }\n\n        .text-right {\n          text-align: right;\n        }\n\n        .text-left {\n          text-align: left;\n        }\n        .author {\n          text-align: left;\n          font-size: 12px;\n          line-height: 12px;\n          color: black;\n          display: block;\n          padding: 8px;\n        }\n\n        .title {\n          color: #222;\n          font-size: 12.8px;\n          font-weight: 600;\n          line-height: 20px;\n          padding: 0 12px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          margin-top: 8px;\n        }\n\n        .comments {\n          font-size: 12px;\n          float: right;\n          color: black;\n          line-height: 12px;\n        }\n\n        .divider {\n          height: 1px;\n          width: 100%;\n          background: #efefef;\n        }\n\n        .project-icon {\n          --simple-icon-height: 100%;\n          --simple-icon-width: 100%;\n          overflow: hidden;\n          color: grey;\n        }\n        .project-icon:hover,\n        .project-icon:focus {\n          color: black;\n        }\n\n        .center {\n          margin: auto;\n          width: 80%;\n          padding: 16px;\n        }\n\n        .link {\n          font-size: 16px;\n          line-height: 16px;\n        }\n\n        .submission-info {\n          width: 100%;\n        }\n        .submission-preview {\n          height: 160px;\n        }\n\n        .card-content {\n          padding: 0;\n          margin: 0;\n          overflow: hidden;\n        }\n\n        .inline {\n          display: inline;\n        }\n      ']);return d=function(){return n},n}function f(){var n=u(['\n                  <img\n                    style="width:100%; height:100%; background-color: lightgray;"\n                    loading="lazy"\n                    src="','"\n                  />\n                ']);return f=function(){return n},n}function p(){var n=u(['\n                  <simple-icon\n                    class="project-icon"\n                    icon="','"\n                  ></simple-icon>\n                ']);return p=function(){return n},n}function h(){var n=u(['\n      <div class="card">\n        <div class="card-content card-control-height card-control-center">\n          <div class="submission-preview">\n            ',"\n            ",'\n          </div>\n          <div class="submission-info">\n            <div class="divider"></div>\n            <div class="title">','</div>\n          </div>\n        </div>\n        <div class="card-actions">\n          <lrndesign-avatar\n            id="avatar"\n            label="','"\n            src="','"\n          ></lrndesign-avatar>\n          <div class="card-action-details">\n            <div class="author">','</div>\n            <span class="comments text-right">Comments: ',"</span>\n          </div>\n        </div>\n      </div>\n    "]);return h=function(){return n},n}var m=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&c(n,e)}(u,r.LitElement);var e,t,i,a=s(u);function u(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=a.call(this)).author={name:"author",display_name:"Author"},n.title="Project",n.elevation=1,n.comments=0,setTimeout(function(){n.addEventListener("mouseenter",n._mouseEnter.bind(l(n))),n.addEventListener("mouseleave",n._mouseLeave.bind(l(n)))},0),n}return e=u,i=[{key:"styles",get:function(){return[r.css(d())]}},{key:"tag",get:function(){return"lrndesign-gallerycard"}},{key:"properties",get:function(){return{size:{type:String,reflect:!0},image:{type:String,reflect:!0},icon:{type:String,reflect:!0},title:{type:String},author:{type:Object},elevation:{type:Number,reflect:!0},comments:{type:Number,reflect:!0}}}}],(t=[{key:"updated",value:function(n){var e=this;n.forEach(function(n,t){["size","image","icon","title","author","elevation","comments"].includes(t)&&e.dispatchEvent(new CustomEvent("".concat(t,"-changed"),{value:e[t]})),"icon"==t&&e[t]})}},{key:"render",value:function(){return r.html(h(),this.icon?r.html(p(),this.icon):"",this.image?r.html(f(),this.image):"",this.title,this.author.name,this.author.avatar,this.author.display_name,this.comments)}},{key:"_mouseEnter",value:function(n){this.elevation+=2}},{key:"_mouseLeave",value:function(n){this.elevation-=2}}])&&o(e.prototype,t),i&&o(e,i),u}();window.customElements.define(m.tag,m),n.LrndesignGallerycard=m,Object.defineProperty(n,"__esModule",{value:!0})});
