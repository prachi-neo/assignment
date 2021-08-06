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
  debugger;
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: _public_images_back_png__WEBPACK_IMPORTED_MODULE_8__.default,
          height: 30,
          width: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: show.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: show.summary
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["type: ", show.type, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), (show === null || show === void 0 ? void 0 : (_show$rating = show.rating) === null || _show$rating === void 0 ? void 0 : _show$rating.average) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _public_images_star_png__WEBPACK_IMPORTED_MODULE_7__.default,
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 10
      }, _this), " ", show === null || show === void 0 ? void 0 : (_show$rating2 = show.rating) === null || _show$rating2 === void 0 ? void 0 : _show$rating2.average]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 34
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      placeholder: "blur",
      className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),
      src: (show === null || show === void 0 ? void 0 : (_show$image = show.image) === null || _show$image === void 0 ? void 0 : _show$image.medium) || _lib_constant_js__WEBPACK_IMPORTED_MODULE_6__.ImagePlaceholder,
      alt: "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvZGV0YWlscy9baWRdLmpzIl0sIm5hbWVzIjpbIkRldGFpbHMiLCJwcm9wcyIsInNob3ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYWRkaW5nIiwibmFtZSIsIkJhY2siLCJfX2h0bWwiLCJzdW1tYXJ5IiwidHlwZSIsInJhdGluZyIsImF2ZXJhZ2UiLCJTdGFyIiwic3R5bGUiLCJpbWFnZSIsIm1lZGl1bSIsIkltYWdlUGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVU7QUFBQTs7QUFBQTs7QUFBQSxNQUNqQkMsSUFEaUIsR0FDVEQsS0FEUyxDQUNqQkMsSUFEaUI7QUFFeEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNFO0FBQ0YsU0FDRUYsSUFBSSxnQkFBRztBQUFLLFNBQUssRUFBRTtBQUFDRyxhQUFPLEVBQUM7QUFBVCxLQUFaO0FBQUEsNEJBQ0wsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQW1CLGVBQU8sRUFBRUgsSUFBSSxDQUFDSTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLGVBSUwsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUEsK0JBQ0UsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVDLDREQUFaO0FBQWtCLGdCQUFNLEVBQUUsRUFBMUI7QUFBOEIsZUFBSyxFQUFFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpLLGVBU0w7QUFBQSxnQkFBS0wsSUFBSSxDQUFDSTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUSyxlQVVMO0FBQUssNkJBQXVCLEVBQUU7QUFBQ0UsY0FBTSxFQUFFTixJQUFJLENBQUNPO0FBQWQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZLLGVBV0w7QUFBQSwyQkFBVVAsSUFBSSxDQUFDUSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhLLEVBWUosQ0FBQVIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiw0QkFBQUEsSUFBSSxDQUFFUyxNQUFOLDhEQUFjQyxPQUFkLGtCQUEwQjtBQUFBLDhCQUN4Qiw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBRUMsNERBQVo7QUFBa0IsY0FBTSxFQUFFLEVBQTFCO0FBQThCLGFBQUssRUFBRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHdCLE9BQ29CWCxJQURwQixhQUNvQkEsSUFEcEIsd0NBQ29CQSxJQUFJLENBQUVTLE1BRDFCLGtEQUNvQixjQUFjQyxPQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFadEIsZUFlTDtBQUNJLGlCQUFXLEVBQUMsTUFEaEI7QUFFSSxlQUFTLEVBQUVFLHNFQUZmO0FBR0ksU0FBRyxFQUFFLENBQUFaLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMkJBQUFBLElBQUksQ0FBRWEsS0FBTiw0REFBYUMsTUFBYixLQUF1QkMsOERBSGhDO0FBSUksU0FBRyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFILEdBdUJKLElBeEJGO0FBMEJELENBOUJEOztHQUFNakIsTztVQUVXSSxrRDs7O0tBRlhKLE87O0FBb0ROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R2LXNob3dzL2RldGFpbHMvW2lkXS5mZDI1ODUxNTVjNDk3YzFlZmRiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQge2dldEFsbERhdGFJZHMsZ2V0QXZlbmdlckRhdGF9IGZyb20gJy4uLy4uLy4uL2xpYi9hdmVuZ2VyLmpzJ1xyXG5pbXBvcnQge0ltYWdlUGxhY2Vob2xkZXIsYmFzZXVybH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvbnN0YW50LmpzJ1xyXG5pbXBvcnQgU3RhciBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL3N0YXIucG5nJ1xyXG5pbXBvcnQgQmFjayBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2JhY2sucG5nJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vY3NzL2F2ZW5nZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBEZXRhaWxzID0gKHByb3BzKT0+IHtcclxuICBjb25zdCB7c2hvd30gPSBwcm9wc1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBkZWJ1Z2dlclxyXG4gIHJldHVybiAoXHJcbiAgICBzaG93ID8gPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD17c2hvdy5uYW1lfT48L21ldGE+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e0JhY2t9IGhlaWdodD17MzB9IHdpZHRoPXszMH0vPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8aDE+e3Nob3cubmFtZX08L2gxPlxyXG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBzaG93LnN1bW1hcnl9fT48L2Rpdj5cclxuICAgICAgPHA+dHlwZToge3Nob3cudHlwZX0gPC9wPlxyXG4gICAgICB7c2hvdz8ucmF0aW5nPy5hdmVyYWdlICYmICA8ZGl2PlxyXG4gICAgICAgICA8SW1hZ2Ugc3JjPXtTdGFyfSBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz4ge3Nob3c/LnJhdGluZz8uYXZlcmFnZX1cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZX1cclxuICAgICAgICAgIHNyYz17c2hvdz8uaW1hZ2U/Lm1lZGl1bSB8fCBJbWFnZVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA6XHJcbiAgICBudWxsXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNldXJsfXNlYXJjaC9zaG93cz9xPWF2ZW5nZXJzYClcclxuICAgIGNvbnN0IHNob3dzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc3QgcGF0aHMgPSAgZ2V0QWxsRGF0YUlkcyhzaG93cylcclxuICAgIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2V1cmx9c2hvd3MvJHsrY29udGV4dC5wYXJhbXMuaWR9YClcclxuICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2hvd1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=