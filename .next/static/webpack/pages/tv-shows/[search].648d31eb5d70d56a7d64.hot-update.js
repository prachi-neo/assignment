self["webpackHotUpdate_N_E"]("pages/tv-shows/[search]",{

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
        as: "/tv-shows/details/".concat(data.id),
        href: "/tv-shows/details/[id]",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50L2NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiZGF0YSIsInN0eWxlIiwiaW1hZ2UiLCJtZWRpdW0iLCJJbWFnZVBsYWNlaG9sZGVyIiwiaWQiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJsYW5ndWFnZSIsImdlbnJlcyIsImpvaW4iLCJyYXRpbmciLCJhdmVyYWdlIiwiU3RhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsTUFDNUJDLElBRDRCLEdBQ3BCRCxLQURvQixDQUM1QkMsSUFENEI7QUFHbkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDZFQUFoQjtBQUFBLDRCQUNJO0FBQ0ksaUJBQVcsRUFBQyxNQURoQjtBQUVJLGVBQVMsRUFBRUEsc0VBRmY7QUFHSSxTQUFHLEVBQUUsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiwyQkFBQUEsSUFBSSxDQUFFRSxLQUFOLDREQUFhQyxNQUFiLEtBQXVCQyw4REFIaEM7QUFJSSxTQUFHLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFPTTtBQUFLLGVBQVMsRUFBRUgsd0VBQWhCO0FBQUEsOEJBQ0EsOERBQUMsa0RBQUQ7QUFBTSxVQUFFLDhCQUF1QkQsSUFBSSxDQUFDSyxFQUE1QixDQUFSO0FBQTBDLFlBQUksMEJBQTlDO0FBQUEsK0JBQ0U7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUVKLHdFQUFmO0FBQUEsc0JBQStCRCxJQUFJLENBQUNNLElBQUwsQ0FBVUMsV0FBVjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQU1FO0FBQUssaUJBQVMsRUFBRU4sd0VBQWhCO0FBQUEsa0JBQWdDRCxJQUFJLENBQUNRO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQUssaUJBQVMsRUFBRVAsd0VBQWhCO0FBQUEsa0JBQWdDRCxJQUFJLENBQUNTLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixHQUFqQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsRUFRRVYsSUFBSSxDQUFDVyxNQUFMLENBQVlDLE9BQVosaUJBQXdCO0FBQUssaUJBQVMsRUFBRVgsd0VBQWhCO0FBQUEsZ0NBQ3RCLDhEQUFDLG1EQUFEO0FBQU8sYUFBRyxFQUFFWSw0REFBWjtBQUFrQixnQkFBTSxFQUFFLEVBQTFCO0FBQThCLGVBQUssRUFBRTtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURzQixPQUNzQmIsSUFBSSxDQUFDVyxNQUFMLENBQVlDLE9BRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDtLQXpCdUJkLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHYtc2hvd3MvW3NlYXJjaF0uNjQ4ZDMxZWI1ZDcwZDU2YTdkNjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9jc3MvYXZlbmdlci5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgU3RhciBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL3N0YXIucG5nJ1xyXG5pbXBvcnQge0ltYWdlUGxhY2Vob2xkZXJ9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQgKHByb3BzKSB7XHJcbiAgY29uc3Qge2RhdGF9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWdDb250YWluZXJ9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZX1cclxuICAgICAgICAgICAgc3JjPXtkYXRhPy5pbWFnZT8ubWVkaXVtIHx8IEltYWdlUGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm92ZXJsYXl9PlxyXG4gICAgICAgICAgPExpbmsgYXM9e2AvdHYtc2hvd3MvZGV0YWlscy8ke2RhdGEuaWR9YH0gaHJlZj17YC90di1zaG93cy9kZXRhaWxzL1tpZF1gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGUuYXZnVGV4dH0+e2RhdGEubmFtZS50b1VwcGVyQ2FzZSgpfTwvaDM+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1YlRleHR9PntkYXRhLmxhbmd1YWdlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViVGV4dH0+e2RhdGEuZ2VucmVzLmpvaW4oJywnKX08L2Rpdj5cclxuICAgICAgICAgICB7ZGF0YS5yYXRpbmcuYXZlcmFnZSAmJiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnN1YlRleHR9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1N0YXJ9IGhlaWdodD17MjB9IHdpZHRoPXsyMH0vPiB7ZGF0YS5yYXRpbmcuYXZlcmFnZX1cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9