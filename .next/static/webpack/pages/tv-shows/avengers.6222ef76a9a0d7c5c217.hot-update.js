self["webpackHotUpdate_N_E"]("pages/tv-shows/avengers",{

/***/ "./pages/component/card.js":
/*!*********************************!*\
  !*** ./pages/component/card.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_images_star_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/star.png */ "./public/images/star.png");
/* harmony import */ var _lib_constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/constant.js */ "./lib/constant.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\component\\card.js";





function Card(props) {
  var _data$image;

  var data = props.data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      placeholder: "blur",
      className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),
      src: (data === null || data === void 0 ? void 0 : (_data$image = data.image) === null || _data$image === void 0 ? void 0 : _data$image.medium) || _lib_constant_js__WEBPACK_IMPORTED_MODULE_4__.ImagePlaceholder,
      alt: "..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default().overlay),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        as: "/tv-shows/".concat(data.id),
        href: "/tv-shows/[id]",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default().avgText),
            children: data.name.toUpperCase()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),
        children: data.language
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),
        children: data.genres.join(',')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this), data.rating.average && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_5___default().subText),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: _public_images_star_png__WEBPACK_IMPORTED_MODULE_3__.default,
          height: 20,
          width: 20
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }, this), " ", data.rating.average]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Card;

var _c;

$RefreshReg$(_c, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50L2NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiZGF0YSIsInN0eWxlIiwiaW1hZ2UiLCJtZWRpdW0iLCJJbWFnZVBsYWNlaG9sZGVyIiwiaWQiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJsYW5ndWFnZSIsImdlbnJlcyIsImpvaW4iLCJyYXRpbmciLCJhdmVyYWdlIiwiU3RhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsTUFDNUJDLElBRDRCLEdBQ3BCRCxLQURvQixDQUM1QkMsSUFENEI7QUFHbkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDZFQUFoQjtBQUFBLDRCQUNJO0FBQ0ksaUJBQVcsRUFBQyxNQURoQjtBQUVJLGVBQVMsRUFBRUEsc0VBRmY7QUFHSSxTQUFHLEVBQUUsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiwyQkFBQUEsSUFBSSxDQUFFRSxLQUFOLDREQUFhQyxNQUFiLEtBQXVCQyw4REFIaEM7QUFJSSxTQUFHLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPTTtBQUFLLGVBQVMsRUFBRUgsd0VBQWhCO0FBQUEsOEJBQ0EsOERBQUMsa0RBQUQ7QUFBTSxVQUFFLHNCQUFlRCxJQUFJLENBQUNLLEVBQXBCLENBQVI7QUFBa0MsWUFBSSxrQkFBdEM7QUFBQSwrQkFDRTtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBRUosd0VBQWY7QUFBQSxzQkFBK0JELElBQUksQ0FBQ00sSUFBTCxDQUFVQyxXQUFWO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBTUU7QUFBSyxpQkFBUyxFQUFFTix3RUFBaEI7QUFBQSxrQkFBZ0NELElBQUksQ0FBQ1E7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBSyxpQkFBUyxFQUFFUCx3RUFBaEI7QUFBQSxrQkFBZ0NELElBQUksQ0FBQ1MsTUFBTCxDQUFZQyxJQUFaLENBQWlCLEdBQWpCO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixFQVFFVixJQUFJLENBQUNXLE1BQUwsQ0FBWUMsT0FBWixpQkFBd0I7QUFBSyxpQkFBUyxFQUFFWCx3RUFBaEI7QUFBQSxnQ0FDdEIsOERBQUMsbURBQUQ7QUFBTyxhQUFHLEVBQUVZLDREQUFaO0FBQWtCLGdCQUFNLEVBQUUsRUFBMUI7QUFBOEIsZUFBSyxFQUFFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRHNCLE9BQ3NCYixJQUFJLENBQUNXLE1BQUwsQ0FBWUMsT0FEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEO0tBekJ1QmQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di1zaG93cy9hdmVuZ2Vycy42MjIyZWY3NmE5YTBkN2M1YzIxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2Nzcy9hdmVuZ2VyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBTdGFyIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvc3Rhci5wbmcnXHJcbmltcG9ydCB7SW1hZ2VQbGFjZWhvbGRlcn0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCAocHJvcHMpIHtcclxuICBjb25zdCB7ZGF0YX0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZ0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmltYWdlfVxyXG4gICAgICAgICAgICBzcmM9e2RhdGE/LmltYWdlPy5tZWRpdW0gfHwgSW1hZ2VQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3ZlcmxheX0+XHJcbiAgICAgICAgICA8TGluayBhcz17YC90di1zaG93cy8ke2RhdGEuaWR9YH0gaHJlZj17YC90di1zaG93cy9baWRdYH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlLmF2Z1RleHR9PntkYXRhLm5hbWUudG9VcHBlckNhc2UoKX08L2gzPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdWJUZXh0fT57ZGF0YS5sYW5ndWFnZX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1YlRleHR9PntkYXRhLmdlbnJlcy5qb2luKCcsJyl9PC9kaXY+XHJcbiAgICAgICAgICAge2RhdGEucmF0aW5nLmF2ZXJhZ2UgJiYgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdWJUZXh0fT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtTdGFyfSBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz4ge2RhdGEucmF0aW5nLmF2ZXJhZ2V9XHJcbiAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==