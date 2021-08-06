self["webpackHotUpdate_N_E"]("pages/tv-shows/details/[id]",{

/***/ "./pages/tv-shows/details/[id].js":
/*!****************************************!*\
  !*** ./pages/tv-shows/details/[id].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_avenger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/avenger.js */ "./lib/avenger.js");
/* harmony import */ var _lib_constant_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/constant.js */ "./lib/constant.js");
/* harmony import */ var _public_images_star_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../public/images/star.png */ "./public/images/star.png");
/* harmony import */ var _public_images_back_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/images/back.png */ "./public/images/back.png");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\details\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();











var Details = function Details(props) {
  _s();

  var _show$rating, _show$rating2, _show$image;

  var show = props.show;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return show ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      padding: 10
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "title",
        content: show.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: _public_images_back_png__WEBPACK_IMPORTED_MODULE_8__.default,
      height: 30,
      width: 30,
      onClick: function onClick() {
        return router.back();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: show.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: show.summary
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["type: ", show.type, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), (show === null || show === void 0 ? void 0 : (_show$rating = show.rating) === null || _show$rating === void 0 ? void 0 : _show$rating.average) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _public_images_star_png__WEBPACK_IMPORTED_MODULE_7__.default,
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 10
      }, _this), " ", show === null || show === void 0 ? void 0 : (_show$rating2 = show.rating) === null || _show$rating2 === void 0 ? void 0 : _show$rating2.average]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 34
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      placeholder: "blur",
      className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),
      src: (show === null || show === void 0 ? void 0 : (_show$image = show.image) === null || _show$image === void 0 ? void 0 : _show$image.medium) || _lib_constant_js__WEBPACK_IMPORTED_MODULE_6__.ImagePlaceholder,
      alt: "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 12
  }, _this) : null;
};

_s(Details, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Details;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Details);

var _c;

$RefreshReg$(_c, "Details");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvZGV0YWlscy9baWRdLmpzIl0sIm5hbWVzIjpbIkRldGFpbHMiLCJwcm9wcyIsInNob3ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYWRkaW5nIiwibmFtZSIsIkJhY2siLCJiYWNrIiwiX19odG1sIiwic3VtbWFyeSIsInR5cGUiLCJyYXRpbmciLCJhdmVyYWdlIiwiU3RhciIsInN0eWxlIiwiaW1hZ2UiLCJtZWRpdW0iLCJJbWFnZVBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQUE7O0FBQUEsTUFDakJDLElBRGlCLEdBQ1RELEtBRFMsQ0FDakJDLElBRGlCO0FBRXhCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxTQUNFRixJQUFJLGdCQUFHO0FBQUssU0FBSyxFQUFFO0FBQUNHLGFBQU8sRUFBQztBQUFULEtBQVo7QUFBQSw0QkFDTCw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBbUIsZUFBTyxFQUFFSCxJQUFJLENBQUNJO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREssZUFJTCw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRUMsNERBQVo7QUFBa0IsWUFBTSxFQUFFLEVBQTFCO0FBQThCLFdBQUssRUFBRSxFQUFyQztBQUF5QyxhQUFPLEVBQUU7QUFBQSxlQUFNSixNQUFNLENBQUNLLElBQVAsRUFBTjtBQUFBO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSyxlQU1MO0FBQUEsZ0JBQUtOLElBQUksQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkssZUFPTDtBQUFLLDZCQUF1QixFQUFFO0FBQUNHLGNBQU0sRUFBRVAsSUFBSSxDQUFDUTtBQUFkO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSyxlQVFMO0FBQUEsMkJBQVVSLElBQUksQ0FBQ1MsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSyxFQVNKLENBQUFULElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosNEJBQUFBLElBQUksQ0FBRVUsTUFBTiw4REFBY0MsT0FBZCxrQkFBMEI7QUFBQSw4QkFDeEIsOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVDLDREQUFaO0FBQWtCLGNBQU0sRUFBRSxFQUExQjtBQUE4QixhQUFLLEVBQUU7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QixPQUNvQlosSUFEcEIsYUFDb0JBLElBRHBCLHdDQUNvQkEsSUFBSSxDQUFFVSxNQUQxQixrREFDb0IsY0FBY0MsT0FEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVHRCLGVBWUw7QUFDSSxpQkFBVyxFQUFDLE1BRGhCO0FBRUksZUFBUyxFQUFFRSxzRUFGZjtBQUdJLFNBQUcsRUFBRSxDQUFBYixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDJCQUFBQSxJQUFJLENBQUVjLEtBQU4sNERBQWFDLE1BQWIsS0FBdUJDLDhEQUhoQztBQUlJLFNBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSCxHQW9CSixJQXJCRjtBQXVCRCxDQTNCRDs7R0FBTWxCLE87VUFFV0ksa0Q7OztLQUZYSixPOztBQWlETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di1zaG93cy9kZXRhaWxzL1tpZF0uNTEzNDk5NzhmMmU5YWEwNTI5ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHtnZXRBbGxEYXRhSWRzLGdldEF2ZW5nZXJEYXRhfSBmcm9tICcuLi8uLi8uLi9saWIvYXZlbmdlci5qcydcclxuaW1wb3J0IHtJbWFnZVBsYWNlaG9sZGVyLGJhc2V1cmx9IGZyb20gJy4uLy4uLy4uL2xpYi9jb25zdGFudC5qcydcclxuaW1wb3J0IFN0YXIgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlcy9zdGFyLnBuZydcclxuaW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlcy9iYWNrLnBuZydcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uLy4uL2Nzcy9hdmVuZ2VyLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuY29uc3QgRGV0YWlscyA9IChwcm9wcyk9PiB7XHJcbiAgY29uc3Qge3Nob3d9ID0gcHJvcHNcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgc2hvdyA/IDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e3Nob3cubmFtZX0+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxJbWFnZSBzcmM9e0JhY2t9IGhlaWdodD17MzB9IHdpZHRoPXszMH0gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0vPlxyXG4gICAgICBcclxuICAgICAgPGgxPntzaG93Lm5hbWV9PC9oMT5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc2hvdy5zdW1tYXJ5fX0+PC9kaXY+XHJcbiAgICAgIDxwPnR5cGU6IHtzaG93LnR5cGV9IDwvcD5cclxuICAgICAge3Nob3c/LnJhdGluZz8uYXZlcmFnZSAmJiAgPGRpdj5cclxuICAgICAgICAgPEltYWdlIHNyYz17U3Rhcn0gaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfS8+IHtzaG93Py5yYXRpbmc/LmF2ZXJhZ2V9XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgICAgPGltZ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW1hZ2V9XHJcbiAgICAgICAgICBzcmM9e3Nob3c/LmltYWdlPy5tZWRpdW0gfHwgSW1hZ2VQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgOlxyXG4gICAgbnVsbFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZXVybH1zZWFyY2gvc2hvd3M/cT1hdmVuZ2Vyc2ApXHJcbiAgICBjb25zdCBzaG93cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnN0IHBhdGhzID0gIGdldEFsbERhdGFJZHMoc2hvd3MpXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNldXJsfXNob3dzLyR7K2NvbnRleHQucGFyYW1zLmlkfWApXHJcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNob3dcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9