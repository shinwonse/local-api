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

/***/ "./components/MsgList.jsx":
/*!********************************!*\
  !*** ./components/MsgList.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_wonse_Desktop_RestAPI_Practice_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"../node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_wonse_Desktop_RestAPI_Practice_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_wonse_Desktop_RestAPI_Practice_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\n// const originalMsgs = Array(50)\n//   .fill(0) // 빈 배열 채우기\n//   .map((_, i) => ({\n//     id: 50 - i,\n//     userId: getRandomUserId(),\n//     timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n//     text: `${50 - i} mock text`,\n//   }));\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), msgs1 = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs1.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs1.length + 1, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat(_toConsumableArray(msgs));\n        });\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs; // -1 반환시\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1, _objectSpread({}, msgs[targetIndex], {\n                text: text\n            }));\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    var getMessages = function() {\n        var _ref = _asyncToGenerator(_Users_wonse_Desktop_RestAPI_Practice_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var msgs;\n            return _Users_wonse_Desktop_RestAPI_Practice_local_api_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"get\", \"/messages\");\n                    case 2:\n                        msgs = _ctx.sent;\n                        setMsgs(msgs);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getMessages() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        getMessages();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id\n                    }), x.id, false, {\n                        fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"H8+/0IR4vlwk0zYIoU2Xwgn4HR4=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzeD9iNTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVXNlcklkcyA9IFtcInJveVwiLCBcImpheVwiXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbi8vIGNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuLy8gICAuZmlsbCgwKSAvLyDruYgg67Cw7Je0IOyxhOyasOq4sFxuLy8gICAubWFwKChfLCBpKSA9PiAoe1xuLy8gICAgIGlkOiA1MCAtIGksXG4vLyAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbi8vICAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcbi8vICAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXG4vLyAgIH0pKTtcblxuY29uc3QgTXNnTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgW21zZ3MsIHNldE1zZ3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZWRpdGluZ0lkLCBzZXRFZGl0aW5nSWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9uQ3JlYXRlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSB7XG4gICAgICBpZDogbXNncy5sZW5ndGggKyAxLFxuICAgICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQ6IGAke21zZ3MubGVuZ3RoICsgMX0gJHt0ZXh0fWAsXG4gICAgfTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiBbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG4gIGNvbnN0IG9uVXBkYXRlID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0TXNncygobXNncykgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSBtc2dzLmZpbmRJbmRleCgobXNnKSA9PiBtc2cuaWQgPT09IGlkKTtcbiAgICAgIGlmICh0YXJnZXRJbmRleCA8IDApIHJldHVybiBtc2dzOyAvLyAtMSDrsJjtmZjsi5xcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSwge1xuICAgICAgICAuLi5tc2dzW3RhcmdldEluZGV4XSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZG9uZUVkaXQoKTtcbiAgfTtcbiAgY29uc3Qgb25EZWxldGUgPSAoaWQpID0+IHtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7XG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdO1xuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZG9uZUVkaXQgPSAoKSA9PiBzZXRFZGl0aW5nSWQobnVsbCk7XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbXNncyA9IGF3YWl0IGZldGNoZXIoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIik7XG4gICAgc2V0TXNncyhtc2dzKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRNZXNzYWdlcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25DcmVhdGV9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17eC5pZH1cbiAgICAgICAgICAgIHsuLi54fVxuICAgICAgICAgICAgb25VcGRhdGU9e29uVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IG9uRGVsZXRlKHguaWQpfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzZXRFZGl0aW5nSWQoeC5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0geC5pZH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNc2dMaXN0O1xuIl0sIm5hbWVzIjpbIk1zZ0l0ZW0iLCJNc2dJbnB1dCIsImZldGNoZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJJZHMiLCJnZXRSYW5kb21Vc2VySWQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJNc2dMaXN0IiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJvbkNyZWF0ZSIsInRleHQiLCJuZXdNc2ciLCJpZCIsImxlbmd0aCIsInVzZXJJZCIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJvblVwZGF0ZSIsInRhcmdldEluZGV4IiwiZmluZEluZGV4IiwibXNnIiwibmV3TXNncyIsInNwbGljZSIsImRvbmVFZGl0Iiwib25EZWxldGUiLCJnZXRNZXNzYWdlcyIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

});