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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/card */ "./pages/component/card.js");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/avenger.module.css */ "./pages/css/avenger.module.css");
/* harmony import */ var _css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_constant_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/constant.js */ "./lib/constant.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admin\\Documents\\prachi-project\\nextjs-demo\\demoapp\\nextjs-assignment\\pages\\tv-shows\\[search].js",
    _this = undefined,
    _s = $RefreshSig$();









var Avengers = function Avengers(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(props.shows),
      shows = _useState[0],
      setShows = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('avengers'),
      search = _useState2[0],
      setSearch = _useState2[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var pid = router.query.pid;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    setShows(shows);
  }, [props.shows]);

  var getShows = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var res, shows;
      return C_Users_Admin_Documents_prachi_project_nextjs_demo_demoapp_nextjs_assignment_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_lib_constant_js__WEBPACK_IMPORTED_MODULE_8__.baseurl, "search/shows?q=").concat(search));

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
    className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        placeholder: "Search..",
        name: "search",
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default().input),
        onChange: function onChange(_ref2) {
          var target = _ref2.target;
          return setSearch(target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
        href: "/tv-shows/".concat(search),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: function onClick() {
            return getShows();
          },
          children: "search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: shows.map(function (s, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "title",
          content: s.show.name
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 22
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_css_avenger_module_css__WEBPACK_IMPORTED_MODULE_9___default().grid),
        children: shows.map(function (s, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_card__WEBPACK_IMPORTED_MODULE_7__.default, {
            data: s.show
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, _this);
};

_s(Avengers, "alY+JXDoL44nSpdOsIuPtGxcb7Q=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHYtc2hvd3MvW3NlYXJjaF0uanMiXSwibmFtZXMiOlsiQXZlbmdlcnMiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd3MiLCJzZXRTaG93cyIsInNlYXJjaCIsInNldFNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInBpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiZ2V0U2hvd3MiLCJmZXRjaCIsImJhc2V1cmwiLCJyZXMiLCJqc29uIiwic3R5bGUiLCJkaXNwbGF5IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJzIiwiaSIsInNob3ciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDQUMsK0NBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFQLENBRFI7QUFBQSxNQUNuQkEsS0FEbUI7QUFBQSxNQUNaQyxRQURZOztBQUFBLG1CQUVFRiwrQ0FBUSxDQUFDLFVBQUQsQ0FGVjtBQUFBLE1BRW5CRyxNQUZtQjtBQUFBLE1BRVhDLFNBRlc7O0FBRzFCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFIMEIsTUFJakJDLEdBSmlCLEdBSVRGLE1BQU0sQ0FBQ0csS0FKRSxDQUlqQkQsR0FKaUI7QUFNMUJFLGtEQUFTLENBQUMsWUFBTTtBQUNkUCxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixDQUFDRixLQUFLLENBQUNFLEtBQVAsQ0FGTSxDQUFUOztBQUlBLE1BQU1TLFFBQVE7QUFBQSwyV0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHQyxLQUFLLFdBQUlDLHFEQUFKLDRCQUE2QlQsTUFBN0IsRUFEUjs7QUFBQTtBQUNUVSxpQkFEUztBQUFBO0FBQUEscUJBRUtBLEdBQUcsQ0FBQ0MsSUFBSixFQUZMOztBQUFBO0FBRVRiLG1CQUZTO0FBR2ZDLHNCQUFRLENBQUNELEtBQUQsQ0FBUjs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVLLDBFQUFoQjtBQUFBLDRCQUNBO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBQztBQUFULE9BQVo7QUFBQSw4QkFDSztBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsVUFBL0I7QUFBMEMsWUFBSSxFQUFDLFFBQS9DO0FBQXdELGlCQUFTLEVBQUVELHNFQUFuRTtBQUFnRixnQkFBUSxFQUFFO0FBQUEsY0FBRUUsTUFBRixTQUFFQSxNQUFGO0FBQUEsaUJBQWNiLFNBQVMsQ0FBQ2EsTUFBTSxDQUFDQyxLQUFSLENBQXZCO0FBQUE7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURMLGVBRUssOERBQUMsa0RBQUQ7QUFBTSxZQUFJLHNCQUFlZixNQUFmLENBQVY7QUFBQSwrQkFDRztBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU8sUUFBUSxFQUFkO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFRQSw4REFBQyxrREFBRDtBQUFBLGdCQUVJVCxLQUFLLENBQUNrQixHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFHQyxDQUFILEVBQVM7QUFDZiw0QkFBTztBQUFjLGNBQUksRUFBQyxPQUFuQjtBQUEyQixpQkFBTyxFQUFFRCxDQUFDLENBQUNFLElBQUYsQ0FBT0M7QUFBM0MsV0FBV0YsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0gsT0FGRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSQSxlQWVBO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFTixxRUFBaEI7QUFBQSxrQkFFTWQsS0FBSyxDQUFDa0IsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2xCLDhCQUNFLDhEQUFDLG9EQUFEO0FBQWMsZ0JBQUksRUFBRUQsQ0FBQyxDQUFDRTtBQUF0QixhQUFXRCxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFHRCxTQUpEO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTZCRCxDQTdDRDs7R0FBTXZCLFE7VUFHV1Esa0Q7OztLQUhYUixROztBQW1FTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90di1zaG93cy9bc2VhcmNoXS44ZDM2OGJmZTk1ZTU1OTg4MjFhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50L2NhcmQnXHJcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9jc3MvYXZlbmdlci5tb2R1bGUuY3NzJ1xyXG5cclxuaW1wb3J0IHtiYXNldXJsfSBmcm9tICcuLi8uLi9saWIvY29uc3RhbnQuanMnXHJcblxyXG5jb25zdCBBdmVuZ2VycyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93cywgc2V0U2hvd3NdID0gdXNlU3RhdGUocHJvcHMuc2hvd3MpXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCdhdmVuZ2VycycpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2hvd3Moc2hvd3MpXHJcbiAgfSwgW3Byb3BzLnNob3dzXSlcclxuXHJcbiAgY29uc3QgZ2V0U2hvd3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNldXJsfXNlYXJjaC9zaG93cz9xPSR7c2VhcmNofWApXHJcbiAgICBjb25zdCBzaG93cyA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHNldFNob3dzKHNob3dzKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4J319PlxyXG4gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi5cIiBuYW1lPVwic2VhcmNoXCIgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH0gb25DaGFuZ2U9eyh7dGFyZ2V0fSkgPT4gc2V0U2VhcmNoKHRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICA8TGluayBocmVmPXtgL3R2LXNob3dzLyR7c2VhcmNofWB9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0U2hvd3MoKX0+c2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNob3dzLm1hcCgocyxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxtZXRhIGtleT17aX0gbmFtZT1cInRpdGxlXCIgY29udGVudD17cy5zaG93Lm5hbWV9PjwvbWV0YT5cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyaWR9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd3MubWFwKChzLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXtpfSBkYXRhPXtzLnNob3d9Lz5cclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgcmV0dXJuIHsgcGF0aHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgc2VhcmNoOiAnYXZlbmdlcnMnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdLCBmYWxsYmFjazogdHJ1ZSB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNldXJsfXNlYXJjaC9zaG93cz9xPWF2ZW5nZXJzYClcclxuICBjb25zdCBzaG93cyA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNob3dzXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEF2ZW5nZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9