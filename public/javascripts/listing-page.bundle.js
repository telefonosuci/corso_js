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

/***/ "./frontend/src/components/editable-list/index.js":
/*!********************************************************!*\
  !*** ./frontend/src/components/editable-list/index.js ***!
  \********************************************************/
/***/ (() => {

eval("(function () {\n\n  class EditableList extends HTMLElement {\n    constructor() {\n      // establish prototype chain\n      super();\n\n      // attaches shadow tree and returns shadow root reference\n      // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow\n      const shadow = this.attachShadow({ mode: 'open' });\n\n      // creating a container for the editable-list component\n      const editableListContainer = document.createElement('div');\n\n      // get attribute values from getters\n      const title = this.title;\n\n      const addItemText = this.addItemText;\n      const listItems = this.items;\n\n      // adding a class to our container for the sake of clarity\n      editableListContainer.classList.add('editable-list');\n\n      // creating the inner HTML of the editable list element\n      editableListContainer.innerHTML = `\n      <style>\n        li, div > div {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n\n        .icon {\n          background-color: #fff;\n          border: none;\n          cursor: pointer;\n          float: right;\n          font-size: 1.8rem;\n        }\n        .editable-list {\n          whidt: 300px;\n        }\n      </style>\n      <h3>${title}</h3>\n      <ul class=\"item-list\">\n        ${listItems.map(item => `\n          <li>${item}\n            <button class=\"editable-list-remove-item icon\">&ominus;</button>\n          </li>\n        `).join('')}\n      </ul>\n      <div>\n        <label>${addItemText}</label>\n        <input class=\"add-new-list-item-input\" type=\"text\">\n        <button class=\"editable-list-add-item icon\">&oplus;</button>\n      </div>\n    `;\n\n      // binding methods\n      this.addListItem = this.addListItem.bind(this);\n      this.handleRemoveItemListeners = this.handleRemoveItemListeners.bind(this);\n      this.removeListItem = this.removeListItem.bind(this);\n\n      // appending the container to the shadow DOM\n      shadow.appendChild(editableListContainer);\n    }\n\n    // add items to the list\n    addListItem(e) {\n      const textInput = this.shadowRoot.querySelector('.add-new-list-item-input');\n\n      if (textInput.value) {\n        const li = document.createElement('li');\n        const button = document.createElement('button');\n        const childrenLength = this.itemList.children.length;\n\n        li.textContent = textInput.value;\n        button.classList.add('editable-list-remove-item', 'icon');\n        button.innerHTML = '&ominus;';\n\n        this.itemList.appendChild(li);\n        this.itemList.children[childrenLength].appendChild(button);\n\n        this.handleRemoveItemListeners([button]);\n\n        textInput.value = '';\n      }\n    }\n\n    // fires after the element has been attached to the DOM\n    connectedCallback() {\n      const removeElementButtons = [...this.shadowRoot.querySelectorAll('.editable-list-remove-item')];\n      const addElementButton = this.shadowRoot.querySelector('.editable-list-add-item');\n\n      this.itemList = this.shadowRoot.querySelector('.item-list');\n\n      this.handleRemoveItemListeners(removeElementButtons);\n      addElementButton.addEventListener('click', this.addListItem, false);\n    }\n\n    // gathering data from element attributes\n    get title() {\n      return this.getAttribute('title') || '';\n    }\n\n    get items() {\n\n      const items = [];\n\n      [...this.attributes].forEach(attr => {\n        if (attr.name.includes('list-item')) {\n          items.push(attr.value);\n        }\n      });\n\n      return items;\n    }\n\n    get addItemText() {\n      return this.getAttribute('add-item-text') || '';\n    }\n\n    handleRemoveItemListeners(arrayOfElements) {\n      arrayOfElements.forEach(element => {\n        element.addEventListener('click', this.removeListItem, false);\n      });\n    }\n\n    removeListItem(e) {\n      e.target.parentNode.remove();\n    }\n  }\n\n  document.addEventListener(\"DOMContentLoaded\", () => {\n    // let the browser know about the custom element\n    customElements.define('editable-list', EditableList);\n  });\n\n})();\n\n//# sourceURL=webpack://app/./frontend/src/components/editable-list/index.js?");

/***/ }),

/***/ "./frontend/src/components/expanding-list/index.js":
/*!*********************************************************!*\
  !*** ./frontend/src/components/expanding-list/index.js ***!
  \*********************************************************/
/***/ (() => {

eval("(function () {\n// Create a class for the element\nclass ExpandingList extends HTMLElement {\n  constructor() {\n    // Always call super first in constructor\n    // Return value from super() is a reference to this element\n    super();\n  }\n\n  connectedCallback() {\n    // Get ul and li elements that are a child of this custom ul element\n    // li elements can be containers if they have uls within them\n    const uls = this.querySelectorAll(\"ul\");\n    const lis = this.querySelectorAll(\"li\");\n\n    console.log(\"THIS\", this);\n\n    console.log(\"ULS\", uls);\n    console.log(\"LIS\", lis);\n\n    console.log(\"HTML: \", this);\n    // Hide all child uls\n    // These lists will be shown when the user clicks a higher level container\n    uls.forEach((ul) => {\n      ul.style.display = \"none\";\n    });\n\n    // Look through each li element in the ul\n    lis.forEach((li) => {\n      // If this li has a ul as a child, decorate it and add a click handler\n      if (li.querySelectorAll(\"ul\").length > 0) {\n        // Add an attribute which can be used  by the style\n        // to show an open or closed icon\n        li.setAttribute(\"class\", \"closed\");\n\n        // Wrap the li element's text in a new span element\n        // so we can assign style and event handlers to the span\n        const childText = li.childNodes[0];\n        const newSpan = document.createElement(\"span\");\n\n        // Copy text from li to span, set cursor style\n        newSpan.textContent = childText.textContent;\n        newSpan.style.cursor = \"pointer\";\n\n        // Add click handler to this span\n        newSpan.addEventListener(\"click\", (e) => {\n          // next sibling to the span should be the ul\n          const nextul = e.target.nextElementSibling;\n\n          // Toggle visible state and update class attribute on ul\n          if (nextul.style.display == \"block\") {\n            nextul.style.display = \"none\";\n            nextul.parentNode.setAttribute(\"class\", \"closed\");\n          } else {\n            nextul.style.display = \"block\";\n            nextul.parentNode.setAttribute(\"class\", \"open\");\n          }\n        });\n        // Add the span and remove the bare text node from the li\n        childText.parentNode.insertBefore(newSpan, childText);\n        childText.parentNode.removeChild(childText);\n      }\n    });\n  }\n\n  disconnectedCallback() {\n    // browser calls this method when the element is removed from the document\n    // (can be called many times if an element is repeatedly added/removed)\n  }\n\n\n  static get observedAttributes() {\n    return [/* array of attribute names to monitor for changes */];\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    // called when one of attributes listed above is modified\n  }\n\n}\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Define the new element\n  customElements.define(\"expanding-list\", ExpandingList);\n\n});\n\n})();\n\n//# sourceURL=webpack://app/./frontend/src/components/expanding-list/index.js?");

/***/ }),

/***/ "./frontend/src/modules/listing-page/index.js":
/*!****************************************************!*\
  !*** ./frontend/src/modules/listing-page/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_editable_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/editable-list */ \"./frontend/src/components/editable-list/index.js\");\n/* harmony import */ var _components_editable_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_editable_list__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_expanding_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/expanding-list */ \"./frontend/src/components/expanding-list/index.js\");\n/* harmony import */ var _components_expanding_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_expanding_list__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', e => {\r\n  console.log('Loaded listing-page module', e);\r\n});\r\n\n\n//# sourceURL=webpack://app/./frontend/src/modules/listing-page/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./frontend/src/modules/listing-page/index.js");
/******/ 	
/******/ })()
;