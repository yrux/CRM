"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Guest_Payment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Guest/Payment.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Guest/Payment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/payment */ "./resources/js/services/auth/payment.js");


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
 // let stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`),
// elements = stripe.elements(),
// card = undefined;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      stripe: {
        stripe: undefined,
        elements: undefined,
        card: undefined
      },
      payment_id: "",
      email: "",
      brand: {},
      loading: false,
      emailError: [],
      emailVerified: false,
      payment: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.payment_id = _this.$route.params.id;
              _context.next = 3;
              return _services_auth_payment__WEBPACK_IMPORTED_MODULE_1__["default"].getBrand(_this.payment_id);

            case 3:
              _this.brand = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    handleStripePayment: function handleStripePayment(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$_this2$stripe$, error, messageContainer;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _context2.next = 3;
                return _this2.stripe.stripe.confirmSetup({
                  elements: _this2.stripe.elements,
                  confirmParams: {
                    return_url: _this2.payment.success_url
                  }
                });

              case 3:
                _yield$_this2$stripe$ = _context2.sent;
                error = _yield$_this2$stripe$.error;

                if (error) {
                  messageContainer = document.querySelector('#error-message');
                  messageContainer.textContent = error.message;
                } else {// Your customer will be redirected to your `return_url`. For some payment
                  // methods like iDEAL, your customer will be redirected to an intermediate
                  // site first to authorize the payment, then redirected to the `return_url`.
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    verifyEmail: function verifyEmail() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData, res, options;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.emailError = [];
                _this3.loading = true;
                formData = new FormData();
                formData.append("email", _this3.email);
                _context3.next = 6;
                return _services_auth_payment__WEBPACK_IMPORTED_MODULE_1__["default"].checkEmail(_this3.payment_id, formData);

              case 6:
                res = _context3.sent;
                //company2@gmail.com
                _this3.loading = false;

                if (!res.status) {
                  _context3.next = 16;
                  break;
                }

                //means success
                _this3.emailVerified = true;
                _context3.next = 12;
                return _this3.$nextTick();

              case 12:
                _this3.payment = res.data;

                if (_this3.payment.type == "stripe") {
                  _this3.stripe.stripe = Stripe(_this3.payment.stripe_pk);
                  options = {
                    clientSecret: _this3.payment.client_secret,
                    // Fully customizable with appearance API.
                    appearance: {
                      /*...*/
                    }
                  };
                  _this3.stripe.elements = _this3.stripe.stripe.elements(options); // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 2
                  // this.stripe.card = this.stripe.stripe.elements(options);

                  _this3.stripe.card = _this3.stripe.elements.create("payment");

                  _this3.stripe.card.mount(_this3.$refs.stripecard);
                }

                _context3.next = 19;
                break;

              case 16:
                //means failed
                _this3.email = "";

                _this3.$store.commit("setNotification", "Invalid Email");

                _this3.emailError = ["Invalid Email"];

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
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

/***/ "./resources/js/views/Guest/Payment.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Guest/Payment.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Payment_vue_vue_type_template_id_60192aa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payment.vue?vue&type=template&id=60192aa0& */ "./resources/js/views/Guest/Payment.vue?vue&type=template&id=60192aa0&");
/* harmony import */ var _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment.vue?vue&type=script&lang=js& */ "./resources/js/views/Guest/Payment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payment_vue_vue_type_template_id_60192aa0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Payment_vue_vue_type_template_id_60192aa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Guest/Payment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Guest/Payment.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Guest/Payment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Guest/Payment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Guest/Payment.vue?vue&type=template&id=60192aa0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Guest/Payment.vue?vue&type=template&id=60192aa0& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_60192aa0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_60192aa0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_60192aa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Payment.vue?vue&type=template&id=60192aa0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Guest/Payment.vue?vue&type=template&id=60192aa0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Guest/Payment.vue?vue&type=template&id=60192aa0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Guest/Payment.vue?vue&type=template&id=60192aa0& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("v-img", {
                attrs: {
                  contain: "",
                  "lazy-src": _vm.brand.image_url,
                  src: _vm.brand.image_url,
                  "max-height": "200",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      !_vm.emailVerified
        ? _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      "error-messages": _vm.emailError,
                      label: "Email",
                      hint: "Provide your email address to verify",
                      required: "",
                    },
                    model: {
                      value: _vm.email,
                      callback: function ($$v) {
                        _vm.email = $$v
                      },
                      expression: "email",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "white--text",
                      attrs: {
                        loading: _vm.loading,
                        disabled: _vm.loading,
                        color: "blue-grey float-right",
                      },
                      on: { click: _vm.verifyEmail },
                    },
                    [_vm._v("\n        Verify\n      ")]
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _c(
            "v-row",
            [
              _c("h2", [_vm._v("Step 2")]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12" } }, [
                _c(
                  "form",
                  {
                    attrs: { id: "payment-form" },
                    on: { submit: _vm.handleStripePayment },
                  },
                  [
                    _c("div", {
                      ref: "stripecard",
                      attrs: { id: "payment-element" },
                    }),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          type: "submit",
                          color: "green",
                          "text-color": "white",
                          id: "submit",
                        },
                      },
                      [_vm._v("Submit")]
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "error-message" } }),
                  ],
                  1
                ),
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