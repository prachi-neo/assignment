self["webpackHotUpdate_N_E"]("pages/tv-shows/avengers",{

/***/ "./pages/tv-shows/avengers.js":
/*!************************************!*\
  !*** ./pages/tv-shows/avengers.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/card */ "./pages/component/card.js");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_avenger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/avenger.js */ "./lib/avenger.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\avengers.js",
    _this = undefined;






var Avengers = function Avengers(props) {
  var shows = props.shows;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: shows.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "title",
          content: s.show.name
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),
        children: shows.map(function (s, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_card__WEBPACK_IMPORTED_MODULE_2__.default, {
            data: s.show
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }, _this);
};

_c = Avengers;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Avengers);

var _c;

$RefreshReg$(_c, "Avengers");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvYXZlbmdlcnMuanMiXSwibmFtZXMiOlsiQXZlbmdlcnMiLCJwcm9wcyIsInNob3dzIiwic3R5bGUiLCJtYXAiLCJzIiwiaSIsInNob3ciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNuQkMsS0FEbUIsR0FDVkQsS0FEVSxDQUNuQkMsS0FEbUI7QUFFMUIsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDBFQUFoQjtBQUFBLDRCQUNBLDhEQUFDLGtEQUFEO0FBQUEsZ0JBRUlELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFTO0FBQ2YsNEJBQU87QUFBYyxjQUFJLEVBQUMsT0FBbkI7QUFBMkIsaUJBQU8sRUFBRUQsQ0FBQyxDQUFDRSxJQUFGLENBQU9DO0FBQTNDLFdBQVdGLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILE9BRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFRQTtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUgscUVBQWhCO0FBQUEsa0JBRUVELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2xCLDhCQUNFLDhEQUFDLG9EQUFEO0FBQWMsZ0JBQUksRUFBRUQsQ0FBQyxDQUFDRTtBQUF0QixhQUFXRCxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFHRCxTQUpEO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCRCxDQXhCRDs7S0FBTU4sUTs7QUFvQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHYtc2hvd3MvYXZlbmdlcnMuNWUwZjlkYTU3MmJlNGU1NjEzZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudC9jYXJkJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vY3NzL2F2ZW5nZXIubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCB7Z2V0UG9zdERhdGF9IGZyb20gJy4uLy4uL2xpYi9hdmVuZ2VyLmpzJ1xyXG5pbXBvcnQge2Jhc2V1cmx9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudC5qcydcclxuXHJcbmNvbnN0IEF2ZW5nZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3Nob3dzfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNob3dzLm1hcCgocyxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxtZXRhIGtleT17aX0gbmFtZT1cInRpdGxlXCIgY29udGVudD17cy5zaG93Lm5hbWV9PjwvbWV0YT5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzaG93cy5tYXAoKHMsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtpfSBkYXRhPXtzLnNob3d9Lz5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2V1cmx9c2VhcmNoL3Nob3dzP3E9YXZlbmdlcnNgKVxyXG4gIGNvbnN0IHNob3dzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2hvd3NcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXZlbmdlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=