self["webpackHotUpdate_N_E"]("pages/tv-shows/[search]",{

/***/ "./pages/tv-shows/[search].js":
/*!************************************!*\
  !*** ./pages/tv-shows/[search].js ***!
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
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\[search].js",
    _this = undefined;





var Avengers = function Avengers(props) {
  var shows = props.shows;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Search..",
        name: "search",
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_3___default().input)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
        children: "search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: shows.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "title",
          content: s.show.name
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),
        children: shows.map(function (s, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_card__WEBPACK_IMPORTED_MODULE_2__.default, {
            data: s.show
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvW3NlYXJjaF0uanMiXSwibmFtZXMiOlsiQXZlbmdlcnMiLCJwcm9wcyIsInNob3dzIiwic3R5bGUiLCJkaXNwbGF5IiwiaW5wdXQiLCJtYXAiLCJzIiwiaSIsInNob3ciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUNuQkMsS0FEbUIsR0FDVkQsS0FEVSxDQUNuQkMsS0FEbUI7QUFFMUIsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDBFQUFoQjtBQUFBLDRCQUNBO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBQztBQUFULE9BQVo7QUFBQSw4QkFDSztBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsVUFBL0I7QUFBMEMsWUFBSSxFQUFDLFFBQS9DO0FBQXdELGlCQUFTLEVBQUVELHNFQUFXRTtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREwsZUFFSyw4REFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFNQSw4REFBQyxrREFBRDtBQUFBLGdCQUVJSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBUztBQUNmLDRCQUFPO0FBQWMsY0FBSSxFQUFDLE9BQW5CO0FBQTJCLGlCQUFPLEVBQUVELENBQUMsQ0FBQ0UsSUFBRixDQUFPQztBQUEzQyxXQUFXRixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSCxPQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5BLGVBYUE7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVMLHFFQUFoQjtBQUFBLGtCQUVNRCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNsQiw4QkFDRSw4REFBQyxvREFBRDtBQUFjLGdCQUFJLEVBQUVELENBQUMsQ0FBQ0U7QUFBdEIsYUFBV0QsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBR0QsU0FKRDtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEyQkQsQ0E3QkQ7O0tBQU1SLFE7O0FBbUROLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R2LXNob3dzL1tzZWFyY2hdLjY5NGUwYTI5YmEyNTQwZDI0ZmNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnQvY2FyZCdcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL2Nzcy9hdmVuZ2VyLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQge2Jhc2V1cmx9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudC5qcydcclxuXHJcbmNvbnN0IEF2ZW5nZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3Nob3dzfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4J319PlxyXG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi5cIiBuYW1lPVwic2VhcmNoXCIgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH0vPlxyXG4gICAgICAgICAgIDxMaW5rPnNlYXJjaDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzaG93cy5tYXAoKHMsaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8bWV0YSBrZXk9e2l9IG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e3Muc2hvdy5uYW1lfT48L21ldGE+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dzLm1hcCgocywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aX0gZGF0YT17cy5zaG93fS8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIHJldHVybiB7IHBhdGhzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNlYXJjaDogJ2F2ZW5nZXJzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXSwgZmFsbGJhY2s6IHRydWUgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZXVybH1zZWFyY2gvc2hvd3M/cT1hdmVuZ2Vyc2ApXHJcbiAgY29uc3Qgc2hvd3MgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaG93c1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdmVuZ2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==