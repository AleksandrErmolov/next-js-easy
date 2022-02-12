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
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./styles/user.module.scss":
/*!*********************************!*\
  !*** ./styles/user.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"user\": \"user_user__Jd4_h\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvdXNlci5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtZWFzeS8uL3N0eWxlcy91c2VyLm1vZHVsZS5zY3NzPzdjODUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlclwiOiBcInVzZXJfdXNlcl9fSmQ0X2hcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/user.module.scss\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/user.module.scss */ \"./styles/user.module.scss\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction User({ user  }) {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Пользователь c id \",\n                    query.id\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Мои проекты\\\\next-js-easy\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" Имя пользователя - \",\n                    user.name,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Мои проекты\\\\next-js-easy\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Мои проекты\\\\next-js-easy\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this));\n};\nasync function getServerSideProps({ params  }) {\n    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n    const user = await resp.json();\n    return {\n        props: {\n            user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNhO0FBR25DLFFBQVEsQ0FBQ0UsSUFBSSxDQUFFLENBQUNDLENBQUFBLElBQUksR0FBQyxFQUFFLENBQUM7SUFFbkMsS0FBSyxDQUFDLENBQUNDLENBQUFBLEtBQUssR0FBQyxHQUFHSixzREFBUztJQUV6QixNQUFNLDZFQUNESyxDQUFHO1FBQUNDLFNBQVMsRUFBRUwsc0VBQVc7O3dGQUN0Qk0sQ0FBRTs7b0JBQUMsQ0FDa0I7b0JBQWFILEtBQUssQ0FBQ0ksRUFBRTs7Ozs7Ozt3RkFFOUJILENBQVQ7O29CQUFDLENBQW9CO29CQUFDRixJQUFJLENBQUNNLElBQUk7b0JBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQUdqRCxDQUFDO0FBR00sZUFBZUMsa0JBQWtCLENBQUMsQ0FBQ0MsQ0FBQUEsTUFBTSxHQUFDLEVBQUUsQ0FBQztJQUNoRCxLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNDLEtBQUssRUFBRSwyQ0FBMkMsRUFBRUYsTUFBTSxDQUFDSCxFQUFFO0lBQ2hGLEtBQUssQ0FBQ0wsSUFBSSxHQUFJLEtBQUssQ0FBQ1MsSUFBSSxDQUFDRSxJQUFJO0lBRTdCLE1BQU0sQ0FBQyxDQUFDO1FBQ0pDLEtBQUssRUFBRSxDQUFDWjtZQUFBQSxJQUFJO1FBQUEsQ0FBQztJQUNqQixDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtZWFzeS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlciAoe3VzZXJ9KSB7XHJcblxyXG4gICAgY29uc3Qge3F1ZXJ5fSA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LvRjNC30L7QstCw0YLQtdC70YwgYyBpZCB7cXVlcnkuaWR9XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXY+INCY0LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gLSB7dXNlci5uYW1lfSA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWApXHJcbiAgICBjb25zdCB1c2VyID0gIGF3YWl0IHJlc3AuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3VzZXJ9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJVc2VyIiwidXNlciIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpZCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXNwIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();