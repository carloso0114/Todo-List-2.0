/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"ul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.draggable {\\r\\n  cursor: move;\\r\\n}\\r\\n\\r\\n.hover {\\r\\n  background-color: gray;\\r\\n  opacity: 0.6;\\r\\n}\\r\\n\\r\\n.hover2 {\\r\\n  background-color: blue;\\r\\n  opacity: 0.6;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: black line-through;\\r\\n}\\r\\n\\r\\n.clearBtn:hover {\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.no-border {\\r\\n  border: 0;\\r\\n  box-shadow: none;\\r\\n}\\r\\n\\r\\n.no-border:focus {\\r\\n  outline: none;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list-2.0/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list-2.0/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://todo-list-2.0/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list-2.0/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list-2.0/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list-2.0/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list-2.0/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list-2.0/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list-2.0/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _modules_EnterEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/EnterEvent.js */ \"./src/modules/EnterEvent.js\");\n/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/delete.js */ \"./src/modules/delete.js\");\n\n\n\n\n\n(0,_modules_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.getLocalstorage)();\n(0,_modules_EnterEvent_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\n//# sourceURL=webpack://todo-list-2.0/./src/index.js?");

/***/ }),

/***/ "./src/modules/EnterEvent.js":
/*!***********************************!*\
  !*** ./src/modules/EnterEvent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showTasks.js */ \"./src/modules/showTasks.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _taskClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskClass.js */ \"./src/modules/taskClass.js\");\n\n\n\n\nconst EnterEvent = () => {\n  const inputSelector = document.querySelector('#inputTask');\n\n  inputSelector.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      const task = new _taskClass_js__WEBPACK_IMPORTED_MODULE_2__.Task(inputSelector.value);\n      _taskClass_js__WEBPACK_IMPORTED_MODULE_2__.taskList.push(task);\n      (0,_showTasks_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n      (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.saveLocalstorage)();\n      inputSelector.value = '';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnterEvent);\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/EnterEvent.js?");

/***/ }),

/***/ "./src/modules/checkbox.js":
/*!*********************************!*\
  !*** ./src/modules/checkbox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _taskClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskClass.js */ \"./src/modules/taskClass.js\");\n/* eslint-disable import/no-cycle */\n// import deleteTask from './delete.js';\n\n\n\nconst checkboxListener = () => {\n  const checkboxes = document.querySelectorAll('.checkbox');\n  checkboxes.forEach((e) => {\n    e.addEventListener('change', () => {\n      const index2 = e.id;\n      if (e.checked) {\n        _taskClass_js__WEBPACK_IMPORTED_MODULE_1__.taskList[index2].completed = true;\n        e.nextSibling.nextSibling.classList.add('completed');\n        (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalstorage)();\n      } else {\n        _taskClass_js__WEBPACK_IMPORTED_MODULE_1__.taskList[index2].completed = false;\n        e.nextSibling.nextSibling.classList.remove('completed');\n        (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalstorage)();\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkboxListener);\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/checkbox.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _showTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showTasks.js */ \"./src/modules/showTasks.js\");\n/* harmony import */ var _taskClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskClass.js */ \"./src/modules/taskClass.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst deleteTask = () => {\n  const clearBtn = document.querySelector('#clear');\n  // const index = [];\n  // taskList.forEach((e) => {\n  //   if (e.completed === true) {\n  //     index.push(e.index);\n  //   }\n  // });\n  // console.log(index);\n  clearBtn.addEventListener('click', () => {\n    const result = _taskClass_js__WEBPACK_IMPORTED_MODULE_2__.taskList.filter((x) => x.completed === false);\n    _taskClass_js__WEBPACK_IMPORTED_MODULE_2__.taskList.splice(0);\n    _taskClass_js__WEBPACK_IMPORTED_MODULE_2__.taskList.push(...result);\n    (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalstorage)();\n    (0,_showTasks_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _showTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showTasks.js */ \"./src/modules/showTasks.js\");\n/* harmony import */ var _taskClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskClass.js */ \"./src/modules/taskClass.js\");\n\n\n\n\nconst editTask = () => {\n  const labelSelector = document.querySelectorAll('label[id]');\n  const newInput = document.createElement('input');\n  newInput.classList.add('no-border');\n  newInput.setAttribute('type', 'text');\n  labelSelector.forEach((e) => {\n    e.addEventListener('click', (event) => {\n      newInput.setAttribute('id', `${event.target.id}`);\n      newInput.value = `${event.target.innerText}`;\n      event.target.parentNode.append(newInput);\n      newInput.focus();\n      newInput.addEventListener('keypress', (event) => {\n        if (event.key === 'Enter') {\n          _taskClass_js__WEBPACK_IMPORTED_MODULE_2__.taskList[e.id].description = newInput.value;\n          console.log(_taskClass_js__WEBPACK_IMPORTED_MODULE_2__.taskList[e.id].description);\n          (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalstorage)();\n          (0,_showTasks_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n        }\n      });\n      event.target.remove();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalstorage\": () => (/* binding */ getLocalstorage),\n/* harmony export */   \"saveLocalstorage\": () => (/* binding */ saveLocalstorage)\n/* harmony export */ });\n/* harmony import */ var _taskClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskClass.js */ \"./src/modules/taskClass.js\");\n/* harmony import */ var _showTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showTasks.js */ \"./src/modules/showTasks.js\");\n/* eslint-disable import/no-cycle */\n\n\n\nconst saveLocalstorage = () => {\n  localStorage.setItem('taskListKey', JSON.stringify(_taskClass_js__WEBPACK_IMPORTED_MODULE_0__.taskList));\n};\n\nconst getLocalstorage = () => {\n  if (localStorage.getItem('taskListKey')) {\n    const getBooks = JSON.parse(localStorage.getItem('taskListKey'));\n    getBooks.forEach((t) => {\n      _taskClass_js__WEBPACK_IMPORTED_MODULE_0__.taskList.push(t);\n    });\n    (0,_showTasks_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  }\n};\n\n\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/localstorage.js?");

/***/ }),

/***/ "./src/modules/showTasks.js":
/*!**********************************!*\
  !*** ./src/modules/showTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _taskClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskClass.js */ \"./src/modules/taskClass.js\");\n/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort.js */ \"./src/modules/sort.js\");\n/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox.js */ \"./src/modules/checkbox.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTask.js */ \"./src/modules/editTask.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\nconst showTasks = () => {\n  const ulSelector = document.querySelector('#taskUl');\n  let indexOfCheckboxes = -1;\n  ulSelector.innerHTML = '';\n  _taskClass_js__WEBPACK_IMPORTED_MODULE_0__.taskList.forEach((e) => {\n    indexOfCheckboxes += 1;\n    const li = document.createElement('li');\n    if (e.completed === true) {\n      li.innerHTML = `\n      <div>\n      <input class=\"checkbox m-2\" type=\"checkbox\" id=\"${indexOfCheckboxes}\" checked=true>\n      <label class=\"completed\" id=\"${indexOfCheckboxes}\">${e.description}</label>\n      </div>\n      <i class=\"fs-5 bi bi-three-dots-vertical\"></i>\n      `;\n    } else {\n      li.innerHTML = `\n      <div>\n      <input class=\"checkbox m-2\" type=\"checkbox\" id=\"${indexOfCheckboxes}\">\n      <label id=\"${indexOfCheckboxes}\">${e.description}</label>\n      </div>\n      <i class=\"fs-5 bi bi-three-dots-vertical\"></i>\n      `;\n    }\n    li.classList.add('list-group-item', 'draggable', 'droppable', 'd-flex', 'justify-content-between', 'align-items-center');\n    li.setAttribute('draggable', 'true');\n    ulSelector.appendChild(li);\n  });\n  (0,_sort_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n  (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n  (0,_editTask_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTasks);\n\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/showTasks.js?");

/***/ }),

/***/ "./src/modules/sort.js":
/*!*****************************!*\
  !*** ./src/modules/sort.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n/* harmony import */ var _taskClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskClass.js */ \"./src/modules/taskClass.js\");\n/* harmony import */ var _showTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showTasks.js */ \"./src/modules/showTasks.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst sorting = () => {\n  const draggables = document.querySelectorAll('.draggable');\n  let dragged = null;\n  let dropped = null;\n  draggables.forEach((e) => {\n    e.addEventListener('dragstart', () => {\n      e.classList.add('hover');\n      dragged = e.children[0].children[0].id;\n    });\n\n    e.addEventListener('dragend', () => {\n      e.classList.remove('hover');\n    });\n\n    e.addEventListener('dragenter', (event) => {\n      if (dragged !== event.target) { e.classList.add('hover2'); }\n    });\n\n    e.addEventListener('dragleave', () => {\n      e.classList.remove('hover2');\n    });\n\n    e.addEventListener('dragover', (event) => {\n      event.preventDefault();\n    });\n\n    e.addEventListener('drop', () => {\n      e.classList.remove('hover2');\n      dropped = e.children[0].children[0].id;\n      const swap = (arr, draggedIndex, droppedIndex) => {\n        const temp = arr[droppedIndex].description;\n        arr[droppedIndex].description = arr[draggedIndex].description;\n        arr[draggedIndex].description = temp;\n        const temp2 = arr[droppedIndex].completed;\n        arr[droppedIndex].completed = arr[draggedIndex].completed;\n        arr[draggedIndex].completed = temp2;\n        (0,_showTasks_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n        (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalstorage)();\n      };\n      if (dragged !== dropped) {\n        if (e.classList.contains('droppable')) {\n          swap(_taskClass_js__WEBPACK_IMPORTED_MODULE_1__.taskList, dragged, dropped);\n        }\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sorting);\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/sort.js?");

/***/ }),

/***/ "./src/modules/taskClass.js":
/*!**********************************!*\
  !*** ./src/modules/taskClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskList\": () => (/* binding */ taskList),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nconst taskList = [];\n\nclass Task {\n  constructor(description, completed = false, id = taskList.length) {\n    this.description = description;\n    this.completed = completed;\n    this.id = id;\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list-2.0/./src/modules/taskClass.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;