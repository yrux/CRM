(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Project_OpenTask_vue"],{

/***/ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js ***!
  \**************************************************************************/
/***/ ((module, exports) => {

/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot upload file:":"Cannot upload file:","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=110)}([function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o}));class n extends Error{constructor(e,t,i){super(function(e,t){const i=new WeakSet,n=t?" "+JSON.stringify(t,(e,t)=>{if("object"==typeof t&&null!==t){if(i.has(t))return`[object ${t.constructor.name}]`;i.add(t)}return t}):"",o=r(e);return e+n+o}(e,i)),this.name="CKEditorError",this.context=t,this.data=i}is(e){return"CKEditorError"===e}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const i=new n(e.message,t);throw i.stack=e.stack,i}}function o(e,t){console.warn(...s(e,t))}function r(e){return"\nRead more: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html#error-"+e}function s(e,t){const i=r(e);return t?[e,t,i]:[e,i]}},function(e,t,i){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),s=[];function a(e){for(var t=-1,i=0;i<s.length;i++)if(s[i].identifier===e){t=i;break}return t}function c(e,t){for(var i={},n=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var h=a(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==h?(s[h].references++,s[h].updater(u)):s.push({identifier:d,updater:p(u,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=i.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,h=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,i,n){var o=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function g(e,t,i){var n=i.css,o=i.media,r=i.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,f=0;function p(e,t){var i,n,o;if(t.singleton){var r=f++;i=m||(m=l(t)),n=u.bind(null,i,r,!1),o=u.bind(null,i,r,!0)}else i=l(t),n=g.bind(null,i,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var i=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var o=a(i[n]);s[o].references--}for(var r=c(e,t),l=0;l<i.length;l++){var d=a(i[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}i=r}}}},,function(e,t,i){"use strict";var n=i(8),o="object"==typeof self&&self&&self.Object===Object&&self,r=n.a||o||Function("return this")();t.a=r},function(e,t,i){"use strict";(function(e){var n=i(3),o=i(14),r= true&&exports&&!exports.nodeType&&exports,s=r&&"object"==typeof e&&e&&!e.nodeType&&e,a=s&&s.exports===r?n.a.Buffer:void 0,c=(a?a.isBuffer:void 0)||o.a;t.a=c}).call(this,i(10)(e))},function(e,t,i){"use strict";(function(e){var n=i(8),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=r&&r.exports===o&&n.a.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e||s&&s.binding&&s.binding("util")}catch(e){}}();t.a=a}).call(this,i(10)(e))},function(e,t,i){"use strict";(function(e){var t=i(0);const n="object"==typeof window?window:e;if(n.CKEDITOR_VERSION)throw new t.a("ckeditor-duplicated-modules",null);n.CKEDITOR_VERSION="31.0.0"}).call(this,i(12))},function(e,t,i){var n=i(1),o=i(78);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t,i){"use strict";(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.a=i}).call(this,i(12))},function(e,t,i){"use strict";(function(e){var n=i(3),o= true&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=r&&r.exports===o?n.a.Buffer:void 0,a=s?s.allocUnsafe:void 0;t.a=function(e,t){if(t)return e.slice();var i=e.length,n=a?a(i):new e.constructor(i);return e.copy(n),n}}).call(this,i(10)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){var n=i(1),o=i(79);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t,i){var n=i(1),o=i(73);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t,i){"use strict";t.a=function(){return!1}},function(e,t,i){var n=i(1),o=i(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-editor__editable span[data-ck-hidden]{display:none}"},function(e,t,i){var n=i(1),o=i(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-color-link-fake-selection:rgba(31,177,255,0.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}"},function(e,t,i){var n=i(1),o=i(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}"},function(e,t,i){var n=i(1),o=i(22);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s;border-style:solid;left:50%}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_sw{right:50%;left:auto}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{right:auto;left:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{right:auto;left:0;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:transparent;border-bottom-color:transparent;border-right-color:var(--ck-color-tooltip-background);border-top-color:transparent;border-left-width:0;border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_w{right:calc(100% + var(--ck-tooltip-arrow-size));left:auto;top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:var(--ck-color-tooltip-background);border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:0;border-top-width:var(--ck-tooltip-arrow-size)}'},function(e,t,i){var n=i(1),o=i(24);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(var(--ck-spacing-small)*-1);margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(e,t,i){var n=i(1),o=i(26);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*0.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var(--ck-switch-button-translation)*-1))}"},function(e,t,i){var n=i(1),o=i(28);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;border:0}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{display:none;color:var(--ck-color-color-grid-check-icon)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}"},function(e,t,i){var n=i(1),o=i(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{content:"";position:absolute;width:1px;height:100%;background-color:var(--ck-color-split-button-hover-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}'},function(e,t,i){var n=i(1),o=i(32);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);max-width:var(--ck-dropdown-max-width);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}"},function(e,t,i){var n=i(1),o=i(34);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;background:var(--ck-color-toolbar-border);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-right:var(--ck-spacing-small)}"},function(e,t,i){var n=i(1),o=i(36);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(e,t,i){var n=i(1),o=i(38);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{width:max-content;max-width:var(--ck-toolbar-dropdown-max-width)}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(e,t,i){var n=i(1),o=i(40);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(e,t,i){var n=i(1),o=i(42);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(e,t,i){var n=i(1),o=i(44);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(e,t,i){var n=i(1),o=i(46);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-form__header{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{padding:var(--ck-spacing-small) var(--ck-spacing-large);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-form__header .ck-form__header__label{font-weight:700}"},function(e,t,i){var n=i(1),o=i(48);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input-text.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-text-input-shake .3s ease both}.ck.ck-input-text.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-text-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}"},function(e,t,i){var n=i(1),o=i(50);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{pointer-events:none;transform-origin:0 0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);background:var(--ck-color-labeled-field-label-background);padding:0 calc(var(--ck-font-size-tiny)*0.5);line-height:normal;font-weight:400;text-overflow:ellipsis;overflow:hidden;max-width:100%;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*0.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*0.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));background:transparent;padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}"},function(e,t,i){var n=i(1),o=i(52);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border);filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}'},function(e,t,i){var n=i(1),o=i(54);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}"},function(e,t,i){var n=i(1),o=i(56);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}"},function(e,t,i){var n=i(1),o=i(58);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(e,t,i){var n=i(1),o=i(60);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}"},function(e,t,i){var n=i(1),o=i(62);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-placeholder,.ck .ck-placeholder{position:relative}.ck.ck-placeholder:before,.ck .ck-placeholder:before{position:absolute;left:0;right:0;content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(e,t,i){var n=i(1),o=i(64);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(e,t,i){var n=i(1),o=i(66);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck .ck-widget .ck-widget__type-around__button{display:block;position:absolute;overflow:hidden;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{position:absolute;top:50%;left:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{top:calc(var(--ck-widget-outline-thickness)*-0.5);left:min(10%,30px);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-0.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;position:absolute;top:1px;left:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;left:0;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{width:var(--ck-widget-type-around-button-size);height:var(--ck-widget-type-around-button-size);background:var(--ck-color-widget-type-around-button);border-radius:100px;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);opacity:0;pointer-events:none}.ck .ck-widget .ck-widget__type-around__button svg{width:10px;height:8px;transform:translate(-50%,-50%);transition:transform .5s ease;margin-top:1px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{width:calc(var(--ck-widget-type-around-button-size) - 2px);height:calc(var(--ck-widget-type-around-button-size) - 2px);border-radius:100px;background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3))}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{pointer-events:none;height:1px;animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;outline:1px solid hsla(0,0%,100%,.5);background:var(--ck-color-base-text)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}'},function(e,t,i){var n=i(1),o=i(68);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:0 var(--ck-spacing-small);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{top:calc(var(--ck-resizer-tooltip-height)*-1);left:50%;transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness));top:0}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}"},function(e,t,i){var n=i(1),o=i(70);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;position:relative;pointer-events:none}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);border:1px solid var(--ck-clipboard-drop-target-color);background:var(--ck-clipboard-drop-target-color);margin-left:-1px}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{content:"";width:0;height:0;display:block;position:absolute;left:50%;top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);transform:translateX(-50%);border-left:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-bottom:0 solid transparent;border-right:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-top:calc(var(--ck-clipboard-drop-target-dot-height)) solid var(--ck-clipboard-drop-target-color)}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}'},function(e,t,i){var n=i(1),o=i(72);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}"},function(e,t){e.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(e,t,i){var n=i(1),o=i(75);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}"},function(e,t,i){var n=i(1),o=i(77);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}"},function(e,t){e.exports='.ck-vertical-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-text-width)*0.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-large);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}'},function(e,t){e.exports=".ck-content .image{display:table;clear:both;text-align:center;margin:.9em auto;min-width:50px}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{display:inline-flex;max-width:100%;align-items:flex-start}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{padding-left:inherit;padding-right:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}"},function(e,t,i){var n=i(1),o=i(81);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:var(--ck-color-image-caption-text);background-color:var(--ck-color-image-caption-background);padding:.6em;font-size:.75em;outline-offset:-1px}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}"},function(e,t,i){var n=i(1),o=i(83);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-right:0;margin-left:auto}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-top:var(--ck-inline-image-style-spacing);margin-bottom:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}"},function(e,t,i){var n=i(1),o=i(85);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image-inline .ck-progress-bar,.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image-inline .ck-progress-bar,.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(e,t,i){var n=i(1),o=i(87);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:min(var(--ck-spacing-medium),6%);right:min(var(--ck-spacing-medium),6%);border-radius:50%;z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:calc(1px*var(--ck-image-upload-icon-size));animation-delay:0ms,3s;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(e,t,i){var n=i(1),o=i(89);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(e,t,i){var n=i(1),o=i(91);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}"},function(e,t,i){var n=i(1),o=i(93);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-text-width)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}"},function(e,t,i){var n=i(1),o=i(95);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}"},function(e,t,i){var n=i(1),o=i(97);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports='.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(var(--ck-spacing-standard)*3);background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}'},function(e,t,i){var n=i(1),o=i(99);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}"},function(e,t,i){var n=i(1),o=i(101);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content .media{clear:both;margin:.9em 0;display:block;min-width:15em}"},function(e,t,i){var n=i(1),o=i(103);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=":root{--ck-color-table-focused-cell-background:rgba(158,207,250,0.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}"},function(e,t,i){var n=i(1),o=i(105);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}"},function(e,t,i){var n=i(1),o=i(107);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=':root{--ck-table-selected-cell-background:rgba(158,207,250,0.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{position:relative;caret-color:transparent;outline:unset;box-shadow:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{content:"";pointer-events:none;background-color:var(--ck-table-selected-cell-background);position:absolute;top:0;left:0;right:0;bottom:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}'},function(e,t,i){var n=i(1),o=i(109);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};n(o,r);e.exports=o.locals||{}},function(e,t){e.exports=".ck-content .table{margin:.9em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.ck-content .table table th{font-weight:700;background:hsla(0,0%,0%,5%)}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}"},function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return Tw}));var n=function(){return function e(){e.called=!0}};class o{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=n(),this.off=n()}}const r=new Array(256).fill().map((e,t)=>("0"+t.toString(16)).slice(-2));function s(){const e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+r[e>>0&255]+r[e>>8&255]+r[e>>16&255]+r[e>>24&255]+r[t>>0&255]+r[t>>8&255]+r[t>>16&255]+r[t>>24&255]+r[i>>0&255]+r[i>>8&255]+r[i>>16&255]+r[i>>24&255]+r[n>>0&255]+r[n>>8&255]+r[n>>16&255]+r[n>>24&255]}var a={get(e){return"number"!=typeof e?this[e]||this.normal:e},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5},c=(i(6),i(0));const l=Symbol("listeningTo"),d=Symbol("emitterId");var h={on(e,t,i={}){this.listenTo(this,e,t,i)},once(e,t,i){let n=!1;this.listenTo(this,e,(function(e,...i){n||(n=!0,e.off(),t.call(this,e,...i))}),i)},off(e,t){this.stopListening(this,e,t)},listenTo(e,t,i,n={}){let o,r;this[l]||(this[l]={});const s=this[l];g(e)||u(e);const a=g(e);(o=s[a])||(o=s[a]={emitter:e,callbacks:{}}),(r=o.callbacks[t])||(r=o.callbacks[t]=[]),r.push(i),function(e,t,i,n,o){t._addEventListener?t._addEventListener(i,n,o):e._addEventListener.call(t,i,n,o)}(this,e,t,i,n)},stopListening(e,t,i){const n=this[l];let o=e&&g(e);const r=n&&o&&n[o],s=r&&t&&r.callbacks[t];if(!(!n||e&&!r||t&&!s))if(i){b(this,e,t,i);-1!==s.indexOf(i)&&(1===s.length?delete r.callbacks[t]:b(this,e,t,i))}else if(s){for(;i=s.pop();)b(this,e,t,i);delete r.callbacks[t]}else if(r){for(t in r.callbacks)this.stopListening(e,t);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[l]}},fire(e,...t){try{const i=e instanceof o?e:new o(this,e),n=i.name;let r=function e(t,i){let n;if(!t._events||!(n=t._events[i])||!n.callbacks.length)return i.indexOf(":")>-1?e(t,i.substr(0,i.lastIndexOf(":"))):null;return n.callbacks}(this,n);if(i.path.push(this),r){const e=[i,...t];r=Array.from(r);for(let t=0;t<r.length&&(r[t].callback.apply(this,e),i.off.called&&(delete i.off.called,this._removeEventListener(n,r[t].callback)),!i.stop.called);t++);}if(this._delegations){const e=this._delegations.get(n),o=this._delegations.get("*");e&&p(e,i,t),o&&p(o,i,t)}return i.return}catch(e){c.a.rethrowUnexpectedError(e,this)}},delegate(...e){return{to:(t,i)=>{this._delegations||(this._delegations=new Map),e.forEach(e=>{const n=this._delegations.get(e);n?n.set(t,i):this._delegations.set(e,new Map([[t,i]]))})}}},stopDelegating(e,t){if(this._delegations)if(e)if(t){const i=this._delegations.get(e);i&&i.delete(t)}else this._delegations.delete(e);else this._delegations.clear()},_addEventListener(e,t,i){!function(e,t){const i=m(e);if(i[t])return;let n=t,o=null;const r=[];for(;""!==n&&!i[n];)i[n]={callbacks:[],childEvents:[]},r.push(i[n]),o&&i[n].childEvents.push(o),o=n,n=n.substr(0,n.lastIndexOf(":"));if(""!==n){for(const e of r)e.callbacks=i[n].callbacks.slice();i[n].childEvents.push(o)}}(this,e);const n=f(this,e),o=a.get(i.priority),r={callback:t,priority:o};for(const e of n){let t=!1;for(let i=0;i<e.length;i++)if(e[i].priority<o){e.splice(i,0,r),t=!0;break}t||e.push(r)}},_removeEventListener(e,t){const i=f(this,e);for(const e of i)for(let i=0;i<e.length;i++)e[i].callback==t&&(e.splice(i,1),i--)}};function u(e,t){e[d]||(e[d]=t||s())}function g(e){return e[d]}function m(e){return e._events||Object.defineProperty(e,"_events",{value:{}}),e._events}function f(e,t){const i=m(e)[t];if(!i)return[];let n=[i.callbacks];for(let t=0;t<i.childEvents.length;t++){const o=f(e,i.childEvents[t]);n=n.concat(o)}return n}function p(e,t,i){for(let[n,r]of e){r?"function"==typeof r&&(r=r(t.name)):r=t.name;const e=new o(t.source,r);e.path=[...t.path],n.fire(e,...i)}}function b(e,t,i,n){t._removeEventListener?t._removeEventListener(i,n):e._removeEventListener.call(t,i,n)}var w=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},k=i(3),_=k.a.Symbol,v=Object.prototype,y=v.hasOwnProperty,x=v.toString,A=_?_.toStringTag:void 0;var C=function(e){var t=y.call(e,A),i=e[A];try{e[A]=void 0;var n=!0}catch(e){}var o=x.call(e);return n&&(t?e[A]=i:delete e[A]),o},T=Object.prototype.toString;var E=function(e){return T.call(e)},S=_?_.toStringTag:void 0;var I=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":S&&S in Object(e)?C(e):E(e)};var P,M=function(e){if(!w(e))return!1;var t=I(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},N=k.a["__core-js_shared__"],R=(P=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"";var O=function(e){return!!R&&R in e},D=Function.prototype.toString;var z=function(e){if(null!=e){try{return D.call(e)}catch(e){}try{return e+""}catch(e){}}return""},L=/^\[object .+?Constructor\]$/,V=Function.prototype,j=Object.prototype,B=V.toString,F=j.hasOwnProperty,H=RegExp("^"+B.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var U=function(e){return!(!w(e)||O(e))&&(M(e)?H:L).test(z(e))};var W=function(e,t){return null==e?void 0:e[t]};var q=function(e,t){var i=W(e,t);return U(i)?i:void 0},$=function(){try{var e=q(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var Y=function(e,t,i){"__proto__"==t&&$?$(e,t,{configurable:!0,enumerable:!0,value:i,writable:!0}):e[t]=i};var G=function(e,t){return e===t||e!=e&&t!=t},K=Object.prototype.hasOwnProperty;var Q=function(e,t,i){var n=e[t];K.call(e,t)&&G(n,i)&&(void 0!==i||t in e)||Y(e,t,i)};var J=function(e,t,i,n){var o=!i;i||(i={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(i[a],e[a],a,i,e):void 0;void 0===c&&(c=e[a]),o?Y(i,a,c):Q(i,a,c)}return i};var Z=function(e){return e};var X=function(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)},ee=Math.max;var te=function(e,t,i){return t=ee(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,r=ee(n.length-t,0),s=Array(r);++o<r;)s[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=i(s),X(e,this,a)}};var ie=function(e){return function(){return e}},ne=$?function(e,t){return $(e,"toString",{configurable:!0,enumerable:!1,value:ie(t),writable:!0})}:Z,oe=Date.now;var re=function(e){var t=0,i=0;return function(){var n=oe(),o=16-(n-i);if(i=n,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(ne);var se=function(e,t){return re(te(e,t,Z),e+"")};var ae=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var ce=function(e){return null!=e&&ae(e.length)&&!M(e)},le=/^(?:0|[1-9]\d*)$/;var de=function(e,t){var i=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==i||"symbol"!=i&&le.test(e))&&e>-1&&e%1==0&&e<t};var he=function(e,t,i){if(!w(i))return!1;var n=typeof t;return!!("number"==n?ce(i)&&de(t,i.length):"string"==n&&t in i)&&G(i[t],e)};var ue=function(e){return se((function(t,i){var n=-1,o=i.length,r=o>1?i[o-1]:void 0,s=o>2?i[2]:void 0;for(r=e.length>3&&"function"==typeof r?(o--,r):void 0,s&&he(i[0],i[1],s)&&(r=o<3?void 0:r,o=1),t=Object(t);++n<o;){var a=i[n];a&&e(t,a,n,r)}return t}))};var ge=function(e,t){for(var i=-1,n=Array(e);++i<e;)n[i]=t(i);return n};var me=function(e){return null!=e&&"object"==typeof e};var fe=function(e){return me(e)&&"[object Arguments]"==I(e)},pe=Object.prototype,be=pe.hasOwnProperty,we=pe.propertyIsEnumerable,ke=fe(function(){return arguments}())?fe:function(e){return me(e)&&be.call(e,"callee")&&!we.call(e,"callee")},_e=Array.isArray,ve=i(4),ye={};ye["[object Float32Array]"]=ye["[object Float64Array]"]=ye["[object Int8Array]"]=ye["[object Int16Array]"]=ye["[object Int32Array]"]=ye["[object Uint8Array]"]=ye["[object Uint8ClampedArray]"]=ye["[object Uint16Array]"]=ye["[object Uint32Array]"]=!0,ye["[object Arguments]"]=ye["[object Array]"]=ye["[object ArrayBuffer]"]=ye["[object Boolean]"]=ye["[object DataView]"]=ye["[object Date]"]=ye["[object Error]"]=ye["[object Function]"]=ye["[object Map]"]=ye["[object Number]"]=ye["[object Object]"]=ye["[object RegExp]"]=ye["[object Set]"]=ye["[object String]"]=ye["[object WeakMap]"]=!1;var xe=function(e){return me(e)&&ae(e.length)&&!!ye[I(e)]};var Ae=function(e){return function(t){return e(t)}},Ce=i(5),Te=Ce.a&&Ce.a.isTypedArray,Ee=Te?Ae(Te):xe,Se=Object.prototype.hasOwnProperty;var Ie=function(e,t){var i=_e(e),n=!i&&ke(e),o=!i&&!n&&Object(ve.a)(e),r=!i&&!n&&!o&&Ee(e),s=i||n||o||r,a=s?ge(e.length,String):[],c=a.length;for(var l in e)!t&&!Se.call(e,l)||s&&("length"==l||o&&("offset"==l||"parent"==l)||r&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||de(l,c))||a.push(l);return a},Pe=Object.prototype;var Me=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Pe)};var Ne=function(e){var t=[];if(null!=e)for(var i in Object(e))t.push(i);return t},Re=Object.prototype.hasOwnProperty;var Oe=function(e){if(!w(e))return Ne(e);var t=Me(e),i=[];for(var n in e)("constructor"!=n||!t&&Re.call(e,n))&&i.push(n);return i};var De=function(e){return ce(e)?Ie(e,!0):Oe(e)},ze=ue((function(e,t){J(t,De(t),e)}));const Le=Symbol("observableProperties"),Ve=Symbol("boundObservables"),je=Symbol("boundProperties"),Be=Symbol("decoratedMethods"),Fe=Symbol("decoratedOriginal"),He={set(e,t){if(w(e))return void Object.keys(e).forEach(t=>{this.set(t,e[t])},this);We(this);const i=this[Le];if(e in this&&!i.has(e))throw new c.a("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>i.get(e),set(t){const n=i.get(e);let o=this.fire("set:"+e,e,t,n);void 0===o&&(o=t),n===o&&i.has(e)||(i.set(e,o),this.fire("change:"+e,e,o,n))}}),this[e]=t},bind(...e){if(!e.length||!Ye(e))throw new c.a("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new c.a("observable-bind-duplicate-properties",this);We(this);const t=this[je];e.forEach(e=>{if(t.has(e))throw new c.a("observable-bind-rebind",this)});const i=new Map;return e.forEach(e=>{const n={property:e,to:[]};t.set(e,n),i.set(e,n)}),{to:qe,toMany:$e,_observable:this,_bindProperties:e,_to:[],_bindings:i}},unbind(...e){if(!this[Le])return;const t=this[je],i=this[Ve];if(e.length){if(!Ye(e))throw new c.a("observable-unbind-wrong-properties",this);e.forEach(e=>{const n=t.get(e);if(!n)return;let o,r,s,a;n.to.forEach(e=>{o=e[0],r=e[1],s=i.get(o),a=s[r],a.delete(n),a.size||delete s[r],Object.keys(s).length||(i.delete(o),this.stopListening(o,"change"))}),t.delete(e)})}else i.forEach((e,t)=>{this.stopListening(t,"change")}),i.clear(),t.clear()},decorate(e){const t=this[e];if(!t)throw new c.a("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(e,i)=>{e.return=t.apply(this,i)}),this[e]=function(...t){return this.fire(e,t)},this[e][Fe]=t,this[Be]||(this[Be]=[]),this[Be].push(e)}};ze(He,h),He.stopListening=function(e,t,i){if(!e&&this[Be]){for(const e of this[Be])this[e]=this[e][Fe];delete this[Be]}h.stopListening.call(this,e,t,i)};var Ue=He;function We(e){e[Le]||(Object.defineProperty(e,Le,{value:new Map}),Object.defineProperty(e,Ve,{value:new Map}),Object.defineProperty(e,je,{value:new Map}))}function qe(...e){const t=function(...e){if(!e.length)throw new c.a("observable-bind-to-parse-error",null);const t={to:[]};let i;"function"==typeof e[e.length-1]&&(t.callback=e.pop());return e.forEach(e=>{if("string"==typeof e)i.properties.push(e);else{if("object"!=typeof e)throw new c.a("observable-bind-to-parse-error",null);i={observable:e,properties:[]},t.to.push(i)}}),t}(...e),i=Array.from(this._bindings.keys()),n=i.length;if(!t.callback&&t.to.length>1)throw new c.a("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new c.a("observable-bind-to-extra-callback",this);var o;t.to.forEach(e=>{if(e.properties.length&&e.properties.length!==n)throw new c.a("observable-bind-to-properties-length",this);e.properties.length||(e.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(i[0]).callback=t.callback),o=this._observable,this._to.forEach(e=>{const t=o[Ve];let i;t.get(e.observable)||o.listenTo(e.observable,"change",(n,r)=>{i=t.get(e.observable)[r],i&&i.forEach(e=>{Ge(o,e.property)})})}),function(e){let t;e._bindings.forEach((i,n)=>{e._to.forEach(o=>{t=o.properties[i.callback?0:e._bindProperties.indexOf(n)],i.to.push([o.observable,t]),function(e,t,i,n){const o=e[Ve],r=o.get(i),s=r||{};s[n]||(s[n]=new Set);s[n].add(t),r||o.set(i,s)}(e._observable,i,o.observable,t)})})}(this),this._bindProperties.forEach(e=>{Ge(this._observable,e)})}function $e(e,t,i){if(this._bindings.size>1)throw new c.a("observable-bind-to-many-not-one-binding",this);this.to(...function(e,t){const i=e.map(e=>[e,t]);return Array.prototype.concat.apply([],i)}(e,t),i)}function Ye(e){return e.every(e=>"string"==typeof e)}function Ge(e,t){const i=e[je].get(t);let n;i.callback?n=i.callback.apply(e,i.to.map(e=>e[0][e[1]])):(n=i.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(e,t)?e[t]=n:e.set(t,n)}function Ke(e,...t){t.forEach(t=>{Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach(i=>{if(i in e.prototype)return;const n=Object.getOwnPropertyDescriptor(t,i);n.enumerable=!1,Object.defineProperty(e.prototype,i,n)})})}class Qe{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),1==this._disableStack.size&&(this.on("set:isEnabled",Je,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),0==this._disableStack.size&&(this.off("set:isEnabled",Je),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Je(e){e.return=!1,e.stop()}Ke(Qe,Ue);class Ze{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(e,t,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),1==this._disableStack.size&&(this.on("set:isEnabled",Xe,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),0==this._disableStack.size&&(this.off("set:isEnabled",Xe),this.refresh())}execute(){}destroy(){this.stopListening()}}function Xe(e){e.return=!1,e.stop()}Ke(Ze,Ue);class et extends Ze{constructor(e){super(e),this._childCommands=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return null!=t&&t.execute(e)}registerChildCommand(e){this._childCommands.push(e),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){return this._childCommands.find(e=>e.isEnabled)}}var tt=function(e,t){return function(i){return e(t(i))}},it=tt(Object.getPrototypeOf,Object),nt=Function.prototype,ot=Object.prototype,rt=nt.toString,st=ot.hasOwnProperty,at=rt.call(Object);var ct=function(e){if(!me(e)||"[object Object]"!=I(e))return!1;var t=it(e);if(null===t)return!0;var i=st.call(t,"constructor")&&t.constructor;return"function"==typeof i&&i instanceof i&&rt.call(i)==at};var lt=function(){this.__data__=[],this.size=0};var dt=function(e,t){for(var i=e.length;i--;)if(G(e[i][0],t))return i;return-1},ht=Array.prototype.splice;var ut=function(e){var t=this.__data__,i=dt(t,e);return!(i<0)&&(i==t.length-1?t.pop():ht.call(t,i,1),--this.size,!0)};var gt=function(e){var t=this.__data__,i=dt(t,e);return i<0?void 0:t[i][1]};var mt=function(e){return dt(this.__data__,e)>-1};var ft=function(e,t){var i=this.__data__,n=dt(i,e);return n<0?(++this.size,i.push([e,t])):i[n][1]=t,this};function pt(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}pt.prototype.clear=lt,pt.prototype.delete=ut,pt.prototype.get=gt,pt.prototype.has=mt,pt.prototype.set=ft;var bt=pt;var wt=function(){this.__data__=new bt,this.size=0};var kt=function(e){var t=this.__data__,i=t.delete(e);return this.size=t.size,i};var _t=function(e){return this.__data__.get(e)};var vt=function(e){return this.__data__.has(e)},yt=q(k.a,"Map"),xt=q(Object,"create");var At=function(){this.__data__=xt?xt(null):{},this.size=0};var Ct=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Tt=Object.prototype.hasOwnProperty;var Et=function(e){var t=this.__data__;if(xt){var i=t[e];return"__lodash_hash_undefined__"===i?void 0:i}return Tt.call(t,e)?t[e]:void 0},St=Object.prototype.hasOwnProperty;var It=function(e){var t=this.__data__;return xt?void 0!==t[e]:St.call(t,e)};var Pt=function(e,t){var i=this.__data__;return this.size+=this.has(e)?0:1,i[e]=xt&&void 0===t?"__lodash_hash_undefined__":t,this};function Mt(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}Mt.prototype.clear=At,Mt.prototype.delete=Ct,Mt.prototype.get=Et,Mt.prototype.has=It,Mt.prototype.set=Pt;var Nt=Mt;var Rt=function(){this.size=0,this.__data__={hash:new Nt,map:new(yt||bt),string:new Nt}};var Ot=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Dt=function(e,t){var i=e.__data__;return Ot(t)?i["string"==typeof t?"string":"hash"]:i.map};var zt=function(e){var t=Dt(this,e).delete(e);return this.size-=t?1:0,t};var Lt=function(e){return Dt(this,e).get(e)};var Vt=function(e){return Dt(this,e).has(e)};var jt=function(e,t){var i=Dt(this,e),n=i.size;return i.set(e,t),this.size+=i.size==n?0:1,this};function Bt(e){var t=-1,i=null==e?0:e.length;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}Bt.prototype.clear=Rt,Bt.prototype.delete=zt,Bt.prototype.get=Lt,Bt.prototype.has=Vt,Bt.prototype.set=jt;var Ft=Bt;var Ht=function(e,t){var i=this.__data__;if(i instanceof bt){var n=i.__data__;if(!yt||n.length<199)return n.push([e,t]),this.size=++i.size,this;i=this.__data__=new Ft(n)}return i.set(e,t),this.size=i.size,this};function Ut(e){var t=this.__data__=new bt(e);this.size=t.size}Ut.prototype.clear=wt,Ut.prototype.delete=kt,Ut.prototype.get=_t,Ut.prototype.has=vt,Ut.prototype.set=Ht;var Wt=Ut;var qt=function(e,t){for(var i=-1,n=null==e?0:e.length;++i<n&&!1!==t(e[i],i,e););return e},$t=tt(Object.keys,Object),Yt=Object.prototype.hasOwnProperty;var Gt=function(e){if(!Me(e))return $t(e);var t=[];for(var i in Object(e))Yt.call(e,i)&&"constructor"!=i&&t.push(i);return t};var Kt=function(e){return ce(e)?Ie(e):Gt(e)};var Qt=function(e,t){return e&&J(t,Kt(t),e)};var Jt=function(e,t){return e&&J(t,De(t),e)},Zt=i(9);var Xt=function(e,t){var i=-1,n=e.length;for(t||(t=Array(n));++i<n;)t[i]=e[i];return t};var ei=function(e,t){for(var i=-1,n=null==e?0:e.length,o=0,r=[];++i<n;){var s=e[i];t(s,i,e)&&(r[o++]=s)}return r};var ti=function(){return[]},ii=Object.prototype.propertyIsEnumerable,ni=Object.getOwnPropertySymbols,oi=ni?function(e){return null==e?[]:(e=Object(e),ei(ni(e),(function(t){return ii.call(e,t)})))}:ti;var ri=function(e,t){return J(e,oi(e),t)};var si=function(e,t){for(var i=-1,n=t.length,o=e.length;++i<n;)e[o+i]=t[i];return e},ai=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)si(t,oi(e)),e=it(e);return t}:ti;var ci=function(e,t){return J(e,ai(e),t)};var li=function(e,t,i){var n=t(e);return _e(e)?n:si(n,i(e))};var di=function(e){return li(e,Kt,oi)};var hi=function(e){return li(e,De,ai)},ui=q(k.a,"DataView"),gi=q(k.a,"Promise"),mi=q(k.a,"Set"),fi=q(k.a,"WeakMap"),pi=z(ui),bi=z(yt),wi=z(gi),ki=z(mi),_i=z(fi),vi=I;(ui&&"[object DataView]"!=vi(new ui(new ArrayBuffer(1)))||yt&&"[object Map]"!=vi(new yt)||gi&&"[object Promise]"!=vi(gi.resolve())||mi&&"[object Set]"!=vi(new mi)||fi&&"[object WeakMap]"!=vi(new fi))&&(vi=function(e){var t=I(e),i="[object Object]"==t?e.constructor:void 0,n=i?z(i):"";if(n)switch(n){case pi:return"[object DataView]";case bi:return"[object Map]";case wi:return"[object Promise]";case ki:return"[object Set]";case _i:return"[object WeakMap]"}return t});var yi=vi,xi=Object.prototype.hasOwnProperty;var Ai=function(e){var t=e.length,i=new e.constructor(t);return t&&"string"==typeof e[0]&&xi.call(e,"index")&&(i.index=e.index,i.input=e.input),i},Ci=k.a.Uint8Array;var Ti=function(e){var t=new e.constructor(e.byteLength);return new Ci(t).set(new Ci(e)),t};var Ei=function(e,t){var i=t?Ti(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.byteLength)},Si=/\w*$/;var Ii=function(e){var t=new e.constructor(e.source,Si.exec(e));return t.lastIndex=e.lastIndex,t},Pi=_?_.prototype:void 0,Mi=Pi?Pi.valueOf:void 0;var Ni=function(e){return Mi?Object(Mi.call(e)):{}};var Ri=function(e,t){var i=t?Ti(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.length)};var Oi=function(e,t,i){var n=e.constructor;switch(t){case"[object ArrayBuffer]":return Ti(e);case"[object Boolean]":case"[object Date]":return new n(+e);case"[object DataView]":return Ei(e,i);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ri(e,i);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(e);case"[object RegExp]":return Ii(e);case"[object Set]":return new n;case"[object Symbol]":return Ni(e)}},Di=Object.create,zi=function(){function e(){}return function(t){if(!w(t))return{};if(Di)return Di(t);e.prototype=t;var i=new e;return e.prototype=void 0,i}}();var Li=function(e){return"function"!=typeof e.constructor||Me(e)?{}:zi(it(e))};var Vi=function(e){return me(e)&&"[object Map]"==yi(e)},ji=Ce.a&&Ce.a.isMap,Bi=ji?Ae(ji):Vi;var Fi=function(e){return me(e)&&"[object Set]"==yi(e)},Hi=Ce.a&&Ce.a.isSet,Ui=Hi?Ae(Hi):Fi,Wi={};Wi["[object Arguments]"]=Wi["[object Array]"]=Wi["[object ArrayBuffer]"]=Wi["[object DataView]"]=Wi["[object Boolean]"]=Wi["[object Date]"]=Wi["[object Float32Array]"]=Wi["[object Float64Array]"]=Wi["[object Int8Array]"]=Wi["[object Int16Array]"]=Wi["[object Int32Array]"]=Wi["[object Map]"]=Wi["[object Number]"]=Wi["[object Object]"]=Wi["[object RegExp]"]=Wi["[object Set]"]=Wi["[object String]"]=Wi["[object Symbol]"]=Wi["[object Uint8Array]"]=Wi["[object Uint8ClampedArray]"]=Wi["[object Uint16Array]"]=Wi["[object Uint32Array]"]=!0,Wi["[object Error]"]=Wi["[object Function]"]=Wi["[object WeakMap]"]=!1;var qi=function e(t,i,n,o,r,s){var a,c=1&i,l=2&i,d=4&i;if(n&&(a=r?n(t,o,r,s):n(t)),void 0!==a)return a;if(!w(t))return t;var h=_e(t);if(h){if(a=Ai(t),!c)return Xt(t,a)}else{var u=yi(t),g="[object Function]"==u||"[object GeneratorFunction]"==u;if(Object(ve.a)(t))return Object(Zt.a)(t,c);if("[object Object]"==u||"[object Arguments]"==u||g&&!r){if(a=l||g?{}:Li(t),!c)return l?ci(t,Jt(a,t)):ri(t,Qt(a,t))}else{if(!Wi[u])return r?t:{};a=Oi(t,u,c)}}s||(s=new Wt);var m=s.get(t);if(m)return m;s.set(t,a),Ui(t)?t.forEach((function(o){a.add(e(o,i,n,o,t,s))})):Bi(t)&&t.forEach((function(o,r){a.set(r,e(o,i,n,r,t,s))}));var f=h?void 0:(d?l?hi:di:l?De:Kt)(t);return qt(f||t,(function(o,r){f&&(o=t[r=o]),Q(a,r,e(o,i,n,r,t,s))})),a};var $i=function(e,t){return qi(e,5,t="function"==typeof t?t:void 0)};var Yi=function(e){return me(e)&&1===e.nodeType&&!ct(e)};class Gi{constructor(e,t){this._config={},t&&this.define(Ki(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,i,n=!1){if(ct(t))return void this._setObjectToTarget(e,t,n);const o=t.split(".");t=o.pop();for(const t of o)ct(e[t])||(e[t]={}),e=e[t];if(ct(i))return ct(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,i,n);n&&void 0!==e[t]||(e[t]=i)}_getFromSource(e,t){const i=t.split(".");t=i.pop();for(const t of i){if(!ct(e[t])){e=null;break}e=e[t]}return e?Ki(e[t]):void 0}_setObjectToTarget(e,t,i){Object.keys(t).forEach(n=>{this._setToTarget(e,n,t[n],i)})}}function Ki(e){return $i(e,Qi)}function Qi(e){return Yi(e)?e:void 0}function Ji(e){return!(!e||!e[Symbol.iterator])}class Zi{constructor(e={},t={}){const i=Ji(e);if(i||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],i)for(const t of e)this._items.push(t),this._itemMap.set(this._getItemIdBeforeAdding(t),t)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(void 0===t)t=this._items.length;else if(t>this._items.length||t<0)throw new c.a("collection-add-item-invalid-index",this);for(let i=0;i<e.length;i++){const n=e[i],o=this._getItemIdBeforeAdding(n),r=t+i;this._items.splice(r,0,n),this._itemMap.set(o,n),this.fire("add",n,r)}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if("string"==typeof e)t=this._itemMap.get(e);else{if("number"!=typeof e)throw new c.a("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if("string"==typeof e)return this._itemMap.has(e);{const t=e[this._idProperty];return this._itemMap.has(t)}}getIndex(e){let t;return t="string"==typeof e?this._itemMap.get(e):e,this._items.indexOf(t)}remove(e){const[t,i]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:i}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new c.a("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:e=>{this._setUpBindToBinding(t=>new e(t))},using:e=>{"function"==typeof e?this._setUpBindToBinding(t=>e(t)):this._setUpBindToBinding(t=>t[e])}}}_setUpBindToBinding(e){const t=this._bindToCollection,i=(i,n,o)=>{const r=t._bindToCollection==this,s=t._bindToInternalToExternalMap.get(n);if(r&&s)this._bindToExternalToInternalMap.set(n,s),this._bindToInternalToExternalMap.set(s,n);else{const i=e(n);if(!i)return void this._skippedIndexesFromExternal.push(o);let r=o;for(const e of this._skippedIndexesFromExternal)o>e&&r--;for(const e of t._skippedIndexesFromExternal)r>=e&&r++;this._bindToExternalToInternalMap.set(n,i),this._bindToInternalToExternalMap.set(i,n),this.add(i,r);for(let e=0;e<t._skippedIndexesFromExternal.length;e++)r<=t._skippedIndexesFromExternal[e]&&t._skippedIndexesFromExternal[e]++}};for(const e of t)i(0,e,t.getIndex(e));this.listenTo(t,"add",i),this.listenTo(t,"remove",(e,t,i)=>{const n=this._bindToExternalToInternalMap.get(t);n&&this.remove(n),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((e,t)=>(i<t&&e.push(t-1),i>t&&e.push(t),e),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let i;if(t in e){if(i=e[t],"string"!=typeof i)throw new c.a("collection-add-invalid-id",this);if(this.get(i))throw new c.a("collection-add-item-already-exists",this)}else e[t]=i=s();return i}_remove(e){let t,i,n,o=!1;const r=this._idProperty;if("string"==typeof e?(i=e,n=this._itemMap.get(i),o=!n,n&&(t=this._items.indexOf(n))):"number"==typeof e?(t=e,n=this._items[t],o=!n,n&&(i=n[r])):(n=e,i=n[r],t=this._items.indexOf(n),o=-1==t||!this._itemMap.get(i)),o)throw new c.a("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(i);const s=this._bindToInternalToExternalMap.get(n);return this._bindToInternalToExternalMap.delete(n),this._bindToExternalToInternalMap.delete(s),this.fire("remove",n,t),[n,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}Ke(Zi,h);class Xi{constructor(e,t=[],i=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const e of t)e.pluginName&&this._availablePlugins.set(e.pluginName,e);this._contextPlugins=new Map;for(const[e,t]of i)this._contextPlugins.set(e,t),this._contextPlugins.set(t,e),e.pluginName&&this._availablePlugins.set(e.pluginName,e)}*[Symbol.iterator](){for(const e of this._plugins)"function"==typeof e[0]&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let t=e;throw"function"==typeof e&&(t=e.pluginName||e.name),new c.a("plugincollection-plugin-not-loaded",this._context,{plugin:t})}return t}has(e){return this._plugins.has(e)}init(e,t=[],i=[]){const n=this,o=this._context;!function e(t,i=new Set){t.forEach(t=>{a(t)&&(i.has(t)||(i.add(t),t.pluginName&&!n._availablePlugins.has(t.pluginName)&&n._availablePlugins.set(t.pluginName,t),t.requires&&e(t.requires,i)))})}(e),u(e);const r=[...function e(t,i=new Set){return t.map(e=>a(e)?e:n._availablePlugins.get(e)).reduce((t,n)=>i.has(n)?t:(i.add(n),n.requires&&(u(n.requires,n),e(n.requires,i).forEach(e=>t.add(e))),t.add(n)),new Set)}(e.filter(e=>!d(e,t)))];!function(e,t){for(const i of t){if("function"!=typeof i)throw new c.a("plugincollection-replace-plugin-invalid-type",null,{pluginItem:i});const t=i.pluginName;if(!t)throw new c.a("plugincollection-replace-plugin-missing-name",null,{pluginItem:i});if(i.requires&&i.requires.length)throw new c.a("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:t});const o=n._availablePlugins.get(t);if(!o)throw new c.a("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:t});const r=e.indexOf(o);if(-1===r){if(n._contextPlugins.has(o))return;throw new c.a("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:t})}if(o.requires&&o.requires.length)throw new c.a("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:t});e.splice(r,1,i),n._availablePlugins.set(t,i)}}(r,i);const s=function(e){return e.map(e=>{const t=n._contextPlugins.get(e)||new e(o);return n._add(e,t),t})}(r);return g(s,"init").then(()=>g(s,"afterInit")).then(()=>s);function a(e){return"function"==typeof e}function l(e){return a(e)&&e.isContextPlugin}function d(e,t){return t.some(t=>t===e||(h(e)===t||h(t)===e))}function h(e){return a(e)?e.pluginName||e.name:e}function u(e,i=null){e.map(e=>a(e)?e:n._availablePlugins.get(e)||e).forEach(e=>{!function(e,t){if(a(e))return;if(t)throw new c.a("plugincollection-soft-required",o,{missingPlugin:e,requiredBy:h(t)});throw new c.a("plugincollection-plugin-not-found",o,{plugin:e})}(e,i),function(e,t){if(!l(t))return;if(l(e))return;throw new c.a("plugincollection-context-required",o,{plugin:h(e),requiredBy:h(t)})}(e,i),function(e,i){if(!i)return;if(!d(e,t))return;throw new c.a("plugincollection-required",o,{plugin:h(e),requiredBy:h(i)})}(e,i)})}function g(e,t){return e.reduce((e,i)=>i[t]?n._contextPlugins.has(i)?e:e.then(i[t].bind(i)):e,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)"function"!=typeof t.destroy||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const i=e.pluginName;if(i){if(this._plugins.has(i))throw new c.a("plugincollection-plugin-name-conflict",null,{pluginName:i,plugin1:this._plugins.get(i).constructor,plugin2:e});this._plugins.set(i,t)}}}function en(e){return Array.isArray(e)?e:[e]}function tn(e,t,i=1){if("number"!=typeof i)throw new c.a("translation-service-quantity-not-a-number",null,{quantity:i});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;1===n&&(e=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=t.id||t.string;if(0===n||!function(e,t){return!!window.CKEDITOR_TRANSLATIONS[e]&&!!window.CKEDITOR_TRANSLATIONS[e].dictionary[t]}(e,o))return 1!==i?t.plural:t.string;const r=window.CKEDITOR_TRANSLATIONS[e].dictionary,s=window.CKEDITOR_TRANSLATIONS[e].getPluralForm||(e=>1===e?0:1);if("string"==typeof r[o])return r[o];const a=Number(s(i));return r[o][a]}Ke(Xi,h),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const nn=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function on(e){return nn.includes(e)?"rtl":"ltr"}class rn{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=on(this.uiLanguage),this.contentLanguageDirection=on(this.contentLanguage),this.t=(e,t)=>this._t(e,t)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=en(t),"string"==typeof e&&(e={string:e});const i=!!e.plural?t[0]:1;return function(e,t){return e.replace(/%(\d+)/g,(e,i)=>i<t.length?t[i]:e)}(tn(this.uiLanguage,e,i),t)}}class sn{constructor(e){this.config=new Gi(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Xi(this,t);const i=this.config.get("language")||{};this.locale=new rn({uiLanguage:"string"==typeof i?i:i.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Zi,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const i of e.concat(t)){if("function"!=typeof i)throw new c.a("context-initplugins-constructor-only",null,{Plugin:i});if(!0!==i.isContextPlugin)throw new c.a("context-initplugins-invalid-plugin",null,{Plugin:i})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new c.a("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const i=new this(e);t(i.initPlugins().then(()=>i))})}}class an{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function cn(e,t){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++)if(e[n]!=t[n])return n;return e.length==t.length?"same":e.length<t.length?"prefix":"extension"}Ke(an,Ue);var ln=function(e){return qi(e,4)};class dn{constructor(e){this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if(-1==(e=this.parent.getChildIndex(this)))throw new c.a("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this:this.parent;for(;i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}getCommonAncestor(e,t={}){const i=this.getAncestors(t),n=e.getAncestors(t);let o=0;for(;i[o]==n[o]&&i[o];)o++;return 0===o?null:i[o-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),i=e.getPath(),n=cn(t,i);switch(n){case"prefix":return!0;case"extension":return!1;default:return t[n]<i[n]}}isAfter(e){return this!=e&&(this.root===e.root&&!this.isBefore(e))}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire("change:"+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=ln(this);return delete e.parent,e}is(e){return"node"===e||"view:node"===e}}Ke(dn,h);class hn extends dn{constructor(e,t){super(e),this._textData=t}is(e){return"$text"===e||"view:$text"===e||"text"===e||"view:text"===e||"node"===e||"view:node"===e}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof hn&&(this===e||this.data===e.data)}_clone(){return new hn(this.document,this.data)}}class un{constructor(e,t,i){if(this.textNode=e,t<0||t>e.data.length)throw new c.a("view-textproxy-wrong-offsetintext",this);if(i<0||t+i>e.data.length)throw new c.a("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+i),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return"$textProxy"===e||"view:$textProxy"===e||"textProxy"===e||"view:textProxy"===e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this.textNode:this.parent;for(;null!==i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}}function gn(e){return Ji(e)?new Map(e):function(e){const t=new Map;for(const i in e)t.set(i,e[i]);return t}(e)}class mn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)("string"==typeof t||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const e of this._patterns){const i=fn(t,e);if(i)return{element:t,pattern:e,match:i}}return null}matchAll(...e){const t=[];for(const i of e)for(const e of this._patterns){const n=fn(i,e);n&&t.push({element:i,pattern:e,match:n})}return t.length>0?t:null}getElementName(){if(1!==this._patterns.length)return null;const e=this._patterns[0],t=e.name;return"function"==typeof e||!t||t instanceof RegExp?null:t}}function fn(e,t){if("function"==typeof t)return t(e);const i={};return t.name&&(i.name=function(e,t){if(e instanceof RegExp)return!!t.match(e);return e===t}(t.name,e.name),!i.name)||t.attributes&&(i.attributes=function(e,t){const i=new Set(t.getAttributeKeys());ct(e)?(void 0!==e.style&&Object(c.b)("matcher-pattern-deprecated-attributes-style-key",e),void 0!==e.class&&Object(c.b)("matcher-pattern-deprecated-attributes-class-key",e)):(i.delete("style"),i.delete("class"));return pn(e,i,e=>t.getAttribute(e))}(t.attributes,e),!i.attributes)?null:!(t.classes&&(i.classes=function(e,t){return pn(e,t.getClassNames())}(t.classes,e),!i.classes))&&(!(t.styles&&(i.styles=function(e,t){return pn(e,t.getStyleNames(!0),e=>t.getStyle(e))}(t.styles,e),!i.styles))&&i)}function pn(e,t,i){const n=function(e){if(Array.isArray(e))return e.map(e=>ct(e)?(void 0!==e.key&&void 0!==e.value||Object(c.b)("matcher-pattern-missing-key-or-value",e),[e.key,e.value]):[e,!0]);if(ct(e))return Object.entries(e);return[[e,!0]]}(e),o=Array.from(t),r=[];return n.forEach(([e,t])=>{o.forEach(n=>{(function(e,t){return!0===e||e===t||e instanceof RegExp&&t.match(e)})(e,n)&&function(e,t,i){if(!0===e)return!0;const n=i(t);return e===n||e instanceof RegExp&&!!String(n).match(e)}(t,n,i)&&r.push(n)})}),!n.length||r.length<n.length?null:r}var bn=function(e){return"symbol"==typeof e||me(e)&&"[object Symbol]"==I(e)},wn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kn=/^\w*$/;var _n=function(e,t){if(_e(e))return!1;var i=typeof e;return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!bn(e))||(kn.test(e)||!wn.test(e)||null!=t&&e in Object(t))};function vn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var i=function(){var n=arguments,o=t?t.apply(this,n):n[0],r=i.cache;if(r.has(o))return r.get(o);var s=e.apply(this,n);return i.cache=r.set(o,s)||r,s};return i.cache=new(vn.Cache||Ft),i}vn.Cache=Ft;var yn=vn;var xn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,An=/\\(\\)?/g,Cn=function(e){var t=yn(e,(function(e){return 500===i.size&&i.clear(),e})),i=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(xn,(function(e,i,n,o){t.push(n?o.replace(An,"$1"):i||e)})),t}));var Tn=function(e,t){for(var i=-1,n=null==e?0:e.length,o=Array(n);++i<n;)o[i]=t(e[i],i,e);return o},En=_?_.prototype:void 0,Sn=En?En.toString:void 0;var In=function e(t){if("string"==typeof t)return t;if(_e(t))return Tn(t,e)+"";if(bn(t))return Sn?Sn.call(t):"";var i=t+"";return"0"==i&&1/t==-1/0?"-0":i};var Pn=function(e){return null==e?"":In(e)};var Mn=function(e,t){return _e(e)?e:_n(e,t)?[e]:Cn(Pn(e))};var Nn=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0};var Rn=function(e){if("string"==typeof e||bn(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var On=function(e,t){for(var i=0,n=(t=Mn(t,e)).length;null!=e&&i<n;)e=e[Rn(t[i++])];return i&&i==n?e:void 0};var Dn=function(e,t,i){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(i=i>o?o:i)<0&&(i+=o),o=t>i?0:i-t>>>0,t>>>=0;for(var r=Array(o);++n<o;)r[n]=e[n+t];return r};var zn=function(e,t){return t.length<2?e:On(e,Dn(t,0,-1))};var Ln=function(e,t){return t=Mn(t,e),null==(e=zn(e,t))||delete e[Rn(Nn(t))]};var Vn=function(e,t){return null==e||Ln(e,t)};var jn=function(e,t,i){var n=null==e?void 0:On(e,t);return void 0===n?i:n};var Bn=function(e,t,i){(void 0!==i&&!G(e[t],i)||void 0===i&&!(t in e))&&Y(e,t,i)};var Fn=function(e){return function(t,i,n){for(var o=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[e?a:++o];if(!1===i(r[c],c,r))break}return t}}();var Hn=function(e){return me(e)&&ce(e)};var Un=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]};var Wn=function(e){return J(e,De(e))};var qn=function(e,t,i,n,o,r,s){var a=Un(e,i),c=Un(t,i),l=s.get(c);if(l)Bn(e,i,l);else{var d=r?r(a,c,i+"",e,t,s):void 0,h=void 0===d;if(h){var u=_e(c),g=!u&&Object(ve.a)(c),m=!u&&!g&&Ee(c);d=c,u||g||m?_e(a)?d=a:Hn(a)?d=Xt(a):g?(h=!1,d=Object(Zt.a)(c,!0)):m?(h=!1,d=Ri(c,!0)):d=[]:ct(c)||ke(c)?(d=a,ke(a)?d=Wn(a):w(a)&&!M(a)||(d=Li(c))):h=!1}h&&(s.set(c,d),o(d,c,n,r,s),s.delete(c)),Bn(e,i,d)}};var $n=function e(t,i,n,o,r){t!==i&&Fn(i,(function(s,a){if(r||(r=new Wt),w(s))qn(t,i,a,n,e,o,r);else{var c=o?o(Un(t,a),s,a+"",t,i,r):void 0;void 0===c&&(c=s),Bn(t,a,c)}}),De)},Yn=ue((function(e,t,i){$n(e,t,i)}));var Gn=function(e,t,i,n){if(!w(e))return e;for(var o=-1,r=(t=Mn(t,e)).length,s=r-1,a=e;null!=a&&++o<r;){var c=Rn(t[o]),l=i;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=s){var d=a[c];void 0===(l=n?n(d,c,a):void 0)&&(l=w(d)?d:de(t[o+1])?[]:{})}Q(a,c,l),a=a[c]}return e};var Kn=function(e,t,i){return null==e?e:Gn(e,t,i)};class Qn{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(e){let t=null,i=0,n=0,o=null;const r=new Map;if(""===e)return r;";"!=e.charAt(e.length-1)&&(e+=";");for(let s=0;s<e.length;s++){const a=e.charAt(s);if(null===t)switch(a){case":":o||(o=e.substr(i,s-i),n=s+1);break;case'"':case"'":t=a;break;case";":{const t=e.substr(n,s-n);o&&r.set(o.trim(),t.trim()),o=null,i=s+1;break}}else a===t&&(t=null)}return r}(e).entries());for(const[e,i]of t)this._styleProcessor.toNormalizedForm(e,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([t])=>t===e);return Array.isArray(t)}set(e,t){if(w(e))for(const[t,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(t,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Zn(e);Vn(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!w(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([t])=>t===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){if(this.isEmpty)return[];if(e)return this._styleProcessor.getStyleNames(this._styles);return this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const i of t)e.push(...this._styleProcessor.getReducedForm(i,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const i=t.splice(0,t.length-1).join("."),n=jn(this._styles,i);if(!n)return;!Array.from(Object.keys(n)).length&&this.remove(i)}}class Jn{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,i){if(w(t))Xn(i,Zn(e),t);else if(this._normalizers.has(e)){const n=this._normalizers.get(e),{path:o,value:r}=n(t);Xn(i,o,r)}else Xn(i,e,t)}getNormalized(e,t){if(!e)return Yn({},t);if(void 0!==t[e])return t[e];if(this._extractors.has(e)){const i=this._extractors.get(e);if("string"==typeof i)return jn(t,i);const n=i(e,t);if(n)return n}return jn(t,Zn(e))}getReducedForm(e,t){const i=this.getNormalized(e,t);if(void 0===i)return[];if(this._reducers.has(e)){return this._reducers.get(e)(i)}return[[e,i]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(t=>{const i=this.getNormalized(t,e);return i&&"object"==typeof i?Object.keys(i).length:i}),i=new Set([...t,...Object.keys(e)]);return Array.from(i.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const i of t)this._mapStyleNames(i,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Zn(e){return e.replace("-",".")}function Xn(e,t,i){let n=i;w(i)&&(n=Yn({},jn(e,t),i)),Kn(e,t,n)}class eo extends dn{constructor(e,t,i,n){if(super(e),this.name=t,this._attrs=function(e){e=gn(e);for(const[t,i]of e)null===i?e.delete(t):"string"!=typeof i&&e.set(t,String(i));return e}(i),this._children=[],n&&this._insertChild(0,n),this._classes=new Set,this._attrs.has("class")){const e=this._attrs.get("class");to(this._classes,e),this._attrs.delete("class")}this._styles=new Qn(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._isAllowedInsideAttributeElement=!1}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}get isAllowedInsideAttributeElement(){return this._isAllowedInsideAttributeElement}is(e,t=null){return t?t===this.name&&("element"===e||"view:element"===e):"element"===e||"view:element"===e||"node"===e||"view:node"===e}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if("class"==e)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"==e){const e=this._styles.toString();return""==e?void 0:e}return this._attrs.get(e)}hasAttribute(e){return"class"==e?this._classes.size>0:"style"==e?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof eo))return!1;if(this===e)return!0;if(this.name!=e.name)return!1;if(this.isAllowedInsideAttributeElement!=e.isAllowedInsideAttributeElement)return!1;if(this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,i]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==i)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e=!1){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new mn(...e);let i=this.parent;for(;i;){if(t.match(i))return i;i=i.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),i=Array.from(this._attrs).map(e=>`${e[0]}="${e[1]}"`).sort().join(" ");return this.name+(""==e?"":` class="${e}"`)+(t?` style="${t}"`:"")+(""==i?"":" "+i)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const i=new this.constructor(this.document,this.name,this._attrs,t);return i._classes=new Set(this._classes),i._styles.set(this._styles.getNormalized()),i._customProperties=new Map(this._customProperties),i.getFillerOffset=this.getFillerOffset,i._isAllowedInsideAttributeElement=this.isAllowedInsideAttributeElement,i}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let i=0;const n=function(e,t){if("string"==typeof t)return[new hn(e,t)];Ji(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new hn(e,t):t instanceof un?new hn(e,t.data):t)}(this.document,t);for(const t of n)null!==t.parent&&t._remove(),t.parent=this,t.document=this.document,this._children.splice(e,0,t),e++,i++;return i}_removeChildren(e,t=1){this._fireChange("children",this);for(let i=e;i<e+t;i++)this._children[i].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),"class"==e?to(this._classes,t):"style"==e?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),"class"==e?this._classes.size>0&&(this._classes.clear(),!0):"style"==e?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of en(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of en(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of en(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function to(e,t){const i=t.split(/\s+/);e.clear(),i.forEach(t=>e.add(t))}class io extends eo{constructor(e,t,i,n){super(e,t,i,n),this.getFillerOffset=no}is(e,t=null){return t?t===this.name&&("containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e):"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}}function no(){const e=[...this.getChildren()],t=e[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const t of e)if(!t.is("uiElement"))return null;return this.childCount}class oo extends io{constructor(e,t,i,n){super(e,t,i,n),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",t=>t&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}is(e,t=null){return t?t===this.name&&("editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e):"editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}destroy(){this.stopListening()}}Ke(oo,Ue);const ro=Symbol("rootName");class so extends oo{constructor(e,t){super(e,t),this.rootName="main"}is(e,t=null){return t?t===this.name&&("rootElement"===e||"view:rootElement"===e||"editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e):"rootElement"===e||"view:rootElement"===e||"editableElement"===e||"view:editableElement"===e||"containerElement"===e||"view:containerElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}get rootName(){return this.getCustomProperty(ro)}set rootName(e){this._setCustomProperty(ro,e)}set _name(e){this.name=e}}class ao{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new c.a("view-tree-walker-no-start-position",null);if(e.direction&&"forward"!=e.direction&&"backward"!=e.direction)throw new c.a("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=co._createAt(e.startPosition):this.position=co._createAt(e.boundaries["backward"==e.direction?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,i,n;do{n=this.position,({done:t,value:i}=this.next())}while(!t&&e(i));t||(this.position=n)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,i=e.parent;if(null===i.parent&&e.offset===i.childCount)return{done:!0};if(i===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let n;if(i instanceof hn){if(e.isAtEnd)return this.position=co._createAfter(i),this._next();n=i.data[e.offset]}else n=i.getChild(e.offset);if(n instanceof eo)return this.shallow?e.offset++:e=new co(n,0),this.position=e,this._formatReturnValue("elementStart",n,t,e,1);if(n instanceof hn){if(this.singleCharacters)return e=new co(n,0),this.position=e,this._next();{let i,o=n.data.length;return n==this._boundaryEndParent?(o=this.boundaries.end.offset,i=new un(n,0,o),e=co._createAfter(i)):(i=new un(n,0,n.data.length),e.offset++),this.position=e,this._formatReturnValue("text",i,t,e,o)}}if("string"==typeof n){let n;if(this.singleCharacters)n=1;else{n=(i===this._boundaryEndParent?this.boundaries.end.offset:i.data.length)-e.offset}const o=new un(i,e.offset,n);return e.offset+=n,this.position=e,this._formatReturnValue("text",o,t,e,n)}return e=co._createAfter(i),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",i,t,e)}_previous(){let e=this.position.clone();const t=this.position,i=e.parent;if(null===i.parent&&0===e.offset)return{done:!0};if(i==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let n;if(i instanceof hn){if(e.isAtStart)return this.position=co._createBefore(i),this._previous();n=i.data[e.offset-1]}else n=i.getChild(e.offset-1);if(n instanceof eo)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",n,t,e,1)):(e=new co(n,n.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",n,t,e));if(n instanceof hn){if(this.singleCharacters)return e=new co(n,n.data.length),this.position=e,this._previous();{let i,o=n.data.length;if(n==this._boundaryStartParent){const t=this.boundaries.start.offset;i=new un(n,t,n.data.length-t),o=i.data.length,e=co._createBefore(i)}else i=new un(n,0,n.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",i,t,e,o)}}if("string"==typeof n){let n;if(this.singleCharacters)n=1;else{const t=i===this._boundaryStartParent?this.boundaries.start.offset:0;n=e.offset-t}e.offset-=n;const o=new un(i,e.offset,n);return this.position=e,this._formatReturnValue("text",o,t,e,n)}return e=co._createBefore(i),this.position=e,this._formatReturnValue("elementStart",i,t,e,1)}_formatReturnValue(e,t,i,n,o){return t instanceof un&&(t.offsetInText+t.data.length==t.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?i=co._createAfter(t.textNode):(n=co._createAfter(t.textNode),this.position=n)),0===t.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?i=co._createBefore(t.textNode):(n=co._createBefore(t.textNode),this.position=n))),{done:!1,value:{type:e,item:t,previousPosition:i,nextPosition:n,length:o}}}}class co{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof oo);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=co._createAt(this),i=t.offset+e;return t.offset=i<0?0:i,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const i=new ao(t);return i.skip(e),i.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),i=e.getAncestors();let n=0;for(;t[n]==i[n]&&t[n];)n++;return 0===n?null:t[n-1]}is(e){return"position"===e||"view:position"===e}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return"before"==this.compareWith(e)}isAfter(e){return"after"==this.compareWith(e)}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],i=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),i.push(e.offset);const n=cn(t,i);switch(n){case"prefix":return"before";case"extension":return"after";default:return t[n]<i[n]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new ao(e)}clone(){return new co(this.parent,this.offset)}static _createAt(e,t){if(e instanceof co)return new this(e.parent,e.offset);{const i=e;if("end"==t)t=i.is("$text")?i.data.length:i.childCount;else{if("before"==t)return this._createBefore(i);if("after"==t)return this._createAfter(i);if(0!==t&&!t)throw new c.a("view-createpositionat-offset-required",i)}return new co(i,t)}}static _createAfter(e){if(e.is("$textProxy"))return new co(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new c.a("view-position-after-root",e,{root:e});return new co(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new co(e.textNode,e.offsetInText);if(!e.parent)throw new c.a("view-position-before-root",e,{root:e});return new co(e.parent,e.index)}}class lo{constructor(e,t=null){this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new ao({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(ho,{direction:"backward"}),t=this.end.getLastMatchingPosition(ho);return e.parent.is("$text")&&e.isAtStart&&(e=co._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=co._createAfter(t.parent)),new lo(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(ho);if(e.isAfter(this.end)||e.isEqual(this.end))return new lo(e,e);let t=this.end.getLastMatchingPosition(ho,{direction:"backward"});const i=e.nodeAfter,n=t.nodeBefore;return i&&i.is("$text")&&(e=new co(i,0)),n&&n.is("$text")&&(t=new co(n,n.data.length)),new lo(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const i=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return i&&n}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new lo(this.start,e.start)),this.containsPosition(e.end)&&t.push(new lo(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,i=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(i=e.end),new lo(t,i)}return null}getWalker(e={}){return e.boundaries=this,new ao(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new lo(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ao(e);for(const e of t)yield e.item}*getPositions(e={}){e.boundaries=this;const t=new ao(e);yield t.position;for(const e of t)yield e.nextPosition}is(e){return"range"===e||"view:range"===e}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,i,n){return new this(new co(e,t),new co(i,n))}static _createFromPositionAndShift(e,t){const i=e,n=e.getShiftedBy(t);return t>0?new this(i,n):new this(n,i)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(co._createBefore(e),t)}}function ho(e){return!(!e.item.is("attributeElement")&&!e.item.is("uiElement"))}function uo(e){let t=0;for(const i of e)t++;return t}class go{constructor(e=null,t,i){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(e,t,i)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel)return!1;if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let i=!1;for(const n of e._ranges)if(t.isEqual(n)){i=!0;break}if(!i)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=uo(this.getRanges());if(t!=uo(e.getRanges()))return!1;if(0==t)return!0;for(let t of this.getRanges()){t=t.getTrimmed();let i=!1;for(let n of e.getRanges())if(n=n.getTrimmed(),t.start.isEqual(n.start)&&t.end.isEqual(n.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return 1!==this.rangeCount?null:this.getFirstRange().getContainedElement()}setTo(e,t,i){if(null===e)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof go||e instanceof mo)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof lo)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof co)this._setRanges([new lo(e)]),this._setFakeOptions(t);else if(e instanceof dn){const n=!!i&&!!i.backward;let o;if(void 0===t)throw new c.a("view-selection-setto-required-second-parameter",this);o="in"==t?lo._createIn(e):"on"==t?lo._createOn(e):new lo(co._createAt(e,t)),this._setRanges([o],n),this._setFakeOptions(i)}else{if(!Ji(e))throw new c.a("view-selection-setto-not-selectable",this);this._setRanges(e,t&&t.backward),this._setFakeOptions(t)}this.fire("change")}setFocus(e,t){if(null===this.anchor)throw new c.a("view-selection-setfocus-no-ranges",this);const i=co._createAt(e,t);if("same"==i.compareWith(this.focus))return;const n=this.anchor;this._ranges.pop(),"before"==i.compareWith(n)?this._addRange(new lo(i,n),!0):this._addRange(new lo(n,i)),this.fire("change")}is(e){return"selection"===e||"view:selection"===e}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const t of e)this._addRange(t);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof lo))throw new c.a("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new c.a("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new lo(e.start,e.end))}}Ke(go,h);class mo{constructor(e=null,t,i){this._selection=new go,this._selection.delegate("change").to(this),this._selection.setTo(e,t,i)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}is(e){return"selection"===e||"documentSelection"==e||"view:selection"==e||"view:documentSelection"==e}_setTo(e,t,i){this._selection.setTo(e,t,i)}_setFocus(e,t){this._selection.setFocus(e,t)}}Ke(mo,h);class fo extends o{constructor(e,t,i){super(e,t),this.startRange=i,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const po=Symbol("bubbling contexts");var bo={fire(e,...t){try{const i=e instanceof o?e:new o(this,e),n=vo(this);if(!n.size)return;if(wo(i,"capturing",this),ko(n,"$capture",i,...t))return i.return;const r=i.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&Boolean(_o(n,s));let c=s||function(e){if(!e)return null;const t=e.start.parent,i=e.end.parent,n=t.getPath(),o=i.getPath();return n.length>o.length?t:i}(r);if(wo(i,"atTarget",c),!a){if(ko(n,"$text",i,...t))return i.return;wo(i,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(ko(n,"$root",i,...t))return i.return}else if(c.is("element")&&ko(n,c.name,i,...t))return i.return;if(ko(n,c,i,...t))return i.return;c=c.parent,wo(i,"bubbling",c)}return wo(i,"bubbling",this),ko(n,"$document",i,...t),i.return}catch(e){c.a.rethrowUnexpectedError(e,this)}},_addEventListener(e,t,i){const n=en(i.context||"$document"),o=vo(this);for(const r of n){let n=o.get(r);n||(n=Object.create(h),o.set(r,n)),this.listenTo(n,e,t,i)}},_removeEventListener(e,t){const i=vo(this);for(const n of i.values())this.stopListening(n,e,t)}};function wo(e,t,i){e instanceof fo&&(e._eventPhase=t,e._currentTarget=i)}function ko(e,t,i,...n){const o="string"==typeof t?e.get(t):_o(e,t);return!!o&&(o.fire(i,...n),i.stop.called)}function _o(e,t){for(const[i,n]of e)if("function"==typeof i&&i(t))return n;return null}function vo(e){return e[po]||(e[po]=new Map),e[po]}class yo{constructor(e){this.selection=new mo,this.roots=new Zi({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do{for(const i of this._postFixers)if(t=i(e),t)break}while(t)}}Ke(yo,bo),Ke(yo,Ue);class xo extends eo{constructor(e,t,i,n){super(e,t,i,n),this.getFillerOffset=Ao,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new c.a("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(e,t=null){return t?t===this.name&&("attributeElement"===e||"view:attributeElement"===e||"element"===e||"view:element"===e):"attributeElement"===e||"view:attributeElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}isSimilar(e){return null!==this.id||null!==e.id?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function Ao(){if(Co(this))return null;let e=this.parent;for(;e&&e.is("attributeElement");){if(Co(e)>1)return null;e=e.parent}return!e||Co(e)>1?null:this.childCount}function Co(e){return Array.from(e.getChildren()).filter(e=>!e.is("uiElement")).length}xo.DEFAULT_PRIORITY=10;class To extends eo{constructor(e,t,i,n){super(e,t,i,n),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Eo}is(e,t=null){return t?t===this.name&&("emptyElement"===e||"view:emptyElement"===e||"element"===e||"view:element"===e):"emptyElement"===e||"view:emptyElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}_insertChild(e,t){if(t&&(t instanceof dn||Array.from(t).length>0))throw new c.a("view-emptyelement-cannot-add",[this,t])}}function Eo(){return null}const So=navigator.userAgent.toLowerCase();var Io={isMac:function(e){return e.indexOf("macintosh")>-1}(So),isGecko:function(e){return!!e.match(/gecko\/\d+/)}(So),isSafari:function(e){return e.indexOf(" applewebkit/")>-1&&-1===e.indexOf("chrome")}(So),isAndroid:function(e){return e.indexOf("android")>-1}(So),isBlink:function(e){return e.indexOf("chrome/")>-1&&e.indexOf("edge/")<0}(So),features:{isRegExpUnicodePropertySupported:function(){let e=!1;try{e=0==="ć".search(new RegExp("[\\p{L}]","u"))}catch(e){}return e}()}};const Po={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},Mo={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},No=function(){const e={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++){const i=String.fromCharCode(t);e[i.toLowerCase()]=t}for(let t=48;t<=57;t++)e[t-48]=t;for(let t=112;t<=123;t++)e["f"+(t-111)]=t;for(const t of"`-=[];',./\\")e[t]=t.charCodeAt(0);return e}(),Ro=Object.fromEntries(Object.entries(No).map(([e,t])=>[t,e.charAt(0).toUpperCase()+e.slice(1)]));function Oo(e){let t;if("string"==typeof e){if(t=No[e.toLowerCase()],!t)throw new c.a("keyboard-unknown-key",null,{key:e})}else t=e.keyCode+(e.altKey?No.alt:0)+(e.ctrlKey?No.ctrl:0)+(e.shiftKey?No.shift:0)+(e.metaKey?No.cmd:0);return t}function Do(e){return"string"==typeof e&&(e=function(e){return e.split("+").map(e=>e.trim())}(e)),e.map(e=>"string"==typeof e?function(e){if(e.endsWith("!"))return Oo(e.slice(0,-1));const t=Oo(e);return Io.isMac&&t==No.ctrl?No.cmd:t}(e):e).reduce((e,t)=>t+e,0)}function zo(e){let t=Do(e);return Object.entries(Io.isMac?Po:Mo).reduce((e,[i,n])=>(0!=(t&No[i])&&(t&=~No[i],e+=n),e),"")+(t?Ro[t]:"")}function Lo(e,t){const i="ltr"===t;switch(e){case No.arrowleft:return i?"left":"right";case No.arrowright:return i?"right":"left";case No.arrowup:return"up";case No.arrowdown:return"down"}}class Vo extends eo{constructor(e,t,i,n){super(e,t,i,n),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Bo}is(e,t=null){return t?t===this.name&&("uiElement"===e||"view:uiElement"===e||"element"===e||"view:element"===e):"uiElement"===e||"view:uiElement"===e||"element"===e||"view:element"===e||"node"===e||"view:node"===e}_insertChild(e,t){if(t&&(t instanceof dn||Array.from(t).length>0))throw new c.a("view-uielement-cannot-add",this)}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const e of this.getAttributeKeys())t.setAttribute(e,this.getAttribute(e));return t}}function jo(e){e.document.on("arrowKey",(t,i)=>function(e,t,i){if(t.keyCode==No.arrowright){const e=t.domTarget.ownerDocument.defaultView.getSelection(),n=1==e.rangeCount&&e.getRangeAt(0).collapsed;if(n||t.shiftKey){const t=e.focusNode,o=e.focusOffset,r=i.domPositionToView(t,o);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(e=>(e.item.is("uiElement")&&(s=!0),!(!e.item.is("uiElement")&&!e.item.is("attributeElement"))));if(s){const t=i.viewPositionToDom(a);n?e.collapse(t.parent,t.offset):e.extend(t.parent,t.offset)}}}}(0,i,e.domConverter),{priority:"low"})}function Bo(){return null}class Fo extends eo{constructor(e,t,i,n){super(e,t,i,n),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=Ho}is(e,t=null){return t?t===this.name&&("rawElement"===e||"view:rawElement"===e||"element"===e||"view:element"===e):"rawElement"===e||"view:rawElement"===e||e===this.name||e==="view:"+this.name||"element"===e||"view:element"===e||"node"===e||"view:node"===e}_insertChild(e,t){if(t&&(t instanceof dn||Array.from(t).length>0))throw new c.a("view-rawelement-cannot-add",[this,t])}}function Ho(){return null}class Uo{constructor(e,t){this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return"documentFragment"===e||"view:documentFragment"===e}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let i=0;const n=function(e,t){if("string"==typeof t)return[new hn(e,t)];Ji(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new hn(e,t):t instanceof un?new hn(e,t.data):t)}(this.document,t);for(const t of n)null!==t.parent&&t._remove(),t.parent=this,this._children.splice(e,0,t),e++,i++;return i}_removeChildren(e,t=1){this._fireChange("children",this);for(let i=e;i<e+t;i++)this._children[i].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}Ke(Uo,h);class Wo{constructor(e){this.document=e,this._cloneGroups=new Map}setSelection(e,t,i){this.document.selection._setTo(e,t,i)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Uo(this.document,e)}createText(e){return new hn(this.document,e)}createAttributeElement(e,t,i={}){const n=new xo(this.document,e,t);return"number"==typeof i.priority&&(n._priority=i.priority),i.id&&(n._id=i.id),n}createContainerElement(e,t,i={}){const n=new io(this.document,e,t);return void 0!==i.isAllowedInsideAttributeElement&&(n._isAllowedInsideAttributeElement=i.isAllowedInsideAttributeElement),n}createEditableElement(e,t){const i=new oo(this.document,e,t);return i._document=this.document,i}createEmptyElement(e,t,i={}){const n=new To(this.document,e,t);return void 0!==i.isAllowedInsideAttributeElement&&(n._isAllowedInsideAttributeElement=i.isAllowedInsideAttributeElement),n}createUIElement(e,t,i,n={}){const o=new Vo(this.document,e,t);return i&&(o.render=i),void 0!==n.isAllowedInsideAttributeElement&&(o._isAllowedInsideAttributeElement=n.isAllowedInsideAttributeElement),o}createRawElement(e,t,i,n={}){const o=new Fo(this.document,e,t);return o.render=i||(()=>{}),void 0!==n.isAllowedInsideAttributeElement&&(o._isAllowedInsideAttributeElement=n.isAllowedInsideAttributeElement),o}setAttribute(e,t,i){i._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,i){ct(e)&&void 0===i&&(i=t),i._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,i){i._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof co?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new c.a("view-writer-break-non-container-element",this.document);if(!t.parent)throw new c.a("view-writer-break-root",this.document);if(e.isAtStart)return co._createBefore(t);if(!e.isAtEnd){const i=t._clone(!1);this.insert(co._createAfter(t),i);const n=new lo(e,co._createAt(t,"end")),o=new co(i,0);this.move(n,o)}return co._createAfter(t)}mergeAttributes(e){const t=e.offset,i=e.parent;if(i.is("$text"))return e;if(i.is("attributeElement")&&0===i.childCount){const e=i.parent,t=i.index;return i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new co(e,t))}const n=i.getChild(t-1),o=i.getChild(t);if(!n||!o)return e;if(n.is("$text")&&o.is("$text"))return Ko(n,o);if(n.is("attributeElement")&&o.is("attributeElement")&&n.isSimilar(o)){const e=n.childCount;return n._appendChild(o.getChildren()),o._remove(),this._removeFromClonedElementsGroup(o),this.mergeAttributes(new co(n,e))}return e}mergeContainers(e){const t=e.nodeBefore,i=e.nodeAfter;if(!(t&&i&&t.is("containerElement")&&i.is("containerElement")))throw new c.a("view-writer-merge-containers-invalid-position",this.document);const n=t.getChild(t.childCount-1),o=n instanceof hn?co._createAt(n,"end"):co._createAt(t,"end");return this.move(lo._createIn(i),co._createAt(t,"end")),this.remove(lo._createOn(i)),o}insert(e,t){(function e(t,i){for(const n of t){if(!Qo.some(e=>n instanceof e))throw new c.a("view-writer-insert-invalid-node-type",i);n.is("$text")||e(n.getChildren(),i)}})(t=Ji(t)?[...t]:[t],this.document);const i=t.reduce((e,t)=>{const i=e[e.length-1],n=!(t.is("uiElement")&&t.isAllowedInsideAttributeElement);return i&&i.breakAttributes==n?i.nodes.push(t):e.push({breakAttributes:n,nodes:[t]}),e},[]);let n=null,o=e;for(const{nodes:e,breakAttributes:t}of i){const i=this._insertNodes(o,e,t);n||(n=i.start),o=i.end}return n?new lo(n,o):new lo(e)}remove(e){const t=e instanceof lo?e:lo._createOn(e);if(Zo(t,this.document),t.isCollapsed)return new Uo(this.document);const{start:i,end:n}=this._breakAttributesRange(t,!0),o=i.parent,r=n.offset-i.offset,s=o._removeChildren(i.offset,r);for(const e of s)this._removeFromClonedElementsGroup(e);const a=this.mergeAttributes(i);return t.start=a,t.end=a.clone(),new Uo(this.document,s)}clear(e,t){Zo(e,this.document);const i=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const n of i){const i=n.item;let o;if(i.is("element")&&t.isSimilar(i))o=lo._createOn(i);else if(!n.nextPosition.isAfter(e.start)&&i.is("$textProxy")){const e=i.getAncestors().find(e=>e.is("element")&&t.isSimilar(e));e&&(o=lo._createIn(e))}o&&(o.end.isAfter(e.end)&&(o.end=e.end),o.start.isBefore(e.start)&&(o.start=e.start),this.remove(o))}}move(e,t){let i;if(t.isAfter(e.end)){const n=(t=this._breakAttributes(t,!0)).parent,o=n.childCount;e=this._breakAttributesRange(e,!0),i=this.remove(e),t.offset+=n.childCount-o}else i=this.remove(e);return this.insert(t,i)}wrap(e,t){if(!(t instanceof xo))throw new c.a("view-writer-wrap-invalid-attribute",this.document);if(Zo(e,this.document),e.isCollapsed){let n=e.start;n.parent.is("element")&&(i=n.parent,!Array.from(i.getChildren()).some(e=>!e.is("uiElement")))&&(n=n.getLastMatchingPosition(e=>e.item.is("uiElement"))),n=this._wrapPosition(n,t);const o=this.document.selection;return o.isCollapsed&&o.getFirstPosition().isEqual(e.start)&&this.setSelection(n),new lo(n)}return this._wrapRange(e,t);var i}unwrap(e,t){if(!(t instanceof xo))throw new c.a("view-writer-unwrap-invalid-attribute",this.document);if(Zo(e,this.document),e.isCollapsed)return e;const{start:i,end:n}=this._breakAttributesRange(e,!0),o=i.parent,r=this._unwrapChildren(o,i.offset,n.offset,t),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new lo(s,a)}rename(e,t){const i=new io(this.document,e,t.getAttributes());return this.insert(co._createAfter(t),i),this.move(lo._createIn(t),co._createAt(i,0)),this.remove(lo._createOn(t)),i}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return co._createAt(e,t)}createPositionAfter(e){return co._createAfter(e)}createPositionBefore(e){return co._createBefore(e)}createRange(e,t){return new lo(e,t)}createRangeOn(e){return lo._createOn(e)}createRangeIn(e){return lo._createIn(e)}createSelection(e,t,i){return new go(e,t,i)}_insertNodes(e,t,i){let n,o;if(n=i?qo(e):e.parent.is("$text")?e.parent.parent:e.parent,!n)throw new c.a("view-writer-invalid-position-container",this.document);o=i?this._breakAttributes(e,!0):e.parent.is("$text")?Go(e):e;const r=n._insertChild(o.offset,t);for(const e of t)this._addToClonedElementsGroup(e);const s=o.getShiftedBy(r),a=this.mergeAttributes(o);a.isEqual(o)||s.offset--;const l=this.mergeAttributes(s);return new lo(a,l)}_wrapChildren(e,t,i,n){let o=t;const r=[];for(;o<i;){const t=e.getChild(o),i=t.is("$text"),s=t.is("attributeElement"),a=t.isAllowedInsideAttributeElement;if(s&&this._wrapAttributeElement(n,t))r.push(new co(e,o));else if(i||a||s&&$o(n,t)){const i=n._clone();t._remove(),i._appendChild(t),e._insertChild(o,i),this._addToClonedElementsGroup(i),r.push(new co(e,o))}else s&&this._wrapChildren(t,0,t.childCount,n);o++}let s=0;for(const e of r){if(e.offset-=s,e.offset==t)continue;this.mergeAttributes(e).isEqual(e)||(s++,i--)}return lo._createFromParentsAndOffsets(e,t,e,i)}_unwrapChildren(e,t,i,n){let o=t;const r=[];for(;o<i;){const t=e.getChild(o);if(t.is("attributeElement"))if(t.isSimilar(n)){const n=t.getChildren(),s=t.childCount;t._remove(),e._insertChild(o,n),this._removeFromClonedElementsGroup(t),r.push(new co(e,o),new co(e,o+s)),o+=s,i+=s-1}else this._unwrapAttributeElement(n,t)?(r.push(new co(e,o),new co(e,o+1)),o++):(this._unwrapChildren(t,0,t.childCount,n),o++);else o++}let s=0;for(const e of r){if(e.offset-=s,e.offset==t||e.offset==i)continue;this.mergeAttributes(e).isEqual(e)||(s++,i--)}return lo._createFromParentsAndOffsets(e,t,e,i)}_wrapRange(e,t){const{start:i,end:n}=this._breakAttributesRange(e,!0),o=i.parent,r=this._wrapChildren(o,i.offset,n.offset,t),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new lo(s,a)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Yo(e.clone());e.parent.is("$text")&&(e=Go(e));const i=this.createAttributeElement();i._priority=Number.POSITIVE_INFINITY,i.isSimilar=()=>!1,e.parent._insertChild(e.offset,i);const n=new lo(e,e.getShiftedBy(1));this.wrap(n,t);const o=new co(i.parent,i.index);i._remove();const r=o.nodeBefore,s=o.nodeAfter;return r instanceof hn&&s instanceof hn?Ko(r,s):Yo(o)}_wrapAttributeElement(e,t){if(!Xo(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const i of e.getAttributeKeys())if("class"!==i&&"style"!==i&&t.hasAttribute(i)&&t.getAttribute(i)!==e.getAttribute(i))return!1;for(const i of e.getStyleNames())if(t.hasStyle(i)&&t.getStyle(i)!==e.getStyle(i))return!1;for(const i of e.getAttributeKeys())"class"!==i&&"style"!==i&&(t.hasAttribute(i)||this.setAttribute(i,e.getAttribute(i),t));for(const i of e.getStyleNames())t.hasStyle(i)||this.setStyle(i,e.getStyle(i),t);for(const i of e.getClassNames())t.hasClass(i)||this.addClass(i,t);return!0}_unwrapAttributeElement(e,t){if(!Xo(e,t))return!1;if(e.name!==t.name||e.priority!==t.priority)return!1;for(const i of e.getAttributeKeys())if("class"!==i&&"style"!==i&&(!t.hasAttribute(i)||t.getAttribute(i)!==e.getAttribute(i)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const i of e.getStyleNames())if(!t.hasStyle(i)||t.getStyle(i)!==e.getStyle(i))return!1;for(const i of e.getAttributeKeys())"class"!==i&&"style"!==i&&this.removeAttribute(i,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const i=e.start,n=e.end;if(Zo(e,this.document),e.isCollapsed){const i=this._breakAttributes(e.start,t);return new lo(i,i)}const o=this._breakAttributes(n,t),r=o.parent.childCount,s=this._breakAttributes(i,t);return o.offset+=o.parent.childCount-r,new lo(s,o)}_breakAttributes(e,t=!1){const i=e.offset,n=e.parent;if(e.parent.is("emptyElement"))throw new c.a("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new c.a("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new c.a("view-writer-cannot-break-raw-element",this.document);if(!t&&n.is("$text")&&Jo(n.parent))return e.clone();if(Jo(n))return e.clone();if(n.is("$text"))return this._breakAttributes(Go(e),t);if(i==n.childCount){const e=new co(n.parent,n.index+1);return this._breakAttributes(e,t)}if(0===i){const e=new co(n.parent,n.index);return this._breakAttributes(e,t)}{const e=n.index+1,o=n._clone();n.parent._insertChild(e,o),this._addToClonedElementsGroup(o);const r=n.childCount-i,s=n._removeChildren(i,r);o._appendChild(s);const a=new co(n.parent,e);return this._breakAttributes(a,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const t of e.getChildren())this._addToClonedElementsGroup(t);const t=e.id;if(!t)return;let i=this._cloneGroups.get(t);i||(i=new Set,this._cloneGroups.set(t,i)),i.add(e),e._clonesGroup=i}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const t of e.getChildren())this._removeFromClonedElementsGroup(t);const t=e.id;if(!t)return;const i=this._cloneGroups.get(t);i&&i.delete(e)}}function qo(e){let t=e.parent;for(;!Jo(t);){if(!t)return;t=t.parent}return t}function $o(e,t){return e.priority<t.priority||!(e.priority>t.priority)&&e.getIdentity()<t.getIdentity()}function Yo(e){const t=e.nodeBefore;if(t&&t.is("$text"))return new co(t,t.data.length);const i=e.nodeAfter;return i&&i.is("$text")?new co(i,0):e}function Go(e){if(e.offset==e.parent.data.length)return new co(e.parent.parent,e.parent.index+1);if(0===e.offset)return new co(e.parent.parent,e.parent.index);const t=e.parent.data.slice(e.offset);return e.parent._data=e.parent.data.slice(0,e.offset),e.parent.parent._insertChild(e.parent.index+1,new hn(e.root.document,t)),new co(e.parent.parent,e.parent.index+1)}function Ko(e,t){const i=e.data.length;return e._data+=t.data,t._remove(),new co(e,i)}const Qo=[hn,xo,io,To,Fo,Vo];function Jo(e){return e&&(e.is("containerElement")||e.is("documentFragment"))}function Zo(e,t){const i=qo(e.start),n=qo(e.end);if(!i||!n||i!==n)throw new c.a("view-writer-invalid-range-container",t)}function Xo(e,t){return null===e.id&&null===t.id}function er(e){return"[object Text]"==Object.prototype.toString.call(e)}const tr=e=>e.createTextNode(" "),ir=e=>{const t=e.createElement("span");return t.dataset.ckeFiller=!0,t.innerHTML=" ",t},nr=e=>{const t=e.createElement("br");return t.dataset.ckeFiller=!0,t},or="⁠".repeat(7);function rr(e){return er(e)&&e.data.substr(0,7)===or}function sr(e){return 7==e.data.length&&rr(e)}function ar(e){return rr(e)?e.data.slice(7):e.data}function cr(e,t){if(t.keyCode==No.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(1==e.rangeCount&&e.getRangeAt(0).collapsed){const t=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;rr(t)&&i<=7&&e.collapse(t,0)}}}function lr(e,t,i,n=!1){i=i||function(e,t){return e===t},Array.isArray(e)||(e=Array.prototype.slice.call(e)),Array.isArray(t)||(t=Array.prototype.slice.call(t));const o=function(e,t,i){const n=dr(e,t,i);if(-1===n)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const o=hr(e,n),r=hr(t,n),s=dr(o,r,i),a=e.length-s,c=t.length-s;return{firstIndex:n,lastIndexOld:a,lastIndexNew:c}}(e,t,i);return n?function(e,t){const{firstIndex:i,lastIndexOld:n,lastIndexNew:o}=e;if(-1===i)return Array(t).fill("equal");let r=[];i>0&&(r=r.concat(Array(i).fill("equal")));o-i>0&&(r=r.concat(Array(o-i).fill("insert")));n-i>0&&(r=r.concat(Array(n-i).fill("delete")));o<t&&(r=r.concat(Array(t-o).fill("equal")));return r}(o,t.length):function(e,t){const i=[],{firstIndex:n,lastIndexOld:o,lastIndexNew:r}=t;r-n>0&&i.push({index:n,type:"insert",values:e.slice(n,r)});o-n>0&&i.push({index:n+(r-n),type:"delete",howMany:o-n});return i}(t,o)}function dr(e,t,i){for(let n=0;n<Math.max(e.length,t.length);n++)if(void 0===e[n]||void 0===t[n]||!i(e[n],t[n]))return n;return-1}function hr(e,t){return e.slice(t).reverse()}function ur(e,t,i){i=i||function(e,t){return e===t};const n=e.length,o=t.length;if(n>200||o>200||n+o>300)return ur.fastDiff(e,t,i,!0);let r,s;if(o<n){const i=e;e=t,t=i,r="delete",s="insert"}else r="insert",s="delete";const a=e.length,c=t.length,l=c-a,d={},h={};function u(n){const o=(void 0!==h[n-1]?h[n-1]:-1)+1,l=void 0!==h[n+1]?h[n+1]:-1,u=o>l?-1:1;d[n+u]&&(d[n]=d[n+u].slice(0)),d[n]||(d[n]=[]),d[n].push(o>l?r:s);let g=Math.max(o,l),m=g-n;for(;m<a&&g<c&&i(e[m],t[g]);)m++,g++,d[n].push("equal");return g}let g,m=0;do{for(g=-m;g<l;g++)h[g]=u(g);for(g=l+m;g>l;g--)h[g]=u(g);h[l]=u(l),m++}while(h[l]!==c);return d[l].slice(1)}function gr(e,t,i){e.insertBefore(i,e.childNodes[t]||null)}function mr(e){const t=e.parentNode;t&&t.removeChild(e)}function fr(e){if(e){if(e.defaultView)return e instanceof e.defaultView.Document;if(e.ownerDocument&&e.ownerDocument.defaultView)return e instanceof e.ownerDocument.defaultView.Node}return!1}ur.fastDiff=lr;i(15);class pr{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),Io.isBlink&&!Io.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if("text"===e)this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if("attributes"===e)this.markedAttributes.add(t);else{if("children"!==e)throw new c.a("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e;const t=!(Io.isBlink&&!Io.isAndroid)||!this.isSelecting;for(const e of this.markedChildren)this._updateChildrenMappings(e);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller));for(const e of this.markedAttributes)this._updateAttrs(e);for(const t of this.markedChildren)this._updateChildren(t,{inlineFillerPosition:e});for(const t of this.markedTexts)!this.markedChildren.has(t.parent)&&this.domConverter.mapViewToDom(t.parent)&&this._updateText(t,{inlineFillerPosition:e});if(t)if(e){const t=this.domConverter.viewPositionToDom(e),i=t.parent.ownerDocument;rr(t.parent)?this._inlineFiller=t.parent:this._inlineFiller=br(i,t.parent,t.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const i=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,t.ownerDocument,{withChildren:!1})),o=this._diffNodeLists(i,n),r=this._findReplaceActions(o,i,n);if(-1!==r.indexOf("replace")){const t={equal:0,insert:0,delete:0};for(const o of r)if("replace"===o){const o=t.equal+t.insert,r=t.equal+t.delete,s=e.getChild(o);!s||s.is("uiElement")||s.is("rawElement")||this._updateElementMappings(s,i[r]),mr(n[o]),t.equal++}else t[o]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?co._createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&er(t.parent)&&rr(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!rr(e))throw new c.a("view-renderer-filler-was-lost",this);sr(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,i=e.offset;if(!this.domConverter.mapViewToDom(t.root))return!1;if(!t.is("element"))return!1;if(!function(e){if("false"==e.getAttribute("contenteditable"))return!1;const t=e.findAncestor(e=>e.hasAttribute("contenteditable"));return!t||"true"==t.getAttribute("contenteditable")}(t))return!1;if(i===t.getFillerOffset())return!1;const n=e.nodeBefore,o=e.nodeAfter;return!(n instanceof hn||o instanceof hn)}_updateText(e,t){const i=this.domConverter.findCorrespondingDomText(e),n=this.domConverter.viewToDom(e,i.ownerDocument),o=i.data;let r=n.data;const s=t.inlineFillerPosition;if(s&&s.parent==e.parent&&s.offset==e.index&&(r=or+r),o!=r){const e=lr(o,r);for(const t of e)"insert"===t.type?i.insertData(t.index,t.values.join("")):i.deleteData(t.index,t.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const i=Array.from(t.attributes).map(e=>e.name),n=e.getAttributeKeys();for(const i of n){const n=e.getAttribute(i);this.domConverter.shouldRenderAttribute(i,n)?t.setAttribute(i,n):t.removeAttribute(i)}for(const n of i)"script"===e.name&&"data-ck-hidden"===n||e.hasAttribute(n)||t.removeAttribute(n)}_updateChildren(e,t){const i=this.domConverter.mapViewToDom(e);if(!i)return;const n=t.inlineFillerPosition,o=this.domConverter.mapViewToDom(e).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(e,i.ownerDocument,{bind:!0}));n&&n.parent===e&&br(i.ownerDocument,r,n.offset);const s=this._diffNodeLists(o,r);let a=0;const c=new Set;for(const e of s)"delete"===e?(c.add(o[a]),mr(o[a])):"equal"===e&&a++;a=0;for(const e of s)"insert"===e?(gr(i,a,r[a]),a++):"equal"===e&&(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const e of c)e.parentNode||this.domConverter.unbindDomElement(e)}_diffNodeLists(e,t){return ur(e=function(e,t){const i=Array.from(e);if(0==i.length||!t)return i;i[i.length-1]==t&&i.pop();return i}(e,this._fakeSelectionContainer),t,kr.bind(null,this.domConverter))}_findReplaceActions(e,t,i){if(-1===e.indexOf("insert")||-1===e.indexOf("delete"))return e;let n=[],o=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of e)"insert"===a?r.push(i[s.equal+s.insert]):"delete"===a?o.push(t[s.equal+s.delete]):(n=n.concat(ur(o,r,wr).map(e=>"equal"===e?"replace":e)),n.push("equal"),o=[],r=[]),s[a]++;return n.concat(ur(o,r,wr).map(e=>"equal"===e?"replace":e))}_markDescendantTextToSync(e){if(e)if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}_updateSelection(){if(Io.isBlink&&!Io.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(e){const t=e.createElement("div");return t.className="ck-fake-selection-container",Object.assign(t.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),t.textContent=" ",t}(t));const i=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(i,this.selection),!this._fakeSelectionNeedsUpdate(e))return;i.parentElement&&i.parentElement==e||e.appendChild(i),i.textContent=this.selection.fakeSelectionLabel||" ";const n=t.getSelection(),o=t.createRange();n.removeAllRanges(),o.selectNodeContents(i),n.addRange(o)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const i=this.domConverter.viewPositionToDom(this.selection.anchor),n=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(i.parent,i.offset),t.extend(n.parent,n.offset),Io.isGecko&&function(e,t){const i=e.parent;if(i.nodeType!=Node.ELEMENT_NODE||e.offset!=i.childNodes.length-1)return;const n=i.childNodes[e.offset];n&&"BR"==n.tagName&&t.addRange(t.getRangeAt(0))}(n,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,i=e.ownerDocument.getSelection();return!t||t.parentElement!==e||(i.anchorNode!==t&&!t.contains(i.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel)}_removeDomSelection(){for(const e of this.domDocuments){if(e.getSelection().rangeCount){const t=e.activeElement,i=this.domConverter.mapDomToView(t);t&&i&&e.getSelection().removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function br(e,t,i){const n=t instanceof Array?t:t.childNodes,o=n[i];if(er(o))return o.data=or+o.data,o;{const o=e.createTextNode(or);return Array.isArray(t)?n.splice(i,0,o):gr(t,i,o),o}}function wr(e,t){return fr(e)&&fr(t)&&!er(e)&&!er(t)&&e.nodeType!==Node.COMMENT_NODE&&t.nodeType!==Node.COMMENT_NODE&&e.tagName.toLowerCase()===t.tagName.toLowerCase()}function kr(e,t,i){return t===i||(er(t)&&er(i)?t.data===i.data:!(!e.isBlockFiller(t)||!e.isBlockFiller(i)))}Ke(pr,Ue);var _r={window:window,document:document};function vr(e){let t=0;for(;e.previousSibling;)e=e.previousSibling,t++;return t}function yr(e){const t=[];for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}const xr=nr(document),Ar=tr(document),Cr=ir(document);class Tr{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.experimentalRenderingMode=!1,this.blockFillerMode=t.blockFillerMode||("editing"===this.renderingMode?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new mn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new go(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const t of e.childNodes)this.unbindDomElement(t)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t){return!this.experimentalRenderingMode||"data"===this.renderingMode||!(e.toLowerCase().startsWith("on")||t.match(/(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i)||t.match(/data:(?!image\/(png|jpeg|gif|webp))/i))}setContentOf(e,t){if(!this.experimentalRenderingMode||"data"===this.renderingMode)return void(e.innerHTML=t);const i=(new DOMParser).parseFromString(t,"text/html"),n=i.createDocumentFragment(),o=i.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);const r=i.createTreeWalker(n,NodeFilter.SHOW_ELEMENT),s=[];let a;for(;a=r.nextNode();)s.push(a);for(const e of s){for(const t of e.getAttributeNames()){const i=e.getAttribute(t);this.shouldRenderAttribute(t,i)||e.removeAttribute(t)}const t=e.tagName.toLowerCase();this._shouldRenameElement(t)&&e.replaceWith(this._createReplacementDomElement(t,e))}for(;e.firstChild;)e.firstChild.remove();e.append(n)}viewToDom(e,t,i={}){if(e.is("$text")){const i=this._processDataFromViewText(e);return t.createTextNode(i)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=t.createDocumentFragment(),i.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n="$comment"===e.name?t.createComment(e.getCustomProperty("$rawContent")):e.render(t,this),i.bind&&this.bindElements(n,e),n;n=this._shouldRenameElement(e.name)?this._createReplacementDomElement(e.name):e.hasAttribute("xmlns")?t.createElementNS(e.getAttribute("xmlns"),e.name):t.createElement(e.name),e.is("rawElement")&&e.render(n,this),i.bind&&this.bindElements(n,e);for(const t of e.getAttributeKeys()){const i=e.getAttribute(t);this.shouldRenderAttribute(t,i)&&n.setAttribute(t,i)}}if(!1!==i.withChildren)for(const o of this.viewChildrenToDom(e,t,i))n.appendChild(o);return n}}*viewChildrenToDom(e,t,i={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren())n===o&&(yield this._getBlockFiller(t)),yield this.viewToDom(r,t,i),o++;n===o&&(yield this._getBlockFiller(t))}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),i=this.viewPositionToDom(e.end),n=document.createRange();return n.setStart(t.parent,t.offset),n.setEnd(i.parent,i.offset),n}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const i=this.findCorrespondingDomText(t);if(!i)return null;let n=e.offset;return rr(i)&&(n+=7),{parent:i,offset:n}}{let i,n,o;if(0===e.offset){if(i=this.mapViewToDom(t),!i)return null;o=i.childNodes[0]}else{const t=e.nodeBefore;if(n=t.is("$text")?this.findCorrespondingDomText(t):this.mapViewToDom(e.nodeBefore),!n)return null;i=n.parentNode,o=n.nextSibling}if(er(o)&&rr(o))return{parent:o,offset:7};return{parent:i,offset:n?vr(n)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const i=this.getHostViewElement(e);if(i)return i;if(this.isComment(e)&&t.skipComments)return null;if(er(e)){if(sr(e))return null;{const t=this._processDataFromDomText(e);return""===t?null:new hn(this.document,t)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let i;if(this.isDocumentFragment(e))i=new Uo(this.document),t.bind&&this.bindDocumentFragments(e,i);else{i=this._createViewElement(e,t),t.bind&&this.bindElements(e,i);const n=e.attributes;if(n)for(let e=n.length-1;e>=0;e--)i._setAttribute(n[e].name,n[e].value);if(this._isViewElementWithRawContent(i,t)||this.isComment(e)){const t=this.isComment(e)?e.data:e.innerHTML;return i._setCustomProperty("$rawContent",t),this._encounteredRawContentDomNodes.add(e),i}}if(!1!==t.withChildren)for(const n of this.domChildrenToView(e,t))i._appendChild(n);return i}}*domChildrenToView(e,t={}){for(let i=0;i<e.childNodes.length;i++){const n=e.childNodes[i],o=this.domToView(n,t);null!==o&&(yield o)}}domSelectionToView(e){if(1===e.rangeCount){let t=e.getRangeAt(0).startContainer;er(t)&&(t=t.parentNode);const i=this.fakeSelectionToView(t);if(i)return i}const t=this.isDomSelectionBackward(e),i=[];for(let t=0;t<e.rangeCount;t++){const n=e.getRangeAt(t),o=this.domRangeToView(n);o&&i.push(o)}return new go(i,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),i=this.domPositionToView(e.endContainer,e.endOffset);return t&&i?new lo(t,i):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,vr(e));const i=this.mapDomToView(e);if(i&&(i.is("uiElement")||i.is("rawElement")))return co._createBefore(i);if(er(e)){if(sr(e))return this.domPositionToView(e.parentNode,vr(e));const i=this.findCorrespondingViewText(e);let n=t;return i?(rr(e)&&(n-=7,n=n<0?0:n),new co(i,n)):null}if(0===t){const t=this.mapDomToView(e);if(t)return new co(t,0)}else{const i=e.childNodes[t-1],n=er(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(n&&n.parent)return new co(n.parent,n.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(sr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const i=e.previousSibling;if(i){if(!this.isElement(i))return null;const e=this.mapDomToView(i);if(e){return e.nextSibling instanceof hn?e.nextSibling:null}}else{const t=this.mapDomToView(e.parentNode);if(t){const e=t.getChild(0);return e instanceof hn?e:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:e,scrollY:i}=_r.window,n=[];Er(t,e=>{const{scrollLeft:t,scrollTop:i}=e;n.push([t,i])}),t.focus(),Er(t,e=>{const[t,i]=n.shift();e.scrollLeft=t,e.scrollTop=i}),_r.window.scrollTo(e,i)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(e){return e&&e.nodeType==Node.COMMENT_NODE}isBlockFiller(e){return"br"==this.blockFillerMode?e.isEqualNode(xr):!("BR"!==e.tagName||!Sr(e,this.blockElements)||1!==e.parentNode.childNodes.length)||(e.isEqualNode(Cr)||function(e,t){return e.isEqualNode(Ar)&&Sr(e,t)&&1===e.parentNode.childNodes.length}(e,this.blockElements))}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=document.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const i=t.collapsed;return t.detach(),i}getHostViewElement(e){const t=yr(e);for(t.pop();t.length;){const e=t.pop(),i=this._domToViewMapping.get(e);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(e){switch(this.blockFillerMode){case"nbsp":return tr(e);case"markedNbsp":return ir(e);case"br":return nr(e)}}_isDomSelectionPositionCorrect(e,t){if(er(e)&&rr(e)&&t<7)return!1;if(this.isElement(e)&&rr(e.childNodes[t]))return!1;const i=this.mapDomToView(e);return!i||!i.is("uiElement")&&!i.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(e=>this.preElements.includes(e.name)))return t;if(" "==t.charAt(0)){const i=this._getTouchingInlineViewNode(e,!1);!(i&&i.is("$textProxy")&&this._nodeEndsWithSpace(i))&&i||(t=" "+t.substr(1))}if(" "==t.charAt(t.length-1)){const i=this._getTouchingInlineViewNode(e,!0),n=i&&i.is("$textProxy")&&" "==i.data.charAt(0);" "!=t.charAt(t.length-2)&&i&&!n||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(e=>this.preElements.includes(e.name)))return!1;const t=this._processDataFromViewText(e);return" "==t.charAt(t.length-1)}_processDataFromDomText(e){let t=e.data;if(function(e,t){return yr(e).some(e=>e.tagName&&t.includes(e.tagName.toLowerCase()))}(e,this.preElements))return ar(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const i=this._getTouchingInlineDomNode(e,!1),n=this._getTouchingInlineDomNode(e,!0),o=this._checkShouldLeftTrimDomText(e,i),r=this._checkShouldRightTrimDomText(e,n);o&&(t=t.replace(/^ /,"")),r&&(t=t.replace(/ $/,"")),t=ar(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const s=n&&this.isElement(n)&&"BR"!=n.tagName,a=n&&er(n)&&" "==n.data.charAt(0);return(/( |\u00A0)\u00A0$/.test(t)||!n||s||a)&&(t=t.replace(/\u00A0$/," ")),(o||i&&this.isElement(i)&&"BR"!=i.tagName)&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?"BR"===t.tagName:!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!rr(e)}_getTouchingInlineViewNode(e,t){const i=new ao({startPosition:t?co._createAfter(e):co._createBefore(e),direction:t?"forward":"backward"});for(const e of i){if(e.item.is("element")&&this.inlineObjectElements.includes(e.item.name))return e.item;if(e.item.is("containerElement"))return null;if(e.item.is("element","br"))return null;if(e.item.is("$textProxy"))return e.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const i=t?"firstChild":"lastChild",n=t?"nextSibling":"previousSibling";let o=!0;do{if(!o&&e[i]?e=e[i]:e[n]?(e=e[n],o=!1):(e=e.parentNode,o=!0),!e||this._isBlockElement(e))return null}while(!er(e)&&"BR"!=e.tagName&&!this._isInlineObjectElement(e));return e}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(this.isComment(e))return new Vo(this.document,"$comment");const i=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new eo(this.document,i)}_isViewElementWithRawContent(e,t){return!1!==t.withChildren&&this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){return this.experimentalRenderingMode&&"editing"==this.renderingMode&&"script"==e}_createReplacementDomElement(e,t=null){const i=document.createElement("span");if(i.setAttribute("data-ck-hidden",e),t){for(;t.firstChild;)i.appendChild(t.firstChild);for(const e of t.getAttributeNames())i.setAttribute(e,t.getAttribute(e))}return i}}function Er(e,t){for(;e&&e!=_r.document;)t(e),e=e.parentNode}function Sr(e,t){const i=e.parentNode;return i&&i.tagName&&t.includes(i.tagName.toLowerCase())}function Ir(e){const t=Object.prototype.toString.apply(e);return"[object Window]"==t||"[object global]"==t}var Pr=ze({},h,{listenTo(e,...t){if(fr(e)||Ir(e)){const i=this._getProxyEmitter(e)||new Mr(e);i.attach(...t),e=i}h.listenTo.call(this,e,...t)},stopListening(e,t,i){if(fr(e)||Ir(e)){const t=this._getProxyEmitter(e);if(!t)return;e=t}h.stopListening.call(this,e,t,i),e instanceof Mr&&e.detach(t)},_getProxyEmitter(e){return t=this,i=Nr(e),t[l]&&t[l][i]?t[l][i].emitter:null;var t,i}});class Mr{constructor(e){u(this,Nr(e)),this._domNode=e}}function Nr(e){return e["data-ck-expando"]||(e["data-ck-expando"]=s())}ze(Mr.prototype,h,{attach(e,t,i={}){if(this._domListeners&&this._domListeners[e])return;const n={capture:!!i.useCapture,passive:!!i.usePassive},o=this._createDomListener(e,n);this._domNode.addEventListener(e,o,n),this._domListeners||(this._domListeners={}),this._domListeners[e]=o},detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()},_createDomListener(e,t){const i=t=>{this.fire(e,t)};return i.removeListener=()=>{this._domNode.removeEventListener(e,i,t),delete this._domListeners[e]},i}});class Rr{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&3===e.nodeType&&(e=e.parentNode),!(!e||1!==e.nodeType)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}Ke(Rr,Pr);var Or=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var Dr=function(e){return this.__data__.has(e)};function zr(e){var t=-1,i=null==e?0:e.length;for(this.__data__=new Ft;++t<i;)this.add(e[t])}zr.prototype.add=zr.prototype.push=Or,zr.prototype.has=Dr;var Lr=zr;var Vr=function(e,t){for(var i=-1,n=null==e?0:e.length;++i<n;)if(t(e[i],i,e))return!0;return!1};var jr=function(e,t){return e.has(t)};var Br=function(e,t,i,n,o,r){var s=1&i,a=e.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(e),d=r.get(t);if(l&&d)return l==t&&d==e;var h=-1,u=!0,g=2&i?new Lr:void 0;for(r.set(e,t),r.set(t,e);++h<a;){var m=e[h],f=t[h];if(n)var p=s?n(f,m,h,t,e,r):n(m,f,h,e,t,r);if(void 0!==p){if(p)continue;u=!1;break}if(g){if(!Vr(t,(function(e,t){if(!jr(g,t)&&(m===e||o(m,e,i,n,r)))return g.push(t)}))){u=!1;break}}else if(m!==f&&!o(m,f,i,n,r)){u=!1;break}}return r.delete(e),r.delete(t),u};var Fr=function(e){var t=-1,i=Array(e.size);return e.forEach((function(e,n){i[++t]=[n,e]})),i};var Hr=function(e){var t=-1,i=Array(e.size);return e.forEach((function(e){i[++t]=e})),i},Ur=_?_.prototype:void 0,Wr=Ur?Ur.valueOf:void 0;var qr=function(e,t,i,n,o,r,s){switch(i){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!r(new Ci(e),new Ci(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return G(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var a=Fr;case"[object Set]":var c=1&n;if(a||(a=Hr),e.size!=t.size&&!c)return!1;var l=s.get(e);if(l)return l==t;n|=2,s.set(e,t);var d=Br(a(e),a(t),n,o,r,s);return s.delete(e),d;case"[object Symbol]":if(Wr)return Wr.call(e)==Wr.call(t)}return!1},$r=Object.prototype.hasOwnProperty;var Yr=function(e,t,i,n,o,r){var s=1&i,a=di(e),c=a.length;if(c!=di(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:$r.call(t,d)))return!1}var h=r.get(e),u=r.get(t);if(h&&u)return h==t&&u==e;var g=!0;r.set(e,t),r.set(t,e);for(var m=s;++l<c;){var f=e[d=a[l]],p=t[d];if(n)var b=s?n(p,f,d,t,e,r):n(f,p,d,e,t,r);if(!(void 0===b?f===p||o(f,p,i,n,r):b)){g=!1;break}m||(m="constructor"==d)}if(g&&!m){var w=e.constructor,k=t.constructor;w==k||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof k&&k instanceof k||(g=!1)}return r.delete(e),r.delete(t),g},Gr=Object.prototype.hasOwnProperty;var Kr=function(e,t,i,n,o,r){var s=_e(e),a=_e(t),c=s?"[object Array]":yi(e),l=a?"[object Array]":yi(t),d="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),h="[object Object]"==(l="[object Arguments]"==l?"[object Object]":l),u=c==l;if(u&&Object(ve.a)(e)){if(!Object(ve.a)(t))return!1;s=!0,d=!1}if(u&&!d)return r||(r=new Wt),s||Ee(e)?Br(e,t,i,n,o,r):qr(e,t,c,i,n,o,r);if(!(1&i)){var g=d&&Gr.call(e,"__wrapped__"),m=h&&Gr.call(t,"__wrapped__");if(g||m){var f=g?e.value():e,p=m?t.value():t;return r||(r=new Wt),o(f,p,i,n,r)}}return!!u&&(r||(r=new Wt),Yr(e,t,i,n,o,r))};var Qr=function e(t,i,n,o,r){return t===i||(null==t||null==i||!me(t)&&!me(i)?t!=t&&i!=i:Kr(t,i,n,o,e,r))};var Jr=function(e,t,i){var n=(i="function"==typeof i?i:void 0)?i(e,t):void 0;return void 0===n?Qr(e,t,void 0,i):!!n};class Zr extends Rr{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(0===e.length)return;const t=this.domConverter,i=new Map,n=new Set;for(const i of e)if("childList"===i.type){const e=t.mapDomToView(i.target);if(e&&(e.is("uiElement")||e.is("rawElement")))continue;e&&!this._isBogusBrMutation(i)&&n.add(e)}for(const o of e){const e=t.mapDomToView(o.target);if((!e||!e.is("uiElement")&&!e.is("rawElement"))&&"characterData"===o.type){const e=t.findCorrespondingViewText(o.target);e&&!n.has(e.parent)?i.set(e,{type:"text",oldText:e.data,newText:ar(o.target),node:e}):!e&&rr(o.target)&&n.add(t.mapDomToView(o.target.parentNode))}}const o=[];for(const e of i.values())this.renderer.markToSync("text",e.node),o.push(e);for(const e of n){const i=t.mapViewToDom(e),n=Array.from(e.getChildren()),r=Array.from(t.domChildrenToView(i,{withChildren:!1}));Jr(n,r,a)||(this.renderer.markToSync("children",e),o.push({type:"children",oldChildren:n,newChildren:r,node:e}))}const r=e[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const e=t.domPositionToView(r.anchorNode,r.anchorOffset),i=t.domPositionToView(r.focusNode,r.focusOffset);e&&i&&(s=new go(e),s.setFocus(i))}function a(e,t){if(!Array.isArray(e))return e===t||!(!e.is("$text")||!t.is("$text"))&&e.data===t.data}o.length&&(this.document.fire("mutations",o,s),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return null===e.nextSibling&&0===e.removedNodes.length&&1==e.addedNodes.length&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}class Xr{constructor(e,t,i){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,ze(this,i)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class es extends Rr{constructor(e){super(e),this.useCapture=!1}observe(e){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(e,t)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(t.target)&&this.onDomEvent(t)},{useCapture:this.useCapture})})}fire(e,t,i){this.isEnabled&&this.document.fire(e,new Xr(this.view,t,i))}}class ts extends es{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Oo(this)}})}}var is=function(){return k.a.Date.now()},ns=/\s/;var os=function(e){for(var t=e.length;t--&&ns.test(e.charAt(t)););return t},rs=/^\s+/;var ss=function(e){return e?e.slice(0,os(e)+1).replace(rs,""):e},as=/^[-+]0x[0-9a-f]+$/i,cs=/^0b[01]+$/i,ls=/^0o[0-7]+$/i,ds=parseInt;var hs=function(e){if("number"==typeof e)return e;if(bn(e))return NaN;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ss(e);var i=cs.test(e);return i||ls.test(e)?ds(e.slice(2),i?2:8):as.test(e)?NaN:+e},us=Math.max,gs=Math.min;var ms=function(e,t,i){var n,o,r,s,a,c,l=0,d=!1,h=!1,u=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var i=n,r=o;return n=o=void 0,l=t,s=e.apply(r,i)}function m(e){return l=e,a=setTimeout(p,t),d?g(e):s}function f(e){var i=e-c;return void 0===c||i>=t||i<0||h&&e-l>=r}function p(){var e=is();if(f(e))return b(e);a=setTimeout(p,function(e){var i=t-(e-c);return h?gs(i,r-(e-l)):i}(e))}function b(e){return a=void 0,u&&n?g(e):(n=o=void 0,s)}function k(){var e=is(),i=f(e);if(n=arguments,o=this,c=e,i){if(void 0===a)return m(c);if(h)return clearTimeout(a),a=setTimeout(p,t),g(c)}return void 0===a&&(a=setTimeout(p,t)),s}return t=hs(t)||0,w(i)&&(d=!!i.leading,r=(h="maxWait"in i)?us(hs(i.maxWait)||0,t):r,u="trailing"in i?!!i.trailing:u),k.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=c=o=a=void 0},k.flush=function(){return void 0===a?s:b(is())},k};class fs extends Rr{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=ms(e=>this.document.fire("selectionChangeDone",e),200)}observe(){const e=this.document;e.on("arrowKey",(t,i)=>{e.selection.isFake&&this.isEnabled&&i.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,i)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(i.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,i=new go(t.getRanges(),{backward:t.isBackward,fake:!1});e!=No.arrowleft&&e!=No.arrowup||i.setTo(i.getFirstPosition()),e!=No.arrowright&&e!=No.arrowdown||i.setTo(i.getLastPosition());const n={oldSelection:t,newSelection:i,domSelection:null};this.document.fire("selectionChange",n),this._fireSelectionChangeDoneDebounced(n)}}class ps extends Rr{constructor(e){super(e),this.mutationObserver=e.getObserver(Zr),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ms(e=>this.document.fire("selectionChangeDone",e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=ms(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,i=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",i,{priority:"highest"}),this.listenTo(e,"keyup",i,{priority:"highest"}),this._documents.has(t)||(this.listenTo(t,"mouseup",i,{priority:"highest"}),this.listenTo(t,"selectionchange",(e,i)=>{this._handleSelectionChange(i,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const i=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(i.anchorNode))return;this.mutationObserver.flush();const n=this.domConverter.domSelectionToView(i);if(0!=n.rangeCount){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(n)&&this.domConverter.isDomSelectionCorrect(i)||++this._loopbackCounter>60))if(this.selection.isSimilar(n))this.view.forceRender();else{const e={oldSelection:this.selection,newSelection:n,domSelection:i};this.document.fire("selectionChange",e),this._fireSelectionChangeDoneDebounced(e)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class bs extends es{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(i,n)=>{const o=t.selection.editableElement;null!==o&&o!==n.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class ws extends es{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class ks extends es{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}class _s{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}var vs=function(e){return"string"==typeof e||!_e(e)&&me(e)&&"[object String]"==I(e)};function ys(e){return"[object Range]"==Object.prototype.toString.apply(e)}function xs(e){const t=e.ownerDocument.defaultView.getComputedStyle(e);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}const As=["top","right","bottom","left","width","height"];class Cs{constructor(e){const t=ys(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Yi(e)||t)if(t){const t=Cs.getDomRangeRects(e);Ts(this,Cs.getBoundingRect(t))}else Ts(this,e.getBoundingClientRect());else if(Ir(e)){const{innerWidth:t,innerHeight:i}=e;Ts(this,{top:0,right:t,bottom:i,left:0,width:t,height:i})}else Ts(this,e)}clone(){return new Cs(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left)};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Cs(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Es(e)){let i=e.parentNode||e.commonAncestorContainer;for(;i&&!Es(i);){const e=new Cs(i),n=t.getIntersection(e);if(!n)return null;n.getArea()<t.getArea()&&(t=n),i=i.parentNode}}return t}isEqual(e){for(const t of As)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,i,n;if(Ir(e))t=e.innerWidth-e.document.documentElement.clientWidth,i=e.innerHeight-e.document.documentElement.clientHeight,n=e.getComputedStyle(e.document.documentElement).direction;else{const o=xs(this._source);t=e.offsetWidth-e.clientWidth-o.left-o.right,i=e.offsetHeight-e.clientHeight-o.top-o.bottom,n=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=o.left,this.top+=o.top,this.right-=o.right,this.bottom-=o.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,"ltr"===n?this.right-=t:this.left+=t,this.height-=i,this.bottom-=i,this}static getDomRangeRects(e){const t=[],i=Array.from(e.getClientRects());if(i.length)for(const e of i)t.push(new Cs(e));else{let i=e.startContainer;er(i)&&(i=i.parentNode);const n=new Cs(i.getBoundingClientRect());n.right=n.left,n.width=0,t.push(n)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY};let i=0;for(const n of e)i++,t.left=Math.min(t.left,n.left),t.top=Math.min(t.top,n.top),t.right=Math.max(t.right,n.right),t.bottom=Math.max(t.bottom,n.bottom);return 0==i?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Cs(t))}}function Ts(e,t){for(const i of As)e[i]=t[i]}function Es(e){return!!Yi(e)&&e===e.ownerDocument.body}class Ss{constructor(e,t){Ss._observerInstance||Ss._createObserver(),this._element=e,this._callback=t,Ss._addElementCallback(e,t),Ss._observerInstance.observe(e)}destroy(){Ss._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Ss._elementCallbacks||(Ss._elementCallbacks=new Map);let i=Ss._elementCallbacks.get(e);i||(i=new Set,Ss._elementCallbacks.set(e,i)),i.add(t)}static _deleteElementCallback(e,t){const i=Ss._getElementCallbacks(e);i&&(i.delete(t),i.size||(Ss._elementCallbacks.delete(e),Ss._observerInstance.unobserve(e))),Ss._elementCallbacks&&!Ss._elementCallbacks.size&&(Ss._observerInstance=null,Ss._elementCallbacks=null)}static _getElementCallbacks(e){return Ss._elementCallbacks?Ss._elementCallbacks.get(e):null}static _createObserver(){let e;e="function"==typeof _r.window.ResizeObserver?_r.window.ResizeObserver:Is,Ss._observerInstance=new e(e=>{for(const t of e){const e=Ss._getElementCallbacks(t.target);if(e)for(const i of e)i(t)}})}}Ss._observerInstance=null,Ss._elementCallbacks=null;class Is{constructor(e){this._callback=e,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(e){this._elements.add(e),this._checkElementRectsAndExecuteCallback(),1===this._elements.size&&this._startPeriodicCheck()}unobserve(e){this._elements.delete(e),this._previousRects.delete(e),this._elements.size||this._stopPeriodicCheck()}_startPeriodicCheck(){const e=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(e,100)};this.listenTo(_r.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),this._periodicCheckTimeout=setTimeout(e,100)}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){const e=[];for(const t of this._elements)this._hasRectChanged(t)&&e.push({target:t,contentRect:this._previousRects.get(t)});e.length&&this._callback(e)}_hasRectChanged(e){if(!e.ownerDocument.body.contains(e))return!1;const t=new Cs(e),i=this._previousRects.get(e),n=!i||!i.isEqual(t);return this._previousRects.set(e,t),n}}function Ps(e){return t=>t+e}function Ms(e){const t=e.next();return t.done?null:t.value}Ke(Is,Pr);class Ns{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new c.a("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(e),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}Ke(Ns,Pr),Ke(Ns,Ue);class Rs{constructor(){this._listener=Object.create(Pr)}listenTo(e){this._listener.listenTo(e,"keydown",(e,t)=>{this._listener.fire("_keydown:"+Oo(t),t)})}set(e,t,i={}){const n=Do(e),o=i.priority;this._listener.listenTo(this._listener,"_keydown:"+n,(e,i)=>{t(i,()=>{i.preventDefault(),i.stopPropagation(),e.stop()}),e.return=!0},{priority:o})}press(e){return!!this._listener.fire("_keydown:"+Oo(e),e)}destroy(){this._listener.stopListening()}}class Os extends Rr{constructor(e){super(e),this.document.on("keydown",(e,t)=>{if(this.isEnabled&&((i=t.keyCode)==No.arrowright||i==No.arrowleft||i==No.arrowup||i==No.arrowdown)){const i=new fo(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(i,t),i.stop.called&&e.stop()}var i})}observe(){}}function Ds({target:e,viewportOffset:t=0}){const i=Hs(e);let n=i,o=null;for(;n;){let r;r=Us(n==i?e:o),Ls(r,()=>Ws(e,n));const s=Ws(e,n);if(zs(n,s,t),n.parent!=n){if(o=n.frameElement,n=n.parent,!o)return}else n=null}}function zs(e,t,i){const n=t.clone().moveBy(0,i),o=t.clone().moveBy(0,-i),r=new Cs(e).excludeScrollbarsAndBorders();if(![o,n].every(e=>r.contains(e))){let{scrollX:s,scrollY:a}=e;js(o,r)?a-=r.top-t.top+i:Vs(n,r)&&(a+=t.bottom-r.bottom+i),Bs(t,r)?s-=r.left-t.left+i:Fs(t,r)&&(s+=t.right-r.right+i),e.scrollTo(s,a)}}function Ls(e,t){const i=Hs(e);let n,o;for(;e!=i.document.body;)o=t(),n=new Cs(e).excludeScrollbarsAndBorders(),n.contains(o)||(js(o,n)?e.scrollTop-=n.top-o.top:Vs(o,n)&&(e.scrollTop+=o.bottom-n.bottom),Bs(o,n)?e.scrollLeft-=n.left-o.left:Fs(o,n)&&(e.scrollLeft+=o.right-n.right)),e=e.parentNode}function Vs(e,t){return e.bottom>t.bottom}function js(e,t){return e.top<t.top}function Bs(e,t){return e.left<t.left}function Fs(e,t){return e.right>t.right}function Hs(e){return ys(e)?e.startContainer.ownerDocument.defaultView:e.ownerDocument.defaultView}function Us(e){if(ys(e)){let t=e.commonAncestorContainer;return er(t)&&(t=t.parentNode),t}return e.parentNode}function Ws(e,t){const i=Hs(e),n=new Cs(e);if(i===t)return n;{let e=i;for(;e!=t;){const t=e.frameElement,i=new Cs(t).excludeScrollbarsAndBorders();n.moveBy(i.left,i.top),e=e.parent}}return n}Object.assign({},{scrollViewportToShowTarget:Ds,scrollAncestorsToShowTarget:function(e){Ls(Us(e),()=>new Cs(e))}});class qs{constructor(e){this.document=new yo(e),this.domConverter=new Tr(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new pr(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Wo(this.document),this.addObserver(Zr),this.addObserver(ps),this.addObserver(bs),this.addObserver(ts),this.addObserver(fs),this.addObserver(ws),this.addObserver(Os),Io.isAndroid&&this.addObserver(ks),this.document.on("arrowKey",cr,{priority:"low"}),jo(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const i=this.document.getRoot(t);i._name=e.tagName.toLowerCase();const n={};for(const{name:t,value:o}of Array.from(e.attributes))n[t]=o,"class"===t?this._writer.addClass(o.split(" "),i):this._writer.setAttribute(t,o,i);this._initialDomRootAttributes.set(e,n);const o=()=>{this._writer.setAttribute("contenteditable",!i.isReadOnly,i),i.isReadOnly?this._writer.addClass("ck-read-only",i):this._writer.removeClass("ck-read-only",i)};o(),this.domRoots.set(t,e),this.domConverter.bindElements(e,i),this._renderer.markToSync("children",i),this._renderer.markToSync("attributes",i),this._renderer.domDocuments.add(e.ownerDocument),i.on("change:children",(e,t)=>this._renderer.markToSync("children",t)),i.on("change:attributes",(e,t)=>this._renderer.markToSync("attributes",t)),i.on("change:text",(e,t)=>this._renderer.markToSync("text",t)),i.on("change:isReadOnly",()=>this.change(o)),i.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const i of this._observers.values())i.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:e})=>t.removeAttribute(e));const i=this._initialDomRootAttributes.get(t);for(const e in i)t.setAttribute(e,i[e]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[e,i]of this.domRoots)t.observe(i,e);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&Ds({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new c.a("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(e){c.a.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return co._createAt(e,t)}createPositionAfter(e){return co._createAfter(e)}createPositionBefore(e){return co._createBefore(e)}createRange(e,t){return new lo(e,t)}createRangeOn(e){return lo._createOn(e)}createRangeIn(e){return lo._createIn(e)}createSelection(e,t,i){return new go(e,t,i)}_disableRendering(e){this._renderingDisabled=e,0==e&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}Ke(qs,Ue);class $s{constructor(e){this.parent=null,this._attrs=gn(e)}get index(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildIndex(this)))throw new c.a("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if(null===(e=this.parent.getChildStartOffset(this)))throw new c.a("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return null!==e&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return null!==e&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this:this.parent;for(;i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}getCommonAncestor(e,t={}){const i=this.getAncestors(t),n=e.getAncestors(t);let o=0;for(;i[o]==n[o]&&i[o];)o++;return 0===o?null:i[o-1]}isBefore(e){if(this==e)return!1;if(this.root!==e.root)return!1;const t=this.getPath(),i=e.getPath(),n=cn(t,i);switch(n){case"prefix":return!0;case"extension":return!1;default:return t[n]<i[n]}}isAfter(e){return this!=e&&(this.root===e.root&&!this.isBefore(e))}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((e,t)=>(e[t[0]]=t[1],e),{})),e}is(e){return"node"===e||"model:node"===e}_clone(){return new $s(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=gn(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}class Ys extends $s{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return"$text"===e||"model:$text"===e||"text"===e||"model:text"===e||"node"===e||"model:node"===e}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new Ys(this.data,this.getAttributes())}static fromJSON(e){return new Ys(e.data,e.attributes)}}class Gs{constructor(e,t,i){if(this.textNode=e,t<0||t>e.offsetSize)throw new c.a("model-textproxy-wrong-offsetintext",this);if(i<0||t+i>e.offsetSize)throw new c.a("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+i),this.offsetInText=t}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(e){return"$textProxy"===e||"model:$textProxy"===e||"textProxy"===e||"model:textProxy"===e}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let i=e.includeSelf?this:this.parent;for(;i;)t[e.parentFirst?"push":"unshift"](i),i=i.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Ks{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return-1==t?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return null===t?null:this._nodes.slice(0,t).reduce((e,t)=>e+t.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new c.a("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const i of this._nodes){if(e>=t&&e<t+i.offsetSize)return this.getNodeIndex(i);t+=i.offsetSize}if(t!=e)throw new c.a("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const e of t)if(!(e instanceof $s))throw new c.a("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Qs extends $s{constructor(e,t,i){super(t),this.name=e,this._children=new Ks,i&&this._insertChild(0,i)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(e,t=null){return t?t===this.name&&("element"===e||"model:element"===e):"element"===e||"model:element"===e||"node"===e||"model:node"===e}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const i of e)t=t.getChild(t.offsetToIndex(i));return t}findAncestor(e,t={includeSelf:!1}){let i=t.includeSelf?this:this.parent;for(;i;){if(i.name===e)return i;i=i.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(e=>e._clone(!0)):null;return new Qs(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const i=function(e){if("string"==typeof e)return[new Ys(e)];Ji(e)||(e=[e]);return Array.from(e).map(e=>"string"==typeof e?new Ys(e):e instanceof Gs?new Ys(e.data,e.getAttributes()):e)}(t);for(const e of i)null!==e.parent&&e._remove(),e.parent=this;this._children._insertNodes(e,i)}_removeChildren(e,t=1){const i=this._children._removeNodes(e,t);for(const e of i)e.parent=null;return i}static fromJSON(e){let t=null;if(e.children){t=[];for(const i of e.children)i.name?t.push(Qs.fromJSON(i)):t.push(Ys.fromJSON(i))}return new Qs(e.name,e.attributes,t)}}class Js{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new c.a("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if("forward"!=t&&"backward"!=t)throw new c.a("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=Xs._createAt(this.boundaries["backward"==this.direction?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,i,n,o;do{n=this.position,o=this._visitedParent,({done:t,value:i}=this.next())}while(!t&&e(i));t||(this.position=n,this._visitedParent=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),i=this._visitedParent;if(null===i.parent&&t.offset===i.maxOffset)return{done:!0};if(i===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const n=t.parent,o=ea(t,n),r=o||ta(t,n,o);if(r instanceof Qs)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=r),this.position=t,Zs("elementStart",r,e,t,1);if(r instanceof Ys){let n;if(this.singleCharacters)n=1;else{let e=r.endOffset;this._boundaryEndParent==i&&this.boundaries.end.offset<e&&(e=this.boundaries.end.offset),n=e-t.offset}const o=t.offset-r.startOffset,s=new Gs(r,o,n);return t.offset+=n,this.position=t,Zs("text",s,e,t,n)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=i.parent,this.ignoreElementEnd?this._next():Zs("elementEnd",i,e,t)}_previous(){const e=this.position,t=this.position.clone(),i=this._visitedParent;if(null===i.parent&&0===t.offset)return{done:!0};if(i==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const n=t.parent,o=ea(t,n),r=o||ia(t,n,o);if(r instanceof Qs)return t.offset--,this.shallow?(this.position=t,Zs("elementStart",r,e,t,1)):(t.path.push(r.maxOffset),this.position=t,this._visitedParent=r,this.ignoreElementEnd?this._previous():Zs("elementEnd",r,e,t));if(r instanceof Ys){let n;if(this.singleCharacters)n=1;else{let e=r.startOffset;this._boundaryStartParent==i&&this.boundaries.start.offset>e&&(e=this.boundaries.start.offset),n=t.offset-e}const o=t.offset-r.startOffset,s=new Gs(r,o-n,n);return t.offset-=n,this.position=t,Zs("text",s,e,t,n)}return t.path.pop(),this.position=t,this._visitedParent=i.parent,Zs("elementStart",i,e,t,1)}}function Zs(e,t,i,n,o){return{done:!1,value:{type:e,item:t,previousPosition:i,nextPosition:n,length:o}}}class Xs{constructor(e,t,i="toNone"){if(!e.is("element")&&!e.is("documentFragment"))throw new c.a("model-position-root-invalid",e);if(!(t instanceof Array)||0===t.length)throw new c.a("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=i}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new c.a("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new c.a("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return ea(this,this.parent)}get nodeAfter(){const e=this.parent;return ta(this,e,ea(this,e))}get nodeBefore(){const e=this.parent;return ia(this,e,ea(this,e))}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=cn(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const i=new Js(t);return i.skip(e),i.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=cn(this.path,e.path),i="string"==typeof t?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,i)}getCommonAncestor(e){const t=this.getAncestors(),i=e.getAncestors();let n=0;for(;t[n]==i[n]&&t[n];)n++;return 0===n?null:t[n-1]}getShiftedBy(e){const t=this.clone(),i=t.offset+e;return t.offset=i<0?0:i,t}isAfter(e){return"after"==this.compareWith(e)}isBefore(e){return"before"==this.compareWith(e)}isEqual(e){return"same"==this.compareWith(e)}isTouching(e){let t=null,i=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=Xs._createAt(this),i=Xs._createAt(e);break;case"after":t=Xs._createAt(e),i=Xs._createAt(this);break;default:return!1}let n=t.parent;for(;t.path.length+i.path.length;){if(t.isEqual(i))return!0;if(t.path.length>i.path.length){if(t.offset!==n.maxOffset)return!1;t.path=t.path.slice(0,-1),n=n.parent,t.offset++}else{if(0!==i.offset)return!1;i.path=i.path.slice(0,-1)}}}is(e){return"position"===e||"model:position"===e}hasSameParentAs(e){if(this.root!==e.root)return!1;return"same"==cn(this.getParentPath(),e.getParentPath())}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=Xs._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&"toNext"==this.stickiness?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let i;return t.containsPosition(this)||t.start.isEqual(this)?(i=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(i=i._getTransformedByDeletion(e.deletionPosition,1))):i=this.isEqual(e.deletionPosition)?Xs._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),i}_getTransformedByDeletion(e,t){const i=Xs._createAt(this);if(this.root!=e.root)return i;if("same"==cn(e.getParentPath(),this.getParentPath())){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;i.offset-=t}}else if("prefix"==cn(e.getParentPath(),this.getParentPath())){const n=e.path.length-1;if(e.offset<=this.path[n]){if(e.offset+t>this.path[n])return null;i.path[n]-=t}}return i}_getTransformedByInsertion(e,t){const i=Xs._createAt(this);if(this.root!=e.root)return i;if("same"==cn(e.getParentPath(),this.getParentPath()))(e.offset<this.offset||e.offset==this.offset&&"toPrevious"!=this.stickiness)&&(i.offset+=t);else if("prefix"==cn(e.getParentPath(),this.getParentPath())){const n=e.path.length-1;e.offset<=this.path[n]&&(i.path[n]+=t)}return i}_getTransformedByMove(e,t,i){if(t=t._getTransformedByDeletion(e,i),e.isEqual(t))return Xs._createAt(this);const n=this._getTransformedByDeletion(e,i);return null===n||e.isEqual(this)&&"toNext"==this.stickiness||e.getShiftedBy(i).isEqual(this)&&"toPrevious"==this.stickiness?this._getCombined(e,t):n._getTransformedByInsertion(t,i)}_getCombined(e,t){const i=e.path.length-1,n=Xs._createAt(t);return n.stickiness=this.stickiness,n.offset=n.offset+this.path[i]-e.offset,n.path=[...n.path,...this.path.slice(i+1)],n}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,i="toNone"){if(e instanceof Xs)return new Xs(e.root,e.path,e.stickiness);{const n=e;if("end"==t)t=n.maxOffset;else{if("before"==t)return this._createBefore(n,i);if("after"==t)return this._createAfter(n,i);if(0!==t&&!t)throw new c.a("model-createpositionat-offset-required",[this,e])}if(!n.is("element")&&!n.is("documentFragment"))throw new c.a("model-position-parent-incorrect",[this,e]);const o=n.getPath();return o.push(t),new this(n.root,o,i)}}static _createAfter(e,t){if(!e.parent)throw new c.a("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new c.a("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if("$graveyard"===e.root){const i=new Xs(t.graveyard,e.path);return i.stickiness=e.stickiness,i}if(!t.getRoot(e.root))throw new c.a("model-position-fromjson-no-root",t,{rootName:e.root});return new Xs(t.getRoot(e.root),e.path,e.stickiness)}}function ea(e,t){const i=t.getChild(t.offsetToIndex(e.offset));return i&&i.is("$text")&&i.startOffset<e.offset?i:null}function ta(e,t,i){return null!==i?null:t.getChild(t.offsetToIndex(e.offset))}function ia(e,t,i){return null!==i?null:t.getChild(t.offsetToIndex(e.offset)-1)}class na{constructor(e,t=null){this.start=Xs._createAt(e),this.end=t?Xs._createAt(t):Xs._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Js({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return"same"==cn(this.start.getParentPath(),this.end.getParentPath())}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const i=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),n=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return i&&n}containsItem(e){const t=Xs._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}is(e){return"range"===e||"model:range"===e}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new na(this.start,e.start)),this.containsPosition(e.end)&&t.push(new na(e.end,this.end))):t.push(new na(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,i=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(i=e.end),new na(t,i)}return null}getJoined(e,t=!1){let i=this.isIntersecting(e);if(i||(i=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!i)return null;let n=this.start,o=this.end;return e.start.isBefore(n)&&(n=e.start),e.end.isAfter(o)&&(o=e.end),new na(n,o)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,i=Xs._createAt(this.start);let n=i.parent;for(;i.path.length>t+1;){const t=n.maxOffset-i.offset;0!==t&&e.push(new na(i,i.getShiftedBy(t))),i.path=i.path.slice(0,-1),i.offset++,n=n.parent}for(;i.path.length<=this.end.path.length;){const t=this.end.path[i.path.length-1],n=t-i.offset;0!==n&&e.push(new na(i,i.getShiftedBy(n))),i.offset=t,i.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new Js(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Js(e);for(const e of t)yield e.item}*getPositions(e={}){e.boundaries=this;const t=new Js(e);yield t.position;for(const e of t)yield e.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new na(this.start,this.end)]}getTransformedByOperations(e){const t=[new na(this.start,this.end)];for(const i of e)for(let e=0;e<t.length;e++){const n=t[e].getTransformedByOperation(i);t.splice(e,1,...n),e+=n.length-1}for(let e=0;e<t.length;e++){const i=t[e];for(let n=e+1;n<t.length;n++){const e=t[n];(i.containsRange(e)||e.containsRange(i)||i.isEqual(e))&&t.splice(n,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const i=e.sourcePosition,n=e.howMany,o=e.targetPosition;return this._getTransformedByMove(i,o,n,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let i=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(i=this.end.getShiftedBy(1)),t.root!=i.root&&(i=this.end.getShiftedBy(-1)),new na(t,i)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new na(this.start);let t=this.start._getTransformedByMergeOperation(e),i=this.end._getTransformedByMergeOperation(e);return t.root!=i.root&&(i=this.end.getShiftedBy(-1)),t.isAfter(i)?(e.sourcePosition.isBefore(e.targetPosition)?(t=Xs._createAt(i),t.offset=0):(e.deletionPosition.isEqual(t)||(i=e.deletionPosition),t=e.targetPosition),new na(t,i)):new na(t,i)}_getTransformedByInsertion(e,t,i=!1){if(i&&this.containsPosition(e))return[new na(this.start,e),new na(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const i=new na(this.start,this.end);return i.start=i.start._getTransformedByInsertion(e,t),i.end=i.end._getTransformedByInsertion(e,t),[i]}}_getTransformedByMove(e,t,i,n=!1){if(this.isCollapsed){const n=this.start._getTransformedByMove(e,t,i);return[new na(n)]}const o=na._createFromPositionAndShift(e,i),r=t._getTransformedByDeletion(e,i);if(this.containsPosition(t)&&!n&&(o.containsPosition(this.start)||o.containsPosition(this.end))){const n=this.start._getTransformedByMove(e,t,i),o=this.end._getTransformedByMove(e,t,i);return[new na(n,o)]}let s;const a=this.getDifference(o);let c=null;const l=this.getIntersection(o);if(1==a.length?c=new na(a[0].start._getTransformedByDeletion(e,i),a[0].end._getTransformedByDeletion(e,i)):2==a.length&&(c=new na(this.start,this.end._getTransformedByDeletion(e,i))),s=c?c._getTransformedByInsertion(r,i,null!==l||n):[],l){const e=new na(l.start._getCombined(o.start,r),l.end._getCombined(o.start,r));2==s.length?s.splice(1,0,e):s.push(e)}return s}_getTransformedByDeletion(e,t){let i=this.start._getTransformedByDeletion(e,t),n=this.end._getTransformedByDeletion(e,t);return null==i&&null==n?null:(null==i&&(i=e),null==n&&(n=e),new na(i,n))}static _createFromPositionAndShift(e,t){const i=e,n=e.getShiftedBy(t);return t>0?new this(i,n):new this(n,i)}static _createIn(e){return new this(Xs._createAt(e,0),Xs._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(Xs._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(0===e.length)throw new c.a("range-create-from-ranges-empty-array",null);if(1==e.length)return e[0].clone();const t=e[0];e.sort((e,t)=>e.start.isAfter(t.start)?1:-1);const i=e.indexOf(t),n=new this(t.start,t.end);if(i>0)for(let t=i-1;e[t].end.isEqual(n.start);t++)n.start=Xs._createAt(e[t].start);for(let t=i+1;t<e.length&&e[t].start.isEqual(n.end);t++)n.end=Xs._createAt(e[t].end);return n}static fromJSON(e,t){return new this(Xs.fromJSON(e.start,t),Xs.fromJSON(e.end,t))}}class oa{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const i=this._modelToViewMapping.get(t.modelPosition.parent);t.viewPosition=this.findPositionIn(i,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const i=this.findMappedViewAncestor(t.viewPosition),n=this._viewToModelMapping.get(i),o=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,i);t.modelPosition=Xs._createAt(n,o)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e){const t=this.toModelElement(e);if(this._viewToModelMapping.delete(e),this._elementToMarkerNames.has(e))for(const t of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(t);this._modelToViewMapping.get(t)==e&&this._modelToViewMapping.delete(t)}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const i=this._markerNameToElements.get(t)||new Set;i.add(e);const n=this._elementToMarkerNames.get(e)||new Set;n.add(t),this._markerNameToElements.set(t,i),this._elementToMarkerNames.set(e,n)}unbindElementFromMarkerName(e,t){const i=this._markerNameToElements.get(t);i&&(i.delete(e),0==i.size&&this._markerNameToElements.delete(t));const n=this._elementToMarkerNames.get(e);n&&(n.delete(t),0==n.size&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new na(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new lo(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const i={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",i),i.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const i=new Set;for(const e of t)if(e.is("attributeElement"))for(const t of e.getElementsWithSameId())i.add(t);else i.add(e);return i}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,i){if(i!=e){return this._toModelOffset(e.parent,e.index,i)+this._toModelOffset(e,t,e)}if(e.is("$text"))return t;let n=0;for(let i=0;i<t;i++)n+=this.getModelLength(e.getChild(i));return n}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name)){return this._viewToModelLengthCallbacks.get(e.name)(e)}if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const i of e.getChildren())t+=this.getModelLength(i);return t}}findPositionIn(e,t){let i,n=0,o=0,r=0;if(e.is("$text"))return new co(e,t);for(;o<t;)i=e.getChild(r),n=this.getModelLength(i),o+=n,r++;return o==t?this._moveViewPositionToTextNode(new co(e,r)):this.findPositionIn(i,t-(o-n))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,i=e.nodeAfter;return t instanceof hn?new co(t,t.data.length):i instanceof hn?new co(i,0):e}}Ke(oa,h);class ra{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=sa(t),e instanceof Gs&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=sa(t),e instanceof Gs&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=sa(t),e instanceof Gs&&(e=this._getSymbolForTextProxy(e));const i=this._consumable.get(e);if(void 0===i)return null;const n=i.get(t);return void 0===n?null:n}revert(e,t){t=sa(t),e instanceof Gs&&(e=this._getSymbolForTextProxy(e));const i=this.test(e,t);return!1===i?(this._consumable.get(e).set(t,!0),!0):!0!==i&&null}_getSymbolForTextProxy(e){let t=null;const i=this._textProxyRegistry.get(e.startOffset);if(i){const n=i.get(e.endOffset);n&&(t=n.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e.startOffset,e.endOffset,e.parent)),t}_addSymbolForTextProxy(e,t,i){const n=Symbol("textProxySymbol");let o,r;return o=this._textProxyRegistry.get(e),o||(o=new Map,this._textProxyRegistry.set(e,o)),r=o.get(t),r||(r=new Map,o.set(t,r)),r.set(i,n),n}}function sa(e){const t=e.split(":");return"addMarker"==t[0]||"removeMarker"==t[0]?e:t.length>1?t[0]+":"+t[1]:t[0]}class aa{constructor(e){this.conversionApi=Object.assign({dispatcher:this},e),this._reconversionEventsMapping=new Map}convertChanges(e,t,i){for(const t of e.getMarkersToRemove())this.convertMarkerRemove(t.name,t.range,i);const n=this._mapChangesWithAutomaticReconversion(e);for(const e of n)"insert"===e.type?this.convertInsert(na._createFromPositionAndShift(e.position,e.length),i):"remove"===e.type?this.convertRemove(e.position,e.length,e.name,i):"reconvert"===e.type?this.reconvertElement(e.element,i):this.convertAttribute(e.range,e.attributeKey,e.attributeOldValue,e.attributeNewValue,i);for(const e of this.conversionApi.mapper.flushUnboundMarkerNames()){const n=t.get(e).getRange();this.convertMarkerRemove(e,n,i),this.convertMarkerAdd(e,n,i)}for(const t of e.getMarkersToAdd())this.convertMarkerAdd(t.name,t.range,i)}convertInsert(e,t){this.conversionApi.writer=t,this.conversionApi.consumable=this._createInsertConsumable(e);for(const t of Array.from(e).map(la))this._convertInsertWithAttributes(t);this._clearConversionApi()}convertRemove(e,t,i,n){this.conversionApi.writer=n,this.fire("remove:"+i,{position:e,length:t},this.conversionApi),this._clearConversionApi()}convertAttribute(e,t,i,n,o){this.conversionApi.writer=o,this.conversionApi.consumable=this._createConsumableForRange(e,"attribute:"+t);for(const o of e){const e={item:o.item,range:na._createFromPositionAndShift(o.previousPosition,o.length),attributeKey:t,attributeOldValue:i,attributeNewValue:n};this._testAndFire("attribute:"+t,e)}this._clearConversionApi()}reconvertElement(e,t){const i=na._createOn(e);this.conversionApi.writer=t,this.conversionApi.consumable=this._createInsertConsumable(i);const n=this.conversionApi.mapper,o=n.toViewElement(e);t.remove(o),this._convertInsertWithAttributes({item:e,range:i});const r=n.toViewElement(e);for(const i of na._createIn(e)){const{item:e}=i,o=da(e,n);o?o.root!==r.root&&t.move(t.createRangeOn(o),n.toViewPosition(Xs._createBefore(e))):this._convertInsertWithAttributes(la(i))}n.unbindViewElement(o),this._clearConversionApi()}convertSelection(e,t,i){const n=Array.from(t.getMarkersAtPosition(e.getFirstPosition()));if(this.conversionApi.writer=i,this.conversionApi.consumable=this._createSelectionConsumable(e,n),this.fire("selection",{selection:e},this.conversionApi),e.isCollapsed){for(const t of n){const i=t.getRange();if(!ca(e.getFirstPosition(),t,this.conversionApi.mapper))continue;const n={item:e,markerName:t.name,markerRange:i};this.conversionApi.consumable.test(e,"addMarker:"+t.name)&&this.fire("addMarker:"+t.name,n,this.conversionApi)}for(const t of e.getAttributeKeys()){const i={item:e,range:e.getFirstRange(),attributeKey:t,attributeOldValue:null,attributeNewValue:e.getAttribute(t)};this.conversionApi.consumable.test(e,"attribute:"+i.attributeKey)&&this.fire("attribute:"+i.attributeKey+":$text",i,this.conversionApi)}this._clearConversionApi()}else this._clearConversionApi()}convertMarkerAdd(e,t,i){if("$graveyard"==t.root.rootName)return;this.conversionApi.writer=i;const n="addMarker:"+e,o=new ra;if(o.add(t,n),this.conversionApi.consumable=o,this.fire(n,{markerName:e,markerRange:t},this.conversionApi),o.test(t,n)){this.conversionApi.consumable=this._createConsumableForRange(t,n);for(const i of t.getItems()){if(!this.conversionApi.consumable.test(i,n))continue;const o={item:i,range:na._createOn(i),markerName:e,markerRange:t};this.fire(n,o,this.conversionApi)}this._clearConversionApi()}else this._clearConversionApi()}convertMarkerRemove(e,t,i){"$graveyard"!=t.root.rootName&&(this.conversionApi.writer=i,this.fire("removeMarker:"+e,{markerName:e,markerRange:t},this.conversionApi),this._clearConversionApi())}_mapReconversionTriggerEvent(e,t){this._reconversionEventsMapping.set(t,e)}_createInsertConsumable(e){const t=new ra;for(const i of e){const e=i.item;t.add(e,"insert");for(const i of e.getAttributeKeys())t.add(e,"attribute:"+i)}return t}_createConsumableForRange(e,t){const i=new ra;for(const n of e.getItems())i.add(n,t);return i}_createSelectionConsumable(e,t){const i=new ra;i.add(e,"selection");for(const n of t)i.add(e,"addMarker:"+n.name);for(const t of e.getAttributeKeys())i.add(e,"attribute:"+t);return i}_testAndFire(e,t){this.conversionApi.consumable.test(t.item,e)&&this.fire(function(e,t){const i=t.item.name||"$text";return`${e}:${i}`}(e,t),t,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}_convertInsertWithAttributes(e){this._testAndFire("insert",e);for(const t of e.item.getAttributeKeys())e.attributeKey=t,e.attributeOldValue=null,e.attributeNewValue=e.item.getAttribute(t),this._testAndFire("attribute:"+t,e)}_mapChangesWithAutomaticReconversion(e){const t=new Set,i=[];for(const n of e.getChanges()){const e=n.position||n.range.start,o=e.parent;if(ea(e,o)){i.push(n);continue}const r="attribute"===n.type?ta(e,o,null):o;if(r.is("$text")){i.push(n);continue}let s;if(s="attribute"===n.type?`attribute:${n.attributeKey}:${r.name}`:`${n.type}:${n.name}`,this._isReconvertTriggerEvent(s,r.name)){if(t.has(r))continue;t.add(r),i.push({type:"reconvert",element:r})}else i.push(n)}return i}_isReconvertTriggerEvent(e,t){return this._reconversionEventsMapping.get(e)===t}}function ca(e,t,i){const n=t.getRange(),o=Array.from(e.getAncestors());o.shift(),o.reverse();return!o.some(e=>{if(n.containsItem(e)){return!!i.toViewElement(e).getCustomProperty("addHighlight")}})}function la(e){return{item:e.item,range:na._createFromPositionAndShift(e.previousPosition,e.length)}}function da(e,t){if(e.is("textProxy")){const i=t.toViewPosition(Xs._createBefore(e)).parent;return i.is("$text")?i:null}return t.toViewElement(e)}Ke(aa,h);class ha{constructor(e,t,i){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,i)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let i=!1;for(const n of e._ranges)if(t.isEqual(n)){i=!0;break}if(!i)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new na(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new na(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new na(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(e,t,i){if(null===e)this._setRanges([]);else if(e instanceof ha)this._setRanges(e.getRanges(),e.isBackward);else if(e&&"function"==typeof e.getRanges)this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof na)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof Xs)this._setRanges([new na(e)]);else if(e instanceof $s){const n=!!i&&!!i.backward;let o;if("in"==t)o=na._createIn(e);else if("on"==t)o=na._createOn(e);else{if(void 0===t)throw new c.a("model-selection-setto-required-second-parameter",[this,e]);o=new na(Xs._createAt(e,t))}this._setRanges([o],n)}else{if(!Ji(e))throw new c.a("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,t&&!!t.backward)}}_setRanges(e,t=!1){const i=(e=Array.from(e)).some(t=>{if(!(t instanceof na))throw new c.a("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(e=>!e.isEqual(t))});if(e.length!==this._ranges.length||i){this._removeAllRanges();for(const t of e)this._pushRange(t);this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0})}}setFocus(e,t){if(null===this.anchor)throw new c.a("model-selection-setfocus-no-ranges",[this,e]);const i=Xs._createAt(e,t);if("same"==i.compareWith(this.focus))return;const n=this.anchor;this._ranges.length&&this._popRange(),"before"==i.compareWith(n)?(this._pushRange(new na(i,n)),this._lastRangeBackward=!0):(this._pushRange(new na(n,i)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return 1!==this.rangeCount?null:this.getFirstRange().getContainedElement()}is(e){return"selection"===e||"model:selection"===e}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const i=ma(t.start,e);i&&fa(i,t)&&(yield i);for(const i of t.getWalker()){const n=i.item;"elementEnd"==i.type&&ga(n,e,t)&&(yield n)}const n=ma(t.end,e);n&&!t.end.isTouching(Xs._createAt(n,0))&&fa(n,t)&&(yield n)}}containsEntireContent(e=this.anchor.root){const t=Xs._createAt(e,0),i=Xs._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&i.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new na(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new c.a("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ua(e,t){return!t.has(e)&&(t.add(e),e.root.document.model.schema.isBlock(e)&&e.parent)}function ga(e,t,i){return ua(e,t)&&fa(e,i)}function ma(e,t){const i=e.parent.root.document.model.schema,n=e.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=n.find(e=>!o&&(o=i.isLimit(e),!o&&ua(e,t)));return n.forEach(e=>t.add(e)),r}function fa(e,t){const i=function(e){const t=e.root.document.model.schema;let i=e.parent;for(;i;){if(t.isBlock(i))return i;i=i.parent}}(e);if(!i)return!0;return!t.containsRange(na._createOn(i),!0)}Ke(ha,h);class pa extends na{constructor(e,t){super(e,t),ba.call(this)}detach(){this.stopListening()}is(e){return"liveRange"===e||"model:liveRange"===e||"range"==e||"model:range"===e}toRange(){return new na(this.start,this.end)}static fromRange(e){return new pa(e.start,e.end)}}function ba(){this.listenTo(this.root.document.model,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&wa.call(this,i)},{priority:"low"})}function wa(e){const t=this.getTransformedByOperation(e),i=na._createFromRanges(t),n=!i.isEqual(this),o=function(e,t){switch(t.type){case"insert":return e.containsPosition(t.position);case"move":case"remove":case"reinsert":case"merge":return e.containsPosition(t.sourcePosition)||e.start.isEqual(t.sourcePosition)||e.containsPosition(t.targetPosition);case"split":return e.containsPosition(t.splitPosition)||e.containsPosition(t.insertionPosition)}return!1}(this,e);let r=null;if(n){"$graveyard"==i.root.rootName&&(r="remove"==e.type?e.sourcePosition:e.deletionPosition);const t=this.toRange();this.start=i.start,this.end=i.end,this.fire("change:range",t,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}Ke(pa,h);class ka{constructor(e){this._selection=new _a(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}is(e){return"selection"===e||"model:selection"==e||"documentSelection"==e||"model:documentSelection"==e}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,i){this._selection.setTo(e,t,i)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return"selection:"+e}static _isStoreAttributeKey(e){return e.startsWith("selection:")}}Ke(ka,h);class _a extends ha{constructor(e){super(),this.markers=new Zi({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&"marker"!=i.type&&"rename"!=i.type&&"noop"!=i.type&&(0==this._ranges.length&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new c.a("document-selection-wrong-position",this,{range:e})}),this.listenTo(this._model.markers,"update",(e,t,i,n)=>{this._updateMarker(t,n)}),this.listenTo(this._document,"change",(e,t)=>{!function(e,t){const i=e.document.differ;for(const n of i.getChanges()){if("insert"!=n.type)continue;const i=n.position.parent;n.length===i.maxOffset&&e.enqueueChange(t,e=>{const t=Array.from(i.getAttributeKeys()).filter(e=>e.startsWith("selection:"));for(const n of t)e.removeAttribute(n,i)})}}(this._model,t)})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,i){super.setTo(e,t,i),this._updateAttributes(!0),this._updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this._updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=s();return this._overriddenGravityRegister.add(e),1===this._overriddenGravityRegister.size&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new c.a("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=pa.fromRange(e);return t.on("change:range",(e,i,n)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=n.deletionPosition;const e=this._ranges.indexOf(t);this._ranges.splice(e,1),t.detach()}}),t}_updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const t of this._model.markers){const i=t.name.split(":",1)[0];if(!this._observedMarkers.has(i))continue;const n=t.getRange();for(const i of this.getRanges())n.containsRange(i,!i.isCollapsed)&&e.push(t)}const i=Array.from(this.markers);for(const i of e)this.markers.has(i)||(this.markers.add(i),t=!0);for(const i of Array.from(this.markers))e.includes(i)||(this.markers.remove(i),t=!0);t&&this.fire("change:marker",{oldMarkers:i,directChange:!1})}_updateMarker(e,t){const i=e.name.split(":",1)[0];if(!this._observedMarkers.has(i))return;let n=!1;const o=Array.from(this.markers),r=this.markers.has(e);if(t){let i=!1;for(const e of this.getRanges())if(t.containsRange(e,!e.isCollapsed)){i=!0;break}i&&!r?(this.markers.add(e),n=!0):!i&&r&&(this.markers.remove(e),n=!0)}else r&&(this.markers.remove(e),n=!0);n&&this.fire("change:marker",{oldMarkers:o,directChange:!1})}_updateAttributes(e){const t=gn(this._getSurroundingAttributes()),i=gn(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[e,t]of this._attributePriority)"low"==t&&(this._attrs.delete(e),this._attributePriority.delete(e));this._setAttributesTo(t);const n=[];for(const[e,t]of this.getAttributes())i.has(e)&&i.get(e)===t||n.push(e);for(const[e]of i)this.hasAttribute(e)||n.push(e);n.length>0&&this.fire("change:attribute",{attributeKeys:n,directChange:!1})}_setAttribute(e,t,i=!0){const n=i?"normal":"low";if("low"==n&&"normal"==this._attributePriority.get(e))return!1;return super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,n),!0)}_removeAttribute(e,t=!0){const i=t?"normal":"low";return("low"!=i||"normal"!=this._attributePriority.get(e))&&(this._attributePriority.set(e,i),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[t,i]of this.getAttributes())e.get(t)!==i&&this._removeAttribute(t,!1);for(const[i,n]of e){this._setAttribute(i,n,!1)&&t.add(i)}return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())if(t.startsWith("selection:")){const i=t.substr("selection:".length);yield[i,e.getAttribute(t)]}}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let i=null;if(this.isCollapsed){const n=e.textNode?e.textNode:e.nodeBefore,o=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(i=va(n)),i||(i=va(o)),!this.isGravityOverridden&&!i){let e=n;for(;e&&!t.isInline(e)&&!i;)e=e.previousSibling,i=va(e)}if(!i){let e=o;for(;e&&!t.isInline(e)&&!i;)e=e.nextSibling,i=va(e)}i||(i=this._getStoredAttributes())}else{const e=this.getFirstRange();for(const n of e){if(n.item.is("element")&&t.isObject(n.item))break;if("text"==n.type){i=n.item.getAttributes();break}}}return i}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function va(e){return e instanceof Gs||e instanceof Ys?e.getAttributes():null}class ya{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}var xa=function(e){return qi(e,5)};class Aa extends ya{elementToElement(e){return this.add(function(e){return(e=xa(e)).view=Ea(e.view,"container"),t=>{var i;if(t.on("insert:"+e.model,(i=e.view,(e,t,n)=>{const o=i(t.item,n);if(!o)return;if(!n.consumable.consume(t.item,"insert"))return;const r=n.mapper.toViewPosition(t.range.start);n.mapper.bindElements(t.item,o),n.writer.insert(r,o)}),{priority:e.converterPriority||"normal"}),e.triggerBy){if(e.triggerBy.attributes)for(const i of e.triggerBy.attributes)t._mapReconversionTriggerEvent(e.model,`attribute:${i}:${e.model}`);if(e.triggerBy.children)for(const i of e.triggerBy.children)t._mapReconversionTriggerEvent(e.model,"insert:"+i),t._mapReconversionTriggerEvent(e.model,"remove:"+i)}}}(e))}attributeToElement(e){return this.add(function(e){e=xa(e);let t="attribute:"+(e.model.key?e.model.key:e.model);e.model.name&&(t+=":"+e.model.name);if(e.model.values)for(const t of e.model.values)e.view[t]=Ea(e.view[t],"attribute");else e.view=Ea(e.view,"attribute");const i=Sa(e);return n=>{n.on(t,function(e){return(t,i,n)=>{const o=e(i.attributeOldValue,n),r=e(i.attributeNewValue,n);if(!o&&!r)return;if(!n.consumable.consume(i.item,t.name))return;const s=n.writer,a=s.document.selection;if(i.item instanceof ha||i.item instanceof ka)s.wrap(a.getFirstRange(),r);else{let e=n.mapper.toViewRange(i.range);null!==i.attributeOldValue&&o&&(e=s.unwrap(e,o)),null!==i.attributeNewValue&&r&&s.wrap(e,r)}}}(i),{priority:e.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(e){e=xa(e);let t="attribute:"+(e.model.key?e.model.key:e.model);e.model.name&&(t+=":"+e.model.name);if(e.model.values)for(const t of e.model.values)e.view[t]=Ia(e.view[t]);else e.view=Ia(e.view);const i=Sa(e);return n=>{var o;n.on(t,(o=i,(e,t,i)=>{const n=o(t.attributeOldValue,i),r=o(t.attributeNewValue,i);if(!n&&!r)return;if(!i.consumable.consume(t.item,e.name))return;const s=i.mapper.toViewElement(t.item),a=i.writer;if(!s)throw new c.a("conversion-attribute-to-attribute-on-text",[t,i]);if(null!==t.attributeOldValue&&n)if("class"==n.key){const e=en(n.value);for(const t of e)a.removeClass(t,s)}else if("style"==n.key){const e=Object.keys(n.value);for(const t of e)a.removeStyle(t,s)}else a.removeAttribute(n.key,s);if(null!==t.attributeNewValue&&r)if("class"==r.key){const e=en(r.value);for(const t of e)a.addClass(t,s)}else if("style"==r.key){const e=Object.keys(r.value);for(const t of e)a.setStyle(t,r.value[t],s)}else a.setAttribute(r.key,r.value,s)}),{priority:e.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(e){return(e=xa(e)).view=Ea(e.view,"ui"),t=>{var i;t.on("addMarker:"+e.model,(i=e.view,(e,t,n)=>{t.isOpening=!0;const o=i(t,n);t.isOpening=!1;const r=i(t,n);if(!o||!r)return;const s=t.markerRange;if(s.isCollapsed&&!n.consumable.consume(s,e.name))return;for(const t of s)if(!n.consumable.consume(t.item,e.name))return;const a=n.mapper,c=n.writer;c.insert(a.toViewPosition(s.start),o),n.mapper.bindElementToMarker(o,t.markerName),s.isCollapsed||(c.insert(a.toViewPosition(s.end),r),n.mapper.bindElementToMarker(r,t.markerName)),e.stop()}),{priority:e.converterPriority||"normal"}),t.on("removeMarker:"+e.model,(e.view,(e,t,i)=>{const n=i.mapper.markerNameToElements(t.markerName);if(n){for(const e of n)i.mapper.unbindElementFromMarkerName(e,t.markerName),i.writer.clear(i.writer.createRangeOn(e),e);i.writer.clearClonedElementsGroup(t.markerName),e.stop()}}),{priority:e.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(e){return t=>{var i;t.on("addMarker:"+e.model,(i=e.view,(e,t,n)=>{if(!t.item)return;if(!(t.item instanceof ha||t.item instanceof ka||t.item.is("$textProxy")))return;const o=Pa(i,t,n);if(!o)return;if(!n.consumable.consume(t.item,e.name))return;const r=n.writer,s=Ca(r,o),a=r.document.selection;if(t.item instanceof ha||t.item instanceof ka)r.wrap(a.getFirstRange(),s,a);else{const e=n.mapper.toViewRange(t.range),i=r.wrap(e,s);for(const e of i.getItems())if(e.is("attributeElement")&&e.isSimilar(s)){n.mapper.bindElementToMarker(e,t.markerName);break}}}),{priority:e.converterPriority||"normal"}),t.on("addMarker:"+e.model,function(e){return(t,i,n)=>{if(!i.item)return;if(!(i.item instanceof Qs))return;const o=Pa(e,i,n);if(!o)return;if(!n.consumable.test(i.item,t.name))return;const r=n.mapper.toViewElement(i.item);if(r&&r.getCustomProperty("addHighlight")){n.consumable.consume(i.item,t.name);for(const e of na._createIn(i.item))n.consumable.consume(e.item,t.name);r.getCustomProperty("addHighlight")(r,o,n.writer),n.mapper.bindElementToMarker(r,i.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),t.on("removeMarker:"+e.model,function(e){return(t,i,n)=>{if(i.markerRange.isCollapsed)return;const o=Pa(e,i,n);if(!o)return;const r=Ca(n.writer,o),s=n.mapper.markerNameToElements(i.markerName);if(s){for(const e of s)n.mapper.unbindElementFromMarkerName(e,i.markerName),e.is("attributeElement")?n.writer.unwrap(n.writer.createRangeOn(e),r):e.getCustomProperty("removeHighlight")(e,o.id,n.writer);n.writer.clearClonedElementsGroup(i.markerName),t.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(e){const t=(e=xa(e)).model;e.view||(e.view=i=>({group:t,name:i.substr(e.model.length+1)}));return i=>{var n;i.on("addMarker:"+t,(n=e.view,(e,t,i)=>{const o=n(t.markerName,i);if(!o)return;const r=t.markerRange;i.consumable.consume(r,e.name)&&(Ta(r,!1,i,t,o),Ta(r,!0,i,t,o),e.stop())}),{priority:e.converterPriority||"normal"}),i.on("removeMarker:"+t,function(e){return(t,i,n)=>{const o=e(i.markerName,n);if(!o)return;const r=n.mapper.markerNameToElements(i.markerName);if(r){for(const e of r)n.mapper.unbindElementFromMarkerName(e,i.markerName),e.is("containerElement")?(s(`data-${o.group}-start-before`,e),s(`data-${o.group}-start-after`,e),s(`data-${o.group}-end-before`,e),s(`data-${o.group}-end-after`,e)):n.writer.clear(n.writer.createRangeOn(e),e);n.writer.clearClonedElementsGroup(i.markerName),t.stop()}function s(e,t){if(t.hasAttribute(e)){const i=new Set(t.getAttribute(e).split(","));i.delete(o.name),0==i.size?n.writer.removeAttribute(e,t):n.writer.setAttribute(e,Array.from(i).join(","),t)}}}}(e.view),{priority:e.converterPriority||"normal"})}}(e))}}function Ca(e,t){const i=e.createAttributeElement("span",t.attributes);return t.classes&&i._addClass(t.classes),"number"==typeof t.priority&&(i._priority=t.priority),i._id=t.id,i}function Ta(e,t,i,n,o){const r=t?e.start:e.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let e,r;t&&s||!t&&!a?(e=s,r=!0):(e=a,r=!1);const c=i.mapper.toViewElement(e);if(c)return void function(e,t,i,n,o,r){const s=`data-${r.group}-${t?"start":"end"}-${i?"before":"after"}`,a=e.hasAttribute(s)?e.getAttribute(s).split(","):[];a.unshift(r.name),n.writer.setAttribute(s,a.join(","),e),n.mapper.bindElementToMarker(e,o.markerName)}(c,t,r,i,n,o)}!function(e,t,i,n,o){const r=`${o.group}-${t?"start":"end"}`,s=o.name?{name:o.name}:null,a=i.writer.createUIElement(r,s);i.writer.insert(e,a),i.mapper.bindElementToMarker(a,n.markerName)}(i.mapper.toViewPosition(r),t,i,n,o)}function Ea(e,t){return"function"==typeof e?e:(i,n)=>function(e,t,i){"string"==typeof e&&(e={name:e});let n;const o=t.writer,r=Object.assign({},e.attributes);if("container"==i)n=o.createContainerElement(e.name,r);else if("attribute"==i){const t={priority:e.priority||xo.DEFAULT_PRIORITY};n=o.createAttributeElement(e.name,r,t)}else n=o.createUIElement(e.name,r);if(e.styles){const t=Object.keys(e.styles);for(const i of t)o.setStyle(i,e.styles[i],n)}if(e.classes){const t=e.classes;if("string"==typeof t)o.addClass(t,n);else for(const e of t)o.addClass(e,n)}return n}(e,n,t)}function Sa(e){return e.model.values?(t,i)=>{const n=e.view[t];return n?n(t,i):null}:e.view}function Ia(e){return"string"==typeof e?t=>({key:e,value:t}):"object"==typeof e?e.value?()=>e:t=>({key:e.key,value:t}):e}function Pa(e,t,i){const n="function"==typeof e?e(t,i):e;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function Ma(e){const{schema:t,document:i}=e.model;for(const n of i.getRootNames()){const o=i.getRoot(n);if(o.isEmpty&&!t.checkChild(o,"$text")&&t.checkChild(o,"paragraph"))return e.insertElement("paragraph",o),!0}return!1}function Na(e,t,i){const n=i.createContext(e);return!!i.checkChild(n,"paragraph")&&!!i.checkChild(n.push("paragraph"),t)}function Ra(e,t){const i=t.createElement("paragraph");return t.insert(i,e),t.createPositionAt(i,0)}class Oa extends ya{elementToElement(e){return this.add(Da(e))}elementToAttribute(e){return this.add(function(e){Va(e=xa(e));const t=ja(e,!1),i=za(e.view),n=i?"element:"+i:"element";return i=>{i.on(n,t,{priority:e.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(e){e=xa(e);let t=null;("string"==typeof e.view||e.view.key)&&(t=function(e){"string"==typeof e.view&&(e.view={key:e.view});const t=e.view.key;let i;if("class"==t||"style"==t){i={["class"==t?"classes":"styles"]:e.view.value}}else{const n=void 0===e.view.value?/[\s\S]*/:e.view.value;i={attributes:{[t]:n}}}e.view.name&&(i.name=e.view.name);return e.view=i,t}(e));Va(e,t);const i=ja(e,!0);return t=>{t.on("element",i,{priority:e.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(e){return function(e){const t=e.model;e.model=(e,i)=>{const n="string"==typeof t?t:t(e,i);return i.writer.createElement("$marker",{"data-name":n})}}(e=xa(e)),Da(e)}(e))}dataToMarker(e){return this.add(function(e){(e=xa(e)).model||(e.model=t=>t?e.view+":"+t:e.view);const t=La(Ba(e,"start")),i=La(Ba(e,"end"));return n=>{n.on("element:"+e.view+"-start",t,{priority:e.converterPriority||"normal"}),n.on("element:"+e.view+"-end",i,{priority:e.converterPriority||"normal"});const o=a.get("low"),r=a.get("highest"),s=a.get(e.converterPriority)/r;n.on("element",function(e){return(t,i,n)=>{const o="data-"+e.view;function r(t,o){for(const r of o){const o=e.model(r,n),s=n.writer.createElement("$marker",{"data-name":o});n.writer.insert(s,t),i.modelCursor.isEqual(t)?i.modelCursor=i.modelCursor.getShiftedBy(1):i.modelCursor=i.modelCursor._getTransformedByInsertion(t,1),i.modelRange=i.modelRange._getTransformedByInsertion(t,1)[0]}}(n.consumable.test(i.viewItem,{attributes:o+"-end-after"})||n.consumable.test(i.viewItem,{attributes:o+"-start-after"})||n.consumable.test(i.viewItem,{attributes:o+"-end-before"})||n.consumable.test(i.viewItem,{attributes:o+"-start-before"}))&&(i.modelRange||Object.assign(i,n.convertChildren(i.viewItem,i.modelCursor)),n.consumable.consume(i.viewItem,{attributes:o+"-end-after"})&&r(i.modelRange.end,i.viewItem.getAttribute(o+"-end-after").split(",")),n.consumable.consume(i.viewItem,{attributes:o+"-start-after"})&&r(i.modelRange.end,i.viewItem.getAttribute(o+"-start-after").split(",")),n.consumable.consume(i.viewItem,{attributes:o+"-end-before"})&&r(i.modelRange.start,i.viewItem.getAttribute(o+"-end-before").split(",")),n.consumable.consume(i.viewItem,{attributes:o+"-start-before"})&&r(i.modelRange.start,i.viewItem.getAttribute(o+"-start-before").split(",")))}}(e),{priority:o+s})}}(e))}}function Da(e){const t=La(e=xa(e)),i=za(e.view),n=i?"element:"+i:"element";return i=>{i.on(n,t,{priority:e.converterPriority||"normal"})}}function za(e){return"string"==typeof e?e:"object"==typeof e&&"string"==typeof e.name?e.name:null}function La(e){const t=new mn(e.view);return(i,n,o)=>{const r=t.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!o.consumable.test(n.viewItem,s))return;const a=function(e,t,i){return e instanceof Function?e(t,i):i.writer.createElement(e)}(e.model,n.viewItem,o);a&&o.safeInsert(a,n.modelCursor)&&(o.consumable.consume(n.viewItem,s),o.convertChildren(n.viewItem,a),o.updateConversionResult(a,n))}}function Va(e,t=null){const i=null===t||(e=>e.getAttribute(t)),n="object"!=typeof e.model?e.model:e.model.key,o="object"!=typeof e.model||void 0===e.model.value?i:e.model.value;e.model={key:n,value:o}}function ja(e,t){const i=new mn(e.view);return(n,o,r)=>{const s=i.match(o.viewItem);if(!s)return;if(!function(e,t){const i="function"==typeof e?e(t):e;if("object"==typeof i&&!za(i))return!1;return!i.classes&&!i.attributes&&!i.styles}(e.view,o.viewItem)?delete s.match.name:s.match.name=!0,!r.consumable.test(o.viewItem,s.match))return;const a=e.model.key,c="function"==typeof e.model.value?e.model.value(o.viewItem,r):e.model.value;if(null===c)return;o.modelRange||Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor));(function(e,t,i,n){let o=!1;for(const r of Array.from(e.getItems({shallow:i})))n.schema.checkAttribute(r,t.key)&&(o=!0,r.hasAttribute(t.key)||n.writer.setAttribute(t.key,t.value,r));return o})(o.modelRange,{key:a,value:c},t,r)&&r.consumable.consume(o.viewItem,s.match)}}function Ba(e,t){const i={};return i.view=e.view+"-"+t,i.model=(t,i)=>{const n=t.getAttribute("name"),o=e.model(n,i);return i.writer.createElement("$marker",{"data-name":o})},i}class Fa{constructor(e,t){this.model=e,this.view=new qs(t),this.mapper=new oa,this.downcastDispatcher=new aa({mapper:this.mapper,schema:e.schema});const i=this.model.document,n=i.selection,o=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(i,"change",()=>{this.view.change(e=>{this.downcastDispatcher.convertChanges(i.differ,o,e),this.downcastDispatcher.convertSelection(n,o,e)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(e,t){return(i,n)=>{const o=n.newSelection,r=[];for(const e of o.getRanges())r.push(t.toModelRange(e));const s=e.createSelection(r,{backward:o.isBackward});s.isEqual(e.document.selection)||e.change(e=>{e.setSelection(s)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(e,t,i)=>{if(!i.consumable.consume(t.item,"insert"))return;const n=i.writer,o=i.mapper.toViewPosition(t.range.start),r=n.createText(t.item.data);n.insert(o,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(e,t,i)=>{const n=i.mapper.toViewPosition(t.position),o=t.position.getShiftedBy(t.length),r=i.mapper.toViewPosition(o,{isPhantom:!0}),s=i.writer.createRange(n,r),a=i.writer.remove(s.getTrimmed());for(const e of i.writer.createRangeIn(a).getItems())i.mapper.unbindViewElement(e)},{priority:"low"}),this.downcastDispatcher.on("selection",(e,t,i)=>{const n=i.writer,o=n.document.selection;for(const e of o.getRanges())e.isCollapsed&&e.end.parent.isAttached()&&i.writer.mergeAttributes(e.start);n.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(e,t,i)=>{const n=t.selection;if(n.isCollapsed)return;if(!i.consumable.consume(n,"selection"))return;const o=[];for(const e of n.getRanges()){const t=i.mapper.toViewRange(e);o.push(t)}i.writer.setSelection(o,{backward:n.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(e,t,i)=>{const n=t.selection;if(!n.isCollapsed)return;if(!i.consumable.consume(n,"selection"))return;const o=i.writer,r=n.getFirstPosition(),s=i.mapper.toViewPosition(r),a=o.breakAttributes(s);o.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(e=>{if("$graveyard"==e.rootName)return null;const t=new so(this.view.document,e.name);return t.rootName=e.rootName,this.mapper.bindElements(e,t),t})}destroy(){this.view.destroy(),this.stopListening()}}Ke(Fa,Ue);class Ha{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const i=this.get(e);if(!i)throw new c.a("commandcollection-command-not-found",this,{commandName:e});return i.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class Ua{constructor(){this._consumables=new Map}add(e,t){let i;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?i=this._consumables.get(e):(i=new Wa(e),this._consumables.set(e,i)),i.add(t))}test(e,t){const i=this._consumables.get(e);return void 0===i?null:e.is("$text")||e.is("documentFragment")?i:i.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const i=this._consumables.get(e);void 0!==i&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):i.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},i=e.getAttributeKeys();for(const e of i)"style"!=e&&"class"!=e&&t.attributes.push(e);const n=e.getClassNames();for(const e of n)t.classes.push(e);const o=e.getStyleNames();for(const e of o)t.styles.push(e);return t}static createFrom(e,t){if(t||(t=new Ua(e)),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Ua.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const i of e.getChildren())t=Ua.createFrom(i,t);return t}}class Wa{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const i=this._test(t,e[t]);if(!0!==i)return i}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t in this._consumables)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i){if("attributes"===e&&("class"===t||"style"===t))throw new c.a("viewconsumable-invalid-attribute",this);if(n.set(t,!0),"styles"===e)for(const e of this.element.document.stylesProcessor.getRelatedStyles(t))n.set(e,!0)}}_test(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i)if("attributes"!==e||"class"!==t&&"style"!==t){const e=n.get(t);if(void 0===e)return null;if(!e)return!1}else{const e="class"==t?"classes":"styles",i=this._test(e,[...this._consumables[e].keys()]);if(!0!==i)return i}return!0}_consume(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i)if("attributes"!==e||"class"!==t&&"style"!==t){if(n.set(t,!1),"styles"==e)for(const e of this.element.document.stylesProcessor.getRelatedStyles(t))n.set(e,!1)}else{const e="class"==t?"classes":"styles";this._consume(e,[...this._consumables[e].keys()])}}_revert(e,t){const i=_e(t)?t:[t],n=this._consumables[e];for(const t of i)if("attributes"!==e||"class"!==t&&"style"!==t){!1===n.get(t)&&n.set(t,!0)}else{const e="class"==t?"classes":"styles";this._revert(e,[...this._consumables[e].keys()])}}}class qa{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new $a(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new $a(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new c.a("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new c.a("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t="string"==typeof e?e:e.is&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const i=this.getDefinition(e.last);return!!i&&i.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof Xs){const t=e.nodeBefore,i=e.nodeAfter;if(!(t instanceof Qs))throw new c.a("schema-check-merge-no-element-before",this);if(!(i instanceof Qs))throw new c.a("schema-check-merge-no-element-after",this);return this.checkMerge(t,i)}for(const i of t.getChildren())if(!this.checkChild(e,i))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[i,n])=>{if(!n)return;const o=e(i,n);"boolean"==typeof o&&(t.stop(),t.return=o)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[i,n])=>{const o=e(i,n);"boolean"==typeof o&&(t.stop(),t.return=o)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;if(e instanceof Xs)t=e.parent;else{t=(e instanceof na?[e]:Array.from(e.getRanges())).reduce((e,t)=>{const i=t.getCommonAncestor();return e?e.getCommonAncestor(i,{includeSelf:!0}):i},null)}for(;!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const i=[...e.getFirstPosition().getAncestors(),new Ys("",e.getAttributes())];return this.checkAttribute(i,t)}{const i=e.getRanges();for(const e of i)for(const i of e)if(this.checkAttribute(i.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(e){for(const t of e)yield*t.getMinimalFlatRanges()}(e);for(const i of e)yield*this._getValidRangesForRange(i,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new na(e);let i,n;const o=e.getAncestors().reverse().find(e=>this.isLimit(e))||e.root;"both"!=t&&"backward"!=t||(i=new Js({boundaries:na._createIn(o),startPosition:e,direction:"backward"})),"both"!=t&&"forward"!=t||(n=new Js({boundaries:na._createIn(o),startPosition:e}));for(const e of function*(e,t){let i=!1;for(;!i;){if(i=!0,e){const t=e.next();t.done||(i=!1,yield{walker:e,value:t.value})}if(t){const e=t.next();e.done||(i=!1,yield{walker:t,value:e.value})}}}(i,n)){const t=e.walker==i?"elementEnd":"elementStart",n=e.value;if(n.type==t&&this.isObject(n.item))return na._createOn(n.item);if(this.checkChild(n.nextPosition,"$text"))return new na(n.nextPosition)}return null}findAllowedParent(e,t){let i=e.parent;for(;i;){if(this.checkChild(i,t))return i;if(this.isLimit(i))return null;i=i.parent}return null}removeDisallowedAttributes(e,t){for(const i of e)if(i.is("$text"))rc(this,i,t);else{const e=na._createIn(i).getPositions();for(const i of e){rc(this,i.nodeBefore||i.parent,t)}}}createContext(e){return new $a(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,i=Object.keys(t);for(const n of i)e[n]=Ya(t[n],n);for(const t of i)Ga(e,t);for(const t of i)Ka(e,t);for(const t of i)Qa(e,t);for(const t of i)Ja(e,t),Za(e,t);for(const t of i)Xa(e,t),ec(e,t),tc(e,t);this._compiledDefinitions=e}_checkContextMatch(e,t,i=t.length-1){const n=t.getItem(i);if(e.allowIn.includes(n.name)){if(0==i)return!0;{const e=this.getDefinition(n);return this._checkContextMatch(e,t,i-1)}}return!1}*_getValidRangesForRange(e,t){let i=e.start,n=e.start;for(const o of e.getItems({shallow:!0}))o.is("element")&&(yield*this._getValidRangesForRange(na._createIn(o),t)),this.checkAttribute(o,t)||(i.isEqual(n)||(yield new na(i,n)),i=Xs._createAfter(o)),n=Xs._createAfter(o);i.isEqual(n)||(yield new na(i,n))}}Ke(qa,Ue);class $a{constructor(e){if(e instanceof $a)return e;"string"==typeof e?e=[e]:Array.isArray(e)||(e=e.getAncestors({includeSelf:!0})),this._items=e.map(oc)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new $a([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function Ya(e,t){const i={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(e,t){for(const i of e){const e=Object.keys(i).filter(e=>e.startsWith("is"));for(const n of e)t[n]=i[n]}}(e,i),ic(e,i,"allowIn"),ic(e,i,"allowContentOf"),ic(e,i,"allowWhere"),ic(e,i,"allowAttributes"),ic(e,i,"allowAttributesOf"),ic(e,i,"allowChildren"),ic(e,i,"inheritTypesFrom"),function(e,t){for(const i of e){const e=i.inheritAllFrom;e&&(t.allowContentOf.push(e),t.allowWhere.push(e),t.allowAttributesOf.push(e),t.inheritTypesFrom.push(e))}}(e,i),i}function Ga(e,t){const i=e[t];for(const n of i.allowChildren){const i=e[n];i&&i.allowIn.push(t)}i.allowChildren.length=0}function Ka(e,t){for(const i of e[t].allowContentOf)if(e[i]){nc(e,i).forEach(e=>{e.allowIn.push(t)})}delete e[t].allowContentOf}function Qa(e,t){for(const i of e[t].allowWhere){const n=e[i];if(n){const i=n.allowIn;e[t].allowIn.push(...i)}}delete e[t].allowWhere}function Ja(e,t){for(const i of e[t].allowAttributesOf){const n=e[i];if(n){const i=n.allowAttributes;e[t].allowAttributes.push(...i)}}delete e[t].allowAttributesOf}function Za(e,t){const i=e[t];for(const t of i.inheritTypesFrom){const n=e[t];if(n){const e=Object.keys(n).filter(e=>e.startsWith("is"));for(const t of e)t in i||(i[t]=n[t])}}delete i.inheritTypesFrom}function Xa(e,t){const i=e[t],n=i.allowIn.filter(t=>e[t]);i.allowIn=Array.from(new Set(n))}function ec(e,t){const i=e[t];for(const n of i.allowIn){e[n].allowChildren.push(t)}}function tc(e,t){const i=e[t];i.allowAttributes=Array.from(new Set(i.allowAttributes))}function ic(e,t,i){for(const n of e)"string"==typeof n[i]?t[i].push(n[i]):Array.isArray(n[i])&&t[i].push(...n[i])}function nc(e,t){const i=e[t];return(n=e,Object.keys(n).map(e=>n[e])).filter(e=>e.allowIn.includes(i.name));var n}function oc(e){return"string"==typeof e||e.is("documentFragment")?{name:"string"==typeof e?e:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:e.is("element")?e.name:"$text",*getAttributeKeys(){yield*e.getAttributeKeys()},getAttribute:t=>e.getAttribute(t)}}function rc(e,t,i){for(const n of t.getAttributeKeys())e.checkAttribute(t,n)||i.removeAttribute(n,t)}class sc{constructor(e={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(e,t,i=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(e,t){let i;for(const n of new $a(e)){const e={};for(const t of n.getAttributeKeys())e[t]=n.getAttribute(t);const o=t.createElement(n.name,e);i&&t.append(o,i),i=Xs._createAt(o,0)}return i}(i,t),this.conversionApi.writer=t,this.conversionApi.consumable=Ua.createFrom(e),this.conversionApi.store={};const{modelRange:n}=this._convertItem(e,this._modelCursor),o=t.createDocumentFragment();if(n){this._removeEmptyElements();for(const e of Array.from(this._modelCursor.parent.getChildren()))t.append(e,o);o.markers=function(e,t){const i=new Set,n=new Map,o=na._createIn(e).getItems();for(const e of o)"$marker"==e.name&&i.add(e);for(const e of i){const i=e.getAttribute("data-name"),o=t.createPositionBefore(e);n.has(i)?n.get(i).end=o.clone():n.set(i,new na(o.clone())),t.remove(e)}return n}(o,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,o}_convertItem(e,t){const i=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is("element")?this.fire("element:"+e.name,i,this.conversionApi):e.is("$text")?this.fire("text",i,this.conversionApi):this.fire("documentFragment",i,this.conversionApi),i.modelRange&&!(i.modelRange instanceof na))throw new c.a("view-conversion-dispatcher-incorrect-result",this);return{modelRange:i.modelRange,modelCursor:i.modelCursor}}_convertChildren(e,t){let i=t.is("position")?t:Xs._createAt(t,0);const n=new na(i);for(const t of Array.from(e.getChildren())){const e=this._convertItem(t,i);e.modelRange instanceof na&&(n.end=e.modelRange.end,i=e.modelCursor)}return{modelRange:n,modelCursor:i}}_safeInsert(e,t){const i=this._splitToAllowedParent(e,t);return!!i&&(this.conversionApi.writer.insert(e,i.position),!0)}_updateConversionResult(e,t){const i=this._getSplitParts(e),n=this.conversionApi.writer;t.modelRange||(t.modelRange=n.createRange(n.createPositionBefore(e),n.createPositionAfter(i[i.length-1])));const o=this._cursorParents.get(e);t.modelCursor=o?n.createPositionAt(o,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:i,writer:n}=this.conversionApi;let o=i.findAllowedParent(t,e);if(o){if(o===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(o)&&(o=null)}if(!o)return Na(t,e,i)?{position:Ra(t,n)}:null;const r=this.conversionApi.writer.split(t,o),s=[];for(const e of r.range.getWalker())if("elementEnd"==e.type)s.push(e.item);else{const t=s.pop(),i=e.item;this._registerSplitPair(t,i)}const a=r.range.end.parent;return this._cursorParents.set(e,a),{position:r.position,cursorParent:a}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const i=this._splitParts.get(e);this._splitParts.set(t,i),i.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}Ke(sc,h);class ac{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class cc{constructor(e){this.domParser=new DOMParser,this.domConverter=new Tr(e,{renderingMode:"data"}),this.htmlWriter=new ac}toData(e){const t=this.domConverter.viewToDom(e,document);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode="marked"==e?"markedNbsp":"nbsp"}_toDom(e){const t=this.domParser.parseFromString(e,"text/html"),i=t.createDocumentFragment();let n=t.firstChild;for(;!n.isSameNode(t.documentElement);){const e=n;n=n.nextSibling,e.nodeType==Node.COMMENT_NODE&&i.appendChild(e)}const o=t.body.childNodes;for(;o.length>0;)i.appendChild(o[0]);return i}}class lc{constructor(e,t){this.model=e,this.mapper=new oa,this.downcastDispatcher=new aa({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(e,t,i)=>{if(!i.consumable.consume(t.item,"insert"))return;const n=i.writer,o=i.mapper.toViewPosition(t.range.start),r=n.createText(t.item.data);n.insert(o,r)},{priority:"lowest"}),this.upcastDispatcher=new sc({schema:e.schema}),this.viewDocument=new yo(t),this.stylesProcessor=t,this.htmlProcessor=new cc(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Wo(this.viewDocument),this.upcastDispatcher.on("text",(e,t,{schema:i,consumable:n,writer:o})=>{let r=t.modelCursor;if(!n.test(t.viewItem))return;if(!i.checkChild(r,"$text")){if(!Na(r,"$text",i))return;r=Ra(r,o)}n.consume(t.viewItem);const s=o.createText(t.viewItem.data);o.insert(s,r),t.modelRange=o.createRange(r,r.getShiftedBy(s.offsetSize)),t.modelCursor=t.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(e,t,i)=>{if(!t.modelRange&&i.consumable.consume(t.viewItem,{name:!0})){const{modelRange:e,modelCursor:n}=i.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=n}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(e,t,i)=>{if(!t.modelRange&&i.consumable.consume(t.viewItem,{name:!0})){const{modelRange:e,modelCursor:n}=i.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=n}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange("transparent",Ma)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:i="empty"}=e;if(!this._checkIfRootsExists([t]))throw new c.a("datacontroller-get-non-existent-root",this);const n=this.model.document.getRoot(t);return"empty"!==i||this.model.hasContent(n,{ignoreWhitespaces:!0})?this.stringify(n,e):""}stringify(e,t={}){const i=this.toView(e,t);return this.processor.toData(i)}toView(e,t={}){const i=this.viewDocument,n=this._viewWriter;this.mapper.clearBindings();const o=na._createIn(e),r=new Uo(i);this.mapper.bindElements(e,r),this.downcastDispatcher.conversionApi.options=t,this.downcastDispatcher.convertInsert(o,n);const s=e.is("documentFragment")?Array.from(e.markers):function(e){const t=[],i=e.root.document;if(!i)return[];const n=na._createIn(e);for(const e of i.model.markers){const i=e.getRange(),o=i.isCollapsed,r=i.start.isEqual(n.start)||i.end.isEqual(n.end);if(o&&r)t.push([e.name,i]);else{const o=n.getIntersection(i);o&&t.push([e.name,o])}}return t.sort(([e,t],[i,n])=>{if("after"!==t.end.compareWith(n.start))return 1;if("before"!==t.start.compareWith(n.end))return-1;switch(t.start.compareWith(n.start)){case"before":return 1;case"after":return-1;default:switch(t.end.compareWith(n.end)){case"before":return 1;case"after":return-1;default:return i.localeCompare(e)}}})}(e);for(const[e,t]of s)this.downcastDispatcher.convertMarkerAdd(e,t,n);return delete this.downcastDispatcher.conversionApi.options,r}init(e){if(this.model.document.version)throw new c.a("datacontroller-init-document-not-empty",this);let t={};if("string"==typeof e?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new c.a("datacontroller-init-non-existent-root",this);return this.model.enqueueChange("transparent",e=>{for(const i of Object.keys(t)){const n=this.model.document.getRoot(i);e.insert(this.parse(t[i],n),n,0)}}),Promise.resolve()}set(e,t={}){let i={};if("string"==typeof e?i.main=e:i=e,!this._checkIfRootsExists(Object.keys(i)))throw new c.a("datacontroller-set-non-existent-root",this);const n=t.batchType||"default";this.model.enqueueChange(n,e=>{e.setSelection(null),e.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const t of Object.keys(i)){const n=this.model.document.getRoot(t);e.remove(e.createRangeIn(n)),e.insert(this.parse(i[t],n),n,0)}})}parse(e,t="$root"){const i=this.processor.toView(e);return this.toModel(i,t)}toModel(e,t="$root"){return this.model.change(i=>this.upcastDispatcher.convert(e,i,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}Ke(lc,Ue);class dc{constructor(e,t){this._helpers=new Map,this._downcast=en(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=en(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const i=this._downcast.includes(t);if(!this._upcast.includes(t)&&!i)throw new c.a("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:i})}for(e){if(!this._helpers.has(e))throw new c.a("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:i}of hc(e))this.for("upcast").elementToElement({model:t,view:i,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:i}of hc(e))this.for("upcast").elementToAttribute({view:i,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:i}of hc(e))this.for("upcast").attributeToAttribute({view:i,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:i}){if(this._helpers.has(e))throw new c.a("conversion-group-exists",this);const n=i?new Aa(t):new Oa(t);this._helpers.set(e,n)}}function*hc(e){if(e.model.values)for(const t of e.model.values){const i={key:e.model.key,value:t},n=e.view[t],o=e.upcastAlso?e.upcastAlso[t]:void 0;yield*uc(i,n,o)}else yield*uc(e.model,e.view,e.upcastAlso)}function*uc(e,t,i){if(yield{model:e,view:t},i)for(const t of en(i))yield{model:e,view:t}}class gc{constructor(e="default"){this.operations=[],this.type=e}get baseVersion(){for(const e of this.operations)if(null!==e.baseVersion)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class mc{constructor(e){this.baseVersion=e,this.isDocumentOperation=null!==this.baseVersion,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e){return new this(e.baseVersion)}}class fc{constructor(e){this.markers=new Map,this._children=new Ks,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(e){return"documentFragment"===e||"model:documentFragment"===e}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const i of e)t=t.getChild(t.offsetToIndex(i));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const i of e)i.name?t.push(Qs.fromJSON(i)):t.push(Ys.fromJSON(i));return new fc(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const i=function(e){if("string"==typeof e)return[new Ys(e)];Ji(e)||(e=[e]);return Array.from(e).map(e=>"string"==typeof e?new Ys(e):e instanceof Gs?new Ys(e.data,e.getAttributes()):e)}(t);for(const e of i)null!==e.parent&&e._remove(),e.parent=this;this._children._insertNodes(e,i)}_removeChildren(e,t=1){const i=this._children._removeNodes(e,t);for(const e of i)e.parent=null;return i}}function pc(e,t){const i=(t=kc(t)).reduce((e,t)=>e+t.offsetSize,0),n=e.parent;vc(e);const o=e.index;return n._insertChild(o,t),_c(n,o+t.length),_c(n,o),new na(e,e.getShiftedBy(i))}function bc(e){if(!e.isFlat)throw new c.a("operation-utils-remove-range-not-flat",this);const t=e.start.parent;vc(e.start),vc(e.end);const i=t._removeChildren(e.start.index,e.end.index-e.start.index);return _c(t,e.start.index),i}function wc(e,t){if(!e.isFlat)throw new c.a("operation-utils-move-range-not-flat",this);const i=bc(e);return pc(t=t._getTransformedByDeletion(e.start,e.end.offset-e.start.offset),i)}function kc(e){const t=[];e instanceof Array||(e=[e]);for(let i=0;i<e.length;i++)if("string"==typeof e[i])t.push(new Ys(e[i]));else if(e[i]instanceof Gs)t.push(new Ys(e[i].data,e[i].getAttributes()));else if(e[i]instanceof fc||e[i]instanceof Ks)for(const n of e[i])t.push(n);else e[i]instanceof $s&&t.push(e[i]);for(let e=1;e<t.length;e++){const i=t[e],n=t[e-1];i instanceof Ys&&n instanceof Ys&&yc(i,n)&&(t.splice(e-1,2,new Ys(n.data+i.data,n.getAttributes())),e--)}return t}function _c(e,t){const i=e.getChild(t-1),n=e.getChild(t);if(i&&n&&i.is("$text")&&n.is("$text")&&yc(i,n)){const o=new Ys(i.data+n.data,i.getAttributes());e._removeChildren(t-1,2),e._insertChild(t-1,o)}}function vc(e){const t=e.textNode,i=e.parent;if(t){const n=e.offset-t.startOffset,o=t.index;i._removeChildren(o,1);const r=new Ys(t.data.substr(0,n),t.getAttributes()),s=new Ys(t.data.substr(n),t.getAttributes());i._insertChild(o,[r,s])}}function yc(e,t){const i=e.getAttributes(),n=t.getAttributes();for(const e of i){if(e[1]!==t.getAttribute(e[0]))return!1;n.next()}return n.next().done}var xc=function(e,t){return Qr(e,t)};class Ac extends mc{constructor(e,t,i,n,o){super(o),this.range=e.clone(),this.key=t,this.oldValue=void 0===i?null:i,this.newValue=void 0===n?null:n}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new Ac(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Ac(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new c.a("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(null!==this.oldValue&&!xc(e.getAttribute(this.key),this.oldValue))throw new c.a("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&e.hasAttribute(this.key))throw new c.a("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){xc(this.oldValue,this.newValue)||function(e,t,i){vc(e.start),vc(e.end);for(const n of e.getItems({shallow:!0})){const e=n.is("$textProxy")?n.textNode:n;null!==i?e._setAttribute(t,i):e._removeAttribute(t),_c(e.parent,e.index)}_c(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new Ac(na.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Cc extends mc{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new c.a("detach-operation-on-document-node",this)}_execute(){bc(na._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Tc extends mc{constructor(e,t,i,n){super(n),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=i.clone(),this.targetPosition.stickiness="toNone"}get type(){return"$graveyard"==this.targetPosition.root.rootName?"remove":"$graveyard"==this.sourcePosition.root.rootName?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,i=this.sourcePosition.offset,n=this.targetPosition.offset;if(i+this.howMany>e.maxOffset)throw new c.a("move-operation-nodes-do-not-exist",this);if(e===t&&i<n&&n<i+this.howMany)throw new c.a("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==cn(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const e=this.sourcePosition.path.length-1;if(this.targetPosition.path[e]>=i&&this.targetPosition.path[e]<i+this.howMany)throw new c.a("move-operation-node-into-itself",this)}}_execute(){wc(na._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const i=Xs.fromJSON(e.sourcePosition,t),n=Xs.fromJSON(e.targetPosition,t);return new this(i,e.howMany,n,e.baseVersion)}}class Ec extends mc{constructor(e,t,i){super(i),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new Ks(kc(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new Ks([...this.nodes].map(e=>e._clone(!0))),t=new Ec(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new Xs(e,[0]);return new Tc(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new c.a("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new Ks([...e].map(e=>e._clone(!0))),pc(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const i=[];for(const t of e.nodes)t.name?i.push(Qs.fromJSON(t)):i.push(Ys.fromJSON(t));const n=new Ec(Xs.fromJSON(e.position,t),i,e.baseVersion);return n.shouldReceiveAttributes=e.shouldReceiveAttributes,n}}class Sc extends mc{constructor(e,t,i,n,o,r){super(r),this.name=e,this.oldRange=t?t.clone():null,this.newRange=i?i.clone():null,this.affectsData=o,this._markers=n}get type(){return"marker"}clone(){return new Sc(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Sc(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const e=this.newRange?"_set":"_remove";this._markers[e](this.name,this.newRange,!0,this.affectsData)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new Sc(e.name,e.oldRange?na.fromJSON(e.oldRange,t):null,e.newRange?na.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class Ic extends mc{constructor(e,t,i,n){super(n),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=i}get type(){return"rename"}clone(){return new Ic(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Ic(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Qs))throw new c.a("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new c.a("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new Ic(Xs.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Pc extends mc{constructor(e,t,i,n,o){super(o),this.root=e,this.key=t,this.oldValue=i,this.newValue=n}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new Pc(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Pc(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new c.a("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new c.a("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new c.a("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new c.a("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new Pc(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Mc extends mc{constructor(e,t,i,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=i.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=n.clone()}get type(){return"merge"}get deletionPosition(){return new Xs(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new na(this.sourcePosition,e)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),i=new Xs(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new Nc(e,this.howMany,i,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new c.a("merge-operation-source-position-invalid",this);if(!t.parent)throw new c.a("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new c.a("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;wc(na._createIn(e),this.targetPosition),wc(na._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const i=Xs.fromJSON(e.sourcePosition,t),n=Xs.fromJSON(e.targetPosition,t),o=Xs.fromJSON(e.graveyardPosition,t);return new this(i,e.howMany,n,o,e.baseVersion)}}class Nc extends mc{constructor(e,t,i,n,o){super(o),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=i,this.graveyardPosition=n?n.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new Xs(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new na(this.splitPosition,e)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new Xs(e,[0]);return new Mc(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new c.a("split-operation-position-invalid",this);if(!e.parent)throw new c.a("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new c.a("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new c.a("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)wc(na._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();pc(this.insertionPosition,t)}wc(new na(Xs._createAt(e,this.splitPosition.offset),Xs._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new Xs(e.root,t,"toPrevious")}static fromJSON(e,t){const i=Xs.fromJSON(e.splitPosition,t),n=Xs.fromJSON(e.insertionPosition,t),o=e.graveyardPosition?Xs.fromJSON(e.graveyardPosition,t):null;return new this(i,e.howMany,n,o,e.baseVersion)}}class Rc extends Qs{constructor(e,t,i="main"){super(t),this._document=e,this.rootName=i}get document(){return this._document}is(e,t){return t?t===this.name&&("rootElement"===e||"model:rootElement"===e||"element"===e||"model:element"===e):"rootElement"===e||"model:rootElement"===e||"element"===e||"model:element"===e||"node"===e||"model:node"===e}toJSON(){return this.rootName}}class Oc{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new Ys(e,t)}createElement(e,t){return new Qs(e,t)}createDocumentFragment(){return new fc}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,i=0){if(this._assertWriterUsedCorrectly(),e instanceof Ys&&""==e.data)return;const n=Xs._createAt(t,i);if(e.parent){if(jc(e.root,n.root))return void this.move(na._createOn(e),n);if(e.root.document)throw new c.a("model-writer-insert-forbidden-move",this);this.remove(e)}const o=n.root.document?n.root.document.version:null,r=new Ec(n,e,o);if(e instanceof Ys&&(r.shouldReceiveAttributes=!0),this.batch.addOperation(r),this.model.applyOperation(r),e instanceof fc)for(const[t,i]of e.markers){const e=Xs._createAt(i.root,0),o={range:new na(i.start._getCombined(e,n),i.end._getCombined(e,n)),usingOperation:!0,affectsData:!0};this.model.markers.has(t)?this.updateMarker(t,o):this.addMarker(t,o)}}insertText(e,t,i,n){t instanceof fc||t instanceof Qs||t instanceof Xs?this.insert(this.createText(e),t,i):this.insert(this.createText(e,t),i,n)}insertElement(e,t,i,n){t instanceof fc||t instanceof Qs||t instanceof Xs?this.insert(this.createElement(e),t,i):this.insert(this.createElement(e,t),i,n)}append(e,t){this.insert(e,t,"end")}appendText(e,t,i){t instanceof fc||t instanceof Qs?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),i,"end")}appendElement(e,t,i){t instanceof fc||t instanceof Qs?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),i,"end")}setAttribute(e,t,i){if(this._assertWriterUsedCorrectly(),i instanceof na){const n=i.getMinimalFlatRanges();for(const i of n)Dc(this,e,t,i)}else zc(this,e,t,i)}setAttributes(e,t){for(const[i,n]of gn(e))this.setAttribute(i,n,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof na){const i=t.getMinimalFlatRanges();for(const t of i)Dc(this,e,null,t)}else zc(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=e=>{for(const t of e.getAttributeKeys())this.removeAttribute(t,e)};if(e instanceof na)for(const i of e.getItems())t(i);else t(e)}move(e,t,i){if(this._assertWriterUsedCorrectly(),!(e instanceof na))throw new c.a("writer-move-invalid-range",this);if(!e.isFlat)throw new c.a("writer-move-range-not-flat",this);const n=Xs._createAt(t,i);if(n.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!jc(e.root,n.root))throw new c.a("writer-move-different-document",this);const o=e.root.document?e.root.document.version:null,r=new Tc(e.start,e.end.offset-e.start.offset,n,o);this.batch.addOperation(r),this.model.applyOperation(r)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof na?e:na._createOn(e)).getMinimalFlatRanges().reverse();for(const e of t)this._addOperationForAffectedMarkers("move",e),Vc(e.start,e.end.offset-e.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,i=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Qs))throw new c.a("writer-merge-no-element-before",this);if(!(i instanceof Qs))throw new c.a("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,i){return this.model.createPositionFromPath(e,t,i)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(e,t,i){return this.model.createSelection(e,t,i)}_mergeDetached(e){const t=e.nodeBefore,i=e.nodeAfter;this.move(na._createIn(i),Xs._createAt(t,"end")),this.remove(i)}_merge(e){const t=Xs._createAt(e.nodeBefore,"end"),i=Xs._createAt(e.nodeAfter,0),n=e.root.document.graveyard,o=new Xs(n,[0]),r=e.root.document.version,s=new Mc(i,e.nodeAfter.maxOffset,t,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Qs))throw new c.a("writer-rename-not-element-instance",this);const i=e.root.document?e.root.document.version:null,n=new Ic(Xs._createBefore(e),e.name,t,i);this.batch.addOperation(n),this.model.applyOperation(n)}split(e,t){this._assertWriterUsedCorrectly();let i,n,o=e.parent;if(!o.parent)throw new c.a("writer-split-element-no-parent",this);if(t||(t=o.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new c.a("writer-split-invalid-limit-element",this);do{const t=o.root.document?o.root.document.version:null,r=o.maxOffset-e.offset,s=Nc.getInsertionPosition(e),a=new Nc(e,r,s,null,t);this.batch.addOperation(a),this.model.applyOperation(a),i||n||(i=o,n=e.parent.nextSibling),o=(e=this.createPositionAfter(e.parent)).parent}while(o!==t);return{position:e,range:new na(Xs._createAt(i,"end"),Xs._createAt(n,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new c.a("writer-wrap-range-not-flat",this);const i=t instanceof Qs?t:new Qs(t);if(i.childCount>0)throw new c.a("writer-wrap-element-not-empty",this);if(null!==i.parent)throw new c.a("writer-wrap-element-attached",this);this.insert(i,e.start);const n=new na(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(n,Xs._createAt(i,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),null===e.parent)throw new c.a("writer-unwrap-element-no-parent",this);this.move(na._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||"boolean"!=typeof t.usingOperation)throw new c.a("writer-addmarker-no-usingoperation",this);const i=t.usingOperation,n=t.range,o=void 0!==t.affectsData&&t.affectsData;if(this.model.markers.has(e))throw new c.a("writer-addmarker-marker-exists",this);if(!n)throw new c.a("writer-addmarker-no-range",this);return i?(Lc(this,e,null,n,o),this.model.markers.get(e)):this.model.markers._set(e,n,i,o)}updateMarker(e,t){this._assertWriterUsedCorrectly();const i="string"==typeof e?e:e.name,n=this.model.markers.get(i);if(!n)throw new c.a("writer-updatemarker-marker-not-exists",this);if(!t)return void this.model.markers._refresh(n);const o="boolean"==typeof t.usingOperation,r="boolean"==typeof t.affectsData,s=r?t.affectsData:n.affectsData;if(!o&&!t.range&&!r)throw new c.a("writer-updatemarker-wrong-options",this);const a=n.getRange(),l=t.range?t.range:a;o&&t.usingOperation!==n.managedUsingOperations?t.usingOperation?Lc(this,i,null,l,s):(Lc(this,i,a,null,s),this.model.markers._set(i,l,void 0,s)):n.managedUsingOperations?Lc(this,i,a,l,s):this.model.markers._set(i,l,void 0,s)}removeMarker(e){this._assertWriterUsedCorrectly();const t="string"==typeof e?e:e.name;if(!this.model.markers.has(t))throw new c.a("writer-removemarker-no-marker",this);const i=this.model.markers.get(t);if(!i.managedUsingOperations)return void this.model.markers._remove(t);Lc(this,t,i.getRange(),null,i.affectsData)}setSelection(e,t,i){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,i)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),"string"==typeof e)this._setSelectionAttribute(e,t);else for(const[t,i]of gn(e))this._setSelectionAttribute(t,i)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),"string"==typeof e)this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const i=this.model.document.selection;if(i.isCollapsed&&i.anchor.parent.isEmpty){const n=ka._getStoreAttributeKey(e);this.setAttribute(n,t,i.anchor.parent)}i._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const i=ka._getStoreAttributeKey(e);this.removeAttribute(i,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new c.a("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const i of this.model.markers){if(!i.managedUsingOperations)continue;const n=i.getRange();let o=!1;if("move"===e)o=t.containsPosition(n.start)||t.start.isEqual(n.start)||t.containsPosition(n.end)||t.end.isEqual(n.end);else{const e=t.nodeBefore,i=t.nodeAfter,r=n.start.parent==e&&n.start.isAtEnd,s=n.end.parent==i&&0==n.end.offset,a=n.end.nodeAfter==i,c=n.start.nodeAfter==i;o=r||s||a||c}o&&this.updateMarker(i.name,{range:n})}}}function Dc(e,t,i,n){const o=e.model,r=o.document;let s,a,c,l=n.start;for(const e of n.getWalker({shallow:!0}))c=e.item.getAttribute(t),s&&a!=c&&(a!=i&&d(),l=s),s=e.nextPosition,a=c;function d(){const n=new na(l,s),c=n.root.document?r.version:null,d=new Ac(n,t,a,i,c);e.batch.addOperation(d),o.applyOperation(d)}s instanceof Xs&&s!=l&&a!=i&&d()}function zc(e,t,i,n){const o=e.model,r=o.document,s=n.getAttribute(t);let a,c;if(s!=i){if(n.root===n){const e=n.document?r.version:null;c=new Pc(n,t,s,i,e)}else{a=new na(Xs._createBefore(n),e.createPositionAfter(n));const o=a.root.document?r.version:null;c=new Ac(a,t,s,i,o)}e.batch.addOperation(c),o.applyOperation(c)}}function Lc(e,t,i,n,o){const r=e.model,s=r.document,a=new Sc(t,i,n,r.markers,o,s.version);e.batch.addOperation(a),r.applyOperation(a)}function Vc(e,t,i,n){let o;if(e.root.document){const i=n.document,r=new Xs(i.graveyard,[0]);o=new Tc(e,t,r,i.version)}else o=new Cc(e,t);i.addOperation(o),n.applyOperation(o)}function jc(e,t){return e===t||e instanceof Rc&&t instanceof Rc}class Bc{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize);const t=na._createOn(e);for(const e of this._markerCollection.getMarkersIntersectingRange(t)){const t=e.getRange();this.bufferMarkerChange(e.name,t,t,e.affectsData)}this._cachedChanges=null}bufferOperation(e){switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const t of e.range.getItems({shallow:!0}))this._isInInsertedElement(t.parent)||this._markAttribute(t);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const t=this._isInInsertedElement(e.sourcePosition.parent),i=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),i||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=na._createFromPositionAndShift(e.position,1);for(const e of this._markerCollection.getMarkersIntersectingRange(t)){const t=e.getRange();this.bufferMarkerChange(e.name,t,t,e.affectsData)}break}case"split":{const t=e.splitPosition.parent;this._isInInsertedElement(t)||this._markRemove(t,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const t=e.sourcePosition.parent;this._isInInsertedElement(t.parent)||this._markRemove(t.parent,t.startOffset,1);const i=e.graveyardPosition.parent;this._markInsert(i,e.graveyardPosition.offset,1);const n=e.targetPosition.parent;this._isInInsertedElement(n)||this._markInsert(n,e.targetPosition.offset,t.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,i,n){const o=this._changedMarkers.get(e);o?(o.newRange=i,o.affectsData=n,null==o.oldRange&&null==o.newRange&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{oldRange:t,newRange:i,affectsData:n})}getMarkersToRemove(){const e=[];for(const[t,i]of this._changedMarkers)null!=i.oldRange&&e.push({name:t,range:i.oldRange});return e}getMarkersToAdd(){const e=[];for(const[t,i]of this._changedMarkers)null!=i.newRange&&e.push({name:t,range:i.newRange});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(e=>({name:e[0],data:{oldRange:e[1].oldRange,newRange:e[1].newRange}}))}hasDataChanges(){for(const[,e]of this._changedMarkers)if(e.affectsData)return!0;return this._changesInElement.size>0}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const e of this._changesInElement.keys()){const i=this._changesInElement.get(e).sort((e,t)=>e.offset===t.offset?e.type!=t.type?"remove"==e.type?-1:1:0:e.offset<t.offset?-1:1),n=this._elementSnapshots.get(e),o=Fc(e.getChildren()),r=Hc(n.length,i);let s=0,a=0;for(const i of r)if("i"===i)t.push(this._getInsertDiff(e,s,o[s].name)),s++;else if("r"===i)t.push(this._getRemoveDiff(e,s,n[a].name)),a++;else if("a"===i){const i=o[s].attributes,r=n[a].attributes;let c;if("$text"==o[s].name)c=new na(Xs._createAt(e,s),Xs._createAt(e,s+1));else{const t=e.offsetToIndex(s);c=new na(Xs._createAt(e,s),Xs._createAt(e.getChild(t),0))}t.push(...this._getAttributesDiff(c,r,i)),s++,a++}else s++,a++}t.sort((e,t)=>e.position.root!=t.position.root?e.position.root.rootName<t.position.root.rootName?-1:1:e.position.isEqual(t.position)?e.changeCount-t.changeCount:e.position.isBefore(t.position)?-1:1);for(let e=1,i=0;e<t.length;e++){const n=t[i],o=t[e],r="remove"==n.type&&"remove"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.isEqual(o.position),s="insert"==n.type&&"insert"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.parent==o.position.parent&&n.position.offset+n.length==o.position.offset,a="attribute"==n.type&&"attribute"==o.type&&n.position.parent==o.position.parent&&n.range.isFlat&&o.range.isFlat&&n.position.offset+n.length==o.position.offset&&n.attributeKey==o.attributeKey&&n.attributeOldValue==o.attributeOldValue&&n.attributeNewValue==o.attributeNewValue;r||s||a?(n.length++,a&&(n.range.end=n.range.end.getShiftedBy(1)),t[e]=null):i=e}t=t.filter(e=>e);for(const e of t)delete e.changeCount,"attribute"==e.type&&(delete e.position,delete e.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t.slice(),this._cachedChanges=t.filter(Uc),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(e,t,i){const n={type:"insert",offset:t,howMany:i,count:this._changeCount++};this._markChange(e,n)}_markRemove(e,t,i){const n={type:"remove",offset:t,howMany:i,count:this._changeCount++};this._markChange(e,n),this._removeAllNestedChanges(e,t,i)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const i=this._getChangesForElement(e);this._handleChange(t,i),i.push(t);for(let e=0;e<i.length;e++)i[e].howMany<1&&(i.splice(e,1),e--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,Fc(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const i of t){const n=e.offset+e.howMany,o=i.offset+i.howMany;if("insert"==e.type&&("insert"==i.type&&(e.offset<=i.offset?i.offset+=e.howMany:e.offset<o&&(i.howMany+=e.nodesToHandle,e.nodesToHandle=0)),"remove"==i.type&&e.offset<i.offset&&(i.offset+=e.howMany),"attribute"==i.type))if(e.offset<=i.offset)i.offset+=e.howMany;else if(e.offset<o){const o=i.howMany;i.howMany=e.offset-i.offset,t.unshift({type:"attribute",offset:n,howMany:o-i.howMany,count:this._changeCount++})}if("remove"==e.type){if("insert"==i.type)if(n<=i.offset)i.offset-=e.howMany;else if(n<=o)if(e.offset<i.offset){const t=n-i.offset;i.offset=e.offset,i.howMany-=t,e.nodesToHandle-=t}else i.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=i.offset)e.nodesToHandle-=i.howMany,i.howMany=0;else if(e.offset<o){const t=o-e.offset;i.howMany-=t,e.nodesToHandle-=t}if("remove"==i.type&&(n<=i.offset?i.offset-=e.howMany:e.offset<i.offset&&(e.nodesToHandle+=i.howMany,i.howMany=0)),"attribute"==i.type)if(n<=i.offset)i.offset-=e.howMany;else if(e.offset<i.offset){const t=n-i.offset;i.offset=e.offset,i.howMany-=t}else if(e.offset<o)if(n<=o){const n=i.howMany;i.howMany=e.offset-i.offset;const o=n-i.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:o,count:this._changeCount++})}else i.howMany-=o-e.offset}if("attribute"==e.type){if("insert"==i.type)if(e.offset<i.offset&&n>i.offset){if(n>o){const e={type:"attribute",offset:o,howMany:n-o,count:this._changeCount++};this._handleChange(e,t),t.push(e)}e.nodesToHandle=i.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=i.offset&&e.offset<o&&(n>o?(e.nodesToHandle=n-o,e.offset=o):e.nodesToHandle=0);if("remove"==i.type&&e.offset<i.offset&&n>i.offset){const o={type:"attribute",offset:i.offset,howMany:n-i.offset,count:this._changeCount++};this._handleChange(o,t),t.push(o),e.nodesToHandle=i.offset-e.offset,e.howMany=e.nodesToHandle}"attribute"==i.type&&(e.offset>=i.offset&&n<=o?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=i.offset&&n>=o&&(i.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,i){return{type:"insert",position:Xs._createAt(e,t),name:i,length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,i){return{type:"remove",position:Xs._createAt(e,t),name:i,length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,i){const n=[];i=new Map(i);for(const[o,r]of t){const t=i.has(o)?i.get(o):null;t!==r&&n.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:o,attributeOldValue:r,attributeNewValue:t,changeCount:this._changeCount++}),i.delete(o)}for(const[t,o]of i)n.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:t,attributeOldValue:null,attributeNewValue:o,changeCount:this._changeCount++});return n}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const i=this._changesInElement.get(t),n=e.startOffset;if(i)for(const e of i)if("insert"==e.type&&n>=e.offset&&n<e.offset+e.howMany)return!0;return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,i){const n=new na(Xs._createAt(e,t),Xs._createAt(e,t+i));for(const e of n.getItems({shallow:!0}))e.is("element")&&(this._elementSnapshots.delete(e),this._changesInElement.delete(e),this._removeAllNestedChanges(e,0,e.maxOffset))}}function Fc(e){const t=[];for(const i of e)if(i.is("$text"))for(let e=0;e<i.data.length;e++)t.push({name:"$text",attributes:new Map(i.getAttributes())});else t.push({name:i.name,attributes:new Map(i.getAttributes())});return t}function Hc(e,t){const i=[];let n=0,o=0;for(const e of t){if(e.offset>n){for(let t=0;t<e.offset-n;t++)i.push("e");o+=e.offset-n}if("insert"==e.type){for(let t=0;t<e.howMany;t++)i.push("i");n=e.offset+e.howMany}else if("remove"==e.type){for(let t=0;t<e.howMany;t++)i.push("r");n=e.offset,o+=e.howMany}else i.push(..."a".repeat(e.howMany).split("")),n=e.offset+e.howMany,o+=e.howMany}if(o<e)for(let t=0;t<e-o-n;t++)i.push("e");return i}function Uc(e){const t=e.position&&"$graveyard"==e.position.root.rootName,i=e.range&&"$graveyard"==e.range.root.rootName;return!t&&!i}class Wc{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(e){this._operations.includes(e)||this._operations.push(e)}getOperations(e=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY){const i=[];for(const n of this._operations)n.baseVersion>=e&&n.baseVersion<t&&i.push(n);return i}getOperation(e){for(const t of this._operations)if(t.baseVersion==e)return t}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}}function qc(e,t){return!!(i=e.charAt(t-1))&&1==i.length&&/[\ud800-\udbff]/.test(i)&&function(e){return!!e&&1==e.length&&/[\udc00-\udfff]/.test(e)}(e.charAt(t));var i}function $c(e,t){return!!(i=e.charAt(t))&&1==i.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(i);var i}class Yc{constructor(e){this.model=e,this.version=0,this.history=new Wc(this),this.selection=new ka(this),this.roots=new Zi({idProperty:"rootName"}),this.differ=new Bc(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root","$graveyard"),this.listenTo(e,"applyOperation",(e,t)=>{const i=t[0];if(i.isDocumentOperation&&i.baseVersion!==this.version)throw new c.a("model-document-applyoperation-wrong-version",this,{operation:i})},{priority:"highest"}),this.listenTo(e,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(e,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&(this.version++,this.history.addOperation(i))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(e,t,i,n)=>{this.differ.bufferMarkerChange(t.name,i,n,t.affectsData),null===i&&t.on("change",(e,i)=>{this.differ.bufferMarkerChange(t.name,i,t.getRange(),t.affectsData)})})}get graveyard(){return this.getRoot("$graveyard")}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new c.a("model-document-createroot-name-exists",this,{name:t});const i=new Rc(this,e,t);return this.roots.add(i),i}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>"$graveyard"!=e)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=ln(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,i=t.schema,n=t.createPositionFromPath(e,[0]);return i.getNearestSelectionRange(n)||t.createRange(n)}_validateSelectionRange(e){return Gc(e.start)&&Gc(e.end)}_callPostFixers(e){let t=!1;do{for(const i of this._postFixers)if(this.selection.refresh(),t=i(e),t)break}while(t)}}function Gc(e){const t=e.textNode;if(t){const i=t.data,n=e.offset-t.startOffset;return!qc(i,n)&&!$c(i,n)}return!0}Ke(Yc,h);class Kc{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof Qc?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,i=!1,n=!1){const o=e instanceof Qc?e.name:e;if(o.includes(","))throw new c.a("markercollection-incorrect-marker-name",this);const r=this._markers.get(o);if(r){const e=r.getRange();let s=!1;return e.isEqual(t)||(r._attachLiveRange(pa.fromRange(t)),s=!0),i!=r.managedUsingOperations&&(r._managedUsingOperations=i,s=!0),"boolean"==typeof n&&n!=r.affectsData&&(r._affectsData=n,s=!0),s&&this.fire("update:"+o,r,e,t),r}const s=pa.fromRange(t),a=new Qc(o,s,i,n);return this._markers.set(o,a),this.fire("update:"+o,a,null,t),a}_remove(e){const t=e instanceof Qc?e.name:e,i=this._markers.get(t);return!!i&&(this._markers.delete(t),this.fire("update:"+t,i,i.getRange(),null),this._destroyMarker(i),!0)}_refresh(e){const t=e instanceof Qc?e.name:e,i=this._markers.get(t);if(!i)throw new c.a("markercollection-refresh-marker-not-exists",this);const n=i.getRange();this.fire("update:"+t,i,n,n,i.managedUsingOperations,i.affectsData)}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)null!==t.getRange().getIntersection(e)&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}Ke(Kc,h);class Qc{constructor(e,t,i,n){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=i,this._affectsData=n}get managedUsingOperations(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._affectsData}getStart(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new c.a("marker-destroyed",this);return this._liveRange.toRange()}is(e){return"marker"===e||"model:marker"===e}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Ke(Qc,h);class Jc extends mc{get type(){return"noop"}clone(){return new Jc(this.baseVersion)}getReversed(){return new Jc(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const Zc={};Zc[Ac.className]=Ac,Zc[Ec.className]=Ec,Zc[Sc.className]=Sc,Zc[Tc.className]=Tc,Zc[Jc.className]=Jc,Zc[mc.className]=mc,Zc[Ic.className]=Ic,Zc[Pc.className]=Pc,Zc[Nc.className]=Nc,Zc[Mc.className]=Mc;class Xc extends Xs{constructor(e,t,i="toNone"){if(super(e,t,i),!this.root.is("rootElement"))throw new c.a("model-liveposition-root-not-rootelement",e);el.call(this)}detach(){this.stopListening()}is(e){return"livePosition"===e||"model:livePosition"===e||"position"==e||"model:position"===e}toPosition(){return new Xs(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function el(){this.listenTo(this.root.document.model,"applyOperation",(e,t)=>{const i=t[0];i.isDocumentOperation&&tl.call(this,i)},{priority:"low"})}function tl(e){const t=this.getTransformedByOperation(e);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}Ke(Xc,h);class il{constructor(e,t,i){this.model=e,this.writer=t,this.position=i,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),i=this.writer.createPositionAfter(e);if(i.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new c.a("insertcontent-invalid-insertion-position",this);this.position=i,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?na._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new na(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=Xc.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new c.a("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=e:this.nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=Xc.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Xc.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Qs))return;if(!this._canMergeLeft(e))return;const t=Xc._createBefore(e);t.stickiness="toNext";const i=Xc.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=Xc._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Xc._createAt(t.nodeBefore,"end","toNext")),this.position=i.toPosition(),i.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Qs))return;if(!this._canMergeRight(e))return;const t=Xc._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new c.a("insertcontent-invalid-insertion-position",this);this.position=Xs._createAt(t.nodeBefore,"end");const i=Xc.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=Xc._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Xc._createAt(t.nodeBefore,0,"toPrevious")),this.position=i.toPosition(),i.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Qs&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Qs&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const e=this.position.parent;this.position=this.writer.createPositionBefore(e),e.isEmpty&&e.parent===t&&this.writer.remove(e)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const e=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=e,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function nl(e,t,i={}){if(t.isCollapsed)return;const n=t.getFirstRange();if("$graveyard"==n.root.rootName)return;const o=e.schema;e.change(e=>{if(!i.doNotResetEntireContent&&function(e,t){const i=e.getLimitElement(t);if(!t.containsEntireContent(i))return!1;const n=t.getFirstRange();if(n.start.parent==n.end.parent)return!1;return e.checkChild(i,"paragraph")}(o,t))return void function(e,t){const i=e.model.schema.getLimitElement(t);e.remove(e.createRangeIn(i)),rl(e,e.createPositionAt(i,0),t)}(e,t);const[r,s]=function(e){const t=e.root.document.model,i=e.start;let n=e.end;if(t.hasContent(e,{ignoreMarkers:!0})){const i=function(e){const t=e.parent,i=t.root.document.model.schema,n=t.getAncestors({parentFirst:!0,includeSelf:!0});for(const e of n){if(i.isLimit(e))return null;if(i.isBlock(e))return e}}(n);if(i&&n.isTouching(t.createPositionAt(i,0))){const i=t.createSelection(e);t.modifySelection(i,{direction:"backward"});const o=i.getLastPosition(),r=t.createRange(o,n);t.hasContent(r,{ignoreMarkers:!0})||(n=o)}}return[Xc.fromPosition(i,"toPrevious"),Xc.fromPosition(n,"toNext")]}(n);r.isTouching(s)||e.remove(e.createRange(r,s)),i.leaveUnmerged||(!function(e,t,i){const n=e.model;if(!ol(e.model.schema,t,i))return;const[o,r]=function(e,t){const i=e.getAncestors(),n=t.getAncestors();let o=0;for(;i[o]&&i[o]==n[o];)o++;return[i[o],n[o]]}(t,i);if(!o||!r)return;!n.hasContent(o,{ignoreMarkers:!0})&&n.hasContent(r,{ignoreMarkers:!0})?function e(t,i,n,o){const r=i.parent,s=n.parent;if(r==o||s==o)return;i=t.createPositionAfter(r),(n=t.createPositionBefore(s)).isEqual(i)||t.insert(r,n);for(;i.parent.isEmpty;){const e=i.parent;i=t.createPositionBefore(e),t.remove(e)}if(n=t.createPositionBefore(s),function(e,t){const i=t.nodeBefore,n=t.nodeAfter;i.name!=n.name&&e.rename(i,n.name);e.clearAttributes(i),e.setAttributes(Object.fromEntries(n.getAttributes()),i),e.merge(t)}(t,n),!ol(t.model.schema,i,n))return;e(t,i,n,o)}(e,t,i,o.parent):function e(t,i,n,o){const r=i.parent,s=n.parent;if(r==o||s==o)return;i=t.createPositionAfter(r),(n=t.createPositionBefore(s)).isEqual(i)||t.insert(s,i);t.merge(i);for(;n.parent.isEmpty;){const e=n.parent;n=t.createPositionBefore(e),t.remove(e)}if(!ol(t.model.schema,i,n))return;e(t,i,n,o)}(e,t,i,o.parent)}(e,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),e)),sl(e,t,r),!i.doNotAutoparagraph&&function(e,t){const i=e.checkChild(t,"$text"),n=e.checkChild(t,"paragraph");return!i&&n}(o,r)&&rl(e,r,t),r.detach(),s.detach()})}function ol(e,t,i){const n=t.parent,o=i.parent;return n!=o&&(!e.isLimit(n)&&!e.isLimit(o)&&function(e,t,i){const n=new na(e,t);for(const e of n.getWalker())if(i.isLimit(e.item))return!1;return!0}(t,i,e))}function rl(e,t,i){const n=e.createElement("paragraph");e.insert(n,t),sl(e,i,e.createPositionAt(n,0))}function sl(e,t,i){t instanceof ka?e.setSelection(i):t.setTo(i)}function al(e,t){const{isForward:i,walker:n,unit:o,schema:r}=e,{type:s,item:a,nextPosition:c}=t;if("text"==s)return"word"===e.unit?function(e,t){let i=e.position.textNode;if(i){let n=e.position.offset-i.startOffset;for(;!ll(i.data,n,t)&&!dl(i,n,t);){e.next();const o=t?e.position.nodeAfter:e.position.nodeBefore;if(o&&o.is("$text")){const n=o.data.charAt(t?0:o.data.length-1);' ,.?!:;"-()'.includes(n)||(e.next(),i=e.position.textNode)}n=e.position.offset-i.startOffset}}return e.position}(n,i):function(e,t){const i=e.position.textNode;if(i){const n=i.data;let o=e.position.offset-i.startOffset;for(;qc(n,o)||"character"==t&&$c(n,o);)e.next(),o=e.position.offset-i.startOffset}return e.position}(n,o);if(s==(i?"elementStart":"elementEnd")){if(r.isSelectable(a))return Xs._createAt(a,i?"after":"before");if(r.checkChild(c,"$text"))return c}else{if(r.isLimit(a))return void n.skip(()=>!0);if(r.checkChild(c,"$text"))return c}}function cl(e,t){const i=e.root,n=Xs._createAt(i,t?"end":0);return t?new na(e,n):new na(n,e)}function ll(e,t,i){const n=t+(i?0:-1);return' ,.?!:;"-()'.includes(e.charAt(n))}function dl(e,t,i){return t===(i?e.endOffset:0)}function hl(e,t){const i=[];Array.from(e.getItems({direction:"backward"})).map(e=>t.createRangeOn(e)).filter(t=>(t.start.isAfter(e.start)||t.start.isEqual(e.start))&&(t.end.isBefore(e.end)||t.end.isEqual(e.end))).forEach(e=>{i.push(e.start.parent),t.remove(e)}),i.forEach(e=>{let i=e;for(;i.parent&&i.isEmpty;){const e=t.createRangeOn(i);i=i.parent,t.remove(e)}})}function ul(e){e.document.registerPostFixer(t=>function(e,t){const i=t.document.selection,n=t.schema,o=[];let r=!1;for(const e of i.getRanges()){const t=gl(e,n);t&&!t.isEqual(e)?(o.push(t),r=!0):o.push(e)}r&&e.setSelection(function(e){const t=[];t.push(e.shift());for(const i of e){const e=t.pop();if(i.isEqual(e))t.push(e);else if(i.isIntersecting(e)){const n=e.start.isAfter(i.start)?i.start:e.start,o=e.end.isAfter(i.end)?e.end:i.end,r=new na(n,o);t.push(r)}else t.push(e),t.push(i)}return t}(o),{backward:i.isBackward})}(t,e))}function gl(e,t){return e.isCollapsed?function(e,t){const i=e.start,n=t.getNearestSelectionRange(i);if(!n){const e=i.getAncestors().reverse().find(e=>t.isObject(e));return e?na._createOn(e):null}if(!n.isCollapsed)return n;const o=n.start;if(i.isEqual(o))return null;return new na(o)}(e,t):function(e,t){const{start:i,end:n}=e,o=t.checkChild(i,"$text"),r=t.checkChild(n,"$text"),s=t.getLimitElement(i),a=t.getLimitElement(n);if(s===a){if(o&&r)return null;if(function(e,t,i){const n=e.nodeAfter&&!i.isLimit(e.nodeAfter)||i.checkChild(e,"$text"),o=t.nodeBefore&&!i.isLimit(t.nodeBefore)||i.checkChild(t,"$text");return n||o}(i,n,t)){const e=i.nodeAfter&&t.isSelectable(i.nodeAfter)?null:t.getNearestSelectionRange(i,"forward"),o=n.nodeBefore&&t.isSelectable(n.nodeBefore)?null:t.getNearestSelectionRange(n,"backward"),r=e?e.start:i,s=o?o.end:n;return new na(r,s)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const e=i.nodeAfter&&n.nodeBefore&&i.nodeAfter.parent===n.nodeBefore.parent,o=c&&(!e||!fl(i.nodeAfter,t)),r=l&&(!e||!fl(n.nodeBefore,t));let d=i,h=n;return o&&(d=Xs._createBefore(ml(s,t))),r&&(h=Xs._createAfter(ml(a,t))),new na(d,h)}return null}(e,t)}function ml(e,t){let i=e,n=i;for(;t.isLimit(n)&&n.parent;)i=n,n=n.parent;return i}function fl(e,t){return e&&t.isSelectable(e)}class pl{constructor(){this.markers=new Kc,this.document=new Yc(this),this.schema=new qa,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if("$marker"===t.name)return!0}),ul(this),this.document.registerPostFixer(Ma)}change(e){try{return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new gc,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(e){c.a.rethrowUnexpectedError(e,this)}}enqueueChange(e,t){try{"string"==typeof e?e=new gc(e):"function"==typeof e&&(t=e,e=new gc),this._pendingChanges.push({batch:e,callback:t}),1==this._pendingChanges.length&&this._runPendingChanges()}catch(e){c.a.rethrowUnexpectedError(e,this)}}applyOperation(e){e._execute()}insertContent(e,t,i){return function(e,t,i,n){return e.change(o=>{let r;r=i?i instanceof ha||i instanceof ka?i:o.createSelection(i,n):e.document.selection,r.isCollapsed||e.deleteContent(r,{doNotAutoparagraph:!0});const s=new il(e,o,r.anchor);let a;a=t.is("documentFragment")?t.getChildren():[t],s.handleNodes(a);const c=s.getSelectionRange();c&&(r instanceof ka?o.setSelection(c):r.setTo(c));const l=s.getAffectedRange()||e.createRange(r.anchor);return s.destroy(),l})}(this,e,t,i)}deleteContent(e,t){nl(this,e,t)}modifySelection(e,t){!function(e,t,i={}){const n=e.schema,o="backward"!=i.direction,r=i.unit?i.unit:"character",s=t.focus,a=new Js({boundaries:cl(s,o),singleCharacters:!0,direction:o?"forward":"backward"}),c={walker:a,schema:n,isForward:o,unit:r};let l;for(;l=a.next();){if(l.done)return;const i=al(c,l.value);if(i)return void(t instanceof ka?e.change(e=>{e.setSelectionFocus(i)}):t.setFocus(i))}}(this,e,t)}getSelectedContent(e){return function(e,t){return e.change(e=>{const i=e.createDocumentFragment(),n=t.getFirstRange();if(!n||n.isCollapsed)return i;const o=n.start.root,r=n.start.getCommonPath(n.end),s=o.getNodeByPath(r);let a;a=n.start.parent==n.end.parent?n:e.createRange(e.createPositionAt(s,n.start.path[r.length]),e.createPositionAt(s,n.end.path[r.length]+1));const c=a.end.offset-a.start.offset;for(const t of a.getItems({shallow:!0}))t.is("$textProxy")?e.appendText(t.data,t.getAttributes(),i):e.append(e.cloneElement(t,!0),i);if(a!=n){const t=n._getTransformedByMove(a.start,e.createPositionAt(i,0),c)[0],o=e.createRange(e.createPositionAt(i,0),t.start);hl(e.createRange(t.end,e.createPositionAt(i,"end")),e),hl(o,e)}return i})}(this,e)}hasContent(e,t={}){const i=e instanceof Qs?na._createIn(e):e;if(i.isCollapsed)return!1;const{ignoreWhitespaces:n=!1,ignoreMarkers:o=!1}=t;if(!o)for(const e of this.markers.getMarkersIntersectingRange(i))if(e.affectsData)return!0;for(const e of i.getItems())if(this.schema.isContent(e)){if(!e.is("$textProxy"))return!0;if(!n)return!0;if(-1!==e.data.search(/\S/))return!0}return!1}createPositionFromPath(e,t,i){return new Xs(e,t,i)}createPositionAt(e,t){return Xs._createAt(e,t)}createPositionAfter(e){return Xs._createAfter(e)}createPositionBefore(e){return Xs._createBefore(e)}createRange(e,t){return new na(e,t)}createRangeIn(e){return na._createIn(e)}createRangeOn(e){return na._createOn(e)}createSelection(e,t,i){return new ha(e,t,i)}createBatch(e){return new gc(e)}createOperationFromJSON(e){return class{static fromJSON(e,t){return Zc[e.__className].fromJSON(e,t)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new Oc(this,t);const i=this._pendingChanges[0].callback(this._currentWriter);e.push(i),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),e}}Ke(pl,Ue);class bl extends Rs{constructor(e){super(),this.editor=e}set(e,t,i={}){if("string"==typeof t){const e=t;t=(t,i)=>{this.editor.execute(e),i()}}super.set(e,t,i)}}class wl{constructor(e={}){this._context=e.context||new sn({language:e.language}),this._context._addEditor(this,!e.context);const t=Array.from(this.constructor.builtinPlugins||[]);this.config=new Gi(e,this.constructor.defaultConfig),this.config.define("plugins",t),this.config.define(this._context._getEditorConfig()),this.plugins=new Xi(this,t,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this.commands=new Ha,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new pl;const i=new Jn;this.data=new lc(this.model,i),this.editing=new Fa(this.model,i),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new dc([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new bl(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const e=this.config,t=e.get("plugins"),i=e.get("removePlugins")||[],n=e.get("extraPlugins")||[],o=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(n),i,o)}destroy(){let e=Promise.resolve();return"initializing"==this.state&&(e=new Promise(e=>this.once("ready",e))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(e){c.a.rethrowUnexpectedError(e,this)}}focus(){this.editing.view.focus()}}Ke(wl,Ue);class kl{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(_l(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new c.a("componentfactory-item-missing",this,{name:e});return this._components.get(_l(e)).callback(this.editor.locale)}has(e){return this._components.has(_l(e))}}function _l(e){return String(e).toLowerCase()}class vl{constructor(e){this.editor=e,this.componentFactory=new kl(e),this.focusTracker=new Ns,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const i=e.config.get("toolbar.viewportTopOffset");return i?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:i}):{top:0}}}Ke(vl,Ue);var yl={setData(e){this.data.set(e)},getData(e){return this.data.get(e)}};var xl={updateSourceElement(){if(!this.sourceElement)throw new c.a("editor-missing-sourceelement",this);var e,t;e=this.sourceElement,t=this.data.get(),e instanceof HTMLTextAreaElement&&(e.value=t),e.innerHTML=t}};class Al extends an{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Zi({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if("string"!=typeof e)throw new c.a("pendingactions-add-invalid-message",this);const t=Object.create(Ue);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}var Cl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',Tl='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>';const El={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:Cl,quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:Tl};function Sl({emitter:e,activator:t,callback:i,contextElements:n}){e.listenTo(document,"mousedown",(e,o)=>{if(!t())return;const r="function"==typeof o.composedPath?o.composedPath():[];for(const e of n)if(e.contains(o.target)||r.includes(e))return;i()})}function Il(e){e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Pl({view:e}){e.listenTo(e.element,"submit",(t,i)=>{i.preventDefault(),e.fire("submit")},{useCapture:!0})}class Ml extends Zi{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(e,t,i)=>{this._renderViewIntoCollectionParent(t,i)}),this.on("remove",(e,t)=>{t.element&&this._parentElement&&t.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...e){if(!e.length||!e.every(e=>"string"==typeof e))throw new c.a("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const i of this)for(const n of e)i.delegate(n).to(t);this.on("add",(i,n)=>{for(const i of e)n.delegate(i).to(t)}),this.on("remove",(i,n)=>{for(const i of e)n.stopDelegating(i,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}i(17);class Nl{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Zi,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,i)=>{i.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Rl.bind(this,this)}createCollection(e){const t=new Ml(e);return this._viewCollections.add(t),t}registerChild(e){Ji(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Ji(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Rl(e)}extendTemplate(e){Rl.extend(this.template,e)}render(){if(this.isRendered)throw new c.a("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}Ke(Nl,Pr),Ke(Nl,Ue);class Rl{constructor(e){Object.assign(this,Ul(Hl(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new c.a("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const i of t.children)Gl(i)?yield i:Kl(i)&&(yield*e(i))}(this)}static bind(e,t){return{to:(i,n)=>new Dl({eventNameOrFunction:i,attribute:i,observable:e,emitter:t,callback:n}),if:(i,n,o)=>new zl({observable:e,emitter:t,attribute:i,valueIfTrue:n,callback:o})}}static extend(e,t){if(e._isRendered)throw new c.a("template-extend-render",[this,e]);!function e(t,i){i.attributes&&(t.attributes||(t.attributes={}),$l(t.attributes,i.attributes));i.eventListeners&&(t.eventListeners||(t.eventListeners={}),$l(t.eventListeners,i.eventListeners));i.text&&t.text.push(...i.text);if(i.children&&i.children.length){if(t.children.length!=i.children.length)throw new c.a("ui-template-extend-children-mismatch",t);let n=0;for(const o of i.children)e(t.children[n++],o)}}(e,Ul(Hl(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new c.a("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Ll(this.text)?this._bindToObservable({schema:this.text,updater:jl(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,i,n,o;if(!this.attributes)return;const r=e.node,s=e.revertData;for(t in this.attributes)if(n=r.getAttribute(t),i=this.attributes[t],s&&(s.attributes[t]=n),o=w(i[0])&&i[0].ns?i[0].ns:null,Ll(i)){const a=o?i[0].value:i;s&&Jl(t)&&a.unshift(n),this._bindToObservable({schema:a,updater:Bl(r,t,o),data:e})}else"style"==t&&"string"!=typeof i[0]?this._renderStyleAttribute(i[0],e):(s&&n&&Jl(t)&&i.unshift(n),i=i.map(e=>e&&e.value||e).reduce((e,t)=>e.concat(t),[]).reduce(ql,""),Yl(i)||r.setAttributeNS(o,t,i))}_renderStyleAttribute(e,t){const i=t.node;for(const n in e){const o=e[n];Ll(o)?this._bindToObservable({schema:[o],updater:Fl(i,n),data:t}):i.style[n]=o}}_renderElementChildren(e){const t=e.node,i=e.intoFragment?document.createDocumentFragment():t,n=e.isApplying;let o=0;for(const r of this.children)if(Ql(r)){if(!n){r.setParent(t);for(const e of r)i.appendChild(e.element)}}else if(Gl(r))n||(r.isRendered||r.render(),i.appendChild(r.element));else if(fr(r))i.appendChild(r);else if(n){const t={children:[],bindings:[],attributes:{}};e.revertData.children.push(t),r._renderNode({node:i.childNodes[o++],isApplying:!0,revertData:t})}else i.appendChild(r.render());e.intoFragment&&t.appendChild(i)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const i=this.eventListeners[t].map(i=>{const[n,o]=t.split("@");return i.activateDomEventListener(n,o,e)});e.revertData&&e.revertData.bindings.push(i)}}_bindToObservable({schema:e,updater:t,data:i}){const n=i.revertData;Vl(e,t,i);const o=e.filter(e=>!Yl(e)).filter(e=>e.observable).map(n=>n.activateAttributeListener(e,t,i));n&&n.bindings.push(o)}_revertTemplateFromNode(e,t){for(const e of t.bindings)for(const t of e)t();if(t.text)e.textContent=t.text;else{for(const i in t.attributes){const n=t.attributes[i];null===n?e.removeAttribute(i):e.setAttribute(i,n)}for(let i=0;i<t.children.length;++i)this._revertTemplateFromNode(e.childNodes[i],t.children[i])}}}Ke(Rl,h);class Ol{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,i){const n=()=>Vl(e,t,i);return this.emitter.listenTo(this.observable,"change:"+this.attribute,n),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,n)}}}class Dl extends Ol{activateDomEventListener(e,t,i){const n=(e,i)=>{t&&!i.target.matches(t)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(i):this.observable.fire(this.eventNameOrFunction,i))};return this.emitter.listenTo(i.node,e,n),()=>{this.emitter.stopListening(i.node,e,n)}}}class zl extends Ol{getValue(e){return!Yl(super.getValue(e))&&(this.valueIfTrue||!0)}}function Ll(e){return!!e&&(e.value&&(e=e.value),Array.isArray(e)?e.some(Ll):e instanceof Ol)}function Vl(e,t,{node:i}){let n=function(e,t){return e.map(e=>e instanceof Ol?e.getValue(t):e)}(e,i);n=1==e.length&&e[0]instanceof zl?n[0]:n.reduce(ql,""),Yl(n)?t.remove():t.set(n)}function jl(e){return{set(t){e.textContent=t},remove(){e.textContent=""}}}function Bl(e,t,i){return{set(n){e.setAttributeNS(i,t,n)},remove(){e.removeAttributeNS(i,t)}}}function Fl(e,t){return{set(i){e.style[t]=i},remove(){e.style[t]=null}}}function Hl(e){return $i(e,e=>{if(e&&(e instanceof Ol||Kl(e)||Gl(e)||Ql(e)))return e})}function Ul(e){if("string"==typeof e?e=function(e){return{text:[e]}}(e):e.text&&function(e){e.text=en(e.text)}(e),e.on&&(e.eventListeners=function(e){for(const t in e)Wl(e,t);return e}(e.on),delete e.on),!e.text){e.attributes&&function(e){for(const t in e)e[t].value&&(e[t].value=en(e[t].value)),Wl(e,t)}(e.attributes);const t=[];if(e.children)if(Ql(e.children))t.push(e.children);else for(const i of e.children)Kl(i)||Gl(i)||fr(i)?t.push(i):t.push(new Rl(i));e.children=t}return e}function Wl(e,t){e[t]=en(e[t])}function ql(e,t){return Yl(t)?e:Yl(e)?t:`${e} ${t}`}function $l(e,t){for(const i in t)e[i]?e[i].push(...t[i]):e[i]=t[i]}function Yl(e){return!e&&0!==e}function Gl(e){return e instanceof Nl}function Kl(e){return e instanceof Rl}function Ql(e){return e instanceof Ml}function Jl(e){return"class"==e||"style"==e}class Zl extends Ml{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Rl({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=function(e,t,i={},n=[]){const o=i&&i.xmlns,r=o?e.createElementNS(o,t):e.createElement(t);for(const e in i)r.setAttribute(e,i[e]);!vs(n)&&Ji(n)||(n=[n]);for(let t of n)vs(t)&&(t=e.createTextNode(t)),r.appendChild(t);return r}(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&0==e.childElementCount&&e.remove()}}i(19);class Xl extends Nl{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t),this.element.innerHTML="";e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}i(21);class ed extends Nl{constructor(e){super(e),this.set("text",""),this.set("position","s");const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",t.to("position",e=>"ck-tooltip_"+e),t.if("text","ck-hidden",e=>!e.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:t.to("text")}]}]})}}i(23);class td extends Nl{constructor(e){super(e);const t=this.bindTemplate,i=s();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(i),this.iconView=new Xl,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",e=>!e),t.if("isVisible","ck-hidden",e=>!e),t.to("isOn",e=>e?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",e=>e||"button"),tabindex:t.to("tabindex"),"aria-labelledby":"ck-editor__aria-label_"+i,"aria-disabled":t.if("isEnabled",!0,e=>!e),"aria-pressed":t.to("isOn",e=>!!this.isToggleable&&String(e))},children:this.children,on:{mousedown:t.to(e=>{e.preventDefault()}),click:t.to(e=>{this.isEnabled?this.fire("execute"):e.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const e=new ed;return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}_createLabelView(e){const t=new Nl,i=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:i.to("labelStyle"),id:"ck-editor__aria-label_"+e},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new Nl;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>zo(e))}]}),e}_getTooltipString(e,t,i){return e?"string"==typeof e?e:(i&&(i=zo(i)),e instanceof Function?e(t,i):`${t}${i?` (${i})`:""}`):""}}i(25);class id extends td{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new Nl;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}class nd{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let i=e.actions[t];"string"==typeof i&&(i=[i]);for(const n of i)e.keystrokeHandler.set(n,(e,i)=>{this[t](),i()})}}get first(){return this.focusables.find(od)||null}get last(){return this.focusables.filter(od).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((t,i)=>{const n=t.element===this.focusTracker.focusedElement;return n&&(e=i),n}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,i=this.focusables.length;if(!i)return null;if(null===t)return this[1===e?"first":"last"];let n=(t+i+e)%i;do{const t=this.focusables.get(n);if(od(t))return t;n=(n+i+e)%i}while(n!==t);return null}}function od(e){return!(!e.focus||"none"==_r.window.getComputedStyle(e.element).display)}i(27);var rd='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class sd extends td{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Xl;return e.content=rd,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}i(29);class ad extends Nl{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Rs,this.focusTracker=new Ns,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",e=>!e),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}focus(){this.actionView.focus()}_createActionView(){const e=new td;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new td,t=e.bindTemplate;return e.icon=rd,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",e=>String(e))}}),e.bind("isEnabled").to(this),e.delegate("execute").to(this,"open"),e}}class cd extends Nl{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",e=>"ck-dropdown__panel_"+e),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(e=>e.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const e=this.children.last;"function"==typeof e.focusLast?e.focusLast():e.focus()}}}i(31);function ld({element:e,target:t,positions:i,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){M(t)&&(t=t()),M(n)&&(n=n());const s=function(e){return e&&e.parentNode?e.offsetParent===_r.document.body?null:e.offsetParent:null}(e),a=new Cs(e);let c;const l={targetRect:new Cs(t),elementRect:a,positionedElementAncestor:s};if(n||o){const e=n&&new Cs(n).getVisible(),t=o&&function(e){e=Object.assign({top:0,bottom:0,left:0,right:0},e);const t=new Cs(_r.window);return t.top+=e.top,t.height-=e.top,t.bottom-=e.bottom,t.height-=e.bottom,t}(r);Object.assign(l,{limiterRect:e,viewportRect:t}),c=function(e,t){const{elementRect:i}=t,n=i.getArea(),o=e.map(e=>new hd(e,t)).filter(e=>!!e.name);let r=0,s=null;for(const e of o){const{_limiterIntersectionArea:t,_viewportIntersectionArea:i}=e;if(t===n)return e;const o=i**2+t**2;o>r&&(r=o,s=e)}return s}(i,l)||new hd(i[0],l)}else c=new hd(i[0],l);return c}function dd(e){const{scrollX:t,scrollY:i}=_r.window;return e.clone().moveBy(t,i)}class hd{constructor(e,t){const i=e(t.targetRect,t.elementRect,t.viewportRect);if(!i)return;const{left:n,top:o,name:r,config:s}=i;Object.assign(this,{name:r,config:s}),this._positioningFunctionCorrdinates={left:n,top:o},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get _limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const i=e.getIntersection(t);if(i)return i.getIntersectionArea(this._rect)}}return 0}get _viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=dd(this._rect),this._options.positionedElementAncestor&&function(e,t){const i=dd(new Cs(t)),n=xs(t);let o=0,r=0;o-=i.left,r-=i.top,o+=t.scrollLeft,r+=t.scrollTop,o-=n.left,r-=n.top,e.moveBy(o,r)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class ud extends Nl{constructor(e,t,i){super(e);const n=this.bindTemplate;this.buttonView=t,this.panelView=i,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new Rs,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",n.to("class"),n.if("isEnabled","ck-disabled",e=>!e)],id:n.to("id"),"aria-describedby":n.to("ariaDescribedById")},children:[t,i]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&("auto"===this.panelPosition?this.panelView.position=ud._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(e,t)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,t())};this.keystrokes.set("arrowdown",(e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())}),this.keystrokes.set("arrowright",(e,t)=>{this.isOpen&&t()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:i,southWest:n,northEast:o,northWest:r,southMiddleEast:s,southMiddleWest:a,northMiddleEast:c,northMiddleWest:l}=ud.defaultPanelPositions;return"rtl"!==this.locale.uiLanguageDirection?[i,n,s,a,e,o,r,c,l,t]:[n,i,a,s,e,r,o,l,c,t]}}ud.defaultPanelPositions={south:(e,t)=>({top:e.bottom,left:e.left-(t.width-e.width)/2,name:"s"}),southEast:e=>({top:e.bottom,left:e.left,name:"se"}),southWest:(e,t)=>({top:e.bottom,left:e.left-t.width+e.width,name:"sw"}),southMiddleEast:(e,t)=>({top:e.bottom,left:e.left-(t.width-e.width)/4,name:"sme"}),southMiddleWest:(e,t)=>({top:e.bottom,left:e.left-3*(t.width-e.width)/4,name:"smw"}),north:(e,t)=>({top:e.top-t.height,left:e.left-(t.width-e.width)/2,name:"n"}),northEast:(e,t)=>({top:e.top-t.height,left:e.left,name:"ne"}),northWest:(e,t)=>({top:e.top-t.height,left:e.left-t.width+e.width,name:"nw"}),northMiddleEast:(e,t)=>({top:e.top-t.height,left:e.left-(t.width-e.width)/4,name:"nme"}),northMiddleWest:(e,t)=>({top:e.top-t.height,left:e.left-3*(t.width-e.width)/4,name:"nmw"})},ud._getOptimalPosition=ld;class gd extends Nl{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class md extends Nl{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function fd(e){return Array.isArray(e)?{items:e,removeItems:[]}:e?Object.assign({items:[],removeItems:[]},e):{items:[],removeItems:[]}}i(33);class pd extends Nl{constructor(e,t){super(e);const i=this.bindTemplate,n=this.t;this.options=t||{},this.set("ariaLabel",n("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Ns,this.keystrokes=new Rs,this.set("class"),this.set("isCompact",!1),this.itemsView=new bd(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const o="rtl"===e.uiLanguageDirection;this._focusCycler=new nd({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[o?"arrowright":"arrowleft","arrowup"],focusNext:[o?"arrowleft":"arrowright","arrowdown"]}});const r=["ck","ck-toolbar",i.to("class"),i.if("isCompact","ck-toolbar_compact")];var s;this.options.shouldGroupWhenFull&&this.options.isFloating&&r.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:r,role:"toolbar","aria-label":i.to("ariaLabel"),style:{maxWidth:i.to("maxWidth")}},children:this.children,on:{mousedown:(s=this,s.bindTemplate.to(e=>{e.target===s.element&&e.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new kd(this):new wd(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const i=fd(e),n=i.items.filter((e,n,o)=>"|"===e||-1===i.removeItems.indexOf(e)&&("-"===e?!this.options.shouldGroupWhenFull||(Object(c.b)("toolbarview-line-break-ignored-when-grouping-items",o),!1):!!t.has(e)||(Object(c.b)("toolbarview-item-unavailable",{name:e}),!1))),o=this._cleanSeparators(n).map(e=>"|"===e?new gd:"-"===e?new md:t.create(e));this.items.addMany(o)}_cleanSeparators(e){const t=e=>"-"!==e&&"|"!==e,i=e.length,n=e.findIndex(t),o=i-e.slice().reverse().findIndex(t);return e.slice(n,o).filter((e,i,n)=>{if(t(e))return!0;return!(i>0&&n[i-1]===e)})}}class bd extends Nl{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class wd{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(e=>e),e.focusables.bindTo(e.items).using(e=>e),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class kd{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(e,t)=>{const i=t.index;for(const e of t.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(e):this.ungroupedItems.remove(e);for(let e=i;e<i+t.added.length;e++){const n=t.added[e-i];e>this.ungroupedItems.length?this.groupedItems.add(n,e-this.ungroupedItems.length):this.ungroupedItems.add(n,e)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!this.viewElement.offsetParent)return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,i=new Cs(e.lastChild),n=new Cs(e);if(!this.cachedPadding){const i=_r.window.getComputedStyle(e),n="ltr"===t?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(i[n])}return"ltr"===t?i.right>n.right-this.cachedPadding:i.left<n.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new Ss(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new gd),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,i=xd(e);return i.class="ck-toolbar__grouped-dropdown",i.panelPosition="ltr"===e.uiLanguageDirection?"sw":"se",Ad(i,[]),i.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:"rtl"===e.uiLanguageDirection?"se":"sw",icon:Tl}),i.toolbarView.items.bindTo(this.groupedItems).using(e=>e),i}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}i(35);class _d extends Nl{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Ns,this.keystrokes=new Rs,this._focusCycler=new nd({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class vd extends Nl{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class yd extends Nl{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}i(37),i(39);function xd(e,t=sd){const i=new t(e),n=new cd(e),o=new ud(e,i,n);return i.bind("isEnabled").to(o),i instanceof sd?i.bind("isOn").to(o,"isOpen"):i.arrowView.bind("isOn").to(o,"isOpen"),function(e){(function(e){e.on("render",()=>{Sl({emitter:e,activator:()=>e.isOpen,callback:()=>{e.isOpen=!1},contextElements:[e.element]})})})(e),function(e){e.on("execute",t=>{t.source instanceof id||(e.isOpen=!1)})}(e),function(e){e.keystrokes.set("arrowdown",(t,i)=>{e.isOpen&&(e.panelView.focus(),i())}),e.keystrokes.set("arrowup",(t,i)=>{e.isOpen&&(e.panelView.focusLast(),i())})}(e)}(o),o}function Ad(e,t){const i=e.locale,n=i.t,o=e.toolbarView=new pd(i);o.set("ariaLabel",n("Dropdown toolbar")),e.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map(e=>o.items.add(e)),e.panelView.children.add(o),o.items.delegate("execute").to(e)}function Cd(e,t){const i=e.locale,n=e.listView=new _d(i);n.items.bindTo(t).using(({type:e,model:t})=>{if("separator"===e)return new yd(i);if("button"===e||"switchbutton"===e){const n=new vd(i);let o;return o="button"===e?new td(i):new id(i),o.bind(...Object.keys(t)).to(t),o.delegate("execute").to(n),n.children.add(o),n}}),e.panelView.children.add(n),n.items.delegate("execute").to(e)}i(41);class Td extends Nl{constructor(e){super(e),this.body=new Zl(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}i(43);class Ed extends Nl{constructor(e){super(e),this.set("text"),this.set("for"),this.id="ck-editor__label_"+s();const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class Sd extends Td{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new Ed;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class Id extends Nl{constructor(e,t,i){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=i,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(t){e.change(i=>{const n=e.document.getRoot(t.name);i.addClass(t.isFocused?"ck-focused":"ck-blurred",n),i.removeClass(t.isFocused?"ck-blurred":"ck-focused",n)})}e.isRenderingInProgress?function i(n){e.once("change:isRenderingInProgress",(e,o,r)=>{r?i(n):t(n)})}(this):t(this)}}class Pd extends Id{constructor(e,t,i){super(e,t,i),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const e=this._editingView,t=this.t;e.change(i=>{const n=e.document.getRoot(this.name);i.setAttribute("aria-label",t("Rich Text Editor, %0",this.name),n)})}}i(45);i(47);class Md extends Nl{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new Ns,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...e)=>{this.fire("input",...e),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,i)=>{this._setDomElementValue(i),this._updateIsEmpty()})}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||0===e?e:""}}i(49);class Nd extends Nl{constructor(e,t){super(e);const i="ck-labeled-field-view-"+s(),n="ck-labeled-field-view-status-"+s();this.fieldView=t(this,i,n),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(i),this.statusView=this._createStatusView(n),this.bind("_statusText").to(this,"errorText",this,"infoText",(e,t)=>e||t);const o=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",o.to("class"),o.if("isEnabled","ck-disabled",e=>!e),o.if("isEmpty","ck-labeled-field-view_empty"),o.if("isFocused","ck-labeled-field-view_focused"),o.if("placeholder","ck-labeled-field-view_placeholder"),o.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new Ed(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new Nl(this.locale),i=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",i.if("errorText","ck-labeled-field-view__status_error"),i.if("_statusText","ck-hidden",e=>!e)],id:e,role:i.if("errorText","alert")},children:[{text:i.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function Rd(e,t,i){const n=new Md(e.locale);return n.set({id:t,ariaDescribedById:i}),n.bind("isReadOnly").to(e,"isEnabled",e=>!e),n.bind("hasError").to(e,"errorText",e=>!!e),n.on("input",()=>{e.errorText=null}),e.bind("isEmpty","isFocused","placeholder").to(n),n}class Od extends an{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t="show:"+e.type+(e.namespace?":"+e.namespace:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Dd{constructor(e,t){t&&ze(this,t),e&&this.set(e)}}Ke(Dd,Ue);i(51);const zd=Ps("px"),Ld=_r.document.body;class Vd extends Nl{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",e=>"ck-balloon-panel_"+e),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",zd),left:t.to("left",zd)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=Vd.defaultPositions,i=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:Ld,fitInViewport:!0},e),n=Vd._getOptimalPosition(i),o=parseInt(n.left),r=parseInt(n.top),{name:s,config:a={}}=n,{withArrow:c=!0}=a;Object.assign(this,{top:r,left:o,position:s,withArrow:c})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=jd(e.target),i=e.limiter?jd(e.limiter):Ld;this.listenTo(_r.document,"scroll",(n,o)=>{const r=o.target,s=t&&r.contains(t),a=i&&r.contains(i);!s&&!a&&t&&i||this.attachTo(e)},{useCapture:!0}),this.listenTo(_r.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(_r.document,"scroll"),this.stopListening(_r.window,"resize")}}function jd(e){return Yi(e)?e:ys(e)?e.commonAncestorContainer:"function"==typeof e?jd(e()):null}function Bd(e,t){return e.top-t.height-Vd.arrowVerticalOffset}function Fd(e){return e.bottom+Vd.arrowVerticalOffset}Vd.arrowHorizontalOffset=25,Vd.arrowVerticalOffset=10,Vd.stickyVerticalOffset=20,Vd._getOptimalPosition=ld,Vd.defaultPositions={northWestArrowSouthWest:(e,t)=>({top:Bd(e,t),left:e.left-Vd.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthMiddleWest:(e,t)=>({top:Bd(e,t),left:e.left-.25*t.width-Vd.arrowHorizontalOffset,name:"arrow_smw"}),northWestArrowSouth:(e,t)=>({top:Bd(e,t),left:e.left-t.width/2,name:"arrow_s"}),northWestArrowSouthMiddleEast:(e,t)=>({top:Bd(e,t),left:e.left-.75*t.width+Vd.arrowHorizontalOffset,name:"arrow_sme"}),northWestArrowSouthEast:(e,t)=>({top:Bd(e,t),left:e.left-t.width+Vd.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(e,t)=>({top:Bd(e,t),left:e.left+e.width/2-Vd.arrowHorizontalOffset,name:"arrow_sw"}),northArrowSouthMiddleWest:(e,t)=>({top:Bd(e,t),left:e.left+e.width/2-.25*t.width-Vd.arrowHorizontalOffset,name:"arrow_smw"}),northArrowSouth:(e,t)=>({top:Bd(e,t),left:e.left+e.width/2-t.width/2,name:"arrow_s"}),northArrowSouthMiddleEast:(e,t)=>({top:Bd(e,t),left:e.left+e.width/2-.75*t.width+Vd.arrowHorizontalOffset,name:"arrow_sme"}),northArrowSouthEast:(e,t)=>({top:Bd(e,t),left:e.left+e.width/2-t.width+Vd.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(e,t)=>({top:Bd(e,t),left:e.right-Vd.arrowHorizontalOffset,name:"arrow_sw"}),northEastArrowSouthMiddleWest:(e,t)=>({top:Bd(e,t),left:e.right-.25*t.width-Vd.arrowHorizontalOffset,name:"arrow_smw"}),northEastArrowSouth:(e,t)=>({top:Bd(e,t),left:e.right-t.width/2,name:"arrow_s"}),northEastArrowSouthMiddleEast:(e,t)=>({top:Bd(e,t),left:e.right-.75*t.width+Vd.arrowHorizontalOffset,name:"arrow_sme"}),northEastArrowSouthEast:(e,t)=>({top:Bd(e,t),left:e.right-t.width+Vd.arrowHorizontalOffset,name:"arrow_se"}),southWestArrowNorthWest:(e,t)=>({top:Fd(e),left:e.left-Vd.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthMiddleWest:(e,t)=>({top:Fd(e),left:e.left-.25*t.width-Vd.arrowHorizontalOffset,name:"arrow_nmw"}),southWestArrowNorth:(e,t)=>({top:Fd(e),left:e.left-t.width/2,name:"arrow_n"}),southWestArrowNorthMiddleEast:(e,t)=>({top:Fd(e),left:e.left-.75*t.width+Vd.arrowHorizontalOffset,name:"arrow_nme"}),southWestArrowNorthEast:(e,t)=>({top:Fd(e),left:e.left-t.width+Vd.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(e,t)=>({top:Fd(e),left:e.left+e.width/2-Vd.arrowHorizontalOffset,name:"arrow_nw"}),southArrowNorthMiddleWest:(e,t)=>({top:Fd(e),left:e.left+e.width/2-.25*t.width-Vd.arrowHorizontalOffset,name:"arrow_nmw"}),southArrowNorth:(e,t)=>({top:Fd(e),left:e.left+e.width/2-t.width/2,name:"arrow_n"}),southArrowNorthMiddleEast:(e,t)=>({top:Fd(e),left:e.left+e.width/2-.75*t.width+Vd.arrowHorizontalOffset,name:"arrow_nme"}),southArrowNorthEast:(e,t)=>({top:Fd(e),left:e.left+e.width/2-t.width+Vd.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(e,t)=>({top:Fd(e),left:e.right-Vd.arrowHorizontalOffset,name:"arrow_nw"}),southEastArrowNorthMiddleWest:(e,t)=>({top:Fd(e),left:e.right-.25*t.width-Vd.arrowHorizontalOffset,name:"arrow_nmw"}),southEastArrowNorth:(e,t)=>({top:Fd(e),left:e.right-t.width/2,name:"arrow_n"}),southEastArrowNorthMiddleEast:(e,t)=>({top:Fd(e),left:e.right-.75*t.width+Vd.arrowHorizontalOffset,name:"arrow_nme"}),southEastArrowNorthEast:(e,t)=>({top:Fd(e),left:e.right-t.width+Vd.arrowHorizontalOffset,name:"arrow_ne"}),viewportStickyNorth:(e,t,i)=>e.getIntersection(i)?{top:i.top+Vd.stickyVerticalOffset,left:e.left+e.width/2-t.width/2,name:"arrowless",config:{withArrow:!1}}:null};i(53),i(55);const Hd=Ps("px");class Ud extends Qe{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const e=this.editor.editing.view,t=e.document.selection.editableElement;return t?e.domConverter.mapViewToDom(t.root):null},this.set("visibleView",null),this.view=new Vd(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new c.a("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const i=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),i.set(e.view,e),this._viewToStack.set(e.view,i),i===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new c.a("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(1===t.size?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),1===t.size?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new c.a("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new Wd(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(e,t)=>!t&&e>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(e,i)=>{if(i<2)return"";const n=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[n,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new qd(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,t)=>!t&&e>=2?Math.min(e-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:i=!0,singleViewMode:n=!1}){this.view.class=t,this.view.withArrow=i,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),n&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class Wd extends Nl{constructor(e){super(e);const t=e.t,i=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Ns,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",i.to("isNavigationVisible",e=>e?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:i.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const i=new td(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i}}class qd extends Nl{constructor(e,t){super(e);const i=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",i.to("numberOfPanels",e=>e?"":"ck-hidden")],style:{top:i.to("top",Hd),left:i.to("left",Hd),width:i.to("width",Hd),height:i.to("height",Hd)}},children:this.content}),this.on("change:numberOfPanels",(e,t,i,n)=>{i>n?this._addPanels(i-n):this._removePanels(n-i),this.updatePosition()})}_addPanels(e){for(;e--;){const e=new Nl;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(e){for(;e--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:i,height:n}=new Cs(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:i,height:n})}}}i(57);const $d=Ps("px");class Yd extends Nl{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Rl({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",e=>e?"block":"none"),height:t.to("isSticky",e=>e?$d(this._panelRect.height):null)}}}).render(),this._contentPanel=new Rl({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",e=>e?$d(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",e=>e?$d(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",e=>e?$d(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(_r.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:$d(-_r.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}Ps("px");i(59);Ps("px");Ps("px");i(61);const Gd=new WeakMap;function Kd(e){const{view:t,element:i,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=e,s=t.document;Gd.has(s)||(Gd.set(s,new Map),s.registerPostFixer(e=>Jd(s,e))),Gd.get(s).set(i,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?i:null}),t.change(e=>Jd(s,e))}function Qd(e,t){return!!t.hasClass("ck-placeholder")&&(e.removeClass("ck-placeholder",t),!0)}function Jd(e,t){const i=Gd.get(e),n=[];let o=!1;for(const[e,r]of i)r.isDirectHost&&(n.push(e),Zd(t,e,r)&&(o=!0));for(const[e,r]of i){if(r.isDirectHost)continue;const i=Xd(e);i&&(n.includes(i)||(r.hostElement=i,Zd(t,e,r)&&(o=!0)))}return o}function Zd(e,t,i){const{text:n,isDirectHost:o,hostElement:r}=i;let s=!1;r.getAttribute("data-placeholder")!==n&&(e.setAttribute("data-placeholder",n,r),s=!0);return(o||1==t.childCount)&&function(e,t){if(!e.isAttached())return!1;if(Array.from(e.getChildren()).some(e=>!e.is("uiElement")))return!1;if(t)return!0;const i=e.document;if(!i.isFocused)return!0;const n=i.selection.anchor;return n&&n.parent!==e}(r,i.keepOnFocus)?function(e,t){return!t.hasClass("ck-placeholder")&&(e.addClass("ck-placeholder",t),!0)}(e,r)&&(s=!0):Qd(e,r)&&(s=!0),s}function Xd(e){if(e.childCount){const t=e.getChild(0);if(t.is("element")&&!t.is("uiElement"))return t}return null}const eh=new Map;function th(e,t,i){let n=eh.get(e);n||(n=new Map,eh.set(e,n)),n.set(t,i)}function ih(e){return[e]}function nh(e,t,i={}){const n=function(e,t){const i=eh.get(e);return i&&i.has(t)?i.get(t):ih}(e.constructor,t.constructor);try{return n(e=e.clone(),t,i)}catch(e){throw e}}function oh(e,t,i){e=e.slice(),t=t.slice();const n=new rh(i.document,i.useRelations,i.forceWeakRemove);n.setOriginalOperations(e),n.setOriginalOperations(t);const o=n.originalOperations;if(0==e.length||0==t.length)return{operationsA:e,operationsB:t,originalOperations:o};const r=new WeakMap;for(const t of e)r.set(t,0);const s={nextBaseVersionA:e[e.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:e.length,originalOperationsBCount:t.length};let a=0;for(;a<e.length;){const i=e[a],o=r.get(i);if(o==t.length){a++;continue}const s=t[o],c=nh(i,s,n.getContext(i,s,!0)),l=nh(s,i,n.getContext(s,i,!1));n.updateRelation(i,s),n.setOriginalOperations(c,i),n.setOriginalOperations(l,s);for(const e of c)r.set(e,o+l.length);e.splice(a,1,...c),t.splice(o,1,...l)}if(i.padWithNoOps){const i=e.length-s.originalOperationsACount,n=t.length-s.originalOperationsBCount;ah(e,n-i),ah(t,i-n)}return sh(e,s.nextBaseVersionB),sh(t,s.nextBaseVersionA),{operationsA:e,operationsB:t,originalOperations:o}}class rh{constructor(e,t,i=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!i,this._relations=new Map}setOriginalOperations(e,t=null){const i=t?this.originalOperations.get(t):null;for(const t of e)this.originalOperations.set(t,i||t)}updateRelation(e,t){switch(e.constructor){case Tc:switch(t.constructor){case Mc:e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter");break;case Tc:e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter")}break;case Nc:switch(t.constructor){case Mc:e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");break;case Tc:if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const i=na._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&i.containsPosition(e.splitPosition)){const n=i.end.offset-e.splitPosition.offset,o=e.splitPosition.offset-i.start.offset;this._setRelation(e,t,{howMany:n,offset:o})}}}break;case Mc:switch(t.constructor){case Mc:e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement");break;case Nc:e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource")}break;case Sc:{const i=e.newRange;if(!i)return;switch(t.constructor){case Tc:{const n=na._createFromPositionAndShift(t.sourcePosition,t.howMany),o=n.containsPosition(i.start)||n.start.isEqual(i.start),r=n.containsPosition(i.end)||n.end.isEqual(i.end);!o&&!r||n.containsRange(i)||this._setRelation(e,t,{side:o?"left":"right",path:o?i.start.path.slice():i.end.path.slice()});break}case Mc:{const n=i.start.isEqual(t.targetPosition),o=i.start.isEqual(t.deletionPosition),r=i.end.isEqual(t.deletionPosition),s=i.end.isEqual(t.sourcePosition);(n||o||r||s)&&this._setRelation(e,t,{wasInLeftElement:n,wasStartBeforeMergedElement:o,wasEndBeforeMergedElement:r,wasInRightElement:s});break}}break}}}getContext(e,t,i){return{aIsStrong:i,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const i=this.originalOperations.get(t),n=this._history.getUndoneOperation(i);if(!n)return null;const o=this.originalOperations.get(e),r=this._relations.get(o);return r&&r.get(n)||null}_setRelation(e,t,i){const n=this.originalOperations.get(e),o=this.originalOperations.get(t);let r=this._relations.get(n);r||(r=new Map,this._relations.set(n,r)),r.set(o,i)}}function sh(e,t){for(const i of e)i.baseVersion=t++}function ah(e,t){for(let i=0;i<t;i++)e.push(new Jc(0))}function ch(e,t,i){const n=e.nodes.getNode(0).getAttribute(t);if(n==i)return null;const o=new na(e.position,e.position.getShiftedBy(e.howMany));return new Ac(o,t,n,i,0)}function lh(e,t){return null===e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)}function dh(e,t){const i=[];for(let n=0;n<e.length;n++){const o=e[n],r=new Tc(o.start,o.end.offset-o.start.offset,t,0);i.push(r);for(let t=n+1;t<e.length;t++)e[t]=e[t]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return i}th(Ac,Ac,(e,t,i)=>{if(e.key===t.key&&e.range.start.hasSameParentAs(t.range.start)){const n=e.range.getDifference(t.range).map(t=>new Ac(t,e.key,e.oldValue,e.newValue,0)),o=e.range.getIntersection(t.range);return o&&i.aIsStrong&&n.push(new Ac(o,t.key,t.newValue,e.newValue,0)),0==n.length?[new Jc(0)]:n}return[e]}),th(Ac,Ec,(e,t)=>{if(e.range.start.hasSameParentAs(t.position)&&e.range.containsPosition(t.position)){const i=e.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(t=>new Ac(t,e.key,e.oldValue,e.newValue,e.baseVersion));if(t.shouldReceiveAttributes){const n=ch(t,e.key,e.oldValue);n&&i.unshift(n)}return i}return e.range=e.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[e]}),th(Ac,Mc,(e,t)=>{const i=[];e.range.start.hasSameParentAs(t.deletionPosition)&&(e.range.containsPosition(t.deletionPosition)||e.range.start.isEqual(t.deletionPosition))&&i.push(na._createFromPositionAndShift(t.graveyardPosition,1));const n=e.range._getTransformedByMergeOperation(t);return n.isCollapsed||i.push(n),i.map(t=>new Ac(t,e.key,e.oldValue,e.newValue,e.baseVersion))}),th(Ac,Tc,(e,t)=>function(e,t){const i=na._createFromPositionAndShift(t.sourcePosition,t.howMany);let n=null,o=[];i.containsRange(e,!0)?n=e:e.start.hasSameParentAs(i.start)?(o=e.getDifference(i),n=e.getIntersection(i)):o=[e];const r=[];for(let e of o){e=e._getTransformedByDeletion(t.sourcePosition,t.howMany);const i=t.getMovedRangeStart(),n=e.start.hasSameParentAs(i);e=e._getTransformedByInsertion(i,t.howMany,n),r.push(...e)}n&&r.push(n._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!1)[0]);return r}(e.range,t).map(t=>new Ac(t,e.key,e.oldValue,e.newValue,e.baseVersion))),th(Ac,Nc,(e,t)=>{if(e.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||e.range.end.offset++,[e];if(e.range.start.hasSameParentAs(t.splitPosition)&&e.range.containsPosition(t.splitPosition)){const i=e.clone();return i.range=new na(t.moveTargetPosition.clone(),e.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),e.range.end=t.splitPosition.clone(),e.range.end.stickiness="toPrevious",[e,i]}return e.range=e.range._getTransformedBySplitOperation(t),[e]}),th(Ec,Ac,(e,t)=>{const i=[e];if(e.shouldReceiveAttributes&&e.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(e.position)){const n=ch(e,t.key,t.newValue);n&&i.push(n)}return i}),th(Ec,Ec,(e,t,i)=>(e.position.isEqual(t.position)&&i.aIsStrong||(e.position=e.position._getTransformedByInsertOperation(t)),[e])),th(Ec,Tc,(e,t)=>(e.position=e.position._getTransformedByMoveOperation(t),[e])),th(Ec,Nc,(e,t)=>(e.position=e.position._getTransformedBySplitOperation(t),[e])),th(Ec,Mc,(e,t)=>(e.position=e.position._getTransformedByMergeOperation(t),[e])),th(Sc,Ec,(e,t)=>(e.oldRange&&(e.oldRange=e.oldRange._getTransformedByInsertOperation(t)[0]),e.newRange&&(e.newRange=e.newRange._getTransformedByInsertOperation(t)[0]),[e])),th(Sc,Sc,(e,t,i)=>{if(e.name==t.name){if(!i.aIsStrong)return[new Jc(0)];e.oldRange=t.newRange?t.newRange.clone():null}return[e]}),th(Sc,Mc,(e,t)=>(e.oldRange&&(e.oldRange=e.oldRange._getTransformedByMergeOperation(t)),e.newRange&&(e.newRange=e.newRange._getTransformedByMergeOperation(t)),[e])),th(Sc,Tc,(e,t,i)=>{if(e.oldRange&&(e.oldRange=na._createFromRanges(e.oldRange._getTransformedByMoveOperation(t))),e.newRange){if(i.abRelation){const n=na._createFromRanges(e.newRange._getTransformedByMoveOperation(t));if("left"==i.abRelation.side&&t.targetPosition.isEqual(e.newRange.start))return e.newRange.start.path=i.abRelation.path,e.newRange.end=n.end,[e];if("right"==i.abRelation.side&&t.targetPosition.isEqual(e.newRange.end))return e.newRange.start=n.start,e.newRange.end.path=i.abRelation.path,[e]}e.newRange=na._createFromRanges(e.newRange._getTransformedByMoveOperation(t))}return[e]}),th(Sc,Nc,(e,t,i)=>{if(e.oldRange&&(e.oldRange=e.oldRange._getTransformedBySplitOperation(t)),e.newRange){if(i.abRelation){const n=e.newRange._getTransformedBySplitOperation(t);return e.newRange.start.isEqual(t.splitPosition)&&i.abRelation.wasStartBeforeMergedElement?e.newRange.start=Xs._createAt(t.insertionPosition):e.newRange.start.isEqual(t.splitPosition)&&!i.abRelation.wasInLeftElement&&(e.newRange.start=Xs._createAt(t.moveTargetPosition)),e.newRange.end.isEqual(t.splitPosition)&&i.abRelation.wasInRightElement?e.newRange.end=Xs._createAt(t.moveTargetPosition):e.newRange.end.isEqual(t.splitPosition)&&i.abRelation.wasEndBeforeMergedElement?e.newRange.end=Xs._createAt(t.insertionPosition):e.newRange.end=n.end,[e]}e.newRange=e.newRange._getTransformedBySplitOperation(t)}return[e]}),th(Mc,Ec,(e,t)=>(e.sourcePosition.hasSameParentAs(t.position)&&(e.howMany+=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByInsertOperation(t),e.targetPosition=e.targetPosition._getTransformedByInsertOperation(t),[e])),th(Mc,Mc,(e,t,i)=>{if(e.sourcePosition.isEqual(t.sourcePosition)&&e.targetPosition.isEqual(t.targetPosition)){if(i.bWasUndone){const i=t.graveyardPosition.path.slice();return i.push(0),e.sourcePosition=new Xs(t.graveyardPosition.root,i),e.howMany=0,[e]}return[new Jc(0)]}if(e.sourcePosition.isEqual(t.sourcePosition)&&!e.targetPosition.isEqual(t.targetPosition)&&!i.bWasUndone&&"splitAtSource"!=i.abRelation){const n="$graveyard"==e.targetPosition.root.rootName,o="$graveyard"==t.targetPosition.root.rootName,r=n&&!o;if(o&&!n||!r&&i.aIsStrong){const i=t.targetPosition._getTransformedByMergeOperation(t),n=e.targetPosition._getTransformedByMergeOperation(t);return[new Tc(i,e.howMany,n,0)]}return[new Jc(0)]}return e.sourcePosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByMergeOperation(t),e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),e.graveyardPosition.isEqual(t.graveyardPosition)&&i.aIsStrong||(e.graveyardPosition=e.graveyardPosition._getTransformedByMergeOperation(t)),[e]}),th(Mc,Tc,(e,t,i)=>{const n=na._createFromPositionAndShift(t.sourcePosition,t.howMany);return"remove"==t.type&&!i.bWasUndone&&!i.forceWeakRemove&&e.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.sourcePosition)?[new Jc(0)]:(e.sourcePosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.sourcePosition.hasSameParentAs(t.sourcePosition)&&(e.howMany-=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByMoveOperation(t),e.targetPosition=e.targetPosition._getTransformedByMoveOperation(t),e.graveyardPosition.isEqual(t.targetPosition)||(e.graveyardPosition=e.graveyardPosition._getTransformedByMoveOperation(t)),[e])}),th(Mc,Nc,(e,t,i)=>{if(t.graveyardPosition&&(e.graveyardPosition=e.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),e.deletionPosition.isEqual(t.graveyardPosition)&&(e.howMany=t.howMany)),e.targetPosition.isEqual(t.splitPosition)){const n=0!=t.howMany,o=t.graveyardPosition&&e.deletionPosition.isEqual(t.graveyardPosition);if(n||o||"mergeTargetNotMoved"==i.abRelation)return e.sourcePosition=e.sourcePosition._getTransformedBySplitOperation(t),[e]}if(e.sourcePosition.isEqual(t.splitPosition)){if("mergeSourceNotMoved"==i.abRelation)return e.howMany=0,e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e];if("mergeSameElement"==i.abRelation||e.sourcePosition.offset>0)return e.sourcePosition=t.moveTargetPosition.clone(),e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e]}return e.sourcePosition.hasSameParentAs(t.splitPosition)&&(e.howMany=t.splitPosition.offset),e.sourcePosition=e.sourcePosition._getTransformedBySplitOperation(t),e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e]}),th(Tc,Ec,(e,t)=>{const i=na._createFromPositionAndShift(e.sourcePosition,e.howMany)._getTransformedByInsertOperation(t,!1)[0];return e.sourcePosition=i.start,e.howMany=i.end.offset-i.start.offset,e.targetPosition.isEqual(t.position)||(e.targetPosition=e.targetPosition._getTransformedByInsertOperation(t)),[e]}),th(Tc,Tc,(e,t,i)=>{const n=na._createFromPositionAndShift(e.sourcePosition,e.howMany),o=na._createFromPositionAndShift(t.sourcePosition,t.howMany);let r,s=i.aIsStrong,a=!i.aIsStrong;if("insertBefore"==i.abRelation||"insertAfter"==i.baRelation?a=!0:"insertAfter"!=i.abRelation&&"insertBefore"!=i.baRelation||(a=!1),r=e.targetPosition.isEqual(t.targetPosition)&&a?e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):e.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),lh(e,t)&&lh(t,e))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),dh([n],r);if(o.containsPosition(e.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),dh([n],r);const c=cn(e.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if("prefix"==c||"extension"==c)return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),dh([n],r);"remove"!=e.type||"remove"==t.type||i.aWasUndone||i.forceWeakRemove?"remove"==e.type||"remove"!=t.type||i.bWasUndone||i.forceWeakRemove||(s=!1):s=!0;const l=[],d=n.getDifference(o);for(const e of d){e.start=e.start._getTransformedByDeletion(t.sourcePosition,t.howMany),e.end=e.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const i="same"==cn(e.start.getParentPath(),t.getMovedRangeStart().getParentPath()),n=e._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,i);l.push(...n)}const h=n.getIntersection(o);return null!==h&&s&&(h.start=h.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),h.end=h.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),0===l.length?l.push(h):1==l.length?o.start.isBefore(n.start)||o.start.isEqual(n.start)?l.unshift(h):l.push(h):l.splice(1,0,h)),0===l.length?[new Jc(e.baseVersion)]:dh(l,r)}),th(Tc,Nc,(e,t,i)=>{let n=e.targetPosition.clone();e.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&"moveTargetAfter"!=i.abRelation||(n=e.targetPosition._getTransformedBySplitOperation(t));const o=na._createFromPositionAndShift(e.sourcePosition,e.howMany);if(o.end.isEqual(t.insertionPosition))return t.graveyardPosition||e.howMany++,e.targetPosition=n,[e];if(o.start.hasSameParentAs(t.splitPosition)&&o.containsPosition(t.splitPosition)){let e=new na(t.splitPosition,o.end);e=e._getTransformedBySplitOperation(t);return dh([new na(o.start,t.splitPosition),e],n)}e.targetPosition.isEqual(t.splitPosition)&&"insertAtSource"==i.abRelation&&(n=t.moveTargetPosition),e.targetPosition.isEqual(t.insertionPosition)&&"insertBetween"==i.abRelation&&(n=e.targetPosition);const r=[o._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const n=o.start.isEqual(t.graveyardPosition)||o.containsPosition(t.graveyardPosition);e.howMany>1&&n&&!i.aWasUndone&&r.push(na._createFromPositionAndShift(t.insertionPosition,1))}return dh(r,n)}),th(Tc,Mc,(e,t,i)=>{const n=na._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.sourcePosition))if("remove"!=e.type||i.forceWeakRemove){if(1==e.howMany)return i.bWasUndone?(e.sourcePosition=t.graveyardPosition.clone(),e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),[e]):[new Jc(0)]}else if(!i.aWasUndone){const i=[];let n=t.graveyardPosition.clone(),o=t.targetPosition._getTransformedByMergeOperation(t);e.howMany>1&&(i.push(new Tc(e.sourcePosition,e.howMany-1,e.targetPosition,0)),n=n._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany-1),o=o._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany-1));const r=t.deletionPosition._getCombined(e.sourcePosition,e.targetPosition),s=new Tc(n,1,r,0),a=s.getMovedRangeStart().path.slice();a.push(0);const c=new Xs(s.targetPosition.root,a);o=o._getTransformedByMove(n,r,1);const l=new Tc(o,t.howMany,c,0);return i.push(s),i.push(l),i}const o=na._createFromPositionAndShift(e.sourcePosition,e.howMany)._getTransformedByMergeOperation(t);return e.sourcePosition=o.start,e.howMany=o.end.offset-o.start.offset,e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),[e]}),th(Ic,Ec,(e,t)=>(e.position=e.position._getTransformedByInsertOperation(t),[e])),th(Ic,Mc,(e,t)=>e.position.isEqual(t.deletionPosition)?(e.position=t.graveyardPosition.clone(),e.position.stickiness="toNext",[e]):(e.position=e.position._getTransformedByMergeOperation(t),[e])),th(Ic,Tc,(e,t)=>(e.position=e.position._getTransformedByMoveOperation(t),[e])),th(Ic,Ic,(e,t,i)=>{if(e.position.isEqual(t.position)){if(!i.aIsStrong)return[new Jc(0)];e.oldName=t.newName}return[e]}),th(Ic,Nc,(e,t)=>{if("same"==cn(e.position.path,t.splitPosition.getParentPath())&&!t.graveyardPosition){const t=new Ic(e.position.getShiftedBy(1),e.oldName,e.newName,0);return[e,t]}return e.position=e.position._getTransformedBySplitOperation(t),[e]}),th(Pc,Pc,(e,t,i)=>{if(e.root===t.root&&e.key===t.key){if(!i.aIsStrong||e.newValue===t.newValue)return[new Jc(0)];e.oldValue=t.newValue}return[e]}),th(Nc,Ec,(e,t)=>(e.splitPosition.hasSameParentAs(t.position)&&e.splitPosition.offset<t.position.offset&&(e.howMany+=t.howMany),e.splitPosition=e.splitPosition._getTransformedByInsertOperation(t),e.insertionPosition=e.insertionPosition._getTransformedByInsertOperation(t),[e])),th(Nc,Mc,(e,t,i)=>{if(!e.graveyardPosition&&!i.bWasUndone&&e.splitPosition.hasSameParentAs(t.sourcePosition)){const i=t.graveyardPosition.path.slice();i.push(0);const n=new Xs(t.graveyardPosition.root,i),o=Nc.getInsertionPosition(new Xs(t.graveyardPosition.root,i)),r=new Nc(n,0,o,null,0);return e.splitPosition=e.splitPosition._getTransformedByMergeOperation(t),e.insertionPosition=Nc.getInsertionPosition(e.splitPosition),e.graveyardPosition=r.insertionPosition.clone(),e.graveyardPosition.stickiness="toNext",[r,e]}return e.splitPosition.hasSameParentAs(t.deletionPosition)&&!e.splitPosition.isAfter(t.deletionPosition)&&e.howMany--,e.splitPosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.splitPosition=e.splitPosition._getTransformedByMergeOperation(t),e.insertionPosition=Nc.getInsertionPosition(e.splitPosition),e.graveyardPosition&&(e.graveyardPosition=e.graveyardPosition._getTransformedByMergeOperation(t)),[e]}),th(Nc,Tc,(e,t,i)=>{const n=na._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.graveyardPosition){const o=n.start.isEqual(e.graveyardPosition)||n.containsPosition(e.graveyardPosition);if(!i.bWasUndone&&o){const i=e.splitPosition._getTransformedByMoveOperation(t),n=e.graveyardPosition._getTransformedByMoveOperation(t),o=n.path.slice();o.push(0);const r=new Xs(n.root,o);return[new Tc(i,e.howMany,r,0)]}e.graveyardPosition=e.graveyardPosition._getTransformedByMoveOperation(t)}const o=e.splitPosition.isEqual(t.targetPosition);if(o&&("insertAtSource"==i.baRelation||"splitBefore"==i.abRelation))return e.howMany+=t.howMany,e.splitPosition=e.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),e.insertionPosition=Nc.getInsertionPosition(e.splitPosition),[e];if(o&&i.abRelation&&i.abRelation.howMany){const{howMany:t,offset:n}=i.abRelation;return e.howMany+=t,e.splitPosition=e.splitPosition.getShiftedBy(n),[e]}if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const i=t.howMany-(e.splitPosition.offset-t.sourcePosition.offset);return e.howMany-=i,e.splitPosition.hasSameParentAs(t.targetPosition)&&e.splitPosition.offset<t.targetPosition.offset&&(e.howMany+=t.howMany),e.splitPosition=t.sourcePosition.clone(),e.insertionPosition=Nc.getInsertionPosition(e.splitPosition),[e]}return t.sourcePosition.isEqual(t.targetPosition)||(e.splitPosition.hasSameParentAs(t.sourcePosition)&&e.splitPosition.offset<=t.sourcePosition.offset&&(e.howMany-=t.howMany),e.splitPosition.hasSameParentAs(t.targetPosition)&&e.splitPosition.offset<t.targetPosition.offset&&(e.howMany+=t.howMany)),e.splitPosition.stickiness="toNone",e.splitPosition=e.splitPosition._getTransformedByMoveOperation(t),e.splitPosition.stickiness="toNext",e.graveyardPosition?e.insertionPosition=e.insertionPosition._getTransformedByMoveOperation(t):e.insertionPosition=Nc.getInsertionPosition(e.splitPosition),[e]}),th(Nc,Nc,(e,t,i)=>{if(e.splitPosition.isEqual(t.splitPosition)){if(!e.graveyardPosition&&!t.graveyardPosition)return[new Jc(0)];if(e.graveyardPosition&&t.graveyardPosition&&e.graveyardPosition.isEqual(t.graveyardPosition))return[new Jc(0)];if("splitBefore"==i.abRelation)return e.howMany=0,e.graveyardPosition=e.graveyardPosition._getTransformedBySplitOperation(t),[e]}if(e.graveyardPosition&&t.graveyardPosition&&e.graveyardPosition.isEqual(t.graveyardPosition)){const n="$graveyard"==e.splitPosition.root.rootName,o="$graveyard"==t.splitPosition.root.rootName,r=n&&!o;if(o&&!n||!r&&i.aIsStrong){const i=[];return t.howMany&&i.push(new Tc(t.moveTargetPosition,t.howMany,t.splitPosition,0)),e.howMany&&i.push(new Tc(e.splitPosition,e.howMany,e.moveTargetPosition,0)),i}return[new Jc(0)]}if(e.graveyardPosition&&(e.graveyardPosition=e.graveyardPosition._getTransformedBySplitOperation(t)),e.splitPosition.isEqual(t.insertionPosition)&&"splitBefore"==i.abRelation)return e.howMany++,[e];if(t.splitPosition.isEqual(e.insertionPosition)&&"splitBefore"==i.baRelation){const i=t.insertionPosition.path.slice();i.push(0);const n=new Xs(t.insertionPosition.root,i);return[e,new Tc(e.insertionPosition,1,n,0)]}return e.splitPosition.hasSameParentAs(t.splitPosition)&&e.splitPosition.offset<t.splitPosition.offset&&(e.howMany-=t.howMany),e.splitPosition=e.splitPosition._getTransformedBySplitOperation(t),e.insertionPosition=Nc.getInsertionPosition(e.splitPosition),[e]});class hh extends es{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class uh extends es{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class gh{constructor(e){this.document=e}createDocumentFragment(e){return new Uo(this.document,e)}createElement(e,t,i){return new eo(this.document,e,t,i)}createText(e){return new hn(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,i){return i._insertChild(e,t)}removeChildren(e,t,i){return i._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const i=e.parent;if(i){const n=i.getChildIndex(e);return this.removeChildren(n,1,i),this.insertChild(n,t,i),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const i=t.getChildIndex(e);this.remove(e),this.insertChild(i,e.getChildren(),t)}}rename(e,t){const i=new eo(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,i)?i:null}setAttribute(e,t,i){i._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,i){ct(e)&&void 0===i&&(i=t),i._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,i){i._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return co._createAt(e,t)}createPositionAfter(e){return co._createAfter(e)}createPositionBefore(e){return co._createBefore(e)}createRange(e,t){return new lo(e,t)}createRangeOn(e){return lo._createOn(e)}createRangeIn(e){return lo._createIn(e)}createSelection(e,t,i){return new go(e,t,i)}}new Set(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","activeborder","activecaption","appworkspace","background","buttonface","buttonhighlight","buttonshadow","buttontext","captiontext","graytext","highlight","highlighttext","inactiveborder","inactivecaption","inactivecaptiontext","infobackground","infotext","menu","menutext","scrollbar","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","window","windowframe","windowtext","rebeccapurple","currentcolor","transparent"]);class mh extends vl{constructor(e,t){super(e),this.view=t,this._toolbarConfig=fd(e.config.get("toolbar")),this._elementReplacer=new _s}get element(){return this.view.element}init(e){const t=this.editor,i=this.view,n=t.editing.view,o=i.editable,r=n.document.getRoot();o.name=r.rootName,i.render();const s=o.element;this.setEditableElement(o.name,s),this.focusTracker.add(s),i.editable.bind("isFocused").to(this.focusTracker),n.attachDomRoot(s),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view,i=e.editing.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:e,originKeystrokeHandler:t,originFocusTracker:i,toolbar:n,beforeFocus:o,afterBlur:r}){i.add(n.element),t.set("Alt+F10",(e,t)=>{i.isFocused&&!n.focusTracker.isFocused&&(o&&o(),n.focus(),t())}),n.keystrokes.set("Esc",(t,i)=>{n.focusTracker.isFocused&&(e.focus(),r&&r(),i())})}({origin:i,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t.toolbar})}_initPlaceholder(){const e=this.editor,t=e.editing.view,i=t.document.getRoot(),n=e.sourceElement,o=e.config.get("placeholder")||n&&"textarea"===n.tagName.toLowerCase()&&n.getAttribute("placeholder");o&&Kd({view:t,element:i,text:o,isDirectHost:!1,keepOnFocus:!0})}}i(63);class fh extends Sd{constructor(e,t,i={}){super(e),this.stickyPanel=new Yd(e),this.toolbar=new pd(e,{shouldGroupWhenFull:i.shouldToolbarGroupWhenFull}),this.editable=new Pd(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class ph extends wl{constructor(e,t){super(t),Yi(e)&&(this.sourceElement=e),this.model.document.createRoot();const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),n=new fh(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:i});this.ui=new mh(this,n),function(e){if(!M(e.updateSourceElement))throw new c.a("attachtoform-missing-elementapi-interface",e);const t=e.sourceElement;if(t&&"textarea"===t.tagName.toLowerCase()&&t.form){let i;const n=t.form,o=()=>e.updateSourceElement();M(n.submit)&&(i=n.submit,n.submit=()=>{o(),i.apply(n)}),n.addEventListener("submit",o),e.on("destroy",()=>{n.removeEventListener("submit",o),i&&(n.submit=i)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(i=>{const n=new this(e,t);i(n.initPlugins().then(()=>n.ui.init(Yi(e)?e:null)).then(()=>{if(!Yi(e)&&t.initialData)throw new c.a("editor-create-initial-data",null);const i=void 0!==t.initialData?t.initialData:function(e){return Yi(e)?(t=e,t instanceof HTMLTextAreaElement?t.value:t.innerHTML):e;var t}(e);return n.data.init(i)}).then(()=>n.fire("ready")).then(()=>n))})}}Ke(ph,yl),Ke(ph,xl);class bh{constructor(e){this.files=function(e){const t=Array.from(e.files||[]),i=Array.from(e.items||[]);if(t.length)return t;return i.filter(e=>"file"===e.kind).map(e=>e.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return"none"==this._native.dropEffect||!!this._native.mozUserCancelled}}class wh extends es{constructor(e){super(e);const t=this.document;function i(e){return(i,n)=>{n.preventDefault();const r=n.dropRange?[n.dropRange]:null,s=new o(t,e);t.fire(s,{dataTransfer:n.dataTransfer,method:i.name,targetRanges:r,target:n.target}),s.stop.called&&n.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",i("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",i("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",i("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new bh(e.clipboardData?e.clipboardData:e.dataTransfer)};"drop"!=e.type&&"dragover"!=e.type||(t.dropRange=function(e,t){const i=t.target.ownerDocument,n=t.clientX,o=t.clientY;let r;i.caretRangeFromPoint&&i.caretRangeFromPoint(n,o)?r=i.caretRangeFromPoint(n,o):t.rangeParent&&(r=i.createRange(),r.setStart(t.rangeParent,t.rangeOffset),r.collapse(!0));if(r)return e.domConverter.domRangeToView(r);return null}(this.view,e)),this.fire(e.type,e,t)}}const kh=["figcaption","li"];class _h extends Qe{static get pluginName(){return"ClipboardPipeline"}init(){this.editor.editing.view.addObserver(wh),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){const e=this.editor,t=e.model,i=e.editing.view,n=i.document;this.listenTo(n,"clipboardInput",t=>{e.isReadOnly&&t.stop()},{priority:"highest"}),this.listenTo(n,"clipboardInput",(e,t)=>{const n=t.dataTransfer;let r=t.content||"";var s;r||(n.getData("text/html")?r=function(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>1==t.length?" ":t).replace(/<!--[\s\S]*?-->/g,"")}(n.getData("text/html")):n.getData("text/plain")&&(((s=(s=n.getData("text/plain")).replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r?\n\r?\n/g,"</p><p>").replace(/\r?\n/g,"<br>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).includes("</p><p>")||s.includes("<br>"))&&(s=`<p>${s}</p>`),r=s),r=this.editor.data.htmlProcessor.toView(r));const a=new o(this,"inputTransformation");this.fire(a,{content:r,dataTransfer:n,targetRanges:t.targetRanges,method:t.method}),a.stop.called&&e.stop(),i.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(e,i)=>{if(i.content.isEmpty)return;const n=this.editor.data.toModel(i.content,"$clipboardHolder");0!=n.childCount&&(e.stop(),t.change(()=>{this.fire("contentInsertion",{content:n,method:i.method,dataTransfer:i.dataTransfer,targetRanges:i.targetRanges})}))},{priority:"low"}),this.listenTo(this,"contentInsertion",(e,i)=>{i.resultRange=t.insertContent(i.content)},{priority:"low"})}_setupCopyCut(){const e=this.editor,t=e.model.document,i=e.editing.view.document;function n(n,o){const r=o.dataTransfer;o.preventDefault();const s=e.data.toView(e.model.getSelectedContent(t.selection));i.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this.listenTo(i,"copy",n,{priority:"low"}),this.listenTo(i,"cut",(t,i)=>{e.isReadOnly?i.preventDefault():n(t,i)},{priority:"low"}),this.listenTo(i,"clipboardOutput",(i,n)=>{n.content.isEmpty||(n.dataTransfer.setData("text/html",this.editor.data.htmlProcessor.toData(n.content)),n.dataTransfer.setData("text/plain",function e(t){let i="";if(t.is("$text")||t.is("$textProxy"))i=t.data;else if(t.is("element","img")&&t.hasAttribute("alt"))i=t.getAttribute("alt");else if(t.is("element","br"))i="\n";else{let n=null;for(const o of t.getChildren()){const t=e(o);n&&(n.is("containerElement")||o.is("containerElement"))&&(kh.includes(n.name)||kh.includes(o.name)?i+="\n":i+="\n\n"),i+=t,n=o}}return i}(n.content))),"cut"==n.method&&e.model.deleteContent(t.selection)},{priority:"low"})}}function*vh(e,t){for(const i of t)i&&e.getAttributeProperties(i[0]).copyOnEnter&&(yield i)}class yh extends Ze{execute(){const e=this.editor.model,t=e.document;e.change(i=>{!function(e,t,i,n){const o=i.isCollapsed,r=i.getFirstRange(),s=r.start.parent,a=r.end.parent;if(n.isLimit(s)||n.isLimit(a))return void(o||s!=a||e.deleteContent(i));if(o){const e=vh(t.model.schema,i.getAttributes());xh(t,r.start),t.setSelectionAttribute(e)}else{const n=!(r.start.isAtStart&&r.end.isAtEnd),o=s==a;e.deleteContent(i,{leaveUnmerged:n}),n&&(o?xh(t,i.focus):t.setSelection(a,0))}}(this.editor.model,i,t.selection,e.schema),this.fire("afterExecute",{writer:i})})}}function xh(e,t){e.split(t),e.setSelection(t.parent.nextSibling,0)}class Ah extends Rr{constructor(e){super(e);const t=this.document;t.on("keydown",(e,i)=>{if(this.isEnabled&&i.keyCode==No.enter){const n=new fo(t,"enter",t.selection.getFirstRange());t.fire(n,new Xr(t,i.domEvent,{isSoft:i.shiftKey})),n.stop.called&&e.stop()}})}observe(){}}class Ch extends Qe{static get pluginName(){return"Enter"}init(){const e=this.editor,t=e.editing.view,i=t.document;t.addObserver(Ah),e.commands.add("enter",new yh(e)),this.listenTo(i,"enter",(i,n)=>{n.preventDefault(),n.isSoft||(e.execute("enter"),t.scrollToTheSelection())},{priority:"low"})}}class Th{constructor(e,t=20){this.model=e,this.size=0,this.limit=t,this.isLocked=!1,this._changeCallback=(e,t)=>{"transparent"!=t.type&&t!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=this.model.createBatch()),this._batch}input(e){this.size+=e,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(e){this.isLocked&&!e||(this._batch=null,this.size=0)}}class Eh extends Ze{constructor(e,t){super(e),this.direction=t,this._buffer=new Th(e.model,e.config.get("typing.undoStep"))}get buffer(){return this._buffer}execute(e={}){const t=this.editor.model,i=t.document;t.enqueueChange(this._buffer.batch,n=>{this._buffer.lock();const o=n.createSelection(e.selection||i.selection),r=e.sequence||1,s=o.isCollapsed;if(o.isCollapsed&&t.modifySelection(o,{direction:this.direction,unit:e.unit}),this._shouldEntireContentBeReplacedWithParagraph(r))return void this._replaceEntireContentWithParagraph(n);if(this._shouldReplaceFirstBlockWithParagraph(o,r))return void this.editor.execute("paragraph",{selection:o});if(o.isCollapsed)return;let a=0;o.getFirstRange().getMinimalFlatRanges().forEach(e=>{a+=uo(e.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),t.deleteContent(o,{doNotResetEntireContent:s,direction:this.direction}),this._buffer.input(a),n.setSelection(o),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;const t=this.editor.model,i=t.document.selection,n=t.schema.getLimitElement(i);if(!(i.isCollapsed&&i.containsEntireContent(n)))return!1;if(!t.schema.checkChild(n,"paragraph"))return!1;const o=n.getChild(0);return!o||"paragraph"!==o.name}_replaceEntireContentWithParagraph(e){const t=this.editor.model,i=t.document.selection,n=t.schema.getLimitElement(i),o=e.createElement("paragraph");e.remove(e.createRangeIn(n)),e.insert(o,n),e.setSelection(o,0)}_shouldReplaceFirstBlockWithParagraph(e,t){const i=this.editor.model;if(t>1||"backward"!=this.direction)return!1;if(!e.isCollapsed)return!1;const n=e.getFirstPosition(),o=i.schema.getLimitElement(n),r=o.getChild(0);return n.parent==r&&(!!e.containsEntireContent(r)&&(!!i.schema.checkChild(o,"paragraph")&&"paragraph"!=r.name))}}class Sh extends Rr{constructor(e){super(e);const t=e.document;let i=0;function n(e,i,n){const o=new fo(t,"delete",t.selection.getFirstRange());t.fire(o,new Xr(t,i,n)),o.stop.called&&e.stop()}t.on("keyup",(e,t)=>{t.keyCode!=No.delete&&t.keyCode!=No.backspace||(i=0)}),t.on("keydown",(e,t)=>{const o={};if(t.keyCode==No.delete)o.direction="forward",o.unit="character";else{if(t.keyCode!=No.backspace)return;o.direction="backward",o.unit="codePoint"}const r=Io.isMac?t.altKey:t.ctrlKey;o.unit=r?"word":o.unit,o.sequence=++i,n(e,t.domEvent,o)}),Io.isAndroid&&t.on("beforeinput",(t,i)=>{if("deleteContentBackward"!=i.domEvent.inputType)return;const o={unit:"codepoint",direction:"backward",sequence:1},r=i.domTarget.ownerDocument.defaultView.getSelection();r.anchorNode==r.focusNode&&r.anchorOffset+1!=r.focusOffset&&(o.selectionToRemove=e.domConverter.domSelectionToView(r)),n(t,i.domEvent,o)})}observe(){}}class Ih extends Qe{static get pluginName(){return"Delete"}init(){const e=this.editor,t=e.editing.view,i=t.document,n=e.model.document;t.addObserver(Sh),this._undoOnBackspace=!1;const o=new Eh(e,"forward");if(e.commands.add("deleteForward",o),e.commands.add("forwardDelete",o),e.commands.add("delete",new Eh(e,"backward")),this.listenTo(i,"delete",(i,n)=>{const o={unit:n.unit,sequence:n.sequence};if(n.selectionToRemove){const t=e.model.createSelection(),i=[];for(const t of n.selectionToRemove.getRanges())i.push(e.editing.mapper.toModelRange(t));t.setTo(i),o.selection=t}e.execute("forward"==n.direction?"deleteForward":"delete",o),n.preventDefault(),t.scrollToTheSelection()},{priority:"low"}),Io.isAndroid){let e=null;this.listenTo(i,"delete",(t,i)=>{const n=i.domTarget.ownerDocument.defaultView.getSelection();e={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}},{priority:"lowest"}),this.listenTo(i,"keyup",(t,i)=>{if(e){const t=i.domTarget.ownerDocument.defaultView.getSelection();t.collapse(e.anchorNode,e.anchorOffset),t.extend(e.focusNode,e.focusOffset),e=null}})}this.editor.plugins.has("UndoEditing")&&(this.listenTo(i,"delete",(t,i)=>{this._undoOnBackspace&&"backward"==i.direction&&1==i.sequence&&"codePoint"==i.unit&&(this._undoOnBackspace=!1,e.execute("undo"),i.preventDefault(),t.stop())},{context:"$capture"}),this.listenTo(n,"change",()=>{this._undoOnBackspace=!1}))}requestUndoOnBackspace(){this.editor.plugins.has("UndoEditing")&&(this._undoOnBackspace=!0)}}class Ph{constructor(){this._stack=[]}add(e,t){const i=this._stack,n=i[0];this._insertDescriptor(e);const o=i[0];n===o||Mh(n,o)||this.fire("change:top",{oldDescriptor:n,newDescriptor:o,writer:t})}remove(e,t){const i=this._stack,n=i[0];this._removeDescriptor(e);const o=i[0];n===o||Mh(n,o)||this.fire("change:top",{oldDescriptor:n,newDescriptor:o,writer:t})}_insertDescriptor(e){const t=this._stack,i=t.findIndex(t=>t.id===e.id);if(Mh(e,t[i]))return;i>-1&&t.splice(i,1);let n=0;for(;t[n]&&Nh(t[n],e);)n++;t.splice(n,0,e)}_removeDescriptor(e){const t=this._stack,i=t.findIndex(t=>t.id===e);i>-1&&t.splice(i,1)}}function Mh(e,t){return e&&t&&e.priority==t.priority&&Rh(e.classes)==Rh(t.classes)}function Nh(e,t){return e.priority>t.priority||!(e.priority<t.priority)&&Rh(e.classes)>Rh(t.classes)}function Rh(e){return Array.isArray(e)?e.sort().join(","):e}Ke(Ph,h);function Oh(e){return!!e.is("element")&&!!e.getCustomProperty("widget")}function Dh(e,t,i={}){if(!e.is("containerElement"))throw new c.a("widget-to-widget-wrong-element-type",null,{element:e});return t.setAttribute("contenteditable","false",e),t.addClass("ck-widget",e),t.setCustomProperty("widget",!0,e),e.getFillerOffset=Hh,i.label&&function(e,t,i){i.setCustomProperty("widgetLabel",t,e)}(e,i.label,t),i.hasSelectionHandle&&function(e,t){const i=t.createUIElement("div",{class:"ck ck-widget__selection-handle"},(function(e){const t=this.toDomElement(e),i=new Xl;return i.set("content",'<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>'),i.render(),t.appendChild(i.element),t}));t.insert(t.createPositionAt(e,0),i),t.addClass(["ck-widget_with-selection-handle"],e)}(e,t),Vh(e,t),e}function zh(e,t,i){if(t.classes&&i.addClass(en(t.classes),e),t.attributes)for(const n in t.attributes)i.setAttribute(n,t.attributes[n],e)}function Lh(e,t,i){if(t.classes&&i.removeClass(en(t.classes),e),t.attributes)for(const n in t.attributes)i.removeAttribute(n,e)}function Vh(e,t,i=zh,n=Lh){const o=new Ph;o.on("change:top",(t,o)=>{o.oldDescriptor&&n(e,o.oldDescriptor,o.writer),o.newDescriptor&&i(e,o.newDescriptor,o.writer)}),t.setCustomProperty("addHighlight",(e,t,i)=>o.add(t,i),e),t.setCustomProperty("removeHighlight",(e,t,i)=>o.remove(t,i),e)}function jh(e){const t=e.getCustomProperty("widgetLabel");return t?"function"==typeof t?t():t:""}function Bh(e,t){return t.addClass(["ck-editor__editable","ck-editor__nested-editable"],e),t.setAttribute("contenteditable",e.isReadOnly?"false":"true",e),e.on("change:isReadOnly",(i,n,o)=>{t.setAttribute("contenteditable",o?"false":"true",e)}),e.on("change:isFocused",(i,n,o)=>{o?t.addClass("ck-editor__nested-editable_focused",e):t.removeClass("ck-editor__nested-editable_focused",e)}),Vh(e,t),e}function Fh(e,t){const i=e.getSelectedElement();if(i){const n=Wh(e);if(n)return t.createRange(t.createPositionAt(i,n));if(t.schema.isObject(i)&&!t.schema.isInline(i))return t.createRangeOn(i)}const n=e.getSelectedBlocks().next().value;if(n){if(n.isEmpty)return t.createRange(t.createPositionAt(n,0));const i=t.createPositionAfter(n);return e.focus.isTouching(i)?t.createRange(i):t.createRange(t.createPositionBefore(n))}return t.createRange(e.focus)}function Hh(){return null}function Uh(e,t,i){return e&&Oh(e)&&!i.isInline(t)}function Wh(e){return e.getAttribute("widget-type-around")}const qh=[Oo("arrowUp"),Oo("arrowRight"),Oo("arrowDown"),Oo("arrowLeft"),9,16,17,18,19,20,27,33,34,35,36,45,91,93,144,145,173,174,175,176,177,178,179,255];for(let e=112;e<=135;e++)qh.push(e);function $h(e){return!(!e.ctrlKey&&!e.metaKey)||qh.includes(e.keyCode)}i(65);const Yh=["before","after"],Gh=(new DOMParser).parseFromString('<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>',"image/svg+xml").firstChild;class Kh extends Qe{static get pluginName(){return"WidgetTypeAround"}static get requires(){return[Ch,Ih]}constructor(e){super(e),this._currentFakeCaretModelElement=null}init(){const e=this.editor,t=e.editing.view;this.on("change:isEnabled",(i,n,o)=>{t.change(e=>{for(const i of t.document.roots)o?e.removeClass("ck-widget__type-around_disabled",i):e.addClass("ck-widget__type-around_disabled",i)}),o||e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})}),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration(),this._enableDeleteContentIntegration()}destroy(){this._currentFakeCaretModelElement=null}_insertParagraph(e,t){const i=this.editor,n=i.editing.view;i.execute("insertParagraph",{position:i.model.createPositionAt(e,t)}),n.focus(),n.scrollToTheSelection()}_listenToIfEnabled(e,t,i,n){this.listenTo(e,t,(...e)=>{this.isEnabled&&i(...e)},n)}_insertParagraphAccordingToFakeCaretPosition(){const e=this.editor.model.document.selection,t=Wh(e);if(!t)return!1;const i=e.getSelectedElement();return this._insertParagraph(i,t),!0}_enableTypeAroundUIInjection(){const e=this.editor,t=e.model.schema,i=e.locale.t,n={before:i("Insert paragraph before block"),after:i("Insert paragraph after block")};e.editing.downcastDispatcher.on("insert",(e,i,o)=>{const r=o.mapper.toViewElement(i.item);Uh(r,i.item,t)&&function(e,t,i){const n=e.createUIElement("div",{class:"ck ck-reset_all ck-widget__type-around"},(function(e){const i=this.toDomElement(e);return function(e,t){for(const i of Yh){const n=new Rl({tag:"div",attributes:{class:["ck","ck-widget__type-around__button","ck-widget__type-around__button_"+i],title:t[i]},children:[e.ownerDocument.importNode(Gh,!0)]});e.appendChild(n.render())}}(i,t),function(e){const t=new Rl({tag:"div",attributes:{class:["ck","ck-widget__type-around__fake-caret"]}});e.appendChild(t.render())}(i),i}));e.insert(e.createPositionAt(i,"end"),n)}(o.writer,n,r)},{priority:"low"})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){const e=this.editor,t=e.model,i=t.document.selection,n=t.schema,o=e.editing.view;function r(e){return"ck-widget_type-around_show-fake-caret_"+e}this._listenToIfEnabled(o.document,"arrowKey",(e,t)=>{this._handleArrowKeyPress(e,t)},{context:[Oh,"$text"],priority:"high"}),this._listenToIfEnabled(i,"change:range",(t,i)=>{i.directChange&&e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})}),this._listenToIfEnabled(t.document,"change:data",()=>{const t=i.getSelectedElement();if(t){if(Uh(e.editing.mapper.toViewElement(t),t,n))return}e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})}),this._listenToIfEnabled(e.editing.downcastDispatcher,"selection",(e,t,i)=>{const o=i.writer;if(this._currentFakeCaretModelElement){const e=i.mapper.toViewElement(this._currentFakeCaretModelElement);e&&(o.removeClass(Yh.map(r),e),this._currentFakeCaretModelElement=null)}const s=t.selection.getSelectedElement();if(!s)return;const a=i.mapper.toViewElement(s);if(!Uh(a,s,n))return;const c=Wh(t.selection);c&&(o.addClass(r(c),a),this._currentFakeCaretModelElement=s)}),this._listenToIfEnabled(e.ui.focusTracker,"change:isFocused",(t,i,n)=>{n||e.model.change(e=>{e.removeSelectionAttribute("widget-type-around")})})}_handleArrowKeyPress(e,t){const i=this.editor,n=i.model,o=n.document.selection,r=n.schema,s=i.editing.view,a=function(e,t){const i=Lo(e,t);return"down"===i||"right"===i}(t.keyCode,i.locale.contentLanguageDirection),c=s.document.selection.getSelectedElement();let l;Uh(c,i.editing.mapper.toModelElement(c),r)?l=this._handleArrowKeyPressOnSelectedWidget(a):o.isCollapsed?l=this._handleArrowKeyPressWhenSelectionNextToAWidget(a):t.shiftKey||(l=this._handleArrowKeyPressWhenNonCollapsedSelection(a)),l&&(t.preventDefault(),e.stop())}_handleArrowKeyPressOnSelectedWidget(e){const t=this.editor.model,i=Wh(t.document.selection);return t.change(t=>{if(!i)return t.setSelectionAttribute("widget-type-around",e?"after":"before"),!0;if(!(i===(e?"after":"before")))return t.removeSelectionAttribute("widget-type-around"),!0;return!1})}_handleArrowKeyPressWhenSelectionNextToAWidget(e){const t=this.editor,i=t.model,n=i.schema,o=t.plugins.get("Widget"),r=o._getObjectElementNextToSelection(e);return!!Uh(t.editing.mapper.toViewElement(r),r,n)&&(i.change(t=>{o._setSelectionOverElement(r),t.setSelectionAttribute("widget-type-around",e?"before":"after")}),!0)}_handleArrowKeyPressWhenNonCollapsedSelection(e){const t=this.editor,i=t.model,n=i.schema,o=t.editing.mapper,r=i.document.selection,s=e?r.getLastPosition().nodeBefore:r.getFirstPosition().nodeAfter;return!!Uh(o.toViewElement(s),s,n)&&(i.change(t=>{t.setSelection(s,"on"),t.setSelectionAttribute("widget-type-around",e?"after":"before")}),!0)}_enableInsertingParagraphsOnButtonClick(){const e=this.editor,t=e.editing.view;this._listenToIfEnabled(t.document,"mousedown",(i,n)=>{const o=n.domTarget.closest(".ck-widget__type-around__button");if(!o)return;const r=function(e){return e.classList.contains("ck-widget__type-around__button_before")?"before":"after"}(o),s=function(e,t){const i=e.closest(".ck-widget");return t.mapDomToView(i)}(o,t.domConverter),a=e.editing.mapper.toModelElement(s);this._insertParagraph(a,r),n.preventDefault(),i.stop()})}_enableInsertingParagraphsOnEnterKeypress(){const e=this.editor,t=e.model.document.selection,i=e.editing.view;this._listenToIfEnabled(i.document,"enter",(i,n)=>{if("atTarget"!=i.eventPhase)return;const o=t.getSelectedElement(),r=e.editing.mapper.toViewElement(o),s=e.model.schema;let a;this._insertParagraphAccordingToFakeCaretPosition()?a=!0:Uh(r,o,s)&&(this._insertParagraph(o,n.isSoft?"before":"after"),a=!0),a&&(n.preventDefault(),i.stop())},{context:Oh})}_enableInsertingParagraphsOnTypingKeystroke(){const e=this.editor.editing.view,t=[No.enter,No.delete,No.backspace];this._listenToIfEnabled(e.document,"keydown",(e,i)=>{t.includes(i.keyCode)||$h(i)||this._insertParagraphAccordingToFakeCaretPosition()},{priority:"high"})}_enableDeleteIntegration(){const e=this.editor,t=e.editing.view,i=e.model,n=i.schema;this._listenToIfEnabled(t.document,"delete",(t,o)=>{if("atTarget"!=t.eventPhase)return;const r=Wh(i.document.selection);if(!r)return;const s=o.direction,a=i.document.selection.getSelectedElement(),c="forward"==s;if("before"===r===c)e.execute("delete",{selection:i.createSelection(a,"on")});else{const t=n.getNearestSelectionRange(i.createPositionAt(a,r),s);if(t)if(t.isCollapsed){const o=i.createSelection(t.start);if(i.modifySelection(o,{direction:s}),o.focus.isEqual(t.start)){const e=function(e,t){let i=t;for(const n of t.getAncestors({parentFirst:!0})){if(n.childCount>1||e.isLimit(n))break;i=n}return i}(n,t.start.parent);i.deleteContent(i.createSelection(e,"on"),{doNotAutoparagraph:!0})}else i.change(i=>{i.setSelection(t),e.execute(c?"deleteForward":"delete")})}else i.change(i=>{i.setSelection(t),e.execute(c?"deleteForward":"delete")})}o.preventDefault(),t.stop()},{context:Oh})}_enableInsertContentIntegration(){const e=this.editor,t=this.editor.model,i=t.document.selection;this._listenToIfEnabled(e.model,"insertContent",(e,[n,o])=>{if(o&&!o.is("documentSelection"))return;const r=Wh(i);return r?(e.stop(),t.change(e=>{const o=i.getSelectedElement(),s=t.createPositionAt(o,r),a=e.createSelection(s),c=t.insertContent(n,a);return e.setSelection(a),c})):void 0},{priority:"high"})}_enableDeleteContentIntegration(){const e=this.editor,t=this.editor.model.document.selection;this._listenToIfEnabled(e.model,"deleteContent",(e,[i])=>{if(i&&!i.is("documentSelection"))return;Wh(t)&&e.stop()},{priority:"high"})}}function Qh(e){const t=e.model;return(i,n)=>{const o=n.keyCode==No.arrowup,r=n.keyCode==No.arrowdown,s=n.shiftKey,a=t.document.selection;if(!o&&!r)return;const c=r;if(s&&function(e,t){return!e.isCollapsed&&e.isBackward==t}(a,c))return;const l=function(e,t,i){const n=e.model;if(i){const e=t.isCollapsed?t.focus:t.getLastPosition(),i=Jh(n,e,"forward");if(!i)return null;const o=n.createRange(e,i),r=Zh(n.schema,o,"backward");return r?n.createRange(e,r):null}{const e=t.isCollapsed?t.focus:t.getFirstPosition(),i=Jh(n,e,"backward");if(!i)return null;const o=n.createRange(i,e),r=Zh(n.schema,o,"forward");return r?n.createRange(r,e):null}}(e,a,c);if(l){if(l.isCollapsed){if(a.isCollapsed)return;if(s)return}(l.isCollapsed||function(e,t,i){const n=e.model,o=e.view.domConverter;if(i){const e=n.createSelection(t.start);n.modifySelection(e),e.focus.isAtEnd||t.start.isEqual(e.focus)||(t=n.createRange(e.focus,t.end))}const r=e.mapper.toViewRange(t),s=o.viewRangeToDom(r),a=Cs.getDomRangeRects(s);let c;for(const e of a)if(void 0!==c){if(Math.round(e.top)>=c)return!1;c=Math.max(c,Math.round(e.bottom))}else c=Math.round(e.bottom);return!0}(e,l,c))&&(t.change(e=>{const i=c?l.end:l.start;if(s){const n=t.createSelection(a.anchor);n.setFocus(i),e.setSelection(n)}else e.setSelection(i)}),i.stop(),n.preventDefault(),n.stopPropagation())}}}function Jh(e,t,i){const n=e.schema,o=e.createRangeIn(t.root),r="forward"==i?"elementStart":"elementEnd";for(const{previousPosition:e,item:s,type:a}of o.getWalker({startPosition:t,direction:i})){if(n.isLimit(s)&&!n.isInline(s))return e;if(a==r&&n.isBlock(s))return null}return null}function Zh(e,t,i){const n="backward"==i?t.end:t.start;if(e.checkChild(n,"$text"))return n;for(const{nextPosition:n}of t.getWalker({direction:i}))if(e.checkChild(n,"$text"))return n;return null}i(67);class Xh extends Qe{static get pluginName(){return"Widget"}static get requires(){return[Kh,Ih]}init(){const e=this.editor,t=e.editing.view,i=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(t,i,n)=>{const o=n.writer,r=i.selection;if(r.isCollapsed)return;const s=r.getSelectedElement();if(!s)return;const a=e.editing.mapper.toViewElement(s);Oh(a)&&n.consumable.consume(r,"selection")&&o.setSelection(o.createRangeOn(a),{fake:!0,label:jh(a)})}),this.editor.editing.downcastDispatcher.on("selection",(e,t,i)=>{this._clearPreviouslySelectedWidgets(i.writer);const n=i.writer,o=n.document.selection;let r=null;for(const e of o.getRanges())for(const t of e){const e=t.item;Oh(e)&&!eu(e,r)&&(n.addClass("ck-widget_selected",e),this._previouslySelected.add(e),r=e)}},{priority:"low"}),t.addObserver(uh),this.listenTo(i,"mousedown",(...e)=>this._onMousedown(...e)),this.listenTo(i,"arrowKey",(...e)=>{this._handleSelectionChangeOnArrowKeyPress(...e)},{context:[Oh,"$text"]}),this.listenTo(i,"arrowKey",(...e)=>{this._preventDefaultOnArrowKeyPress(...e)},{context:"$root"}),this.listenTo(i,"arrowKey",Qh(this.editor.editing),{context:"$text"}),this.listenTo(i,"delete",(e,t)=>{this._handleDelete("forward"==t.direction)&&(t.preventDefault(),e.stop())},{context:"$root"})}_onMousedown(e,t){const i=this.editor,n=i.editing.view,o=n.document;let r=t.target;if(function(e){for(;e;){if(e.is("editableElement")&&!e.is("rootElement"))return!0;if(Oh(e))return!1;e=e.parent}return!1}(r)){if((Io.isSafari||Io.isGecko)&&t.domEvent.detail>=3){const e=i.editing.mapper,n=r.is("attributeElement")?r.findAncestor(e=>!e.is("attributeElement")):r,o=e.toModelElement(n);t.preventDefault(),this.editor.model.change(e=>{e.setSelection(o,"in")})}return}if(!Oh(r)&&(r=r.findAncestor(Oh),!r))return;Io.isAndroid&&t.preventDefault(),o.isFocused||n.focus();const s=i.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_handleSelectionChangeOnArrowKeyPress(e,t){const i=t.keyCode,n=this.editor.model,o=n.schema,r=n.document.selection,s=r.getSelectedElement(),a=Lo(i,this.editor.locale.contentLanguageDirection),c="down"==a||"right"==a,l="up"==a||"down"==a;if(s&&o.isObject(s)){const i=c?r.getLastPosition():r.getFirstPosition(),s=o.getNearestSelectionRange(i,c?"forward":"backward");return void(s&&(n.change(e=>{e.setSelection(s)}),t.preventDefault(),e.stop()))}if(!r.isCollapsed&&!t.shiftKey){const i=r.getFirstPosition(),s=r.getLastPosition(),a=i.nodeAfter,l=s.nodeBefore;return void((a&&o.isObject(a)||l&&o.isObject(l))&&(n.change(e=>{e.setSelection(c?s:i)}),t.preventDefault(),e.stop()))}if(!r.isCollapsed)return;const d=this._getObjectElementNextToSelection(c);if(d&&o.isObject(d)){if(o.isInline(d)&&l)return;this._setSelectionOverElement(d),t.preventDefault(),e.stop()}}_preventDefaultOnArrowKeyPress(e,t){const i=this.editor.model,n=i.schema,o=i.document.selection.getSelectedElement();o&&n.isObject(o)&&(t.preventDefault(),e.stop())}_handleDelete(e){if(this.editor.isReadOnly)return;const t=this.editor.model.document.selection;if(!t.isCollapsed)return;const i=this._getObjectElementNextToSelection(e);return i?(this.editor.model.change(e=>{let n=t.anchor.parent;for(;n.isEmpty;){const t=n;n=t.parent,e.remove(t)}this._setSelectionOverElement(i)}),!0):void 0}_setSelectionOverElement(e){this.editor.model.change(t=>{t.setSelection(t.createRangeOn(e))})}_getObjectElementNextToSelection(e){const t=this.editor.model,i=t.schema,n=t.document.selection,o=t.createSelection(n);if(t.modifySelection(o,{direction:e?"forward":"backward"}),o.isEqual(n))return null;const r=e?o.focus.nodeBefore:o.focus.nodeAfter;return r&&i.isObject(r)?r:null}_clearPreviouslySelectedWidgets(e){for(const t of this._previouslySelected)e.removeClass("ck-widget_selected",t);this._previouslySelected.clear()}}function eu(e,t){return!!t&&Array.from(e.getAncestors()).includes(t)}var tu=function(e,t,i){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return w(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),ms(e,t,{leading:n,maxWait:t,trailing:o})};i(69);class iu extends Qe{static get pluginName(){return"DragDrop"}static get requires(){return[_h,Xh]}init(){const e=this.editor,t=e.editing.view;this._draggedRange=null,this._draggingUid="",this._draggableElement=null,this._updateDropMarkerThrottled=tu(e=>this._updateDropMarker(e),40),this._removeDropMarkerDelayed=ru(()=>this._removeDropMarker(),40),this._clearDraggableAttributesDelayed=ru(()=>this._clearDraggableAttributes(),40),t.addObserver(wh),t.addObserver(uh),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(e,"change:isReadOnly",(e,t,i)=>{i?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")}),this.on("change:isEnabled",(e,t,i)=>{i||this._finalizeDragging(!1)}),Io.isAndroid&&this.forceDisabled("noAndroidSupport")}destroy(){return this._draggedRange&&(this._draggedRange.detach(),this._draggedRange=null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){const e=this.editor,t=e.model,i=t.document,n=e.editing.view,o=n.document;this.listenTo(o,"dragstart",(n,r)=>{const a=i.selection;if(r.target&&r.target.is("editableElement"))return void r.preventDefault();const c=r.target?su(r.target):null;if(c){const i=e.editing.mapper.toModelElement(c);this._draggedRange=pa.fromRange(t.createRangeOn(i)),e.plugins.has("WidgetToolbarRepository")&&e.plugins.get("WidgetToolbarRepository").forceDisabled("dragDrop")}else if(!o.selection.isCollapsed){const e=o.selection.getSelectedElement();e&&Oh(e)||(this._draggedRange=pa.fromRange(a.getFirstRange()))}if(!this._draggedRange)return void r.preventDefault();this._draggingUid=s(),r.dataTransfer.effectAllowed=this.isEnabled?"copyMove":"copy",r.dataTransfer.setData("application/ckeditor5-dragging-uid",this._draggingUid);const l=t.createSelection(this._draggedRange.toRange()),d=e.data.toView(t.getSelectedContent(l));o.fire("clipboardOutput",{dataTransfer:r.dataTransfer,content:d,method:n.name}),this.isEnabled||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="")},{priority:"low"}),this.listenTo(o,"dragend",(e,t)=>{this._finalizeDragging(!t.dataTransfer.isCanceled&&"move"==t.dataTransfer.dropEffect)},{priority:"low"}),this.listenTo(o,"dragenter",()=>{this.isEnabled&&n.focus()}),this.listenTo(o,"dragleave",()=>{this._removeDropMarkerDelayed()}),this.listenTo(o,"dragging",(t,i)=>{if(!this.isEnabled)return void(i.dataTransfer.dropEffect="none");this._removeDropMarkerDelayed.cancel();const n=nu(e,i.targetRanges,i.target);this._draggedRange||(i.dataTransfer.dropEffect="copy"),Io.isGecko||("copy"==i.dataTransfer.effectAllowed?i.dataTransfer.dropEffect="copy":["all","copyMove"].includes(i.dataTransfer.effectAllowed)&&(i.dataTransfer.dropEffect="move")),n&&this._updateDropMarkerThrottled(n)},{priority:"low"})}_setupClipboardInputIntegration(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"clipboardInput",(t,i)=>{if("drop"!=i.method)return;const n=nu(e,i.targetRanges,i.target);if(this._removeDropMarker(),!n)return this._finalizeDragging(!1),void t.stop();this._draggedRange&&this._draggingUid!=i.dataTransfer.getData("application/ckeditor5-dragging-uid")&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid="");if("move"==ou(i.dataTransfer)&&this._draggedRange&&this._draggedRange.containsRange(n,!0))return this._finalizeDragging(!1),void t.stop();i.targetRanges=[e.editing.mapper.toViewRange(n)]},{priority:"high"})}_setupContentInsertionIntegration(){const e=this.editor.plugins.get(_h);e.on("contentInsertion",(e,t)=>{if(!this.isEnabled||"drop"!==t.method)return;const i=t.targetRanges.map(e=>this.editor.editing.mapper.toModelRange(e));this.editor.model.change(e=>e.setSelection(i))},{priority:"high"}),e.on("contentInsertion",(e,t)=>{if(!this.isEnabled||"drop"!==t.method)return;const i="move"==ou(t.dataTransfer),n=!t.resultRange||!t.resultRange.isCollapsed;this._finalizeDragging(n&&i)},{priority:"lowest"})}_setupDraggableAttributeHandling(){const e=this.editor,t=e.editing.view,i=t.document;this.listenTo(i,"mousedown",(n,o)=>{if(Io.isAndroid||!o)return;this._clearDraggableAttributesDelayed.cancel();let r=su(o.target);if(Io.isBlink&&!e.isReadOnly&&!r&&!i.selection.isCollapsed){const e=i.selection.getSelectedElement();e&&Oh(e)||(r=i.selection.editableElement)}r&&(t.change(e=>{e.setAttribute("draggable","true",r)}),this._draggableElement=e.editing.mapper.toModelElement(r))}),this.listenTo(i,"mouseup",()=>{Io.isAndroid||this._clearDraggableAttributesDelayed()})}_clearDraggableAttributes(){const e=this.editor.editing;e.view.change(t=>{this._draggableElement&&"$graveyard"!=this._draggableElement.root.rootName&&t.removeAttribute("draggable",e.mapper.toViewElement(this._draggableElement)),this._draggableElement=null})}_setupDropMarker(){const e=this.editor;e.conversion.for("editingDowncast").markerToHighlight({model:"drop-target",view:{classes:["ck-clipboard-drop-target-range"]}}),e.conversion.for("editingDowncast").markerToElement({model:"drop-target",view:(t,{writer:i})=>{if(e.model.schema.checkChild(t.markerRange.start,"$text"))return i.createUIElement("span",{class:"ck ck-clipboard-drop-target-position"},(function(e){const t=this.toDomElement(e);return t.innerHTML="&NoBreak;<span></span>&NoBreak;",t}))}})}_updateDropMarker(e){const t=this.editor,i=t.model.markers;t.model.change(t=>{i.has("drop-target")?i.get("drop-target").getRange().isEqual(e)||t.updateMarker("drop-target",{range:e}):t.addMarker("drop-target",{range:e,usingOperation:!1,affectsData:!1})})}_removeDropMarker(){const e=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),e.markers.has("drop-target")&&e.change(e=>{e.removeMarker("drop-target")})}_finalizeDragging(e){const t=this.editor,i=t.model;this._removeDropMarker(),this._clearDraggableAttributes(),t.plugins.has("WidgetToolbarRepository")&&t.plugins.get("WidgetToolbarRepository").clearForceDisabled("dragDrop"),this._draggingUid="",this._draggedRange&&(e&&this.isEnabled&&i.deleteContent(i.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),this._draggedRange=null)}}function nu(e,t,i){const n=e.model,o=e.editing.mapper;let r=null;const s=t?t[0].start:null;if(i.is("uiElement")&&(i=i.parent),r=function(e,t){const i=e.model,n=e.editing.mapper;if(Oh(t))return i.createRangeOn(n.toModelElement(t));if(!t.is("editableElement")){const e=t.findAncestor(e=>Oh(e)||e.is("editableElement"));if(Oh(e))return i.createRangeOn(n.toModelElement(e))}return null}(e,i),r)return r;const a=function(e,t){const i=e.editing.mapper,n=e.editing.view,o=i.toModelElement(t);if(o)return o;const r=n.createPositionBefore(t),s=i.findMappedViewAncestor(r);return i.toModelElement(s)}(e,i),c=s?o.toModelPosition(s):null;return c?(r=function(e,t,i){const n=e.model;if(!n.schema.checkChild(i,"$block"))return null;const o=n.createPositionAt(i,0),r=t.path.slice(0,o.path.length),s=n.createPositionFromPath(t.root,r).nodeAfter;if(s&&n.schema.isObject(s))return n.createRangeOn(s);return null}(e,c,a),r||(r=n.schema.getNearestSelectionRange(c,Io.isGecko?"forward":"backward"),r||function(e,t){const i=e.model;for(;t;){if(i.schema.isObject(t))return i.createRangeOn(t);t=t.parent}}(e,c.parent))):function(e,t){const i=e.model,n=i.schema,o=i.createPositionAt(t,0);return n.getNearestSelectionRange(o,"forward")}(e,a)}function ou(e){return Io.isGecko?e.dropEffect:["all","copyMove"].includes(e.effectAllowed)?"move":"copy"}function ru(e,t){let i;function n(...o){n.cancel(),i=setTimeout(()=>e(...o),t)}return n.cancel=()=>{clearTimeout(i)},n}function su(e){if(e.is("editableElement"))return null;if(e.hasClass("ck-widget__selection-handle"))return e.findAncestor(Oh);if(Oh(e))return e;const t=e.findAncestor(e=>Oh(e)||e.is("editableElement"));return Oh(t)?t:null}class au extends Qe{static get pluginName(){return"PastePlainText"}static get requires(){return[_h]}init(){const e=this.editor,t=e.model,i=e.editing.view,n=i.document,o=t.document.selection;let r=!1;i.addObserver(wh),this.listenTo(n,"keydown",(e,t)=>{r=t.shiftKey}),e.plugins.get(_h).on("contentInsertion",(e,i)=>{(r||function(e,t){if(e.childCount>1)return!1;const i=e.getChild(0);if(t.isObject(i))return!1;return 0==[...i.getAttributeKeys()].length}(i.content,t.schema))&&t.change(e=>{const n=Array.from(o.getAttributes()).filter(([e])=>t.schema.getAttributeProperties(e).isFormatting);o.isCollapsed||t.deleteContent(o,{doNotAutoparagraph:!0}),n.push(...o.getAttributes());const r=e.createRangeIn(i.content);for(const t of r.getItems())t.is("$textProxy")&&e.setAttributes(n,t)})})}}class cu extends Qe{static get pluginName(){return"Clipboard"}static get requires(){return[_h,iu,au]}}class lu extends Ze{execute(){const e=this.editor.model,t=e.document;e.change(i=>{!function(e,t,i){const n=i.isCollapsed,o=i.getFirstRange(),r=o.start.parent,s=o.end.parent,a=r==s;if(n){const n=vh(e.schema,i.getAttributes());du(e,t,o.end),t.removeSelectionAttribute(i.getAttributeKeys()),t.setSelectionAttribute(n)}else{const n=!(o.start.isAtStart&&o.end.isAtEnd);e.deleteContent(i,{leaveUnmerged:n}),a?du(e,t,i.focus):n&&t.setSelection(s,0)}}(e,i,t.selection),this.fire("afterExecute",{writer:i})})}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=function(e,t){if(t.rangeCount>1)return!1;const i=t.anchor;if(!i||!e.checkChild(i,"softBreak"))return!1;const n=t.getFirstRange(),o=n.start.parent,r=n.end.parent;if((hu(o,e)||hu(r,e))&&o!==r)return!1;return!0}(e.schema,t.selection)}}function du(e,t,i){const n=t.createElement("softBreak");e.insertContent(n,i),t.setSelection(n,"after")}function hu(e,t){return!e.is("rootElement")&&(t.isLimit(e)||hu(e.parent,t))}class uu extends Qe{static get pluginName(){return"ShiftEnter"}init(){const e=this.editor,t=e.model.schema,i=e.conversion,n=e.editing.view,o=n.document;t.register("softBreak",{allowWhere:"$text",isInline:!0}),i.for("upcast").elementToElement({model:"softBreak",view:"br"}),i.for("downcast").elementToElement({model:"softBreak",view:(e,{writer:t})=>t.createEmptyElement("br")}),n.addObserver(Ah),e.commands.add("shiftEnter",new lu(e)),this.listenTo(o,"enter",(t,i)=>{i.preventDefault(),i.isSoft&&(e.execute("shiftEnter"),n.scrollToTheSelection())},{priority:"low"})}}class gu extends Ze{constructor(e){super(e),this.affectsData=!1}execute(){const e=this.editor.model,t=e.document.selection;let i=e.schema.getLimitElement(t);if(t.containsEntireContent(i)||!mu(e.schema,i))do{if(i=i.parent,!i)return}while(!mu(e.schema,i));e.change(e=>{e.setSelection(i,"in")})}}function mu(e,t){return e.isLimit(t)&&(e.checkChild(t,"$text")||e.checkChild(t,"paragraph"))}const fu=Do("Ctrl+A");class pu extends Qe{static get pluginName(){return"SelectAllEditing"}init(){const e=this.editor,t=e.editing.view.document;e.commands.add("selectAll",new gu(e)),this.listenTo(t,"keydown",(t,i)=>{Oo(i)===fu&&(e.execute("selectAll"),i.preventDefault())})}}class bu extends Qe{static get pluginName(){return"SelectAllUI"}init(){const e=this.editor;e.ui.componentFactory.add("selectAll",t=>{const i=e.commands.get("selectAll"),n=new td(t),o=t.t;return n.set({label:o("Select all"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>',keystroke:"Ctrl+A",tooltip:!0}),n.bind("isOn","isEnabled").to(i,"value","isEnabled"),this.listenTo(n,"execute",()=>{e.execute("selectAll"),e.editing.view.focus()}),n})}}class wu extends Qe{static get requires(){return[pu,bu]}static get pluginName(){return"SelectAll"}}class ku extends Ze{constructor(e,t){super(e),this._buffer=new Th(e.model,t),this._batches=new WeakSet}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){const t=this.editor.model,i=t.document,n=e.text||"",o=n.length,r=e.range?t.createSelection(e.range):i.selection,s=e.resultRange;t.enqueueChange(this._buffer.batch,e=>{this._buffer.lock(),this._batches.add(this._buffer.batch),t.deleteContent(r),n&&t.insertContent(e.createText(n,i.selection.getAttributes()),r),s?e.setSelection(s):r.is("documentSelection")||e.setSelection(r),this._buffer.unlock(),this._buffer.input(o)})}}function _u(e){if(e.newChildren.length-e.oldChildren.length!=1)return;const t=function(e,t){const i=[];let n,o=0;return e.forEach(e=>{"equal"==e?(r(),o++):"insert"==e?(s("insert")?n.values.push(t[o]):(r(),n={type:"insert",index:o,values:[t[o]]}),o++):s("delete")?n.howMany++:(r(),n={type:"delete",index:o,howMany:1})}),r(),i;function r(){n&&(i.push(n),n=null)}function s(e){return n&&n.type==e}}(ur(e.oldChildren,e.newChildren,vu),e.newChildren);if(t.length>1)return;const i=t[0];return i.values[0]&&i.values[0].is("$text")?i:void 0}function vu(e,t){return e&&e.is("$text")&&t&&t.is("$text")?e.data===t.data:e===t}class yu{constructor(e){this.editor=e,this.editing=this.editor.editing}handle(e,t){if(function(e){if(0==e.length)return!1;for(const t of e)if("children"===t.type&&!_u(t))return!0;return!1}(e))this._handleContainerChildrenMutations(e,t);else for(const i of e)this._handleTextMutation(i,t),this._handleTextNodeInsertion(i)}_handleContainerChildrenMutations(e,t){const i=function(e){const t=e.map(e=>e.node).reduce((e,t)=>e.getCommonAncestor(t,{includeSelf:!0}));if(!t)return;return t.getAncestors({includeSelf:!0,parentFirst:!0}).find(e=>e.is("containerElement")||e.is("rootElement"))}(e);if(!i)return;const n=this.editor.editing.view.domConverter.mapViewToDom(i),o=new Tr(this.editor.editing.view.document),r=this.editor.data.toModel(o.domToView(n)).getChild(0),s=this.editor.editing.mapper.toModelElement(i);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1],h=l&&l.is("element","softBreak"),u=d&&!d.is("element","softBreak");h&&u&&a.pop();const g=this.editor.model.schema;if(!xu(a,g)||!xu(c,g))return;const m=a.map(e=>e.is("$text")?e.data:"@").join("").replace(/\u00A0/g," "),f=c.map(e=>e.is("$text")?e.data:"@").join("").replace(/\u00A0/g," ");if(f===m)return;const p=ur(f,m),{firstChangeAt:b,insertions:w,deletions:k}=Au(p);let _=null;t&&(_=this.editing.mapper.toModelRange(t.getFirstRange()));const v=m.substr(b,w),y=this.editor.model.createRange(this.editor.model.createPositionAt(s,b),this.editor.model.createPositionAt(s,b+k));this.editor.execute("input",{text:v,range:y,resultRange:_})}_handleTextMutation(e,t){if("text"!=e.type)return;const i=e.newText.replace(/\u00A0/g," "),n=e.oldText.replace(/\u00A0/g," ");if(n===i)return;const o=ur(n,i),{firstChangeAt:r,insertions:s,deletions:a}=Au(o);let c=null;t&&(c=this.editing.mapper.toModelRange(t.getFirstRange()));const l=this.editing.view.createPositionAt(e.node,r),d=this.editing.mapper.toModelPosition(l),h=this.editor.model.createRange(d,d.getShiftedBy(a)),u=i.substr(r,s);this.editor.execute("input",{text:u,range:h,resultRange:c})}_handleTextNodeInsertion(e){if("children"!=e.type)return;const t=_u(e),i=this.editing.view.createPositionAt(e.node,t.index),n=this.editing.mapper.toModelPosition(i),o=t.values[0].data;this.editor.execute("input",{text:o.replace(/\u00A0/g," "),range:this.editor.model.createRange(n)})}}function xu(e,t){return e.every(e=>t.isInline(e))}function Au(e){let t=null,i=null;for(let n=0;n<e.length;n++){"equal"!=e[n]&&(t=null===t?n:t,i=n)}let n=0,o=0;for(let r=t;r<=i;r++)"insert"!=e[r]&&n++,"delete"!=e[r]&&o++;return{insertions:o,deletions:n,firstChangeAt:t}}class Cu extends Qe{static get pluginName(){return"Input"}init(){const e=this.editor,t=new ku(e,e.config.get("typing.undoStep")||20);e.commands.add("input",t),function(e){let t=null;const i=e.model,n=e.editing.view,o=e.commands.get("input");function r(e){const r=i.document,a=n.document.isComposing,c=t&&t.isEqual(r.selection);t=null,o.isEnabled&&($h(e)||r.selection.isCollapsed||a&&229===e.keyCode||!a&&229===e.keyCode&&c||s())}function s(){const e=o.buffer;e.lock();const t=e.batch;o._batches.add(t),i.enqueueChange(t,()=>{i.deleteContent(i.document.selection)}),e.unlock()}Io.isAndroid?n.document.on("beforeinput",(e,t)=>r(t),{priority:"lowest"}):n.document.on("keydown",(e,t)=>r(t),{priority:"lowest"}),n.document.on("compositionstart",(function(){const e=i.document,t=1!==e.selection.rangeCount||e.selection.getFirstRange().isFlat;if(e.selection.isCollapsed||t)return;s()}),{priority:"lowest"}),n.document.on("compositionend",()=>{t=i.createSelection(i.document.selection)},{priority:"lowest"})}(e),function(e){e.editing.view.document.on("mutations",(t,i,n)=>{new yu(e).handle(i,n)})}(e)}isInput(e){return this.editor.commands.get("input")._batches.has(e)}}class Tu extends Qe{static get requires(){return[Cu,Ih]}static get pluginName(){return"Typing"}}function Eu(e,t){let i=e.start;return{text:Array.from(e.getItems()).reduce((e,n)=>n.is("$text")||n.is("$textProxy")?e+n.data:(i=t.createPositionAfter(n),""),""),range:t.createRange(i,e.end)}}class Su{constructor(e,t){this.model=e,this.testCallback=t,this.hasMatch=!1,this.set("isEnabled",!0),this.on("change:isEnabled",()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))}),this._startListening()}_startListening(){const e=this.model.document;this.listenTo(e.selection,"change:range",(t,{directChange:i})=>{i&&(e.selection.isCollapsed?this._evaluateTextBeforeSelection("selection"):this.hasMatch&&(this.fire("unmatched"),this.hasMatch=!1))}),this.listenTo(e,"change:data",(e,t)=>{"transparent"!=t.type&&this._evaluateTextBeforeSelection("data",{batch:t})})}_evaluateTextBeforeSelection(e,t={}){const i=this.model,n=i.document.selection,o=i.createRange(i.createPositionAt(n.focus.parent,0),n.focus),{text:r,range:s}=Eu(o,i),a=this.testCallback(r);if(!a&&this.hasMatch&&this.fire("unmatched"),this.hasMatch=!!a,a){const i=Object.assign(t,{text:r,range:s});"object"==typeof a&&Object.assign(i,a),this.fire("matched:"+e,i)}}}Ke(Su,Ue);class Iu extends Qe{static get pluginName(){return"TwoStepCaretMovement"}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){const e=this.editor,t=e.model,i=e.editing.view,n=e.locale,o=t.document.selection;this.listenTo(i.document,"arrowKey",(e,t)=>{if(!o.isCollapsed)return;if(t.shiftKey||t.altKey||t.ctrlKey)return;const i=t.keyCode==No.arrowright,r=t.keyCode==No.arrowleft;if(!i&&!r)return;const s=n.contentLanguageDirection;let a=!1;a="ltr"===s&&i||"rtl"===s&&r?this._handleForwardMovement(t):this._handleBackwardMovement(t),!0===a&&e.stop()},{context:"$text",priority:"highest"}),this._isNextGravityRestorationSkipped=!1,this.listenTo(o,"change:range",(e,t)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!t.directChange&&Ru(o.getFirstPosition(),this.attributes)||this._restoreGravity())})}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){const t=this.attributes,i=this.editor.model.document.selection,n=i.getFirstPosition();return!this._isGravityOverridden&&((!n.isAtStart||!Pu(i,t))&&(Ru(n,t)?(Nu(e),this._overrideGravity(),!0):void 0))}_handleBackwardMovement(e){const t=this.attributes,i=this.editor.model,n=i.document.selection,o=n.getFirstPosition();return this._isGravityOverridden?(Nu(e),this._restoreGravity(),Mu(i,t,o),!0):o.isAtStart?!!Pu(n,t)&&(Nu(e),Mu(i,t,o),!0):function(e,t){return Ru(e.getShiftedBy(-1),t)}(o,t)?o.isAtEnd&&!Pu(n,t)&&Ru(o,t)?(Nu(e),Mu(i,t,o),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1):void 0}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change(e=>e.overrideSelectionGravity())}_restoreGravity(){this.editor.model.change(e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}}function Pu(e,t){for(const i of t)if(e.hasAttribute(i))return!0;return!1}function Mu(e,t,i){const n=i.nodeBefore;e.change(e=>{n?e.setSelectionAttribute(n.getAttributes()):e.removeSelectionAttribute(t)})}function Nu(e){e.preventDefault()}function Ru(e,t){const{nodeBefore:i,nodeAfter:n}=e;for(const e of t){const t=i?i.getAttribute(e):void 0;if((n?n.getAttribute(e):void 0)!==t)return!0}return!1}var Ou=/[\\^$.*+?()[\]{}|]/g,Du=RegExp(Ou.source);var zu=function(e){return(e=Pn(e))&&Du.test(e)?e.replace(Ou,"\\$&"):e};const Lu={copyright:{from:"(c)",to:"©"},registeredTrademark:{from:"(r)",to:"®"},trademark:{from:"(tm)",to:"™"},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,"½",null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,"⅓",null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,"⅔",null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,"¼",null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,"¾",null]},lessThanOrEqual:{from:"<=",to:"≤"},greaterThanOrEqual:{from:">=",to:"≥"},notEqual:{from:"!=",to:"≠"},arrowLeft:{from:"<-",to:"←"},arrowRight:{from:"->",to:"→"},horizontalEllipsis:{from:"...",to:"…"},enDash:{from:/(^| )(--)( )$/,to:[null,"–",null]},emDash:{from:/(^| )(---)( )$/,to:[null,"—",null]},quotesPrimary:{from:Uu('"'),to:[null,"“",null,"”"]},quotesSecondary:{from:Uu("'"),to:[null,"‘",null,"’"]},quotesPrimaryEnGb:{from:Uu("'"),to:[null,"‘",null,"’"]},quotesSecondaryEnGb:{from:Uu('"'),to:[null,"“",null,"”"]},quotesPrimaryPl:{from:Uu('"'),to:[null,"„",null,"”"]},quotesSecondaryPl:{from:Uu("'"),to:[null,"‚",null,"’"]}},Vu={symbols:["copyright","registeredTrademark","trademark"],mathematical:["oneHalf","oneThird","twoThirds","oneForth","threeQuarters","lessThanOrEqual","greaterThanOrEqual","notEqual","arrowLeft","arrowRight"],typography:["horizontalEllipsis","enDash","emDash"],quotes:["quotesPrimary","quotesSecondary"]},ju=["symbols","mathematical","typography","quotes"];function Bu(e){return"string"==typeof e?new RegExp(`(${zu(e)})$`):e}function Fu(e){return"string"==typeof e?()=>[e]:e instanceof Array?()=>e:e}function Hu(e){return(e.textNode?e.textNode:e.nodeAfter).getAttributes()}function Uu(e){return new RegExp(`(^|\\s)(${e})([^${e}]*)(${e})$`)}function Wu(e,t,i,n){return n.createRange(qu(e,t,i,!0,n),qu(e,t,i,!1,n))}function qu(e,t,i,n,o){let r=e.textNode||(n?e.nodeBefore:e.nodeAfter),s=null;for(;r&&r.getAttribute(t)==i;)s=r,r=n?r.previousSibling:r.nextSibling;return s?o.createPositionAt(s,n?"before":"after"):e}class $u extends Ze{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this.listenTo(e.data,"set",(e,t)=>{t[1]={...t[1]};const i=t[1];i.batchType||(i.batchType="transparent")},{priority:"high"}),this.listenTo(e.data,"set",(e,t)=>{"transparent"===t[1].batchType&&this.clearStack()})}refresh(){this.isEnabled=this._stack.length>0}addBatch(e){const t=this.editor.model.document.selection,i={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:i}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(e,t,i){const n=this.editor.model,o=n.document,r=[],s=e.map(e=>e.getTransformedByOperations(i)),a=s.flat();for(const e of s){const t=e.filter(e=>e.root!=o.graveyard).filter(e=>!Gu(e,a));t.length&&(Yu(t),r.push(t[0]))}r.length&&n.change(e=>{e.setSelection(r,{backward:t})})}_undo(e,t){const i=this.editor.model,n=i.document;this._createdBatches.add(t);const o=e.operations.slice().filter(e=>e.isDocumentOperation);o.reverse();for(const e of o){const o=e.baseVersion+1,r=Array.from(n.history.getOperations(o)),s=oh([e.getReversed()],r,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(const o of s)t.addOperation(o),i.applyOperation(o),n.history.setOperationAsUndone(e,o)}}}function Yu(e){e.sort((e,t)=>e.start.isBefore(t.start)?-1:1);for(let t=1;t<e.length;t++){const i=e[t-1].getJoined(e[t],!0);i&&(t--,e.splice(t,2,i))}}function Gu(e,t){return t.some(t=>t!==e&&t.containsRange(e,!0))}class Ku extends $u{execute(e=null){const t=e?this._stack.findIndex(t=>t.batch==e):this._stack.length-1,i=this._stack.splice(t,1)[0],n=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(n,()=>{this._undo(i.batch,n);const e=this.editor.model.document.history.getOperations(i.batch.baseVersion);this._restoreSelection(i.selection.ranges,i.selection.isBackward,e),this.fire("revert",i.batch,n)}),this.refresh()}}class Qu extends $u{execute(){const e=this._stack.pop(),t=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(t,()=>{const i=e.batch.operations[e.batch.operations.length-1].baseVersion+1,n=this.editor.model.document.history.getOperations(i);this._restoreSelection(e.selection.ranges,e.selection.isBackward,n),this._undo(e.batch,t)}),this.refresh()}}class Ju extends Qe{static get pluginName(){return"UndoEditing"}constructor(e){super(e),this._batchRegistry=new WeakSet}init(){const e=this.editor;this._undoCommand=new Ku(e),this._redoCommand=new Qu(e),e.commands.add("undo",this._undoCommand),e.commands.add("redo",this._redoCommand),this.listenTo(e.model,"applyOperation",(e,t)=>{const i=t[0];if(!i.isDocumentOperation)return;const n=i.batch,o=this._redoCommand._createdBatches.has(n),r=this._undoCommand._createdBatches.has(n);this._batchRegistry.has(n)||"transparent"==n.type&&!o&&!r||(o?this._undoCommand.addBatch(n):r||(this._undoCommand.addBatch(n),this._redoCommand.clearStack()),this._batchRegistry.add(n))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(e,t,i)=>{this._redoCommand.addBatch(i)}),e.keystrokes.set("CTRL+Z","undo"),e.keystrokes.set("CTRL+Y","redo"),e.keystrokes.set("CTRL+SHIFT+Z","redo")}}var Zu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>',Xu='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>';class eg extends Qe{static get pluginName(){return"UndoUI"}init(){const e=this.editor,t=e.locale,i=e.t,n="ltr"==t.uiLanguageDirection?Zu:Xu,o="ltr"==t.uiLanguageDirection?Xu:Zu;this._addButton("undo",i("Undo"),"CTRL+Z",n),this._addButton("redo",i("Redo"),"CTRL+Y",o)}_addButton(e,t,i,n){const o=this.editor;o.ui.componentFactory.add(e,r=>{const s=o.commands.get(e),a=new td(r);return a.set({label:t,icon:n,keystroke:i,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>{o.execute(e),o.editing.view.focus()}),a})}}class tg extends Qe{static get requires(){return[Ju,eg]}static get pluginName(){return"Undo"}}class ig{constructor(){const e=new window.FileReader;this._reader=e,this._data=void 0,this.set("loaded",0),e.onprogress=e=>{this.loaded=e.loaded}}get error(){return this._reader.error}get data(){return this._data}read(e){const t=this._reader;return this.total=e.size,new Promise((i,n)=>{t.onload=()=>{const e=t.result;this._data=e,i(e)},t.onerror=()=>{n("error")},t.onabort=()=>{n("aborted")},this._reader.readAsDataURL(e)})}abort(){this._reader.abort()}}Ke(ig,Ue);class ng extends Qe{static get pluginName(){return"FileRepository"}static get requires(){return[Al]}init(){this.loaders=new Zi,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._loadersMap=new Map,this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(e,t)=>t?e/t*100:0)}getLoader(e){return this._loadersMap.get(e)||null}createLoader(e){if(!this.createUploadAdapter)return Object(c.b)("filerepository-no-upload-adapter"),null;const t=new og(Promise.resolve(e),this.createUploadAdapter);return this.loaders.add(t),this._loadersMap.set(e,t),e instanceof Promise&&t.file.then(e=>{this._loadersMap.set(e,t)}).catch(()=>{}),t.on("change:uploaded",()=>{let e=0;for(const t of this.loaders)e+=t.uploaded;this.uploaded=e}),t.on("change:uploadTotal",()=>{let e=0;for(const t of this.loaders)t.uploadTotal&&(e+=t.uploadTotal);this.uploadTotal=e}),t}destroyLoader(e){const t=e instanceof og?e:this.getLoader(e);t._destroy(),this.loaders.remove(t),this._loadersMap.forEach((e,i)=>{e===t&&this._loadersMap.delete(i)})}_updatePendingAction(){const e=this.editor.plugins.get(Al);if(this.loaders.length){if(!this._pendingAction){const t=this.editor.t,i=e=>`${t("Upload in progress")} ${parseInt(e)}%.`;this._pendingAction=e.add(i(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",i)}}else e.remove(this._pendingAction),this._pendingAction=null}}Ke(ng,Ue);class og{constructor(e,t){this.id=s(),this._filePromiseWrapper=this._createFilePromiseWrapper(e),this._adapter=t(this),this._reader=new ig,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(e,t)=>t?e/t*100:0),this.set("uploadResponse",null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then(e=>this._filePromiseWrapper?e:null):Promise.resolve(null)}get data(){return this._reader.data}read(){if("idle"!=this.status)throw new c.a("filerepository-read-wrong-status",this);return this.status="reading",this.file.then(e=>this._reader.read(e)).then(e=>{if("reading"!==this.status)throw this.status;return this.status="idle",e}).catch(e=>{if("aborted"===e)throw this.status="aborted","aborted";throw this.status="error",this._reader.error?this._reader.error:e})}upload(){if("idle"!=this.status)throw new c.a("filerepository-upload-wrong-status",this);return this.status="uploading",this.file.then(()=>this._adapter.upload()).then(e=>(this.uploadResponse=e,this.status="idle",e)).catch(e=>{if("aborted"===this.status)throw"aborted";throw this.status="error",e})}abort(){const e=this.status;this.status="aborted",this._filePromiseWrapper.isFulfilled?"reading"==e?this._reader.abort():"uploading"==e&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch(()=>{}),this._filePromiseWrapper.rejecter("aborted")),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(e){const t={};return t.promise=new Promise((i,n)=>{t.rejecter=n,t.isFulfilled=!1,e.then(e=>{t.isFulfilled=!0,i(e)}).catch(e=>{t.isFulfilled=!0,n(e)})}),t}}Ke(og,Ue);class rg extends Nl{constructor(e){super(e),this.buttonView=new td(e),this._fileInputView=new sg(e),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class sg extends Nl{constructor(e){super(e),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:t.to("acceptedType"),multiple:t.to("allowMultipleFiles")},on:{change:t.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}function ag(){let e=function(e){e=e.toLowerCase();const t=document.cookie.split(";");for(const i of t){const t=i.split("=");if(decodeURIComponent(t[0].trim().toLowerCase())===e)return decodeURIComponent(t[1])}return null}("ckCsrfToken");var t,i;return e&&40==e.length||(e=function(e){let t="";const i=new Uint8Array(e);window.crypto.getRandomValues(i);for(let e=0;e<i.length;e++){const n="abcdefghijklmnopqrstuvwxyz0123456789".charAt(i[e]%"abcdefghijklmnopqrstuvwxyz0123456789".length);t+=Math.random()>.5?n.toUpperCase():n}return t}(40),t="ckCsrfToken",i=e,document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(i)+";path=/"),e}class cg{constructor(e,t,i){this.loader=e,this.url=t,this.t=i}upload(){return this.loader.file.then(e=>new Promise((t,i)=>{this._initRequest(),this._initListeners(t,i,e),this._sendRequest(e)}))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const e=this.xhr=new XMLHttpRequest;e.open("POST",this.url,!0),e.responseType="json"}_initListeners(e,t,i){const n=this.xhr,o=this.loader,r=(0,this.t)("Cannot upload file:")+` ${i.name}.`;n.addEventListener("error",()=>t(r)),n.addEventListener("abort",()=>t()),n.addEventListener("load",()=>{const i=n.response;if(!i||!i.uploaded)return t(i&&i.error&&i.error.message?i.error.message:r);e({default:i.url})}),n.upload&&n.upload.addEventListener("progress",e=>{e.lengthComputable&&(o.uploadTotal=e.total,o.uploaded=e.loaded)})}_sendRequest(e){const t=new FormData;t.append("upload",e),t.append("ckCsrfToken",ag()),this.xhr.send(t)}}function lg(e,t,i,n){let o,r=null;"function"==typeof n?o=n:(r=e.commands.get(n),o=()=>{e.execute(n)}),e.model.document.on("change:data",(s,a)=>{if(r&&!r.isEnabled||!t.isEnabled)return;const c=Ms(e.model.document.selection.getRanges());if(!c.isCollapsed)return;if("transparent"==a.type)return;const l=Array.from(e.model.document.differ.getChanges()),d=l[0];if(1!=l.length||"insert"!==d.type||"$text"!=d.name||1!=d.length)return;const h=d.position.parent;if(h.is("element","codeBlock"))return;if(h.is("element","listItem")&&"function"!=typeof n&&!["numberedList","bulletedList","todoList"].includes(n))return;if(r&&!0===r.value)return;const u=h.getChild(0),g=e.model.createRangeOn(u);if(!g.containsRange(c)&&!c.end.isEqual(g.end))return;const m=i.exec(u.data.substr(0,c.end.offset));m&&e.model.enqueueChange(t=>{const i=t.createPositionAt(h,0),n=t.createPositionAt(h,m[0].length),r=new pa(i,n);if(!1!==o({match:m})){t.remove(r);const i=e.model.document.selection.getFirstRange(),n=t.createRangeIn(h);!h.isEmpty||n.isEqual(i)||n.containsRange(i,!0)||t.remove(h)}r.detach(),e.model.enqueueChange(()=>{e.plugins.get("Delete").requestUndoOnBackspace()})})})}function dg(e,t,i,n){let o,r;i instanceof RegExp?o=i:r=i,r=r||(e=>{let t;const i=[],n=[];for(;null!==(t=o.exec(e))&&!(t&&t.length<4);){let{index:e,1:o,2:r,3:s}=t;const a=o+r+s;e+=t[0].length-a.length;const c=[e,e+o.length],l=[e+o.length+r.length,e+o.length+r.length+s.length];i.push(c),i.push(l),n.push([e+o.length,e+o.length+r.length])}return{remove:i,format:n}}),e.model.document.on("change:data",(i,o)=>{if("transparent"==o.type||!t.isEnabled)return;const s=e.model,a=s.document.selection;if(!a.isCollapsed)return;const c=Array.from(s.document.differ.getChanges()),l=c[0];if(1!=c.length||"insert"!==l.type||"$text"!=l.name||1!=l.length)return;const d=a.focus,h=d.parent,{text:u,range:g}=function(e,t){let i=e.start;return{text:Array.from(e.getItems()).reduce((e,n)=>!n.is("$text")&&!n.is("$textProxy")||n.getAttribute("code")?(i=t.createPositionAfter(n),""):e+n.data,""),range:t.createRange(i,e.end)}}(s.createRange(s.createPositionAt(h,0),d),s),m=r(u),f=hg(g.start,m.format,s),p=hg(g.start,m.remove,s);f.length&&p.length&&s.enqueueChange(t=>{if(!1!==n(t,f)){for(const e of p.reverse())t.remove(e);s.enqueueChange(()=>{e.plugins.get("Delete").requestUndoOnBackspace()})}})})}function hg(e,t,i){return t.filter(e=>void 0!==e[0]&&void 0!==e[1]).map(t=>i.createRange(e.getShiftedBy(t[0]),e.getShiftedBy(t[1])))}function ug(e,t){return(i,n)=>{if(!e.commands.get(t).isEnabled)return!1;const o=e.model.schema.getValidRanges(n,t);for(const e of o)i.setAttribute(t,!0,e);i.removeSelectionAttribute(t)}}class gg extends Ze{constructor(e,t){super(e),this.attributeKey=t}refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){const t=this.editor.model,i=t.document.selection,n=void 0===e.forceValue?!this.value:e.forceValue;t.change(e=>{if(i.isCollapsed)n?e.setSelectionAttribute(this.attributeKey,!0):e.removeSelectionAttribute(this.attributeKey);else{const o=t.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const t of o)n?e.setAttribute(this.attributeKey,n,t):e.removeAttribute(this.attributeKey,t)}})}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,i=e.document.selection;if(i.isCollapsed)return i.hasAttribute(this.attributeKey);for(const e of i.getRanges())for(const i of e.getItems())if(t.checkAttribute(i,this.attributeKey))return i.hasAttribute(this.attributeKey);return!1}}class mg extends Qe{static get pluginName(){return"BoldEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"bold"}),e.model.schema.setAttributeProperties("bold",{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:"bold",view:"strong",upcastAlso:["b",e=>{const t=e.getStyle("font-weight");return t?"bold"==t||Number(t)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),e.commands.add("bold",new gg(e,"bold")),e.keystrokes.set("CTRL+B","bold")}}class fg extends Qe{static get pluginName(){return"BoldUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("bold",i=>{const n=e.commands.get("bold"),o=new td(i);return o.set({label:t("Bold"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(o,"execute",()=>{e.execute("bold"),e.editing.view.focus()}),o})}}class pg extends Qe{static get pluginName(){return"ItalicEditing"}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"italic"}),e.model.schema.setAttributeProperties("italic",{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:"italic",view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),e.commands.add("italic",new gg(e,"italic")),e.keystrokes.set("CTRL+I","italic")}}class bg extends Qe{static get pluginName(){return"ItalicUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("italic",i=>{const n=e.commands.get("italic"),o=new td(i);return o.set({label:t("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(o,"execute",()=>{e.execute("italic"),e.editing.view.focus()}),o})}}class wg extends Ze{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,i=t.schema,n=t.document.selection,o=Array.from(n.getSelectedBlocks()),r=void 0===e.forceValue?!this.value:e.forceValue;t.change(e=>{if(r){const t=o.filter(e=>kg(e)||vg(i,e));this._applyQuote(e,t)}else this._removeQuote(e,o.filter(kg))})}_getValue(){const e=Ms(this.editor.model.document.selection.getSelectedBlocks());return!(!e||!kg(e))}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,i=Ms(e.getSelectedBlocks());return!!i&&vg(t,i)}_removeQuote(e,t){_g(e,t).reverse().forEach(t=>{if(t.start.isAtStart&&t.end.isAtEnd)return void e.unwrap(t.start.parent);if(t.start.isAtStart){const i=e.createPositionBefore(t.start.parent);return void e.move(t,i)}t.end.isAtEnd||e.split(t.end);const i=e.createPositionAfter(t.end.parent);e.move(t,i)})}_applyQuote(e,t){const i=[];_g(e,t).reverse().forEach(t=>{let n=kg(t.start);n||(n=e.createElement("blockQuote"),e.wrap(t,n)),i.push(n)}),i.reverse().reduce((t,i)=>t.nextSibling==i?(e.merge(e.createPositionAfter(t)),t):i)}}function kg(e){return"blockQuote"==e.parent.name?e.parent:null}function _g(e,t){let i,n=0;const o=[];for(;n<t.length;){const r=t[n],s=t[n+1];i||(i=e.createPositionBefore(r)),s&&r.nextSibling==s||(o.push(e.createRange(i,e.createPositionAfter(r))),i=null),n++}return o}function vg(e,t){const i=e.checkChild(t.parent,"blockQuote"),n=e.checkChild(["$root","blockQuote"],t);return i&&n}class yg extends Qe{static get pluginName(){return"BlockQuoteEditing"}static get requires(){return[Ch,Ih]}init(){const e=this.editor,t=e.model.schema;e.commands.add("blockQuote",new wg(e)),t.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.conversion.elementToElement({model:"blockQuote",view:"blockquote"}),e.model.document.registerPostFixer(i=>{const n=e.model.document.differ.getChanges();for(const e of n)if("insert"==e.type){const n=e.position.nodeAfter;if(!n)continue;if(n.is("element","blockQuote")&&n.isEmpty)return i.remove(n),!0;if(n.is("element","blockQuote")&&!t.checkChild(e.position,n))return i.unwrap(n),!0;if(n.is("element")){const e=i.createRangeIn(n);for(const n of e.getItems())if(n.is("element","blockQuote")&&!t.checkChild(i.createPositionBefore(n),n))return i.unwrap(n),!0}}else if("remove"==e.type){const t=e.position.parent;if(t.is("element","blockQuote")&&t.isEmpty)return i.remove(t),!0}return!1});const i=this.editor.editing.view.document,n=e.model.document.selection,o=e.commands.get("blockQuote");this.listenTo(i,"enter",(t,i)=>{if(!n.isCollapsed||!o.value)return;n.getLastPosition().parent.isEmpty&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),i.preventDefault(),t.stop())},{context:"blockquote"}),this.listenTo(i,"delete",(t,i)=>{if("backward"!=i.direction||!n.isCollapsed||!o.value)return;const r=n.getLastPosition().parent;r.isEmpty&&!r.previousSibling&&(e.execute("blockQuote"),e.editing.view.scrollToTheSelection(),i.preventDefault(),t.stop())},{context:"blockquote"})}}i(71);class xg extends Qe{static get pluginName(){return"BlockQuoteUI"}init(){const e=this.editor,t=e.t;e.ui.componentFactory.add("blockQuote",i=>{const n=e.commands.get("blockQuote"),o=new td(i);return o.set({label:t("Block quote"),icon:El.quote,tooltip:!0,isToggleable:!0}),o.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(o,"execute",()=>{e.execute("blockQuote"),e.editing.view.focus()}),o})}}class Ag extends Qe{static get pluginName(){return"CKFinderUI"}init(){const e=this.editor,t=e.ui.componentFactory,i=e.t;t.add("ckfinder",t=>{const n=e.commands.get("ckfinder"),o=new td(t);return o.set({label:i("Insert image or file"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>',tooltip:!0}),o.bind("isEnabled").to(n),o.on("execute",()=>{e.execute("ckfinder"),e.editing.view.focus()}),o})}}class Cg extends Ze{constructor(e){super(e),this.stopListening(this.editor.model.document,"change"),this.listenTo(this.editor.model.document,"change",()=>this.refresh(),{priority:"low"})}refresh(){const e=this.editor.commands.get("insertImage"),t=this.editor.commands.get("link");this.isEnabled=e.isEnabled||t.isEnabled}execute(){const e=this.editor,t=this.editor.config.get("ckfinder.openerMethod")||"modal";if("popup"!=t&&"modal"!=t)throw new c.a("ckfinder-unknown-openermethod",e);const i=this.editor.config.get("ckfinder.options")||{};i.chooseFiles=!0;const n=i.onInit;i.language||(i.language=e.locale.uiLanguage),i.onInit=t=>{n&&n(t),t.on("files:choose",i=>{const n=i.data.files.toArray(),o=n.filter(e=>!e.isImage()),r=n.filter(e=>e.isImage());for(const t of o)e.execute("link",t.getUrl());const s=[];for(const e of r){const i=e.getUrl();s.push(i||t.request("file:getProxyUrl",{file:e}))}s.length&&Tg(e,s)}),t.on("file:choose:resizedImage",t=>{const i=t.data.resizedUrl;if(i)Tg(e,[i]);else{const t=e.plugins.get("Notification"),i=e.locale.t;t.showWarning(i("Could not obtain resized image URL."),{title:i("Selecting resized image failed"),namespace:"ckfinder"})}})},window.CKFinder[t](i)}}function Tg(e,t){if(e.commands.get("insertImage").isEnabled)e.execute("insertImage",{source:t});else{const t=e.plugins.get("Notification"),i=e.locale.t;t.showWarning(i("Could not insert image at the current position."),{title:i("Inserting image failed"),namespace:"ckfinder"})}}class Eg extends Qe{static get pluginName(){return"CKFinderEditing"}static get requires(){return[Od,"LinkEditing"]}init(){const e=this.editor;if(!e.plugins.has("ImageBlockEditing")&&!e.plugins.has("ImageInlineEditing"))throw new c.a("ckfinder-missing-image-plugin",e);e.commands.add("ckfinder",new Cg(e))}}class Sg extends Qe{static get pluginName(){return"CloudServicesUploadAdapter"}static get requires(){return["CloudServices",ng]}init(){const e=this.editor,t=e.plugins.get("CloudServices"),i=t.token,n=t.uploadUrl;i&&(this._uploadGateway=e.plugins.get("CloudServicesCore").createUploadGateway(i,n),e.plugins.get(ng).createUploadAdapter=e=>new Ig(this._uploadGateway,e))}}class Ig{constructor(e,t){this.uploadGateway=e,this.loader=t}upload(){return this.loader.file.then(e=>(this.fileUploader=this.uploadGateway.upload(e),this.fileUploader.on("progress",(e,t)=>{this.loader.uploadTotal=t.total,this.loader.uploaded=t.uploaded}),this.fileUploader.send()))}abort(){this.fileUploader.abort()}}class Pg extends Ze{refresh(){const e=this.editor.model,t=Ms(e.document.selection.getSelectedBlocks());this.value=!!t&&t.is("element","paragraph"),this.isEnabled=!!t&&Mg(t,e.schema)}execute(e={}){const t=this.editor.model,i=t.document;t.change(n=>{const o=(e.selection||i.selection).getSelectedBlocks();for(const e of o)!e.is("element","paragraph")&&Mg(e,t.schema)&&n.rename(e,"paragraph")})}}function Mg(e,t){return t.checkChild(e.parent,"paragraph")&&!t.isObject(e)}class Ng extends Ze{execute(e){const t=this.editor.model;let i=e.position;t.change(e=>{const n=e.createElement("paragraph");if(!t.schema.checkChild(i.parent,n)){const o=t.schema.findAllowedParent(i,n);if(!o)return;i=e.split(i,o).position}t.insertContent(n,i),e.setSelection(n,"in")})}}class Rg extends Qe{static get pluginName(){return"Paragraph"}init(){const e=this.editor,t=e.model;e.commands.add("paragraph",new Pg(e)),e.commands.add("insertParagraph",new Ng(e)),t.schema.register("paragraph",{inheritAllFrom:"$block"}),e.conversion.elementToElement({model:"paragraph",view:"p"}),e.conversion.for("upcast").elementToElement({model:(e,{writer:t})=>Rg.paragraphLikeElements.has(e.name)?e.isEmpty?null:t.createElement("paragraph"):null,view:/.+/,converterPriority:"low"})}}Rg.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td","th"]);class Og extends Ze{constructor(e,t){super(e),this.modelElements=t}refresh(){const e=Ms(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some(t=>Dg(e,t,this.editor.model.schema))}execute(e){const t=this.editor.model,i=t.document,n=e.value;t.change(e=>{const o=Array.from(i.selection.getSelectedBlocks()).filter(e=>Dg(e,n,t.schema));for(const t of o)t.is("element",n)||e.rename(t,n)})}}function Dg(e,t,i){return i.checkChild(e.parent,t)&&!i.isObject(e)}class zg extends Qe{static get pluginName(){return"HeadingEditing"}constructor(e){super(e),e.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[Rg]}init(){const e=this.editor,t=e.config.get("heading.options"),i=[];for(const n of t)"paragraph"!==n.model&&(e.model.schema.register(n.model,{inheritAllFrom:"$block"}),e.conversion.elementToElement(n),i.push(n.model));this._addDefaultH1Conversion(e),e.commands.add("heading",new Og(e,i))}afterInit(){const e=this.editor,t=e.commands.get("enter"),i=e.config.get("heading.options");t&&this.listenTo(t,"afterExecute",(t,n)=>{const o=e.model.document.selection.getFirstPosition().parent;i.some(e=>o.is("element",e.model))&&!o.is("element","paragraph")&&0===o.childCount&&n.writer.rename(o,"paragraph")})}_addDefaultH1Conversion(e){e.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:a.get("low")+1})}}i(13);class Lg extends Qe{static get pluginName(){return"HeadingUI"}init(){const e=this.editor,t=e.t,i=function(e){const t=e.t,i={Paragraph:t("Paragraph"),"Heading 1":t("Heading 1"),"Heading 2":t("Heading 2"),"Heading 3":t("Heading 3"),"Heading 4":t("Heading 4"),"Heading 5":t("Heading 5"),"Heading 6":t("Heading 6")};return e.config.get("heading.options").map(e=>{const t=i[e.title];return t&&t!=e.title&&(e.title=t),e})}(e),n=t("Choose heading"),o=t("Heading");e.ui.componentFactory.add("heading",t=>{const r={},s=new Zi,a=e.commands.get("heading"),c=e.commands.get("paragraph"),l=[a];for(const e of i){const t={type:"button",model:new Dd({label:e.title,class:e.class,withText:!0})};"paragraph"===e.model?(t.model.bind("isOn").to(c,"value"),t.model.set("commandName","paragraph"),l.push(c)):(t.model.bind("isOn").to(a,"value",t=>t===e.model),t.model.set({commandName:"heading",commandValue:e.model})),s.add(t),r[e.model]=e.title}const d=xd(t);return Cd(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:o}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...e)=>e.some(e=>e)),d.buttonView.bind("label").to(a,"value",c,"value",(e,t)=>{const i=e||t&&"paragraph";return r[i]?r[i]:n}),this.listenTo(d,"execute",t=>{e.execute(t.source.commandName,t.source.commandValue?{value:t.source.commandValue}:void 0),e.editing.view.focus()}),d})}}class Vg extends Qe{static get requires(){return[Ud]}static get pluginName(){return"WidgetToolbarRepository"}init(){const e=this.editor;if(e.plugins.has("BalloonToolbar")){const t=e.plugins.get("BalloonToolbar");this.listenTo(t,"show",t=>{(function(e){const t=e.getSelectedElement();return!(!t||!Oh(t))})(e.editing.view.document.selection)&&t.stop()},{priority:"high"})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get("ContextualBalloon"),this.on("change:isEnabled",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui,"update",()=>{this._updateToolbarsVisibility()}),this.listenTo(e.ui.focusTracker,"change:isFocused",()=>{this._updateToolbarsVisibility()},{priority:"low"})}destroy(){super.destroy();for(const e of this._toolbarDefinitions.values())e.view.destroy()}register(e,{ariaLabel:t,items:i,getRelatedElement:n,balloonClassName:o="ck-toolbar-container"}){if(!i.length)return void Object(c.b)("widget-toolbar-no-items",{toolbarId:e});const r=this.editor,s=r.t,a=new pd(r.locale);if(a.ariaLabel=t||s("Widget toolbar"),this._toolbarDefinitions.has(e))throw new c.a("widget-toolbar-duplicated",this,{toolbarId:e});a.fillFromConfig(i,r.ui.componentFactory),this._toolbarDefinitions.set(e,{view:a,getRelatedElement:n,balloonClassName:o})}_updateToolbarsVisibility(){let e=0,t=null,i=null;for(const n of this._toolbarDefinitions.values()){const o=n.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&o)if(this.editor.ui.focusTracker.isFocused){const r=o.getAncestors().length;r>e&&(e=r,t=o,i=n)}else this._isToolbarVisible(n)&&this._hideToolbar(n);else this._isToolbarInBalloon(n)&&this._hideToolbar(n)}i&&this._showToolbar(i,t)}_hideToolbar(e){this._balloon.remove(e.view),this.stopListening(this._balloon,"change:visibleView")}_showToolbar(e,t){this._isToolbarVisible(e)?jg(this.editor,t):this._isToolbarInBalloon(e)||(this._balloon.add({view:e.view,position:Bg(this.editor,t),balloonClassName:e.balloonClassName}),this.listenTo(this._balloon,"change:visibleView",()=>{for(const e of this._toolbarDefinitions.values())if(this._isToolbarVisible(e)){const t=e.getRelatedElement(this.editor.editing.view.document.selection);jg(this.editor,t)}}))}_isToolbarVisible(e){return this._balloon.visibleView===e.view}_isToolbarInBalloon(e){return this._balloon.hasView(e.view)}}function jg(e,t){const i=e.plugins.get("ContextualBalloon"),n=Bg(e,t);i.updatePosition(n)}function Bg(e,t){const i=e.editing.view,n=Vd.defaultPositions;return{target:i.domConverter.mapViewToDom(t),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,n.viewportStickyNorth]}}class Fg{constructor(e){this.set("activeHandlePosition",null),this.set("proposedWidthPercents",null),this.set("proposedWidth",null),this.set("proposedHeight",null),this.set("proposedHandleHostWidth",null),this.set("proposedHandleHostHeight",null),this._options=e,this._referenceCoordinates=null}begin(e,t,i){const n=new Cs(t);this.activeHandlePosition=function(e){const t=["top-left","top-right","bottom-right","bottom-left"];for(const i of t)if(e.classList.contains("ck-widget__resizer__handle-"+i))return i}(e),this._referenceCoordinates=function(e,t){const i=new Cs(e),n=t.split("-"),o={x:"right"==n[1]?i.right:i.left,y:"bottom"==n[0]?i.bottom:i.top};return o.x+=e.ownerDocument.defaultView.scrollX,o.y+=e.ownerDocument.defaultView.scrollY,o}(t,function(e){const t=e.split("-"),i={top:"bottom",bottom:"top",left:"right",right:"left"};return`${i[t[0]]}-${i[t[1]]}`}(this.activeHandlePosition)),this.originalWidth=n.width,this.originalHeight=n.height,this.aspectRatio=n.width/n.height;const o=i.style.width;o&&o.match(/^\d+(\.\d*)?%$/)?this.originalWidthPercents=parseFloat(o):this.originalWidthPercents=function(e,t){const i=e.parentElement,n=parseFloat(i.ownerDocument.defaultView.getComputedStyle(i).width);return t.width/n*100}(i,n)}update(e){this.proposedWidth=e.width,this.proposedHeight=e.height,this.proposedWidthPercents=e.widthPercents,this.proposedHandleHostWidth=e.handleHostWidth,this.proposedHandleHostHeight=e.handleHostHeight}}Ke(Fg,Ue);class Hg extends Nl{constructor(){super();const e=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-size-view",e.to("_viewPosition",e=>e?"ck-orientation-"+e:"")],style:{display:e.if("_isVisible","none",e=>!e)}},children:[{text:e.to("_label")}]})}_bindToState(e,t){this.bind("_isVisible").to(t,"proposedWidth",t,"proposedHeight",(e,t)=>null!==e&&null!==t),this.bind("_label").to(t,"proposedHandleHostWidth",t,"proposedHandleHostHeight",t,"proposedWidthPercents",(t,i,n)=>"px"===e.unit?`${t}×${i}`:n+"%"),this.bind("_viewPosition").to(t,"activeHandlePosition",t,"proposedHandleHostWidth",t,"proposedHandleHostHeight",(e,t,i)=>t<50||i<50?"above-center":e)}_dismiss(){this.unbind(),this._isVisible=!1}}class Ug{constructor(e){this._options=e,this._viewResizerWrapper=null,this.set("isEnabled",!0),this.decorate("begin"),this.decorate("cancel"),this.decorate("commit"),this.decorate("updateSize"),this.on("commit",e=>{this.state.proposedWidth||this.state.proposedWidthPercents||(this._cleanup(),e.stop())},{priority:"high"}),this.on("change:isEnabled",()=>{this.isEnabled&&this.redraw()})}attach(){const e=this,t=this._options.viewElement;this._options.editor.editing.view.change(i=>{const n=i.createUIElement("div",{class:"ck ck-reset_all ck-widget__resizer"},(function(t){const i=this.toDomElement(t);return e._appendHandles(i),e._appendSizeUI(i),e.on("change:isEnabled",(e,t,n)=>{i.style.display=n?"":"none"}),i.style.display=e.isEnabled?"":"none",i}));i.insert(i.createPositionAt(t,"end"),n),i.addClass("ck-widget_with-resizer",t),this._viewResizerWrapper=n})}begin(e){this.state=new Fg(this._options),this._sizeView._bindToState(this._options,this.state),this._initialViewWidth=this._options.viewElement.getStyle("width"),this.state.begin(e,this._getHandleHost(),this._getResizeHost())}updateSize(e){const t=this._proposeNewSize(e);this._options.editor.editing.view.change(e=>{const i=this._options.unit||"%",n=("%"===i?t.widthPercents:t.width)+i;e.setStyle("width",n,this._options.viewElement)});const i=this._getHandleHost(),n=new Cs(i);t.handleHostWidth=Math.round(n.width),t.handleHostHeight=Math.round(n.height);const o=new Cs(i);t.width=Math.round(o.width),t.height=Math.round(o.height),this.redraw(n),this.state.update(t)}commit(){const e=this._options.unit||"%",t=("%"===e?this.state.proposedWidthPercents:this.state.proposedWidth)+e;this._options.editor.editing.view.change(()=>{this._cleanup(),this._options.onCommit(t)})}cancel(){this._cleanup()}destroy(){this.cancel()}redraw(e){const t=this._domResizerWrapper;if(!((i=t)&&i.ownerDocument&&i.ownerDocument.contains(i)))return;var i;const n=t.parentElement,o=this._getHandleHost(),r=this._viewResizerWrapper,s=[r.getStyle("width"),r.getStyle("height"),r.getStyle("left"),r.getStyle("top")];let a;if(n.isSameNode(o)){const t=e||new Cs(o);a=[t.width+"px",t.height+"px",void 0,void 0]}else a=[o.offsetWidth+"px",o.offsetHeight+"px",o.offsetLeft+"px",o.offsetTop+"px"];"same"!==cn(s,a)&&this._options.editor.editing.view.change(e=>{e.setStyle({width:a[0],height:a[1],left:a[2],top:a[3]},r)})}containsHandle(e){return this._domResizerWrapper.contains(e)}static isResizeHandle(e){return e.classList.contains("ck-widget__resizer__handle")}_cleanup(){this._sizeView._dismiss();this._options.editor.editing.view.change(e=>{e.setStyle("width",this._initialViewWidth,this._options.viewElement)})}_proposeNewSize(e){const t=this.state,i={x:(n=e).pageX,y:n.pageY};var n;const o=!this._options.isCentered||this._options.isCentered(this),r={x:t._referenceCoordinates.x-(i.x+t.originalWidth),y:i.y-t.originalHeight-t._referenceCoordinates.y};o&&t.activeHandlePosition.endsWith("-right")&&(r.x=i.x-(t._referenceCoordinates.x+t.originalWidth)),o&&(r.x*=2);const s={width:Math.abs(t.originalWidth+r.x),height:Math.abs(t.originalHeight+r.y)};s.dominant=s.width/t.aspectRatio>s.height?"width":"height",s.max=s[s.dominant];const a={width:s.width,height:s.height};return"width"==s.dominant?a.height=a.width/t.aspectRatio:a.width=a.height*t.aspectRatio,{width:Math.round(a.width),height:Math.round(a.height),widthPercents:Math.min(Math.round(t.originalWidthPercents/t.originalWidth*a.width*100)/100,100)}}_getResizeHost(){const e=this._domResizerWrapper.parentElement;return this._options.getResizeHost(e)}_getHandleHost(){const e=this._domResizerWrapper.parentElement;return this._options.getHandleHost(e)}get _domResizerWrapper(){return this._options.editor.editing.view.domConverter.mapViewToDom(this._viewResizerWrapper)}_appendHandles(e){const t=["top-left","top-right","bottom-right","bottom-left"];for(const n of t)e.appendChild(new Rl({tag:"div",attributes:{class:"ck-widget__resizer__handle "+(i=n,"ck-widget__resizer__handle-"+i)}}).render());var i}_appendSizeUI(e){this._sizeView=new Hg,this._sizeView.render(),e.appendChild(this._sizeView.element)}}Ke(Ug,Ue);i(74);Ke(class extends Qe{static get pluginName(){return"WidgetResize"}init(){const e=this.editor.editing,t=_r.window.document;this.set("visibleResizer",null),this.set("_activeResizer",null),this._resizers=new Map,e.view.addObserver(uh),this._observer=Object.create(Pr),this.listenTo(e.view.document,"mousedown",this._mouseDownListener.bind(this),{priority:"high"}),this._observer.listenTo(t,"mousemove",this._mouseMoveListener.bind(this)),this._observer.listenTo(t,"mouseup",this._mouseUpListener.bind(this));const i=()=>{this.visibleResizer&&this.visibleResizer.redraw()};this._redrawFocusedResizerThrottled=tu(i,200),this.on("change:visibleResizer",i),this.editor.ui.on("update",this._redrawFocusedResizerThrottled),this.editor.model.document.on("change",()=>{for(const[e,t]of this._resizers)e.isAttached()||(this._resizers.delete(e),t.destroy())},{priority:"lowest"}),this._observer.listenTo(_r.window,"resize",this._redrawFocusedResizerThrottled);const n=this.editor.editing.view.document.selection;n.on("change",()=>{const e=n.getSelectedElement();this.visibleResizer=this.getResizerByViewElement(e)||null})}destroy(){this._observer.stopListening();for(const e of this._resizers.values())e.destroy();this._redrawFocusedResizerThrottled.cancel()}attachTo(e){const t=new Ug(e),i=this.editor.plugins;if(t.attach(),i.has("WidgetToolbarRepository")){const e=i.get("WidgetToolbarRepository");t.on("begin",()=>{e.forceDisabled("resize")},{priority:"lowest"}),t.on("cancel",()=>{e.clearForceDisabled("resize")},{priority:"highest"}),t.on("commit",()=>{e.clearForceDisabled("resize")},{priority:"highest"})}this._resizers.set(e.viewElement,t);const n=this.editor.editing.view.document.selection.getSelectedElement();return this.getResizerByViewElement(n)==t&&(this.visibleResizer=t),t}getResizerByViewElement(e){return this._resizers.get(e)}_getResizerByHandle(e){for(const t of this._resizers.values())if(t.containsHandle(e))return t}_mouseDownListener(e,t){const i=t.domTarget;Ug.isResizeHandle(i)&&(this._activeResizer=this._getResizerByHandle(i),this._activeResizer&&(this._activeResizer.begin(i),e.stop(),t.preventDefault()))}_mouseMoveListener(e,t){this._activeResizer&&this._activeResizer.updateSize(t)}_mouseUpListener(){this._activeResizer&&(this._activeResizer.commit(),this._activeResizer=null)}},Ue);class Wg extends Ze{refresh(){const e=this.editor.plugins.get("ImageUtils").getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!e,this.isEnabled&&e.hasAttribute("alt")?this.value=e.getAttribute("alt"):this.value=!1}execute(e){const t=this.editor,i=t.plugins.get("ImageUtils"),n=t.model,o=i.getClosestSelectedImageElement(n.document.selection);n.change(t=>{t.setAttribute("alt",e.newValue,o)})}}function qg(e,t){const i=e.createEmptyElement("img"),n="imageBlock"===t?e.createContainerElement("figure",{class:"image"}):e.createContainerElement("span",{class:"image-inline"},{isAllowedInsideAttributeElement:!0});return e.insert(e.createPositionAt(n,0),i),n}function $g(e,t){if(e.plugins.has("ImageInlineEditing")!==e.plugins.has("ImageBlockEditing"))return{name:"img"};const i=e.plugins.get("ImageUtils");return e=>{if(!i.isInlineImageView(e))return null;return(e.findAncestor(i.isBlockImageView)?"imageBlock":"imageInline")!==t?null:{name:!0}}}function Yg(e,t){const i=Ms(t.getSelectedBlocks());return!i||e.isObject(i)||i.isEmpty&&"listItem"!=i.name?"imageBlock":"imageInline"}class Gg extends Qe{static get pluginName(){return"ImageUtils"}isImage(e){return this.isInlineImage(e)||this.isBlockImage(e)}isInlineImageView(e){return!!e&&e.is("element","img")}isBlockImageView(e){return!!e&&e.is("element","figure")&&e.hasClass("image")}insertImage(e={},t=null,i=null){const n=this.editor,o=n.model,r=o.document.selection;i=Kg(n,t||r,i),e={...Object.fromEntries(r.getAttributes()),...e};for(const t in e)o.schema.checkAttribute(i,t)||delete e[t];return o.change(n=>{const s=n.createElement(i,e);return t||"imageInline"==i||(t=Fh(r,o)),o.insertContent(s,t),s.parent?(n.setSelection(s,"on"),s):null})}getClosestSelectedImageWidget(e){const t=e.getSelectedElement();if(t&&this.isImageWidget(t))return t;let i=e.getFirstPosition().parent;for(;i;){if(i.is("element")&&this.isImageWidget(i))return i;i=i.parent}return null}getClosestSelectedImageElement(e){const t=e.getSelectedElement();return this.isImage(t)?t:e.getFirstPosition().findAncestor("imageBlock")}isImageAllowed(){const e=this.editor.model.document.selection;return function(e,t){if("imageBlock"==Kg(e,t)){const i=function(e,t){const i=Fh(e,t).start.parent;if(i.isEmpty&&!i.is("element","$root"))return i.parent;return i}(t,e.model);if(e.model.schema.checkChild(i,"imageBlock"))return!0}else if(e.model.schema.checkChild(t.focus,"imageInline"))return!0;return!1}(this.editor,e)&&function(e){return[...e.focus.getAncestors()].every(e=>!e.is("element","imageBlock"))}(e)}toImageWidget(e,t,i){t.setCustomProperty("image",!0,e);return Dh(e,t,{label:()=>{const t=this.findViewImgElement(e).getAttribute("alt");return t?`${t} ${i}`:i}})}isImageWidget(e){return!!e.getCustomProperty("image")&&Oh(e)}isBlockImage(e){return!!e&&e.is("element","imageBlock")}isInlineImage(e){return!!e&&e.is("element","imageInline")}findViewImgElement(e){if(this.isInlineImageView(e))return e;const t=this.editor.editing.view;for(const{item:i}of t.createRangeIn(e))if(this.isInlineImageView(i))return i}}function Kg(e,t,i){const n=e.model.schema,o=e.config.get("image.insert.type");return e.plugins.has("ImageBlockEditing")?e.plugins.has("ImageInlineEditing")?i||("inline"===o?"imageInline":"block"===o?"imageBlock":t.is("selection")?Yg(n,t):n.checkChild(t,"imageInline")?"imageInline":"imageBlock"):"imageBlock":"imageInline"}class Qg extends Qe{static get requires(){return[Gg]}static get pluginName(){return"ImageTextAlternativeEditing"}init(){this.editor.commands.add("imageTextAlternative",new Wg(this.editor))}}i(76),i(7);class Jg extends Nl{constructor(e){super(e);const t=this.locale.t;this.focusTracker=new Ns,this.keystrokes=new Rs,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(t("Save"),El.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(t("Cancel"),El.cancel,"ck-button-cancel","cancel"),this._focusables=new Ml,this._focusCycler=new nd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form","ck-responsive-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]}),Il(this)}render(){super.render(),this.keystrokes.listenTo(this.element),Pl({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)})}_createButton(e,t,i,n){const o=new td(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}_createLabeledInputView(){const e=this.locale.t,t=new Nd(this.locale,Rd);return t.label=e("Text alternative"),t}}function Zg(e){const t=e.editing.view,i=Vd.defaultPositions,n=e.plugins.get("ImageUtils");return{target:t.domConverter.viewToDom(n.getClosestSelectedImageWidget(t.document.selection)),positions:[i.northArrowSouth,i.northArrowSouthWest,i.northArrowSouthEast,i.southArrowNorth,i.southArrowNorthWest,i.southArrowNorthEast,i.viewportStickyNorth]}}class Xg extends Qe{static get requires(){return[Ud]}static get pluginName(){return"ImageTextAlternativeUI"}init(){this._createButton(),this._createForm()}destroy(){super.destroy(),this._form.destroy()}_createButton(){const e=this.editor,t=e.t;e.ui.componentFactory.add("imageTextAlternative",i=>{const n=e.commands.get("imageTextAlternative"),o=new td(i);return o.set({label:t("Change image text alternative"),icon:El.lowVision,tooltip:!0}),o.bind("isEnabled").to(n,"isEnabled"),this.listenTo(o,"execute",()=>{this._showForm()}),o})}_createForm(){const e=this.editor,t=e.editing.view.document,i=e.plugins.get("ImageUtils");this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new Jg(e.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{e.execute("imageTextAlternative",{newValue:this._form.labeledInput.fieldView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(e,t)=>{this._hideForm(!0),t()}),this.listenTo(e.ui,"update",()=>{i.getClosestSelectedImageWidget(t.selection)?this._isVisible&&function(e){const t=e.plugins.get("ContextualBalloon");if(e.plugins.get("ImageUtils").getClosestSelectedImageWidget(e.editing.view.document.selection)){const i=Zg(e);t.updatePosition(i)}}(e):this._hideForm(!0)}),Sl({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const e=this.editor,t=e.commands.get("imageTextAlternative"),i=this._form.labeledInput;this._form.disableCssTransitions(),this._isInBalloon||this._balloon.add({view:this._form,position:Zg(e)}),i.fieldView.value=i.fieldView.element.value=t.value||"",this._form.labeledInput.fieldView.select(),this._form.enableCssTransitions()}_hideForm(e){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),e&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView===this._form}get _isInBalloon(){return this._balloon.hasView(this._form)}}class em extends Qe{static get requires(){return[Qg,Xg]}static get pluginName(){return"ImageTextAlternative"}}function tm(e,t){return e=>{e.on("attribute:srcset:"+t,i)};function i(t,i,n){if(!n.consumable.consume(i.item,t.name))return;const o=n.writer,r=n.mapper.toViewElement(i.item),s=e.findViewImgElement(r);if(null===i.attributeNewValue){const e=i.attributeOldValue;e.data&&(o.removeAttribute("srcset",s),o.removeAttribute("sizes",s),e.width&&o.removeAttribute("width",s))}else{const e=i.attributeNewValue;e.data&&(o.setAttribute("srcset",e.data,s),o.setAttribute("sizes","100vw",s),e.width&&o.setAttribute("width",e.width,s))}}}function im(e,t,i){return e=>{e.on(`attribute:${i}:${t}`,n)};function n(t,i,n){if(!n.consumable.consume(i.item,t.name))return;const o=n.writer,r=n.mapper.toViewElement(i.item),s=e.findViewImgElement(r);o.setAttribute(i.attributeKey,i.attributeNewValue||"",s)}}class nm extends Rr{observe(e){this.listenTo(e,"load",(e,t)=>{const i=t.target;this.checkShouldIgnoreEventFromTarget(i)||"IMG"==i.tagName&&this._fireEvents(t)},{useCapture:!0})}_fireEvents(e){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",e))}}class om extends Ze{constructor(e){super(e);const t=e.config.get("image.insert.type");e.plugins.has("ImageBlockEditing")||"block"===t&&Object(c.b)("image-block-plugin-required"),e.plugins.has("ImageInlineEditing")||"inline"===t&&Object(c.b)("image-inline-plugin-required")}refresh(){this.isEnabled=this.editor.plugins.get("ImageUtils").isImageAllowed()}execute(e){const t=en(e.source),i=this.editor.model.document.selection,n=this.editor.plugins.get("ImageUtils"),o=Object.fromEntries(i.getAttributes());t.forEach((e,t)=>{const r=i.getSelectedElement();if("string"==typeof e&&(e={src:e}),t&&r&&n.isImage(r)){const t=this.editor.model.createPositionAfter(r);n.insertImage({...e,...o},t)}else n.insertImage({...e,...o})})}}class rm extends Qe{static get requires(){return[Gg]}static get pluginName(){return"ImageEditing"}init(){const e=this.editor,t=e.conversion;e.editing.view.addObserver(nm),t.for("upcast").attributeToAttribute({view:{name:"img",key:"alt"},model:"alt"}).attributeToAttribute({view:{name:"img",key:"srcset"},model:{key:"srcset",value:e=>{const t={data:e.getAttribute("srcset")};return e.hasAttribute("width")&&(t.width=e.getAttribute("width")),t}}});const i=new om(e);e.commands.add("insertImage",i),e.commands.add("imageInsert",i)}}class sm extends Ze{constructor(e,t){super(e),this._modelElementName=t}refresh(){const e=this.editor.plugins.get("ImageUtils"),t=e.getClosestSelectedImageElement(this.editor.model.document.selection);"imageBlock"===this._modelElementName?this.isEnabled=e.isInlineImage(t):this.isEnabled=e.isBlockImage(t)}execute(){const e=this.editor,t=this.editor.model,i=e.plugins.get("ImageUtils"),n=i.getClosestSelectedImageElement(t.document.selection),o=Object.fromEntries(n.getAttributes());return o.src||o.uploadId?t.change(e=>{const r=Array.from(t.markers).filter(e=>e.getRange().containsItem(n)),s=i.insertImage(o,t.createSelection(n,"on"),this._modelElementName);if(!s)return null;const a=e.createRangeOn(s);for(const t of r){const i=t.getRange(),n="$graveyard"!=i.root.rootName?i.getJoined(a,!0):a;e.updateMarker(t,{range:n})}return{oldElement:n,newElement:s}}):null}}class am extends Qe{static get requires(){return[rm,Gg,_h]}static get pluginName(){return"ImageBlockEditing"}init(){const e=this.editor;e.model.schema.register("imageBlock",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),this._setupConversion(),e.plugins.has("ImageInlineEditing")&&(e.commands.add("imageTypeBlock",new sm(this.editor,"imageBlock")),this._setupClipboardIntegration())}_setupConversion(){const e=this.editor,t=e.t,i=e.conversion,n=e.plugins.get("ImageUtils");i.for("dataDowncast").elementToElement({model:"imageBlock",view:(e,{writer:t})=>qg(t,"imageBlock")}),i.for("editingDowncast").elementToElement({model:"imageBlock",view:(e,{writer:i})=>n.toImageWidget(qg(i,"imageBlock"),i,t("image widget"))}),i.for("downcast").add(im(n,"imageBlock","src")).add(im(n,"imageBlock","alt")).add(tm(n,"imageBlock")),i.for("upcast").elementToElement({view:$g(e,"imageBlock"),model:(e,{writer:t})=>t.createElement("imageBlock",e.hasAttribute("src")?{src:e.getAttribute("src")}:null)}).add(function(e){return e=>{e.on("element:figure",t)};function t(t,i,n){if(!n.consumable.test(i.viewItem,{name:!0,classes:"image"}))return;const o=e.findViewImgElement(i.viewItem);if(!o||!n.consumable.test(o,{name:!0}))return;const r=Ms(n.convertItem(o,i.modelCursor).modelRange.getItems());r&&(n.consumable.consume(i.viewItem,{name:!0,classes:"image"}),n.convertChildren(i.viewItem,r),n.updateConversionResult(r,i))}}(n))}_setupClipboardIntegration(){const e=this.editor,t=e.model,i=e.editing.view,n=e.plugins.get("ImageUtils");this.listenTo(e.plugins.get("ClipboardPipeline"),"inputTransformation",(o,r)=>{const s=Array.from(r.content.getChildren());let a;if(!s.every(n.isInlineImageView))return;a=r.targetRanges?e.editing.mapper.toModelRange(r.targetRanges[0]):t.document.selection.getFirstRange();const c=t.createSelection(a);if("imageBlock"===Yg(t.schema,c)){const e=new gh(i.document),t=s.map(t=>e.createElement("figure",{class:"image"},t));r.content=e.createDocumentFragment(t)}})}}i(11);class cm extends Qe{static get requires(){return[am,Xh,em]}static get pluginName(){return"ImageBlock"}}class lm extends Qe{static get requires(){return[rm,Gg,_h]}static get pluginName(){return"ImageInlineEditing"}init(){const e=this.editor,t=e.model.schema;t.register("imageInline",{isObject:!0,isInline:!0,allowWhere:"$text",allowAttributes:["alt","src","srcset"]}),t.addChildCheck((e,t)=>{if(e.endsWith("caption")&&"imageInline"===t.name)return!1}),this._setupConversion(),e.plugins.has("ImageBlockEditing")&&(e.commands.add("imageTypeInline",new sm(this.editor,"imageInline")),this._setupClipboardIntegration())}_setupConversion(){const e=this.editor,t=e.t,i=e.conversion,n=e.plugins.get("ImageUtils");i.for("dataDowncast").elementToElement({model:"imageInline",view:(e,{writer:t})=>t.createEmptyElement("img")}),i.for("editingDowncast").elementToElement({model:"imageInline",view:(e,{writer:i})=>n.toImageWidget(qg(i,"imageInline"),i,t("image widget"))}),i.for("downcast").add(im(n,"imageInline","src")).add(im(n,"imageInline","alt")).add(tm(n,"imageInline")),i.for("upcast").elementToElement({view:$g(e,"imageInline"),model:(e,{writer:t})=>t.createElement("imageInline",e.hasAttribute("src")?{src:e.getAttribute("src")}:null)})}_setupClipboardIntegration(){const e=this.editor,t=e.model,i=e.editing.view,n=e.plugins.get("ImageUtils");this.listenTo(e.plugins.get("ClipboardPipeline"),"inputTransformation",(o,r)=>{const s=Array.from(r.content.getChildren());let a;if(!s.every(n.isBlockImageView))return;a=r.targetRanges?e.editing.mapper.toModelRange(r.targetRanges[0]):t.document.selection.getFirstRange();const c=t.createSelection(a);if("imageInline"===Yg(t.schema,c)){const e=new gh(i.document),t=s.map(t=>1===t.childCount?(Array.from(t.getAttributes()).forEach(i=>e.setAttribute(...i,n.findViewImgElement(t))),t.getChild(0)):t);r.content=e.createDocumentFragment(t)}})}}class dm extends Qe{static get requires(){return[lm,Xh,em]}static get pluginName(){return"ImageInline"}}function hm(e){for(const t of e.getChildren())if(t&&t.is("element","caption"))return t;return null}function um(e,t){const i=t.getFirstPosition().findAncestor("caption");return i&&e.isBlockImage(i.parent)?i:null}class gm extends Ze{refresh(){const e=this.editor,t=e.plugins.get("ImageUtils");if(!e.plugins.has(am))return this.isEnabled=!1,void(this.value=!1);const i=e.model.document.selection,n=i.getSelectedElement();if(!n){const e=um(t,i);return this.isEnabled=!!e,void(this.value=!!e)}this.isEnabled=this.editor.plugins.get("ImageUtils").isImage(n),this.isEnabled?this.value=!!hm(n):this.value=!1}execute(e={}){const{focusCaptionOnShow:t}=e;this.editor.model.change(e=>{this.value?this._hideImageCaption(e):this._showImageCaption(e,t)})}_showImageCaption(e,t){const i=this.editor.model.document.selection,n=this.editor.plugins.get("ImageCaptionEditing");let o=i.getSelectedElement();const r=n._getSavedCaption(o);this.editor.plugins.get("ImageUtils").isInlineImage(o)&&(this.editor.execute("imageTypeBlock"),o=i.getSelectedElement());const s=r||e.createElement("caption");e.append(s,o),t&&e.setSelection(s,"in")}_hideImageCaption(e){const t=this.editor,i=t.model.document.selection,n=t.plugins.get("ImageCaptionEditing"),o=t.plugins.get("ImageUtils");let r,s=i.getSelectedElement();s?r=hm(s):(r=um(o,i),s=r.parent),n._saveCaption(s,r),e.setSelection(s,"on"),e.remove(r)}}class mm extends Qe{static get requires(){return[Gg]}static get pluginName(){return"ImageCaptionEditing"}constructor(e){super(e),this._savedCaptionsMap=new WeakMap}init(){const e=this.editor,t=e.model.schema;t.isRegistered("caption")?t.extend("caption",{allowIn:"imageBlock"}):t.register("caption",{allowIn:"imageBlock",allowContentOf:"$block",isLimit:!0}),e.commands.add("toggleImageCaption",new gm(this.editor)),this._setupConversion(),this._setupImageTypeCommandsIntegration()}_setupConversion(){const e=this.editor,t=e.editing.view,i=e.plugins.get("ImageUtils"),n=e.t;e.conversion.for("upcast").elementToElement({view:e=>function(e,t){return"figcaption"==t.name&&e.isBlockImageView(t.parent)?{name:!0}:null}(i,e),model:"caption"}),e.conversion.for("dataDowncast").elementToElement({model:"caption",view:(e,{writer:t})=>i.isBlockImage(e.parent)?t.createContainerElement("figcaption"):null}),e.conversion.for("editingDowncast").elementToElement({model:"caption",view:(e,{writer:o})=>{if(!i.isBlockImage(e.parent))return null;const r=o.createEditableElement("figcaption");return o.setCustomProperty("imageCaption",!0,r),Kd({view:t,element:r,text:n("Enter image caption"),keepOnFocus:!0}),Bh(r,o)}}),e.editing.mapper.on("modelToViewPosition",fm(t)),e.data.mapper.on("modelToViewPosition",fm(t))}_setupImageTypeCommandsIntegration(){const e=this.editor,t=e.plugins.get("ImageUtils"),i=e.commands.get("imageTypeInline"),n=e.commands.get("imageTypeBlock"),o=e=>{if(!e.return)return;const{oldElement:i,newElement:n}=e.return;if(!i)return;if(t.isBlockImage(i)){const e=hm(i);if(e)return void this._saveCaption(n,e)}const o=this._getSavedCaption(i);o&&this._saveCaption(n,o)};i&&this.listenTo(i,"execute",o,{priority:"low"}),n&&this.listenTo(n,"execute",o,{priority:"low"})}_getSavedCaption(e){const t=this._savedCaptionsMap.get(e);return t?Qs.fromJSON(t):null}_saveCaption(e,t){this._savedCaptionsMap.set(e,t.toJSON())}}function fm(e){return(t,i)=>{const n=i.modelPosition,o=n.parent;if(!o.is("element","imageBlock"))return;const r=i.mapper.toViewElement(o);i.viewPosition=e.createPositionAt(r,n.offset+1)}}class pm extends Qe{static get requires(){return[Gg]}static get pluginName(){return"ImageCaptionUI"}init(){const e=this.editor,t=e.editing.view,i=e.plugins.get("ImageUtils"),n=e.t;e.ui.componentFactory.add("toggleImageCaption",o=>{const r=e.commands.get("toggleImageCaption"),s=new td(o);return s.set({icon:El.caption,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.bind("label").to(r,"value",e=>n(e?"Toggle caption off":"Toggle caption on")),this.listenTo(s,"execute",()=>{e.execute("toggleImageCaption",{focusCaptionOnShow:!0});const n=um(i,e.model.document.selection);if(n){const i=e.editing.mapper.toViewElement(n);t.scrollToTheSelection(),t.change(e=>{e.addClass("image__caption_highlighted",i)})}}),s})}}i(80);class bm extends Ze{constructor(e,t){super(e),this._defaultStyles={imageBlock:!1,imageInline:!1},this._styles=new Map(t.map(e=>{if(e.isDefault)for(const t of e.modelElements)this._defaultStyles[t]=e.name;return[e.name,e]}))}refresh(){const e=this.editor.plugins.get("ImageUtils").getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!e,this.isEnabled?e.hasAttribute("imageStyle")?this.value=e.getAttribute("imageStyle"):this.value=this._defaultStyles[e.name]:this.value=!1}execute(e={}){const t=this.editor,i=t.model,n=t.plugins.get("ImageUtils");i.change(t=>{const o=e.value;let r=n.getClosestSelectedImageElement(i.document.selection);o&&this.shouldConvertImageType(o,r)&&(this.editor.execute(n.isBlockImage(r)?"imageTypeInline":"imageTypeBlock"),r=n.getClosestSelectedImageElement(i.document.selection)),!o||this._styles.get(o).isDefault?t.removeAttribute("imageStyle",r):t.setAttribute("imageStyle",o,r)})}shouldConvertImageType(e,t){return!this._styles.get(e).modelElements.includes(t.name)}}const{objectFullWidth:wm,objectInline:km,objectLeft:_m,objectRight:vm,objectCenter:ym,objectBlockLeft:xm,objectBlockRight:Am}=El,Cm={inline:{name:"inline",title:"In line",icon:km,modelElements:["imageInline"],isDefault:!0},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:_m,modelElements:["imageBlock","imageInline"],className:"image-style-align-left"},alignBlockLeft:{name:"alignBlockLeft",title:"Left aligned image",icon:xm,modelElements:["imageBlock"],className:"image-style-block-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:ym,modelElements:["imageBlock"],className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:vm,modelElements:["imageBlock","imageInline"],className:"image-style-align-right"},alignBlockRight:{name:"alignBlockRight",title:"Right aligned image",icon:Am,modelElements:["imageBlock"],className:"image-style-block-align-right"},block:{name:"block",title:"Centered image",icon:ym,modelElements:["imageBlock"],isDefault:!0},side:{name:"side",title:"Side image",icon:vm,modelElements:["imageBlock"],className:"image-style-side"}},Tm={full:wm,left:xm,right:Am,center:ym,inlineLeft:_m,inlineRight:vm,inline:km},Em=[{name:"imageStyle:wrapText",title:"Wrap text",defaultItem:"imageStyle:alignLeft",items:["imageStyle:alignLeft","imageStyle:alignRight"]},{name:"imageStyle:breakText",title:"Break text",defaultItem:"imageStyle:block",items:["imageStyle:alignBlockLeft","imageStyle:block","imageStyle:alignBlockRight"]}];function Sm(e){Object(c.b)("image-style-configuration-definition-invalid",e)}var Im={normalizeStyles:function(e){return(e.configuredStyles.options||[]).map(e=>function(e){e="string"==typeof e?Cm[e]?{...Cm[e]}:{name:e}:function(e,t){const i={...t};for(const n in e)Object.prototype.hasOwnProperty.call(t,n)||(i[n]=e[n]);return i}(Cm[e.name],e);"string"==typeof e.icon&&(e.icon=Tm[e.icon]||e.icon);return e}(e)).filter(t=>function(e,{isBlockPluginLoaded:t,isInlinePluginLoaded:i}){const{modelElements:n,name:o}=e;if(!(n&&n.length&&o))return Sm({style:e}),!1;{const o=[t?"imageBlock":null,i?"imageInline":null];if(!n.some(e=>o.includes(e)))return Object(c.b)("image-style-missing-dependency",{style:e,missingPlugins:n.map(e=>"imageBlock"===e?"ImageBlockEditing":"ImageInlineEditing")}),!1}return!0}(t,e))},getDefaultStylesConfiguration:function(e,t){return e&&t?{options:["inline","alignLeft","alignRight","alignCenter","alignBlockLeft","alignBlockRight","block","side"]}:e?{options:["block","side"]}:t?{options:["inline","alignLeft","alignRight"]}:{}},getDefaultDropdownDefinitions:function(e){return e.has("ImageBlockEditing")&&e.has("ImageInlineEditing")?[...Em]:[]},warnInvalidStyle:Sm,DEFAULT_OPTIONS:Cm,DEFAULT_ICONS:Tm,DEFAULT_DROPDOWN_DEFINITIONS:Em};function Pm(e,t){for(const i of t)if(i.name===e)return i}class Mm extends Qe{static get pluginName(){return"ImageStyleEditing"}static get requires(){return[Gg]}init(){const{normalizeStyles:e,getDefaultStylesConfiguration:t}=Im,i=this.editor,n=i.plugins.has("ImageBlockEditing"),o=i.plugins.has("ImageInlineEditing");i.config.define("image.styles",t(n,o)),this.normalizedStyles=e({configuredStyles:i.config.get("image.styles"),isBlockPluginLoaded:n,isInlinePluginLoaded:o}),this._setupConversion(n,o),this._setupPostFixer(),i.commands.add("imageStyle",new bm(i,this.normalizedStyles))}_setupConversion(e,t){const i=this.editor,n=i.model.schema,o=(r=this.normalizedStyles,(e,t,i)=>{if(!i.consumable.consume(t.item,e.name))return;const n=Pm(t.attributeNewValue,r),o=Pm(t.attributeOldValue,r),s=i.mapper.toViewElement(t.item),a=i.writer;o&&a.removeClass(o.className,s),n&&a.addClass(n.className,s)});var r;const s=function(e){const t={imageInline:e.filter(e=>!e.isDefault&&e.modelElements.includes("imageInline")),imageBlock:e.filter(e=>!e.isDefault&&e.modelElements.includes("imageBlock"))};return(e,i,n)=>{if(!i.modelRange)return;const o=i.viewItem,r=Ms(i.modelRange.getItems());if(r&&n.schema.checkAttribute(r,"imageStyle"))for(const e of t[r.name])n.consumable.consume(o,{classes:e.className})&&n.writer.setAttribute("imageStyle",e.name,r)}}(this.normalizedStyles);i.editing.downcastDispatcher.on("attribute:imageStyle",o),i.data.downcastDispatcher.on("attribute:imageStyle",o),e&&(n.extend("imageBlock",{allowAttributes:"imageStyle"}),i.data.upcastDispatcher.on("element:figure",s,{priority:"low"})),t&&(n.extend("imageInline",{allowAttributes:"imageStyle"}),i.data.upcastDispatcher.on("element:img",s,{priority:"low"}))}_setupPostFixer(){const e=this.editor,t=e.model.document,i=e.plugins.get(Gg),n=new Map(this.normalizedStyles.map(e=>[e.name,e]));t.registerPostFixer(e=>{let o=!1;for(const r of t.differ.getChanges())if("insert"==r.type||"attribute"==r.type&&"imageStyle"==r.attributeKey){let t="insert"==r.type?r.position.nodeAfter:r.range.start.nodeAfter;if(t&&t.is("element","paragraph")&&t.childCount>0&&(t=t.getChild(0)),!i.isImage(t))continue;const s=t.getAttribute("imageStyle");if(!s)continue;const a=n.get(s);a&&a.modelElements.includes(t.name)||(e.removeAttribute("imageStyle",t),o=!0)}return o})}}i(82);class Nm extends Qe{static get requires(){return[Mm]}static get pluginName(){return"ImageStyleUI"}get localizedDefaultStylesTitles(){const e=this.editor.t;return{"Wrap text":e("Wrap text"),"Break text":e("Break text"),"In line":e("In line"),"Full size image":e("Full size image"),"Side image":e("Side image"),"Left aligned image":e("Left aligned image"),"Centered image":e("Centered image"),"Right aligned image":e("Right aligned image")}}init(){const e=this.editor.plugins,t=this.editor.config.get("image.toolbar")||[],i=Rm(e.get("ImageStyleEditing").normalizedStyles,this.localizedDefaultStylesTitles);for(const e of i)this._createButton(e);const n=Rm([...t.filter(w),...Im.getDefaultDropdownDefinitions(e)],this.localizedDefaultStylesTitles);for(const e of n)this._createDropdown(e,i)}_createDropdown(e,t){const i=this.editor.ui.componentFactory;i.add(e.name,n=>{let o;const{defaultItem:r,items:s,title:a}=e,c=s.filter(e=>t.find(({name:t})=>Om(t)===e)).map(e=>{const t=i.create(e);return e===r&&(o=t),t});s.length!==c.length&&Im.warnInvalidStyle({dropdown:e});const l=xd(n,ad),d=l.buttonView;return Ad(l,c),d.set({label:Dm(a,o.label),class:null,tooltip:!0}),d.bind("icon").toMany(c,"isOn",(...e)=>{const t=e.findIndex(Z);return t<0?o.icon:c[t].icon}),d.bind("label").toMany(c,"isOn",(...e)=>{const t=e.findIndex(Z);return Dm(a,t<0?o.label:c[t].label)}),d.bind("isOn").toMany(c,"isOn",(...e)=>e.some(Z)),d.bind("class").toMany(c,"isOn",(...e)=>e.some(Z)?"ck-splitbutton_flatten":null),d.on("execute",()=>{c.some(({isOn:e})=>e)?l.isOpen=!l.isOpen:o.fire("execute")}),l.bind("isEnabled").toMany(c,"isEnabled",(...e)=>e.some(Z)),l})}_createButton(e){const t=e.name;this.editor.ui.componentFactory.add(Om(t),i=>{const n=this.editor.commands.get("imageStyle"),o=new td(i);return o.set({label:e.title,icon:e.icon,tooltip:!0,isToggleable:!0}),o.bind("isEnabled").to(n,"isEnabled"),o.bind("isOn").to(n,"value",e=>e===t),o.on("execute",this._executeCommand.bind(this,t)),o})}_executeCommand(e){this.editor.execute("imageStyle",{value:e}),this.editor.editing.view.focus()}}function Rm(e,t){for(const i of e)t[i.title]&&(i.title=t[i.title]);return e}function Om(e){return"imageStyle:"+e}function Dm(e,t){return(e?e+": ":"")+t}function zm(e){const t=e.map(e=>e.replace("+","\\+"));return new RegExp(`^image\\/(${t.join("|")})$`)}function Lm(e){return new Promise((t,i)=>{const n=e.getAttribute("src");fetch(n).then(e=>e.blob()).then(e=>{const i=Vm(e,n),o=i.replace("image/",""),r=new File([e],"image."+o,{type:i});t(r)}).catch(e=>e&&"TypeError"===e.name?function(e){return function(e){return new Promise((t,i)=>{const n=_r.document.createElement("img");n.addEventListener("load",()=>{const e=_r.document.createElement("canvas");e.width=n.width,e.height=n.height;e.getContext("2d").drawImage(n,0,0),e.toBlob(e=>e?t(e):i())}),n.addEventListener("error",()=>i()),n.src=e})}(e).then(t=>{const i=Vm(t,e),n=i.replace("image/","");return new File([t],"image."+n,{type:i})})}(n).then(t).catch(i):i(e))})}function Vm(e,t){return e.type?e.type:t.match(/data:(image\/\w+);base64/)?t.match(/data:(image\/\w+);base64/)[1].toLowerCase():"image/jpeg"}class jm extends Qe{static get pluginName(){return"ImageUploadUI"}init(){const e=this.editor,t=e.t,i=i=>{const n=new rg(i),o=e.commands.get("uploadImage"),r=e.config.get("image.upload.types"),s=zm(r);return n.set({acceptedType:r.map(e=>"image/"+e).join(","),allowMultipleFiles:!0}),n.buttonView.set({label:t("Insert image"),icon:El.image,tooltip:!0}),n.buttonView.bind("isEnabled").to(o),n.on("done",(t,i)=>{const n=Array.from(i).filter(e=>s.test(e.type));n.length&&e.execute("uploadImage",{file:n})}),n};e.ui.componentFactory.add("uploadImage",i),e.ui.componentFactory.add("imageUpload",i)}}i(84),i(86),i(88);class Bm extends Qe{static get pluginName(){return"ImageUploadProgress"}constructor(e){super(e),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><rect rx="4"/></svg>')}init(){const e=this.editor;e.plugins.has("ImageBlockEditing")&&e.editing.downcastDispatcher.on("attribute:uploadStatus:imageBlock",(...e)=>this.uploadStatusChange(...e)),e.plugins.has("ImageInlineEditing")&&e.editing.downcastDispatcher.on("attribute:uploadStatus:imageInline",(...e)=>this.uploadStatusChange(...e))}uploadStatusChange(e,t,i){const n=this.editor,o=t.item,r=o.getAttribute("uploadId");if(!i.consumable.consume(t.item,e.name))return;const s=n.plugins.get("ImageUtils"),a=n.plugins.get(ng),c=r?t.attributeNewValue:null,l=this.placeholder,d=n.editing.mapper.toViewElement(o),h=i.writer;if("reading"==c)return Fm(d,h),void Hm(s,l,d,h);if("uploading"==c){const e=a.loaders.get(r);return Fm(d,h),void(e?(Um(d,h),function(e,t,i,n){const o=function(e){const t=e.createUIElement("div",{class:"ck-progress-bar"});return e.setCustomProperty("progressBar",!0,t),t}(t);t.insert(t.createPositionAt(e,"end"),o),i.on("change:uploadedPercent",(e,t,i)=>{n.change(e=>{e.setStyle("width",i+"%",o)})})}(d,h,e,n.editing.view),function(e,t,i,n){if(n.data){const o=e.findViewImgElement(t);i.setAttribute("src",n.data,o)}}(s,d,h,e)):Hm(s,l,d,h))}"complete"==c&&a.loaders.get(r)&&function(e,t,i){const n=t.createUIElement("div",{class:"ck-image-upload-complete-icon"});t.insert(t.createPositionAt(e,"end"),n),setTimeout(()=>{i.change(e=>e.remove(e.createRangeOn(n)))},3e3)}(d,h,n.editing.view),function(e,t){qm(e,t,"progressBar")}(d,h),Um(d,h),function(e,t){t.removeClass("ck-appear",e)}(d,h)}}function Fm(e,t){e.hasClass("ck-appear")||t.addClass("ck-appear",e)}function Hm(e,t,i,n){i.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",i);const o=e.findViewImgElement(i);o.getAttribute("src")!==t&&n.setAttribute("src",t,o),Wm(i,"placeholder")||n.insert(n.createPositionAfter(o),function(e){const t=e.createUIElement("div",{class:"ck-upload-placeholder-loader"});return e.setCustomProperty("placeholder",!0,t),t}(n))}function Um(e,t){e.hasClass("ck-image-upload-placeholder")&&t.removeClass("ck-image-upload-placeholder",e),qm(e,t,"placeholder")}function Wm(e,t){for(const i of e.getChildren())if(i.getCustomProperty(t))return i}function qm(e,t,i){const n=Wm(e,i);n&&t.remove(t.createRangeOn(n))}class $m extends Ze{refresh(){const e=this.editor,t=e.plugins.get("ImageUtils"),i=e.model.document.selection.getSelectedElement();this.isEnabled=t.isImageAllowed()||t.isImage(i)}execute(e){const t=en(e.file),i=this.editor.model.document.selection,n=this.editor.plugins.get("ImageUtils"),o=Object.fromEntries(i.getAttributes());t.forEach((e,t)=>{const r=i.getSelectedElement();if(t&&r&&n.isImage(r)){const t=this.editor.model.createPositionAfter(r);this._uploadImage(e,o,t)}else this._uploadImage(e,o)})}_uploadImage(e,t,i){const n=this.editor,o=n.plugins.get(ng).createLoader(e),r=n.plugins.get("ImageUtils");o&&r.insertImage({...t,uploadId:o.id},i)}}class Ym extends Qe{static get requires(){return[ng,Od,_h,Gg]}static get pluginName(){return"ImageUploadEditing"}constructor(e){super(e),e.config.define("image",{upload:{types:["jpeg","png","gif","bmp","webp","tiff"]}}),this._uploadImageElements=new Map}init(){const e=this.editor,t=e.model.document,i=e.conversion,n=e.plugins.get(ng),o=e.plugins.get("ImageUtils"),r=zm(e.config.get("image.upload.types")),s=new $m(e);e.commands.add("uploadImage",s),e.commands.add("imageUpload",s),i.for("upcast").attributeToAttribute({view:{name:"img",key:"uploadId"},model:"uploadId"}),this.listenTo(e.editing.view.document,"clipboardInput",(t,i)=>{if(n=i.dataTransfer,Array.from(n.types).includes("text/html")&&""!==n.getData("text/html"))return;var n;const o=Array.from(i.dataTransfer.files).filter(e=>!!e&&r.test(e.type));o.length&&(t.stop(),e.model.change(t=>{i.targetRanges&&t.setSelection(i.targetRanges.map(t=>e.editing.mapper.toModelRange(t))),e.model.enqueueChange("default",()=>{e.execute("uploadImage",{file:o})})}))}),this.listenTo(e.plugins.get("ClipboardPipeline"),"inputTransformation",(t,i)=>{const r=Array.from(e.editing.view.createRangeIn(i.content)).filter(e=>function(e,t){return!(!e.isInlineImageView(t)||!t.getAttribute("src"))&&(t.getAttribute("src").match(/^data:image\/\w+;base64,/g)||t.getAttribute("src").match(/^blob:/g))}(o,e.item)&&!e.item.getAttribute("uploadProcessed")).map(e=>({promise:Lm(e.item),imageElement:e.item}));if(!r.length)return;const s=new gh(e.editing.view.document);for(const e of r){s.setAttribute("uploadProcessed",!0,e.imageElement);const t=n.createLoader(e.promise);t&&(s.setAttribute("src","",e.imageElement),s.setAttribute("uploadId",t.id,e.imageElement))}}),e.editing.view.document.on("dragover",(e,t)=>{t.preventDefault()}),t.on("change",()=>{const i=t.differ.getChanges({includeChangesInGraveyard:!0}).reverse(),o=new Set;for(const t of i)if("insert"==t.type&&"$text"!=t.name){const i=t.position.nodeAfter,r="$graveyard"==t.position.root.rootName;for(const t of Gm(e,i)){const e=t.getAttribute("uploadId");if(!e)continue;const i=n.loaders.get(e);i&&(r?o.has(e)||i.abort():(o.add(e),this._uploadImageElements.set(e,t),"idle"==i.status&&this._readAndUpload(i)))}}}),this.on("uploadComplete",(e,{imageElement:t,data:i})=>{const n=i.urls?i.urls:i;this.editor.model.change(e=>{e.setAttribute("src",n.default,t),this._parseAndSetSrcsetAttributeOnImage(n,t,e)})},{priority:"low"})}afterInit(){const e=this.editor.model.schema;this.editor.plugins.has("ImageBlockEditing")&&e.extend("imageBlock",{allowAttributes:["uploadId","uploadStatus"]}),this.editor.plugins.has("ImageInlineEditing")&&e.extend("imageInline",{allowAttributes:["uploadId","uploadStatus"]})}_readAndUpload(e){const t=this.editor,i=t.model,n=t.locale.t,o=t.plugins.get(ng),r=t.plugins.get(Od),s=t.plugins.get("ImageUtils"),a=this._uploadImageElements;return i.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","reading",a.get(e.id))}),e.read().then(()=>{const n=e.upload(),o=a.get(e.id);if(Io.isSafari){const e=t.editing.mapper.toViewElement(o),i=s.findViewImgElement(e);t.editing.view.once("render",()=>{if(!i.parent)return;const e=t.editing.view.domConverter.mapViewToDom(i.parent);if(!e)return;const n=e.style.display;e.style.display="none",e._ckHack=e.offsetHeight,e.style.display=n})}return i.enqueueChange("transparent",e=>{e.setAttribute("uploadStatus","uploading",o)}),n}).then(t=>{i.enqueueChange("transparent",i=>{const n=a.get(e.id);i.setAttribute("uploadStatus","complete",n),this.fire("uploadComplete",{data:t,imageElement:n})}),c()}).catch(t=>{if("error"!==e.status&&"aborted"!==e.status)throw t;"error"==e.status&&t&&r.showWarning(t,{title:n("Upload failed"),namespace:"upload"}),i.enqueueChange("transparent",t=>{t.remove(a.get(e.id))}),c()});function c(){i.enqueueChange("transparent",t=>{const i=a.get(e.id);t.removeAttribute("uploadId",i),t.removeAttribute("uploadStatus",i),a.delete(e.id)}),o.destroyLoader(e)}}_parseAndSetSrcsetAttributeOnImage(e,t,i){let n=0;const o=Object.keys(e).filter(e=>{const t=parseInt(e,10);if(!isNaN(t))return n=Math.max(n,t),!0}).map(t=>`${e[t]} ${t}w`).join(", ");""!=o&&i.setAttribute("srcset",{data:o,width:n},t)}}function Gm(e,t){const i=e.plugins.get("ImageUtils");return Array.from(e.model.createRangeOn(t)).filter(e=>i.isImage(e.item)).map(e=>e.item)}class Km extends Qe{static get pluginName(){return"IndentEditing"}init(){const e=this.editor;e.commands.add("indent",new et(e)),e.commands.add("outdent",new et(e))}}var Qm='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>',Jm='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>';class Zm extends Qe{static get pluginName(){return"IndentUI"}init(){const e=this.editor,t=e.locale,i=e.t,n="ltr"==t.uiLanguageDirection?Qm:Jm,o="ltr"==t.uiLanguageDirection?Jm:Qm;this._defineButton("indent",i("Increase indent"),n),this._defineButton("outdent",i("Decrease indent"),o)}_defineButton(e,t,i){const n=this.editor;n.ui.componentFactory.add(e,o=>{const r=n.commands.get(e),s=new td(o);return s.set({label:t,icon:i,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(s,"execute",()=>{n.execute(e),n.editing.view.focus()}),s})}}class Xm{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(e){Array.isArray(e)?e.forEach(e=>this._definitions.add(e)):this._definitions.add(e)}getDispatcher(){return e=>{e.on("attribute:linkHref",(e,t,i)=>{if(!i.consumable.test(t.item,"attribute:linkHref"))return;const n=i.writer,o=n.document.selection;for(const e of this._definitions){const r=n.createAttributeElement("a",e.attributes,{priority:5});e.classes&&n.addClass(e.classes,r);for(const t in e.styles)n.setStyle(t,e.styles[t],r);n.setCustomProperty("link",!0,r),e.callback(t.attributeNewValue)?t.item.is("selection")?n.wrap(o.getFirstRange(),r):n.wrap(i.mapper.toViewRange(t.range),r):n.unwrap(i.mapper.toViewRange(t.range),r)}},{priority:"high"})}}getDispatcherForLinkedImage(){return e=>{e.on("attribute:linkHref:imageBlock",(e,t,{writer:i,mapper:n})=>{const o=n.toViewElement(t.item),r=Array.from(o.getChildren()).find(e=>"a"===e.name);for(const e of this._definitions){const n=gn(e.attributes);if(e.callback(t.attributeNewValue)){for(const[e,t]of n)"class"===e?i.addClass(t,r):i.setAttribute(e,t,r);e.classes&&i.addClass(e.classes,r);for(const t in e.styles)i.setStyle(t,e.styles[t],r)}else{for(const[e,t]of n)"class"===e?i.removeClass(t,r):i.removeAttribute(e,r);e.classes&&i.removeClass(e.classes,r);for(const t in e.styles)i.removeStyle(t,r)}}})}}}var ef=function(e,t,i){var n=e.length;return i=void 0===i?n:i,!t&&i>=n?e:Dn(e,t,i)},tf=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var nf=function(e){return tf.test(e)};var of=function(e){return e.split("")},rf="[\\ud800-\\udfff]",sf="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",af="\\ud83c[\\udffb-\\udfff]",cf="[^\\ud800-\\udfff]",lf="(?:\\ud83c[\\udde6-\\uddff]){2}",df="[\\ud800-\\udbff][\\udc00-\\udfff]",hf="(?:"+sf+"|"+af+")"+"?",uf="[\\ufe0e\\ufe0f]?"+hf+("(?:\\u200d(?:"+[cf,lf,df].join("|")+")[\\ufe0e\\ufe0f]?"+hf+")*"),gf="(?:"+[cf+sf+"?",sf,lf,df,rf].join("|")+")",mf=RegExp(af+"(?="+af+")|"+gf+uf,"g");var ff=function(e){return e.match(mf)||[]};var pf=function(e){return nf(e)?ff(e):of(e)};var bf=function(e){return function(t){t=Pn(t);var i=nf(t)?pf(t):void 0,n=i?i[0]:t.charAt(0),o=i?ef(i,1).join(""):t.slice(1);return n[e]()+o}}("toUpperCase");const wf=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,kf=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,_f=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,vf=/^((\w+:(\/{2,})?)|(\W))/i;function yf(e,{writer:t}){const i=t.createAttributeElement("a",{href:e},{priority:5});return t.setCustomProperty("link",!0,i),i}function xf(e){return function(e){return e.replace(wf,"").match(kf)}(e=String(e))?e:"#"}function Af(e,t){return!!e&&t.checkAttribute(e.name,"linkHref")}function Cf(e,t){const i=(n=e,_f.test(n)?"mailto:":t);var n;const o=!!i&&!vf.test(e);return e&&o?i+e:e}class Tf extends Ze{constructor(e){super(e),this.manualDecorators=new Zi,this.automaticDecorators=new Xm}restoreManualDecoratorStates(){for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}refresh(){const e=this.editor.model,t=e.document.selection,i=t.getSelectedElement()||Ms(t.getSelectedBlocks());Af(i,e.schema)?(this.value=i.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttribute(i,"linkHref")):(this.value=t.getAttribute("linkHref"),this.isEnabled=e.schema.checkAttributeInSelection(t,"linkHref"));for(const e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}execute(e,t={}){const i=this.editor.model,n=i.document.selection,o=[],r=[];for(const e in t)t[e]?o.push(e):r.push(e);i.change(t=>{if(n.isCollapsed){const s=n.getFirstPosition();if(n.hasAttribute("linkHref")){const a=Wu(s,"linkHref",n.getAttribute("linkHref"),i);t.setAttribute("linkHref",e,a),o.forEach(e=>{t.setAttribute(e,!0,a)}),r.forEach(e=>{t.removeAttribute(e,a)}),t.setSelection(t.createPositionAfter(a.end.nodeBefore))}else if(""!==e){const r=gn(n.getAttributes());r.set("linkHref",e),o.forEach(e=>{r.set(e,!0)});const{end:a}=i.insertContent(t.createText(e,r),s);t.setSelection(a)}["linkHref",...o,...r].forEach(e=>{t.removeSelectionAttribute(e)})}else{const s=i.schema.getValidRanges(n.getRanges(),"linkHref"),a=[];for(const e of n.getSelectedBlocks())i.schema.checkAttribute(e,"linkHref")&&a.push(t.createRangeOn(e));const c=a.slice();for(const e of s)this._isRangeToUpdate(e,a)&&c.push(e);for(const i of c)t.setAttribute("linkHref",e,i),o.forEach(e=>{t.setAttribute(e,!0,i)}),r.forEach(e=>{t.removeAttribute(e,i)})}})}_getDecoratorStateFromModel(e){const t=this.editor.model,i=t.document.selection,n=i.getSelectedElement();return Af(n,t.schema)?n.getAttribute(e):i.getAttribute(e)}_isRangeToUpdate(e,t){for(const i of t)if(i.containsRange(e))return!1;return!0}}class Ef extends Ze{refresh(){const e=this.editor.model,t=e.document.selection,i=t.getSelectedElement();Af(i,e.schema)?this.isEnabled=e.schema.checkAttribute(i,"linkHref"):this.isEnabled=e.schema.checkAttributeInSelection(t,"linkHref")}execute(){const e=this.editor,t=this.editor.model,i=t.document.selection,n=e.commands.get("link");t.change(e=>{const o=i.isCollapsed?[Wu(i.getFirstPosition(),"linkHref",i.getAttribute("linkHref"),t)]:t.schema.getValidRanges(i.getRanges(),"linkHref");for(const t of o)if(e.removeAttribute("linkHref",t),n)for(const i of n.manualDecorators)e.removeAttribute(i.id,t)})}}class Sf{constructor({id:e,label:t,attributes:i,classes:n,styles:o,defaultValue:r}){this.id=e,this.set("value"),this.defaultValue=r,this.label=t,this.attributes=i,this.classes=n,this.styles=o}_createPattern(){return{attributes:this.attributes,classes:this.classes,styles:this.styles}}}Ke(Sf,Ue);i(90);const If=/^(https?:)?\/\//;class Pf extends Qe{static get pluginName(){return"LinkEditing"}static get requires(){return[Iu,Cu,_h]}constructor(e){super(e),e.config.define("link",{addTargetToExternalLinks:!1})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"linkHref"}),e.conversion.for("dataDowncast").attributeToElement({model:"linkHref",view:yf}),e.conversion.for("editingDowncast").attributeToElement({model:"linkHref",view:(e,t)=>yf(xf(e),t)}),e.conversion.for("upcast").elementToAttribute({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:e=>e.getAttribute("href")}}),e.commands.add("link",new Tf(e)),e.commands.add("unlink",new Ef(e));const t=function(e,t){const i={"Open in a new tab":e("Open in a new tab"),Downloadable:e("Downloadable")};return t.forEach(e=>(e.label&&i[e.label]&&(e.label=i[e.label]),e)),t}(e.t,function(e){const t=[];if(e)for(const[i,n]of Object.entries(e)){const e=Object.assign({},n,{id:"link"+bf(i)});t.push(e)}return t}(e.config.get("link.decorators")));this._enableAutomaticDecorators(t.filter(e=>"automatic"===e.mode)),this._enableManualDecorators(t.filter(e=>"manual"===e.mode));e.plugins.get(Iu).registerAttribute("linkHref"),function(e,t,i,n){const o=e.editing.view,r=new Set;o.document.registerPostFixer(o=>{const s=e.model.document.selection;let a=!1;if(s.hasAttribute(t)){const c=Wu(s.getFirstPosition(),t,s.getAttribute(t),e.model),l=e.editing.mapper.toViewRange(c);for(const e of l.getItems())e.is("element",i)&&!e.hasClass(n)&&(o.addClass(n,e),r.add(e),a=!0)}return a}),e.conversion.for("editingDowncast").add(e=>{function t(){o.change(e=>{for(const t of r.values())e.removeClass(n,t),r.delete(t)})}e.on("insert",t,{priority:"highest"}),e.on("remove",t,{priority:"highest"}),e.on("attribute",t,{priority:"highest"}),e.on("selection",t,{priority:"highest"})})}(e,"linkHref","a","ck-link_selected"),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink()}_enableAutomaticDecorators(e){const t=this.editor,i=t.commands.get("link").automaticDecorators;t.config.get("link.addTargetToExternalLinks")&&i.add({id:"linkIsExternal",mode:"automatic",callback:e=>If.test(e),attributes:{target:"_blank",rel:"noopener noreferrer"}}),i.add(e),i.length&&t.conversion.for("downcast").add(i.getDispatcher())}_enableManualDecorators(e){if(!e.length)return;const t=this.editor,i=t.commands.get("link").manualDecorators;e.forEach(e=>{t.model.schema.extend("$text",{allowAttributes:e.id}),e=new Sf(e),i.add(e),t.conversion.for("downcast").attributeToElement({model:e.id,view:(t,{writer:i})=>{if(t){const t=i.createAttributeElement("a",e.attributes,{priority:5});e.classes&&i.addClass(e.classes,t);for(const n in e.styles)i.setStyle(n,e.styles[n],t);return i.setCustomProperty("link",!0,t),t}}}),t.conversion.for("upcast").elementToAttribute({view:{name:"a",...e._createPattern()},model:{key:e.id}})})}_enableInsertContentSelectionAttributesFixer(){const e=this.editor.model,t=e.document.selection;this.listenTo(e,"insertContent",()=>{const i=t.anchor.nodeBefore,n=t.anchor.nodeAfter;t.hasAttribute("linkHref")&&i&&i.hasAttribute("linkHref")&&(n&&n.hasAttribute("linkHref")||e.change(t=>{Mf(t,Rf(e.schema))}))},{priority:"low"})}_enableClickingAfterLink(){const e=this.editor,t=e.model;e.editing.view.addObserver(uh);let i=!1;this.listenTo(e.editing.view.document,"mousedown",()=>{i=!0}),this.listenTo(e.editing.view.document,"selectionChange",()=>{if(!i)return;i=!1;const e=t.document.selection;if(!e.isCollapsed)return;if(!e.hasAttribute("linkHref"))return;const n=e.getFirstPosition(),o=Wu(n,"linkHref",e.getAttribute("linkHref"),t);(n.isTouching(o.start)||n.isTouching(o.end))&&t.change(e=>{Mf(e,Rf(t.schema))})})}_enableTypingOverLink(){const e=this.editor,t=e.editing.view;let i,n;this.listenTo(t.document,"delete",()=>{n=!0},{priority:"high"}),this.listenTo(e.model,"deleteContent",()=>{const t=e.model.document.selection;t.isCollapsed||(n?n=!1:Nf(e)&&function(e){const t=e.document.selection,i=t.getFirstPosition(),n=t.getLastPosition(),o=i.nodeAfter;if(!o)return!1;if(!o.is("$text"))return!1;if(!o.hasAttribute("linkHref"))return!1;const r=n.textNode||n.nodeBefore;if(o===r)return!0;return Wu(i,"linkHref",o.getAttribute("linkHref"),e).containsRange(e.createRange(i,n),!0)}(e.model)&&(i=t.getAttributes()))},{priority:"high"}),this.listenTo(e.model,"insertContent",(t,[o])=>{n=!1,Nf(e)&&i&&(e.model.change(e=>{for(const[t,n]of i)e.setAttribute(t,n,o)}),i=null)},{priority:"high"})}_handleDeleteContentAfterLink(){const e=this.editor,t=e.model,i=t.document.selection,n=e.editing.view;let o=!1,r=!1;this.listenTo(n.document,"delete",(e,t)=>{r=t.domEvent.keyCode===No.backspace},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{o=!1;const e=i.getFirstPosition(),n=i.getAttribute("linkHref");if(!n)return;const r=Wu(e,"linkHref",n,t);o=r.containsPosition(e)||r.end.isEqual(e)},{priority:"high"}),this.listenTo(t,"deleteContent",()=>{r&&(r=!1,o||e.model.enqueueChange(e=>{Mf(e,Rf(t.schema))}))},{priority:"low"})}}function Mf(e,t){e.removeSelectionAttribute("linkHref");for(const i of t)e.removeSelectionAttribute(i)}function Nf(e){return e.plugins.get("Input").isInput(e.model.change(e=>e.batch))}function Rf(e){return e.getDefinition("$text").allowAttributes.filter(e=>e.startsWith("link"))}i(92);class Of extends Nl{constructor(e,t){super(e);const i=e.t;this.focusTracker=new Ns,this.keystrokes=new Rs,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(i("Save"),El.check,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(i("Cancel"),El.cancel,"ck-button-cancel","cancel"),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(t),this.children=this._createFormChildren(t.manualDecorators),this._focusables=new Ml,this._focusCycler=new nd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}});const n=["ck","ck-link-form","ck-responsive-form"];t.manualDecorators.length&&n.push("ck-link-form_layout-vertical","ck-vertical-form"),this.setTemplate({tag:"form",attributes:{class:n,tabindex:"-1"},children:this.children}),Il(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce((e,t)=>(e[t.name]=t.isOn,e),{})}render(){super.render(),Pl({view:this});[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const e=this.locale.t,t=new Nd(this.locale,Rd);return t.label=e("Link URL"),t}_createButton(e,t,i,n){const o=new td(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}_createManualDecoratorSwitches(e){const t=this.createCollection();for(const i of e.manualDecorators){const n=new id(this.locale);n.set({name:i.id,label:i.label,withText:!0}),n.bind("isOn").toMany([i,e],"value",(e,t)=>void 0===t&&void 0===e?i.defaultValue:e),n.on("execute",()=>{i.set("value",!n.isOn)}),t.add(n)}return t}_createFormChildren(e){const t=this.createCollection();if(t.add(this.urlInputView),e.length){const e=new Nl;e.setTemplate({tag:"ul",children:this._manualDecoratorSwitches.map(e=>({tag:"li",children:[e],attributes:{class:["ck","ck-list__item"]}})),attributes:{class:["ck","ck-reset","ck-list"]}}),t.add(e)}return t.add(this.saveButtonView),t.add(this.cancelButtonView),t}}i(94);class Df extends Nl{constructor(e){super(e);const t=e.t;this.focusTracker=new Ns,this.keystrokes=new Rs,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(t("Unlink"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>',"unlink"),this.editButtonView=this._createButton(t("Edit link"),El.pencil,"edit"),this.set("href"),this._focusables=new Ml,this._focusCycler=new nd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions","ck-responsive-form"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render();[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(e,t,i){const n=new td(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n.delegate("execute").to(this,i),n}_createPreviewButton(){const e=new td(this.locale),t=this.bindTemplate,i=this.t;return e.set({withText:!0,tooltip:i("Open link in new tab")}),e.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:t.to("href",e=>e&&xf(e)),target:"_blank",rel:"noopener noreferrer"}}),e.bind("label").to(this,"href",e=>e||i("This link has no URL")),e.bind("isEnabled").to(this,"href",e=>!!e),e.template.tag="a",e.template.eventListeners={},e}}class zf extends Qe{static get requires(){return[Ud]}static get pluginName(){return"LinkUI"}init(){const e=this.editor;e.editing.view.addObserver(hh),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=e.plugins.get(Ud),this._createToolbarLinkButton(),this._enableUserBalloonInteractions(),e.conversion.for("editingDowncast").markerToHighlight({model:"link-ui",view:{classes:["ck-fake-link-selection"]}}),e.conversion.for("editingDowncast").markerToElement({model:"link-ui",view:{name:"span",classes:["ck-fake-link-selection","ck-fake-link-selection_collapsed"]}})}destroy(){super.destroy(),this.formView.destroy()}_createActionsView(){const e=this.editor,t=new Df(e.locale),i=e.commands.get("link"),n=e.commands.get("unlink");return t.bind("href").to(i,"value"),t.editButtonView.bind("isEnabled").to(i),t.unlinkButtonView.bind("isEnabled").to(n),this.listenTo(t,"edit",()=>{this._addFormView()}),this.listenTo(t,"unlink",()=>{e.execute("unlink"),this._hideUI()}),t.keystrokes.set("Esc",(e,t)=>{this._hideUI(),t()}),t.keystrokes.set("Ctrl+K",(e,t)=>{this._addFormView(),t()}),t}_createFormView(){const e=this.editor,t=e.commands.get("link"),i=e.config.get("link.defaultProtocol"),n=new Of(e.locale,t);return n.urlInputView.fieldView.bind("value").to(t,"value"),n.urlInputView.bind("isReadOnly").to(t,"isEnabled",e=>!e),n.saveButtonView.bind("isEnabled").to(t),this.listenTo(n,"submit",()=>{const{value:t}=n.urlInputView.fieldView.element,o=Cf(t,i);e.execute("link",o,n.getDecoratorSwitchesState()),this._closeFormView()}),this.listenTo(n,"cancel",()=>{this._closeFormView()}),n.keystrokes.set("Esc",(e,t)=>{this._closeFormView(),t()}),n}_createToolbarLinkButton(){const e=this.editor,t=e.commands.get("link"),i=e.t;e.keystrokes.set("Ctrl+K",(e,i)=>{i(),t.isEnabled&&this._showUI(!0)}),e.ui.componentFactory.add("link",e=>{const n=new td(e);return n.isEnabled=!0,n.label=i("Link"),n.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>',n.keystroke="Ctrl+K",n.tooltip=!0,n.isToggleable=!0,n.bind("isEnabled").to(t,"isEnabled"),n.bind("isOn").to(t,"value",e=>!!e),this.listenTo(n,"execute",()=>this._showUI(!0)),n})}_enableUserBalloonInteractions(){const e=this.editor.editing.view.document;this.listenTo(e,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(e,t)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),t())},{priority:"high"}),this.editor.keystrokes.set("Esc",(e,t)=>{this._isUIVisible&&(this._hideUI(),t())}),Sl({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const e=this.editor.commands.get("link");this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=e.value||""}_closeFormView(){const e=this.editor.commands.get("link");e.restoreManualDecoratorStates(),void 0!==e.value?this._removeFormView():this._hideUI()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(e=!1){this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),e&&this._balloon.showStack("main")):(this._showFakeVisualSelection(),this._addActionsView(),e&&this._balloon.showStack("main"),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;const e=this.editor;this.stopListening(e.ui,"update"),this.stopListening(this._balloon,"change:visibleView"),e.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){const e=this.editor,t=e.editing.view.document;let i=this._getSelectedLinkElement(),n=r();const o=()=>{const e=this._getSelectedLinkElement(),t=r();i&&!e||!i&&t!==n?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),i=e,n=t};function r(){return t.selection.focus.getAncestors().reverse().find(e=>e.is("element"))}this.listenTo(e.ui,"update",o),this.listenTo(this._balloon,"change:visibleView",o)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const e=this.editor.editing.view,t=this.editor.model,i=e.document;let n=null;if(t.markers.has("link-ui")){const t=Array.from(this.editor.editing.mapper.markerNameToElements("link-ui")),i=e.createRange(e.createPositionBefore(t[0]),e.createPositionAfter(t[t.length-1]));n=e.domConverter.viewRangeToDom(i)}else n=()=>{const t=this._getSelectedLinkElement();return t?e.domConverter.mapViewToDom(t):e.domConverter.viewRangeToDom(i.selection.getFirstRange())};return{target:n}}_getSelectedLinkElement(){const e=this.editor.editing.view,t=e.document.selection,i=t.getSelectedElement();if(t.isCollapsed||i&&Oh(i))return Lf(t.getFirstPosition());{const i=t.getFirstRange().getTrimmed(),n=Lf(i.start),o=Lf(i.end);return n&&n==o&&e.createRangeIn(n).getTrimmed().isEqual(i)?n:null}}_showFakeVisualSelection(){const e=this.editor.model;e.change(t=>{const i=e.document.selection.getFirstRange();if(e.markers.has("link-ui"))t.updateMarker("link-ui",{range:i});else if(i.start.isAtEnd){const n=i.start.getLastMatchingPosition(({item:t})=>!e.schema.isContent(t),{boundaries:i});t.addMarker("link-ui",{usingOperation:!1,affectsData:!1,range:t.createRange(n,i.end)})}else t.addMarker("link-ui",{usingOperation:!1,affectsData:!1,range:i})})}_hideFakeVisualSelection(){const e=this.editor.model;e.markers.has("link-ui")&&e.change(e=>{e.removeMarker("link-ui")})}}function Lf(e){return e.getAncestors().find(e=>{return(t=e).is("attributeElement")&&!!t.getCustomProperty("link");var t})}const Vf=new RegExp("(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$","i");class jf extends Qe{static get requires(){return[Ih]}static get pluginName(){return"AutoLink"}init(){const e=this.editor.model.document.selection;e.on("change:range",()=>{this.isEnabled=!e.anchor.parent.is("element","codeBlock")}),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){const e=this.editor,t=new Su(e.model,e=>{if(!function(e){return e.length>4&&" "===e[e.length-1]&&" "!==e[e.length-2]}(e))return;const t=Bf(e.substr(0,e.length-1));return t?{url:t}:void 0}),i=e.plugins.get("Input");t.on("matched:data",(t,n)=>{const{batch:o,range:r,url:s}=n;if(!i.isInput(o))return;const a=r.end.getShiftedBy(-1),c=a.getShiftedBy(-s.length),l=e.model.createRange(c,a);this._applyAutoLink(s,l)}),t.bind("isEnabled").to(this)}_enableEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("enter");i&&i.on("execute",()=>{const e=t.document.selection.getFirstPosition();if(!e.parent.previousSibling)return;const i=t.createRangeIn(e.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(i)})}_enableShiftEnterHandling(){const e=this.editor,t=e.model,i=e.commands.get("shiftEnter");i&&i.on("execute",()=>{const e=t.document.selection.getFirstPosition(),i=t.createRange(t.createPositionAt(e.parent,0),e.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(i)})}_checkAndApplyAutoLinkOnRange(e){const t=this.editor.model,{text:i,range:n}=Eu(e,t),o=Bf(i);if(o){const e=t.createRange(n.end.getShiftedBy(-o.length),n.end);this._applyAutoLink(o,e)}}_applyAutoLink(e,t){const i=this.editor.model,n=this.editor.plugins.get("Delete");this.isEnabled&&function(e,t){return t.schema.checkAttributeInSelection(t.createSelection(e),"linkHref")}(t,i)&&i.enqueueChange(o=>{const r=this.editor.config.get("link.defaultProtocol"),s=Cf(e,r);o.setAttribute("linkHref",s,t),i.enqueueChange(()=>{n.requestUndoOnBackspace()})})}}function Bf(e){const t=Vf.exec(e);return t?t[2]:null}class Ff extends Ze{constructor(e,t){super(e),this.type=t}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){const t=this.editor.model,i=t.document,n=Array.from(i.selection.getSelectedBlocks()).filter(e=>Uf(e,t.schema)),o=void 0!==e.forceValue?!e.forceValue:this.value;t.change(e=>{if(o){let t=n[n.length-1].nextSibling,i=Number.POSITIVE_INFINITY,o=[];for(;t&&"listItem"==t.name&&0!==t.getAttribute("listIndent");){const e=t.getAttribute("listIndent");e<i&&(i=e);const n=e-i;o.push({element:t,listIndent:n}),t=t.nextSibling}o=o.reverse();for(const t of o)e.setAttribute("listIndent",t.listIndent,t.element)}if(!o){let e=Number.POSITIVE_INFINITY;for(const t of n)t.is("element","listItem")&&t.getAttribute("listIndent")<e&&(e=t.getAttribute("listIndent"));e=0===e?1:e,Hf(n,!0,e),Hf(n,!1,e)}for(const t of n.reverse())o&&"listItem"==t.name?e.rename(t,"paragraph"):o||"listItem"==t.name?o||"listItem"!=t.name||t.getAttribute("listType")==this.type||e.setAttribute("listType",this.type,t):(e.setAttributes({listType:this.type,listIndent:0},t),e.rename(t,"listItem"));this.fire("_executeCleanup",n)})}_getValue(){const e=Ms(this.editor.model.document.selection.getSelectedBlocks());return!!e&&e.is("element","listItem")&&e.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const e=this.editor.model.document.selection,t=this.editor.model.schema,i=Ms(e.getSelectedBlocks());return!!i&&Uf(i,t)}}function Hf(e,t,i){const n=t?e[0]:e[e.length-1];if(n.is("element","listItem")){let o=n[t?"previousSibling":"nextSibling"],r=n.getAttribute("listIndent");for(;o&&o.is("element","listItem")&&o.getAttribute("listIndent")>=i;)r>o.getAttribute("listIndent")&&(r=o.getAttribute("listIndent")),o.getAttribute("listIndent")==r&&e[t?"unshift":"push"](o),o=o[t?"previousSibling":"nextSibling"]}}function Uf(e,t){return t.checkChild(e.parent,"listItem")&&!t.isObject(e)}class Wf extends Ze{constructor(e,t){super(e),this._indentBy="forward"==t?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const e=this.editor.model,t=e.document;let i=Array.from(t.selection.getSelectedBlocks());e.change(e=>{const t=i[i.length-1];let n=t.nextSibling;for(;n&&"listItem"==n.name&&n.getAttribute("listIndent")>t.getAttribute("listIndent");)i.push(n),n=n.nextSibling;this._indentBy<0&&(i=i.reverse());for(const t of i){const i=t.getAttribute("listIndent")+this._indentBy;i<0?e.rename(t,"paragraph"):e.setAttribute("listIndent",i,t)}this.fire("_executeCleanup",i)})}_checkEnabled(){const e=Ms(this.editor.model.document.selection.getSelectedBlocks());if(!e||!e.is("element","listItem"))return!1;if(this._indentBy>0){const t=e.getAttribute("listIndent"),i=e.getAttribute("listType");let n=e.previousSibling;for(;n&&n.is("element","listItem")&&n.getAttribute("listIndent")>=t;){if(n.getAttribute("listIndent")==t)return n.getAttribute("listType")==i;n=n.previousSibling}return!1}return!0}}function qf(e,t){const i=t.mapper,n=t.writer,o="numbered"==e.getAttribute("listType")?"ol":"ul",r=function(e){const t=e.createContainerElement("li");return t.getFillerOffset=Jf,t}(n),s=n.createContainerElement(o,null);return n.insert(n.createPositionAt(s,0),r),i.bindElements(e,r),r}function $f(e,t,i,n){const o=t.parent,r=i.mapper,s=i.writer;let a=r.toViewPosition(n.createPositionBefore(e));const c=Kf(e.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:e.getAttribute("listIndent")}),l=e.previousSibling;if(c&&c.getAttribute("listIndent")==e.getAttribute("listIndent")){const e=r.toViewElement(c);a=s.breakContainer(s.createPositionAfter(e))}else if(l&&"listItem"==l.name){a=r.toViewPosition(n.createPositionAt(l,"end"));const e=r.findMappedViewAncestor(a),t=function(e){for(const t of e.getChildren())if("ul"==t.name||"ol"==t.name)return t;return null}(e);a=t?s.createPositionBefore(t):s.createPositionAt(e,"end")}else a=r.toViewPosition(n.createPositionBefore(e));if(a=Gf(a),s.insert(a,o),l&&"listItem"==l.name){const e=r.toViewElement(l),i=s.createRange(s.createPositionAt(e,0),a).getWalker({ignoreElementEnd:!0});for(const e of i)if(e.item.is("element","li")){const n=s.breakContainer(s.createPositionBefore(e.item)),o=e.item.parent,r=s.createPositionAt(t,"end");Yf(s,r.nodeBefore,r.nodeAfter),s.move(s.createRangeOn(o),r),i.position=n}}else{const i=o.nextSibling;if(i&&(i.is("element","ul")||i.is("element","ol"))){let n=null;for(const t of i.getChildren()){const i=r.toModelElement(t);if(!(i&&i.getAttribute("listIndent")>e.getAttribute("listIndent")))break;n=t}n&&(s.breakContainer(s.createPositionAfter(n)),s.move(s.createRangeOn(n.parent),s.createPositionAt(t,"end")))}}Yf(s,o,o.nextSibling),Yf(s,o.previousSibling,o)}function Yf(e,t,i){return!t||!i||"ul"!=t.name&&"ol"!=t.name||t.name!=i.name||t.getAttribute("class")!==i.getAttribute("class")?null:e.mergeContainers(e.createPositionAfter(t))}function Gf(e){return e.getLastMatchingPosition(e=>e.item.is("uiElement"))}function Kf(e,t){const i=!!t.sameIndent,n=!!t.smallerIndent,o=t.listIndent;let r=e;for(;r&&"listItem"==r.name;){const e=r.getAttribute("listIndent");if(i&&o==e||n&&o>e)return r;r="forward"===t.direction?r.nextSibling:r.previousSibling}return null}function Qf(e,t,i,n){e.ui.componentFactory.add(t,o=>{const r=e.commands.get(t),s=new td(o);return s.set({label:i,icon:n,tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),s.on("execute",()=>{e.execute(t),e.editing.view.focus()}),s})}function Jf(){const e=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||e?0:no.call(this)}function Zf(e){return(t,i,n)=>{const o=n.consumable;if(!o.test(i.item,"insert")||!o.test(i.item,"attribute:listType")||!o.test(i.item,"attribute:listIndent"))return;o.consume(i.item,"insert"),o.consume(i.item,"attribute:listType"),o.consume(i.item,"attribute:listIndent");const r=i.item;$f(r,qf(r,n),n,e)}}function Xf(e,t,i){if(!i.consumable.consume(t.item,"attribute:listType"))return;const n=i.mapper.toViewElement(t.item),o=i.writer;o.breakContainer(o.createPositionBefore(n)),o.breakContainer(o.createPositionAfter(n));const r=n.parent,s="numbered"==t.attributeNewValue?"ol":"ul";o.rename(s,r)}function ep(e,t,i){const n=i.mapper.toViewElement(t.item).parent,o=i.writer;Yf(o,n,n.nextSibling),Yf(o,n.previousSibling,n);for(const e of t.item.getChildren())i.consumable.consume(e,"insert")}function tp(e,t,i){if("listItem"!=t.item.name){let e=i.mapper.toViewPosition(t.range.start);const n=i.writer,o=[];for(;("ul"==e.parent.name||"ol"==e.parent.name)&&(e=n.breakContainer(e),"li"==e.parent.name);){const t=e,i=n.createPositionAt(e.parent,"end");if(!t.isEqual(i)){const e=n.remove(n.createRange(t,i));o.push(e)}e=n.createPositionAfter(e.parent)}if(o.length>0){for(let t=0;t<o.length;t++){const i=e.nodeBefore;if(e=n.insert(e,o[t]).end,t>0){const t=Yf(n,i,i.nextSibling);t&&t.parent==i&&e.offset--}}Yf(n,e.nodeBefore,e.nodeAfter)}}}function ip(e,t,i){const n=i.mapper.toViewPosition(t.position),o=n.nodeBefore,r=n.nodeAfter;Yf(i.writer,o,r)}function np(e,t,i){if(i.consumable.consume(t.viewItem,{name:!0})){const e=i.writer,n=e.createElement("listItem"),o=function(e){let t=0,i=e.parent;for(;i;){if(i.is("element","li"))t++;else{const e=i.previousSibling;e&&e.is("element","li")&&t++}i=i.parent}return t}(t.viewItem);e.setAttribute("listIndent",o,n);const r=t.viewItem.parent&&"ol"==t.viewItem.parent.name?"numbered":"bulleted";if(e.setAttribute("listType",r,n),!i.safeInsert(n,t.modelCursor))return;const s=function(e,t,i){const{writer:n,schema:o}=i;let r=n.createPositionAfter(e);for(const s of t)if("ul"==s.name||"ol"==s.name)r=i.convertItem(s,r).modelCursor;else{const t=i.convertItem(s,n.createPositionAt(e,"end")),a=t.modelRange.start.nodeAfter;a&&a.is("element")&&!o.checkChild(e,a.name)&&(e=t.modelCursor.parent.is("element","listItem")?t.modelCursor.parent:cp(t.modelCursor),r=n.createPositionAfter(e))}return r}(n,t.viewItem.getChildren(),i);t.modelRange=e.createRange(t.modelCursor,s),i.updateConversionResult(n,t)}}function op(e,t,i){if(i.consumable.test(t.viewItem,{name:!0})){const e=Array.from(t.viewItem.getChildren());for(const t of e){!(t.is("element","li")||dp(t))&&t._remove()}}}function rp(e,t,i){if(i.consumable.test(t.viewItem,{name:!0})){if(0===t.viewItem.childCount)return;const e=[...t.viewItem.getChildren()];let i=!1;for(const t of e)i&&!dp(t)&&t._remove(),dp(t)&&(i=!0)}}function sp(e){return(t,i)=>{if(i.isPhantom)return;const n=i.modelPosition.nodeBefore;if(n&&n.is("element","listItem")){const t=i.mapper.toViewElement(n),o=t.getAncestors().find(dp),r=e.createPositionAt(t,0).getWalker();for(const e of r){if("elementStart"==e.type&&e.item.is("element","li")){i.viewPosition=e.previousPosition;break}if("elementEnd"==e.type&&e.item==o){i.viewPosition=e.nextPosition;break}}}}}function ap(e,[t,i]){let n,o=t.is("documentFragment")?t.getChild(0):t;if(n=i?this.createSelection(i):this.document.selection,o&&o.is("element","listItem")){const e=n.getFirstPosition();let t=null;if(e.parent.is("element","listItem")?t=e.parent:e.nodeBefore&&e.nodeBefore.is("element","listItem")&&(t=e.nodeBefore),t){const e=t.getAttribute("listIndent");if(e>0)for(;o&&o.is("element","listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+e),o=o.nextSibling}}}function cp(e){const t=new Js({startPosition:e});let i;do{i=t.next()}while(!i.value.item.is("element","listItem"));return i.value.item}function lp(e,t,i,n,o,r){const s=Kf(t.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:e,foo:"b"}),a=o.mapper,c=o.writer,l=s?s.getAttribute("listIndent"):null;let d;if(s)if(l==e){const e=a.toViewElement(s).parent;d=c.createPositionAfter(e)}else{const e=r.createPositionAt(s,"end");d=a.toViewPosition(e)}else d=i;d=Gf(d);for(const e of[...n.getChildren()])dp(e)&&(d=c.move(c.createRangeOn(e),d).end,Yf(c,e,e.nextSibling),Yf(c,e.previousSibling,e))}function dp(e){return e.is("element","ol")||e.is("element","ul")}class hp extends Qe{static get pluginName(){return"ListEditing"}static get requires(){return[Ch,Ih]}init(){const e=this.editor;e.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const t=e.data,i=e.editing;var n;e.model.document.registerPostFixer(t=>function(e,t){const i=e.document.differ.getChanges(),n=new Map;let o=!1;for(const n of i)if("insert"==n.type&&"listItem"==n.name)r(n.position);else if("insert"==n.type&&"listItem"!=n.name){if("$text"!=n.name){const i=n.position.nodeAfter;i.hasAttribute("listIndent")&&(t.removeAttribute("listIndent",i),o=!0),i.hasAttribute("listType")&&(t.removeAttribute("listType",i),o=!0),i.hasAttribute("listStyle")&&(t.removeAttribute("listStyle",i),o=!0);for(const t of Array.from(e.createRangeIn(i)).filter(e=>e.item.is("element","listItem")))r(t.previousPosition)}r(n.position.getShiftedBy(n.length))}else"remove"==n.type&&"listItem"==n.name?r(n.position):("attribute"==n.type&&"listIndent"==n.attributeKey||"attribute"==n.type&&"listType"==n.attributeKey)&&r(n.range.start);for(const e of n.values())s(e),a(e);return o;function r(e){const t=e.nodeBefore;if(t&&t.is("element","listItem")){let e=t;if(n.has(e))return;for(let t=e.previousSibling;t&&t.is("element","listItem");t=e.previousSibling)if(e=t,n.has(e))return;n.set(t,e)}else{const t=e.nodeAfter;t&&t.is("element","listItem")&&n.set(t,t)}}function s(e){let i=0,n=null;for(;e&&e.is("element","listItem");){const r=e.getAttribute("listIndent");if(r>i){let s;null===n?(n=r-i,s=i):(n>r&&(n=r),s=r-n),t.setAttribute("listIndent",s,e),o=!0}else n=null,i=e.getAttribute("listIndent")+1;e=e.nextSibling}}function a(e){let i=[],n=null;for(;e&&e.is("element","listItem");){const r=e.getAttribute("listIndent");if(n&&n.getAttribute("listIndent")>r&&(i=i.slice(0,r+1)),0!=r)if(i[r]){const n=i[r];e.getAttribute("listType")!=n&&(t.setAttribute("listType",n,e),o=!0)}else i[r]=e.getAttribute("listType");n=e,e=e.nextSibling}}}(e.model,t)),i.mapper.registerViewToModelLength("li",up),t.mapper.registerViewToModelLength("li",up),i.mapper.on("modelToViewPosition",sp(i.view)),i.mapper.on("viewToModelPosition",(n=e.model,(e,t)=>{const i=t.viewPosition,o=i.parent,r=t.mapper;if("ul"==o.name||"ol"==o.name){if(i.isAtEnd){const e=r.toModelElement(i.nodeBefore),o=r.getModelLength(i.nodeBefore);t.modelPosition=n.createPositionBefore(e).getShiftedBy(o)}else{const e=r.toModelElement(i.nodeAfter);t.modelPosition=n.createPositionBefore(e)}e.stop()}else if("li"==o.name&&i.nodeBefore&&("ul"==i.nodeBefore.name||"ol"==i.nodeBefore.name)){const s=r.toModelElement(o);let a=1,c=i.nodeBefore;for(;c&&dp(c);)a+=r.getModelLength(c),c=c.previousSibling;t.modelPosition=n.createPositionBefore(s).getShiftedBy(a),e.stop()}})),t.mapper.on("modelToViewPosition",sp(i.view)),e.conversion.for("editingDowncast").add(t=>{t.on("insert",tp,{priority:"high"}),t.on("insert:listItem",Zf(e.model)),t.on("attribute:listType:listItem",Xf,{priority:"high"}),t.on("attribute:listType:listItem",ep,{priority:"low"}),t.on("attribute:listIndent:listItem",function(e){return(t,i,n)=>{if(!n.consumable.consume(i.item,"attribute:listIndent"))return;const o=n.mapper.toViewElement(i.item),r=n.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s);r.remove(c),a&&a.nextSibling&&Yf(r,a,a.nextSibling),lp(i.attributeOldValue+1,i.range.start,c.start,o,n,e),$f(i.item,o,n,e);for(const e of i.item.getChildren())n.consumable.consume(e,"insert")}}(e.model)),t.on("remove:listItem",function(e){return(t,i,n)=>{const o=n.mapper.toViewPosition(i.position).getLastMatchingPosition(e=>!e.item.is("element","li")).nodeAfter,r=n.writer;r.breakContainer(r.createPositionBefore(o)),r.breakContainer(r.createPositionAfter(o));const s=o.parent,a=s.previousSibling,c=r.createRangeOn(s),l=r.remove(c);a&&a.nextSibling&&Yf(r,a,a.nextSibling);lp(n.mapper.toModelElement(o).getAttribute("listIndent")+1,i.position,c.start,o,n,e);for(const e of r.createRangeIn(l).getItems())n.mapper.unbindViewElement(e);t.stop()}}(e.model)),t.on("remove",ip,{priority:"low"})}),e.conversion.for("dataDowncast").add(t=>{t.on("insert",tp,{priority:"high"}),t.on("insert:listItem",Zf(e.model))}),e.conversion.for("upcast").add(e=>{e.on("element:ul",op,{priority:"high"}),e.on("element:ol",op,{priority:"high"}),e.on("element:li",rp,{priority:"high"}),e.on("element:li",np)}),e.model.on("insertContent",ap,{priority:"high"}),e.commands.add("numberedList",new Ff(e,"numbered")),e.commands.add("bulletedList",new Ff(e,"bulleted")),e.commands.add("indentList",new Wf(e,"forward")),e.commands.add("outdentList",new Wf(e,"backward"));const o=i.view.document;this.listenTo(o,"enter",(e,t)=>{const i=this.editor.model.document,n=i.selection.getLastPosition().parent;i.selection.isCollapsed&&"listItem"==n.name&&n.isEmpty&&(this.editor.execute("outdentList"),t.preventDefault(),e.stop())},{context:"li"}),this.listenTo(o,"delete",(e,t)=>{if("backward"!==t.direction)return;const i=this.editor.model.document.selection;if(!i.isCollapsed)return;const n=i.getFirstPosition();if(!n.isAtStart)return;const o=n.parent;if("listItem"!==o.name)return;o.previousSibling&&"listItem"===o.previousSibling.name||(this.editor.execute("outdentList"),t.preventDefault(),e.stop())},{context:"li"});const r=e=>(t,i)=>{this.editor.commands.get(e).isEnabled&&(this.editor.execute(e),i())};e.keystrokes.set("Tab",r("indentList")),e.keystrokes.set("Shift+Tab",r("outdentList"))}afterInit(){const e=this.editor.commands,t=e.get("indent"),i=e.get("outdent");t&&t.registerChildCommand(e.get("indentList")),i&&i.registerChildCommand(e.get("outdentList"))}}function up(e){let t=1;for(const i of e.getChildren())if("ul"==i.name||"ol"==i.name)for(const e of i.getChildren())t+=up(e);return t}class gp extends Qe{static get pluginName(){return"ListUI"}init(){const e=this.editor.t;Qf(this.editor,"numberedList",e("Numbered List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>'),Qf(this.editor,"bulletedList",e("Bulleted List"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>')}}function mp(e,t){return e=>{e.on("attribute:url:media",i)};function i(i,n,o){if(!o.consumable.consume(n.item,i.name))return;const r=n.attributeNewValue,s=o.writer,a=o.mapper.toViewElement(n.item),c=[...a.getChildren()].find(e=>e.getCustomProperty("media-content"));s.remove(c);const l=e.getMediaViewElement(s,r,t);s.insert(s.createPositionAt(a,0),l)}}function fp(e,t,i,n){const o=e.createContainerElement("figure",{class:"media"});return e.insert(e.createPositionAt(o,0),t.getMediaViewElement(e,i,n)),o}function pp(e){const t=e.getSelectedElement();return t&&t.is("element","media")?t:null}function bp(e,t,i){e.change(n=>{const o=n.createElement("media",{url:t});e.insertContent(o,i),n.setSelection(o,"on")})}class wp extends Ze{refresh(){const e=this.editor.model,t=e.document.selection,i=pp(t);this.value=i?i.getAttribute("url"):null,this.isEnabled=function(e){const t=e.getSelectedElement();return!!t&&"media"===t.name}(t)||function(e,t){let i=Fh(e,t).start.parent;i.isEmpty&&!t.schema.isLimit(i)&&(i=i.parent);return t.schema.checkChild(i,"media")}(t,e)}execute(e){const t=this.editor.model,i=t.document.selection,n=pp(i);n?t.change(t=>{t.setAttribute("url",e,n)}):bp(t,e,Fh(i,t))}}class kp{constructor(e,t){const i=t.providers,n=t.extraProviders||[],o=new Set(t.removeProviders),r=i.concat(n).filter(e=>{const t=e.name;return t?!o.has(t):(Object(c.b)("media-embed-no-provider-name",{provider:e}),!1)});this.locale=e,this.providerDefinitions=r}hasMedia(e){return!!this._getMedia(e)}getMediaViewElement(e,t,i){return this._getMedia(t).getViewElement(e,i)}_getMedia(e){if(!e)return new _p(this.locale);e=e.trim();for(const t of this.providerDefinitions){const i=t.html,n=en(t.url);for(const t of n){const n=this._getUrlMatches(e,t);if(n)return new _p(this.locale,e,n,i)}}return null}_getUrlMatches(e,t){let i=e.match(t);if(i)return i;let n=e.replace(/^https?:\/\//,"");return i=n.match(t),i||(n=n.replace(/^www\./,""),i=n.match(t),i||null)}}class _p{constructor(e,t,i,n){this.url=this._getValidUrl(t),this._t=e.t,this._match=i,this._previewRenderer=n}getViewElement(e,t){const i={};let n;if(t.renderForEditingView||t.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(i["data-oembed-url"]=this.url),t.renderForEditingView&&(i.class="ck-media__wrapper");const o=this._getPreviewHtml(t);n=e.createRawElement("div",i,(e,t)=>{t.setContentOf(e,o)})}else this.url&&(i.url=this.url),n=e.createEmptyElement(t.elementName,i);return e.setCustomProperty("media-content",!0,n),n}_getPreviewHtml(e){return this._previewRenderer?this._previewRenderer(this._match):this.url&&e.renderForEditingView?this._getPlaceholderHtml():""}_getPlaceholderHtml(){const e=new ed,t=new Xl;e.text=this._t("Open media in new tab"),t.content='<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>',t.viewBox="0 0 64 42";return new Rl({tag:"div",attributes:{class:"ck ck-reset_all ck-media__placeholder"},children:[{tag:"div",attributes:{class:"ck-media__placeholder__icon"},children:[t]},{tag:"a",attributes:{class:"ck-media__placeholder__url",target:"_blank",rel:"noopener noreferrer",href:this.url},children:[{tag:"span",attributes:{class:"ck-media__placeholder__url__text"},children:[this.url]},e]}]}).render().outerHTML}_getValidUrl(e){return e?e.match(/^https?/)?e:"https://"+e:null}}i(96);class vp extends Qe{static get pluginName(){return"MediaEmbedEditing"}constructor(e){super(e),e.config.define("mediaEmbed",{elementName:"oembed",providers:[{name:"dailymotion",url:/^dailymotion\.com\/video\/(\w+)/,html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`},{name:"spotify",url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`},{name:"youtube",url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)/,/^youtube\.com\/embed\/([\w-]+)/,/^youtu\.be\/([\w-]+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`},{name:"vimeo",url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`},{name:"instagram",url:/^instagram\.com\/p\/(\w+)/},{name:"twitter",url:/^twitter\.com/},{name:"googleMaps",url:[/^google\.com\/maps/,/^goo\.gl\/maps/,/^maps\.google\.com/,/^maps\.app\.goo\.gl/]},{name:"flickr",url:/^flickr\.com/},{name:"facebook",url:/^facebook\.com/}]}),this.registry=new kp(e.locale,e.config.get("mediaEmbed"))}init(){const e=this.editor,t=e.model.schema,i=e.t,n=e.conversion,o=e.config.get("mediaEmbed.previewsInData"),r=e.config.get("mediaEmbed.elementName"),s=this.registry;e.commands.add("mediaEmbed",new wp(e)),t.register("media",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["url"]}),n.for("dataDowncast").elementToElement({model:"media",view:(e,{writer:t})=>{const i=e.getAttribute("url");return fp(t,s,i,{elementName:r,renderMediaPreview:i&&o})}}),n.for("dataDowncast").add(mp(s,{elementName:r,renderMediaPreview:o})),n.for("editingDowncast").elementToElement({model:"media",view:(e,{writer:t})=>{const n=e.getAttribute("url");return function(e,t,i){return t.setCustomProperty("media",!0,e),Dh(e,t,{label:i})}(fp(t,s,n,{elementName:r,renderForEditingView:!0}),t,i("media widget"))}}),n.for("editingDowncast").add(mp(s,{elementName:r,renderForEditingView:!0})),n.for("upcast").elementToElement({view:e=>["oembed",r].includes(e.name)&&e.getAttribute("url")?{name:!0}:null,model:(e,{writer:t})=>{const i=e.getAttribute("url");if(s.hasMedia(i))return t.createElement("media",{url:i})}}).elementToElement({view:{name:"div",attributes:{"data-oembed-url":!0}},model:(e,{writer:t})=>{const i=e.getAttribute("data-oembed-url");if(s.hasMedia(i))return t.createElement("media",{url:i})}}).add(e=>{e.on("element:figure",(function(e,t,i){if(!i.consumable.test(t.viewItem,{name:!0,classes:"media"}))return;const{modelRange:n,modelCursor:o}=i.convertChildren(t.viewItem,t.modelCursor);t.modelRange=n,t.modelCursor=o;if(!Ms(n.getItems()))return;i.consumable.consume(t.viewItem,{name:!0,classes:"media"})}))})}}const yp=/^(?:http(s)?:\/\/)?[\w-]+\.[\w-.~:/?#[\]@!$&'()*+,;=%]+$/;class xp extends Qe{static get requires(){return[cu,Ih,tg]}static get pluginName(){return"AutoMediaEmbed"}constructor(e){super(e),this._timeoutId=null,this._positionToInsert=null}init(){const e=this.editor,t=e.model.document;this.listenTo(e.plugins.get("ClipboardPipeline"),"inputTransformation",()=>{const e=t.selection.getFirstRange(),i=Xc.fromPosition(e.start);i.stickiness="toPrevious";const n=Xc.fromPosition(e.end);n.stickiness="toNext",t.once("change:data",()=>{this._embedMediaBetweenPositions(i,n),i.detach(),n.detach()},{priority:"high"})}),e.commands.get("undo").on("execute",()=>{this._timeoutId&&(_r.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)},{priority:"high"})}_embedMediaBetweenPositions(e,t){const i=this.editor,n=i.plugins.get(vp).registry,o=new pa(e,t),r=o.getWalker({ignoreElementEnd:!0});let s="";for(const e of r)e.item.is("$textProxy")&&(s+=e.item.data);if(s=s.trim(),!s.match(yp))return void o.detach();if(!n.hasMedia(s))return void o.detach();i.commands.get("mediaEmbed").isEnabled?(this._positionToInsert=Xc.fromPosition(e),this._timeoutId=_r.window.setTimeout(()=>{i.model.change(e=>{let t;this._timeoutId=null,e.remove(o),o.detach(),"$graveyard"!==this._positionToInsert.root.rootName&&(t=this._positionToInsert),bp(i.model,s,t),this._positionToInsert.detach(),this._positionToInsert=null}),i.plugins.get("Delete").requestUndoOnBackspace()},100)):o.detach()}}i(98);class Ap extends Nl{constructor(e,t){super(t);const i=t.t;this.focusTracker=new Ns,this.keystrokes=new Rs,this.set("mediaURLInputValue",""),this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(i("Save"),El.check,"ck-button-save"),this.saveButtonView.type="submit",this.saveButtonView.bind("isEnabled").to(this,"mediaURLInputValue",e=>!!e),this.cancelButtonView=this._createButton(i("Cancel"),El.cancel,"ck-button-cancel","cancel"),this._focusables=new Ml,this._focusCycler=new nd({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this._validators=e,this.setTemplate({tag:"form",attributes:{class:["ck","ck-media-form","ck-responsive-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]}),Il(this)}render(){super.render(),Pl({view:this});[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(e=>{this._focusables.add(e),this.focusTracker.add(e.element)}),this.keystrokes.listenTo(this.element);const e=e=>e.stopPropagation();this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e),this.listenTo(this.urlInputView.element,"selectstart",(e,t)=>{t.stopPropagation()},{priority:"high"})}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.fieldView.element.value.trim()}set url(e){this.urlInputView.fieldView.element.value=e.trim()}isValid(){this.resetFormStatus();for(const e of this._validators){const t=e(this);if(t)return this.urlInputView.errorText=t,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){const e=this.locale.t,t=new Nd(this.locale,Rd),i=t.fieldView;return this._urlInputViewInfoDefault=e("Paste the media URL in the input."),this._urlInputViewInfoTip=e("Tip: Paste the URL into the content to embed faster."),t.label=e("Media URL"),t.infoText=this._urlInputViewInfoDefault,i.on("input",()=>{t.infoText=i.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault,this.mediaURLInputValue=i.element.value.trim()}),t}_createButton(e,t,i,n){const o=new td(this.locale);return o.set({label:e,icon:t,tooltip:!0}),o.extendTemplate({attributes:{class:i}}),n&&o.delegate("execute").to(this,n),o}}class Cp extends Qe{static get requires(){return[vp]}static get pluginName(){return"MediaEmbedUI"}init(){const e=this.editor,t=e.commands.get("mediaEmbed"),i=e.plugins.get(vp).registry;e.ui.componentFactory.add("mediaEmbed",n=>{const o=xd(n),r=new Ap(function(e,t){return[t=>{if(!t.url.length)return e("The URL must not be empty.")},i=>{if(!t.hasMedia(i.url))return e("This media URL is not supported.")}]}(e.t,i),e.locale);return this._setUpDropdown(o,r,t,e),this._setUpForm(o,r,t),o})}_setUpDropdown(e,t,i){const n=this.editor,o=n.t,r=e.buttonView;function s(){n.editing.view.focus(),e.isOpen=!1}e.bind("isEnabled").to(i),e.panelView.children.add(t),r.set({label:o("Insert media"),icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z"/></svg>',tooltip:!0}),r.on("open",()=>{t.disableCssTransitions(),t.url=i.value||"",t.urlInputView.fieldView.select(),t.focus(),t.enableCssTransitions()},{priority:"low"}),e.on("submit",()=>{t.isValid()&&(n.execute("mediaEmbed",t.url),s())}),e.on("change:isOpen",()=>t.resetFormStatus()),e.on("cancel",()=>s())}_setUpForm(e,t,i){t.delegate("submit","cancel").to(e),t.urlInputView.bind("value").to(i,"value"),t.urlInputView.bind("isReadOnly").to(i,"isEnabled",e=>!e)}}i(100);function Tp(e,t){if(!e.childCount)return;const i=new gh(e.document),n=function(e,t){const i=t.createRangeIn(e),n=new mn({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),o=[];for(const e of i)if("elementStart"===e.type&&n.match(e.item)){const t=Ip(e.item);o.push({element:e.item,id:t.id,order:t.order,indent:t.indent})}return o}(e,i);if(!n.length)return;let o=null,r=1;n.forEach((e,s)=>{const a=function(e,t){if(!e)return!0;if(e.id!==t.id)return t.indent-e.indent!=1;const i=t.element.previousSibling;if(!i)return!0;return n=i,!(n.is("element","ol")||n.is("element","ul"));var n}(n[s-1],e),c=a?null:n[s-1],l=(h=e,(d=c)?h.indent-d.indent:h.indent-1);var d,h;if(a&&(o=null,r=1),!o||0!==l){const n=function(e,t){const i=new RegExp(`@list l${e.id}:level${e.indent}\\s*({[^}]*)`,"gi"),n=/mso-level-number-format:([^;]{0,100});/gi,o=i.exec(t);let r="decimal",s="ol";if(o&&o[1]){const t=n.exec(o[1]);if(t&&t[1]&&(r=t[1].trim(),s="bullet"!==r&&"image"!==r?"ol":"ul"),"bullet"===r){const t=function(e){const t=function(e){if(e.getChild(0).is("$text"))return null;for(const t of e.getChildren()){if(!t.is("element","span"))continue;const e=t.getChild(0);return e.is("$text")?e:e.getChild(0)}}(e);if(!t)return null;const i=t._data;if("o"===i)return"circle";if("·"===i)return"disc";if("§"===i)return"square";return null}(e.element);t&&(r=t)}}return{type:s,style:Ep(r)}}(e,t);if(o){if(e.indent>r){const e=o.getChild(o.childCount-1),t=e.getChild(e.childCount-1);o=Sp(n,t,i),r+=1}else if(e.indent<r){const t=r-e.indent;o=function(e,t){const i=e.getAncestors({parentFirst:!0});let n=null,o=0;for(const e of i)if("ul"!==e.name&&"ol"!==e.name||o++,o===t){n=e;break}return n}(o,t),r=parseInt(e.indent)}}else o=Sp(n,e.element,i);e.indent<=r&&(o.is("element",n.type)||(o=i.rename(n.type,o)))}const u=function(e,t){return function(e,t){const i=new mn({name:"span",styles:{"mso-list":"Ignore"}}),n=t.createRangeIn(e);for(const e of n)"elementStart"===e.type&&i.match(e.item)&&t.remove(e.item)}(e,t),t.rename("li",e)}(e.element,i);i.appendChild(u,o)})}function Ep(e){switch(e){case"arabic-leading-zero":return"decimal-leading-zero";case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return e;default:return null}}function Sp(e,t,i){const n=t.parent,o=i.createElement(e.type),r=n.getChildIndex(t)+1;return i.insertChild(r,o,n),e.style&&i.setStyle("list-style-type",e.style,o),o}function Ip(e){const t={},i=e.getStyle("mso-list");if(i){const e=i.match(/(^|\s{1,100})l(\d+)/i),n=i.match(/\s{0,100}lfo(\d+)/i),o=i.match(/\s{0,100}level(\d+)/i);e&&n&&o&&(t.id=e[2],t.order=n[1],t.indent=o[1])}return t}const Pp=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class Mp{constructor(e){this.document=e}isActive(e){return Pp.test(e)}execute(e){const t=new gh(this.document),{body:i}=e._parsedData;!function(e,t){for(const i of e.getChildren())if(i.is("element","b")&&"normal"===i.getStyle("font-weight")){const n=e.getChildIndex(i);t.remove(i),t.insertChild(n,i.getChildren(),e)}}(i,t),function(e,t){for(const i of t.createRangeIn(e)){const e=i.item;if(e.is("element","li")){const i=e.getChild(0);i&&i.is("element","p")&&t.unwrapElement(i)}}}(i,t),e.content=i}}function Np(e,t){if(!e.childCount)return;const i=new gh;!function(e,t,i){const n=i.createRangeIn(t),o=new mn({name:"img"}),r=[];for(const t of n)if(o.match(t.item)){const i=t.item,n=i.getAttribute("v:shapes")?i.getAttribute("v:shapes").split(" "):[];n.length&&n.every(t=>e.indexOf(t)>-1)?r.push(i):i.getAttribute("src")||r.push(i)}for(const e of r)i.remove(e)}(function(e,t){const i=t.createRangeIn(e),n=new mn({name:/v:(.+)/}),o=[];for(const e of i){if("elementStart"!=e.type)continue;const t=e.item,i=t.previousSibling&&t.previousSibling.name||null;n.match(t)&&t.getAttribute("o:gfxdata")&&"v:shapetype"!==i&&o.push(e.item.getAttribute("id"))}return o}(e,i),e,i),function(e,t){const i=t.createRangeIn(e),n=new mn({name:/v:(.+)/}),o=[];for(const e of i)"elementStart"==e.type&&n.match(e.item)&&o.push(e.item);for(const e of o)t.remove(e)}(e,i);const n=function(e,t){const i=t.createRangeIn(e),n=new mn({name:"img"}),o=[];for(const e of i)n.match(e.item)&&e.item.getAttribute("src").startsWith("file://")&&o.push(e.item);return o}(e,i);n.length&&function(e,t,i){if(e.length===t.length)for(let o=0;o<e.length;o++){const r=`data:${t[o].type};base64,${n=t[o].hex,btoa(n.match(/\w{2}/g).map(e=>String.fromCharCode(parseInt(e,16))).join(""))}`;i.setAttribute("src",r,e[o])}var n}(n,function(e){if(!e)return[];const t=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,i=new RegExp("(?:("+t.source+"))([\\da-fA-F\\s]+)\\}","g"),n=e.match(i),o=[];if(n)for(const e of n){let i=!1;e.includes("\\pngblip")?i="image/png":e.includes("\\jpegblip")&&(i="image/jpeg"),i&&o.push({hex:e.replace(t,"").replace(/[^\da-fA-F]/g,""),type:i})}return o}(t),i)}const Rp=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,Op=/xmlns:o="urn:schemas-microsoft-com/i;class Dp{constructor(e){this.document=e}isActive(e){return Rp.test(e)||Op.test(e)}execute(e){const{body:t,stylesString:i}=e._parsedData;Tp(t,i),Np(t,e.dataTransfer.getData("text/rtf")),e.content=t}}function zp(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(e,t)=>1===t.length?" ":Array(t.length+1).join("  ").substr(0,t.length))}function Lp(e,t){const i=new DOMParser,n=function(e){return zp(zp(e)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(e){const t=e.indexOf("</body>");if(t<0)return e;const i=e.indexOf("</html>",t+"</body>".length);return e.substring(0,t+"</body>".length)+(i>=0?e.substring(i):"")}(e=e.replace(/<!--\[if gte vml 1]>/g,""))),o=i.parseFromString(n,"text/html");!function(e){e.querySelectorAll("span[style*=spacerun]").forEach(e=>{const t=e.innerText.length||0;e.innerHTML=Array(t+1).join("  ").substr(0,t)})}(o);const r=o.body.innerHTML,s=function(e,t){const i=new yo(t),n=new Tr(i,{renderingMode:"data"}),o=e.createDocumentFragment(),r=e.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);return n.domToView(o,{skipComments:!0})}(o,t),a=function(e){const t=[],i=[],n=Array.from(e.getElementsByTagName("style"));for(const e of n)e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length&&(t.push(e.sheet),i.push(e.innerHTML));return{styles:t,stylesString:i.join(" ")}}(o);return{body:s,bodyString:r,styles:a.styles,stylesString:a.stylesString}}function Vp(e,t,i,n,o=1){t>o?n.setAttribute(e,t,i):n.removeAttribute(e,i)}function jp(e,t,i={}){const n=e.createElement("tableCell",i);return e.insertElement("paragraph",n),e.insert(n,t),n}function Bp(e,t){const i=t.parent.parent,n=parseInt(i.getAttribute("headingColumns")||0),{column:o}=e.getCellLocation(t);return!!n&&o<n}function Fp(){return e=>{e.on("element:table",(e,t,i)=>{const n=t.viewItem;if(!i.consumable.test(n,{name:!0}))return;const{rows:o,headingRows:r,headingColumns:s}=function(e){const t={headingRows:0,headingColumns:0},i=[],n=[];let o;for(const r of Array.from(e.getChildren()))if("tbody"===r.name||"thead"===r.name||"tfoot"===r.name){"thead"!==r.name||o||(o=r);const e=Array.from(r.getChildren()).filter(e=>e.is("element","tr"));for(const r of e)if("thead"===r.parent.name&&r.parent===o)t.headingRows++,i.push(r);else{n.push(r);const e=Up(r);e>t.headingColumns&&(t.headingColumns=e)}}return t.rows=[...i,...n],t}(n),a={};s&&(a.headingColumns=s),r&&(a.headingRows=r);const c=i.writer.createElement("table",a);if(i.safeInsert(c,t.modelCursor)){if(i.consumable.consume(n,{name:!0}),o.forEach(e=>i.convertItem(e,i.writer.createPositionAt(c,"end"))),i.convertChildren(n,i.writer.createPositionAt(c,"end")),c.isEmpty){const e=i.writer.createElement("tableRow");i.writer.insert(e,i.writer.createPositionAt(c,"end")),jp(i.writer,i.writer.createPositionAt(e,"end"))}i.updateConversionResult(c,t)}})}}function Hp(e){return t=>{t.on("element:"+e,(e,t,i)=>{if(t.modelRange&&t.viewItem.isEmpty){const e=t.modelRange.start.nodeAfter,n=i.writer.createPositionAt(e,0);i.writer.insertElement("paragraph",n)}},{priority:"low"})}}function Up(e){let t=0,i=0;const n=Array.from(e.getChildren()).filter(e=>"th"===e.name||"td"===e.name);for(;i<n.length&&"th"===n[i].name;){const e=n[i];t+=parseInt(e.getAttribute("colspan")||1),i++}return t}class Wp{constructor(e,t={}){this._table=e,this._startRow=void 0!==t.row?t.row:t.startRow||0,this._endRow=void 0!==t.row?t.row:t.endRow,this._startColumn=void 0!==t.column?t.column:t.startColumn||0,this._endColumn=void 0!==t.column?t.column:t.endColumn,this._includeAllSlots=!!t.includeAllSlots,this._skipRows=new Set,this._row=0,this._rowIndex=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){const e=this._table.getChild(this._rowIndex);if(!e||this._isOverEndRow())return{done:!0};if(!e.is("element","tableRow"))return this._rowIndex++,this.next();if(this._isOverEndColumn())return this._advanceToNextRow();let t=null;const i=this._getSpanned();if(i)this._includeAllSlots&&!this._shouldSkipSlot()&&(t=this._formatOutValue(i.cell,i.row,i.column));else{const i=e.getChild(this._cellIndex);if(!i)return this._advanceToNextRow();const n=parseInt(i.getAttribute("colspan")||1),o=parseInt(i.getAttribute("rowspan")||1);(n>1||o>1)&&this._recordSpans(i,o,n),this._shouldSkipSlot()||(t=this._formatOutValue(i)),this._nextCellAtColumn=this._column+n}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,t||this.next()}skipRow(e){this._skipRows.add(e)}_advanceToNextRow(){return this._row++,this._rowIndex++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return void 0!==this._endRow&&this._row>this._endRow}_isOverEndColumn(){return void 0!==this._endColumn&&this._column>this._endColumn}_formatOutValue(e,t=this._row,i=this._column){return{done:!1,value:new qp(this,e,t,i)}}_shouldSkipSlot(){const e=this._skipRows.has(this._row),t=this._row<this._startRow,i=this._column<this._startColumn,n=void 0!==this._endColumn&&this._column>this._endColumn;return e||t||i||n}_getSpanned(){const e=this._spannedCells.get(this._row);return e&&e.get(this._column)||null}_recordSpans(e,t,i){const n={cell:e,row:this._row,column:this._column};for(let e=this._row;e<this._row+t;e++)for(let t=this._column;t<this._column+i;t++)e==this._row&&t==this._column||this._markSpannedCell(e,t,n)}_markSpannedCell(e,t,i){this._spannedCells.has(e)||this._spannedCells.set(e,new Map);this._spannedCells.get(e).set(t,i)}}class qp{constructor(e,t,i,n){this.cell=t,this.row=e._row,this.column=e._column,this.cellAnchorRow=i,this.cellAnchorColumn=n,this._cellIndex=e._cellIndex,this._rowIndex=e._rowIndex,this._table=e._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute("colspan")||1)}get cellHeight(){return parseInt(this.cell.getAttribute("rowspan")||1)}get rowIndex(){return this._rowIndex}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function $p(e={}){return t=>t.on("insert:table",(t,i,n)=>{const o=i.item;if(!n.consumable.consume(o,"insert"))return;n.consumable.consume(o,"attribute:headingRows:table"),n.consumable.consume(o,"attribute:headingColumns:table");const r=e&&e.asWidget,s=n.writer.createContainerElement("figure",{class:"table"}),a=n.writer.createContainerElement("table");let c;var l,d;n.writer.insert(n.writer.createPositionAt(s,0),a),r&&(l=s,(d=n.writer).setCustomProperty("table",!0,l),c=Dh(l,d,{hasSelectionHandle:!0}));const h=new Wp(o),u={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},g=new Map;for(const t of h){const{row:i,cell:r}=t,s=o.getChild(i),c=g.get(i)||Jp(a,s,i,u,n);g.set(i,c),n.consumable.consume(r,"insert");Qp(t,u,n.writer.createPositionAt(c,"end"),n,e)}for(const e of o.getChildren()){const t=e.index;e.is("element","tableRow")&&!g.has(t)&&g.set(t,Jp(a,e,t,u,n))}const m=n.mapper.toViewPosition(i.range.start);n.mapper.bindElements(o,r?c:s),n.writer.insert(m,r?c:s)})}function Yp(e,t){const{writer:i}=t;if(e.parent.is("element","tableCell"))return Gp(e)?i.createContainerElement("span",{class:"ck-table-bogus-paragraph"}):i.createContainerElement("p")}function Gp(e){return 1===e.parent.childCount&&!tb(e)}function Kp(e,t,i){const{cell:n}=e,o=Zp(e,t),r=i.mapper.toViewElement(n);r&&r.name!==o&&function(e,t,i){const n=i.writer,o=i.mapper.toViewElement(e),r=Bh(n.createEditableElement(t,o.getAttributes()),n);n.insert(n.createPositionAfter(o),r),n.move(n.createRangeIn(o),n.createPositionAt(r,0)),n.remove(n.createRangeOn(o)),i.mapper.unbindViewElement(o),i.mapper.bindElements(e,r)}(n,o,i)}function Qp(e,t,i,n,o){const r=o&&o.asWidget,s=Zp(e,t),a=r?Bh(n.writer.createEditableElement(s),n.writer):n.writer.createContainerElement(s),c=e.cell,l=c.getChild(0),d=1===c.childCount&&"paragraph"===l.name;if(n.writer.insert(i,a),n.mapper.bindElements(c,a),!r&&d&&!tb(l)){const e=c.getChild(0);n.consumable.consume(e,"insert"),n.mapper.bindElements(e,a)}}function Jp(e,t,i,n,o){o.consumable.consume(t,"insert");const r=t.isEmpty?o.writer.createEmptyElement("tr"):o.writer.createContainerElement("tr");o.mapper.bindElements(t,r);const s=n.headingRows,a=function(e,t,i){const n=Xp(e,t);return n||function(e,t,i){const n=i.writer.createContainerElement(e),o=i.writer.createPositionAt(t,"tbody"==e?"end":0);return i.writer.insert(o,n),n}(e,t,i)}(function(e,t){return e<t.headingRows?"thead":"tbody"}(i,n),e,o),c=s>0&&i>=s?i-s:i,l=o.writer.createPositionAt(a,c);return o.writer.insert(l,r),r}function Zp(e,t){const{row:i,column:n}=e,{headingColumns:o,headingRows:r}=t;if(r&&r>i)return"th";return o&&o>n?"th":"td"}function Xp(e,t){for(const i of t.getChildren())if(i.name==e)return i}function eb(e,t,i){const n=Xp(e,t);n&&0===n.childCount&&i.writer.remove(i.writer.createRangeOn(n))}function tb(e){return!![...e.getAttributeKeys()].length}class ib extends Ze{refresh(){const e=this.editor.model,t=e.document.selection,i=e.schema;this.isEnabled=function(e,t){const i=e.getFirstPosition().parent,n=i===i.root?i:i.parent;return t.checkChild(n,"table")}(t,i)}execute(e={}){const t=this.editor.model,i=t.document.selection,n=this.editor.plugins.get("TableUtils"),o=this.editor.config.get("table"),r=Fh(i,t),s=o.defaultHeadings.rows,a=o.defaultHeadings.columns;void 0===e.headingRows&&s&&(e.headingRows=s),void 0===e.headingColumns&&a&&(e.headingColumns=a),t.change(i=>{const o=n.createTable(i,e);t.insertContent(o,r),i.setSelection(i.createPositionAt(o.getNodeByPath([0,0,0]),0))})}}function nb(e){const t=[];for(const i of lb(e.getRanges())){const e=i.getContainedElement();e&&e.is("element","tableCell")&&t.push(e)}return t}function ob(e){const t=[];for(const i of e.getRanges()){const e=i.start.findAncestor("tableCell");e&&t.push(e)}return t}function rb(e){const t=nb(e);return t.length?t:ob(e)}function sb(e){return db(e.map(e=>e.parent.index))}function ab(e){const t=e[0].findAncestor("table");return db([...new Wp(t)].filter(t=>e.includes(t.cell)).map(e=>e.column))}function cb(e,t){if(e.length<2||!function(e){const t=e[0].findAncestor("table"),i=sb(e),n=parseInt(t.getAttribute("headingRows")||0);if(!ub(i,n))return!1;const o=parseInt(t.getAttribute("headingColumns")||0);return ub(ab(e),o)}(e))return!1;const i=new Set,n=new Set;let o=0;for(const r of e){const{row:e,column:s}=t.getCellLocation(r),a=parseInt(r.getAttribute("rowspan")||1),c=parseInt(r.getAttribute("colspan")||1);i.add(e),n.add(s),a>1&&i.add(e+a-1),c>1&&n.add(s+c-1),o+=a*c}return function(e,t){const i=Array.from(e.values()),n=Array.from(t.values()),o=Math.max(...i),r=Math.min(...i),s=Math.max(...n),a=Math.min(...n);return(o-r+1)*(s-a+1)}(i,n)==o}function lb(e){return Array.from(e).sort(hb)}function db(e){const t=e.sort((e,t)=>e-t);return{first:t[0],last:t[t.length-1]}}function hb(e,t){const i=e.start,n=t.start;return i.isBefore(n)?-1:1}function ub({first:e,last:t},i){return e<i===t<i}class gb extends Ze{constructor(e,t={}){super(e),this.order=t.order||"below"}refresh(){const e=!!rb(this.editor.model.document.selection).length;this.isEnabled=e}execute(){const e=this.editor,t=e.model.document.selection,i=e.plugins.get("TableUtils"),n="above"===this.order,o=rb(t),r=sb(o),s=n?r.first:r.last,a=o[0].findAncestor("table");i.insertRows(a,{at:n?s:s+1,copyStructureFromAbove:!n})}}class mb extends Ze{constructor(e,t={}){super(e),this.order=t.order||"right"}refresh(){const e=!!rb(this.editor.model.document.selection).length;this.isEnabled=e}execute(){const e=this.editor,t=e.model.document.selection,i=e.plugins.get("TableUtils"),n="left"===this.order,o=rb(t),r=ab(o),s=n?r.first:r.last,a=o[0].findAncestor("table");i.insertColumns(a,{columns:1,at:n?s:s+1})}}class fb extends Ze{constructor(e,t={}){super(e),this.direction=t.direction||"horizontally"}refresh(){const e=rb(this.editor.model.document.selection);this.isEnabled=1===e.length}execute(){const e=rb(this.editor.model.document.selection)[0],t="horizontally"===this.direction,i=this.editor.plugins.get("TableUtils");t?i.splitCellHorizontally(e,2):i.splitCellVertically(e,2)}}function pb(e,t,i){const{startRow:n,startColumn:o,endRow:r,endColumn:s}=t,a=i.createElement("table"),c=r-n+1;for(let e=0;e<c;e++)i.insertElement("tableRow",a,"end");const l=[...new Wp(e,{startRow:n,endRow:r,startColumn:o,endColumn:s,includeAllSlots:!0})];for(const{row:e,column:t,cell:c,isAnchor:d,cellAnchorRow:h,cellAnchorColumn:u}of l){const l=e-n,g=a.getChild(l);if(d){const n=i.cloneElement(c);i.append(n,g),vb(n,e,t,r,s,i)}else(h<n||u<o)&&jp(i,i.createPositionAt(g,"end"))}return function(e,t,i,n,o){const r=parseInt(t.getAttribute("headingRows")||0);if(r>0){Vp("headingRows",r-i,e,o,0)}const s=parseInt(t.getAttribute("headingColumns")||0);if(s>0){Vp("headingColumns",s-n,e,o,0)}}(a,e,n,o,i),a}function bb(e,t,i=0){const n=[],o=new Wp(e,{startRow:i,endRow:t-1});for(const e of o){const{row:i,cellHeight:o}=e,r=i+o-1;i<t&&t<=r&&n.push(e)}return n}function wb(e,t,i){const n=e.parent,o=n.parent,r=n.index,s=t-r,a={},c=parseInt(e.getAttribute("rowspan"))-s;c>1&&(a.rowspan=c);const l=parseInt(e.getAttribute("colspan")||1);l>1&&(a.colspan=l);const d=r+s,h=[...new Wp(o,{startRow:r,endRow:d,includeAllSlots:!0})];let u,g=null;for(const t of h){const{row:n,column:o,cell:r}=t;r===e&&void 0===u&&(u=o),void 0!==u&&u===o&&n===d&&(g=jp(i,t.getPositionBefore(),a))}return Vp("rowspan",s,e,i),g}function kb(e,t){const i=[],n=new Wp(e);for(const e of n){const{column:n,cellWidth:o}=e,r=n+o-1;n<t&&t<=r&&i.push(e)}return i}function _b(e,t,i,n){const o=i-t,r={},s=parseInt(e.getAttribute("colspan"))-o;s>1&&(r.colspan=s);const a=parseInt(e.getAttribute("rowspan")||1);a>1&&(r.rowspan=a);const c=jp(n,n.createPositionAfter(e),r);return Vp("colspan",o,e,n),c}function vb(e,t,i,n,o,r){const s=parseInt(e.getAttribute("colspan")||1),a=parseInt(e.getAttribute("rowspan")||1);if(i+s-1>o){Vp("colspan",o-i+1,e,r,1)}if(t+a-1>n){Vp("rowspan",n-t+1,e,r,1)}}function yb(e,t){const i=t.getColumns(e),n=new Array(i).fill(0);for(const{column:t}of new Wp(e))n[t]++;const o=n.reduce((e,t,i)=>t?e:[...e,i],[]);if(o.length>0){const i=o[o.length-1];return t.removeColumns(e,{at:i}),!0}return!1}function xb(e,t){const i=[],n=t.getRows(e);for(let t=0;t<n;t++){e.getChild(t).isEmpty&&i.push(t)}if(i.length>0){const n=i[i.length-1];return t.removeRows(e,{at:n}),!0}return!1}function Ab(e,t){yb(e,t)||xb(e,t)}function Cb(e,t){const i=Array.from(new Wp(e,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(i.every(({cellHeight:e})=>1===e))return t.lastRow;const n=i[0].cellHeight-1;return t.lastRow+n}function Tb(e,t){const i=Array.from(new Wp(e,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(i.every(({cellWidth:e})=>1===e))return t.lastColumn;const n=i[0].cellWidth-1;return t.lastColumn+n}class Eb extends Ze{constructor(e,t){super(e),this.direction=t.direction,this.isHorizontal="right"==this.direction||"left"==this.direction}refresh(){const e=this._getMergeableCell();this.value=e,this.isEnabled=!!e}execute(){const e=this.editor.model,t=ob(e.document.selection)[0],i=this.value,n=this.direction;e.change(e=>{const o="right"==n||"down"==n,r=o?t:i,s=o?i:t,a=s.parent;!function(e,t,i){Sb(e)||(Sb(t)&&i.remove(i.createRangeIn(t)),i.move(i.createRangeIn(e),i.createPositionAt(t,"end")));i.remove(e)}(s,r,e);const c=this.isHorizontal?"colspan":"rowspan",l=parseInt(t.getAttribute(c)||1),d=parseInt(i.getAttribute(c)||1);e.setAttribute(c,l+d,r),e.setSelection(e.createRangeIn(r));const h=this.editor.plugins.get("TableUtils");Ab(a.findAncestor("table"),h)})}_getMergeableCell(){const e=ob(this.editor.model.document.selection)[0];if(!e)return;const t=this.editor.plugins.get("TableUtils"),i=this.isHorizontal?function(e,t,i){const n=e.parent.parent,o="right"==t?e.nextSibling:e.previousSibling,r=(n.getAttribute("headingColumns")||0)>0;if(!o)return;const s="right"==t?e:o,a="right"==t?o:e,{column:c}=i.getCellLocation(s),{column:l}=i.getCellLocation(a),d=parseInt(s.getAttribute("colspan")||1),h=Bp(i,s),u=Bp(i,a);if(r&&h!=u)return;return c+d===l?o:void 0}(e,this.direction,t):function(e,t,i){const n=e.parent,o=n.parent,r=o.getChildIndex(n);if("down"==t&&r===i.getRows(o)-1||"up"==t&&0===r)return;const s=parseInt(e.getAttribute("rowspan")||1),a=o.getAttribute("headingRows")||0,c="down"==t&&r+s===a,l="up"==t&&r===a;if(a&&(c||l))return;const d=parseInt(e.getAttribute("rowspan")||1),h="down"==t?r+d:r,u=[...new Wp(o,{endRow:h})],g=u.find(t=>t.cell===e).column,m=u.find(({row:e,cellHeight:i,column:n})=>n===g&&("down"==t?e===h:h===e+i));return m&&m.cell}(e,this.direction,t);if(!i)return;const n=this.isHorizontal?"rowspan":"colspan",o=parseInt(e.getAttribute(n)||1);return parseInt(i.getAttribute(n)||1)===o?i:void 0}}function Sb(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}class Ib extends Ze{refresh(){const e=rb(this.editor.model.document.selection),t=e[0];if(t){const i=t.findAncestor("table"),n=this.editor.plugins.get("TableUtils").getRows(i)-1,o=sb(e),r=0===o.first&&o.last===n;this.isEnabled=!r}else this.isEnabled=!1}execute(){const e=this.editor.model,t=this.editor.plugins.get("TableUtils"),i=rb(e.document.selection),n=sb(i),o=i[0],r=o.findAncestor("table"),s=t.getCellLocation(o).column;e.change(e=>{const i=n.last-n.first+1;t.removeRows(r,{at:n.first,rows:i});const o=function(e,t,i,n){const o=e.getChild(Math.min(t,n-1));let r=o.getChild(0),s=0;for(const e of o.getChildren()){if(s>i)return r;r=e,s+=parseInt(e.getAttribute("colspan")||1)}return r}(r,n.first,s,t.getRows(r));e.setSelection(e.createPositionAt(o,0))})}}class Pb extends Ze{refresh(){const e=rb(this.editor.model.document.selection),t=e[0];if(t){const i=t.findAncestor("table"),n=this.editor.plugins.get("TableUtils").getColumns(i),{first:o,last:r}=ab(e);this.isEnabled=r-o<n-1}else this.isEnabled=!1}execute(){const[e,t]=function(e){const t=rb(e),i=t[0],n=t.pop(),o=[i,n];return i.isBefore(n)?o:o.reverse()}(this.editor.model.document.selection),i=e.parent.parent,n=[...new Wp(i)],o={first:n.find(t=>t.cell===e).column,last:n.find(e=>e.cell===t).column},r=function(e,t,i,n){return parseInt(i.getAttribute("colspan")||1)>1?i:t.previousSibling||i.nextSibling?i.nextSibling||t.previousSibling:n.first?e.reverse().find(({column:e})=>e<n.first).cell:e.reverse().find(({column:e})=>e>n.last).cell}(n,e,t,o);this.editor.model.change(e=>{const t=o.last-o.first+1;this.editor.plugins.get("TableUtils").removeColumns(i,{at:o.first,columns:t}),e.setSelection(e.createPositionAt(r,0))})}}class Mb extends Ze{refresh(){const e=rb(this.editor.model.document.selection),t=e.length>0;this.isEnabled=t,this.value=t&&e.every(e=>this._isInHeading(e,e.parent.parent))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.model,i=rb(t.document.selection),n=i[0].findAncestor("table"),{first:o,last:r}=sb(i),s=this.value?o:r+1,a=n.getAttribute("headingRows")||0;t.change(e=>{if(s){const t=bb(n,s,s>a?a:0);for(const{cell:i}of t)wb(i,s,e)}Vp("headingRows",s,n,e,0)})}_isInHeading(e,t){const i=parseInt(t.getAttribute("headingRows")||0);return!!i&&e.parent.index<i}}class Nb extends Ze{refresh(){const e=rb(this.editor.model.document.selection),t=this.editor.plugins.get("TableUtils"),i=e.length>0;this.isEnabled=i,this.value=i&&e.every(e=>Bp(t,e))}execute(e={}){if(e.forceValue===this.value)return;const t=this.editor.model,i=rb(t.document.selection),n=i[0].findAncestor("table"),{first:o,last:r}=ab(i),s=this.value?o:r+1;t.change(e=>{if(s){const t=kb(n,s);for(const{cell:i,column:n}of t)_b(i,n,s,e)}Vp("headingColumns",s,n,e,0)})}}class Rb extends Qe{static get pluginName(){return"TableUtils"}init(){this.decorate("insertColumns"),this.decorate("insertRows")}getCellLocation(e){const t=e.parent,i=t.parent,n=i.getChildIndex(t),o=new Wp(i,{row:n});for(const{cell:t,row:i,column:n}of o)if(t===e)return{row:i,column:n}}createTable(e,t){const i=e.createElement("table"),n=parseInt(t.rows)||2,o=parseInt(t.columns)||2;return Ob(e,i,0,n,o),t.headingRows&&Vp("headingRows",Math.min(t.headingRows,n),i,e,0),t.headingColumns&&Vp("headingColumns",Math.min(t.headingColumns,o),i,e,0),i}insertRows(e,t={}){const i=this.editor.model,n=t.at||0,o=t.rows||1,r=void 0!==t.copyStructureFromAbove,s=t.copyStructureFromAbove?n-1:n,a=this.getRows(e),l=this.getColumns(e);if(n>a)throw new c.a("tableutils-insertrows-insert-out-of-range",this,{options:t});i.change(t=>{const i=e.getAttribute("headingRows")||0;if(i>n&&Vp("headingRows",i+o,e,t,0),!r&&(0===n||n===a))return void Ob(t,e,n,o,l);const c=r?Math.max(n,s):n,d=new Wp(e,{endRow:c}),h=new Array(l).fill(1);for(const{row:e,column:i,cellHeight:a,cellWidth:c,cell:l}of d){const d=e+a-1,u=e<=s&&s<=d;e<n&&n<=d?(t.setAttribute("rowspan",a+o,l),h[i]=-c):r&&u&&(h[i]=c)}for(let i=0;i<o;i++){const i=t.createElement("tableRow");t.insert(i,e,n);for(let e=0;e<h.length;e++){const n=h[e],o=t.createPositionAt(i,"end");n>0&&jp(t,o,n>1?{colspan:n}:null),e+=Math.abs(n)-1}}})}insertColumns(e,t={}){const i=this.editor.model,n=t.at||0,o=t.columns||1;i.change(t=>{const i=e.getAttribute("headingColumns");n<i&&t.setAttribute("headingColumns",i+o,e);const r=this.getColumns(e);if(0===n||r===n){for(const i of e.getChildren())i.is("element","tableRow")&&Db(o,t,t.createPositionAt(i,n?"end":0));return}const s=new Wp(e,{column:n,includeAllSlots:!0});for(const e of s){const{row:i,cell:r,cellAnchorColumn:a,cellAnchorRow:c,cellWidth:l,cellHeight:d}=e;if(a<n){t.setAttribute("colspan",l+o,r);const e=c+d-1;for(let t=i;t<=e;t++)s.skipRow(t)}else Db(o,t,e.getPositionBefore())}})}removeRows(e,t){const i=this.editor.model,n=t.rows||1,o=this.getRows(e),r=t.at,s=r+n-1;if(s>o-1)throw new c.a("tableutils-removerows-row-index-out-of-range",this,{table:e,options:t});i.change(t=>{const{cellsToMove:i,cellsToTrim:n}=function(e,t,i){const n=new Map,o=[];for(const{row:r,column:s,cellHeight:a,cell:c}of new Wp(e,{endRow:i})){const e=r+a-1;if(r>=t&&r<=i&&e>i){const e=a-(i-r+1);n.set(s,{cell:c,rowspan:e})}if(r<t&&e>=t){let n;n=e>=i?i-t+1:e-t+1,o.push({cell:c,rowspan:a-n})}}return{cellsToMove:n,cellsToTrim:o}}(e,r,s);if(i.size){!function(e,t,i,n){const o=[...new Wp(e,{includeAllSlots:!0,row:t})],r=e.getChild(t);let s;for(const{column:e,cell:t,isAnchor:a}of o)if(i.has(e)){const{cell:t,rowspan:o}=i.get(e),a=s?n.createPositionAfter(s):n.createPositionAt(r,0);n.move(n.createRangeOn(t),a),Vp("rowspan",o,t,n),s=t}else a&&(s=t)}(e,s+1,i,t)}for(let i=s;i>=r;i--)t.remove(e.getChild(i));for(const{rowspan:e,cell:i}of n)Vp("rowspan",e,i,t);!function(e,t,i,n){const o=e.getAttribute("headingRows")||0;if(t<o){Vp("headingRows",i<o?o-(i-t+1):t,e,n,0)}}(e,r,s,t),yb(e,this)||xb(e,this)})}removeColumns(e,t){const i=this.editor.model,n=t.at,o=t.columns||1,r=t.at+o-1;i.change(t=>{!function(e,t,i){const n=e.getAttribute("headingColumns")||0;if(n&&t.first<n){const o=Math.min(n-1,t.last)-t.first+1;i.setAttribute("headingColumns",n-o,e)}}(e,{first:n,last:r},t);for(let i=r;i>=n;i--)for(const{cell:n,column:o,cellWidth:r}of[...new Wp(e)])o<=i&&r>1&&o+r>i?Vp("colspan",r-1,n,t):o===i&&t.remove(n);xb(e,this)||yb(e,this)})}splitCellVertically(e,t=2){const i=this.editor.model,n=e.parent.parent,o=parseInt(e.getAttribute("rowspan")||1),r=parseInt(e.getAttribute("colspan")||1);i.change(i=>{if(r>1){const{newCellsSpan:n,updatedSpan:s}=zb(r,t);Vp("colspan",s,e,i);const a={};n>1&&(a.colspan=n),o>1&&(a.rowspan=o);Db(r>t?t-1:r-1,i,i.createPositionAfter(e),a)}if(r<t){const s=t-r,a=[...new Wp(n)],{column:c}=a.find(({cell:t})=>t===e),l=a.filter(({cell:t,cellWidth:i,column:n})=>t!==e&&n===c||n<c&&n+i>c);for(const{cell:e,cellWidth:t}of l)i.setAttribute("colspan",t+s,e);const d={};o>1&&(d.rowspan=o),Db(s,i,i.createPositionAfter(e),d);const h=n.getAttribute("headingColumns")||0;h>c&&Vp("headingColumns",h+s,n,i)}})}splitCellHorizontally(e,t=2){const i=this.editor.model,n=e.parent,o=n.parent,r=o.getChildIndex(n),s=parseInt(e.getAttribute("rowspan")||1),a=parseInt(e.getAttribute("colspan")||1);i.change(i=>{if(s>1){const n=[...new Wp(o,{startRow:r,endRow:r+s-1,includeAllSlots:!0})],{newCellsSpan:c,updatedSpan:l}=zb(s,t);Vp("rowspan",l,e,i);const{column:d}=n.find(({cell:t})=>t===e),h={};c>1&&(h.rowspan=c),a>1&&(h.colspan=a);for(const e of n){const{column:t,row:n}=e,o=t===d,s=(n+r+l)%c==0;n>=r+l&&o&&s&&Db(1,i,e.getPositionBefore(),h)}}if(s<t){const n=t-s,c=[...new Wp(o,{startRow:0,endRow:r})];for(const{cell:t,cellHeight:o,row:s}of c)if(t!==e&&s+o>r){const e=o+n;i.setAttribute("rowspan",e,t)}const l={};a>1&&(l.colspan=a),Ob(i,o,r+1,n,1,l);const d=o.getAttribute("headingRows")||0;d>r&&Vp("headingRows",d+n,o,i)}})}getColumns(e){return[...e.getChild(0).getChildren()].reduce((e,t)=>e+parseInt(t.getAttribute("colspan")||1),0)}getRows(e){return Array.from(e.getChildren()).reduce((e,t)=>t.is("element","tableRow")?e+1:e,0)}}function Ob(e,t,i,n,o,r={}){for(let s=0;s<n;s++){const n=e.createElement("tableRow");e.insert(n,t,i),Db(o,e,e.createPositionAt(n,"end"),r)}}function Db(e,t,i,n={}){for(let o=0;o<e;o++)jp(t,i,n)}function zb(e,t){if(e<t)return{newCellsSpan:1,updatedSpan:1};const i=Math.floor(e/t);return{newCellsSpan:i,updatedSpan:e-i*t+i}}class Lb extends Ze{refresh(){const e=nb(this.editor.model.document.selection);this.isEnabled=cb(e,this.editor.plugins.get(Rb))}execute(){const e=this.editor.model,t=this.editor.plugins.get(Rb);e.change(i=>{const n=nb(e.document.selection),o=n.shift(),{mergeWidth:r,mergeHeight:s}=function(e,t,i){let n=0,o=0;for(const e of t){const{row:t,column:r}=i.getCellLocation(e);n=Bb(e,r,n,"colspan"),o=Bb(e,t,o,"rowspan")}const{row:r,column:s}=i.getCellLocation(e);return{mergeWidth:n-s,mergeHeight:o-r}}(o,n,t);Vp("colspan",r,o,i),Vp("rowspan",s,o,i);for(const e of n)Vb(e,o,i);Ab(o.findAncestor("table"),t),i.setSelection(o,"in")})}}function Vb(e,t,i){jb(e)||(jb(t)&&i.remove(i.createRangeIn(t)),i.move(i.createRangeIn(e),i.createPositionAt(t,"end"))),i.remove(e)}function jb(e){return 1==e.childCount&&e.getChild(0).is("element","paragraph")&&e.getChild(0).isEmpty}function Bb(e,t,i,n){const o=parseInt(e.getAttribute(n)||1);return Math.max(i,t+o)}class Fb extends Ze{constructor(e){super(e),this.affectsData=!1}refresh(){const e=rb(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.model,t=rb(e.document.selection),i=sb(t),n=t[0].findAncestor("table"),o=[];for(let t=i.first;t<=i.last;t++)for(const i of n.getChild(t).getChildren())o.push(e.createRangeOn(i));e.change(e=>{e.setSelection(o)})}}class Hb extends Ze{constructor(e){super(e),this.affectsData=!1}refresh(){const e=rb(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){const e=this.editor.model,t=rb(e.document.selection),i=t[0],n=t.pop(),o=i.findAncestor("table"),r=this.editor.plugins.get("TableUtils"),s=r.getCellLocation(i),a=r.getCellLocation(n),c=Math.min(s.column,a.column),l=Math.max(s.column,a.column),d=[];for(const t of new Wp(o,{startColumn:c,endColumn:l}))d.push(e.createRangeOn(t.cell));e.change(e=>{e.setSelection(d)})}}function Ub(e){e.document.registerPostFixer(t=>function(e,t){const i=t.document.differ.getChanges();let n=!1;const o=new Set;for(const t of i){let i;"table"==t.name&&"insert"==t.type&&(i=t.position.nodeAfter),"tableRow"!=t.name&&"tableCell"!=t.name||(i=t.position.findAncestor("table")),$b(t)&&(i=t.range.start.findAncestor("table")),i&&!o.has(i)&&(n=Wb(i,e)||n,n=qb(i,e)||n,o.add(i))}return n}(t,e))}function Wb(e,t){let i=!1;const n=function(e){const t=parseInt(e.getAttribute("headingRows")||0),i=Array.from(e.getChildren()).reduce((e,t)=>t.is("element","tableRow")?e+1:e,0),n=[];for(const{row:o,cell:r,cellHeight:s}of new Wp(e)){if(s<2)continue;const e=o<t?t:i;if(o+s>e){const t=e-o;n.push({cell:r,rowspan:t})}}return n}(e);if(n.length){i=!0;for(const e of n)Vp("rowspan",e.rowspan,e.cell,t,1)}return i}function qb(e,t){let i=!1;const n=function(e){const t=new Array(e.childCount).fill(0);for(const{rowIndex:i}of new Wp(e,{includeAllSlots:!0}))t[i]++;return t}(e),o=[];for(const[t,i]of n.entries())!i&&e.getChild(t).is("element","tableRow")&&o.push(t);if(o.length){i=!0;for(const i of o.reverse())t.remove(e.getChild(i)),n.splice(i,1)}const r=n.filter((t,i)=>e.getChild(i).is("element","tableRow")),s=r[0];if(!r.every(e=>e===s)){const n=r.reduce((e,t)=>t>e?t:e,0);for(const[o,s]of r.entries()){const r=n-s;if(r){for(let i=0;i<r;i++)jp(t,t.createPositionAt(e.getChild(o),"end"));i=!0}}}return i}function $b(e){const t="attribute"===e.type,i=e.attributeKey;return t&&("headingRows"===i||"colspan"===i||"rowspan"===i)}function Yb(e){e.document.registerPostFixer(t=>function(e,t){const i=t.document.differ.getChanges();let n=!1;for(const t of i)"insert"==t.type&&"table"==t.name&&(n=Gb(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableRow"==t.name&&(n=Kb(t.position.nodeAfter,e)||n),"insert"==t.type&&"tableCell"==t.name&&(n=Qb(t.position.nodeAfter,e)||n),Jb(t)&&(n=Qb(t.position.parent,e)||n);return n}(t,e))}function Gb(e,t){let i=!1;for(const n of e.getChildren())n.is("element","tableRow")&&(i=Kb(n,t)||i);return i}function Kb(e,t){let i=!1;for(const n of e.getChildren())i=Qb(n,t)||i;return i}function Qb(e,t){if(0==e.childCount)return t.insertElement("paragraph",e),!0;const i=Array.from(e.getChildren()).filter(e=>e.is("$text"));for(const e of i)t.wrap(t.createRangeOn(e),"paragraph");return!!i.length}function Jb(e){return!(!e.position||!e.position.parent.is("element","tableCell"))&&("insert"==e.type&&"$text"==e.name||"remove"==e.type)}function Zb(e,t){e.document.registerPostFixer(()=>function(e,t){const i=new Set;for(const t of e.getChanges()){const e="attribute"==t.type?t.range.start.parent:t.position.parent;e.is("element","tableCell")&&i.add(e)}for(const n of i.values())for(const i of[...n.getChildren()].filter(e=>Xb(e,t)))e.refreshItem(i);return!1}(e.document.differ,t))}function Xb(e,t){if(!e.is("element","paragraph"))return!1;const i=t.toViewElement(e);return!!i&&Gp(e)!==i.is("element","span")}function ew(e){e.document.registerPostFixer(()=>function(e){const t=e.document.differ,i=new Set;for(const e of t.getChanges())if("attribute"===e.type){const t=e.range.start.nodeAfter;t&&t.is("element","table")&&"headingRows"===e.attributeKey&&i.add(t)}else if("insert"===e.type||"remove"===e.type)if("tableRow"===e.name){const t=e.position.findAncestor("table"),n=t.getAttribute("headingRows")||0;e.position.offset<n&&i.add(t)}else if("tableCell"===e.name){const t=e.position.findAncestor("table"),n=t.getAttribute("headingColumns")||0;e.position.offset<n&&i.add(t)}if(i.size){for(const e of i.values())t.refreshItem(e);return!0}return!1}(e))}i(102);class tw extends Qe{static get pluginName(){return"TableEditing"}init(){const e=this.editor,t=e.model,i=t.schema,n=e.conversion;i.register("table",{allowWhere:"$block",allowAttributes:["headingRows","headingColumns"],isObject:!0,isBlock:!0}),i.register("tableRow",{allowIn:"table",isLimit:!0}),i.register("tableCell",{allowIn:"tableRow",allowChildren:"$block",allowAttributes:["colspan","rowspan"],isLimit:!0,isSelectable:!0}),n.for("upcast").add(e=>{e.on("element:figure",(e,t,i)=>{if(!i.consumable.test(t.viewItem,{name:!0,classes:"table"}))return;const n=function(e){for(const t of e.getChildren())if(t.is("element","table"))return t}(t.viewItem);if(!n||!i.consumable.test(n,{name:!0}))return;const o=Ms(i.convertItem(n,t.modelCursor).modelRange.getItems());o&&(i.consumable.consume(t.viewItem,{name:!0,classes:"table"}),i.convertChildren(t.viewItem,i.writer.createPositionAt(o,"end")),i.updateConversionResult(o,t))})}),n.for("upcast").add(Fp()),n.for("editingDowncast").add($p({asWidget:!0})),n.for("dataDowncast").add($p()),n.for("upcast").elementToElement({model:"tableRow",view:"tr"}),n.for("upcast").add(e=>{e.on("element:tr",(e,t)=>{t.viewItem.isEmpty&&0==t.modelCursor.index&&e.stop()},{priority:"high"})}),n.for("editingDowncast").add(e=>e.on("insert:tableRow",(e,t,i)=>{const n=t.item;if(!i.consumable.consume(n,"insert"))return;const o=n.parent,r=function(e){for(const t of e.getChildren())if("table"===t.name)return t}(i.mapper.toViewElement(o)),s=o.getChildIndex(n),a=new Wp(o,{row:s}),c={headingRows:o.getAttribute("headingRows")||0,headingColumns:o.getAttribute("headingColumns")||0},l=new Map;for(const e of a){const t=l.get(s)||Jp(r,n,s,c,i);l.set(s,t),i.consumable.consume(e.cell,"insert"),Qp(e,c,i.writer.createPositionAt(t,"end"),i,{asWidget:!0})}})),n.for("editingDowncast").add(e=>e.on("remove:tableRow",(e,t,i)=>{e.stop();const n=i.writer,o=i.mapper,r=o.toViewPosition(t.position).getLastMatchingPosition(e=>!e.item.is("element","tr")).nodeAfter,s=r.parent.parent,a=n.createRangeOn(r),c=n.remove(a);for(const e of n.createRangeIn(c).getItems())o.unbindViewElement(e);eb("thead",s,i),eb("tbody",s,i)},{priority:"higher"})),n.for("upcast").elementToElement({model:"tableCell",view:"td"}),n.for("upcast").elementToElement({model:"tableCell",view:"th"}),n.for("upcast").add(Hp("td")),n.for("upcast").add(Hp("th")),n.for("editingDowncast").add(e=>e.on("insert:tableCell",(e,t,i)=>{const n=t.item;if(!i.consumable.consume(n,"insert"))return;const o=n.parent,r=o.parent,s=r.getChildIndex(o),a=new Wp(r,{row:s}),c={headingRows:r.getAttribute("headingRows")||0,headingColumns:r.getAttribute("headingColumns")||0};for(const e of a)if(e.cell===n){const t=i.mapper.toViewElement(o);return void Qp(e,c,i.writer.createPositionAt(t,o.getChildIndex(n)),i,{asWidget:!0})}})),n.for("editingDowncast").elementToElement({model:"paragraph",view:Yp,converterPriority:"high"}),n.for("downcast").attributeToAttribute({model:"colspan",view:"colspan"}),n.for("upcast").attributeToAttribute({model:{key:"colspan",value:iw("colspan")},view:"colspan"}),n.for("downcast").attributeToAttribute({model:"rowspan",view:"rowspan"}),n.for("upcast").attributeToAttribute({model:{key:"rowspan",value:iw("rowspan")},view:"rowspan"}),n.for("editingDowncast").add(e=>e.on("attribute:headingColumns:table",(e,t,i)=>{const n=t.item;if(!i.consumable.consume(t.item,e.name))return;const o={headingRows:n.getAttribute("headingRows")||0,headingColumns:n.getAttribute("headingColumns")||0},r=t.attributeOldValue,s=t.attributeNewValue,a=(r>s?r:s)-1;for(const e of new Wp(n,{endColumn:a}))Kp(e,o,i)})),e.data.mapper.on("modelToViewPosition",(e,t)=>{const i=t.modelPosition.parent,n=t.modelPosition.nodeBefore;if(!i.is("element","tableCell"))return;if(!n||!n.is("element","paragraph"))return;const o=t.mapper.toViewElement(n),r=t.mapper.toViewElement(i);o===r&&(t.viewPosition=t.mapper.findPositionIn(r,n.maxOffset))}),e.config.define("table.defaultHeadings.rows",0),e.config.define("table.defaultHeadings.columns",0),e.commands.add("insertTable",new ib(e)),e.commands.add("insertTableRowAbove",new gb(e,{order:"above"})),e.commands.add("insertTableRowBelow",new gb(e,{order:"below"})),e.commands.add("insertTableColumnLeft",new mb(e,{order:"left"})),e.commands.add("insertTableColumnRight",new mb(e,{order:"right"})),e.commands.add("removeTableRow",new Ib(e)),e.commands.add("removeTableColumn",new Pb(e)),e.commands.add("splitTableCellVertically",new fb(e,{direction:"vertically"})),e.commands.add("splitTableCellHorizontally",new fb(e,{direction:"horizontally"})),e.commands.add("mergeTableCells",new Lb(e)),e.commands.add("mergeTableCellRight",new Eb(e,{direction:"right"})),e.commands.add("mergeTableCellLeft",new Eb(e,{direction:"left"})),e.commands.add("mergeTableCellDown",new Eb(e,{direction:"down"})),e.commands.add("mergeTableCellUp",new Eb(e,{direction:"up"})),e.commands.add("setTableColumnHeader",new Nb(e)),e.commands.add("setTableRowHeader",new Mb(e)),e.commands.add("selectTableRow",new Fb(e)),e.commands.add("selectTableColumn",new Hb(e)),ew(t),Ub(t),Zb(t,e.editing.mapper),Yb(t)}static get requires(){return[Rb]}}function iw(e){return t=>{const i=parseInt(t.getAttribute(e));return Number.isNaN(i)||i<=0?null:i}}i(104);class nw extends Nl{constructor(e){super(e);const t=this.bindTemplate;this.items=this._createGridCollection(),this.set("rows",0),this.set("columns",0),this.bind("label").to(this,"columns",this,"rows",(e,t)=>`${t} × ${e}`),this.setTemplate({tag:"div",attributes:{class:["ck"]},children:[{tag:"div",attributes:{class:["ck-insert-table-dropdown__grid"]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":t.to("boxover")},children:this.items},{tag:"div",attributes:{class:["ck-insert-table-dropdown__label"]},children:[{text:t.to("label")}]}],on:{mousedown:t.to(e=>{e.preventDefault()}),click:t.to(()=>{this.fire("execute")})}}),this.on("boxover",(e,t)=>{const{row:i,column:n}=t.target.dataset;this.set({rows:parseInt(i),columns:parseInt(n)})}),this.on("change:columns",()=>{this._highlightGridBoxes()}),this.on("change:rows",()=>{this._highlightGridBoxes()})}focus(){}focusLast(){}_highlightGridBoxes(){const e=this.rows,t=this.columns;this.items.map((i,n)=>{const o=Math.floor(n/10)<e&&n%10<t;i.set("isOn",o)})}_createGridCollection(){const e=[];for(let t=0;t<100;t++){const i=Math.floor(t/10),n=t%10;e.push(new ow(this.locale,i+1,n+1))}return this.createCollection(e)}}class ow extends Nl{constructor(e,t,i){super(e);const n=this.bindTemplate;this.set("isOn",!1),this.setTemplate({tag:"div",attributes:{class:["ck-insert-table-dropdown-grid-box",n.if("isOn","ck-on")],"data-row":t,"data-column":i}})}}class rw extends Qe{static get pluginName(){return"TableUI"}init(){const e=this.editor,t=this.editor.t,i="ltr"===e.locale.contentLanguageDirection;e.ui.componentFactory.add("insertTable",i=>{const n=e.commands.get("insertTable"),o=xd(i);let r;return o.bind("isEnabled").to(n),o.buttonView.set({icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>',label:t("Insert table"),tooltip:!0}),o.on("change:isOpen",()=>{r||(r=new nw(i),o.panelView.children.add(r),r.delegate("execute").to(o),o.buttonView.on("open",()=>{r.rows=0,r.columns=0}),o.on("execute",()=>{e.execute("insertTable",{rows:r.rows,columns:r.columns}),e.editing.view.focus()}))}),o}),e.ui.componentFactory.add("tableColumn",e=>{const n=[{type:"switchbutton",model:{commandName:"setTableColumnHeader",label:t("Header column"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:i?"insertTableColumnLeft":"insertTableColumnRight",label:t("Insert column left")}},{type:"button",model:{commandName:i?"insertTableColumnRight":"insertTableColumnLeft",label:t("Insert column right")}},{type:"button",model:{commandName:"removeTableColumn",label:t("Delete column")}},{type:"button",model:{commandName:"selectTableColumn",label:t("Select column")}}];return this._prepareDropdown(t("Column"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>',n,e)}),e.ui.componentFactory.add("tableRow",e=>{const i=[{type:"switchbutton",model:{commandName:"setTableRowHeader",label:t("Header row"),bindIsOn:!0}},{type:"separator"},{type:"button",model:{commandName:"insertTableRowAbove",label:t("Insert row above")}},{type:"button",model:{commandName:"insertTableRowBelow",label:t("Insert row below")}},{type:"button",model:{commandName:"removeTableRow",label:t("Delete row")}},{type:"button",model:{commandName:"selectTableRow",label:t("Select row")}}];return this._prepareDropdown(t("Row"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>',i,e)}),e.ui.componentFactory.add("mergeTableCells",e=>{const n=[{type:"button",model:{commandName:"mergeTableCellUp",label:t("Merge cell up")}},{type:"button",model:{commandName:i?"mergeTableCellRight":"mergeTableCellLeft",label:t("Merge cell right")}},{type:"button",model:{commandName:"mergeTableCellDown",label:t("Merge cell down")}},{type:"button",model:{commandName:i?"mergeTableCellLeft":"mergeTableCellRight",label:t("Merge cell left")}},{type:"separator"},{type:"button",model:{commandName:"splitTableCellVertically",label:t("Split cell vertically")}},{type:"button",model:{commandName:"splitTableCellHorizontally",label:t("Split cell horizontally")}}];return this._prepareMergeSplitButtonDropdown(t("Merge cells"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>',n,e)})}_prepareDropdown(e,t,i,n){const o=this.editor,r=xd(n),s=this._fillDropdownWithListOptions(r,i);return r.buttonView.set({label:e,icon:t,tooltip:!0}),r.bind("isEnabled").toMany(s,"isEnabled",(...e)=>e.some(e=>e)),this.listenTo(r,"execute",e=>{o.execute(e.source.commandName),o.editing.view.focus()}),r}_prepareMergeSplitButtonDropdown(e,t,i,n){const o=this.editor,r=xd(n,ad),s=o.commands.get("mergeTableCells"),a=this._fillDropdownWithListOptions(r,i);return r.buttonView.set({label:e,icon:t,tooltip:!0,isEnabled:!0}),r.bind("isEnabled").toMany([s,...a],"isEnabled",(...e)=>e.some(e=>e)),this.listenTo(r.buttonView,"execute",()=>{o.execute("mergeTableCells"),o.editing.view.focus()}),this.listenTo(r,"execute",e=>{o.execute(e.source.commandName),o.editing.view.focus()}),r}_fillDropdownWithListOptions(e,t){const i=this.editor,n=[],o=new Zi;for(const e of t)sw(e,i,n,o);return Cd(e,o,i.ui.componentFactory),n}}function sw(e,t,i,n){const o=e.model=new Dd(e.model),{commandName:r,bindIsOn:s}=e.model;if("button"===e.type||"switchbutton"===e.type){const e=t.commands.get(r);i.push(e),o.set({commandName:r}),o.bind("isEnabled").to(e),s&&o.bind("isOn").to(e,"value")}o.set({withText:!0}),n.add(e)}i(106);class aw extends Qe{static get pluginName(){return"TableSelection"}static get requires(){return[Rb]}init(){const e=this.editor.model;this.listenTo(e,"deleteContent",(e,t)=>this._handleDeleteContent(e,t),{priority:"high"}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){const e=nb(this.editor.model.document.selection);return 0==e.length?null:e}getSelectionAsFragment(){const e=this.getSelectedTableCells();return e?this.editor.model.change(t=>{const i=t.createDocumentFragment(),n=this.editor.plugins.get("TableUtils"),{first:o,last:r}=ab(e),{first:s,last:a}=sb(e),c=e[0].findAncestor("table");let l=a,d=r;if(cb(e,n)){const e={firstColumn:o,lastColumn:r,firstRow:s,lastRow:a};l=Cb(c,e),d=Tb(c,e)}const h=pb(c,{startRow:s,startColumn:o,endRow:l,endColumn:d},t);return t.insert(h,i,0),i}):null}setCellSelection(e,t){const i=this._getCellsToSelect(e,t);this.editor.model.change(e=>{e.setSelection(i.cells.map(t=>e.createRangeOn(t)),{backward:i.backward})})}getFocusCell(){const e=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return e&&e.is("element","tableCell")?e:null}getAnchorCell(){const e=Ms(this.editor.model.document.selection.getRanges()).getContainedElement();return e&&e.is("element","tableCell")?e:null}_defineSelectionConverter(){const e=this.editor,t=new Set;e.conversion.for("editingDowncast").add(e=>e.on("selection",(e,i,n)=>{const o=n.writer;!function(e){for(const i of t)e.removeClass("ck-editor__editable_selected",i);t.clear()}(o);const r=this.getSelectedTableCells();if(!r)return;for(const e of r){const i=n.mapper.toViewElement(e);o.addClass("ck-editor__editable_selected",i),t.add(i)}const s=n.mapper.toViewElement(r[r.length-1]);o.setSelection(s,0)},{priority:"lowest"}))}_enablePluginDisabling(){const e=this.editor;this.on("change:isEnabled",()=>{if(!this.isEnabled){const t=this.getSelectedTableCells();if(!t)return;e.model.change(i=>{const n=i.createPositionAt(t[0],0),o=e.model.schema.getNearestSelectionRange(n);i.setSelection(o)})}})}_handleDeleteContent(e,t){const[i,n]=t,o=this.editor.model,r=!n||"backward"==n.direction,s=nb(i);s.length&&(e.stop(),o.change(e=>{const t=s[r?s.length-1:0];o.change(e=>{for(const t of s)o.deleteContent(e.createSelection(t,"in"))});const n=o.schema.getNearestSelectionRange(e.createPositionAt(t,0));i.is("documentSelection")?e.setSelection(n):i.setTo(n)}))}_getCellsToSelect(e,t){const i=this.editor.plugins.get("TableUtils"),n=i.getCellLocation(e),o=i.getCellLocation(t),r=Math.min(n.row,o.row),s=Math.max(n.row,o.row),a=Math.min(n.column,o.column),c=Math.max(n.column,o.column),l=new Array(s-r+1).fill(null).map(()=>[]),d={startRow:r,endRow:s,startColumn:a,endColumn:c};for(const{row:t,cell:i}of new Wp(e.findAncestor("table"),d))l[t-r].push(i);const h=o.row<n.row,u=o.column<n.column;return h&&l.reverse(),u&&l.forEach(e=>e.reverse()),{cells:l.flat(),backward:h||u}}}class cw extends Qe{static get pluginName(){return"TableClipboard"}static get requires(){return[aw,Rb]}init(){const e=this.editor,t=e.editing.view.document;this.listenTo(t,"copy",(e,t)=>this._onCopyCut(e,t)),this.listenTo(t,"cut",(e,t)=>this._onCopyCut(e,t)),this.listenTo(e.model,"insertContent",(e,t)=>this._onInsertContent(e,...t),{priority:"high"}),this.decorate("_replaceTableSlotCell")}_onCopyCut(e,t){const i=this.editor.plugins.get(aw);if(!i.getSelectedTableCells())return;if("cut"==e.name&&this.editor.isReadOnly)return;t.preventDefault(),e.stop();const n=this.editor.data,o=this.editor.editing.view.document,r=n.toView(i.getSelectionAsFragment());o.fire("clipboardOutput",{dataTransfer:t.dataTransfer,content:r,method:e.name})}_onInsertContent(e,t,i){if(i&&!i.is("documentSelection"))return;const n=this.editor.model,o=this.editor.plugins.get(Rb);let r=function(e,t){if(!e.is("documentFragment")&&!e.is("element"))return null;if(e.is("element","table"))return e;if(1==e.childCount&&e.getChild(0).is("element","table"))return e.getChild(0);const i=t.createRangeIn(e);for(const e of i.getItems())if(e.is("element","table")){const n=t.createRange(i.start,t.createPositionBefore(e));if(t.hasContent(n,{ignoreWhitespaces:!0}))return null;const o=t.createRange(t.createPositionAfter(e),i.end);return t.hasContent(o,{ignoreWhitespaces:!0})?null:e}return null}(t,n);if(!r)return;const s=rb(n.document.selection);s.length?(e.stop(),n.change(e=>{const t={width:o.getColumns(r),height:o.getRows(r)},i=function(e,t,i,n){const o=e[0].findAncestor("table"),r=ab(e),s=sb(e),a={firstColumn:r.first,lastColumn:r.last,firstRow:s.first,lastRow:s.last},c=1===e.length;c&&(a.lastRow+=t.height-1,a.lastColumn+=t.width-1,function(e,t,i,n){const o=n.getColumns(e),r=n.getRows(e);i>o&&n.insertColumns(e,{at:o,columns:i-o});t>r&&n.insertRows(e,{at:r,rows:t-r})}(o,a.lastRow+1,a.lastColumn+1,n));c||!cb(e,n)?function(e,t,i){const{firstRow:n,lastRow:o,firstColumn:r,lastColumn:s}=t,a={first:n,last:o},c={first:r,last:s};dw(e,r,a,i),dw(e,s+1,a,i),lw(e,n,c,i),lw(e,o+1,c,i,n)}(o,a,i):(a.lastRow=Cb(o,a),a.lastColumn=Tb(o,a));return a}(s,t,e,o),n=i.lastRow-i.firstRow+1,a=i.lastColumn-i.firstColumn+1,c={startRow:0,startColumn:0,endRow:Math.min(n,t.height)-1,endColumn:Math.min(a,t.width)-1};r=pb(r,c,e);const l=s[0].findAncestor("table"),d=this._replaceSelectedCellsWithPasted(r,t,l,i,e);if(this.editor.plugins.get("TableSelection").isEnabled){const t=lb(d.map(t=>e.createRangeOn(t)));e.setSelection(t)}else e.setSelection(d[0],0)})):Ab(r,o)}_replaceSelectedCellsWithPasted(e,t,i,n,o){const{width:r,height:s}=t,a=function(e,t,i){const n=new Array(i).fill(null).map(()=>new Array(t).fill(null));for(const{column:t,row:i,cell:o}of new Wp(e))n[i][t]=o;return n}(e,r,s),c=[...new Wp(i,{startRow:n.firstRow,endRow:n.lastRow,startColumn:n.firstColumn,endColumn:n.lastColumn,includeAllSlots:!0})],l=[];let d;for(const e of c){const{row:t,column:i}=e;i===n.firstColumn&&(d=e.getPositionBefore());const c=t-n.firstRow,h=i-n.firstColumn,u=a[c%s][h%r],g=u?o.cloneElement(u):null,m=this._replaceTableSlotCell(e,g,d,o);m&&(vb(m,t,i,n.lastRow,n.lastColumn,o),l.push(m),d=o.createPositionAfter(m))}const h=parseInt(i.getAttribute("headingRows")||0),u=parseInt(i.getAttribute("headingColumns")||0),g=n.firstRow<h&&h<=n.lastRow,m=n.firstColumn<u&&u<=n.lastColumn;if(g){const e=lw(i,h,{first:n.firstColumn,last:n.lastColumn},o,n.firstRow);l.push(...e)}if(m){const e=dw(i,u,{first:n.firstRow,last:n.lastRow},o);l.push(...e)}return l}_replaceTableSlotCell(e,t,i,n){const{cell:o,isAnchor:r}=e;return r&&n.remove(o),t?(n.insert(t,i),t):null}}function lw(e,t,i,n,o=0){if(t<1)return;return bb(e,t,o).filter(({column:e,cellWidth:t})=>hw(e,t,i)).map(({cell:e})=>wb(e,t,n))}function dw(e,t,i,n){if(t<1)return;return kb(e,t).filter(({row:e,cellHeight:t})=>hw(e,t,i)).map(({cell:e,column:i})=>_b(e,i,t,n))}function hw(e,t,i){const n=e+t-1,{first:o,last:r}=i;return e>=o&&e<=r||e<o&&n>=o}class uw extends Qe{static get pluginName(){return"TableKeyboard"}static get requires(){return[aw]}init(){const e=this.editor.editing.view.document;this.editor.keystrokes.set("Tab",(...e)=>this._handleTabOnSelectedTable(...e),{priority:"low"}),this.editor.keystrokes.set("Tab",this._getTabHandler(!0),{priority:"low"}),this.editor.keystrokes.set("Shift+Tab",this._getTabHandler(!1),{priority:"low"}),this.listenTo(e,"arrowKey",(...e)=>this._onArrowKey(...e),{context:"table"})}_handleTabOnSelectedTable(e,t){const i=this.editor,n=i.model.document.selection.getSelectedElement();n&&n.is("element","table")&&(t(),i.model.change(e=>{e.setSelection(e.createRangeIn(n.getChild(0).getChild(0)))}))}_getTabHandler(e){const t=this.editor;return(i,n)=>{let o=ob(t.model.document.selection)[0];if(o||(o=this.editor.plugins.get("TableSelection").getFocusCell()),!o)return;n();const r=o.parent,s=r.parent,a=s.getChildIndex(r),c=r.getChildIndex(o),l=0===c;if(!e&&l&&0===a)return void t.model.change(e=>{e.setSelection(e.createRangeOn(s))});const d=this.editor.plugins.get("TableUtils"),h=c===r.childCount-1,u=a===d.getRows(s)-1;if(e&&u&&h&&(t.execute("insertTableRowBelow"),a===d.getRows(s)-1))return void t.model.change(e=>{e.setSelection(e.createRangeOn(s))});let g;if(e&&h){const e=s.getChild(a+1);g=e.getChild(0)}else if(!e&&l){const e=s.getChild(a-1);g=e.getChild(e.childCount-1)}else g=r.getChild(c+(e?1:-1));t.model.change(e=>{e.setSelection(e.createRangeIn(g))})}}_onArrowKey(e,t){const i=this.editor,n=Lo(t.keyCode,i.locale.contentLanguageDirection);this._handleArrowKeys(n,t.shiftKey)&&(t.preventDefault(),t.stopPropagation(),e.stop())}_handleArrowKeys(e,t){const i=this.editor.model,n=i.document.selection,o=["right","down"].includes(e),r=nb(n);if(r.length){let i;return i=t?this.editor.plugins.get("TableSelection").getFocusCell():o?r[r.length-1]:r[0],this._navigateFromCellInDirection(i,e,t),!0}const s=n.focus.findAncestor("tableCell");if(!s)return!1;if(!n.isCollapsed)if(t){if(n.isBackward==o&&!n.containsEntireContent(s))return!1}else{const e=n.getSelectedElement();if(!e||!i.schema.isObject(e))return!1}return!!this._isSelectionAtCellEdge(n,s,o)&&(this._navigateFromCellInDirection(s,e,t),!0)}_isSelectionAtCellEdge(e,t,i){const n=this.editor.model,o=this.editor.model.schema,r=i?e.getLastPosition():e.getFirstPosition();if(!o.getLimitElement(r).is("element","tableCell")){return n.createPositionAt(t,i?"end":0).isTouching(r)}const s=n.createSelection(r);return n.modifySelection(s,{direction:i?"forward":"backward"}),r.isEqual(s.focus)}_navigateFromCellInDirection(e,t,i=!1){const n=this.editor.model,o=e.findAncestor("table"),r=[...new Wp(o,{includeAllSlots:!0})],{row:s,column:a}=r[r.length-1],c=r.find(({cell:t})=>t==e);let{row:l,column:d}=c;switch(t){case"left":d--;break;case"up":l--;break;case"right":d+=c.cellWidth;break;case"down":l+=c.cellHeight}if(l<0||l>s||d<0&&l<=0||d>a&&l>=s)return void n.change(e=>{e.setSelection(e.createRangeOn(o))});d<0?(d=i?0:a,l--):d>a&&(d=i?a:0,l++);const h=r.find(e=>e.row==l&&e.column==d).cell,u=["right","down"].includes(t),g=this.editor.plugins.get("TableSelection");if(i&&g.isEnabled){const t=g.getAnchorCell()||e;g.setCellSelection(t,h)}else{const e=n.createPositionAt(h,u?0:"end");n.change(t=>{t.setSelection(e)})}}}class gw extends es{constructor(e){super(e),this.domEventType=["mousemove","mouseleave"]}onDomEvent(e){this.fire(e.type,e)}}class mw extends Qe{static get pluginName(){return"TableMouse"}static get requires(){return[aw]}init(){this.editor.editing.view.addObserver(gw),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){const e=this.editor;let t=!1;const i=e.plugins.get(aw);this.listenTo(e.editing.view.document,"mousedown",(n,o)=>{if(!this.isEnabled||!i.isEnabled)return;if(!o.domEvent.shiftKey)return;const r=i.getAnchorCell()||ob(e.model.document.selection)[0];if(!r)return;const s=this._getModelTableCellFromDomEvent(o);s&&fw(r,s)&&(t=!0,i.setCellSelection(r,s),o.preventDefault())}),this.listenTo(e.editing.view.document,"mouseup",()=>{t=!1}),this.listenTo(e.editing.view.document,"selectionChange",e=>{t&&e.stop()},{priority:"highest"})}_enableMouseDragSelection(){const e=this.editor;let t,i,n=!1,o=!1;const r=e.plugins.get(aw);this.listenTo(e.editing.view.document,"mousedown",(e,i)=>{this.isEnabled&&r.isEnabled&&(i.domEvent.shiftKey||i.domEvent.ctrlKey||i.domEvent.altKey||(t=this._getModelTableCellFromDomEvent(i)))}),this.listenTo(e.editing.view.document,"mousemove",(e,s)=>{if(!s.domEvent.buttons)return;if(!t)return;const a=this._getModelTableCellFromDomEvent(s);a&&fw(t,a)&&(i=a,n||i==t||(n=!0)),n&&(o=!0,r.setCellSelection(t,i),s.preventDefault())}),this.listenTo(e.editing.view.document,"mouseup",()=>{n=!1,o=!1,t=null,i=null}),this.listenTo(e.editing.view.document,"selectionChange",e=>{o&&e.stop()},{priority:"highest"})}_getModelTableCellFromDomEvent(e){const t=e.target,i=this.editor.editing.view.createPositionAt(t,0);return this.editor.editing.mapper.toModelPosition(i).parent.findAncestor("tableCell",{includeSelf:!0})}}function fw(e,t){return e.parent.parent==t.parent.parent}i(108);function pw(e){const t=e.getSelectedElement();return t&&ww(t)?t:null}function bw(e){let t=e.getFirstPosition().parent;for(;t;){if(t.is("element")&&ww(t))return t;t=t.parent}return null}function ww(e){return!!e.getCustomProperty("table")&&Oh(e)}const kw={autoRefresh:!0};class _w{constructor(e,t=kw){if(!e)throw new c.a("token-missing-token-url",this);t.initValue&&this._validateTokenValue(t.initValue),this.set("value",t.initValue),this._refresh="function"==typeof e?e:()=>{return t=e,new Promise((e,i)=>{const n=new XMLHttpRequest;n.open("GET",t),n.addEventListener("load",()=>{const t=n.status,o=n.response;return t<200||t>299?i(new c.a("token-cannot-download-new-token",null)):e(o)}),n.addEventListener("error",()=>i(new Error("Network Error"))),n.addEventListener("abort",()=>i(new Error("Abort"))),n.send()});var t},this._options=Object.assign({},kw,t)}init(){return new Promise((e,t)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),e(this)):this.refreshToken().then(e).catch(t)})}refreshToken(){return this._refresh().then(e=>{this._validateTokenValue(e),this.set("value",e),this._options.autoRefresh&&this._registerRefreshTokenTimeout()}).then(()=>this)}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(e){const t="string"==typeof e,i=!/^".*"$/.test(e),n=t&&3===e.split(".").length;if(!i||!n)throw new c.a("token-not-in-jwt-format",this)}_registerRefreshTokenTimeout(){const e=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout(()=>{this.refreshToken()},e)}_getTokenRefreshTimeoutTime(){try{const[,e]=this.value.split("."),{exp:t}=JSON.parse(atob(e));if(!t)return 36e5;return Math.floor((1e3*t-Date.now())/2)}catch(e){return 36e5}}static create(e,t=kw){return new _w(e,t).init()}}Ke(_w,Ue);var vw=_w;const yw=/^data:(\S*?);base64,/;class xw{constructor(e,t,i){if(!e)throw new c.a("fileuploader-missing-file",null);if(!t)throw new c.a("fileuploader-missing-token",null);if(!i)throw new c.a("fileuploader-missing-api-address",null);this.file=function(e){if("string"!=typeof e)return!1;const t=e.match(yw);return!(!t||!t.length)}(e)?function(e,t=512){try{const i=e.match(yw)[1],n=atob(e.replace(yw,"")),o=[];for(let e=0;e<n.length;e+=t){const i=n.slice(e,e+t),r=new Array(i.length);for(let e=0;e<i.length;e++)r[e]=i.charCodeAt(e);o.push(new Uint8Array(r))}return new Blob(o,{type:i})}catch(e){throw new c.a("fileuploader-decoding-image-data-error",null)}}(e):e,this._token=t,this._apiAddress=i}onProgress(e){return this.on("progress",(t,i)=>e(i)),this}onError(e){return this.once("error",(t,i)=>e(i)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const e=new XMLHttpRequest;e.open("POST",this._apiAddress),e.setRequestHeader("Authorization",this._token.value),e.responseType="json",this.xhr=e}_attachXHRListeners(){const e=this,t=this.xhr;function i(t){return()=>e.fire("error",t)}t.addEventListener("error",i("Network Error")),t.addEventListener("abort",i("Abort")),t.upload&&t.upload.addEventListener("progress",e=>{e.lengthComputable&&this.fire("progress",{total:e.total,uploaded:e.loaded})}),t.addEventListener("load",()=>{const e=t.status,i=t.response;if(e<200||e>299)return this.fire("error",i.message||i.error)})}_sendRequest(){const e=new FormData,t=this.xhr;return e.append("file",this.file),new Promise((i,n)=>{t.addEventListener("load",()=>{const e=t.status,o=t.response;return e<200||e>299?o.message?n(new c.a("fileuploader-uploading-data-failed",this,{message:o.message})):n(o.error):i(o)}),t.addEventListener("error",()=>n(new Error("Network Error"))),t.addEventListener("abort",()=>n(new Error("Abort"))),t.send(e)})}}Ke(xw,h);class Aw{constructor(e,t){if(!e)throw new c.a("uploadgateway-missing-token",null);if(!t)throw new c.a("uploadgateway-missing-api-address",null);this._token=e,this._apiAddress=t}upload(e){return new xw(e,this._token,this._apiAddress)}}class Cw extends an{static get pluginName(){return"CloudServicesCore"}createToken(e,t){return new vw(e,t)}createUploadGateway(e,t){return new Aw(e,t)}}class Tw extends ph{}Tw.builtinPlugins=[class extends Qe{static get requires(){return[cu,Ch,wu,uu,Tu,tg]}static get pluginName(){return"Essentials"}},class extends Qe{static get requires(){return[ng]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const e=this.editor.config.get("ckfinder.uploadUrl");e&&(this.editor.plugins.get(ng).createUploadAdapter=t=>new cg(t,e,this.editor.t))}},class extends Qe{static get requires(){return[Ih]}static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){const e=this.editor.commands;e.get("bulletedList")&&lg(this.editor,this,/^[*-]\s$/,"bulletedList"),e.get("numberedList")&&lg(this.editor,this,/^1[.|)]\s$/,"numberedList"),e.get("todoList")&&lg(this.editor,this,/^\[\s?\]\s$/,"todoList"),e.get("checkTodoList")&&lg(this.editor,this,/^\[\s?x\s?\]\s$/,()=>{this.editor.execute("todoList"),this.editor.execute("checkTodoList")})}_addBasicStylesAutoformats(){const e=this.editor.commands;if(e.get("bold")){const e=ug(this.editor,"bold");dg(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,e),dg(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,e)}if(e.get("italic")){const e=ug(this.editor,"italic");dg(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,e),dg(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,e)}if(e.get("code")){const e=ug(this.editor,"code");dg(this.editor,this,/(`)([^`]+)(`)$/g,e)}if(e.get("strikethrough")){const e=ug(this.editor,"strikethrough");dg(this.editor,this,/(~~)([^~]+)(~~)$/g,e)}}_addHeadingAutoformats(){const e=this.editor.commands.get("heading");e&&e.modelElements.filter(e=>e.match(/^heading[1-6]$/)).forEach(t=>{const i=t[7],n=new RegExp(`^(#{${i}})\\s$`);lg(this.editor,this,n,()=>{if(!e.isEnabled||e.value===t)return!1;this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&lg(this.editor,this,/^>\s$/,"blockQuote")}_addCodeBlockAutoformats(){const e=this.editor,t=e.model.document.selection;e.commands.get("codeBlock")&&lg(e,this,/^```$/,()=>{if(t.getFirstPosition().parent.is("element","listItem"))return!1;this.editor.execute("codeBlock",{usePreviousLanguageChoice:!0})})}_addHorizontalLineAutoformats(){this.editor.commands.get("horizontalLine")&&lg(this.editor,this,/^---$/,"horizontalLine")}},class extends Qe{static get requires(){return[mg,fg]}static get pluginName(){return"Bold"}},class extends Qe{static get requires(){return[pg,bg]}static get pluginName(){return"Italic"}},class extends Qe{static get requires(){return[yg,xg]}static get pluginName(){return"BlockQuote"}},class extends Qe{static get pluginName(){return"CKFinder"}static get requires(){return["Link","CKFinderUploadAdapter",Eg,Ag]}},class extends an{static get pluginName(){return"CloudServices"}static get requires(){return[Cw]}init(){const e=this.context.config.get("cloudServices")||{};for(const t in e)this[t]=e[t];if(this._tokens=new Map,this.tokenUrl)return this.token=this.context.plugins.get("CloudServicesCore").createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init();this.token=null}registerTokenUrl(e){if(this._tokens.has(e))return Promise.resolve(this.getTokenFor(e));const t=this.context.plugins.get("CloudServicesCore").createToken(e);return this._tokens.set(e,t),t.init()}getTokenFor(e){const t=this._tokens.get(e);if(!t)throw new c.a("cloudservices-token-not-registered",this);return t}destroy(){super.destroy();for(const e of this._tokens.values())e.destroy()}},class extends Qe{static get requires(){return[Sg,"ImageUpload"]}init(){const e=this.editor;e.plugins.has("ImageBlockEditing")||e.plugins.has("ImageInlineEditing")||Object(c.b)("easy-image-image-feature-missing",e)}static get pluginName(){return"EasyImage"}},class extends Qe{static get requires(){return[zg,Lg]}static get pluginName(){return"Heading"}},class extends Qe{static get requires(){return[cm,dm]}static get pluginName(){return"Image"}},class extends Qe{static get requires(){return[mm,pm]}static get pluginName(){return"ImageCaption"}},class extends Qe{static get requires(){return[Mm,Nm]}static get pluginName(){return"ImageStyle"}},class extends Qe{static get requires(){return[Vg,Gg]}static get pluginName(){return"ImageToolbar"}afterInit(){const e=this.editor,t=e.t,i=e.plugins.get(Vg),n=e.plugins.get("ImageUtils");var o;i.register("image",{ariaLabel:t("Image toolbar"),items:(o=e.config.get("image.toolbar")||[],o.map(e=>w(e)?e.name:e)),getRelatedElement:e=>n.getClosestSelectedImageWidget(e)})}},class extends Qe{static get pluginName(){return"ImageUpload"}static get requires(){return[Ym,jm,Bm]}},class extends Qe{static get pluginName(){return"Indent"}static get requires(){return[Km,Zm]}},class extends Qe{static get requires(){return[Pf,zf,jf]}static get pluginName(){return"Link"}},class extends Qe{static get requires(){return[hp,gp]}static get pluginName(){return"List"}},class extends Qe{static get requires(){return[vp,Cp,xp,Xh]}static get pluginName(){return"MediaEmbed"}},Rg,class extends Qe{static get pluginName(){return"PasteFromOffice"}static get requires(){return[_h]}init(){const e=this.editor,t=e.editing.view.document,i=[];i.push(new Dp(t)),i.push(new Mp(t)),e.plugins.get("ClipboardPipeline").on("inputTransformation",(e,n)=>{if(n._isTransformedWithPasteFromOffice)return;const o=n.dataTransfer.getData("text/html"),r=i.find(e=>e.isActive(o));r&&(n._parsedData=Lp(o,t.stylesProcessor),r.execute(n),n._isTransformedWithPasteFromOffice=!0)},{priority:"high"})}},class extends Qe{static get requires(){return[tw,rw,aw,mw,uw,cw,Xh]}static get pluginName(){return"Table"}},class extends Qe{static get requires(){return[Vg]}static get pluginName(){return"TableToolbar"}afterInit(){const e=this.editor,t=e.t,i=e.plugins.get(Vg),n=e.config.get("table.contentToolbar"),o=e.config.get("table.tableToolbar");n&&i.register("tableContent",{ariaLabel:t("Table toolbar"),items:n,getRelatedElement:bw}),o&&i.register("table",{ariaLabel:t("Table toolbar"),items:o,getRelatedElement:pw})}},class extends Qe{static get requires(){return["Delete","Input"]}static get pluginName(){return"TextTransformation"}constructor(e){super(e),e.config.define("typing",{transformations:{include:ju}})}init(){const e=this.editor.model.document.selection;e.on("change:range",()=>{this.isEnabled=!e.anchor.parent.is("element","codeBlock")}),this._enableTransformationWatchers()}_enableTransformationWatchers(){const e=this.editor,t=e.model,i=e.plugins.get("Input"),n=e.plugins.get("Delete"),o=function(e){const t=e.extra||[],i=e.remove||[],n=e=>!i.includes(e);return function(e){const t=new Set;for(const i of e)if(Vu[i])for(const e of Vu[i])t.add(e);else t.add(i);return Array.from(t)}(e.include.concat(t).filter(n)).filter(n).map(e=>Lu[e]||e).map(e=>({from:Bu(e.from),to:Fu(e.to)}))}(e.config.get("typing.transformations")),r=new Su(e.model,e=>{for(const t of o){if(t.from.test(e))return{normalizedTransformation:t}}});r.on("matched:data",(e,o)=>{if(!i.isInput(o.batch))return;const{from:r,to:s}=o.normalizedTransformation,a=r.exec(o.text),c=s(a.slice(1)),l=o.range;let d=a.index;t.enqueueChange(e=>{for(let i=1;i<a.length;i++){const n=a[i],o=c[i-1];if(null==o){d+=n.length;continue}const r=l.start.getShiftedBy(d),s=t.createRange(r,r.getShiftedBy(n.length)),h=Hu(r);t.insertContent(e.createText(o,h),s),d+=o.length}t.enqueueChange(()=>{n.requestUndoOnBackspace()})})}),r.bind("isEnabled").to(this)}}],Tw.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","|","outdent","indent","|","uploadImage","blockQuote","insertTable","mediaEmbed","undo","redo"]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]},language:"en"}}]).default}));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/OpenTask.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/OpenTask.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Project_ProjectList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/Project/ProjectList.vue */ "./resources/js/views/Project/ProjectList.vue");
/* harmony import */ var _views_Project_UserList_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/Project/UserList.vue */ "./resources/js/views/Project/UserList.vue");
/* harmony import */ var _services_auth_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth/project */ "./resources/js/services/auth/project.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var queryProject;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.$route.query) {
                _context.next = 6;
                break;
              }

              if (!_this.$route.query.project) {
                _context.next = 6;
                break;
              }

              _context.next = 4;
              return _services_auth_project__WEBPACK_IMPORTED_MODULE_3__["default"].get(_this.$route.query.project);

            case 4:
              queryProject = _context.sent;

              if (queryProject.id) {
                _this.project_id_int = queryProject.id;
                _this.project_id = queryProject.project_id;
                _this.allowTask = true;
                _this.panel = [];

                _this.panel.push(1);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      project_id: "",
      project_id_int: 0,
      task_id: 0,
      panel: [0],
      allowTask: false,
      allowAssign: false,
      task: {
        task_title: "",
        description: "",
        files: [],
        assigned_to: 0,
        picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
      },
      taskErrors: {
        title: [],
        task_description: [],
        due_date: [],
        attachements: []
      },
      editorConfig: {},
      editor: (_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default())
    };
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  components: {
    "project-list": _views_Project_ProjectList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'user-list': _views_Project_UserList_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  methods: {
    assignTask: function assignTask() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData, i, task;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('title', _this2.task.task_title);
                formData.append('task_description', _this2.task.description);
                formData.append('assigned_on', _this2.task.assigned_to);
                formData.append('due_date', _this2.task.picker);
                formData.append('project_id', _this2.task.project_id);

                for (i = 0; i < _this2.task.files.length; i++) {
                  formData.append('attachements[' + i + ']', _this2.task.files[i]);
                }

                _context2.next = 9;
                return _services_auth_project__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(_this2.project_id_int, formData);

              case 9:
                task = _context2.sent;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                  title: "Task Assigned",
                  icon: "success",
                  showCancelButton: false
                });

                _this2.resetTaskErrors();

                _this2.project_id = "";
                _this2.project_id_int = 0;
                _this2.panel = [];

                _this2.panel.push(0);

                _this2.allowTask = false;
                _this2.allowAssign = false;
                _this2.task = {
                  task_title: "",
                  description: "",
                  files: [],
                  assigned_to: 0,
                  picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
                };

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    projectSelectEv: function projectSelectEv(data) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (data.project_id) {
                  _this3.project_id_int = data.project_id_int;
                  _this3.project_id = data.project_id;
                  _this3.allowTask = true;
                } else {
                  _this3.allowTask = false;
                  _this3.project_id = "";
                }

                _this3.panel = [];

                _this3.panel.push(1);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    userSelectEv: function userSelectEv(data) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.task.assigned_to = data.id;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    resetTaskErrors: function resetTaskErrors() {
      this.taskErrors = {
        title: [],
        task_description: [],
        due_date: [],
        attachements: []
      };
    },
    validateTask: function validateTask() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var formData, i, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.resetTaskErrors();

                formData = new FormData();
                formData.append('project_id', _this5.project_id);
                formData.append('title', _this5.task.task_title);
                formData.append('task_description', _this5.task.description);
                formData.append('due_date', _this5.task.picker);

                for (i = 0; i < _this5.task.files.length; i++) {
                  formData.append('attachements[' + i + ']', _this5.task.files[i]);
                }

                _context5.next = 9;
                return _services_auth_project__WEBPACK_IMPORTED_MODULE_3__["default"].validateTask(formData);

              case 9:
                res = _context5.sent;

                if (res.status) {
                  //validated
                  _this5.allowAssign = true;
                  _this5.panel = [];

                  _this5.panel.push(2);
                } else {
                  if (res.data.title) {
                    _this5.taskErrors.title = res.data.title;
                  }

                  if (res.data.task_description) {
                    _this5.taskErrors.task_description = res.data.task_description;
                  }

                  if (res.data.due_date) {
                    _this5.taskErrors.due_date = res.data.due_date;
                  }

                  if (res.data.attachements) {
                    _this5.taskErrors.attachements = res.data.attachements;
                  }
                }

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/ProjectList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/ProjectList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/project */ "./resources/js/services/auth/project.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      selectedProject: [],
      search: "",
      items: [],
      loading: true,
      totalRecords: 0,
      options: {},
      headers: [{
        text: "Title",
        align: "start",
        sortable: true,
        value: "title"
      }, {
        text: "Project ID",
        align: "start",
        sortable: true,
        value: "project_id"
      }, {
        text: "Customer",
        align: "start",
        sortable: true,
        value: "customer_email"
      }, {
        text: "Created@",
        align: "start",
        sortable: false,
        value: "created_at_formatted"
      }]
    };
  },
  watch: {
    $route: function $route() {
      this.getDataFromApi();
    },
    perpage: function perpage() {
      this.getDataFromApi();
    },
    options: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    },
    search: function search() {
      this.getDataFromApi();
    },
    selectedProject: function selectedProject() {
      this.$emit('selected-project', this.selectedProject.length > 0 ? this.selectedProject[0] : {});
    }
  },
  mounted: function mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.fakeApiCall();

              case 2:
                data = _context.sent;
                _this.items = data.data;

                try {
                  _this.totalRecords = data.meta.total;
                } catch (ex) {//this.totalRecords=0
                }

                _this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fakeApiCall: function fakeApiCall() {
      this.loading = true; // this.items = []

      var query = "";
      var page = this.options.page;
      query += "?page=" + page;

      if (this.options.sortBy.length > 0) {
        query += "&sortCol=" + this.options.sortBy[0];
      }

      if (this.options.sortDesc.length > 0) {
        //if 1 then by desc else asc
        query += "&sortByDesc=" + (this.options.sortDesc[0] == true ? 1 : 0);
      }

      query += "&perpage=" + this.options.itemsPerPage;

      if (this.search != "") {
        query += "&search=" + this.search;
      }

      return _services_auth_project__WEBPACK_IMPORTED_MODULE_1__["default"].getlist(query);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/UserList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/UserList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/user */ "./resources/js/services/auth/user.js");
var _data$watch$mounted$m;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data$watch$mounted$m = {
  data: function data() {
    return {
      selectedUser: [],
      search: "",
      items: [],
      loading: true,
      totalRecords: 0,
      options: {},
      headers: [{
        text: "Name",
        align: "start",
        sortable: true,
        value: "name"
      }, {
        text: "Email",
        align: "start",
        sortable: true,
        value: "email"
      }]
    };
  },
  watch: {
    $route: function $route() {
      this.getDataFromApi();
    },
    perpage: function perpage() {
      this.getDataFromApi();
    },
    options: {
      handler: function handler() {
        this.getDataFromApi();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi: function getDataFromApi() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.fakeApiCall();

              case 2:
                data = _context.sent;
                _this.items = data.data;

                try {
                  _this.totalRecords = data.meta.total;
                } catch (ex) {//this.totalRecords=0
                }

                _this.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    fakeApiCall: function fakeApiCall() {
      this.loading = true; // this.items = []

      var query = "";
      var page = this.options.page;
      query += "?page=" + page;

      if (this.options.sortBy.length > 0) {
        query += "&sortCol=" + this.options.sortBy[0];
      }

      if (this.options.sortDesc.length > 0) {
        //if 1 then by desc else asc
        query += "&sortByDesc=" + (this.options.sortDesc[0] == true ? 1 : 0);
      }

      query += "&perpage=" + this.options.itemsPerPage;

      if (this.search != "") {
        query += "&search=" + this.search;
      }

      query += "&role_id=" + this.role;
      return _services_auth_user__WEBPACK_IMPORTED_MODULE_1__["default"].getlist(query);
    }
  }
}, _defineProperty(_data$watch$mounted$m, "watch", {
  options: {
    handler: function handler() {
      this.getDataFromApi();
    },
    deep: true
  },
  search: function search() {
    this.getDataFromApi();
  },
  selectedUser: function selectedUser() {
    this.$emit('selected-user', this.selectedUser.length > 0 ? this.selectedUser[0] : {});
  }
}), _defineProperty(_data$watch$mounted$m, "props", {
  role: {
    type: Number,
    "default": 7
  }
}), _data$watch$mounted$m);

/***/ }),

/***/ "./resources/js/services/auth/project.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth/project.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var projectservice = /*#__PURE__*/function () {
  function projectservice() {
    _classCallCheck(this, projectservice);
  }

  _createClass(projectservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/project".concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "validateTask",
    value: function validateTask(formData) {
      return axios.post('/api/task-validate', formData).then(function (response) {
        return {
          status: 1,
          data: 'validated'
        };
      })["catch"](function (error) {
        return {
          status: 0,
          data: error.response.data.errors
        };
      });
    }
  }, {
    key: "createTask",
    value: function createTask(project_id_int, formData) {
      return axios.post('/api/project/' + project_id_int + '/task', formData).then(function (response) {
        return {
          status: 1,
          data: response.data
        };
      })["catch"](function (error) {
        return {
          status: 0,
          data: error.response.data.errors
        };
      });
    }
  }, {
    key: "create",
    value: function create(formData) {
      return axios.post('/api/project', formData).then(function (response) {
        return {
          status: 1,
          data: response.data.data
        };
      })["catch"](function (error) {
        return {
          status: 0,
          data: error.response.data.errors
        };
      });
    }
  }, {
    key: "get",
    value: function get(projectId) {
      return axios.get("/api/project/".concat(projectId)).then(function (response) {
        return response.data.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }]);

  return projectservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new projectservice());

/***/ }),

/***/ "./resources/js/services/auth/user.js":
/*!********************************************!*\
  !*** ./resources/js/services/auth/user.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var userservice = /*#__PURE__*/function () {
  function userservice() {
    _classCallCheck(this, userservice);
  }

  _createClass(userservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/user".concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/user', formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/user/".concat(id));
    }
  }, {
    key: "get",
    value: function get(id) {
      return axios.get("/api/user/".concat(id)).then(function (e) {
        return e.data.data;
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData.append('_method', 'put');
                _context2.next = 3;
                return axios.post('/api/user/' + id, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return userservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new userservice());

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.1.9
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';

  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  const consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  const uniqueArray = arr => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  const toArray = nodeList => Array.prototype.slice.call(nodeList);
  /**
   * Standardise console warnings
   * @param message
   */

  const warn = message => {
    console.warn("".concat(consolePrefix, " ").concat(typeof message === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  const error = message => {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  const previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;

  const isElement = elem => elem instanceof Element || isJqueryElement(elem);

  const argsToParams = args => {
    const params = {};

    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(typeof arg));
        }
      });
    }

    return params;
  };

  const swalPrefix = 'swal2-';
  const prefix = items => {
    const result = {};

    for (const i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  const swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  const iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  const getContainer = () => document.body.querySelector(".".concat(swalClasses.container));
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  const elementByClass = className => {
    return elementBySelector(".".concat(className));
  };

  const getPopup = () => elementByClass(swalClasses.popup);
  const getIcon = () => elementByClass(swalClasses.icon);
  const getTitle = () => elementByClass(swalClasses.title);
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);
  const getImage = () => elementByClass(swalClasses.image);
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);
  const getConfirmButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  const getDenyButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  const getInputLabel = () => elementByClass(swalClasses['input-label']);
  const getLoader = () => elementBySelector(".".concat(swalClasses.loader));
  const getCancelButton = () => elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  const getActions = () => elementByClass(swalClasses.actions);
  const getFooter = () => elementByClass(swalClasses.footer);
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);
  const getCloseButton = () => elementByClass(swalClasses.close); // https://github.com/jkup/focusable/blob/master/index.js

  const focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  const getFocusableElements = () => {
    const focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    const otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(el => el.getAttribute('tabindex') !== '-1');
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(el => isVisible(el));
  };
  const isModal = () => {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  const isToast = () => {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  const isLoading = () => {
    return getPopup().hasAttribute('data-loading');
  };

  const states = {
    previousBodyPadding: null
  };
  const setInnerHtml = (elem, html) => {
    // #1926
    elem.textContent = '';

    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(child => {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
  };
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }

    const classList = className.split(/\s+/);

    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  const removeCustomClasses = (elem, params) => {
    toArray(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(typeof params.customClass[className], "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  const getInput = (popup, inputType) => {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(popup, swalClasses[inputType]);

      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return popup.querySelector(".".concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return popup.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(popup, swalClasses.input);
    }
  };
  const focusInput = input => {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(className => {
      if (target.forEach) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };
  const getChildByClass = (elem, className) => {
    for (let i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  const applyNumericalStyle = (elem, property, value) => {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  const show = (elem, display = 'flex') => {
    elem.style.display = display;
  };
  const hide = elem => {
    elem.style.display = 'none';
  };
  const setStyle = (parent, selector, property, value) => {
    const el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  const toggle = (elem, condition, display) => {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  const isVisible = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  const allButtonsAreHidden = () => !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight); // borrowed from https://stackoverflow.com/a/46352119

  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  const animateTimerProgressBar = (timer, reset = false) => {
    const timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(() => {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  const resetOldContainer = () => {
    const oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  const resetValidationMessage = () => {
    if (Swal.isVisible()) {
      Swal.resetValidationMessage();
    }
  };

  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getChildByClass(popup, swalClasses.input);
    const file = getChildByClass(popup, swalClasses.file);
    const range = popup.querySelector(".".concat(swalClasses.range, " input"));
    const rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    const select = getChildByClass(popup, swalClasses.select);
    const checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    const textarea = getChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = () => {
      resetValidationMessage();
      rangeOutput.value = range.value;
    };

    range.onchange = () => {
      resetValidationMessage();
      range.nextSibling.value = range.value;
    };
  };

  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    const container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (typeof param === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  const handleJqueryElem = (target, elem) => {
    target.textContent = '';

    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  const animationEndEvent = (() => {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  })();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      const growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  const renderContainer = (instance, params) => {
    const container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container');
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    awaitingPromise: new WeakMap(),
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(inputType => {
      const inputClass = swalClasses[inputType];
      const inputContainer = getChildByClass(popup, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  const showInput = params => {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(() => {
      focusInput(input);
    });
  };

  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;

      if (!['type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  const setAttributes = (inputType, inputAttributes) => {
    const input = getInput(getPopup(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      addClass(label, params.customClass.inputLabel);
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  const getInputContainer = inputType => {
    const inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getPopup(), inputClass);
  };

  const renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(typeof params.inputValue, "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = (select, params) => {
    select.textContent = '';

    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput(getPopup(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = (textarea, params) => {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    setTimeout(() => {
      // #2291
      if ('MutationObserver' in window) {
        // #1699
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

        const textareaResizeHandler = () => {
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);

          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            getPopup().style.width = null;
          }
        };

        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    applyCustomClass(htmlContainer, params, 'htmlContainer'); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block'); // Content as plain text
    } else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block'); // No content
    } else {
      hide(htmlContainer);
    }

    renderInput(instance, params);
  };

  const renderFooter = (instance, params) => {
    const footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon(); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }

    if (!params.icon && !params.iconHtml) {
      return hide(icon);
    }

    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      return hide(icon);
    }

    show(icon); // Custom or default content

    setContent(icon, params);
    applyStyles(icon, params); // Animate icon

    addClass(icon, params.showClass.icon);
  };

  const applyStyles = (icon, params) => {
    for (const iconType in iconTypes) {
      if (params.icon !== iconType) {
        removeClass(icon, iconTypes[iconType]);
      }
    }

    addClass(icon, iconTypes[params.icon]); // Icon color

    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  const adjustSuccessIconBackgoundColor = () => {
    const popup = getPopup();
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  const setContent = (icon, params) => {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  const iconContent = content => "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");

  const renderImage = (instance, params) => {
    const image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';

    if (params.currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === params.currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  const renderTitle = (instance, params) => {
    const title = getTitle();
    toggle(title, params.title || params.titleText, 'block');

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup(); // Width

    if (params.toast) {
      // #2170
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      popup.insertBefore(getLoader(), getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    } // Padding


    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    }

    hide(getValidationMessage()); // Classes

    addClasses(popup, params);
  };

  const addClasses = (popup, params) => {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  const isVisible$1 = () => {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
  /*
   * Global function to click 'Deny' button
   */

  const clickDeny = () => getDenyButton() && getDenyButton().click();
  /*
   * Global function to click 'Cancel' button
   */

  const clickCancel = () => getCancelButton() && getCancelButton().click();

  function fire(...args) {
    const Swal = this;
    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }

    }

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  const showLoading = buttonToReplace => {
    let popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    const loader = getLoader();

    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }

    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  const RESTORE_FOCUS_TIMEOUT = 100;

  const globalState = {};

  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }

      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  const isTimerRunning = () => {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};
  function bindClickHandler(attr = 'data-swal-template') {
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  const checkIfParamIsDeprecated = param => {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  const showWarningsForParams = params => {
    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    for (const param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  function getInput$1(instance) {
    const innerParams = privateProps.innerParams.get(instance || this);
    const domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.popup, innerParams.input);
  }

  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  const undoScrollbar = () => {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  const iOSfix = () => {
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  const addBottomPaddingForTallPopups = () => {
    const safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      const bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  const lockBodyScroll = () => {
    // #1246
    const container = getContainer();
    let preventTouchMove;

    container.ontouchstart = e => {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = e => {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    target.tagName !== 'TEXTAREA' && // #2266
    !(isScrollable(getHtmlContainer()) && // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }

    return false;
  };

  const isStylys = event => {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  const isZoom = event => {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); // workaround for #2088
    // for some reason removing the container in Safari will scroll the document to bottom

    if (isSafari) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);

    if (this.isAwaitingPromise()) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  function isAwaitingPromise() {
    return !!privateProps.awaitingPromise.get(this);
  }

  const triggerClosePopup = instance => {
    const popup = getPopup();

    if (!popup) {
      return false;
    }

    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }

    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);

    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise()) {
      privateProps.awaitingPromise.delete(instance); // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335

      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer(); // If animation is supported, animate

    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);

    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }

    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');

      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    const input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    const domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    const input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    const domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  class Timer {
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }

    stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }

    increase(n) {
      const running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }

    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }

    isRunning() {
      return this.running;
    }

  }

  var defaultInputValidators = {
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(key => {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }

    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  const getTemplateParams = params => {
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  const getSwalParams = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      let value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (typeof defaultParams[paramName] === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  const getSwalButtons = templateContent => {
    const result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  const getSwalImage = templateContent => {
    const result = {};
    const image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  const getSwalIcon = templateContent => {
    const result = {};
    const icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  const getSwalInput = templateContent => {
    const result = {};
    const input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    const inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};

    for (const i in paramNames) {
      const paramName = paramNames[i];
      const tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }

    return result;
  };

  const showWarningsForElements = template => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  const showWarningsForAttributes = (el, allowedAttributes) => {
    toArray(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }

    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }

    removeClass(container, swalClasses['no-transition']);
  };

  const swalOpenAnimationFinished = event => {
    const popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  const addClasses$1 = (container, popup, params) => {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  const getCheckboxValue = input => input.checked ? 1 : 0;

  const getRadioValue = input => input.checked ? input.value : null;

  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  const handleInputOptions = (instance, params) => {
    const popup = getPopup();

    const processInputOptions = inputOptions => populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof params.inputOptions));
    }
  };

  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  const populateInputOptions = {
    select: (popup, inputOptions, params) => {
      const select = getChildByClass(popup, swalClasses.select);

      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: (popup, inputOptions, params) => {
      const radio = getChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  const formatInputOptions = inputOptions => {
    const result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];

        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  const handleConfirmOrDenyWithInput = (instance, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    const inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  const handleInputValidator = (instance, inputValue, type
  /* 'confirm' | 'deny' */
  ) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }

    if (innerParams.preDeny) {
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesnt get destroyed until the result from this preDeny's promise is received

      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      instance.closePopup({
        isDenied: true,
        value
      });
    }
  };

  const succeedWith = (instance, value) => {
    instance.closePopup({
      isConfirmed: true,
      value
    });
  };

  const rejectWith = (instance, error$$1) => {
    instance.rejectPromise(error$$1);
  };

  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);

    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      privateProps.awaitingPromise.set(instance || undefined, true); // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesnt get destroyed until the result from this preConfirm's promise is received

      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error$$1 => rejectWith(instance || undefined, error$$1));
    } else {
      succeedWith(instance, value);
    }
  };

  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  const setFocus = (innerParams, index, increment) => {
    const focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  const keydownHandler = (instance, e, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
      handleArrows(e.key); // ESC
    } else if (e.key === 'Escape') {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  const handleEnter = (instance, e, innerParams) => {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  const handleTab = (e, innerParams) => {
    const targetElement = e.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;

    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();

    if (![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
      return;
    }

    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    const buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  const handleEsc = (e, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  let ignoreOutsideClick = false;

  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();

      if (isModal()) {
        unsetAriaHidden();
      }
    }

    globalState.currentInstance = this;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131

    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      const dismissWith = dismiss => {
        instance.closePopup({
          isDismissed: true,
          dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);

      domCache.confirmButton.onclick = () => handleConfirmButtonClick(instance);

      domCache.denyButton.onclick = () => handleDenyButtonClick(instance);

      domCache.cancelButton.onclick = () => handleCancelButtonClick(instance, dismissWith);

      domCache.closeButton.onclick = () => dismissWith(DismissReason.close);

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  const setupTimer = (globalState$$1, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(() => {
          if (globalState$$1.timeout && globalState$$1.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  const blurActiveElement = () => {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    const validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(param => {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining weakmaps #2335

      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }

    disposeSwal(this);
  }

  const disposeSwal = instance => {
    disposeWeakMaps(instance); // Unset this.params so GC will dispose it (#1569)

    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset currentInstance

    delete globalState.currentInstance;
  };

  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retreived #2335
    if (instance.isAwaitingPromise()) {
      unsetWeakMaps(privateProps, instance);
      privateProps.awaitingPromise.set(instance, true);
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
    }
  };

  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    isAwaitingPromise: isAwaitingPromise,
    rejectPromise: rejectPromise,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  let currentInstance;

  class SweetAlert {
    constructor(...args) {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }

      currentInstance = this;
      const outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      const promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }

    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }

  } // Assign instance methods from src/instanceMethods/*.js to prototype


  Object.assign(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor

  Object.assign(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility

  Object.keys(instanceMethods).forEach(key => {
    SweetAlert[key] = function (...args) {
      if (currentInstance) {
        return currentInstance[key](...args);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.1.9';

  const Swal = SweetAlert;
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");

/***/ }),

/***/ "./resources/js/views/Project/OpenTask.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Project/OpenTask.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OpenTask_vue_vue_type_template_id_43a03838___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OpenTask.vue?vue&type=template&id=43a03838& */ "./resources/js/views/Project/OpenTask.vue?vue&type=template&id=43a03838&");
/* harmony import */ var _OpenTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OpenTask.vue?vue&type=script&lang=js& */ "./resources/js/views/Project/OpenTask.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OpenTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OpenTask_vue_vue_type_template_id_43a03838___WEBPACK_IMPORTED_MODULE_0__.render,
  _OpenTask_vue_vue_type_template_id_43a03838___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Project/OpenTask.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Project/ProjectList.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Project/ProjectList.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectList_vue_vue_type_template_id_6e861b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=template&id=6e861b72& */ "./resources/js/views/Project/ProjectList.vue?vue&type=template&id=6e861b72&");
/* harmony import */ var _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectList.vue?vue&type=script&lang=js& */ "./resources/js/views/Project/ProjectList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectList_vue_vue_type_template_id_6e861b72___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectList_vue_vue_type_template_id_6e861b72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Project/ProjectList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Project/UserList.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Project/UserList.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserList_vue_vue_type_template_id_f67e4204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=f67e4204& */ "./resources/js/views/Project/UserList.vue?vue&type=template&id=f67e4204&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/views/Project/UserList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_f67e4204___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserList_vue_vue_type_template_id_f67e4204___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Project/UserList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Project/OpenTask.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Project/OpenTask.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OpenTask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/OpenTask.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Project/ProjectList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Project/ProjectList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/ProjectList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Project/UserList.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Project/UserList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/UserList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Project/OpenTask.vue?vue&type=template&id=43a03838&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Project/OpenTask.vue?vue&type=template&id=43a03838& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenTask_vue_vue_type_template_id_43a03838___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenTask_vue_vue_type_template_id_43a03838___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OpenTask_vue_vue_type_template_id_43a03838___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OpenTask.vue?vue&type=template&id=43a03838& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/OpenTask.vue?vue&type=template&id=43a03838&");


/***/ }),

/***/ "./resources/js/views/Project/ProjectList.vue?vue&type=template&id=6e861b72&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Project/ProjectList.vue?vue&type=template&id=6e861b72& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_6e861b72___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_6e861b72___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_6e861b72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectList.vue?vue&type=template&id=6e861b72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/ProjectList.vue?vue&type=template&id=6e861b72&");


/***/ }),

/***/ "./resources/js/views/Project/UserList.vue?vue&type=template&id=f67e4204&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Project/UserList.vue?vue&type=template&id=f67e4204& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_f67e4204___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_f67e4204___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_f67e4204___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=template&id=f67e4204& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/UserList.vue?vue&type=template&id=f67e4204&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/OpenTask.vue?vue&type=template&id=43a03838&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/OpenTask.vue?vue&type=template&id=43a03838& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-expansion-panels",
        {
          attrs: { multiple: "" },
          model: {
            value: _vm.panel,
            callback: function ($$v) {
              _vm.panel = $$v
            },
            expression: "panel",
          },
        },
        [
          _c(
            "v-expansion-panel",
            [
              _c("v-expansion-panel-header", [
                _vm._v(" Select Project "),
                _c("strong", [_vm._v(_vm._s(_vm.project_id))]),
              ]),
              _vm._v(" "),
              _c(
                "v-expansion-panel-content",
                [
                  _c("project-list", {
                    on: { "selected-project": _vm.projectSelectEv },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-expansion-panel",
            { attrs: { disabled: !_vm.allowTask } },
            [
              _c("v-expansion-panel-header", [
                _vm._v(
                  " " +
                    _vm._s(
                      _vm.allowAssign === true
                        ? _vm.task.task_title
                        : "Create Task"
                    ) +
                    " "
                ),
              ]),
              _vm._v(" "),
              _c(
                "v-expansion-panel-content",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Task",
                              required: "",
                              placeholder: "Task Title Here",
                              "error-messages": _vm.taskErrors.title,
                            },
                            model: {
                              value: _vm.task.task_title,
                              callback: function ($$v) {
                                _vm.$set(_vm.task, "task_title", $$v)
                              },
                              expression: "task.task_title",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("label", [_vm._v("Description")]),
                          _vm._v(" "),
                          _c("ckeditor", {
                            attrs: {
                              editor: _vm.editor,
                              config: _vm.editorConfig,
                            },
                            model: {
                              value: _vm.task.description,
                              callback: function ($$v) {
                                _vm.$set(_vm.task, "description", $$v)
                              },
                              expression: "task.description",
                            },
                          }),
                          _vm._v(" "),
                          _vm.taskErrors.task_description.length > 0
                            ? _c("v-alert", { attrs: { type: "error" } }, [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.taskErrors.task_description[0]) +
                                    "\n            "
                                ),
                              ])
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("label", [_vm._v("Due Date")]),
                          _vm._v(" "),
                          _c("v-date-picker", {
                            attrs: { landscape: true, "full-width": "" },
                            model: {
                              value: _vm.task.picker,
                              callback: function ($$v) {
                                _vm.$set(_vm.task, "picker", $$v)
                              },
                              expression: "task.picker",
                            },
                          }),
                          _vm._v(" "),
                          _vm.taskErrors.due_date.length > 0
                            ? _c("v-alert", { attrs: { type: "error" } }, [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.taskErrors.due_date[0]) +
                                    "\n            "
                                ),
                              ])
                            : _vm._e(),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c("v-file-input", {
                            attrs: {
                              color: "deep-purple accent-4",
                              counter: "",
                              label: "Attachements",
                              multiple: "",
                              placeholder:
                                "Select Files to attach with the task",
                              "prepend-icon": "mdi-paperclip",
                              "show-size": 1000,
                              "error-messages": _vm.taskErrors.attachements,
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "selection",
                                fn: function (ref) {
                                  var index = ref.index
                                  var text = ref.text
                                  return [
                                    index < 2
                                      ? _c(
                                          "v-chip",
                                          {
                                            attrs: {
                                              color: "deep-purple accent-4",
                                              dark: "",
                                              label: "",
                                              small: "",
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                  " +
                                                _vm._s(text) +
                                                "\n                "
                                            ),
                                          ]
                                        )
                                      : index === 2
                                      ? _c(
                                          "span",
                                          {
                                            staticClass:
                                              "text-overline grey--text text--darken-3 mx-2",
                                          },
                                          [
                                            _vm._v(
                                              "\n                  +" +
                                                _vm._s(
                                                  _vm.task.files.length - 2
                                                ) +
                                                " File(s)\n                "
                                            ),
                                          ]
                                        )
                                      : _vm._e(),
                                  ]
                                },
                              },
                            ]),
                            model: {
                              value: _vm.task.files,
                              callback: function ($$v) {
                                _vm.$set(_vm.task, "files", $$v)
                              },
                              expression: "task.files",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "float-right",
                              attrs: {
                                outlined: "",
                                tile: "",
                                color: "success",
                              },
                              on: { click: _vm.validateTask },
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v(" mdi-arrow-right-thick "),
                              ]),
                              _vm._v("\n              Assign\n            "),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-expansion-panel",
            { attrs: { disabled: !_vm.allowAssign } },
            [
              _c("v-expansion-panel-header", [
                _vm._v(" Assign to Production "),
              ]),
              _vm._v(" "),
              _c(
                "v-expansion-panel-content",
                [
                  _c("user-list", {
                    on: { "selected-user": _vm.userSelectEv },
                  }),
                  _vm._v(" "),
                  _vm.task.assigned_to > 0
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", md: "12" } },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "float-right",
                              attrs: {
                                outlined: "",
                                tile: "",
                                color: "success",
                              },
                              on: { click: _vm.assignTask },
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v(" mdi-arrow-right-thick "),
                              ]),
                              _vm._v("\n            Assign Now\n          "),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/ProjectList.vue?vue&type=template&id=6e861b72&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/ProjectList.vue?vue&type=template&id=6e861b72& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.items,
      options: _vm.options,
      "server-items-length": _vm.totalRecords,
      loading: _vm.loading,
      "show-select": "",
      "single-select": true,
      "item-key": "project_id",
    },
    on: {
      "update:options": function ($event) {
        _vm.options = $event
      },
    },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function () {
          return [
            _c("v-text-field", {
              staticClass: "mx-4",
              attrs: { label: "Search" },
              model: {
                value: _vm.search,
                callback: function ($$v) {
                  _vm.search = $$v
                },
                expression: "search",
              },
            }),
          ]
        },
        proxy: true,
      },
      {
        key: "item.email",
        fn: function (ref) {
          var item = ref.item
          return [
            _vm._v(
              "\n    " + _vm._s(item.name) + " | " + _vm._s(item.email) + "\n  "
            ),
          ]
        },
      },
    ]),
    model: {
      value: _vm.selectedProject,
      callback: function ($$v) {
        _vm.selectedProject = $$v
      },
      expression: "selectedProject",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/UserList.vue?vue&type=template&id=f67e4204&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Project/UserList.vue?vue&type=template&id=f67e4204& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.items,
      options: _vm.options,
      "server-items-length": _vm.totalRecords,
      loading: _vm.loading,
      "show-select": "",
      "single-select": true,
      "item-key": "id",
    },
    on: {
      "update:options": function ($event) {
        _vm.options = $event
      },
    },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function () {
          return [
            _c("v-text-field", {
              staticClass: "mx-4",
              attrs: { label: "Search" },
              model: {
                value: _vm.search,
                callback: function ($$v) {
                  _vm.search = $$v
                },
                expression: "search",
              },
            }),
          ]
        },
        proxy: true,
      },
    ]),
    model: {
      value: _vm.selectedUser,
      callback: function ($$v) {
        _vm.selectedUser = $$v
      },
      expression: "selectedUser",
    },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);