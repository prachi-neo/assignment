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

            case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvW3NlYXJjaF0uanMiXSwibmFtZXMiOlsiQXZlbmdlcnMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd3MiLCJzZXRTaG93cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInVzZUVmZmVjdCIsImdldFNob3dzIiwiZmV0Y2giLCJiYXNldXJsIiwicmVzIiwianNvbiIsInN0eWxlIiwiZGlzcGxheSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwicyIsImkiLCJzaG93IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDQUMsK0NBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFQLENBRFI7QUFBQSxNQUNuQkEsS0FEbUI7QUFBQSxNQUNaQyxRQURZOztBQUFBLG1CQUVFRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRW5CRyxNQUZtQjtBQUFBLE1BRVhDLFNBRlc7O0FBSTFCQyxrREFBUyxDQUFDLFlBQU07QUFDWkMsWUFBUTtBQUNYLEdBRlEsRUFFUCxDQUFDSCxNQUFELENBRk8sQ0FBVDs7QUFJQSxNQUFNRyxRQUFRO0FBQUEsMldBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDR0MsS0FBSyxXQUFJQyxxREFBSiw0QkFBNkJMLE1BQTdCLEVBRFI7O0FBQUE7QUFDVE0saUJBRFM7QUFBQTtBQUFBLHFCQUVLQSxHQUFHLENBQUNDLElBQUosRUFGTDs7QUFBQTtBQUVUVCxtQkFGUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSSyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVLLDBFQUFoQjtBQUFBLDRCQUNBO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBQztBQUFULE9BQVo7QUFBQSw4QkFDSztBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsVUFBL0I7QUFBMEMsWUFBSSxFQUFDLFFBQS9DO0FBQXdELGlCQUFTLEVBQUVELHNFQUFuRTtBQUFnRixnQkFBUSxFQUFFO0FBQUEsY0FBRUUsTUFBRixTQUFFQSxNQUFGO0FBQUEsaUJBQWNULFNBQVMsQ0FBQ1MsTUFBTSxDQUFDQyxLQUFSLENBQXZCO0FBQUE7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURMLGVBRUssOERBQUMsa0RBQUQ7QUFBTSxZQUFJLHNCQUFlWCxNQUFmLENBQVY7QUFBQSwrQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQVFBLDhEQUFDLGtEQUFEO0FBQUEsZ0JBRUlGLEtBQUssQ0FBQ2MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBR0MsQ0FBSCxFQUFTO0FBQ2YsNEJBQU87QUFBYyxjQUFJLEVBQUMsT0FBbkI7QUFBMkIsaUJBQU8sRUFBRUQsQ0FBQyxDQUFDRSxJQUFGLENBQU9DO0FBQTNDLFdBQVdGLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNILE9BRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkEsZUFlQTtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRU4scUVBQWhCO0FBQUEsa0JBRU1WLEtBQUssQ0FBQ2MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2xCLDhCQUNFLDhEQUFDLG9EQUFEO0FBQWMsZ0JBQUksRUFBRUQsQ0FBQyxDQUFDRTtBQUF0QixhQUFXRCxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFHRCxTQUpEO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZCRCxDQTNDRDs7R0FBTW5CLFE7O0tBQUFBLFE7O0FBaUVOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3R2LXNob3dzL1tzZWFyY2hdLjc2MzM5ZmEyYjY3YjdiOGExZDBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50L2NhcmQnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9jc3MvYXZlbmdlci5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IHtiYXNldXJsfSBmcm9tICcuLi8uLi9saWIvY29uc3RhbnQuanMnXHJcblxyXG5jb25zdCBBdmVuZ2VycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93cywgc2V0U2hvd3NdID0gdXNlU3RhdGUocHJvcHMuc2hvd3MpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBnZXRTaG93cygpXHJcbiAgfSxbc2VhcmNoXSlcclxuXHJcbiAgY29uc3QgZ2V0U2hvd3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNldXJsfXNlYXJjaC9zaG93cz9xPSR7c2VhcmNofWApXHJcbiAgICBjb25zdCBzaG93cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnfX0+XHJcbiAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLlwiIG5hbWU9XCJzZWFyY2hcIiBjbGFzc05hbWU9e3N0eWxlLmlucHV0fSBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBzZXRTZWFyY2godGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHYtc2hvd3MvJHtzZWFyY2h9YH0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbj5zZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2hvd3MubWFwKChzLGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPG1ldGEga2V5PXtpfSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtzLnNob3cubmFtZX0+PC9tZXRhPlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZ3JpZH0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93cy5tYXAoKHMsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9IGRhdGE9e3Muc2hvd30vPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICByZXR1cm4geyBwYXRoczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBzZWFyY2g6ICdhdmVuZ2VycydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIF0sIGZhbGxiYWNrOiB0cnVlIH07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2V1cmx9c2VhcmNoL3Nob3dzP3E9YXZlbmdlcnNgKVxyXG4gIGNvbnN0IHNob3dzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2hvd3NcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXZlbmdlcnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=