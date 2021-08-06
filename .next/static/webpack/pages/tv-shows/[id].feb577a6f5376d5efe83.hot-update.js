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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\[id].js",
    _this = undefined;








var Second = function Second(props) {
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
          lineNumber: 16,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: show.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: show.summary
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["type: ", show.type, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), (show === null || show === void 0 ? void 0 : (_show$rating = show.rating) === null || _show$rating === void 0 ? void 0 : _show$rating.average) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _public_images_star_png__WEBPACK_IMPORTED_MODULE_5__.default,
        height: 20,
        width: 20
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 10
      }, _this), " ", show === null || show === void 0 ? void 0 : (_show$rating2 = show.rating) === null || _show$rating2 === void 0 ? void 0 : _show$rating2.average]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 34
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      placeholder: "blur",
      style: {
        objectFit: 'cover',
        height: '100%',
        width: 300
      },
      src: (show === null || show === void 0 ? void 0 : (_show$image = show.image) === null || _show$image === void 0 ? void 0 : _show$image.medium) || _lib_constant_js__WEBPACK_IMPORTED_MODULE_4__.ImagePlaceholder,
      alt: "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_c = Second;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Second);

var _c;

$RefreshReg$(_c, "Second");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvW2lkXS5qcyJdLCJuYW1lcyI6WyJTZWNvbmQiLCJwcm9wcyIsInNob3ciLCJwYWRkaW5nIiwiQmFjayIsIm5hbWUiLCJfX2h0bWwiLCJzdW1tYXJ5IiwidHlwZSIsInJhdGluZyIsImF2ZXJhZ2UiLCJTdGFyIiwib2JqZWN0Rml0IiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWFnZSIsIm1lZGl1bSIsIkltYWdlUGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVTtBQUFBOztBQUFBLE1BQ2hCQyxJQURnQixHQUNSRCxLQURRLENBQ2hCQyxJQURnQjtBQUd2QixzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUM7QUFBVCxLQUFaO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsb0JBQVg7QUFBQSw2QkFDRTtBQUFBLCtCQUNFLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFQyw0REFBWjtBQUFrQixnQkFBTSxFQUFFLEVBQTFCO0FBQThCLGVBQUssRUFBRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUEsZ0JBQUtGLElBQUksQ0FBQ0c7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRTtBQUFLLDZCQUF1QixFQUFFO0FBQUNDLGNBQU0sRUFBRUosSUFBSSxDQUFDSztBQUFkO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQVFFO0FBQUEsMkJBQVVMLElBQUksQ0FBQ00sSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixFQVNHLENBQUFOLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosNEJBQUFBLElBQUksQ0FBRU8sTUFBTiw4REFBY0MsT0FBZCxrQkFBMEI7QUFBQSw4QkFDeEIsOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVDLDREQUFaO0FBQWtCLGNBQU0sRUFBRSxFQUExQjtBQUE4QixhQUFLLEVBQUU7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR3QixPQUNvQlQsSUFEcEIsYUFDb0JBLElBRHBCLHdDQUNvQkEsSUFBSSxDQUFFTyxNQUQxQixrREFDb0IsY0FBY0MsT0FEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVDdCLGVBWUU7QUFDSSxpQkFBVyxFQUFDLE1BRGhCO0FBRUksV0FBSyxFQUFFO0FBQUNFLGlCQUFTLEVBQUMsT0FBWDtBQUFtQkMsY0FBTSxFQUFDLE1BQTFCO0FBQWtDQyxhQUFLLEVBQUM7QUFBeEMsT0FGWDtBQUdJLFNBQUcsRUFBRSxDQUFBWixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDJCQUFBQSxJQUFJLENBQUVhLEtBQU4sNERBQWFDLE1BQWIsS0FBdUJDLDhEQUhoQztBQUlJLFNBQUcsRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQXhCRDs7S0FBTWpCLE07O0FBa0ROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R2LXNob3dzL1tpZF0uZmViNTc3YTZmNTM3NmQ1ZWZlODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcblxyXG5pbXBvcnQge2dldEFsbERhdGFJZHMsZ2V0QXZlbmdlckRhdGF9IGZyb20gJy4uLy4uL2xpYi9hdmVuZ2VyLmpzJ1xyXG5pbXBvcnQge0ltYWdlUGxhY2Vob2xkZXIsYmFzZXVybH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50LmpzJ1xyXG5pbXBvcnQgU3RhciBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3N0YXIucG5nJ1xyXG5pbXBvcnQgQmFjayBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2JhY2sucG5nJ1xyXG5cclxuY29uc3QgU2Vjb25kID0gKHByb3BzKT0+IHtcclxuICBjb25zdCB7c2hvd30gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6MTB9fT5cclxuICAgICAgPExpbmsgaHJlZj1cIi90di1zaG93cy9hdmVuZ2Vyc1wiPlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17QmFja30gaGVpZ2h0PXszMH0gd2lkdGg9ezMwfS8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxoMT57c2hvdy5uYW1lfTwvaDE+XHJcbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHNob3cuc3VtbWFyeX19PjwvZGl2PlxyXG4gICAgICA8cD50eXBlOiB7c2hvdy50eXBlfSA8L3A+XHJcbiAgICAgIHtzaG93Py5yYXRpbmc/LmF2ZXJhZ2UgJiYgIDxkaXY+XHJcbiAgICAgICAgIDxJbWFnZSBzcmM9e1N0YXJ9IGhlaWdodD17MjB9IHdpZHRoPXsyMH0vPiB7c2hvdz8ucmF0aW5nPy5hdmVyYWdlfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIDxpbWdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmx1clwiXHJcbiAgICAgICAgICBzdHlsZT17e29iamVjdEZpdDonY292ZXInLGhlaWdodDonMTAwJScsIHdpZHRoOjMwMH19XHJcbiAgICAgICAgICBzcmM9e3Nob3c/LmltYWdlPy5tZWRpdW0gfHwgSW1hZ2VQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2V1cmx9c2VhcmNoL3Nob3dzP3E9YXZlbmdlcnNgKVxyXG4gIGNvbnN0IHNob3dzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGNvbnN0IHBhdGhzID0gZ2V0QWxsRGF0YUlkcyhzaG93cylcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2V1cmx9c2hvd3MvJHsrY29udGV4dC5wYXJhbXMuaWR9YClcclxuICBjb25zdCBzaG93ID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2hvd1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==