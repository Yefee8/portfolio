/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/themeContext.ts":
/*!**********************************!*\
  !*** ./contexts/themeContext.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = __webpack_require__(/*! ../public/styles/theme.js */ \"./public/styles/theme.js\");\nconst ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(theme);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy90aGVtZUNvbnRleHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUM3QixNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsMkRBQTJCLENBQUM7QUFDekQsTUFBTUMsWUFBWSxHQUFHSCxvREFBYSxDQUFDQyxLQUFLLENBQUM7QUFDekMsaUVBQWVFLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy10YWlsd2luZC1uZXh0LWJvaWxlcnBsYXRlLy4vY29udGV4dHMvdGhlbWVDb250ZXh0LnRzPzg5NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IHJlcXVpcmUoJy4uL3B1YmxpYy9zdHlsZXMvdGhlbWUuanMnKVxyXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHRoZW1lKVxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZUNvbnRleHRcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ0aGVtZSIsInJlcXVpcmUiLCJUaGVtZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/themeContext.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_styles_glob_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles/glob.css */ \"./public/styles/glob.css\");\n/* harmony import */ var _public_styles_glob_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_styles_glob_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var primereact_resources_themes_bootstrap4_light_blue_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/resources/themes/bootstrap4-light-blue/theme.css */ \"./node_modules/primereact/resources/themes/bootstrap4-light-blue/theme.css\");\n/* harmony import */ var primereact_resources_themes_bootstrap4_light_blue_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_bootstrap4_light_blue_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ \"./node_modules/primereact/resources/primereact.min.css\");\n/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeicons/primeicons.css */ \"./node_modules/primeicons/primeicons.css\");\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var contexts_themeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/themeContext */ \"./contexts/themeContext.ts\");\n\n\n\n\n\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yavuz\\\\Desktop\\\\portfolio\\\\pages\\\\_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yavuz\\\\Desktop\\\\portfolio\\\\pages\\\\_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(contexts_themeContext__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Provider, {\n                value: contexts_themeContext__WEBPACK_IMPORTED_MODULE_8__.theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yavuz\\\\Desktop\\\\portfolio\\\\pages\\\\_app.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yavuz\\\\Desktop\\\\portfolio\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNBO0FBRUw7QUFDTTtBQUVrQztBQUNwQjtBQUNkO0FBRXlCO0FBQzVELE1BQU1JLEtBQUssR0FBaUIsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQ3pELHFCQUNDOzswQkFDQyw4REFBQ0wsa0RBQUk7MEJBQ0osNEVBQUNNLE1BQUk7b0JBQUNDLElBQUksRUFBQyxVQUFVO29CQUFDQyxPQUFPLEVBQUMscUNBQXFDOzs7Ozs2QkFBRzs7Ozs7eUJBQ2hFOzBCQUNQLDhEQUFDUCxzRUFBcUI7Z0JBQUNTLEtBQUssRUFBRVIsd0RBQUs7MEJBQ2xDLDRFQUFDRSxTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7OzZCQUFJOzs7Ozt5QkFDTDs7b0JBQ3RCLENBQ0Y7Q0FDRjtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy10YWlsd2luZC1uZXh0LWJvaWxlcnBsYXRlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJztcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBcIi4uL3B1YmxpYy9zdHlsZXMvZ2xvYi5jc3NcIjtcclxuXHJcbmltcG9ydCBcInByaW1lcmVhY3QvcmVzb3VyY2VzL3RoZW1lcy9ib290c3RyYXA0LWxpZ2h0LWJsdWUvdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcInByaW1lcmVhY3QvcmVzb3VyY2VzL3ByaW1lcmVhY3QubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJwcmltZWljb25zL3ByaW1laWNvbnMuY3NzXCI7XHJcblxyXG5pbXBvcnQgVGhlbWVDb250ZXh0LCB7IHRoZW1lIH0gZnJvbSAnY29udGV4dHMvdGhlbWVDb250ZXh0JztcclxuY29uc3QgTXlBcHA6IEZDPEFwcFByb3BzPiA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoZW1lfT5cclxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdDwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./public/styles/theme.js":
/*!********************************!*\
  !*** ./public/styles/theme.js ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("\nmodule.exports = {\n    colors: {\n        primary: \"rgb(0, 123, 255)\",\n        secondary: \"#6B7280\",\n        danger: \"#EF4444\",\n        \"text-primary\": \"#f3f3f3\",\n        \"primary-dark\": \"#6355f1\",\n        \"secondary-dark\": \"#374151\",\n        \"danger-dark\": \"#B91C1C\",\n        \"primary-light\": \"#A5B4FC\",\n        \"secondary-light\": \"#c2c1c7\",\n        \"danger-light\": \"#FCA5A5\",\n        \"body-bg\": \"#232323\",\n        \"card-bg\": \"#3b3b3b\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTtBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUNoQkMsTUFBTSxFQUFFO1FBQ1BDLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0JDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCQyxNQUFNLEVBQUUsU0FBUztRQUNqQixjQUFjLEVBQUMsU0FBUztRQUN4QixjQUFjLEVBQUUsU0FBUztRQUN6QixnQkFBZ0IsRUFBRSxTQUFTO1FBQzNCLGFBQWEsRUFBRSxTQUFTO1FBQ3hCLGVBQWUsRUFBRSxTQUFTO1FBQzFCLGlCQUFpQixFQUFFLFNBQVM7UUFDNUIsY0FBYyxFQUFFLFNBQVM7UUFDekIsU0FBUyxFQUFDLFNBQVM7UUFDbkIsU0FBUyxFQUFDLFNBQVM7S0FDbkI7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtdGFpbHdpbmQtbmV4dC1ib2lsZXJwbGF0ZS8uL3B1YmxpYy9zdHlsZXMvdGhlbWUuanM/ZWVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRjb2xvcnM6IHtcclxuXHRcdHByaW1hcnk6ICdyZ2IoMCwgMTIzLCAyNTUpJyxcclxuXHRcdHNlY29uZGFyeTogJyM2QjcyODAnLFxyXG5cdFx0ZGFuZ2VyOiAnI0VGNDQ0NCcsXHJcblx0XHQndGV4dC1wcmltYXJ5JzonI2YzZjNmMycsXHJcblx0XHQncHJpbWFyeS1kYXJrJzogJyM2MzU1ZjEnLFxyXG5cdFx0J3NlY29uZGFyeS1kYXJrJzogJyMzNzQxNTEnLFxyXG5cdFx0J2Rhbmdlci1kYXJrJzogJyNCOTFDMUMnLFxyXG5cdFx0J3ByaW1hcnktbGlnaHQnOiAnI0E1QjRGQycsXHJcblx0XHQnc2Vjb25kYXJ5LWxpZ2h0JzogJyNjMmMxYzcnLFxyXG5cdFx0J2Rhbmdlci1saWdodCc6ICcjRkNBNUE1JyxcclxuXHRcdCdib2R5LWJnJzonIzIzMjMyMycsXHJcblx0XHQnY2FyZC1iZyc6JyMzYjNiM2InXHJcblx0fVxyXG59O1xyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNvbG9ycyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJkYW5nZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/styles/theme.js\n");

/***/ }),

/***/ "./node_modules/primeicons/primeicons.css":
/*!************************************************!*\
  !*** ./node_modules/primeicons/primeicons.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/primereact/resources/primereact.min.css":
/*!**************************************************************!*\
  !*** ./node_modules/primereact/resources/primereact.min.css ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/primereact/resources/themes/bootstrap4-light-blue/theme.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/primereact/resources/themes/bootstrap4-light-blue/theme.css ***!
  \**********************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./public/styles/glob.css":
/*!********************************!*\
  !*** ./public/styles/glob.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();