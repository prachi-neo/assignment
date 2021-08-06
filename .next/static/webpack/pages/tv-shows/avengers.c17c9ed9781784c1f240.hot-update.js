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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/card */ "./pages/component/card.js");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_avenger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/avenger.js */ "./lib/avenger.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\avengers.js",
    _this = undefined;








var Avengers = function Avengers(props) {
  var shows = props.shows;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: shows.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "title",
          content: s.show.name
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_6___default().grid),
        children: shows.map(function (s, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_card__WEBPACK_IMPORTED_MODULE_4__.default, {
            data: s.show
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvYXZlbmdlcnMuanMiXSwibmFtZXMiOlsiQXZlbmdlcnMiLCJwcm9wcyIsInNob3dzIiwic3R5bGUiLCJtYXAiLCJzIiwiaSIsInNob3ciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ25CQyxLQURtQixHQUNWRCxLQURVLENBQ25CQyxLQURtQjtBQUUxQixzQkFDSTtBQUFLLGFBQVMsRUFBRUMsMEVBQWhCO0FBQUEsNEJBQ0EsOERBQUMsa0RBQUQ7QUFBQSxnQkFFSUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFILEVBQVM7QUFDZiw0QkFBTztBQUFjLGNBQUksRUFBQyxPQUFuQjtBQUEyQixpQkFBTyxFQUFFRCxDQUFDLENBQUNFLElBQUYsQ0FBT0M7QUFBM0MsV0FBV0YsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0gsT0FGRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQVFBO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFSCxxRUFBaEI7QUFBQSxrQkFFRUQsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDbEIsOEJBQ0UsOERBQUMsb0RBQUQ7QUFBYyxnQkFBSSxFQUFFRCxDQUFDLENBQUNFO0FBQXRCLGFBQVdELENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUdELFNBSkQ7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JELENBeEJEOztLQUFNTixROztBQW9DTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di1zaG93cy9hdmVuZ2Vycy5jMTdjOWVkOTc4MTc4NGMxZjI0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50L2NhcmQnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9jc3MvYXZlbmdlci5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IHtnZXRQb3N0RGF0YX0gZnJvbSAnLi4vLi4vbGliL2F2ZW5nZXIuanMnXHJcbmltcG9ydCB7YmFzZXVybH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50LmpzJ1xyXG5cclxuY29uc3QgQXZlbmdlcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7c2hvd3N9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2hvd3MubWFwKChzLGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPG1ldGEga2V5PXtpfSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtzLnNob3cubmFtZX0+PC9tZXRhPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZH0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNob3dzLm1hcCgocywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9IGRhdGE9e3Muc2hvd30vPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZXVybH1zZWFyY2gvc2hvd3M/cT1hdmVuZ2Vyc2ApXHJcbiAgY29uc3Qgc2hvd3MgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaG93c1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdmVuZ2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==