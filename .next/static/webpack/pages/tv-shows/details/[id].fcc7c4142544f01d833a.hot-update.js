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
    _this = undefined;











var Details = function Details(props) {
  var _show$rating, _show$rating2, _show$image;

  var show = props.show;
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
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: show.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: show.summary
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["type: ", show.type, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), (show === null || show === void 0 ? void 0 : (_show$rating = show.rating) === null || _show$rating === void 0 ? void 0 : _show$rating.average) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _public_images_star_png__WEBPACK_IMPORTED_MODULE_7__.default,
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 10
      }, _this), " ", show === null || show === void 0 ? void 0 : (_show$rating2 = show.rating) === null || _show$rating2 === void 0 ? void 0 : _show$rating2.average]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 34
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      placeholder: "blur",
      className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),
      src: (show === null || show === void 0 ? void 0 : (_show$image = show.image) === null || _show$image === void 0 ? void 0 : _show$image.medium) || _lib_constant_js__WEBPACK_IMPORTED_MODULE_6__.ImagePlaceholder,
      alt: "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }, _this) : null;
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


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvZGV0YWlscy9baWRdLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiXSwibmFtZXMiOlsiRGV0YWlscyIsInByb3BzIiwic2hvdyIsInBhZGRpbmciLCJuYW1lIiwiQmFjayIsIl9faHRtbCIsInN1bW1hcnkiLCJ0eXBlIiwicmF0aW5nIiwiYXZlcmFnZSIsIlN0YXIiLCJzdHlsZSIsImltYWdlIiwibWVkaXVtIiwiSW1hZ2VQbGFjZWhvbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQUEsTUFDakJDLElBRGlCLEdBQ1RELEtBRFMsQ0FDakJDLElBRGlCO0FBR3hCLFNBQ0VBLElBQUksZ0JBQUc7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFDO0FBQVQsS0FBWjtBQUFBLDRCQUNMLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFtQixlQUFPLEVBQUVELElBQUksQ0FBQ0U7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESyxlQUlMLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFQyw0REFBWjtBQUFrQixnQkFBTSxFQUFFLEVBQTFCO0FBQThCLGVBQUssRUFBRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSyxlQVNMO0FBQUEsZ0JBQUtILElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEssZUFVTDtBQUFLLDZCQUF1QixFQUFFO0FBQUNFLGNBQU0sRUFBRUosSUFBSSxDQUFDSztBQUFkO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWSyxlQVdMO0FBQUEsMkJBQVVMLElBQUksQ0FBQ00sSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSyxFQVlKLENBQUFOLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosNEJBQUFBLElBQUksQ0FBRU8sTUFBTiw4REFBY0MsT0FBZCxrQkFBMEI7QUFBQSw4QkFDeEIsOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVDLDREQUFaO0FBQWtCLGNBQU0sRUFBRSxFQUExQjtBQUE4QixhQUFLLEVBQUU7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QixPQUNvQlQsSUFEcEIsYUFDb0JBLElBRHBCLHdDQUNvQkEsSUFBSSxDQUFFTyxNQUQxQixrREFDb0IsY0FBY0MsT0FEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWnRCLGVBZUw7QUFDSSxpQkFBVyxFQUFDLE1BRGhCO0FBRUksZUFBUyxFQUFFRSxzRUFGZjtBQUdJLFNBQUcsRUFBRSxDQUFBVixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDJCQUFBQSxJQUFJLENBQUVXLEtBQU4sNERBQWFDLE1BQWIsS0FBdUJDLDhEQUhoQztBQUlJLFNBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSCxHQXVCSixJQXhCRjtBQTBCRCxDQTdCRDs7S0FBTWYsTzs7QUFtRE4sK0RBQWVBLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREEsNkdBQWdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R2LXNob3dzL2RldGFpbHMvW2lkXS5mY2M3YzQxNDI1NDRmMDFkODMzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQge2dldEFsbERhdGFJZHMsZ2V0QXZlbmdlckRhdGF9IGZyb20gJy4uLy4uLy4uL2xpYi9hdmVuZ2VyLmpzJ1xyXG5pbXBvcnQge0ltYWdlUGxhY2Vob2xkZXIsYmFzZXVybH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvbnN0YW50LmpzJ1xyXG5pbXBvcnQgU3RhciBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL3N0YXIucG5nJ1xyXG5pbXBvcnQgQmFjayBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2JhY2sucG5nJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vY3NzL2F2ZW5nZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBEZXRhaWxzID0gKHByb3BzKT0+IHtcclxuICBjb25zdCB7c2hvd30gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgc2hvdyA/IDxkaXYgc3R5bGU9e3twYWRkaW5nOjEwfX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e3Nob3cubmFtZX0+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtCYWNrfSBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9Lz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGgxPntzaG93Lm5hbWV9PC9oMT5cclxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogc2hvdy5zdW1tYXJ5fX0+PC9kaXY+XHJcbiAgICAgIDxwPnR5cGU6IHtzaG93LnR5cGV9IDwvcD5cclxuICAgICAge3Nob3c/LnJhdGluZz8uYXZlcmFnZSAmJiAgPGRpdj5cclxuICAgICAgICAgPEltYWdlIHNyYz17U3Rhcn0gaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfS8+IHtzaG93Py5yYXRpbmc/LmF2ZXJhZ2V9XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgICAgPGltZ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW1hZ2V9XHJcbiAgICAgICAgICBzcmM9e3Nob3c/LmltYWdlPy5tZWRpdW0gfHwgSW1hZ2VQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgOlxyXG4gICAgbnVsbFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZXVybH1zZWFyY2gvc2hvd3M/cT1hdmVuZ2Vyc2ApXHJcbiAgICBjb25zdCBzaG93cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIGNvbnN0IHBhdGhzID0gIGdldEFsbERhdGFJZHMoc2hvd3MpXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IHRydWUgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNldXJsfXNob3dzLyR7K2NvbnRleHQucGFyYW1zLmlkfWApXHJcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNob3dcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiJdLCJzb3VyY2VSb290IjoiIn0=