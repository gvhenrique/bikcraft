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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobile-menu */ \"./js/modules/mobile-menu.js\");\n// Menu Mobile\n\nvar menuMobile = new _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.header__menu', '.header__menu--mobile');\nmenuMobile.init();\n\n//# sourceURL=webpack://bikcraft/./js/main.js?");

/***/ }),

/***/ "./js/modules/helper/outside-click.js":
/*!********************************************!*\
  !*** ./js/modules/helper/outside-click.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OutsideClick)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar OutsideClick = /*#__PURE__*/function () {\n  function OutsideClick(element, activeElement) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, OutsideClick);\n    this.element = document.querySelector(element);\n    this.stateElement = document.querySelector(activeElement);\n    this.html = document.querySelector('html');\n    this.userEvents = ['click', 'touch'];\n    this.checkClick = this.checkClick.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(OutsideClick, [{\n    key: \"checkClick\",\n    value: function checkClick(event) {\n      var _this = this;\n      if (!this.element.contains(event.target)) {\n        this.stateElement.classList.remove('active');\n        this.userEvents.forEach(function (userEvent) {\n          _this.html.removeEventListener(userEvent, _this.checkClick);\n        });\n      }\n    }\n  }, {\n    key: \"addHtmlEvent\",\n    value: function addHtmlEvent() {\n      var _this2 = this;\n      this.userEvents.forEach(function (userEvent) {\n        _this2.html.addEventListener(userEvent, _this2.checkClick);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.element && this.stateElement) {\n        this.addHtmlEvent();\n      }\n      return this;\n    }\n  }]);\n  return OutsideClick;\n}();\n\n\n//# sourceURL=webpack://bikcraft/./js/modules/helper/outside-click.js?");

/***/ }),

/***/ "./js/modules/mobile-menu.js":
/*!***********************************!*\
  !*** ./js/modules/mobile-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MobileMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _helper_outside_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper/outside-click */ \"./js/modules/helper/outside-click.js\");\n\n\n\nvar MobileMenu = /*#__PURE__*/function () {\n  function MobileMenu(menu, menuButton) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MobileMenu);\n    this.menu = document.querySelector(menu);\n    this.menuButton = document.querySelector(menuButton);\n    this.userEvents = ['click', 'touch'];\n    this.openMenu = this.openMenu.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MobileMenu, [{\n    key: \"toggleAriaAttribute\",\n    value: function toggleAriaAttribute() {\n      if (this.menuButton.getAttribute('aria-expanded') === 'true') {\n        this.menuButton.setAttribute('aria-expanded', 'false');\n      } else {\n        this.menuButton.setAttribute('aria-expanded', 'true');\n      }\n    }\n  }, {\n    key: \"toggleActiveClass\",\n    value: function toggleActiveClass() {\n      if (this.menu.classList.contains('active')) {\n        this.menu.classList.remove('active');\n      } else {\n        this.menu.classList.add('active');\n      }\n    }\n  }, {\n    key: \"openMenu\",\n    value: function openMenu(event) {\n      event.preventDefault();\n      this.toggleAriaAttribute();\n      this.toggleActiveClass();\n      var outsideClick = new _helper_outside_click__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.header', '.header__menu');\n      outsideClick.init();\n    }\n  }, {\n    key: \"addMenuEvent\",\n    value: function addMenuEvent() {\n      var _this = this;\n      this.userEvents.forEach(function (userEvent) {\n        _this.menuButton.addEventListener(userEvent, _this.openMenu);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menu && this.menuButton) {\n        this.addMenuEvent();\n      }\n    }\n  }]);\n  return MobileMenu;\n}();\n\n\n//# sourceURL=webpack://bikcraft/./js/modules/mobile-menu.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://bikcraft/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://bikcraft/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;