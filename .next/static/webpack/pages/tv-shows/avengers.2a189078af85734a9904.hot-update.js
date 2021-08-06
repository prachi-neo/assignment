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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50L2NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiZGF0YSIsInN0eWxlIiwiaW1hZ2UiLCJtZWRpdW0iLCJJbWFnZVBsYWNlaG9sZGVyIiwibmFtZSIsInRvVXBwZXJDYXNlIiwibGFuZ3VhZ2UiLCJnZW5yZXMiLCJqb2luIiwicmF0aW5nIiwiYXZlcmFnZSIsIlN0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQzVCQyxJQUQ0QixHQUNwQkQsS0FEb0IsQ0FDNUJDLElBRDRCO0FBR25DLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw2RUFBaEI7QUFBQSw0QkFDSTtBQUNJLGlCQUFXLEVBQUMsTUFEaEI7QUFFSSxlQUFTLEVBQUVBLHNFQUZmO0FBR0ksU0FBRyxFQUFFLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMkJBQUFBLElBQUksQ0FBRUUsS0FBTiw0REFBYUMsTUFBYixLQUF1QkMsOERBSGhDO0FBSUksU0FBRyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT007QUFBSyxlQUFTLEVBQUVILHdFQUFoQjtBQUFBLDhCQUNBLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxrQkFBVjtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBSSxxQkFBUyxFQUFFQSx3RUFBZjtBQUFBLHNCQUErQkQsSUFBSSxDQUFDSyxJQUFMLENBQVVDLFdBQVY7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFNRTtBQUFLLGlCQUFTLEVBQUVMLHdFQUFoQjtBQUFBLGtCQUFnQ0QsSUFBSSxDQUFDTztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFLLGlCQUFTLEVBQUVOLHdFQUFoQjtBQUFBLGtCQUFnQ0QsSUFBSSxDQUFDUSxNQUFMLENBQVlDLElBQVosQ0FBaUIsR0FBakI7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLEVBUUVULElBQUksQ0FBQ1UsTUFBTCxDQUFZQyxPQUFaLGlCQUF3QjtBQUFLLGlCQUFTLEVBQUVWLHdFQUFoQjtBQUFBLGdDQUN0Qiw4REFBQyxtREFBRDtBQUFPLGFBQUcsRUFBRVcsNERBQVo7QUFBa0IsZ0JBQU0sRUFBRSxFQUExQjtBQUE4QixlQUFLLEVBQUU7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEc0IsT0FDc0JaLElBQUksQ0FBQ1UsTUFBTCxDQUFZQyxPQURsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7S0F6QnVCYixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R2LXNob3dzL2F2ZW5nZXJzLjJhMTg5MDc4YWY4NTczNGE5OTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vY3NzL2F2ZW5nZXIubW9kdWxlLmNzcydcclxuaW1wb3J0IFN0YXIgZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9zdGFyLnBuZydcclxuaW1wb3J0IHtJbWFnZVBsYWNlaG9sZGVyfSBmcm9tICcuLi8uLi9saWIvY29uc3RhbnQuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkIChwcm9wcykge1xyXG4gIGNvbnN0IHtkYXRhfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1nQ29udGFpbmVyfT5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYmx1clwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW1hZ2V9XHJcbiAgICAgICAgICAgIHNyYz17ZGF0YT8uaW1hZ2U/Lm1lZGl1bSB8fCBJbWFnZVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5vdmVybGF5fT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHYtc2hvd3MvW2lkXWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZS5hdmdUZXh0fT57ZGF0YS5uYW1lLnRvVXBwZXJDYXNlKCl9PC9oMz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViVGV4dH0+e2RhdGEubGFuZ3VhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zdWJUZXh0fT57ZGF0YS5nZW5yZXMuam9pbignLCcpfTwvZGl2PlxyXG4gICAgICAgICAgIHtkYXRhLnJhdGluZy5hdmVyYWdlICYmICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc3ViVGV4dH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17U3Rhcn0gaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfS8+IHtkYXRhLnJhdGluZy5hdmVyYWdlfVxyXG4gICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=