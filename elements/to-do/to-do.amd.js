define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-checkbox/paper-checkbox.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/paper-input/paper-input.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],function(_exports,_polymerLegacy,_paperCheckbox,_paperButton,_paperCard,_paperInput,_materializecssStyles,_HAXWiring,_schemaBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.ToDo=void 0;function _templateObject_7a8c067034db11e98f1249e1ec21786f(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n      :host([hide-form]) ul {\n        border: 1px solid black;\n      }\n      paper-card {\n        width: 100%;\n        padding: 8px;\n      }\n      .task-list-wrapper {\n        width: 100%;\n        height: 100%;\n        border: 2px solid black;\n        list-style: none;\n        padding: 0;\n      }\n      .task-list-wrapper li {\n        padding: 8px;\n      }\n      .task-list-wrapper li:nth-child(even) {\n        background-color: #f5f5f5;\n      }\n      .task-list-wrapper li:nth-child(odd) {\n        background-color: #e5e5e5;\n      }\n      .task-list-wrapper li:hover {\n        background-color: #ffffff;\n      }\n      .task-list-wrapper li:active {\n        background-color: #ffffff;\n      }\n      .task-list-wrapper li:focus {\n        background-color: #ffffff;\n      }\n      h3 {\n        margin: 4px;\n        padding: 0;\n        font-size: 20px;\n      }\n    </style>\n    <paper-card heading=\"[[name]]\" elevation=\"2\">\n      <div class=\"card-content\">\n        <div hidden$=\"[[hideForm]]\">\n          <paper-input label=\"Task to accomplish\" id=\"itemtext\"></paper-input>\n          <paper-button raised=\"\" id=\"itembutton\" on-tap=\"_addItemToList\"\n            >Add item</paper-button\n          >\n        </div>\n        <ul class=\"task-list-wrapper\">\n          <template is=\"dom-repeat\" items=\"[[items]]\" as=\"item\">\n            <li data-item-id$=\"[[item.id]]\">\n              <paper-checkbox\n                checked=\"{{item.value}}\"\n                disabled=\"[[item.disabled]]\"\n                >[[item.label]]</paper-checkbox\n              >\n            </li>\n          </template>\n        </ul>\n      </div>\n    </paper-card>\n  "],["\n    <style>\n      :host {\n        display: block;\n      }\n      :host([hide-form]) ul {\n        border: 1px solid black;\n      }\n      paper-card {\n        width: 100%;\n        padding: 8px;\n      }\n      .task-list-wrapper {\n        width: 100%;\n        height: 100%;\n        border: 2px solid black;\n        list-style: none;\n        padding: 0;\n      }\n      .task-list-wrapper li {\n        padding: 8px;\n      }\n      .task-list-wrapper li:nth-child(even) {\n        background-color: #f5f5f5;\n      }\n      .task-list-wrapper li:nth-child(odd) {\n        background-color: #e5e5e5;\n      }\n      .task-list-wrapper li:hover {\n        background-color: #ffffff;\n      }\n      .task-list-wrapper li:active {\n        background-color: #ffffff;\n      }\n      .task-list-wrapper li:focus {\n        background-color: #ffffff;\n      }\n      h3 {\n        margin: 4px;\n        padding: 0;\n        font-size: 20px;\n      }\n    </style>\n    <paper-card heading=\"[[name]]\" elevation=\"2\">\n      <div class=\"card-content\">\n        <div hidden\\$=\"[[hideForm]]\">\n          <paper-input label=\"Task to accomplish\" id=\"itemtext\"></paper-input>\n          <paper-button raised=\"\" id=\"itembutton\" on-tap=\"_addItemToList\"\n            >Add item</paper-button\n          >\n        </div>\n        <ul class=\"task-list-wrapper\">\n          <template is=\"dom-repeat\" items=\"[[items]]\" as=\"item\">\n            <li data-item-id\\$=\"[[item.id]]\">\n              <paper-checkbox\n                checked=\"{{item.value}}\"\n                disabled=\"[[item.disabled]]\"\n                >[[item.label]]</paper-checkbox\n              >\n            </li>\n          </template>\n        </ul>\n      </div>\n    </paper-card>\n  "]);_templateObject_7a8c067034db11e98f1249e1ec21786f=function _templateObject_7a8c067034db11e98f1249e1ec21786f(){return data};return data}var ToDo=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_7a8c067034db11e98f1249e1ec21786f()),is:"to-do",behaviors:[HAXBehaviors.PropertiesBehaviors],observers:["_valueChanged(items.*)"],properties:{hideForm:{type:Boolean,value:!1,reflectToAttribute:!0},disabledList:{type:Boolean,value:!1,reflectToAttribute:!0},name:{type:String,value:"To do list"},items:{type:Array,value:[],notify:!0}},_valueChanged:function _valueChanged(e){for(var i in e.base){for(var j in e.base[i]){this.notifyPath("items."+i+"."+j)}}},_addItemToList:function _addItemToList(e){if(""!=this.$.itemtext.value&&babelHelpers.typeof(this.$.itemtext.value)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.push("items",{label:this.$.itemtext.value,value:!1,disabled:this.disabledList,id:"item-id-"+this.items.length});this.$.itemtext.value=""}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"To do list",description:"A list of things to do so people can keep calm.",icon:"icons:list",color:"grey",groups:["List"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"name",title:"Name",description:"The name of this to do list",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"name",title:"Name",description:"The name of this to do list",inputMethod:"textfield",icon:"editor:title"},{property:"items",title:"List of items",description:"List of items to display in our list.",inputMethod:"array",properties:[{property:"label",title:"Task",description:"Name of the task",inputMethod:"textfield",required:!0},{property:"value",title:"Done",description:"Completion state",inputMethod:"boolean"}]}],advanced:[]}};this.setHaxProperties(props)}});_exports.ToDo=ToDo});