!function(r){"function"==typeof define&&define.amd?define(r):r()}(function(){"use strict";window.AnchorBehaviors=window.AnchorBehaviors||{},window.AnchorBehaviors.getTarget=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=function(){var r=window.location.hash.substring(1).replace(/^(.+)&?/,"id=$1")||window.location.search.substring(1)||"",e=r?'{"'.concat(decodeURI(r).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"'),'"}'):"{}",o=e&&function(r){try{JSON.parse(r)}catch(r){return!1}return!0}(e)?JSON.parse(e):{};window.AnchorBehaviors.params=o};return window.AnchorBehaviors.target||(window.AnchorBehaviors.params||("complete"===document.readyState&&e(),window.onload=e()),window.AnchorBehaviors.target=document.getElementById(window.AnchorBehaviors.params.id)||document.getElementById("#".concat(window.AnchorBehaviors.params.id))||document.querySelector('[resource="#'.concat(window.AnchorBehaviors.params.id||window.AnchorBehaviors.params.resource,'"]'))||document.querySelector('[resource="'.concat(window.AnchorBehaviors.params.id||window.AnchorBehaviors.params.resource,'"]'))||function(r,e){if(r&&(e.id||e.resource)){var o=r.id?r.id.replace(/#/g,""):null,n=r.resource?r.resource.replace(/#/g,""):null,a=e.id?e.id.replace(/#/g,""):null,i=e.resource?e.resource.replace(/#/g,""):null;if(o&&o===a||o&&o===i||n&&n===a||n&&n===i)return r}}(r,window.AnchorBehaviors.params)||null,window.AnchorBehaviors.target&&window.AnchorBehaviors.target.scrollIntoView()),window.AnchorBehaviors.target}});
//# sourceMappingURL=anchor-behaviors.umd.js.map
