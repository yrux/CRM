"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Customer_Invoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customer/Invoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customer/Invoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/payment */ "./resources/js/services/auth/payment.js");
/* harmony import */ var _services_auth_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/project */ "./resources/js/services/auth/project.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      project: {},
      payments: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var pid, payments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pid = _this.$route.params.id;
              _context.next = 3;
              return _services_auth_payment__WEBPACK_IMPORTED_MODULE_1__["default"].getlist(_this.user.lead.id, "?project_id=" + pid).then(function (e) {
                return e.data;
              });

            case 3:
              payments = _context.sent;
              _this.payments = payments;
              _context.next = 7;
              return _services_auth_project__WEBPACK_IMPORTED_MODULE_2__["default"].get(pid);

            case 7:
              _this.project = _context.sent;

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    },
    total_amount: function total_amount() {
      var total = 0,
          paid = 0,
          balance = 0;

      for (var i = 0; i < this.payments.length; i++) {
        total += this.payments[i].amount;

        if (this.payments[i].status == 1) {
          paid += this.payments[i].amount;
        } else {
          balance += this.payments[i].amount;
        }
      }

      return {
        total: total,
        balance: balance,
        paid: paid
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/services/auth/payment.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth/payment.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js"); //leads/{lead}/payments


var paymentservice = /*#__PURE__*/function () {
  function paymentservice() {
    _classCallCheck(this, paymentservice);
  }

  _createClass(paymentservice, [{
    key: "getlist",
    value: function getlist(lead, params) {
      return axios.get("/api/leads/".concat(lead, "/payments").concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var lead = _ref.lead,
          id = _ref.id;
      return axios["delete"]("/api/leads/".concat(lead, "/payments/").concat(id));
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(lead, formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("/api/leads/".concat(lead, "/payments"), formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 2:
                res = _context.sent;
                return _context.abrupt("return", res);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(lead, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/leads/".concat(lead, "/payments/").concat(id));

              case 2:
                res = _context2.sent;
                return _context2.abrupt("return", res.data.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function get(_x3, _x4) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(formData, id, lead) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData.append('_method', 'put');
                _context3.next = 3;
                return axios.post("/api/leads/".concat(lead, "/payments/").concat(id), formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 3:
                res = _context3.sent;
                return _context3.abrupt("return", res);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function update(_x5, _x6, _x7) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "checkEmail",
    value: function () {
      var _checkEmail = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(id, formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post('/api/payments/' + id, formData).then(function (e) {
                  return {
                    status: 1,
                    data: e.data
                  };
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.message
                  };
                });

              case 2:
                res = _context4.sent;
                return _context4.abrupt("return", res);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function checkEmail(_x8, _x9) {
        return _checkEmail.apply(this, arguments);
      }

      return checkEmail;
    }()
  }, {
    key: "getBrand",
    value: function () {
      var _getBrand = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post('/api/payments-getbrand/' + id).then(function (e) {
                  return e.data;
                });

              case 2:
                res = _context5.sent;
                return _context5.abrupt("return", res);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getBrand(_x10) {
        return _getBrand.apply(this, arguments);
      }

      return getBrand;
    }()
  }]);

  return paymentservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new paymentservice());

/***/ }),

/***/ "./resources/js/services/auth/project.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth/project.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var projectservice = /*#__PURE__*/function () {
  function projectservice() {
    _classCallCheck(this, projectservice);
  }

  _createClass(projectservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/project".concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "validateTask",
    value: function validateTask(formData) {
      return axios.post('/api/task-validate', formData).then(function (response) {
        return {
          status: 1,
          data: 'validated'
        };
      })["catch"](function (error) {
        return {
          status: 0,
          data: error.response.data.errors
        };
      });
    }
  }, {
    key: "createTask",
    value: function createTask(project_id_int, formData) {
      return axios.post('/api/project/' + project_id_int + '/task', formData).then(function (response) {
        return {
          status: 1,
          data: response.data
        };
      })["catch"](function (error) {
        return {
          status: 0,
          data: error.response.data.errors
        };
      });
    }
  }, {
    key: "create",
    value: function create(formData) {
      return axios.post('/api/project', formData).then(function (response) {
        return {
          status: 1,
          data: response.data.data
        };
      })["catch"](function (error) {
        return {
          status: 0,
          data: error.response.data.errors
        };
      });
    }
  }, {
    key: "get",
    value: function get(projectId) {
      return axios.get("/api/project/".concat(projectId)).then(function (response) {
        return response.data.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }]);

  return projectservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new projectservice());

/***/ }),

/***/ "./resources/js/views/Customer/Invoice.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Customer/Invoice.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Invoice_vue_vue_type_template_id_536e18fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=536e18fb& */ "./resources/js/views/Customer/Invoice.vue?vue&type=template&id=536e18fb&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/js/views/Customer/Invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoice_vue_vue_type_template_id_536e18fb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Invoice_vue_vue_type_template_id_536e18fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Customer/Invoice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Customer/Invoice.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Customer/Invoice.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customer/Invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Customer/Invoice.vue?vue&type=template&id=536e18fb&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Customer/Invoice.vue?vue&type=template&id=536e18fb& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_536e18fb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_536e18fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_536e18fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=template&id=536e18fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customer/Invoice.vue?vue&type=template&id=536e18fb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customer/Invoice.vue?vue&type=template&id=536e18fb&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Customer/Invoice.vue?vue&type=template&id=536e18fb& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { elevation: "2" } },
    [
      _c("v-card-title", [
        _vm._v("Invoice #" + _vm._s(_vm.project.project_id)),
      ]),
      _vm._v(" "),
      _c("v-card-subtitle", [_vm._v("Invoice to " + _vm._s(_vm.user.email))]),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "pl-10 pr-10" },
        [
          _c("v-simple-table", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function () {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v("\n              Description\n            "),
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v("\n              Amount\n            "),
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v("\n              Generated@\n            "),
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-left" }, [
                          _vm._v("\n              Status\n            "),
                        ]),
                        _vm._v(" "),
                        _c("th"),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.payments, function (item) {
                          return _c("tr", { key: item.id }, [
                            _c("td", [_vm._v(_vm._s(item.description))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.amount))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.created_at_formatted)),
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(item.payment_status_text)),
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                item.status != 1
                                  ? _c(
                                      "v-btn",
                                      {
                                        staticClass: "white--text",
                                        attrs: {
                                          link: "",
                                          to: {
                                            name: "guest.payment",
                                            params: { id: parseInt(item.id) },
                                          },
                                          small: "",
                                          color: "blue",
                                        },
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { left: "", dark: "" } },
                                          [_vm._v(" mdi-cash ")]
                                        ),
                                        _vm._v(
                                          "\n              Pay Now\n              "
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ])
                        }),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "2" } }, [_vm._v(" ")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Balance")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.total_amount.balance)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(" ")]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "2" } }, [_vm._v(" ")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Paid")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.total_amount.paid)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(" ")]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", { attrs: { colspan: "2" } }, [_vm._v(" ")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("Total Amount")]),
                          _vm._v(" "),
                          _c("td", [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.total_amount.total)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(" ")]),
                        ]),
                      ],
                      2
                    ),
                  ]
                },
                proxy: true,
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-btn", { attrs: { color: "primary" } }, [
            _vm._v("\n      Download PDF\n    "),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);