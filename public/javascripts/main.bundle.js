/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/src/components/custom-navigation/index.js":
/*!************************************************************!*\
  !*** ./frontend/src/components/custom-navigation/index.js ***!
  \************************************************************/
/***/ (() => {

eval("class CustomExpandableNav extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n\r\n    // Create a shadow root\r\n    this.attachShadow({ mode: 'open' });\r\n\r\n    // Clone the content of the template and append it to the shadow root\r\n    const template = document.querySelector('#custom-expandable-nav-template');\r\n    const instance = template.content.cloneNode(true);\r\n    this.shadowRoot.appendChild(instance);\r\n\r\n    // Get the slot element\r\n    this.slot = this.shadowRoot.querySelector('slot');\r\n\r\n    // Add event listener to handle click events\r\n    this.shadowRoot.addEventListener('click', this.toggleExpand.bind(this));\r\n  }\r\n\r\n  toggleExpand(event) {\r\n    // Check if the clicked element is a list item with children\r\n    if (event.target.tagName === 'A' && event.target.parentElement.classList.contains('has-children')) {\r\n      // Toggle the 'expanded' class to expand/collapse the children\r\n      event.target.parentElement.classList.toggle('expanded');\r\n\r\n      // Prevent the default behavior of the anchor tag\r\n      event.preventDefault();\r\n    }\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  console.log(\"Loaded custom nav component\");\r\n\r\n  // Registriamo il custom web component\r\n  customElements.define('custom-expandable-nav', CustomExpandableNav);\r\n});\r\n\n\n//# sourceURL=webpack://app/./frontend/src/components/custom-navigation/index.js?");

/***/ }),

/***/ "./frontend/src/modules/main/index.js":
/*!********************************************!*\
  !*** ./frontend/src/modules/main/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_custom_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/custom-navigation */ \"./frontend/src/components/custom-navigation/index.js\");\n/* harmony import */ var _components_custom_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_custom_navigation__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', e => {\r\n  console.log('Loaded main module', e);\r\n});\r\n\n\n//# sourceURL=webpack://app/./frontend/src/modules/main/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/src/modules/main/index.js");
/******/ 	
/******/ })()
;