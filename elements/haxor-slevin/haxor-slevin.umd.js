!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx/lib/mobx.module.js"),require("@lrnwebcomponents/utils/utils.js"),require("@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx/lib/mobx.module.js","@lrnwebcomponents/utils/utils.js","@lrnwebcomponents/anchor-behaviors/anchor-behaviors.js"],n):n((e=e||self).HaxorSlevin={},e.litElement_js,e.HAXCMSLitElementTheme_js,e.haxcmsSiteStore_js,e.mobx_module_js,e.utils_js)}(this,function(e,n,t,i,a,o){"use strict";function s(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n&&s(e.prototype,n),t&&s(e,t),e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function p(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e,n,t){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=d(e)););return e}(e,n);if(i){var a=Object.getOwnPropertyDescriptor(i,n);return a.get?a.get.call(t):a.value}})(e,n,t||e)}function h(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function g(){var e=h(['\n        :host {\n          display: block;\n          background-color: #ffffff;\n          color: rgba(0, 0, 0, 0.84);\n          --hax-base-styles-a-color: var(--haxcms-color, #2196f3);\n          --hax-base-styles-a-color-visited: var(--haxcms-color, #2196f3);\n          --hax-base-styles-a-color-active: var(--haxcms-color, #2196f3);\n        }\n        site-modal:not(:defined),\n        site-rss-button:not(:defined),\n        iron-image:not(:defined),\n        iron-pages:not(:defined),\n        site-share-widget:not(:defined),\n        site-active-title:not(:defined),\n        site-git-corner:not(:defined),\n        social-share-link:not(:defined),\n        simple-blog-card:not(:defined) {\n          display: none;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        :host([is-logged-in]) {\n          margin-left: 48px;\n        }\n        :host([is-logged-in][edit-mode]) {\n          padding-left: 12px;\n        }\n        /**\n      * Hide the slotted content during edit mode. This must be here to work.\n      */\n        :host([edit-mode]) #slot {\n          display: none;\n        }\n        :host([edit-mode]) .contentcontainer-wrapper simple-blog-card {\n          opacity: 0.2;\n          pointer-events: none;\n        }\n        #slot {\n          min-height: 50vh;\n        }\n        site-active-title {\n          font-size: 36px;\n        }\n        .wrapper {\n          padding-bottom: 80px;\n        }\n        #home {\n          max-width: 1032px;\n          padding-left: 20px;\n          padding-right: 20px;\n          margin: 0 auto;\n        }\n        .contentcontainer-wrapper {\n          max-width: 900px;\n          margin: 0 auto;\n          box-sizing: border-box;\n          padding-left: 20px;\n          padding-right: 20px;\n        }\n        simple-blog-card {\n          padding: 8px;\n          min-height: 100px;\n        }\n        .simple-blog-card-wrapper {\n          display: flex;\n          justify-content: space-evenly;\n          max-width: 900px;\n        }\n        simple-blog-card[size="micro"] {\n          padding: 4px;\n        }\n        iron-pages {\n          padding-top: 64px;\n        }\n        dom-repeat {\n          padding-bottom: 16px;\n          min-height: 300px;\n        }\n        .header-wrapper {\n          padding: 0 20px;\n          height: 54px;\n          width: 100%;\n          display: flex;\n          margin: 0 auto;\n          z-index: 100;\n          color: #ffffff;\n          justify-content: center;\n          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);\n          background-color: var(--haxcms-color, rgba(255, 0, 116, 1));\n        }\n        .header-wrapper div {\n          display: inline-flex;\n        }\n        .header-image {\n          max-width: 600px;\n          width: 100%;\n        }\n        .header-image iron-image {\n          max-width: 800px;\n        }\n        .backbutton {\n          height: 54px;\n          cursor: pointer;\n          text-align: center;\n          line-height: 32px;\n          background-color: transparent;\n          border: none;\n          display: inline-flex;\n          color: white;\n          min-width: 100px;\n          text-transform: unset;\n          margin: 0px 16px;\n        }\n        paper-icon-button {\n          --paper-icon-button-ink-color: white;\n        }\n\n        .social-float {\n          top: 160px;\n          position: fixed;\n          z-index: 99;\n          margin-left: -10vw;\n          opacity: 1;\n          transition: 0.2s opacity linear;\n        }\n        .social-float.disable-items {\n          pointer-events: none;\n          opacity: 0.2 !important;\n        }\n        .social-float ul {\n          padding: 0;\n          margin: 0;\n          list-style: none;\n        }\n\n        site-share-widget {\n          --site-share-widget-bg: var(--haxcms-color, rgba(255, 0, 116, 1));\n        }\n        site-share-widget:hover,\n        site-share-widget:focus,\n        site-share-widget:active {\n          --site-share-widget-bg: var(--haxcms-system-action-color, blue);\n        }\n\n        social-share-link {\n          --social-share-button-bg: var(--haxcms-color, rgba(255, 0, 116, 1));\n          --social-share-button-padding: 8px;\n          --social-share-button-border-radius: 50%;\n        }\n\n        .annoy-user {\n          background-color: rgba(255, 255, 255, 0.9);\n          display: block;\n          position: fixed;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          box-shadow: 0 -3px 10px 0 rgba(0, 0, 0, 0.0785);\n          padding: 10px 0;\n          height: 50px;\n          z-index: 100;\n          opacity: 1;\n          transition: 0.2s opacity linear;\n        }\n        .annoy-user.disable-items {\n          pointer-events: none;\n          opacity: 0 !important;\n        }\n        iron-icon {\n          height: 40px;\n          width: 40px;\n          display: flex;\n          padding-right: 20px;\n        }\n        .annoy-user iron-icon {\n          color: black;\n        }\n        .annoy-user span {\n          flex: 1 1 auto;\n          height: 40px;\n          display: flex;\n          vertical-align: middle;\n          line-height: 40px;\n        }\n        .annoy-inner strong {\n          padding: 0 4px;\n        }\n        .annoy-user .rss {\n          margin-left: 50px;\n        }\n        .annoy-inner {\n          max-width: 700px;\n          margin: 0 auto;\n          display: flex;\n        }\n        .subtitle {\n          font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",\n            Geneva, Arial, sans-serif;\n          letter-spacing: -0.02em;\n          font-weight: 300;\n          font-style: normal;\n          letter-spacing: 0;\n          font-size: 28px;\n          line-height: 1.22;\n          letter-spacing: -0.012em;\n        }\n        site-rss-button {\n          margin: 0 4px;\n          padding: 0;\n          --site-rss-color: #000000;\n          --site-rss-bg-color: var(--haxcms-color, rgba(255, 0, 116, 1));\n          --site-rss-paper-button-padding: 0 4px;\n          --site-rss-paper-button-margin: 0;\n        }\n\n        @media screen and (max-width: 800px) {\n          .header-image {\n            max-width: 200px;\n            width: 100%;\n          }\n          .header-image iron-image {\n            max-width: 200px;\n          }\n          .simple-blog-card-wrapper simple-blog-card {\n            margin: 0 10vw;\n          }\n          .simple-blog-card-wrapper {\n            text-align: center;\n          }\n          #contentcontainer,\n          #home {\n            padding-left: 8px;\n            padding-right: 8px;\n            transition: 0.5s opacity ease-in-out;\n          }\n          simple-blog-card {\n            padding: 0;\n          }\n          .hide-small {\n            display: none !important;\n          }\n          .annoy-user .rss {\n            margin-left: unset;\n          }\n          .annoy-user {\n            position: relative;\n            bottom: unset;\n            left: unset;\n            right: unset;\n            padding: 0;\n            height: unset;\n          }\n          .annoy-user span {\n            height: unset;\n            line-height: unset;\n          }\n          .annoy-inner {\n            max-width: unset;\n            margin: 0;\n          }\n        }\n      ']);return g=function(){return e},e}function f(){var e=h(['\n                  <simple-blog-card\n                    alt="','"\n                    color="','"\n                    .title="','"\n                    size="small"\n                    .link="','"\n                    .image="','"\n                    .author="','"\n                    .timestamp="','"\n                    .readtime="','"\n                    .authorimage="','"\n                    .placeholder="','"\n                    .authorlink="','"\n                  >\n                    ',"\n                  </simple-blog-card>\n                "]);return f=function(){return e},e}function b(){var e=h(['\n                  <simple-blog-card\n                    alt="','"\n                    color="','"\n                    .title="','"\n                    size="small"\n                    .link="','"\n                    .image="','"\n                    .author="','"\n                    .timestamp="','"\n                    .readtime="','"\n                    .authorimage="','"\n                    .placeholder="','"\n                    .authorlink="','"\n                  >\n                    ',"\n                  </simple-blog-card>\n                "]);return b=function(){return e},e}function v(){var e=h(['\n                  <simple-blog-card\n                    alt="','"\n                    color="','"\n                    .title="','"\n                    size="large"\n                    .link="','"\n                    .image="','"\n                    .author="','"\n                    .timestamp="','"\n                    .readtime="','"\n                    .authorimage="','"\n                    .placeholder="','"\n                    .authorlink="','"\n                  >\n                    ',"\n                  </simple-blog-card>\n                "]);return v=function(){return e},e}function y(){var e=h(['\n      <div class="header-wrapper">\n        <div>\n          <site-modal\n            @site-modal-click="','"\n            icon="icons:search"\n            title="Search site"\n            button-label="Search"\n          >\n            <site-search></site-search>\n          </site-modal>\n        </div>\n        <div>\n          <button\n            class="backbutton"\n            @click="','"\n            title="Back to blog post list"\n          >\n            <iron-icon icon="','"></iron-icon>\n            <span class="hide-small">','</span>\n          </button>\n        </div>\n        <div class="header-image">\n          <iron-image\n            src="','"\n            preload\n            sizing="cover"\n            style="height:46px;width:100%;margin: 4px 0 2px 0;"\n          ></iron-image>\n        </div>\n      </div>\n      <div class="wrapper">\n        <iron-pages .selected="','">\n          <div id="home">\n            <site-query\n              @result-changed="','"\n              limit="2"\n              sort=\'{"created": "ASC"}\'\n            ></site-query>\n            <div class="simple-blog-card-wrapper">\n              ','\n            </div>\n            <site-query\n              @result-changed="','"\n              start-index="2"\n              limit="6"\n              sort=\'{"created": "ASC"}\'\n            ></site-query>\n            <div class="simple-blog-card-wrapper">\n              ','\n            </div>\n          </div>\n          <div class="contentcontainer-wrapper">\n            <div id="contentcontainer">\n              <site-git-corner position="right"></site-git-corner>\n              <site-active-title></site-active-title>\n              <h3 class="subtitle" .hidden="','">\n                ','\n              </h3>\n              <div id="slot">\n                <slot></slot>\n              </div>\n            </div>\n            <site-query\n              @result-changed="','"\n              limit="3"\n              start-index="','"\n              sort=\'{"created": "ASC"}\'\n            ></site-query>\n            <div class="simple-blog-card-wrapper">\n              ','\n            </div>\n            <div class="social-float hide-small ','">\n              <ul>\n                <li>\n                  <social-share-link\n                    title="Share on twitter"\n                    button-style\n                    mode="icon-only"\n                    message="','"\n                    type="Twitter"\n                  >\n                  </social-share-link>\n                </li>\n                <li>\n                  <social-share-link\n                    title="Share on LinkedIn"\n                    button-style\n                    mode="icon-only"\n                    message="','"\n                    url="','"\n                    type="LinkedIn"\n                  >\n                  </social-share-link>\n                </li>\n                <li>\n                  <social-share-link\n                    title="Share on Facebook"\n                    button-style\n                    mode="icon-only"\n                    url="','"\n                    message="','"\n                    type="Facebook"\n                  >\n                  </social-share-link>\n                </li>\n                <li>\n                  <social-share-link\n                    title="Share on Pinterest"\n                    button-style\n                    mode="icon-only"\n                    message="','"\n                    image="','"\n                    url="','"\n                    type="Pinterest"\n                  >\n                  </social-share-link>\n                </li>\n              </ul>\n            </div>\n            <div class="annoy-user ','">\n              <div class="annoy-inner">\n                <iron-icon icon="','" class="hide-small"></iron-icon>\n                <span class="hide-small">\n                  Never miss a story from <strong>','</strong> use RSS\n                  today!\n                </span>\n                <span class="rss">\n                  <site-rss-button type="atom"></site-rss-button>\n                  <site-rss-button type="rss"></site-rss-button>\n                </span>\n                <site-share-widget\n                  alt="Share on social media"\n                ></site-share-widget>\n              </div>\n            </div>\n          </div>\n        </iron-pages>\n      </div>\n    ']);return y=function(){return e},e}var x=function(e){function s(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,s),(e=p(this,d(s).call(this))).__disposer=[],e.__mainPosts=[],e.__extraPosts=[],e.__followUpPosts=[],e.selectedPage=0,import("@polymer/iron-pages/iron-pages.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js"),import("@lrnwebcomponents/simple-blog-card/simple-blog-card.js"),a.autorun(function(n){var t=a.toJS(i.store.location);e._noticeLocationChange(t),e.__disposer.push(n)}),a.autorun(function(n){var t=a.toJS(i.store.manifest);e.title=o.varGet(t,"title",""),e.image=o.varGet(t,"metadata.theme.variables.image","assets/banner.jpg"),e.icon=o.varGet(t,"metadata.theme.variables.icon","icons:record-voice-over"),e.author=o.varGet(t,"metadata.author",{}),e.__disposer.push(n)}),a.autorun(function(n){e.activeManifestIndexCounter=a.toJS(i.store.activeManifestIndexCounter),e.__disposer.push(n)}),a.autorun(function(n){e.activeTitle=a.toJS(i.store.activeTitle),e.shareUrl=document.location.href,e.shareMsg=e.activeTitle+" "+e.shareUrl,o.varGet(i.store.activeItem,"metadata.fields.subtitle",!1)?e.subtitle=i.store.activeItem.metadata.fields.subtitle:e.subtitle=!1,o.varGet(i.store.activeItem,"metadata.fields.images.0.src",!1)&&(e.activeImage=i.store.activeItem.metadata.fields.images[0].src),e.__disposer.push(n)}),e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(s,t.HAXCMSLitElementTheme),r(s,[{key:"render",value:function(){var e=this;return n.html(y(),this.siteModalClick,this._goBack,this.icon,this.title,this.image,this.selectedPage,this.__mainPostsChanged,this.__mainPosts.map(function(t){return n.html(v(),t.metadata.fields&&t.metadata.fields.images&&t.metadata.fields.images[0]&&t.metadata.fields.images[0].alt?t.metadata.fields.images[0].alt:"",e.color,t.title,t.location,e._showImage(!!(t.metadata.fields&&t.metadata.fields.images&&t.metadata.fields.images[0]&&t.metadata.fields.images[0].alt)&&t.metadata.fields.images[0].alt),e.author.name,t.metadata.created,t.metadata.readtime,e.author.image,e.image,e.author.socialLink,t.description)}),this.__extraPostsChanged,this.__extraPosts.map(function(t){return n.html(b(),t.metadata.fields&&t.metadata.fields.images&&t.metadata.fields.images[0]&&t.metadata.fields.images[0].alt?t.metadata.fields.images[0].alt:"",e.color,t.title,t.location,e._showImage(!!(t.metadata.fields&&t.metadata.fields.images&&t.metadata.fields.images[0]&&t.metadata.fields.images[0].alt)&&t.metadata.fields.images[0].alt),e.author.name,t.metadata.created,t.metadata.readtime,e.author.image,e.image,e.author.socialLink,t.description)}),!this.subtitle,this.subtitle,this.__followUpPostsChanged,this.activeManifestIndexCounter,this.__followUpPosts.map(function(t){return n.html(f(),t.metadata.fields&&t.metadata.fields.images&&t.metadata.fields.images[0]&&t.metadata.fields.images[0].alt?t.metadata.fields.images[0].alt:"",e.color,t.title,t.location,e._showImage(!!(t.metadata.fields&&t.metadata.fields.images&&t.metadata.fields.images[0]&&t.metadata.fields.images[0].alt)&&t.metadata.fields.images[0].alt),e.author.name,t.metadata.created,t.metadata.readtime,e.author.image,e.image,e.author.socialLink,t.description)}),this.stateClass,this.shareMsg,this.shareMsg,this.shareUrl,this.shareUrl,this.shareMsg,this.shareMsg,this.activeImage,this.shareUrl,this.stateClass,this.icon,this.title)}},{key:"__mainPostsChanged",value:function(e){this.__mainPosts=e.detail.value}},{key:"__followUpPostsChanged",value:function(e){this.__followUpPosts=e.detail.value}},{key:"__extraPostsChanged",value:function(e){this.__extraPosts=e.detail.value}},{key:"_getStateClass",value:function(e){return e?"disable-items":""}},{key:"_getColor",value:function(e){if(e&&o.varExists(e,"metadata.theme.variables.hexCode"))return e.metadata.theme.variables.hexCode}},{key:"siteModalClick",value:function(e){import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js")}}],[{key:"styles",get:function(){return[n.css(g())]}},{key:"tag",get:function(){return"haxor-slevin"}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach(function(n){l(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},u(d(s),"properties",this),{manifest:{type:Object},color:{type:String},selectedPage:{type:Number,reflect:!0,attribute:"selected-page"},stateClass:{type:String},__mainPosts:{type:Array},__extraPosts:{type:Array},__followUpPosts:{type:Array}})}}]),r(s,[{key:"firstUpdated",value:function(){u(d(s.prototype),"firstUpdated",this)&&u(d(s.prototype),"firstUpdated",this).call(this),setTimeout(function(){import("@polymer/iron-image/iron-image.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-share-widget.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-git-corner.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-rss-button.js"),import("@lrnwebcomponents/social-share-link/social-share-link.js"),import("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js"),import("@polymer/iron-icon/iron-icon.js"),import("@polymer/iron-icons/iron-icons.js"),import("@polymer/iron-icons/editor-icons.js"),import("@polymer/iron-icons/device-icons.js"),import("@polymer/iron-icons/hardware-icons.js"),import("@polymer/iron-icons/communication-icons.js"),import("@polymer/iron-icons/social-icons.js"),import("@polymer/iron-icons/av-icons.js"),import("@polymer/iron-icons/maps-icons.js"),import("@polymer/iron-icons/places-icons.js")},0)}},{key:"updated",value:function(e){var n=this;u(d(s.prototype),"updated",this)&&u(d(s.prototype),"updated",this).call(this,e),e.forEach(function(e,t){"manifest"==t&&(n.color=n._getColor(n[t])),"editMode"==t&&(n.stateClass=n._getStateClass(n[t]))})}},{key:"_showImage",value:function(e){return e||!!this.image&&this.image}},{key:"_noticeLocationChange",value:function(e){if(e&&void 0!==e.route){var n=e.route.name;"home"===n||"404"===n?this.selectedPage=0:(window.scrollTo({top:0,left:0}),this.selectedPage=1,setTimeout(function(){window.AnchorBehaviors.getTarget(i.store.themeElement)},1e3)),setTimeout(function(){var e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)},50)}}},{key:"disconnectedCallback",value:function(){for(var e in this.__disposer)this.__disposer[e].dispose();u(d(s.prototype),"disconnectedCallback",this).call(this)}},{key:"_goBack",value:function(e){window.history.pushState(null,null,i.store.location.baseUrl),window.dispatchEvent(new PopStateEvent("popstate")),window.scrollTo({top:0,left:0});var n=new CustomEvent("json-outline-schema-active-item-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:{}});this.dispatchEvent(n),this.selectedPage=0}}]),s}();window.customElements.define(x.tag,x),e.HaxorSlevin=x,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=haxor-slevin.umd.js.map
