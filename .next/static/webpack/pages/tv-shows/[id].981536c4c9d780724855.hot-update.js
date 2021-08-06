self["webpackHotUpdate_N_E"]("pages/tv-shows/[id]",{

/***/ "./lib/avenger.js":
/*!************************!*\
  !*** ./lib/avenger.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllDataIds": function() { return /* binding */ getAllDataIds; },
/* harmony export */   "getAvengerData": function() { return /* binding */ getAvengerData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function getAllDataIds(data) {
  return data.map(function (a) {
    return {
      params: {
        id: a.show.id.toString()
      }
    };
  });
}
function getAvengerData(id, data) {
  return data.find(function (d) {
    return d.show.id.toString() === id;
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2F2ZW5nZXIuanMiXSwibmFtZXMiOlsiZ2V0QWxsRGF0YUlkcyIsImRhdGEiLCJtYXAiLCJhIiwicGFyYW1zIiwiaWQiLCJzaG93IiwidG9TdHJpbmciLCJnZXRBdmVuZ2VyRGF0YSIsImZpbmQiLCJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDTyxTQUFTQSxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFBQyxDQUFDLEVBQUk7QUFDbkIsV0FBTztBQUNMQyxZQUFNLEVBQUU7QUFDTkMsVUFBRSxFQUFFRixDQUFDLENBQUNHLElBQUYsQ0FBT0QsRUFBUCxDQUFVRSxRQUFWO0FBREU7QUFESCxLQUFQO0FBS0QsR0FOTSxDQUFQO0FBT0Q7QUFFTyxTQUFVQyxjQUFWLENBQXlCSCxFQUF6QixFQUE2QkosSUFBN0IsRUFBbUM7QUFDekMsU0FBT0EsSUFBSSxDQUFDUSxJQUFMLENBQVUsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0osSUFBRixDQUFPRCxFQUFQLENBQVVFLFFBQVYsT0FBeUJGLEVBQTdCO0FBQUEsR0FBWCxDQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHYtc2hvd3MvW2lkXS45ODE1MzZjNGM5ZDc4MDcyNDg1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxEYXRhSWRzKGRhdGEpIHtcclxuICByZXR1cm4gZGF0YS5tYXAoYSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZDogYS5zaG93LmlkLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gIGdldEF2ZW5nZXJEYXRhKGlkLCBkYXRhKSB7XHJcbiAgcmV0dXJuIGRhdGEuZmluZChkID0+IGQuc2hvdy5pZC50b1N0cmluZygpID09PSBpZClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9