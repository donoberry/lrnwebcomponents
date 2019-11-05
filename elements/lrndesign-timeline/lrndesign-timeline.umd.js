!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"),require("@lrnwebcomponents/responsive-utility/responsive-utility.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js","@lrnwebcomponents/responsive-utility/responsive-utility.js"],n):n((e=e||self).LrndesignTimeline={},e.polymerElement_js,e.simpleColorsPolymer_js)}(this,function(e,n,t){"use strict";function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e,n,t){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}(e,n);if(i){var r=Object.getOwnPropertyDescriptor(i,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function a(){var e,n,t=(e=['\n<style>\n:host {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 160%;\n  display: block;\n  --lrndesign-timeline-color: var(--simple-colors-default-theme-grey-8, #444);\n  --lrndesign-timeline-color-print: #000;\n  --lrndesign-timeline-background: #f4f4f4;\n  --lrndesign-timeline-background-print: #fff;\n  --lrndesign-timeline-border: var(--simple-colors-default-theme-grey-5, #bbb);\n  --lrndesign-timeline-border-print: var(--simple-colors-fixed-theme-grey-5, #bbb);\n  --lrndesign-timeline-accent: #000;\n  --lrndesign-timeline-accent-background: #fff;\n  --lrndesign-timeline-accent-border: var(--simple-colors-default-theme-accent-8, #444);\n  --lrndesign-timeline-header: var(--simple-colors-default-theme-accent-1, #fff);\n  --lrndesign-timeline-header-accent: var(--simple-colors-default-theme-accent-8, #444);\n  --lrndesign-timeline-accent-print: var(--simple-colors-fixed-theme-accent-8, #444);\n}\n:host([dark]){\n  --lrndesign-timeline-background: #1b1b1b;\n}\n:host([hidden]) {\n  display: none;\n}\n:host #timeline {\n  display: block;\n  border-radius: 3px;\n  border: 1px solid var(--lrndesign-timeline-border-print);\n  border-left: 3px solid var(--lrndesign-timeline-accent-print);\n  background-color: var(--lrndesign-timeline-background-print);\n  color: var(--lrndesign-timeline-color-print);\n}\n:host #events {\n  padding: 0;\n  width: 100%;\n  min-height: 300px;\n}\n:host .heading {\n  margin: 0;\n  color: var(--lrndesign-timeline-accent-print);\n}\n:host .heading h2 {\n  font-size: 24px;\n  font-weight: 300;\n}\n:host .heading h2,\n:host .details,\n:host .media {\n  padding: 0 40px;\n}\n:host .details {\n  margin: 15px 0; \n}\n:host .media { \n  opacity: 1;\n  transition: opacity 0.5s;\n}\n:host .media, \n:host .media * { \n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 260px;\n}\n@media screen {\n  :host #timeline {\n    color: var(--lrndesign-timeline-color);\n    background-color: var(--lrndesign-accent-background);\n    border: 1px solid var(--lrndesign-timeline-border);\n    border-left: 3px solid var(--lrndesign-timeline-accent-border);\n  }\n  :host([dark]) #timeline {\n    background-color: var(--lrndesign-timeline-background);\n  }\n  :host h2 {\n    color:  var(--lrndesign-timeline-header-accent);\n  }\n  :host(:not([timeline-size="xs"])) #timeline {\n    background-color: var(--lrndesign-timeline-background);\n  }\n  :host(:not([timeline-size="xs"])) h2 {\n    color: var(--lrndesign-timeline-header-accent);\n  }\n  :host(:not([timeline-size="xs"])) #events {\n    height: 300px;\n    position: relative;\n    overflow-y: scroll;\n  }\n  :host(:not([timeline-size="xs"])) .event {\n    position: static;\n    top: 0;\n  }\n  :host(:not([timeline-size="xs"])) .event-overview {\n    padding: 0;\n    position: sticky;\n    top: 0;\n  }\n  :host(:not([timeline-size="xs"])) .heading {\n    position: absolute;\n    top: 0;\n    padding: 10px 0;\n    overflow: hidden;\n    background-color: transparent;\n    width: calc(55% + 30px);\n  }\n  :host(:not([timeline-size="xs"])) .event[has-media][selected] .heading {\n    z-index: 2;\n  }\n  :host(:not([timeline-size="xs"])) .event[has-media] .heading:after {\n    content: \' \';\n    z-index: 200;\n    position: absolute;\n    top: 42px;\n    right: 30px;\n    width: 0; \n    padding: 0; \n    border-top: 0px solid transparent;\n    border-bottom: 0px solid transparent;\n    border-left: 0px solid transparent;\n    transition: all 0.3s;\n    transition-delay: 0.2s;\n  }\n  :host(:not([timeline-size="xs"])) .event[has-media][selected] .heading:after {\n    top: 7px;\n    right: 0px;\n    border-top: 35px solid transparent;\n    border-bottom: 35px solid transparent; \n    border-left: 35px solid var(--lrndesign-timeline-header-accent);\n  }\n  :host(:not([timeline-size="xs"])) .heading h2 {\n    margin: 7px 48px 0 20px;\n    padding: 0 20px;\n    line-height: 50px;\n    height: 50px;\n    background-color: var(--lrndesign-timeline-header-accent);\n    color:  var(--lrndesign-timeline-header);\n    opacity: 0.6;\n    transition: opacity 0.3s;\n  }\n  :host(:not([timeline-size="xs"])) .event[selected] .heading h2 {\n    opacity: 1;\n  }\n  :host(:not([timeline-size="xs"])) .event[has-media] .heading h2:after {\n    content: \'\';\n    position: absolute;\n    left: calc(100% - 48px);\n    top: 17px;\n    height: 50px;\n    width: 0px;\n    transition: all 0.3s;\n    background-color: var(--lrndesign-timeline-background);\n  }\n  :host(:not([timeline-size="xs"])) .event[has-media][selected] .heading h2:after {\n    width: 13px;\n    background-color: var(--lrndesign-timeline-header-accent);\n  }\n  :host(:not([timeline-size="xs"])) .media-outer {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    right: 0;\n    width: 45%;\n    height: 300px;\n  }\n  :host(:not([timeline-size="xs"])) .media {\n    display: flex;\n    padding: 20px 20px 20px 50px;\n    opacity: 0;\n    transition: opacity 0.3s delay 0.3s;\n  }\n  :host(:not([timeline-size="xs"])) .event[selected] .media {\n    opacity: 1;\n    transition-delay: 0s;\n  }\n  :host(:not([timeline-size="xs"])) .details {\n    padding: 67px 20px 20px;\n    margin: 0 20px;\n    width: calc(55% - 80px);\n    color: var(--lrndesign-timeline-color);\n    background-color: var(--lrndesign-timeline-background);\n    border: 1px solid var(--lrndesign-timeline-background);\n    border-radius: 3px;\n    transition: all 0.5s;\n  }\n  :host(:not([timeline-size="xs"])) .event:last-of-type .details {\n    min-height: 180px;\n  }\n  :host(:not([timeline-size="xs"])) .event[selected] .details {\n    color: var(--lrndesign-timeline-accent);\n    background-color:  var(--lrndesign-timeline-accent-background);\n    border: 1px solid var(--lrndesign-timeline-border);\n    box-shadow: 0 2px 2px var(--lrndesign-timeline-border);\n  }\n  :host(:not([timeline-size="xs"])) .event:first-of-type[selected] .details {\n    border-top: 1px solid var(--lrndesign-timeline-background);\n  }\n  :host(:not([timeline-size="xs"])) .event:last-of-type[selected] .details {\n    border-bottom: 1px solid var(--lrndesign-timeline-background);\n  }\n}\n        </style>\n<style include="simple-colors-shared-styles-polymer"></style>\n<article>\n  <h1 id="title">[[title]]</h1>\n  <slot></slot>\n  <div id="timeline">\n      <div id="events" on-scroll="_onScroll">\n        <template id="repeat" is="dom-repeat" items="[[__events]]" as="event" index-as="index" restamp>\n          <section class="event" has-media$="[[_isSet(event.imagesrc)]]">\n            <div class="event-overview">\n              <div class="heading"><h2>[[event.heading]]</h2></div>\n              <div class="media-outer">\n                <template is="dom-if" if="[[_isSet(event.imagesrc)]]" restamp>\n                  <div class="media">\n                    <div><image alt$="[[event.imagealt]]" src$="[[event.imagesrc]]"/></div>\n                  </div>\n                </template>\n              </div>\n            </div>\n            <div class="details">[[event.details]]</div>\n          </section>\n        </template>\n    </div>\n  </div>\n</article>'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return t},t}var d=function(e){function d(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),l(this,o(d).apply(this,arguments))}var c,p,m;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}(d,t.SimpleColorsPolymer),c=d,m=[{key:"template",get:function(){return n.html(a())}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Timeline",description:"A timeline of events with images and text",icon:"icons:timeline",color:"indigo",groups:["Content","Instructional","Media","Image"],handles:[{type:"image",source:"image"}],meta:{author:"LRNWebComponents"}},settings:{quick:[],configure:[{property:"title",title:"Timeline Title",description:"A title for the timeline.",inputMethod:"textfield"},{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"},{slot:"",title:"Timeline Description",description:"Optional text describing the timeline.",inputMethod:"textfield"},{property:"events",title:"Timeline Events",description:"The events in the timeline",inputMethod:"array",itemLabel:"heading",properties:[{property:"heading",title:"Event Heading",description:"The heading for the event.",inputMethod:"textfield",icon:"editor:title"},{property:"details",title:"Event Details",description:"The body text with details for the event.",inputMethod:"textfield",icon:"editor:title"},{property:"imagesrc",title:"Event Image",description:"The path of the image.",inputMethod:"haxupload",icon:"editor:title"},{property:"imagealt",title:"Event Image Alt Text",description:"The alt text of the image (for accessibility).",inputMethod:"alt",icon:"editor:title"}]}],advanced:[]}}}},{key:"properties",get:function(){var e={title:{type:String,value:null},events:{type:Array,value:[],notify:!0},__events:{type:Array,computed:"_updateEvents(events)",notify:!0},timelineSize:{type:String,value:"xs",reflectToAttribute:!0}};return s(o(d),"properties",this)&&(e=Object.assign(e,s(o(d),"properties",this))),e}},{key:"tag",get:function(){return"lrndesign-timeline"}},{key:"behaviors",get:function(){return[SimpleColors]}}],(p=[{key:"connectedCallback",value:function(){s(o(d.prototype),"connectedCallback",this).call(this);window.ResponsiveUtility.requestAvailability(),window.dispatchEvent(new CustomEvent("responsive-element",{detail:{element:this,attribute:"timeline-size",relativeToParent:!0,sm:600,md:900,lg:1200,xl:1600}})),this._checkScroll()}},{key:"_checkScroll",value:function(){var e=this.shadowRoot.querySelectorAll(".event");e.length<1&&this.shadowRoot.querySelector("#repeat").render(),(e=this.shadowRoot.querySelectorAll(".event")).forEach(function(n){var t=n.offsetTop,i=e[0].offsetTop+50+n.parentNode.scrollTop,o=n.offsetTop+n.offsetHeight;i>t&&i<o?n.setAttribute("selected",!0):n.removeAttribute("selected")})}},{key:"_isMediaType",value:function(e,n){return!(!this._isSet(e.media)||!this._isSet(e.media.type))&&e.media.type===n}},{key:"_isSet",value:function(e){return null!=e}},{key:"_updateEvents",value:function(e){return e="string"==typeof e?JSON.parse(e):e}},{key:"_onScroll",value:function(e){this._checkScroll()}}])&&i(c.prototype,p),m&&i(c,m),d}();window.customElements.define(d.tag,d),e.LrndesignTimeline=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-timeline.umd.js.map
