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
/* harmony import */ var C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/card */ "./pages/component/card.js");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/constant.js */ "./lib/constant.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\[search].js",
    _this = undefined,
    _s = $RefreshSig$();








var Avengers = function Avengers(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.shows),
      shows = _useState[0],
      setShows = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      search = _useState2[0],
      setSearch = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    getShows();
  }, [search]);

  var getShows = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res, shows;
      return C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_lib_constant_js__WEBPACK_IMPORTED_MODULE_7__.baseurl, "search/shows?q=").concat(search));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              shows = _context.sent;
              setShows(shows);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getShows() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Search..",
        name: "search",
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return setSearch(target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "/tv-shows/".concat(search),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          children: "search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: shows.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "title",
          content: s.show.name
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),
        children: shows.map(function (s, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_card__WEBPACK_IMPORTED_MODULE_6__.default, {
            data: s.show
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }, _this);
};

_s(Avengers, "IT/AFKUZn0C6NKQfdP0ERXeNqqs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvW3NlYXJjaF0uanMiXSwibmFtZXMiOlsiQXZlbmdlcnMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd3MiLCJzZXRTaG93cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZUVmZmVjdCIsImdldFNob3dzIiwiZmV0Y2giLCJiYXNldXJsIiwicmVzIiwianNvbiIsInN0eWxlIiwiZGlzcGxheSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwicyIsImkiLCJzaG93IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDQUMsK0NBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFQLENBRFI7QUFBQSxNQUNuQkEsS0FEbUI7QUFBQSxNQUNaQyxRQURZOztBQUFBLG1CQUVFRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRW5CRyxNQUZtQjtBQUFBLE1BRVhDLFNBRlc7O0FBSTFCQyxrREFBUyxDQUFDLFlBQU07QUFDWkMsWUFBUTtBQUNYLEdBRlEsRUFFUCxDQUFDSCxNQUFELENBRk8sQ0FBVDs7QUFJQSxNQUFNRyxRQUFRO0FBQUEsMldBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR0MsS0FBSyxXQUFJQyxxREFBSiw0QkFBNkJMLE1BQTdCLEVBRFI7O0FBQUE7QUFDVE0saUJBRFM7QUFBQTtBQUFBLHFCQUVLQSxHQUFHLENBQUNDLElBQUosRUFGTDs7QUFBQTtBQUVUVCxtQkFGUztBQUdmQyxzQkFBUSxDQUFDRCxLQUFELENBQVI7O0FBSGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkssUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQU1BLHNCQUNJO0FBQUssYUFBUyxFQUFFSywwRUFBaEI7QUFBQSw0QkFDQTtBQUFLLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUM7QUFBVCxPQUFaO0FBQUEsOEJBQ0s7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBVyxFQUFDLFVBQS9CO0FBQTBDLFlBQUksRUFBQyxRQUEvQztBQUF3RCxpQkFBUyxFQUFFRCxzRUFBbkU7QUFBZ0YsZ0JBQVEsRUFBRTtBQUFBLGNBQUVFLE1BQUYsU0FBRUEsTUFBRjtBQUFBLGlCQUFjVCxTQUFTLENBQUNTLE1BQU0sQ0FBQ0MsS0FBUixDQUF2QjtBQUFBO0FBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETCxlQUVLLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxzQkFBZVgsTUFBZixDQUFWO0FBQUEsK0JBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFRQSw4REFBQyxrREFBRDtBQUFBLGdCQUVJRixLQUFLLENBQUNjLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUdDLENBQUgsRUFBUztBQUNmLDRCQUFPO0FBQWMsY0FBSSxFQUFDLE9BQW5CO0FBQTJCLGlCQUFPLEVBQUVELENBQUMsQ0FBQ0UsSUFBRixDQUFPQztBQUEzQyxXQUFXRixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDSCxPQUZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJBLGVBZUE7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVOLHFFQUFoQjtBQUFBLGtCQUVNVixLQUFLLENBQUNjLEdBQU4sQ0FBVSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNsQiw4QkFDRSw4REFBQyxvREFBRDtBQUFjLGdCQUFJLEVBQUVELENBQUMsQ0FBQ0U7QUFBdEIsYUFBV0QsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBR0QsU0FKRDtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE2QkQsQ0EzQ0Q7O0dBQU1uQixROztLQUFBQSxROztBQWlFTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di1zaG93cy9bc2VhcmNoXS5jM2ZkMjc1NWE0NWE3OTVkNmMzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudC9jYXJkJ1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vY3NzL2F2ZW5nZXIubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCB7YmFzZXVybH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50LmpzJ1xyXG5cclxuY29uc3QgQXZlbmdlcnMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2hvd3MsIHNldFNob3dzXSA9IHVzZVN0YXRlKHByb3BzLnNob3dzKVxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZ2V0U2hvd3MoKVxyXG4gIH0sW3NlYXJjaF0pXHJcblxyXG4gIGNvbnN0IGdldFNob3dzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZXVybH1zZWFyY2gvc2hvd3M/cT0ke3NlYXJjaH1gKVxyXG4gICAgY29uc3Qgc2hvd3MgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBzZXRTaG93cyhzaG93cylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCd9fT5cclxuICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uXCIgbmFtZT1cInNlYXJjaFwiIGNsYXNzTmFtZT17c3R5bGUuaW5wdXR9IG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHNldFNlYXJjaCh0YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgPExpbmsgaHJlZj17YC90di1zaG93cy8ke3NlYXJjaH1gfT5cclxuICAgICAgICAgICAgICA8YnV0dG9uPnNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzaG93cy5tYXAoKHMsaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8bWV0YSBrZXk9e2l9IG5hbWU9XCJ0aXRsZVwiIGNvbnRlbnQ9e3Muc2hvdy5uYW1lfT48L21ldGE+XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5ncmlkfT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dzLm1hcCgocywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17aX0gZGF0YT17cy5zaG93fS8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIHJldHVybiB7IHBhdGhzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHNlYXJjaDogJ2F2ZW5nZXJzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXSwgZmFsbGJhY2s6IHRydWUgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZXVybH1zZWFyY2gvc2hvd3M/cT1hdmVuZ2Vyc2ApXHJcbiAgY29uc3Qgc2hvd3MgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaG93c1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdmVuZ2VycztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==