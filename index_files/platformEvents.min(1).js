!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(window,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appMenuReorder=function({menuId:e,menuItemId:n,parentId:t,newIndex:o}){return{eventType:"appMenuReorder",eventPayload:{menuId:e,menuItemId:n,parentId:t,newIndex:o}}},n.componentDeleted=function({componentRef:e,connections:n}){return{eventType:"componentDeleted",eventPayload:{componentRef:e,connections:n}}},n.componentGfppClicked=function({id:e,role:n,componentRef:t,controllerRef:o}){return{eventType:"componentGfppClicked",eventPayload:{id:e,role:n,componentRef:t,controllerRef:o}}},n.connectedComponentPasted=function({componentRef:e,connection:n}){return{eventType:"connectedComponentPasted",eventPayload:{componentRef:e,connection:n}}},n.widgetPasted=function({componentRef:e}){return{eventType:"widgetPasted",eventPayload:{componentRef:e}}},n.controllerAdded=function({controllerRef:e,origin:n}){return{eventType:"controllerAdded",eventPayload:{controllerRef:e,origin:n}}},n.controllerSettingsButtonClicked=function({controllerRef:e,controllerConfig:n,controllerType:t,controllerDisplayName:o}){return{eventType:"controllerSettingsButtonClicked",eventPayload:{controllerRef:e,controllerConfig:n,controllerType:t,controllerDisplayName:o,origin:"gfpp"}}},n.controllerGfppClicked=function({id:e,controllerRef:n,controllerConfig:t,controllerType:o,controllerDisplayName:r}){return{eventType:"controllerGfppClicked",eventPayload:{id:e,controllerRef:n,controllerConfig:t,controllerType:o,controllerDisplayName:r,origin:"gfpp"}}},n.pageDeleted=function({pageRole:e}){return{eventType:"pageDeleted",eventPayload:{pageRole:e}}},n.siteWasPublished=function(){return{eventType:"siteWasPublished"}},n.siteWasFirstSaved=function({instanceId:e,instance:n,metaSiteId:t}){return{eventType:"siteWasFirstSaved",eventPayload:{instanceId:e,instance:n,metaSiteId:t}}},n.startConfiguration=function({token:e,initialData:n,origin:t}){return{eventType:"startConfiguration",eventPayload:{token:e,initialData:n,origin:t}}},n.welcomeSectionMainActionClicked=function(){return{eventType:"welcomeSectionMainActionClicked",eventPayload:{}}},n.widgetGfppClicked=function({componentRef:e,id:n}){return{eventType:"widgetGfppClicked",eventPayload:{id:n,componentRef:e}}},n.appUpgradeCompleted=function({vendorProductId:e,cycle:n,instance:t}){return{eventType:"appUpgradeCompleted",eventPayload:{vendorProductId:e,cycle:n,instance:t}}},n.globalDesignPresetChanged=function({componentRef:e,preset:n}){return{eventType:"globalDesignPresetChanged",eventPayload:{preset:n,componentRef:e}}},n.developerModeChanged=function({value:e}){return{eventType:"developerModeChanged",eventPayload:{value:e}}},n.componentAddedToStage=function({componentType:e,compRef:n}){return{eventType:"componentAddedToStage",eventPayload:{componentType:e,compRef:n}}},n.componentAnimationChanged=function({compRef:e}){return{eventType:"componentAnimationChanged",eventPayload:{compRef:e}}},n.componentDataChanged=function({compRef:e}){return{eventType:"componentDataChanged",eventPayload:{compRef:e}}},n.componentDesignChanged=function({compRef:e}){return{eventType:"componentDesignChanged",eventPayload:{compRef:e}}},n.componentStyleChanged=function({compRef:e}){return{eventType:"componentStyleChanged",eventPayload:{compRef:e}}},n.componentArrangementChanged=function({compRef:e}){return{eventType:"componentArrangementChanged",eventPayload:{compRef:e}}},n.componentDragEnded=function({compRef:e}){return{eventType:"componentDragEnded",eventPayload:{compRef:e}}},n.componentResizeStarted=function({compRef:e}){return{eventType:"componentResizeStarted",eventPayload:{compRef:e}}},n.componentRotateEnded=function({compRef:e}){return{eventType:"componentRotateEnded",eventPayload:{compRef:e}}},n.pageBackgroundChanged=function({pageRef:e}){return{eventType:"pageBackgroundChanged",eventPayload:{pageRef:e}}},n.sitePublishedDialogClosed=function(){return{eventType:"sitePublishedDialogClosed",eventPayload:{}}},n.switchedFromPreview=function(){return{eventType:"switchedFromPreview",eventPayload:{}}},n.mobileTextScaleChanged=function({compRef:e}){return{eventType:"mobileTextScaleChanged",eventPayload:{compRef:e}}},n.componentCropSaved=function({compRef:e}){return{eventType:"componentCropSaved",eventPayload:{compRef:e}}},n.toggleBackToTopButtonOn=function(){return{eventType:"toggleBackToTopButtonOn",eventPayload:{}}},n.componentBehaviorChanged=function({compRef:e}){return{eventType:"componentBehaviorChanged",eventPayload:{compRef:e}}},n.componentPropsChanged=function({compRef:e}){return{eventType:"componentPropsChanged",eventPayload:{compRef:e}}},n.switchedToMobileView=function(){return{eventType:"switchedToMobileView",eventPayload:{}}},n.textEditBoxClosed=function({compRef:e}){return{eventType:"textEditBoxClosed",eventPayload:{compRef:e}}},n.hideMobileElement=function({compRef:e}){return{eventType:"hideMobileElement",eventPayload:{compRef:e}}},n.showMobileElement=function({compRef:e}){return{eventType:"showMobileElement",eventPayload:{compRef:e}}},n.focusedPageChanged=function({pageRef:e}){return{eventType:"focusedPageChanged",eventPayload:{pageRef:e}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const o=t(3);n.factory=o}])});
//# sourceMappingURL=platformEvents.min.js.map