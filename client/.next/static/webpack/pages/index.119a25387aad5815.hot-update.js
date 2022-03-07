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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.jsx\");\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserIds = [\n    \"roy\",\n    \"jay\"\n];\nvar getRandomUserId = function() {\n    return UserIds[Math.round(Math.random())];\n};\nvar originalMsgs = Array(50).fill(0) // 빈 배열 채우기\n.map(function(_, i) {\n    return {\n        id: 50 - i,\n        userId: getRandomUserId(),\n        timestamp: 1234567890123 + (50 - i) * 1000 * 60,\n        text: \"\".concat(50 - i, \" mock text\")\n    };\n});\nconsole.log(JSON.stringify(originalMsgs));\nvar MsgList = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(originalMsgs), msgs1 = ref[0], setMsgs = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), editingId = ref1[0], setEditingId = ref1[1];\n    var onCreate = function(text) {\n        var newMsg = {\n            id: msgs1.length + 1,\n            userId: getRandomUserId(),\n            timestamp: Date.now(),\n            text: \"\".concat(msgs1.length + 1, \" \").concat(text)\n        };\n        setMsgs(function(msgs) {\n            return [\n                newMsg\n            ].concat(_toConsumableArray(msgs));\n        });\n    };\n    var onUpdate = function(text, id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs; // -1 반환시\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1, _objectSpread({}, msgs[targetIndex], {\n                text: text\n            }));\n            return newMsgs;\n        });\n        doneEdit();\n    };\n    var onDelete = function(id) {\n        setMsgs(function(msgs) {\n            var targetIndex = msgs.findIndex(function(msg) {\n                return msg.id === id;\n            });\n            if (targetIndex < 0) return msgs;\n            var newMsgs = _toConsumableArray(msgs);\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    var doneEdit = function() {\n        return setEditingId(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                mutate: onCreate\n            }, void 0, false, {\n                fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs1.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({}, x, {\n                        onUpdate: onUpdate,\n                        onDelete: function() {\n                            return onDelete(x.id);\n                        },\n                        startEdit: function() {\n                            return setEditingId(x.id);\n                        },\n                        isEditing: editingId === x.id\n                    }), x.id, false, {\n                        fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/wonse/Desktop/RestAPI_Practice/local-api/client/components/MsgList.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(MsgList, \"98aREoWYavyOBv5xOQhoiAi3TBY=\");\n_c = MsgList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgList);\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0xpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ0U7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDRyxPQUFPLEdBQUcsQ0FBQztJQUFBLENBQUs7SUFBRSxDQUFLO0FBQUEsQ0FBQztBQUM5QixHQUFLLENBQUNDLGVBQWUsR0FBRyxRQUFRO0lBQUZELE1BQU0sQ0FBTkEsT0FBTyxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNOztBQUU1RCxHQUFLLENBQUNDLFlBQVksR0FBR0MsS0FBSyxDQUFDLEVBQUUsRUFDMUJDLElBQUksQ0FBQyxDQUFDLENBQUUsQ0FBVyxFQUFZO0NBQ25CQyxHQUFULENBQUMsUUFBUSxDQUFQQyxDQUFDLEVBQUVDLENBQUM7SUFBSyxNQUNkLENBRGUsQ0FBQztRQUNmQyxFQUFFLEVBQUUsRUFBRSxHQUFHRCxDQUFDO1FBQ1ZFLE1BQU0sRUFBRVgsZUFBZTtRQUN2QlksU0FBUyxFQUFFLGFBQWEsSUFBSSxFQUFFLEdBQUdILENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUMvQ0ksSUFBSSxFQUFHLEdBQVMsTUFBVSxDQUFqQixFQUFFLEdBQUdKLENBQUMsRUFBQyxDQUFVO0lBQzVCLENBQUM7O0FBRUhLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2IsWUFBWTtBQUV2QyxHQUFLLENBQUNjLE9BQU8sR0FBRyxRQUNoQixHQURzQixDQUFDOzs7SUFDckIsR0FBSyxDQUFtQnBCLEdBQXNCLEdBQXRCQSwrQ0FBUSxDQUFDTSxZQUFZLEdBQXRDZSxLQUFJLEdBQWFyQixHQUFzQixLQUFqQ3NCLE9BQU8sR0FBSXRCLEdBQXNCO0lBQzlDLEdBQUssQ0FBNkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDdUIsU0FBUyxHQUFrQnZCLElBQWMsS0FBOUJ3QixZQUFZLEdBQUl4QixJQUFjO0lBQ2hELEdBQUssQ0FBQ3lCLFFBQVEsR0FBRyxRQUFRLENBQVBWLElBQUksRUFBSyxDQUFDO1FBQzFCLEdBQUssQ0FBQ1csTUFBTSxHQUFHLENBQUM7WUFDZGQsRUFBRSxFQUFFUyxLQUFJLENBQUNNLE1BQU0sR0FBRyxDQUFDO1lBQ25CZCxNQUFNLEVBQUVYLGVBQWU7WUFDdkJZLFNBQVMsRUFBRWMsSUFBSSxDQUFDQyxHQUFHO1lBQ25CZCxJQUFJLEVBQUcsR0FBcUJBLE1BQUksQ0FBdkJNLEtBQUksQ0FBQ00sTUFBTSxHQUFHLENBQUMsRUFBQyxDQUFDLElBQU8sT0FBTFosSUFBSTtRQUNsQyxDQUFDO1FBQ0RPLE9BQU8sQ0FBQyxRQUFRLENBQVBELElBQUk7WUFBSyxNQUFNLENBQU4sQ0FBQ0s7Z0JBQUFBLE1BQU07WUFBUyxDQUFDLENBQWpCLE1BQWlCLG9CQUFMTCxJQUFJOztJQUNwQyxDQUFDO0lBQ0QsR0FBSyxDQUFDUyxRQUFRLEdBQUcsUUFBUSxDQUFQZixJQUFJLEVBQUVILEVBQUUsRUFBSyxDQUFDO1FBQzlCVSxPQUFPLENBQUMsUUFBUSxDQUFQRCxJQUFJLEVBQUssQ0FBQztZQUNqQixHQUFLLENBQUNVLFdBQVcsR0FBR1YsSUFBSSxDQUFDVyxTQUFTLENBQUMsUUFBUSxDQUFQQyxHQUFHO2dCQUFLQSxNQUFNLENBQU5BLEdBQUcsQ0FBQ3JCLEVBQUUsS0FBS0EsRUFBRTs7WUFDekQsRUFBRSxFQUFFbUIsV0FBVyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUNWLElBQUksQ0FBRSxDQUFTO1lBQzNDLEdBQUssQ0FBQ2EsT0FBTyxzQkFBT2IsSUFBSTtZQUN4QmEsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDLG9CQUN4QlYsSUFBSSxDQUFDVSxXQUFXO2dCQUNuQmhCLElBQUksRUFBSkEsSUFBSTs7WUFFTixNQUFNLENBQUNtQixPQUFPO1FBQ2hCLENBQUM7UUFDREUsUUFBUTtJQUNWLENBQUM7SUFDRCxHQUFLLENBQUNDLFFBQVEsR0FBRyxRQUFRLENBQVB6QixFQUFFLEVBQUssQ0FBQztRQUN4QlUsT0FBTyxDQUFDLFFBQVEsQ0FBUEQsSUFBSSxFQUFLLENBQUM7WUFDakIsR0FBSyxDQUFDVSxXQUFXLEdBQUdWLElBQUksQ0FBQ1csU0FBUyxDQUFDLFFBQVEsQ0FBUEMsR0FBRztnQkFBS0EsTUFBTSxDQUFOQSxHQUFHLENBQUNyQixFQUFFLEtBQUtBLEVBQUU7O1lBQ3pELEVBQUUsRUFBRW1CLFdBQVcsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDVixJQUFJO1lBQ2hDLEdBQUssQ0FBQ2EsT0FBTyxzQkFBT2IsSUFBSTtZQUN4QmEsT0FBTyxDQUFDQyxNQUFNLENBQUNKLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQ0csT0FBTztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBQ0UsUUFBUSxHQUFHLFFBQVE7UUFBRlosTUFBTSxDQUFOQSxZQUFZLENBQUMsSUFBSTs7SUFFeEMsTUFBTTs7d0ZBRUR6QixpREFBUTtnQkFBQ3VDLE1BQU0sRUFBRWIsUUFBUTs7Ozs7O3dGQUN6QmMsQ0FBRTtnQkFBQ0MsU0FBUyxFQUFDLENBQVU7MEJBQ3JCbkIsS0FBSSxDQUFDWixHQUFHLENBQUMsUUFBUSxDQUFQZ0MsQ0FBQztrQ0FDVixNQUFNLCtEQUFMM0MsZ0RBQU8sb0JBRUYyQyxDQUFDO3dCQUNMWCxRQUFRLEVBQUVBLFFBQVE7d0JBQ2xCTyxRQUFRLEVBQUUsUUFBUTs0QkFBRkEsTUFBTSxDQUFOQSxRQUFRLENBQUNJLENBQUMsQ0FBQzdCLEVBQUU7O3dCQUM3QjhCLFNBQVMsRUFBRSxRQUFROzRCQUFGbEIsTUFBTSxDQUFOQSxZQUFZLENBQUNpQixDQUFDLENBQUM3QixFQUFFOzt3QkFDbEMrQixTQUFTLEVBQUVwQixTQUFTLEtBQUtrQixDQUFDLENBQUM3QixFQUFFO3dCQUx4QjZCLENBQUMsQ0FBQzdCLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUFXckIsQ0FBQztHQXRES1EsT0FBTztLQUFQQSxPQUFPO0FBd0RiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nc2dMaXN0LmpzeD9iNTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVXNlcklkcyA9IFtcInJveVwiLCBcImpheVwiXTtcbmNvbnN0IGdldFJhbmRvbVVzZXJJZCA9ICgpID0+IFVzZXJJZHNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG5cbmNvbnN0IG9yaWdpbmFsTXNncyA9IEFycmF5KDUwKVxuICAuZmlsbCgwKSAvLyDruYgg67Cw7Je0IOyxhOyasOq4sFxuICAubWFwKChfLCBpKSA9PiAoe1xuICAgIGlkOiA1MCAtIGksXG4gICAgdXNlcklkOiBnZXRSYW5kb21Vc2VySWQoKSxcbiAgICB0aW1lc3RhbXA6IDEyMzQ1Njc4OTAxMjMgKyAoNTAgLSBpKSAqIDEwMDAgKiA2MCxcbiAgICB0ZXh0OiBgJHs1MCAtIGl9IG1vY2sgdGV4dGAsXG4gIH0pKTtcblxuY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxNc2dzKSk7XG5cbmNvbnN0IE1zZ0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKG9yaWdpbmFsTXNncyk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgb25DcmVhdGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IHtcbiAgICAgIGlkOiBtc2dzLmxlbmd0aCArIDEsXG4gICAgICB1c2VySWQ6IGdldFJhbmRvbVVzZXJJZCgpLFxuICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgdGV4dDogYCR7bXNncy5sZW5ndGggKyAxfSAke3RleHR9YCxcbiAgICB9O1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IFtuZXdNc2csIC4uLm1zZ3NdKTtcbiAgfTtcbiAgY29uc3Qgb25VcGRhdGUgPSAodGV4dCwgaWQpID0+IHtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7IC8vIC0xIOuwmO2ZmOyLnFxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTtcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxLCB7XG4gICAgICAgIC4uLm1zZ3NbdGFyZ2V0SW5kZXhdLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBkb25lRWRpdCgpO1xuICB9O1xuICBjb25zdCBvbkRlbGV0ZSA9IChpZCkgPT4ge1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNncztcbiAgICAgIGNvbnN0IG5ld01zZ3MgPSBbLi4ubXNnc107XG4gICAgICBuZXdNc2dzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkb25lRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TXNnSW5wdXQgbXV0YXRlPXtvbkNyZWF0ZX0gLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlc1wiPlxuICAgICAgICB7bXNncy5tYXAoKHgpID0+IChcbiAgICAgICAgICA8TXNnSXRlbVxuICAgICAgICAgICAga2V5PXt4LmlkfVxuICAgICAgICAgICAgey4uLnh9XG4gICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUoeC5pZCl9XG4gICAgICAgICAgICBzdGFydEVkaXQ9eygpID0+IHNldEVkaXRpbmdJZCh4LmlkKX1cbiAgICAgICAgICAgIGlzRWRpdGluZz17ZWRpdGluZ0lkID09PSB4LmlkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0xpc3Q7XG4iXSwibmFtZXMiOlsiTXNnSXRlbSIsIk1zZ0lucHV0IiwidXNlU3RhdGUiLCJVc2VySWRzIiwiZ2V0UmFuZG9tVXNlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwib3JpZ2luYWxNc2dzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJpZCIsInVzZXJJZCIsInRpbWVzdGFtcCIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIk1zZ0xpc3QiLCJtc2dzIiwic2V0TXNncyIsImVkaXRpbmdJZCIsInNldEVkaXRpbmdJZCIsIm9uQ3JlYXRlIiwibmV3TXNnIiwibGVuZ3RoIiwiRGF0ZSIsIm5vdyIsIm9uVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiZG9uZUVkaXQiLCJvbkRlbGV0ZSIsIm11dGF0ZSIsInVsIiwiY2xhc3NOYW1lIiwieCIsInN0YXJ0RWRpdCIsImlzRWRpdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgList.jsx\n");

/***/ })

});