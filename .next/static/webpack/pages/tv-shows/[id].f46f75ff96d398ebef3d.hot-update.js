self["webpackHotUpdate_N_E"]("pages/tv-shows/[id]",{

/***/ "./pages/tv-shows/[id].js":
/*!********************************!*\
  !*** ./pages/tv-shows/[id].js ***!
  \********************************/
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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_avenger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/avenger.js */ "./lib/avenger.js");
/* harmony import */ var _lib_constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/constant.js */ "./lib/constant.js");
/* harmony import */ var _public_images_star_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/star.png */ "./public/images/star.png");
/* harmony import */ var _public_images_back_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/back.png */ "./public/images/back.png");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\[id].js",
    _this = undefined;









var Details = function Details(props) {
  var _show$rating, _show$rating2, _show$image;

  var show = props.show;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      padding: 10
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/tv-shows/avengers",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: _public_images_back_png__WEBPACK_IMPORTED_MODULE_6__.default,
          height: 30,
          width: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: show.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: show.summary
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["type: ", show.type, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), (show === null || show === void 0 ? void 0 : (_show$rating = show.rating) === null || _show$rating === void 0 ? void 0 : _show$rating.average) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _public_images_star_png__WEBPACK_IMPORTED_MODULE_5__.default,
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 10
      }, _this), " ", show === null || show === void 0 ? void 0 : (_show$rating2 = show.rating) === null || _show$rating2 === void 0 ? void 0 : _show$rating2.average]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 34
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      placeholder: "blur",
      className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),
      src: (show === null || show === void 0 ? void 0 : (_show$image = show.image) === null || _show$image === void 0 ? void 0 : _show$image.medium) || _lib_constant_js__WEBPACK_IMPORTED_MODULE_4__.ImagePlaceholder,
      alt: "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvW2lkXS5qcyJdLCJuYW1lcyI6WyJEZXRhaWxzIiwicHJvcHMiLCJzaG93IiwicGFkZGluZyIsIkJhY2siLCJuYW1lIiwiX19odG1sIiwic3VtbWFyeSIsInR5cGUiLCJyYXRpbmciLCJhdmVyYWdlIiwiU3RhciIsInN0eWxlIiwiaW1hZ2UiLCJtZWRpdW0iLCJJbWFnZVBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQUEsTUFDakJDLElBRGlCLEdBQ1RELEtBRFMsQ0FDakJDLElBRGlCO0FBR3hCLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBQztBQUFULEtBQVo7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxvQkFBWDtBQUFBLDZCQUNFO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVDLDREQUFaO0FBQWtCLGdCQUFNLEVBQUUsRUFBMUI7QUFBOEIsZUFBSyxFQUFFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUU7QUFBQSxnQkFBS0YsSUFBSSxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FO0FBQUssNkJBQXVCLEVBQUU7QUFBQ0MsY0FBTSxFQUFFSixJQUFJLENBQUNLO0FBQWQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBUUU7QUFBQSwyQkFBVUwsSUFBSSxDQUFDTSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLEVBU0csQ0FBQU4sSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiw0QkFBQUEsSUFBSSxDQUFFTyxNQUFOLDhEQUFjQyxPQUFkLGtCQUEwQjtBQUFBLDhCQUN4Qiw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBRUMsNERBQVo7QUFBa0IsY0FBTSxFQUFFLEVBQTFCO0FBQThCLGFBQUssRUFBRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHdCLE9BQ29CVCxJQURwQixhQUNvQkEsSUFEcEIsd0NBQ29CQSxJQUFJLENBQUVPLE1BRDFCLGtEQUNvQixjQUFjQyxPQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUN0IsZUFZRTtBQUNJLGlCQUFXLEVBQUMsTUFEaEI7QUFFSSxlQUFTLEVBQUVFLHNFQUZmO0FBR0ksU0FBRyxFQUFFLENBQUFWLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMkJBQUFBLElBQUksQ0FBRVcsS0FBTiw0REFBYUMsTUFBYixLQUF1QkMsOERBSGhDO0FBSUksU0FBRyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBeEJEOztLQUFNZixPOztBQW1ETiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di1zaG93cy9baWRdLmY0NmY3NWZmOTZkMzk4ZWJlZjNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xyXG5cclxuaW1wb3J0IHtnZXRBbGxEYXRhSWRzLGdldEF2ZW5nZXJEYXRhfSBmcm9tICcuLi8uLi9saWIvYXZlbmdlci5qcydcclxuaW1wb3J0IHtJbWFnZVBsYWNlaG9sZGVyLGJhc2V1cmx9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudC5qcydcclxuaW1wb3J0IFN0YXIgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9zdGFyLnBuZydcclxuaW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9iYWNrLnBuZydcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2Nzcy9hdmVuZ2VyLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuY29uc3QgRGV0YWlscyA9IChwcm9wcyk9PiB7XHJcbiAgY29uc3Qge3Nob3d9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvdHYtc2hvd3MvYXZlbmdlcnNcIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0JhY2t9IGhlaWdodD17MzB9IHdpZHRoPXszMH0vPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8aDE+e3Nob3cubmFtZX08L2gxPlxyXG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzaG93LnN1bW1hcnl9fT48L2Rpdj5cclxuICAgICAgPHA+dHlwZToge3Nob3cudHlwZX0gPC9wPlxyXG4gICAgICB7c2hvdz8ucmF0aW5nPy5hdmVyYWdlICYmICA8ZGl2PlxyXG4gICAgICAgICA8SW1hZ2Ugc3JjPXtTdGFyfSBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz4ge3Nob3c/LnJhdGluZz8uYXZlcmFnZX1cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZX1cclxuICAgICAgICAgIHNyYz17c2hvdz8uaW1hZ2U/Lm1lZGl1bSB8fCBJbWFnZVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAvKiogIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2V1cmx9c2VhcmNoL3Nob3dzP3E9YXZlbmdlcnNgKVxyXG4gIGNvbnN0IHNob3dzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGNvbnN0IHBhdGhzID0gZ2V0QWxsRGF0YUlkcyhzaG93cylcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfSoqL1xyXG4gICAgcmV0dXJuIHsgcGF0aHM6IFtdLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2V1cmx9c2hvd3MvJHsrY29udGV4dC5wYXJhbXMuaWR9YClcclxuICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2hvd1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=