"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/animations/diamond",{

/***/ "./pages/animations/diamond.js":
/*!*************************************!*\
  !*** ./pages/animations/diamond.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var lerp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lerp */ \"./node_modules/lerp/index.js\");\n/* harmony import */ var lerp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lerp__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_animations_diamond_diamonds_Diamonds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/animations/diamond/diamonds/Diamonds */ \"./components/animations/diamond/diamonds/Diamonds.js\");\n/* harmony import */ var _components_animations_diamond_Plane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/animations/diamond/Plane */ \"./components/animations/diamond/Plane.js\");\n/* harmony import */ var _components_animations_diamond_utils_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/animations/diamond/utils/blocks */ \"./components/animations/diamond/utils/blocks.js\");\n/* harmony import */ var _components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/animations/diamond/utils/store */ \"./components/animations/diamond/utils/store.js\");\n/* harmony import */ var _styles_diamond_diamond_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/diamond/diamond.module.css */ \"./styles/diamond/diamond.module.css\");\n/* harmony import */ var _styles_diamond_diamond_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_diamond_diamond_module_css__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();\n\n\n\n\n\n\n// import { Text, MultilineText } from \"../../components/animations/diamond/Text\"\n\n\n\n\n// import \"./styles.css\"\n\nfunction Startup() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.useFrame)(function() {\n        return ref.current.material.opacity = lerp__WEBPACK_IMPORTED_MODULE_3___default()(ref.current.material.opacity, 0, 0.025);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_animations_diamond_Plane__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        ref: ref,\n        color: \"#0e0e0f\",\n        position: [\n            0,\n            0,\n            200\n        ],\n        scale: [\n            100,\n            100,\n            1\n        ]\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, this);\n}\n_s(Startup, \"8QVLrcMdYxPUkj6ry5zpyt6J6X8=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.useFrame\n    ];\n});\n_c = Startup;\nfunction Paragraph(param) {\n    var image = param.image, index = param.index, offset = param.offset, factor = param.factor, header = param.header, aspect = param.aspect, text = param.text;\n    _s1();\n    var ref = (0,_components_animations_diamond_utils_blocks__WEBPACK_IMPORTED_MODULE_6__.useBlock)(), w = ref.contentMaxWidth, canvasWidth = ref.canvasWidth, margin = ref.margin, mobile = ref.mobile;\n    var size = aspect < 1 && !mobile ? 0.65 : 1;\n    var alignRight = (canvasWidth - w * size - margin) / 2;\n    var pixelWidth = w * _components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].zoom * size;\n    var left = !(index % 2);\n    var color = index % 2 ? \"#D40749\" : \"#2FE8C3\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_animations_diamond_utils_blocks__WEBPACK_IMPORTED_MODULE_6__.Block, {\n        factor: factor,\n        offset: offset,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n            position: [\n                left ? -alignRight : alignRight,\n                0,\n                0\n            ],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_animations_diamond_Plane__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    map: image,\n                    args: [\n                        1,\n                        1,\n                        32,\n                        32\n                    ],\n                    shift: 75,\n                    size: size,\n                    aspect: aspect,\n                    scale: [\n                        w * size,\n                        w * size / aspect,\n                        1\n                    ],\n                    frustumCulled: false\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.Html, {\n                    style: {\n                        width: pixelWidth / (mobile ? 1 : 2),\n                        textAlign: left ? \"left\" : \"right\"\n                    },\n                    position: [\n                        left || mobile ? -w * size / 2 : 0,\n                        -w * size / 2 / aspect - 0.4,\n                        1\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        tabIndex: index,\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                    left: left,\n                    right: !left,\n                    size: w * 0.04,\n                    color: color,\n                    top: true,\n                    position: [\n                        (left ? -w : w) * size / 2,\n                        w * size / aspect / 2 + 0.5,\n                        -1\n                    ],\n                    children: header\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_animations_diamond_utils_blocks__WEBPACK_IMPORTED_MODULE_6__.Block, {\n                    factor: 0.2,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        opacity: 0.5,\n                        size: w * 0.5,\n                        color: \"#1A1E2A\",\n                        position: [\n                            (left ? w : -w) / 2 * size,\n                            w * size / aspect / 1,\n                            -10\n                        ],\n                        children: \"0\" + (index + 1)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s1(Paragraph, \"dDKrz1NT00bpzCJaKDGj2bUqhu8=\", false, function() {\n    return [\n        _components_animations_diamond_utils_blocks__WEBPACK_IMPORTED_MODULE_6__.useBlock\n    ];\n});\n_c1 = Paragraph;\nfunction Content() {\n    _s2();\n    var images = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.useLoader)(three__WEBPACK_IMPORTED_MODULE_10__.TextureLoader, _components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].paragraphs.map(function(param) {\n        var image = param.image;\n        return image;\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        return images.forEach(function(texture) {\n            return texture.minFilter = three__WEBPACK_IMPORTED_MODULE_10__.LinearFilter;\n        });\n    }, [\n        images\n    ]);\n    var ref = (0,_components_animations_diamond_utils_blocks__WEBPACK_IMPORTED_MODULE_6__.useBlock)(), w = ref.contentMaxWidth, canvasWidth = ref.canvasWidth, canvasHeight = ref.canvasHeight, mobile = ref.mobile;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s2(Content, \"0v298uTeqPppW6ypCrwqYTgiKi0=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.useLoader,\n        _components_animations_diamond_utils_blocks__WEBPACK_IMPORTED_MODULE_6__.useBlock\n    ];\n});\n_c2 = Content;\nfunction DiamondPage() {\n    var _this = this;\n    _s3();\n    var scrollArea = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var onScroll = function(e) {\n        return _components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].top.current = e.target.scrollTop;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        return void onScroll({\n            target: scrollArea.current\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_diamond_diamond_module_css__WEBPACK_IMPORTED_MODULE_11___default().Conatiner),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {\n                className: style.Canvas,\n                linear: true,\n                dpr: [\n                    1,\n                    2\n                ],\n                orthographic: true,\n                camera: {\n                    zoom: _components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].zoom,\n                    position: [\n                        0,\n                        0,\n                        500\n                    ]\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_9__.Html, {\n                        center: true,\n                        className: \"loading\",\n                        children: \"Loading...\"\n                    }, void 0, false, void 0, void 0),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_animations_diamond_diamonds_Diamonds__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Startup, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"scrollArea\",\n                ref: scrollArea,\n                onScroll: onScroll,\n                children: new Array(_components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].sections).fill().map(function(_, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"0\" + index,\n                        style: {\n                            height: \"\".concat(_components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].pages / _components_animations_diamond_utils_store__WEBPACK_IMPORTED_MODULE_7__[\"default\"].sections * 100, \"vh\")\n                        }\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\handb\\\\Desktop\\\\Front-End Projects\\\\NextJS\\\\portfolio-three\\\\pages\\\\animations\\\\diamond.js\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this);\n}\n_s3(DiamondPage, \"zcHXMF1kvKN5StHFo2280CRfmxc=\");\n_c3 = DiamondPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiamondPage);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Startup\");\n$RefreshReg$(_c1, \"Paragraph\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"DiamondPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNxQyxDQUFDLEVBQUV0RCxLQUFLO3lDQUM3Qyw4REFBQ3dCLEtBQUc7d0JBQWErQixFQUFFLEVBQUUsR0FBRyxHQUFHdkQsS0FBSzt3QkFBRXFCLEtBQUssRUFBRTs0QkFBRW1DLE1BQU0sRUFBRSxFQUFDLENBQXVDLE1BQUUsQ0FBdkMsd0ZBQVksR0FBR3BFLDJGQUFjLEdBQUksR0FBRyxFQUFDLElBQUUsQ0FBQzt5QkFBRTt1QkFBdEZZLEtBQUs7Ozs7NkJBQXFGO2lCQUNyRyxDQUFDOzs7OztvQkFDRTs7Ozs7O1lBQ0YsQ0FFUDtDQUNGO0lBdkJRb0MsV0FBVztBQUFYQSxNQUFBQSxXQUFXO0FBeUJwQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hbmltYXRpb25zL2RpYW1vbmQuanM/ODNhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXHJcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBDYW52YXMsIHVzZUxvYWRlciwgdXNlRnJhbWUgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCJcclxuaW1wb3J0IHsgSHRtbCB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiXHJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIsIExpbmVhckZpbHRlciB9IGZyb20gXCJ0aHJlZVwiXHJcbmltcG9ydCBsZXJwIGZyb20gXCJsZXJwXCJcclxuLy8gaW1wb3J0IHsgVGV4dCwgTXVsdGlsaW5lVGV4dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FuaW1hdGlvbnMvZGlhbW9uZC9UZXh0XCJcclxuaW1wb3J0IERpYW1vbmRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FuaW1hdGlvbnMvZGlhbW9uZC9kaWFtb25kcy9EaWFtb25kc1wiXHJcbmltcG9ydCBQbGFuZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hbmltYXRpb25zL2RpYW1vbmQvUGxhbmVcIlxyXG5pbXBvcnQgeyBCbG9jaywgdXNlQmxvY2sgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hbmltYXRpb25zL2RpYW1vbmQvdXRpbHMvYmxvY2tzXCJcclxuaW1wb3J0IHN0YXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FuaW1hdGlvbnMvZGlhbW9uZC91dGlscy9zdG9yZVwiXHJcblxyXG4vLyBpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIlxyXG5pbXBvcnQgU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2RpYW1vbmQvZGlhbW9uZC5tb2R1bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gU3RhcnR1cCgpIHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKVxyXG4gIHVzZUZyYW1lKCgpID0+IChyZWYuY3VycmVudC5tYXRlcmlhbC5vcGFjaXR5ID0gbGVycChyZWYuY3VycmVudC5tYXRlcmlhbC5vcGFjaXR5LCAwLCAwLjAyNSkpKVxyXG4gIHJldHVybiA8UGxhbmUgcmVmPXtyZWZ9IGNvbG9yPVwiIzBlMGUwZlwiIHBvc2l0aW9uPXtbMCwgMCwgMjAwXX0gc2NhbGU9e1sxMDAsIDEwMCwgMV19IC8+XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhcmFncmFwaCh7IGltYWdlLCBpbmRleCwgb2Zmc2V0LCBmYWN0b3IsIGhlYWRlciwgYXNwZWN0LCB0ZXh0IH0pIHtcclxuICBjb25zdCB7IGNvbnRlbnRNYXhXaWR0aDogdywgY2FudmFzV2lkdGgsIG1hcmdpbiwgbW9iaWxlIH0gPSB1c2VCbG9jaygpXHJcbiAgY29uc3Qgc2l6ZSA9IGFzcGVjdCA8IDEgJiYgIW1vYmlsZSA/IDAuNjUgOiAxXHJcbiAgY29uc3QgYWxpZ25SaWdodCA9IChjYW52YXNXaWR0aCAtIHcgKiBzaXplIC0gbWFyZ2luKSAvIDJcclxuICBjb25zdCBwaXhlbFdpZHRoID0gdyAqIHN0YXRlLnpvb20gKiBzaXplXHJcbiAgY29uc3QgbGVmdCA9ICEoaW5kZXggJSAyKVxyXG4gIGNvbnN0IGNvbG9yID0gaW5kZXggJSAyID8gXCIjRDQwNzQ5XCIgOiBcIiMyRkU4QzNcIlxyXG4gIHJldHVybiAoXHJcbiAgICA8QmxvY2sgZmFjdG9yPXtmYWN0b3J9IG9mZnNldD17b2Zmc2V0fT5cclxuICAgICAgPGdyb3VwIHBvc2l0aW9uPXtbbGVmdCA/IC1hbGlnblJpZ2h0IDogYWxpZ25SaWdodCwgMCwgMF19PlxyXG4gICAgICAgIDxQbGFuZSBtYXA9e2ltYWdlfSBhcmdzPXtbMSwgMSwgMzIsIDMyXX0gc2hpZnQ9ezc1fSBzaXplPXtzaXplfSBhc3BlY3Q9e2FzcGVjdH0gc2NhbGU9e1t3ICogc2l6ZSwgKHcgKiBzaXplKSAvIGFzcGVjdCwgMV19IGZydXN0dW1DdWxsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgIDxIdG1sXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogcGl4ZWxXaWR0aCAvIChtb2JpbGUgPyAxIDogMiksIHRleHRBbGlnbjogbGVmdCA/IFwibGVmdFwiIDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICBwb3NpdGlvbj17W2xlZnQgfHwgbW9iaWxlID8gKC13ICogc2l6ZSkgLyAyIDogMCwgKC13ICogc2l6ZSkgLyAyIC8gYXNwZWN0IC0gMC40LCAxXX0+XHJcbiAgICAgICAgICA8ZGl2IHRhYkluZGV4PXtpbmRleH0+e3RleHR9PC9kaXY+XHJcbiAgICAgICAgPC9IdG1sPlxyXG4gICAgICAgIDxUZXh0IGxlZnQ9e2xlZnR9IHJpZ2h0PXshbGVmdH0gc2l6ZT17dyAqIDAuMDR9IGNvbG9yPXtjb2xvcn0gdG9wIHBvc2l0aW9uPXtbKChsZWZ0ID8gLXcgOiB3KSAqIHNpemUpIC8gMiwgKHcgKiBzaXplKSAvIGFzcGVjdCAvIDIgKyAwLjUsIC0xXX0+XHJcbiAgICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8QmxvY2sgZmFjdG9yPXswLjJ9PlxyXG4gICAgICAgICAgPFRleHQgb3BhY2l0eT17MC41fSBzaXplPXt3ICogMC41fSBjb2xvcj1cIiMxQTFFMkFcIiBwb3NpdGlvbj17WygobGVmdCA/IHcgOiAtdykgLyAyKSAqIHNpemUsICh3ICogc2l6ZSkgLyBhc3BlY3QgLyAxLCAtMTBdfT5cclxuICAgICAgICAgICAge1wiMFwiICsgKGluZGV4ICsgMSl9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9CbG9jaz5cclxuICAgICAgPC9ncm91cD5cclxuICAgIDwvQmxvY2s+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBDb250ZW50KCkge1xyXG4gIGNvbnN0IGltYWdlcyA9IHVzZUxvYWRlcihcclxuICAgIFRleHR1cmVMb2FkZXIsXHJcbiAgICBzdGF0ZS5wYXJhZ3JhcGhzLm1hcCgoeyBpbWFnZSB9KSA9PiBpbWFnZSlcclxuICApXHJcbiAgdXNlTWVtbygoKSA9PiBpbWFnZXMuZm9yRWFjaCgodGV4dHVyZSkgPT4gKHRleHR1cmUubWluRmlsdGVyID0gTGluZWFyRmlsdGVyKSksIFtpbWFnZXNdKVxyXG4gIGNvbnN0IHsgY29udGVudE1heFdpZHRoOiB3LCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBtb2JpbGUgfSA9IHVzZUJsb2NrKClcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIHsvKiA8QmxvY2sgZmFjdG9yPXsxfSBvZmZzZXQ9ezB9PlxyXG4gICAgICAgIDxCbG9jayBmYWN0b3I9ezEuMn0+XHJcbiAgICAgICAgICA8VGV4dCBsZWZ0IHNpemU9e3cgKiAwLjE1fSBwb3NpdGlvbj17Wy13IC8gMy4yLCAwLjUsIC0xXX0gY29sb3I9XCIjZDQwNzQ5XCI+XHJcbiAgICAgICAgICAgIE1PS1NIQVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQmxvY2s+XHJcbiAgICAgICAgPEJsb2NrIGZhY3Rvcj17MS4wfT5cclxuICAgICAgICAgIDxIdG1sIGNsYXNzTmFtZT1cImJvdHRvbS1sZWZ0XCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSBwb3NpdGlvbj17Wy1jYW52YXNXaWR0aCAvIDIsIC1jYW52YXNIZWlnaHQgLyAyLCAwXX0+XHJcbiAgICAgICAgICAgIEl0IHdhcyB0aGUgeWVhciAyMDc2Lnttb2JpbGUgPyA8YnIgLz4gOiBcIiBcIn1UaGUgc3Vic3RhbmNlIGhhZCBhcnJpdmVkLlxyXG4gICAgICAgICAgPC9IdG1sPlxyXG4gICAgICAgIDwvQmxvY2s+XHJcbiAgICAgIDwvQmxvY2s+XHJcbiAgICAgIDxCbG9jayBmYWN0b3I9ezEuMn0gb2Zmc2V0PXs1Ljd9PlxyXG4gICAgICAgIDxNdWx0aWxpbmVUZXh0IHRvcCBsZWZ0IHNpemU9e3cgKiAwLjE1fSBsaW5lSGVpZ2h0PXt3IC8gNX0gcG9zaXRpb249e1stdyAvIDMuNSwgMCwgLTFdfSBjb2xvcj1cIiMyZmU4YzNcIiB0ZXh0PXtcImZvdXJcXG56ZXJvXFxuemVyb1wifSAvPlxyXG4gICAgICA8L0Jsb2NrPlxyXG4gICAgICB7c3RhdGUucGFyYWdyYXBocy5tYXAoKHByb3BzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxQYXJhZ3JhcGgga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSB7Li4ucHJvcHN9IGltYWdlPXtpbWFnZXNbaW5kZXhdfSAvPlxyXG4gICAgICApKX1cclxuICAgICAge3N0YXRlLnN0cmlwZXMubWFwKCh7IG9mZnNldCwgY29sb3IsIGhlaWdodCB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxCbG9jayBrZXk9e2luZGV4fSBmYWN0b3I9ey0xLjV9IG9mZnNldD17b2Zmc2V0fT5cclxuICAgICAgICAgIDxQbGFuZSBhcmdzPXtbNTAsIGhlaWdodCwgMzIsIDMyXX0gc2hpZnQ9ey00fSBjb2xvcj17Y29sb3J9IHJvdGF0aW9uPXtbMCwgMCwgTWF0aC5QSSAvIDhdfSBwb3NpdGlvbj17WzAsIDAsIC0xMF19IC8+XHJcbiAgICAgICAgPC9CbG9jaz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxCbG9jayBmYWN0b3I9ezEuMjV9IG9mZnNldD17OH0+XHJcbiAgICAgICAgPEh0bWwgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSBjbGFzc05hbWU9XCJib3R0b20tbGVmdFwiIHBvc2l0aW9uPXtbLWNhbnZhc1dpZHRoIC8gMiwgLWNhbnZhc0hlaWdodCAvIDIsIDBdfT5cclxuICAgICAgICAgIEN1bHR1cmUgaXMgbm90IHlvdXIgZnJpZW5kLlxyXG4gICAgICAgIDwvSHRtbD5cclxuICAgICAgPC9CbG9jaz4gKi99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERpYW1vbmRQYWdlKCkge1xyXG4gIGNvbnN0IHNjcm9sbEFyZWEgPSB1c2VSZWYoKVxyXG4gIGNvbnN0IG9uU2Nyb2xsID0gKGUpID0+IChzdGF0ZS50b3AuY3VycmVudCA9IGUudGFyZ2V0LnNjcm9sbFRvcClcclxuICB1c2VFZmZlY3QoKCkgPT4gdm9pZCBvblNjcm9sbCh7IHRhcmdldDogc2Nyb2xsQXJlYS5jdXJyZW50IH0pLCBbXSlcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Db25hdGluZXJ9PlxyXG5cclxuICAgICAgPENhbnZhcyBjbGFzc05hbWU9e3N0eWxlLkNhbnZhc30gbGluZWFyIGRwcj17WzEsIDJdfSBvcnRob2dyYXBoaWMgY2FtZXJhPXt7IHpvb206IHN0YXRlLnpvb20sIHBvc2l0aW9uOiBbMCwgMCwgNTAwXSB9fT5cclxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxIdG1sIGNlbnRlciBjbGFzc05hbWU9XCJsb2FkaW5nXCIgY2hpbGRyZW49XCJMb2FkaW5nLi4uXCIgLz59PlxyXG4gICAgICAgICAgPENvbnRlbnQgLz5cclxuICAgICAgICAgIDxEaWFtb25kcyAvPlxyXG4gICAgICAgICAgPFN0YXJ0dXAgLz5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L0NhbnZhcz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxBcmVhXCIgcmVmPXtzY3JvbGxBcmVhfSBvblNjcm9sbD17b25TY3JvbGx9PlxyXG4gICAgICAgIHtuZXcgQXJyYXkoc3RhdGUuc2VjdGlvbnMpLmZpbGwoKS5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGlkPXtcIjBcIiArIGluZGV4fSBzdHlsZT17eyBoZWlnaHQ6IGAkeyhzdGF0ZS5wYWdlcyAvIHN0YXRlLnNlY3Rpb25zKSAqIDEwMH12aGAgfX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlhbW9uZFBhZ2UiXSwibmFtZXMiOlsiUmVhY3RET00iLCJSZWFjdCIsIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlTWVtbyIsIkNhbnZhcyIsInVzZUxvYWRlciIsInVzZUZyYW1lIiwiSHRtbCIsIlRleHR1cmVMb2FkZXIiLCJMaW5lYXJGaWx0ZXIiLCJsZXJwIiwiRGlhbW9uZHMiLCJQbGFuZSIsIkJsb2NrIiwidXNlQmxvY2siLCJzdGF0ZSIsIlN0eWxlIiwiU3RhcnR1cCIsInJlZiIsImN1cnJlbnQiLCJtYXRlcmlhbCIsIm9wYWNpdHkiLCJjb2xvciIsInBvc2l0aW9uIiwic2NhbGUiLCJQYXJhZ3JhcGgiLCJpbWFnZSIsImluZGV4Iiwib2Zmc2V0IiwiZmFjdG9yIiwiaGVhZGVyIiwiYXNwZWN0IiwidGV4dCIsImNvbnRlbnRNYXhXaWR0aCIsInciLCJjYW52YXNXaWR0aCIsIm1hcmdpbiIsIm1vYmlsZSIsInNpemUiLCJhbGlnblJpZ2h0IiwicGl4ZWxXaWR0aCIsInpvb20iLCJsZWZ0IiwiZ3JvdXAiLCJtYXAiLCJhcmdzIiwic2hpZnQiLCJmcnVzdHVtQ3VsbGVkIiwic3R5bGUiLCJ3aWR0aCIsInRleHRBbGlnbiIsImRpdiIsInRhYkluZGV4IiwiVGV4dCIsInJpZ2h0IiwidG9wIiwiQ29udGVudCIsImltYWdlcyIsInBhcmFncmFwaHMiLCJmb3JFYWNoIiwidGV4dHVyZSIsIm1pbkZpbHRlciIsImNhbnZhc0hlaWdodCIsIkRpYW1vbmRQYWdlIiwic2Nyb2xsQXJlYSIsIm9uU2Nyb2xsIiwiZSIsInRhcmdldCIsInNjcm9sbFRvcCIsImNsYXNzTmFtZSIsIkNvbmF0aW5lciIsImxpbmVhciIsImRwciIsIm9ydGhvZ3JhcGhpYyIsImNhbWVyYSIsImZhbGxiYWNrIiwiY2VudGVyIiwiY2hpbGRyZW4iLCJBcnJheSIsInNlY3Rpb25zIiwiZmlsbCIsIl8iLCJpZCIsImhlaWdodCIsInBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/animations/diamond.js\n"));

/***/ })

});