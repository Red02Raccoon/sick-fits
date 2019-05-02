webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/client/index.js":
/*!*******************************!*\
  !*** ./store/client/index.js ***!
  \*******************************/
/*! exports provided: withData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withData", function() { return withData; });
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");



var endpointDev = _utils__WEBPACK_IMPORTED_MODULE_2__["config"].endpointDev,
    endpointProd = _utils__WEBPACK_IMPORTED_MODULE_2__["config"].endpointProd;

var createClient = function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
    uri:  true ? endpointDev : undefined,
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credencials: 'include'
        },
        headers: headers
      });
    }
  });
};

var withData = next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient);

/***/ })

})
//# sourceMappingURL=_app.js.851b76ad84a4ce16e9d5.hot-update.js.map