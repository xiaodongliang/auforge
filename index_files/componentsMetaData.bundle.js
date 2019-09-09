(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["componentsMetaData"] = factory(require("lodash"));
	else
		root["componentsMetaData"] = factory(root["_"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.334.0/";
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1147);
/******/ })
/************************************************************************/
/******/ ({

/***/ 110:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/ds/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 162);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 76);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 163);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 164);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.RichTextBox';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 111:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/ds/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 165);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 166);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 77);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 167);

var componentType = 'wixui.ToggleSwitch';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 112:
/*!******************************************!*\
  !*** ./components/SearchBox/ds/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 168);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _hooks = __webpack_require__(/*! ../hooks */ 169);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 170);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 82);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 171);


var componentType = 'wixui.SearchBox';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 113:
/*!*****************************************!*\
  !*** ./components/BarChart/ds/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 172);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _hooks = __webpack_require__(/*! ../hooks */ 173);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 174);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 83);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 175);

var componentType = 'wixui.BarChart';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 114:
/*!*******************************************!*\
  !*** ./components/TimePicker/ds/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 177);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 178);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 179);

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 84);
var componentType = 'wixui.TimePicker';

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  metaData: _metaData2.default,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 1147:
/*!*******************************!*\
  !*** ./componentsMetaData.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _richTextBox$componen;

var _ds = __webpack_require__(/*! ./legacy/components/RichTextBox/ds */ 110);

var _ds2 = _interopRequireDefault(_ds);

var _ds3 = __webpack_require__(/*! ./legacy/components/ToggleSwitch/ds */ 111);

var _ds4 = _interopRequireDefault(_ds3);

var _ds5 = __webpack_require__(/*! ./components/Slider/ds */ 63);

var _ds6 = _interopRequireDefault(_ds5);

var _ds7 = __webpack_require__(/*! ./components/SearchBox/ds */ 112);

var _ds8 = _interopRequireDefault(_ds7);

var _ds9 = __webpack_require__(/*! ./components/BarChart/ds */ 113);

var _ds10 = _interopRequireDefault(_ds9);

var _ds11 = __webpack_require__(/*! ./components/TimePicker/ds */ 114);

var _ds12 = _interopRequireDefault(_ds11);

var _ds13 = __webpack_require__(/*! ./components/RatingsInput/ds */ 116);

var _ds14 = _interopRequireDefault(_ds13);

var _ds15 = __webpack_require__(/*! ./components/RatingsDisplay/ds */ 117);

var _ds16 = _interopRequireDefault(_ds15);

var _ds17 = __webpack_require__(/*! ./components/Tags/ds */ 118);

var _ds18 = _interopRequireDefault(_ds17);

var _ds19 = __webpack_require__(/*! ./components/VideoPlayer/ds */ 119);

var _ds20 = _interopRequireDefault(_ds19);

var _ds21 = __webpack_require__(/*! ./components/AddressInput/ds */ 115);

var _ds22 = _interopRequireDefault(_ds21);

var _ds23 = __webpack_require__(/*! ./components/LineShareButton/ds */ 120);

var _ds24 = _interopRequireDefault(_ds23);

var _ds25 = __webpack_require__(/*! ./components/Captcha/ds */ 121);

var _ds26 = _interopRequireDefault(_ds25);

var _ds27 = __webpack_require__(/*! ./components/MusicPlayer/ds */ 122);

var _ds28 = _interopRequireDefault(_ds27);

var _ds29 = __webpack_require__(/*! ./components/StylableButton/ds */ 123);

var _ds30 = _interopRequireDefault(_ds29);

var _ds31 = __webpack_require__(/*! ./components/StylableLine/ds */ 238);

var _ds32 = _interopRequireDefault(_ds31);

var _ds33 = __webpack_require__(/*! ./components/ProgressBar/ds */ 124);

var _ds34 = _interopRequireDefault(_ds33);

var _ds35 = __webpack_require__(/*! ./components/Dropdown/ds */ 239);

var _ds36 = _interopRequireDefault(_ds35);

var _ds37 = __webpack_require__(/*! ./components/CustomElement/ds */ 125);

var _ds38 = _interopRequireDefault(_ds37);

var _ds39 = __webpack_require__(/*! ./components/SignatureInput/ds */ 126);

var _ds40 = _interopRequireDefault(_ds39);

var _ds41 = __webpack_require__(/*! ./components/FileUploaderNew/ds */ 127);

var _ds42 = _interopRequireDefault(_ds41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_richTextBox$componen = {}, _defineProperty(_richTextBox$componen, _ds2.default.componentType, _ds2.default.metaData), _defineProperty(_richTextBox$componen, _ds4.default.componentType, _ds4.default.metaData), _defineProperty(_richTextBox$componen, _ds6.default.componentType, _ds6.default.metaData), _defineProperty(_richTextBox$componen, _ds8.default.componentType, _ds8.default.metaData), _defineProperty(_richTextBox$componen, _ds12.default.componentType, _ds12.default.metaData), _defineProperty(_richTextBox$componen, _ds14.default.componentType, _ds14.default.metaData), _defineProperty(_richTextBox$componen, _ds16.default.componentType, _ds16.default.metaData), _defineProperty(_richTextBox$componen, _ds20.default.componentType, _ds20.default.metaData), _defineProperty(_richTextBox$componen, _ds22.default.componentType, _ds22.default.metaData), _defineProperty(_richTextBox$componen, _ds24.default.componentType, _ds24.default.metaData), _defineProperty(_richTextBox$componen, _ds26.default.componentType, _ds26.default.metaData), _defineProperty(_richTextBox$componen, _ds18.default.componentType, _ds18.default.metaData), _defineProperty(_richTextBox$componen, _ds28.default.componentType, _ds28.default.metaData), _defineProperty(_richTextBox$componen, _ds30.default.componentType, _ds30.default.metaData), _defineProperty(_richTextBox$componen, _ds32.default.componentType, _ds32.default.metaData), _defineProperty(_richTextBox$componen, _ds34.default.componentType, _ds34.default.metaData), _defineProperty(_richTextBox$componen, _ds36.default.componentType, _ds36.default.metaData), _defineProperty(_richTextBox$componen, _ds10.default.componentType, _ds10.default.metaData), _defineProperty(_richTextBox$componen, _ds38.default.componentType, _ds38.default.metaData), _defineProperty(_richTextBox$componen, _ds40.default.componentType, _ds40.default.metaData), _defineProperty(_richTextBox$componen, _ds42.default.componentType, _ds42.default.metaData), _richTextBox$componen);

/***/ }),

/***/ 115:
/*!*********************************************!*\
  !*** ./components/AddressInput/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 180);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 181);
var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 85);
var componentType = 'wixui.AddressInput';
var metaData = __webpack_require__(/*! ../metaData */ 182);

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema,
  metaData: metaData
};

/***/ }),

/***/ 116:
/*!*********************************************!*\
  !*** ./components/RatingsInput/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 183);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 184);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 86);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 185);

var componentType = 'wixui.RatingsInput';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 117:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/ds/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 186);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 187);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 87);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 188);

var componentType = 'wixui.RatingsDisplay';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 118:
/*!*************************************!*\
  !*** ./components/Tags/ds/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 189);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 190);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ./propertiesSchema */ 88);
var dataSchema = __webpack_require__(/*! ./dataSchema */ 191);

var componentType = 'wixui.Tags';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 119:
/*!********************************************!*\
  !*** ./components/VideoPlayer/ds/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 192);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 193);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 89);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 194);

var componentType = 'wixui.VideoPlayer';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 120:
/*!************************************************!*\
  !*** ./components/LineShareButton/ds/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentType = __webpack_require__(/*! ./componentType */ 75);

var _componentType2 = _interopRequireDefault(_componentType);

var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 195);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 196);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ./propertiesSchema */ 90);

module.exports = {
  componentType: _componentType2.default,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 121:
/*!****************************************!*\
  !*** ./components/Captcha/ds/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 197);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 198);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 91);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 199);

var componentType = 'wixui.Captcha';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 122:
/*!********************************************!*\
  !*** ./components/MusicPlayer/ds/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 200);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 201);
var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 92);
var componentType = 'wixui.MusicPlayer';
var metaData = __webpack_require__(/*! ../metaData */ 202);

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema,
  metaData: metaData
};

/***/ }),

/***/ 123:
/*!***********************************************!*\
  !*** ./components/StylableButton/ds/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 203);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 204);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 205);


module.exports = {
  componentType: 'wixui.StylableButton',
  componentDefinition: _componentDefinition2.default,
  dataSchema: dataSchema,
  metaData: _metaData2.default
};

/***/ }),

/***/ 124:
/*!********************************************!*\
  !*** ./components/ProgressBar/ds/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 206);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 207);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 93);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 208);

var componentType = 'wixui.ProgressBar';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 125:
/*!**********************************************!*\
  !*** ./components/CustomElement/ds/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 209);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _constants = __webpack_require__(/*! ../constants */ 31);

var _metaData = __webpack_require__(/*! ./metaData */ 210);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 211);

module.exports = {
  componentType: _constants.COMP_TYPE,
  componentDefinition: _componentDefinition2.default,
  dataSchema: dataSchema,
  metaData: _metaData2.default
};

/***/ }),

/***/ 126:
/*!***********************************************!*\
  !*** ./components/SignatureInput/ds/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 212);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 94);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 213);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 214);

var _metaData2 = _interopRequireDefault(_metaData);

var _constants = __webpack_require__(/*! ../constants */ 29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  componentType: _constants.ComponentMetaData.componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 127:
/*!************************************************!*\
  !*** ./components/FileUploaderNew/ds/index.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 215);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 95);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 216);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 217);

var _metaData2 = _interopRequireDefault(_metaData);

var _constants = __webpack_require__(/*! ../constants */ 30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  componentType: _constants.ComponentMetaData.componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 162:
/*!**************************************************************!*\
  !*** ./legacy/components/RichTextBox/componentDefinition.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RichTextBox': {
    skins: ['wixui.skins.RichTextBox'],
    dataTypes: ['RichTextBox'],
    propertyType: 'RichTextBoxProperties',
    nickname: 'richTextBox',
    styles: {
      richtextbox1: 'wixui.skins.RichTextBox'
    }
  }
};

/***/ }),

/***/ 163:
/*!*****************************************************!*\
  !*** ./legacy/components/RichTextBox/dataSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataSchema = {
  RichTextBox: {
    type: 'object',
    allOf: [{
      properties: {
        maxLength: {
          type: ['number', 'null'],
          description: 'maximum number of characters allowed'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

exports.default = dataSchema;

/***/ }),

/***/ 164:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  disableable: true,
  isRepeatable: true,
  layoutLimits: {
    minHeight: 100,
    minWidth: 200
  }
};

/***/ }),

/***/ 165:
/*!***************************************************************!*\
  !*** ./legacy/components/ToggleSwitch/componentDefinition.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.ToggleSwitch': {
    skins: ['wixui.skins.ToggleSwitch'],
    dataTypes: ['ToggleSwitch'],
    propertyType: 'ToggleSwitchProperties',
    nickname: 'switch',
    styles: {
      ts1: 'wixui.skins.ToggleSwitch'
    }
  }
};

/***/ }),

/***/ 166:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/metaData.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  resizableSides: [],
  layoutLimits: {
    minHeight: 24,
    maxHeight: 128,
    minWidth: 48,
    maxWidth: 256,
    aspectRatio: 2
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 167:
/*!******************************************************!*\
  !*** ./legacy/components/ToggleSwitch/dataSchema.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  ToggleSwitch: {
    type: 'object',
    allOf: [{
      properties: {
        checked: {
          type: 'boolean',
          description: 'The checked status of the input'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 168:
/*!*****************************************************!*\
  !*** ./components/SearchBox/componentDefinition.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.SearchBox': {
    skins: ['wixui.skins.SearchBox'],
    dataTypes: ['SearchBox'],
    propertyType: 'SearchBoxProperties',
    nickname: 'searchBox',
    styles: {
      SearchBox_1: 'wixui.skins.SearchBox'
    }
  }
};

/***/ }),

/***/ 169:
/*!***************************************!*\
  !*** ./components/SearchBox/hooks.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function beforeUpdateProperties() {
  console.log('beforeUpdateProperties');
}

function beforeUpdateData() {
  console.log('beforeUpdateData');
}

function beforeUpdateLayout() {
  console.log('beforeUpdateLayout');
}

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 170:
/*!******************************************!*\
  !*** ./components/SearchBox/metaData.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 171:
/*!********************************************!*\
  !*** ./components/SearchBox/dataSchema.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  SearchBox: {
    type: 'object',
    properties: {
      placeholder: {
        type: 'string',
        default: 'Search...',
        maxLength: 255
      },
      suggestionsEnabled: {
        type: 'boolean',
        default: true,
        description: 'Determines whether the suggestions disabled or not'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 172:
/*!****************************************************!*\
  !*** ./components/BarChart/componentDefinition.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.BarChart': {
    skins: ['wixui.skins.BarChart'],
    dataTypes: ['BarChart'],
    propertyType: 'BarChartProperties',
    nickname: 'barChart',
    styles: {
      barChart1: 'wixui.skins.BarChart'
    }
  }
};

/***/ }),

/***/ 173:
/*!**************************************!*\
  !*** ./components/BarChart/hooks.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateOrientationLayout(prevLayout) {
  return _lodash2.default.assign({}, prevLayout, {
    width: prevLayout.height,
    height: prevLayout.width
  });
}

function getTicksSize(tickShape, tickPosition) {
  if (tickPosition === 'middle') {
    return 0;
  }

  switch (tickShape) {
    default:
    case 'line':
      return 22;
    case 'dot':
      return 15;
    case 'none':
      return 0;
  }
}

function shouldShowTicks(data, props) {
  return data.step > 0 && props.tickMarksShape !== 'none';
}

function updateTicksLayout(_ref) {
  var prevLayout = _ref.prevLayout,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      prevData = _ref.prevData,
      nextData = _ref.nextData;

  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var showTicks = shouldShowTicks(nextData, nextProps);
  var lastSize = lastShowTicks ? getTicksSize(prevProps.tickMarksShape, prevProps.tickMarksPosition) : 0;
  var size = showTicks ? getTicksSize(nextProps.tickMarksShape, nextProps.tickMarksPosition) : 0;
  var sizeDiff = size - lastSize;
  var dim = nextProps.orientation === 'horizontal' ? 'height' : 'width';

  return _lodash2.default.assign({}, prevLayout, _defineProperty({}, dim, prevLayout[dim] + sizeDiff));
}

function didOrientationChange(prevProps, nextProps) {
  return nextProps.orientation && prevProps.orientation && nextProps.orientation !== prevProps.orientation;
}

function didTicksChange(prevProps, nextProps, prevData, nextData) {
  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var nextShowTicks = shouldShowTicks(nextData, nextProps);
  var lastTickMarksShape = prevProps.tickMarksShape;
  var nextTickMarksShape = nextProps.tickMarksShape;
  var lastTickMarksPosition = prevProps.tickMarksPosition;
  var nextTickMarksPosition = nextProps.tickMarksPosition;

  return lastShowTicks !== nextShowTicks || lastTickMarksShape !== nextTickMarksShape || lastTickMarksPosition !== nextTickMarksPosition;
}

var beforeUpdate = function beforeUpdate(_ref2) {
  var compDriver = _ref2.compDriver,
      prevProps = _ref2.prevProps,
      nextProps = _ref2.nextProps,
      prevData = _ref2.prevData,
      nextData = _ref2.nextData;

  var prevLayout = compDriver.layout.get();
  var newLayout = void 0;

  if (didOrientationChange(prevProps, nextProps)) {
    newLayout = updateOrientationLayout(prevLayout);
  } else if (didTicksChange(prevProps, nextProps, prevData, nextData)) {
    newLayout = updateTicksLayout({ prevLayout: prevLayout, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: nextData });
  }

  if (newLayout) {
    compDriver.layout.update(newLayout);
  }
};

var beforeUpdateProperties = function beforeUpdateProperties(compDriver, nextProps) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: prevData });
};

var beforeUpdateData = function beforeUpdateData(compDriver, nextData) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: prevProps, prevData: prevData, nextData: nextData });
};

var getSize = function getSize(currentLayout, nextLayout) {
  return {
    width: nextLayout.width || currentLayout.width,
    height: nextLayout.height || currentLayout.height
  };
};

var beforeUpdateLayout = function beforeUpdateLayout(compDriver, nextLayout) {
  if (!nextLayout.width && !nextLayout.height) {
    return;
  }

  var currentLayout = compDriver.layout.get();
  var compProperties = compDriver.properties.get();

  var _getSize = getSize(currentLayout, nextLayout),
      width = _getSize.width,
      height = _getSize.height;

  var newLayout = _lodash2.default.cloneDeep(nextLayout);

  if (compProperties.orientation === 'vertical') {
    var minHeight = 4 * width;
    newLayout.height = Math.max(height, minHeight);
  } else if (compProperties.orientation === 'horizontal') {
    var minWidth = 4 * height;
    newLayout.width = Math.max(width, minWidth);
  }

  compDriver.layout.update(newLayout);
};

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 174:
/*!*****************************************!*\
  !*** ./components/BarChart/metaData.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 175:
/*!*******************************************!*\
  !*** ./components/BarChart/dataSchema.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  BarChart: {
    type: 'object',
    properties: {
      dataset: {
        type: 'array'
      },
      total: {
        type: 'number'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 177:
/*!******************************************************!*\
  !*** ./components/TimePicker/componentDefinition.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.TimePicker': {
    skins: ['wixui.skins.TimePicker'],
    dataTypes: ['TimePickerData'],
    propertyType: 'TimePickerProperties',
    nickname: 'timePicker',
    styles: {
      tp1: 'wixui.skins.TimePicker'
    }
  }
};

/***/ }),

/***/ 178:
/*!*******************************************!*\
  !*** ./components/TimePicker/metaData.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 42,
    minWidth: 150
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 179:
/*!*********************************************!*\
  !*** ./components/TimePicker/dataSchema.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  TimePickerData: {
    type: 'object',
    allOf: [{
      properties: {
        placeholder: {
          type: 'string',
          description: 'The value of the placeholder if chosen',
          maxLength: 1000
        },
        step: {
          type: 'number',
          minimum: 1,
          maximum: 60,
          default: 1,
          description: 'Increment step in minutes'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 180:
/*!********************************************************!*\
  !*** ./components/AddressInput/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 73);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: [_constants.ComponentMetaData.displayName],
  propertyType: _constants.ComponentMetaData.propertiesType,
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    ai1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 181:
/*!***********************************************!*\
  !*** ./components/AddressInput/dataSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  AddressInput: {
    type: 'object',
    properties: {
      locale: { type: 'string', maxLength: 100 },
      googleMapsApiKey: { type: 'string', maxLength: 400 },
      filter: {
        oneOf: [{
          type: 'null'
        }, {
          type: 'object',
          properties: {
            country: { type: 'string', maxLength: 10 }
          }
        }],
        default: null
      },
      sorting: {
        oneOf: [{
          type: 'null'
        }, {
          type: 'object',
          properties: {
            location: {
              type: 'object',
              properties: {
                lat: { type: 'number' },
                lng: { type: 'number' }
              }
            },
            radius: {
              type: 'number',
              default: 100
            },
            formatted: { type: 'string', maxLength: 10 }
          }
        }],
        default: null
      },
      placeholder: {
        type: 'string',
        description: 'The value of the placeholder if chosen',
        maxLength: 1000
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 182:
/*!*********************************************!*\
  !*** ./components/AddressInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaData = {
  layoutLimits: {
    minHeight: 25,
    minWidth: 200
  },
  isRepeatable: true,
  disableable: true
};

module.exports = metaData;

/***/ }),

/***/ 183:
/*!********************************************************!*\
  !*** ./components/RatingsInput/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RatingsInput': {
    skins: ['wixui.skins.Rating'],
    dataTypes: ['RatingsInput'],
    propertyType: 'RatingsInputProperties',
    nickname: 'ratingsInput',
    styles: {
      ri1: 'wixui.skins.Rating'
    }
  }
};

/***/ }),

/***/ 184:
/*!*********************************************!*\
  !*** ./components/RatingsInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 25,
    shapeSpacing: 5
  },
  isRepeatable: true
};

/***/ }),

/***/ 185:
/*!***********************************************!*\
  !*** ./components/RatingsInput/dataSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  RatingsInput: {
    type: 'object',
    properties: {
      value: {
        type: ['number', 'null'],
        description: 'The rating value currently selected',
        minimum: 0,
        maximum: 5
      },
      titleText: {
        type: 'string',
        description: 'the title before a value is selected',
        maxLength: 300
      },
      labels: {
        type: 'object',
        description: 'contains the labels for the different values. maps 1-5 as keys to strings',
        default: {
          1: 'Bad', 2: 'Fine', 3: 'OK', 4: 'Good', 5: 'Great'
        }
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 186:
/*!**********************************************************!*\
  !*** ./components/RatingsDisplay/componentDefinition.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RatingsDisplay': {
    skins: ['wixui.skins.Rating'],
    dataTypes: ['RatingsDisplay'],
    propertyType: 'RatingsDisplayProperties',
    nickname: 'ratingsDisplay',
    styles: {
      rd1: 'wixui.skins.Rating'
    }
  }
};

/***/ }),

/***/ 187:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/metaData.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 20,
    shapeSpacing: 5
  },
  isRepeatable: true
};

/***/ }),

/***/ 188:
/*!*************************************************!*\
  !*** ./components/RatingsDisplay/dataSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  RatingsDisplay: {
    type: 'object',
    properties: {
      rating: {
        type: 'number',
        description: 'The rating displayed by the component',
        minimum: 1,
        maximum: 5
      },
      svgId: {
        type: 'string',
        maxLength: 100
      },
      numRatings: {
        type: 'number',
        description: 'The amount of ratings the rating is based on',
        minimum: 0
      },
      reviewsCountLabel: {
        type: 'string',
        default: 'Reviews',
        maxLength: 400,
        description: 'Text that describes the numRatings value'
      },
      noReviewsPlaceholder: {
        type: 'string',
        default: 'Be the first to rate this item',
        maxLength: 1000,
        description: 'Placeholder text when there aren\'t any reviews'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 189:
/*!***************************************************!*\
  !*** ./components/Tags/ds/componentDefinition.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Tags': {
    skins: ['wixui.skins.Tags'],
    dataTypes: ['Tags'],
    propertyType: 'TagsProperties',
    nickname: 'tags',
    styles: {
      tags1: 'wixui.skins.Tags'
    }
  }
};

/***/ }),

/***/ 190:
/*!****************************************!*\
  !*** ./components/Tags/ds/metaData.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minWidth: 60
  }
};

/***/ }),

/***/ 191:
/*!******************************************!*\
  !*** ./components/Tags/ds/dataSchema.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Tags: {
    type: 'object',
    properties: {
      items: {
        type: ['null', 'array'],
        pseudoType: ['refList']
      }
    }
  },
  TagItem: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
        maxLength: 400
      },
      link: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 192:
/*!*******************************************************!*\
  !*** ./components/VideoPlayer/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.VideoPlayer': {
    skins: ['wixui.skins.VideoPlayer'],
    dataTypes: ['VideoPlayer'],
    propertyType: 'VideoPlayerProperties',
    nickname: 'videoPlayer',
    styles: {
      vp1: 'wixui.skins.VideoPlayer'
    }
  }
};

/***/ }),

/***/ 193:
/*!********************************************!*\
  !*** ./components/VideoPlayer/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 180,
    minWidth: 200
  },
  isRepeatable: true
};

/***/ }),

/***/ 194:
/*!**********************************************!*\
  !*** ./components/VideoPlayer/dataSchema.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  VideoPlayer: {
    type: 'object',
    properties: {
      videoType: {
        type: 'string',
        enum: ['dailymotion', 'facebook', 'file', 'twitch', 'vimeo', 'youtube'],
        default: 'file'
      },
      videoRef: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      },
      videoUrl: {
        type: ['string', 'null'],
        default: null
      },
      posterUrl: {
        type: ['string', 'null'],
        default: null
      },
      videoTitle: {
        type: 'string',
        default: '',
        maxLength: 255
      },
      description: {
        type: 'string',
        default: '',
        maxLength: 1000,
        description: 'Video Description'
      },
      logoRef: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 195:
/*!**************************************************************!*\
  !*** ./components/LineShareButton/ds/componentDefinition.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var componentDefinition = {
  'wixui.LineShareButton': {
    skins: ['wixui.skins.LineShareButton'],
    propertyType: 'LineShareButtonProperties',
    nickname: 'lineShareButton',
    labelDisplayName: 'component_label_line_share',
    styles: {
      lsb1: 'wixui.skins.LineShareButton'
    }
  }
};

module.exports = componentDefinition;

/***/ }),

/***/ 196:
/*!***************************************************!*\
  !*** ./components/LineShareButton/ds/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaData = {
  rotatable: false,
  disableable: false,
  isRepeatable: true,
  resizableSides: []
};

module.exports = metaData;

/***/ }),

/***/ 197:
/*!***************************************************!*\
  !*** ./components/Captcha/componentDefinition.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Captcha': {
    skins: ['wixui.skins.Captcha'],
    dataTypes: ['Captcha'],
    propertyType: 'CaptchaProperties',
    nickname: 'captcha',
    styles: {
      captcha1: 'wixui.skins.Captcha'
    }
  }
};

/***/ }),

/***/ 198:
/*!****************************************!*\
  !*** ./components/Captcha/metaData.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: false,
  resizableSides: [],
  disableable: false,
  mobileConversionConfig: {
    fixedSize: {
      height: 57,
      width: 235
    }
  }
};

/***/ }),

/***/ 199:
/*!******************************************!*\
  !*** ./components/Captcha/dataSchema.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Captcha: {
    type: 'object',
    properties: {
      captchaType: {
        type: 'string',
        enum: ['image', 'audio'],
        default: 'image',
        description: 'When set changes the type of the challenge (image or audio)'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 2:
/*!*************************************************************************************!*\
  !*** external {"amd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 200:
/*!*******************************************************!*\
  !*** ./components/MusicPlayer/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.MusicPlayer': {
    skins: ['wixui.skins.MusicPlayer'],
    dataTypes: ['MusicPlayerData'],
    propertyType: 'MusicPlayerProperties',
    nickname: 'audioPlayer',
    styles: {
      MusicPlayer_1: 'wixui.skins.MusicPlayer'
    }
  }
};

/***/ }),

/***/ 201:
/*!**********************************************!*\
  !*** ./components/MusicPlayer/dataSchema.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  MusicPlayerData: {
    type: 'object',
    properties: {
      audioRef: {
        type: ['string', 'null'],
        pseudoType: ['ref'],
        default: null
      },
      audioUrl: {
        type: ['string', 'null'],
        default: null
      },
      playlistId: {
        type: ['string', 'null'],
        default: null
      },
      playlist: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            artistName: {
              type: 'string',
              maxLength: 255,
              default: 'Unknown Artist'
            },
            trackName: {
              type: 'string',
              maxLength: 255,
              default: 'Unknown Track'
            },
            url: {
              type: ['string', 'null'],
              default: null
            },
            cover: {
              type: ['string', 'null'],
              default: null
            },
            durationFormatted: {
              type: ['string', 'null'],
              default: null
            }
          }
        },
        default: []
      },
      coverRef: {
        type: ['string', 'null'],
        pseudoType: ['ref'],
        default: null
      },
      coverUrl: {
        type: ['string', 'null'],
        default: null
      },
      artistName: {
        type: 'string',
        default: 'Unknown Artist',
        maxLength: 255
      },
      trackName: {
        type: 'string',
        default: 'Unknown Track',
        maxLength: 255
      },
      description: {
        type: 'string',
        default: '',
        maxLength: 1000
      }
    }
  },
  WixAudio: {
    type: 'object',
    properties: {
      uri: {
        type: 'string',
        default: ''
      },
      title: {
        type: 'string',
        default: '',
        maxLength: 100
      },
      duration: {
        type: 'number'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 202:
/*!********************************************!*\
  !*** ./components/MusicPlayer/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layoutManagement = __webpack_require__(/*! ./editor/layoutManagement */ 62);

function layoutLimits(compDriver) {
  var compDriverProperties = compDriver.properties;
  var compDriverData = compDriver.data;

  if (!compDriverProperties || !compDriverData) {
    return null;
  }

  return (0, _layoutManagement.findLayoutMinAndMax)(compDriverData.get(), compDriverProperties.get());
}

var metaData = {
  rotatable: false,
  isRepeatable: true,
  canBeStretched: true,
  layoutLimits: layoutLimits
};

module.exports = metaData;

/***/ }),

/***/ 203:
/*!*************************************************************!*\
  !*** ./components/StylableButton/ds/componentDefinition.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.StylableButton': {
    dataTypes: ['StylableButton'],
    styles: {},
    nickname: 'StylableButton',
    labelDisplayName: 'component_label_stylable_button',
    isStylableComp: true
  }
};

/***/ }),

/***/ 204:
/*!**************************************************!*\
  !*** ./components/StylableButton/ds/metaData.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minHeight: 10,
    minWidth: 10
  },
  isRepeatable: true,
  rotatable: true
};

/***/ }),

/***/ 205:
/*!*************************************************!*\
  !*** ./components/StylableButton/dataSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  StylableButton: {
    type: 'object',
    properties: {
      link: {
        type: ['null', 'string'], pseudoType: ['ref'],
        default: null
      },
      label: {
        type: 'string',
        default: 'MY BUTTON'
      },
      svgId: {
        type: 'string',
        default: '',
        maxLength: 100
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 206:
/*!*******************************************************!*\
  !*** ./components/ProgressBar/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 43);

exports.default = {
  'wixui.ProgressBar': {
    skins: ['wixui.skins.ProgressBar'],
    dataTypes: ['ProgressBar'],
    propertyType: 'ProgressBarProperties',
    nickname: 'progressBar',
    labelDisplayName: _constants.TranslationKeys.gfpp.componentLabel,
    styles: {
      pb1: 'wixui.skins.ProgressBar'
    }
  }
};

/***/ }),

/***/ 207:
/*!********************************************!*\
  !*** ./components/ProgressBar/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true
};

/***/ }),

/***/ 208:
/*!**********************************************!*\
  !*** ./components/ProgressBar/dataSchema.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  ProgressBar: {
    type: 'object',
    properties: {
      value: {
        type: 'number',
        description: 'Current progress value'
      },
      targetValue: {
        type: 'number',
        default: 100,
        description: 'Progress target value to be defined as complete'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 209:
/*!************************************************************!*\
  !*** ./components/CustomElement/ds/componentDefinition.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ../constants */ 31);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.COMP_TYPE, {
  dataTypes: [_constants.COMP_NAME],
  styles: {},
  nickname: _constants.COMP_NAME,
  labelDisplayName: 'component_label_custom_element'
});

/***/ }),

/***/ 210:
/*!*************************************************!*\
  !*** ./components/CustomElement/ds/metaData.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ 211:
/*!************************************************!*\
  !*** ./components/CustomElement/dataSchema.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  CustomElement: {
    type: 'object',
    properties: {
      tagName: {
        type: 'string',
        default: null
      },
      url: {
        type: 'string',
        default: null
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 212:
/*!**********************************************************!*\
  !*** ./components/SignatureInput/componentDefinition.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 29);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: [_constants.ComponentMetaData.displayName],
  propertyType: _constants.ComponentMetaData.displayName + 'Properties',
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    SignatureInput_1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 213:
/*!*************************************************!*\
  !*** ./components/SignatureInput/dataSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  SignatureInput: {
    type: 'object',
    properties: {
      titleText: {
        type: 'string',
        description: 'The title of the field',
        maxLength: 400
      },
      clearButtonText: {
        type: 'string',
        description: 'The undo signature text',
        minLength: 1,
        maxLength: 400
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 214:
/*!***********************************************!*\
  !*** ./components/SignatureInput/metaData.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minHeight: 130,
    minWidth: 304
  },
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true
};

/***/ }),

/***/ 215:
/*!***********************************************************!*\
  !*** ./components/FileUploaderNew/componentDefinition.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(/*! ./constants */ 30);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _defineProperty({}, _constants.ComponentMetaData.componentType, {
  skins: [_constants.ComponentMetaData.skinName],
  dataTypes: [_constants.ComponentMetaData.displayName],
  propertyType: _constants.ComponentMetaData.displayName + 'Properties',
  nickname: _constants.ComponentMetaData.nickName,
  styles: {
    FileUploaderNew_1: _constants.ComponentMetaData.skinName
  }
});

/***/ }),

/***/ 216:
/*!**************************************************!*\
  !*** ./components/FileUploaderNew/dataSchema.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state your components data to be saved in DB (and passed to the component/panels through props)
// Data usually relates to the component’s dynamic aspects and Javascript such as texts, values and placeholders
// Replace example data prop `text` with your own.
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var dataSchema = {
  FileUploaderNew: {
    type: 'object',
    properties: {
      buttonLabel: {
        type: 'string',
        default: 'Upload File'
      },
      placeholderLabel: {
        type: 'string',
        default: 'Max File Size 15MG'
      },
      label: {
        type: ['null', 'string'],
        default: '',
        maxLength: 400
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 217:
/*!************************************************!*\
  !*** ./components/FileUploaderNew/metaData.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true
};

/***/ }),

/***/ 238:
/*!*********************************************!*\
  !*** ./components/StylableLine/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 383);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 384);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.StylableLine';

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  metaData: _metaData2.default
};

/***/ }),

/***/ 239:
/*!*****************************************!*\
  !*** ./components/Dropdown/ds/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 385);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 387);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const propertiesSchema = require('../propertiesSchema');
//const dataSchema = require('../dataSchema');

module.exports = {
  componentType: 'wixui.Dropdown',
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default
  //dataSchema,
  //propertiesSchema,
};

/***/ }),

/***/ 29:
/*!************************************************!*\
  !*** ./components/SignatureInput/constants.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TranslationKeys = exports.TranslationKeys = {
  layoutPanel: {
    header: 'SignatureInput-settings-panel-header',
    textAlignment: 'SignatureInput-settings-panel-text-alignment',
    titlePaddingStart: 'SignatureInput-settings-panel-title-padding-start',
    titleMarginBottom: 'SignatureInput-settings-panel-title-input-space'
  },
  settingsPanel: {
    header: 'SignatureInput-layout-panel-header',
    titleText: 'SignatureInput-layout-panel-title',
    titleTextPlaceholder: 'SignatureInput-layout-panel-title-placeholder',
    clearButtonText: 'SignatureInput-layout-panel-clear-button',
    clearButtonTextPlaceholder: 'SignatureInput-layout-panel-clear-button-placeholder',
    clearButtonEmpty: 'SignatureInput-layout-panel--clear-button-invalid-empty',
    generalSettingsTitle: 'SignatureInput-layout-panel-general-settings-title',
    required: 'SignatureInput-layout-panel-required-label'
  },
  gfpp: {
    mainAction: 'SignatureInput-settings-panel-main-action'
  }
};

var DataHooks = exports.DataHooks = {
  coreComponent: 'SignatureInput-core-component',
  title: 'SignatureInput--label',
  clear: 'SignatureInput--clear-button',
  settingsPanel: {
    titleInput: 'SignatureInput-layout-panel--title',
    clearInput: 'SignatureInput-layout-panel--clear',
    requiredCheckbox: 'SignatureInput-layout-panel--required'
  },
  layoutPanel: {
    directionThumbnails: 'SignatureInput-settings-panel--direction',
    titlePaddingStart: 'SignatureInput-settings-panel--title-padding-start',
    titleMarginBottom: 'SignatureInput-settings-panel--title-margin-bottom'
  }
};

var HelpIds = exports.HelpIds = {
  settingsPanel: '0204d706-a79e-48da-84b3-fbbddc22d5e1',
  layoutPanel: 'ab308a40-ed8e-463d-af49-efe868ae219d',
  gfpp: {
    desktop: 'cefdfa29-6792-48fe-a077-ca7bd230d769',
    mobile: '508ea2cb-7ea0-4017-b259-8d0d46af2801'
  }
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'SignatureInput',
  componentType: 'wixui.SignatureInput',
  nickName: 'signatureInput',
  skinName: 'wixui.skins.SignatureInput'
};

/***/ }),

/***/ 30:
/*!*************************************************!*\
  !*** ./components/FileUploaderNew/constants.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TranslationKeys = exports.TranslationKeys = {
  gfpp: {
    mainAction: 'gfpp_mainaction_manage_uploaded_files'
  },
  layoutPanel: {
    header: 'Upload_Button_Layouts_Header'
  },
  settingsPanel: {
    header: 'Upload_Button_Settings_Header'
  }
};

var DataHooks = exports.DataHooks = {
  coreComponent: 'FileUploaderNew-core-component',
  settingsPanel: {
    container: 'FileUploaderNew-settings-panel-container',
    text: 'FileUploaderNew-settings-panel-text'
  },
  layoutPanel: {
    container: 'FileUploaderNew-layout-panel-container',
    text: 'FileUploaderNew-layout-panel-text'
  }
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'FileUploaderNew',
  componentType: 'wixui.FileUploaderNew',
  nickName: 'fileUploaderNew',
  skinName: 'wixui.skins.FileUploaderNew'
};

var HelpIds = exports.HelpIds = {
  gfpp: {
    help: 'd4107177-08e7-4d84-a23a-ca0489f991dc',
    mobileHelp: '1fd85a63-f011-417b-9901-6e011f7c36b9'
  },
  layoutPanel: {
    header: '88fc69c5-9995-4d17-bb16-0fce97f0c9cf'
  },
  settingsPanel: {
    header: 'b62a76a9-8fad-4858-944b-810bfd7a8990'
  }
};

/***/ }),

/***/ 31:
/*!***********************************************!*\
  !*** ./components/CustomElement/constants.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var COMP_TYPE = exports.COMP_TYPE = 'wixui.CustomElementComponent';
var COMP_NAME = exports.COMP_NAME = 'CustomElement';

/***/ }),

/***/ 383:
/*!********************************************************!*\
  !*** ./components/StylableLine/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.StylableLine': {
    styles: {},
    nickname: 'stylableLine',
    isStylableComp: true
  }
};

/***/ }),

/***/ 384:
/*!************************************************!*\
  !*** ./components/StylableLine/ds/metaData.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // styleCanBeApplied: true,
  rotatable: true
};

/***/ }),

/***/ 385:
/*!*******************************************************!*\
  !*** ./components/Dropdown/ds/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _translationKeys = __webpack_require__(/*! ../translationKeys */ 386);

var _componentOverride = __webpack_require__(/*! ../componentOverride */ 44);

var _componentOverride2 = _interopRequireDefault(_componentOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  'wixui.Dropdown': {
    skins: [_componentOverride2.default.newComponentSkin],
    dataTypes: ['SelectableList'],
    propertyType: 'ComboBoxInputProperties',
    nickname: 'NewDropdown',
    labelDisplayName: _translationKeys.TranslationKeys.gfpp.componentLabel,
    styles: {
      DropDown_1: _componentOverride2.default.newComponentSkin
    }
  }
};

/***/ }),

/***/ 386:
/*!************************************************!*\
  !*** ./components/Dropdown/translationKeys.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TranslationKeys = exports.TranslationKeys = {
  gfpp: {
    mainAction: 'gfpp_mainaction_progressBar',
    componentLabel: 'component_label_progressBar'
  },
  settingsPanel: {
    header: 'progressBar_Settings_Header_Label',
    targetValueLabel: 'progressBar_Settings_TargetValue_Label',
    targetValueTooltip: 'progressBar_Settings_TargetValue_Tooltip_Text',
    valueLabel: 'progressBar_Settings_CurrentValue_Label',
    valueTooltip: 'progressBar_Settings_CurrentValue_Tooltip_Text'
  },
  layoutPanel: {
    header: 'progressBar_Layout_Header_Label',
    directionLabel: 'progressBar_Layout_ShowProgress_Label',
    directionLtr: 'progressBar_Layout_ShowProgress_LeftToRight_Label',
    directionRtl: 'progressBar_Layout_ShowProgress_RightToLeft_Label'
  }
};

/***/ }),

/***/ 387:
/*!*****************************************!*\
  !*** ./components/Dropdown/metaData.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true,
  canBeStretched: true,
  allowConnectToDB: true
};

/***/ }),

/***/ 43:
/*!*********************************************!*\
  !*** ./components/ProgressBar/constants.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DataHooks = exports.DataHooks = {
  coreComponent: 'progress-bar-core-component'
};

var TranslationKeys = exports.TranslationKeys = {
  gfpp: {
    mainAction: 'gfpp_mainaction_progressBar',
    componentLabel: 'component_label_progressBar'
  },
  settingsPanel: {
    header: 'progressBar_Settings_Header_Label',
    targetValueLabel: 'progressBar_Settings_TargetValue_Label',
    targetValueTooltip: 'progressBar_Settings_TargetValue_Tooltip_Text',
    valueText: 'progressBar_Settings_UpdateCurrentValue_Text',
    valueLink: 'progressBar_Settings_UpdateCurrentValue_Link',
    invalidTargetValue: 'progressBar_Settings_TargetValue_Invalid_Input',
    targetValueTooltipLink: 'progressBar_Settings_TargetValue_Tooltip_Link'
  },
  layoutPanel: {
    header: 'progressBar_Layout_Header_Label',
    directionLabel: 'progressBar_Layout_ShowProgress_Label',
    directionLtr: 'progressBar_Layout_ShowProgress_LeftToRight_Label',
    directionRtl: 'progressBar_Layout_ShowProgress_RightToLeft_Label'
  }
};

var HelpIds = exports.HelpIds = {
  settingsPanel: {
    header: '45f1253b-1b70-4e49-aca6-c8edd87400d0',
    currentValue: '8aabcccd-43a4-4607-aab7-552d013f0d08'
  },
  layoutPanel: {
    header: '388317b5-71c6-4b52-805a-30d0177e5baf'
  },
  gfpp: {
    help: '05add005-bfbb-4dd7-ad99-d48a67778beb',
    mobileHelp: 'fa99de28-a5c4-47d9-98d6-7393057c195a'
  }
};

/***/ }),

/***/ 44:
/*!**************************************************!*\
  !*** ./components/Dropdown/componentOverride.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  overrideViewerType: 'wysiwyg.viewer.components.inputs.ComboBoxInput',
  overrideDisplayName: 'ComboBoxInput',
  overrideComponentSkin: 'ComboBoxInputSkin',
  //
  viewerExperimentKey: 'useNewWUSDropdown',
  editorExperimentKey: 'specs.wus.useNewDropdown',
  //
  newComponentViewerType: 'wixui.Dropdown',
  newDisplayName: 'Dropdown',
  newComponentSkin: 'ComboBoxInputSkinNew'
};

/***/ }),

/***/ 52:
/*!***********************************************!*\
  !*** ./components/Slider/propertiesSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  SliderProperties: {
    type: 'object',
    allOf: [{
      properties: {
        trackSize: {
          type: 'number',
          default: 25
        },
        orientation: {
          type: 'string',
          enum: ['horizontal', 'vertical'],
          default: 'horizontal'
        },
        thumbShape: {
          type: 'string',
          enum: ['circle', 'square', 'rectangle', 'bar'],
          default: 'circle'
        },
        tickMarksShape: {
          type: 'string',
          enum: ['none', 'line', 'dot'],
          default: 'line'
        },
        tooltipVisibility: {
          type: 'string',
          enum: ['none', 'hover', 'always'],
          default: 'hover'
        },
        tooltipPosition: {
          type: 'string',
          enum: ['normal', 'across'],
          default: 'normal'
        },
        tooltipPrefix: {
          type: 'string',
          maxLength: 30
        },
        tooltipSuffix: {
          type: 'string',
          maxLength: 30
        },
        tickMarksPosition: {
          type: 'string',
          enum: ['normal', 'middle', 'across'],
          default: 'normal'
        },
        dir: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 62:
/*!***********************************************************!*\
  !*** ./components/MusicPlayer/editor/layoutManagement.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLayoutWidthAndHeight = exports.findLayoutMinAndMax = undefined;

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COVER_WIDTH = 70;
var SMALL_WIDTH = 130;
var SMALL_WITH_COVER_WIDTH = 170;
var MEDIUM_WIDTH = 240;
var FULL_WIDTH = 270;

var SMALL_HEIGHT = 40;
var DEFAULT_HEIGHT = 70;
var COVER_SIZE = 70;
var DEFAULT_WIDTH = 320;

var TRACK_LIST_SPACING = 30;

// eslint-disable-next-line complexity
function findLayoutMinAndMax(compData, compProps) {
  var showCover = compProps.showCover,
      showProgressBar = compProps.showProgressBar,
      showTimeStamp = compProps.showTimeStamp,
      showTrackName = compProps.showTrackName,
      showArtistName = compProps.showArtistName;
  var playlist = compData.playlist;


  var isCoverSize = !showTrackName && !showArtistName && !showProgressBar && !showTimeStamp;
  var isTimeStampSize = !showCover && !showTrackName && !showArtistName && !showProgressBar && showTimeStamp;
  var isTimeStampCoverSize = showCover && !showTrackName && !showArtistName && !showProgressBar && showTimeStamp;
  var isTitleSize = !showCover && showTrackName !== showArtistName && !showProgressBar && !showTimeStamp;
  var isTitleCoverSize = showCover && showTrackName !== showArtistName && !showProgressBar && !showTimeStamp;
  var isFullSize = showCover && showProgressBar && showTimeStamp;

  var minWidth = void 0;
  var minHeight = DEFAULT_HEIGHT;

  switch (true) {
    case isCoverSize:
      minWidth = COVER_WIDTH;
      break;
    case isTimeStampSize:
      minWidth = SMALL_WIDTH;
      minHeight = SMALL_HEIGHT;
      break;
    case isTitleSize:
      minWidth = SMALL_WIDTH;
      minHeight = SMALL_HEIGHT;
      break;
    case isTimeStampCoverSize:
      minWidth = SMALL_WITH_COVER_WIDTH;
      break;
    case isTitleCoverSize:
      minWidth = SMALL_WITH_COVER_WIDTH;
      break;
    case isFullSize:
      minWidth = FULL_WIDTH;
      break;
    default:
      minWidth = MEDIUM_WIDTH;
      break;
  }

  var maxHeight = minHeight;

  if (_lodash2.default.get(playlist, 'length') > 1) {
    maxHeight += playlist.length * TRACK_LIST_SPACING;
  }

  return {
    minWidth: minWidth,
    maxWidth: isCoverSize ? COVER_WIDTH : Number.MAX_SAFE_INTEGER,
    minHeight: minHeight,
    maxHeight: maxHeight
  };
}

function findLayoutWidthAndHeight(compData, compProps, compLayout) {
  var showArtistName = compProps.showArtistName,
      showTrackName = compProps.showTrackName,
      showProgressBar = compProps.showProgressBar,
      showTimeStamp = compProps.showTimeStamp;
  var width = compLayout.width,
      height = compLayout.height;
  var playlist = compData.playlist;


  var showTitle = showTrackName || showArtistName;
  var hasSingleRow = showTitle !== showProgressBar || !showTitle && !showProgressBar && showTimeStamp;
  var nextWidth = width;
  var nextHeight = height;

  if (hasSingleRow) {
    nextHeight = SMALL_HEIGHT;
  } else {
    nextHeight = DEFAULT_HEIGHT;

    if (_lodash2.default.get(playlist, 'length') > 1) {
      nextHeight += playlist.length * TRACK_LIST_SPACING;
    }
  }

  if (!showTitle && !showProgressBar && !showTimeStamp) {
    nextWidth = COVER_SIZE;
  } else if (width === COVER_SIZE) {
    nextWidth = DEFAULT_WIDTH;
  }

  return { width: nextWidth, height: nextHeight };
}

exports.findLayoutMinAndMax = findLayoutMinAndMax;
exports.findLayoutWidthAndHeight = findLayoutWidthAndHeight;

/***/ }),

/***/ 63:
/*!***************************************!*\
  !*** ./components/Slider/ds/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 78);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _hooks = __webpack_require__(/*! ../hooks */ 79);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 80);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 52);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 81);

var componentType = 'wixui.Slider';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 73:
/*!**********************************************!*\
  !*** ./components/AddressInput/constants.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DataHooks = exports.DataHooks = {
  dropdownFooter: 'address-input-dropdown-footer'
};

var ImageUrls = exports.ImageUrls = {
  googleWhiteBackground: '//static.parastorage.com/services/santa-resources/resources/viewer/addressInput/powered_by_google_on_white.png'
};

// TODO - this should be replaced with translation keys once we can translate in viewer component.
var Texts = exports.Texts = {
  exampleAddressText: 'Suggested Address', // 'address_input_design_sample_address',
  apiDisconnectedPreviewText: 'You haven’t connected Google Maps. Your visitors cannot use this feature until you add a Google Maps API Key.', // 'address_input_states_error_feature_setup',
  apiDisconnectedLiveSiteText: 'This feature is not set up yet.', // 'address_input_states_error_feature_setup',
  overQuota: 'You’ve exceeded your allocated search quota', // address_input_states_error_quota
  noResults: 'No results found', // address_input_states_no_results
  generalError: 'There seems to be an error', // address_input_states_error_general
  ariaLabel: 'Address input field'
};

var ComponentMetaData = exports.ComponentMetaData = {
  displayName: 'AddressInput',
  componentType: 'wixui.AddressInput',
  nickName: 'AddressInput',
  skinName: 'wixui.skins.AddressInput',
  propertiesType: 'AddressInputProperties'
};

/***/ }),

/***/ 75:
/*!********************************************************!*\
  !*** ./components/LineShareButton/ds/componentType.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'wixui.LineShareButton';

/***/ }),

/***/ 76:
/*!***********************************************************!*\
  !*** ./legacy/components/RichTextBox/propertiesSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var propertiesSchema = {
  RichTextBoxProperties: {
    type: 'object',
    allOf: [{
      properties: {
        textAlignment: {
          type: 'string',
          default: 'left',
          enum: ['left', 'right', 'center'],
          description: 'the text alignment',
          maxLength: 100
        },
        textPadding: {
          type: 'number',
          default: 18,
          minimum: 0,
          maximum: 100,
          description: 'the value of the textPadding'
        },
        toolbarPosition: {
          type: 'string',
          default: 'top',
          enum: ['top', 'bottom', 'inline'],
          description: 'the location of the toolbar',
          maxLength: 20
        },
        placeholder: {
          type: 'string',
          description: 'the placeholder',
          default: '',
          maxLength: 4000
        },
        defaultTextType: {
          type: 'string',
          default: 'placeholderText',
          enum: ['none', 'initialText', 'placeholderText', 'placeholderAndInitialText'],
          description: 'the type of the default text for the input',
          maxLength: 100
        },
        allowLinks: {
          type: 'boolean',
          description: 'Are links allowed'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

exports.default = propertiesSchema;

/***/ }),

/***/ 77:
/*!************************************************************!*\
  !*** ./legacy/components/ToggleSwitch/propertiesSchema.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  ToggleSwitchProperties: {
    type: 'object',
    allOf: [{
      properties: {
        displayKnobIcons: {
          type: 'boolean'
        },
        trackHeight: {
          type: 'number',
          default: 100
        },
        knobSize: {
          type: 'number',
          default: 90
        },
        alignment: {
          type: 'string',
          enum: ['left', 'right'],
          default: 'left'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 78:
/*!**************************************************!*\
  !*** ./components/Slider/componentDefinition.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Slider': {
    skins: ['wixui.skins.Slider'],
    dataTypes: ['Slider'],
    propertyType: 'SliderProperties',
    nickname: 'slider',
    styles: {
      slider1: 'wixui.skins.Slider'
    }
  }
};

/***/ }),

/***/ 79:
/*!************************************!*\
  !*** ./components/Slider/hooks.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateOrientationLayout(prevLayout) {
  return _lodash2.default.assign({}, prevLayout, {
    width: prevLayout.height,
    height: prevLayout.width
  });
}

function getTicksSize(tickShape, tickPosition) {
  if (tickPosition === 'middle') {
    return 0;
  }

  switch (tickShape) {
    default:
    case 'line':
      return 22;
    case 'dot':
      return 15;
    case 'none':
      return 0;
  }
}

function shouldShowTicks(data, props) {
  return data.step > 0 && props.tickMarksShape !== 'none';
}

function updateTicksLayout(_ref) {
  var prevLayout = _ref.prevLayout,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      prevData = _ref.prevData,
      nextData = _ref.nextData;

  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var showTicks = shouldShowTicks(nextData, nextProps);
  var lastSize = lastShowTicks ? getTicksSize(prevProps.tickMarksShape, prevProps.tickMarksPosition) : 0;
  var size = showTicks ? getTicksSize(nextProps.tickMarksShape, nextProps.tickMarksPosition) : 0;
  var sizeDiff = size - lastSize;
  var dim = nextProps.orientation === 'horizontal' ? 'height' : 'width';

  return _lodash2.default.assign({}, prevLayout, _defineProperty({}, dim, prevLayout[dim] + sizeDiff));
}

function didOrientationChange(prevProps, nextProps) {
  return nextProps.orientation && prevProps.orientation && nextProps.orientation !== prevProps.orientation;
}

function didTicksChange(prevProps, nextProps, prevData, nextData) {
  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var nextShowTicks = shouldShowTicks(nextData, nextProps);
  var lastTickMarksShape = prevProps.tickMarksShape;
  var nextTickMarksShape = nextProps.tickMarksShape;
  var lastTickMarksPosition = prevProps.tickMarksPosition;
  var nextTickMarksPosition = nextProps.tickMarksPosition;

  return lastShowTicks !== nextShowTicks || lastTickMarksShape !== nextTickMarksShape || lastTickMarksPosition !== nextTickMarksPosition;
}

var beforeUpdate = function beforeUpdate(_ref2) {
  var compDriver = _ref2.compDriver,
      prevProps = _ref2.prevProps,
      nextProps = _ref2.nextProps,
      prevData = _ref2.prevData,
      nextData = _ref2.nextData;

  var prevLayout = compDriver.layout.get();
  var newLayout = void 0;

  if (didOrientationChange(prevProps, nextProps)) {
    newLayout = updateOrientationLayout(prevLayout);
  } else if (didTicksChange(prevProps, nextProps, prevData, nextData)) {
    newLayout = updateTicksLayout({ prevLayout: prevLayout, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: nextData });
  }

  if (newLayout) {
    compDriver.layout.update(newLayout);
  }
};

var beforeUpdateProperties = function beforeUpdateProperties(compDriver, nextProps) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: prevData });
};

var beforeUpdateData = function beforeUpdateData(compDriver, nextData) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: prevProps, prevData: prevData, nextData: nextData });
};

var getSize = function getSize(currentLayout, nextLayout) {
  return {
    width: nextLayout.width || currentLayout.width,
    height: nextLayout.height || currentLayout.height
  };
};

var beforeUpdateLayout = function beforeUpdateLayout(compDriver, nextLayout) {
  if (!nextLayout.width && !nextLayout.height) {
    return;
  }

  var currentLayout = compDriver.layout.get();
  var compProperties = compDriver.properties.get();

  var _getSize = getSize(currentLayout, nextLayout),
      width = _getSize.width,
      height = _getSize.height;

  var newLayout = _lodash2.default.cloneDeep(nextLayout);

  if (compProperties.orientation === 'vertical') {
    var minHeight = 4 * width;
    newLayout.height = Math.max(height, minHeight);
  } else if (compProperties.orientation === 'horizontal') {
    var minWidth = 4 * height;
    newLayout.width = Math.max(width, minWidth);
  }

  compDriver.layout.update(newLayout);
};

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 80:
/*!***************************************!*\
  !*** ./components/Slider/metaData.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 81:
/*!*****************************************!*\
  !*** ./components/Slider/dataSchema.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Slider: {
    type: 'object',
    properties: {
      min: {
        type: 'number',
        default: 0,
        description: 'Minimum value'
      },
      max: {
        type: 'number',
        default: 100,
        description: 'Maximum value'
      },
      value: {
        type: 'number',
        default: 50,
        description: 'Current value'
      },
      step: {
        type: 'number',
        default: 0,
        description: 'Step value'
      },
      stepType: {
        type: 'string',
        default: 'value',
        enum: ['value', 'count'],
        description: 'When set to \'value\', step represents the value of each step. When set to \'count\', step represents the total steps count'
      },
      disabled: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is disabled or not'
      },
      readOnly: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is read-only or not'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 82:
/*!**************************************************!*\
  !*** ./components/SearchBox/propertiesSchema.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  SearchBoxProperties: {
    type: 'object',
    allOf: [{
      properties: {
        layout: {
          type: 'string',
          enum: ['icon', 'button'],
          default: 'icon'
        },
        iconAlignment: {
          type: 'string',
          enum: ['left', 'right'],
          default: 'left'
        },
        textAlignment: {
          type: 'string',
          enum: ['left', 'center'],
          default: 'left'
        },
        textSpacing: {
          type: 'number',
          default: 12,
          description: 'Setting the spacing from the side the text is aligned to',
          minimum: 0,
          maximum: 50
        },
        iconSpacing: {
          type: 'number',
          default: 12,
          description: 'In icon layout affects the side to which the icon is aligend to, for button layout affects both - left and right sides',
          minimum: 0,
          maximum: 50
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 83:
/*!*************************************************!*\
  !*** ./components/BarChart/propertiesSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  BarChartProperties: {
    type: 'object',
    allOf: [{
      properties: {
        dataset: {
          type: 'array'
        },
        total: {
          type: 'number',
          default: 0
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 84:
/*!***************************************************!*\
  !*** ./components/TimePicker/propertiesSchema.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  TimePickerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left'
        },
        useAmPmFormat: {
          type: 'boolean',
          default: false,
          description: 'Should the display format be 12 hours (or 24)'
        },
        controller: {
          type: 'string',
          enum: ['text', 'stepper', 'dropdown'],
          default: 'text',
          description: 'The display of the time picker'
        },
        initialTime: {
          type: 'string',
          enum: ['none', 'current', 'value', 'placeholder'],
          default: 'current',
          description: 'What the time picker should display on load'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 85:
/*!*****************************************************!*\
  !*** ./components/AddressInput/propertiesSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  AddressInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left'
        },
        iconVisible: {
          type: 'boolean',
          default: false
        },
        dividerVisible: {
          type: 'boolean',
          default: false
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 86:
/*!*****************************************************!*\
  !*** ./components/RatingsInput/propertiesSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  RatingsInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showTitle: {
          type: 'boolean',
          default: true
        },
        showLabels: {
          type: 'boolean',
          default: true
        },
        labelPosition: {
          type: 'string',
          enum: ['top', 'bottom', 'side'],
          default: 'top'
        },
        labelAlignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'center'
        },
        shapeSize: {
          type: 'number',
          minimum: 15,
          maximum: 100,
          default: 24
        },
        shapeSpacing: {
          type: 'number',
          minimum: 1,
          maximum: 50,
          default: 5
        },
        direction: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        },
        required: {
          type: 'boolean',
          default: false
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 87:
/*!*******************************************************!*\
  !*** ./components/RatingsDisplay/propertiesSchema.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  RatingsDisplayProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showReviewsCount: {
          type: 'boolean',
          default: true
        },
        showRating: {
          type: 'boolean',
          default: true
        },
        noReviewsMode: {
          type: 'string',
          enum: ['nothing', 'emptyIcons', 'placeholderText'],
          default: 'emptyIcons'
        },
        ratingPosition: {
          type: 'string',
          enum: ['before', 'after'],
          default: 'before'
        },
        shapeSize: {
          type: 'number',
          minimum: 15,
          maximum: 100,
          default: 24
        },
        shapeSpacing: {
          type: 'number',
          minimum: 1,
          maximum: 50,
          default: 5
        },
        alignment: {
          type: 'string',
          enum: ['left', 'right', 'center'],
          default: 'left'
        },
        direction: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        },
        renderSeo: {
          type: 'boolean',
          default: true
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 88:
/*!************************************************!*\
  !*** ./components/Tags/ds/propertiesSchema.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  TagsProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'center'
        },
        verticalSpacing: {
          type: 'number',
          default: 20,
          minimum: 0,
          maximum: 50
        },
        horizontalSpacing: {
          type: 'number',
          default: 20,
          minimum: 0,
          maximum: 50
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 89:
/*!****************************************************!*\
  !*** ./components/VideoPlayer/propertiesSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  VideoPlayerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showVideoTitle: {
          type: 'boolean',
          default: true
        },
        autoplay: {
          type: 'boolean',
          default: false,
          description: 'Autoplay video'
        },
        loop: {
          type: 'boolean',
          default: false,
          description: 'Play video on loop'
        },
        share: {
          type: 'boolean',
          default: true,
          description: 'Allow to share video'
        },
        controlsVisibility: {
          type: 'string',
          enum: ['hover', 'never'],
          default: 'hover'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 90:
/*!***********************************************************!*\
  !*** ./components/LineShareButton/ds/propertiesSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  LineShareButtonProperties: {
    type: 'object',
    allOf: [{
      properties: {
        buttonType: {
          type: 'string',
          default: 'button',
          enum: ['button', 'classicWithButton', 'classicBig', 'classicMedium', 'classicSmall', 'bubbleBig', 'bubbleMedium', 'bubbleSmall']
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 91:
/*!************************************************!*\
  !*** ./components/Captcha/propertiesSchema.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  CaptchaProperties: {
    type: 'object',
    allOf: [{
      properties: {
        theme: {
          type: 'string',
          enum: ['light', 'dark'],
          default: 'light',
          description: 'When set changes the theme of the captcha (dark or light)'
        },
        size: {
          type: 'string',
          enum: ['normal', 'compact'],
          default: 'normal',
          description: 'When set changes the size of the captcha (normal or compact)'
        }
      }
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 92:
/*!****************************************************!*\
  !*** ./components/MusicPlayer/propertiesSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  MusicPlayerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        layout: {
          type: 'string',
          enum: ['classic', 'icon'],
          default: 'classic'
        },
        source: {
          type: 'string',
          enum: ['uploads', 'url', 'wix-music'],
          default: 'uploads'
        },
        showCover: {
          type: 'boolean',
          default: true
        },
        showArtistName: {
          type: 'boolean',
          default: true
        },
        showTrackName: {
          type: 'boolean',
          default: true
        },
        showProgressBar: {
          type: 'boolean',
          default: true
        },
        showTimeStamp: {
          type: 'boolean',
          default: true
        },
        autoplay: {
          type: 'boolean',
          default: false,
          description: 'Autoplay audio'
        },
        loop: {
          type: 'boolean',
          default: false,
          description: 'Play audio on loop'
        },
        showPlaylist: {
          type: 'boolean',
          default: true,
          description: 'Show Tracklist'
        },
        playlistTracksInfo: {
          type: 'string',
          enum: ['trackName', 'trackNameAndArtistName'],
          default: 'trackName',
          description: 'Show track name or track name w/ artist name'
        },
        playlistTracksAction: {
          type: 'string',
          enum: ['onActive', 'onAll'],
          default: 'onActive',
          description: 'Show track actions on active track or all tracks'
        },
        iconId: {
          type: 'string',
          default: 'icon0',
          description: 'Design IconLayout id'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 93:
/*!****************************************************!*\
  !*** ./components/ProgressBar/propertiesSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  ProgressBarProperties: {
    type: 'object',
    allOf: [{
      properties: {
        direction: {
          type: 'string',
          enum: ['rtl', 'ltr'],
          default: 'ltr'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 94:
/*!*******************************************************!*\
  !*** ./components/SignatureInput/propertiesSchema.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  SignatureInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        direction: {
          type: 'string',
          enum: ['rtl', 'ltr']
        },
        required: {
          type: 'boolean'
        },
        titlePaddingStart: {
          type: 'number',
          minimum: 0,
          maximum: 100
        },
        titleMarginBottom: {
          type: 'number',
          minimum: 0,
          maximum: 100
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 95:
/*!********************************************************!*\
  !*** ./components/FileUploaderNew/propertiesSchema.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// REPLACE-ME: Here you can state properties to be saved in DB (and passed to the component/panels through props)
// Properties usually relate to the component’s static layout and CSS such as directions and spacing
// Replace example property `direction` with your own properties
// See https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md
// After dataSchema and propertiesSchema shapes are finalized, a ticket to Editor backend team should be created
// in the jira to save those about in the DB. Example: https://jira.wixpress.com/browse/HTMLSRVR-3142
var propertiesSchema = {
  FileUploaderNewProperties: {
    type: 'object',
    allOf: [{
      properties: {
        buttonAlignment: {
          type: 'string',
          enum: ['rtl', 'ltr'],
          default: 'ltr',
          description: 'alignment of the label to the button'
        },
        filesAlignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left',
          description: 'alignment of the file name to the component'
        },
        showPlaceholder: {
          type: 'boolean',
          default: true,
          description: 'should show placeholder'
        },
        filesType: {
          type: 'string',
          enum: ['Image', 'Document', 'Video', 'Audio'],
          default: 'Image',
          description: 'the file type allowed for upload by the component'
        },
        filesSizeLimit: {
          type: 'number',
          default: 15,
          minimum: 1,
          maximum: 15,
          description: 'the maximum file size allowed to upload by the component'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ })

/******/ });
});
//# sourceMappingURL=componentsMetaData.bundle.js.map