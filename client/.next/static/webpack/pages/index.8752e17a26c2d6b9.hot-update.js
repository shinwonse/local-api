"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MsgInput.jsx":
/*!*********************************!*\
  !*** ./components/MsgInput.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MsgInput = function(mutate) {\n    _s();\n    var textRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var onSubmit = function(e) {\n        e.preventDefault();\n        e.stopPropagation();\n        var text = textRef.current.value;\n        textRef.current.value = \"\";\n        mutate(text);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"message_input\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                ref: textRef,\n                placeholder: \"내용을 입력하세요.\"\n            }, void 0, false, {\n                fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgInput.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"완료\"\n            }, void 0, false, {\n                fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgInput.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgInput.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_s(MsgInput, \"w6wg8oN6T1JIeHvMfowtaM3MyjI=\");\n_c = MsgInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgInput);\nvar _c;\n$RefreshReg$(_c, \"MsgInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7OztBQUU5QixHQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDOztJQUM1QixHQUFLLENBQUNDLE9BQU8sR0FBR0gsNkNBQU0sQ0FBQyxJQUFJO0lBRTNCLEdBQUssQ0FBQ0ksUUFBUSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDdkJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkQsQ0FBQyxDQUFDRSxlQUFlO1FBQ2pCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHTCxPQUFPLENBQUNNLE9BQU8sQ0FBQ0MsS0FBSztRQUNsQ1AsT0FBTyxDQUFDTSxPQUFPLENBQUNDLEtBQUssR0FBRyxDQUFFO1FBQzFCUixNQUFNLENBQUNNLElBQUk7SUFDYixDQUFDO0lBRUQsTUFBTSw2RUFDSEcsQ0FBSTtRQUFDQyxTQUFTLEVBQUMsQ0FBZTtRQUFDUixRQUFRLEVBQUVBLFFBQVE7O3dGQUMvQ1MsQ0FBUTtnQkFBQ0MsR0FBRyxFQUFFWCxPQUFPO2dCQUFFWSxXQUFXLEVBQUMsQ0FBWTs7Ozs7O3dGQUMvQkMsQ0FBVjtnQkFBQ0MsSUFBSSxFQUFDLENBQVE7MEJBQUMsQ0FBRTs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7R0FqQktoQixRQUFRO0tBQVJBLFFBQVE7QUFtQmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0lucHV0LmpzeD85MzAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNc2dJbnB1dCA9IChtdXRhdGUpID0+IHtcbiAgY29uc3QgdGV4dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgdGV4dCA9IHRleHRSZWYuY3VycmVudC52YWx1ZTtcbiAgICB0ZXh0UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgIG11dGF0ZSh0ZXh0KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cIm1lc3NhZ2VfaW5wdXRcIiBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPHRleHRhcmVhIHJlZj17dGV4dFJlZn0gcGxhY2Vob2xkZXI9XCLrgrTsmqnsnYQg7J6F66Cl7ZWY7IS47JqULlwiIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7smYTro4w8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dJbnB1dDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJNc2dJbnB1dCIsIm11dGF0ZSIsInRleHRSZWYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInRleHQiLCJjdXJyZW50IiwidmFsdWUiLCJmb3JtIiwiY2xhc3NOYW1lIiwidGV4dGFyZWEiLCJyZWYiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgInput.jsx\n");

/***/ }),

/***/ "./components/MsgList.jsx":
/*!********************************!*\
  !*** ./components/MsgList.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar UserIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\nvar msgs = Array(50).fill(0).map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nvar MsgList = function() {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"messages\",\n            children: msgs.map(function(x) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({}, x), x.id, false, {\n                    fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsR0FBSyxDQUFDRSxPQUFPLEdBQUcsQ0FBQztJQUFBLENBQUs7SUFBRSxDQUFLO0FBQUEsQ0FBQztBQUM5QixHQUFLLENBQUNDLGVBQWUsR0FBRyxRQUFRO0lBQUZELE1BQU0sQ0FBTkEsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNOztBQUU1RCxHQUFLLENBQUNDLElBQUksR0FBR0MsS0FBSyxDQUFDLEVBQUUsRUFDbEJDLElBQUksQ0FBQyxDQUFDLEVBQ05DLEdBQUcsQ0FBQyxRQUFRLENBQVBDLENBQUMsRUFBRUMsQ0FBQztJQUFLLE1BQ2QsQ0FEZSxDQUFDO1FBQ2ZDLEVBQUUsRUFBRSxFQUFFLEdBQUdELENBQUM7UUFDVkUsTUFBTSxFQUFFWCxlQUFlO1FBQ3ZCWSxTQUFTLEVBQUUsYUFBYSxJQUFJLEVBQUUsR0FBR0gsQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO1FBQy9DSSxJQUFJLEVBQUcsR0FBUyxNQUFVLENBQWpCLEVBQUUsR0FBR0osQ0FBQyxFQUFDLENBQVU7SUFDNUIsQ0FBQzs7QUFFSCxHQUFLLENBQUNLLE9BQU8sR0FBRyxRQUNoQjtrQkFBRSxNQUNDLENBQUM7OEZBQUNDLENBQUU7WUFBQ0MsU0FBUyxFQUFDLENBQVU7c0JBQ3JCWixJQUFJLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQVBVLENBQUM7OEJBQ1YsTUFBTSwrREFBTHBCLGdEQUFPLG9CQUFnQm9CLENBQUMsR0FBWEEsQ0FBQyxDQUFDUCxFQUFFOzs7Ozs7Ozs7Ozs7O0tBSnBCSSxPQUFPO0FBVWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QuanN4P2I1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xuaW1wb3J0IE1zZ0lucHV0IGZyb20gXCIuL01zZ0lucHV0XCI7XG5cbmNvbnN0IFVzZXJJZHMgPSBbXCJyb3lcIiwgXCJqYXlcIl07XG5jb25zdCBnZXRSYW5kb21Vc2VySWQgPSAoKSA9PiBVc2VySWRzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldO1xuXG5jb25zdCBtc2dzID0gQXJyYXkoNTApXG4gIC5maWxsKDApXG4gIC5tYXAoKF8sIGkpID0+ICh7XG4gICAgaWQ6IDUwIC0gaSxcbiAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgIHRpbWVzdGFtcDogMTIzNDU2Nzg5MDEyMyArICg1MCAtIGkpICogMTAwMCAqIDYwLFxuICAgIHRleHQ6IGAkezUwIC0gaX0gbW9jayB0ZXh0YCxcbiAgfSkpO1xuXG5jb25zdCBNc2dMaXN0ID0gKCkgPT4gKFxuICA8PlxuICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAge21zZ3MubWFwKCh4KSA9PiAoXG4gICAgICAgIDxNc2dJdGVtIGtleT17eC5pZH0gey4uLnh9IC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwiVXNlcklkcyIsImdldFJhbmRvbVVzZXJJZCIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIm1zZ3MiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsImlkIiwidXNlcklkIiwidGltZXN0YW1wIiwidGV4dCIsIk1zZ0xpc3QiLCJ1bCIsImNsYXNzTmFtZSIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

});