"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Notifications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/BriefSubmit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/BriefSubmit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: {
    notification: {
      type: Object,
      "default": {}
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: {
    notification: {
      type: Object,
      "default": {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskAssigned.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskAssigned.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: {
    notification: {
      type: Object,
      "default": {}
    }
  },
  computed: {
    project_id_int: function project_id_int() {
      var project_id = this.notification.data.project_id.split('-');
      return project_id[project_id.length - 1];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskComment.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskComment.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: {
    notification: {
      type: Object,
      "default": {}
    }
  },
  computed: {
    project_id_int: function project_id_int() {
      if (this.notification.data.project_id) {
        var project_id = this.notification.data.project_id.split('-');
        return parseInt(project_id[project_id.length - 1]);
      }

      return 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Notifications.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Notifications.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/notifications */ "./resources/js/services/auth/notifications.js");
/* harmony import */ var _components_notifications_PaymentPaidByCustomer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/notifications/PaymentPaidByCustomer.vue */ "./resources/js/components/notifications/PaymentPaidByCustomer.vue");
/* harmony import */ var _components_notifications_BriefSubmit_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/notifications/BriefSubmit.vue */ "./resources/js/components/notifications/BriefSubmit.vue");
/* harmony import */ var _components_notifications_taskAssigned_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/notifications/taskAssigned.vue */ "./resources/js/components/notifications/taskAssigned.vue");
/* harmony import */ var _components_notifications_taskComment_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/notifications/taskComment.vue */ "./resources/js/components/notifications/taskComment.vue");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      items: [{
        icon: "mdi-wifi",
        text: "Payment"
      }, {
        icon: "mdi-bluetooth",
        text: "Task"
      }, {
        icon: "mdi-chart-donut",
        text: "Client Message"
      }],
      model: [],
      page: 1,
      max_page: 0,
      notifications: []
    };
  },
  mounted: function mounted() {
    this.getList();
  },
  watch: {},
  methods: {
    getList: function getList() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this$notifications;

        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.page == 1) {
                  _this.notifications = [];
                }

                _context.next = 3;
                return _services_auth_notifications__WEBPACK_IMPORTED_MODULE_1__["default"].getlist('?page=' + _this.page);

              case 3:
                result = _context.sent;
                _this.max_page = result.last_page;

                (_this$notifications = _this.notifications).push.apply(_this$notifications, _toConsumableArray(result.data));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  components: {
    PaymentPaidByCustomer: _components_notifications_PaymentPaidByCustomer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    taskAssigned: _components_notifications_taskAssigned_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    taskComment: _components_notifications_taskComment_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BriefSubmit: _components_notifications_BriefSubmit_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  }
});

/***/ }),

/***/ "./resources/js/services/auth/notifications.js":
/*!*****************************************************!*\
  !*** ./resources/js/services/auth/notifications.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var notificationsservice = /*#__PURE__*/function () {
  function notificationsservice() {
    _classCallCheck(this, notificationsservice);
  }

  _createClass(notificationsservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/notifications".concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }]);

  return notificationsservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new notificationsservice());

/***/ }),

/***/ "./resources/js/components/notifications/BriefSubmit.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/notifications/BriefSubmit.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BriefSubmit_vue_vue_type_template_id_36b0a130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BriefSubmit.vue?vue&type=template&id=36b0a130& */ "./resources/js/components/notifications/BriefSubmit.vue?vue&type=template&id=36b0a130&");
/* harmony import */ var _BriefSubmit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BriefSubmit.vue?vue&type=script&lang=js& */ "./resources/js/components/notifications/BriefSubmit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BriefSubmit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BriefSubmit_vue_vue_type_template_id_36b0a130___WEBPACK_IMPORTED_MODULE_0__.render,
  _BriefSubmit_vue_vue_type_template_id_36b0a130___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notifications/BriefSubmit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notifications/PaymentPaidByCustomer.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/notifications/PaymentPaidByCustomer.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PaymentPaidByCustomer_vue_vue_type_template_id_79837ae5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5& */ "./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5&");
/* harmony import */ var _PaymentPaidByCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentPaidByCustomer.vue?vue&type=script&lang=js& */ "./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentPaidByCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentPaidByCustomer_vue_vue_type_template_id_79837ae5___WEBPACK_IMPORTED_MODULE_0__.render,
  _PaymentPaidByCustomer_vue_vue_type_template_id_79837ae5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notifications/PaymentPaidByCustomer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notifications/taskAssigned.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/notifications/taskAssigned.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskAssigned_vue_vue_type_template_id_47b815c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskAssigned.vue?vue&type=template&id=47b815c5& */ "./resources/js/components/notifications/taskAssigned.vue?vue&type=template&id=47b815c5&");
/* harmony import */ var _taskAssigned_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskAssigned.vue?vue&type=script&lang=js& */ "./resources/js/components/notifications/taskAssigned.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _taskAssigned_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskAssigned_vue_vue_type_template_id_47b815c5___WEBPACK_IMPORTED_MODULE_0__.render,
  _taskAssigned_vue_vue_type_template_id_47b815c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notifications/taskAssigned.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notifications/taskComment.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/notifications/taskComment.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskComment_vue_vue_type_template_id_54863590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskComment.vue?vue&type=template&id=54863590& */ "./resources/js/components/notifications/taskComment.vue?vue&type=template&id=54863590&");
/* harmony import */ var _taskComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskComment.vue?vue&type=script&lang=js& */ "./resources/js/components/notifications/taskComment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _taskComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskComment_vue_vue_type_template_id_54863590___WEBPACK_IMPORTED_MODULE_0__.render,
  _taskComment_vue_vue_type_template_id_54863590___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/notifications/taskComment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Notifications.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Notifications.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notifications_vue_vue_type_template_id_08a81e59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=08a81e59& */ "./resources/js/views/Notifications.vue?vue&type=template&id=08a81e59&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/views/Notifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_08a81e59___WEBPACK_IMPORTED_MODULE_0__.render,
  _Notifications_vue_vue_type_template_id_08a81e59___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Notifications.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/notifications/BriefSubmit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/notifications/BriefSubmit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BriefSubmit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BriefSubmit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/BriefSubmit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BriefSubmit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentPaidByCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentPaidByCustomer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentPaidByCustomer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notifications/taskAssigned.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/notifications/taskAssigned.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAssigned_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskAssigned.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskAssigned.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAssigned_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notifications/taskComment.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/notifications/taskComment.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskComment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskComment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Notifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Notifications.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Notifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/notifications/BriefSubmit.vue?vue&type=template&id=36b0a130&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/notifications/BriefSubmit.vue?vue&type=template&id=36b0a130& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BriefSubmit_vue_vue_type_template_id_36b0a130___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BriefSubmit_vue_vue_type_template_id_36b0a130___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BriefSubmit_vue_vue_type_template_id_36b0a130___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BriefSubmit.vue?vue&type=template&id=36b0a130& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/BriefSubmit.vue?vue&type=template&id=36b0a130&");


/***/ }),

/***/ "./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentPaidByCustomer_vue_vue_type_template_id_79837ae5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentPaidByCustomer_vue_vue_type_template_id_79837ae5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentPaidByCustomer_vue_vue_type_template_id_79837ae5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5&");


/***/ }),

/***/ "./resources/js/components/notifications/taskAssigned.vue?vue&type=template&id=47b815c5&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/notifications/taskAssigned.vue?vue&type=template&id=47b815c5& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAssigned_vue_vue_type_template_id_47b815c5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAssigned_vue_vue_type_template_id_47b815c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAssigned_vue_vue_type_template_id_47b815c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskAssigned.vue?vue&type=template&id=47b815c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskAssigned.vue?vue&type=template&id=47b815c5&");


/***/ }),

/***/ "./resources/js/components/notifications/taskComment.vue?vue&type=template&id=54863590&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/notifications/taskComment.vue?vue&type=template&id=54863590& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskComment_vue_vue_type_template_id_54863590___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskComment_vue_vue_type_template_id_54863590___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskComment_vue_vue_type_template_id_54863590___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskComment.vue?vue&type=template&id=54863590& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskComment.vue?vue&type=template&id=54863590&");


/***/ }),

/***/ "./resources/js/views/Notifications.vue?vue&type=template&id=08a81e59&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Notifications.vue?vue&type=template&id=08a81e59& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_08a81e59___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_08a81e59___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_08a81e59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=template&id=08a81e59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Notifications.vue?vue&type=template&id=08a81e59&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/BriefSubmit.vue?vue&type=template&id=36b0a130&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/BriefSubmit.vue?vue&type=template&id=36b0a130& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "v-col",
    { attrs: { cols: "12" } },
    [
      _vm._v("\n  " + _vm._s(_vm.notification.data.message) + "\n  "),
      _vm.user.role_id == 6
        ? _c(
            "v-btn",
            {
              attrs: {
                color: "info",
                dark: "",
                "x-small": "",
                to: {
                  name: "auth.customer.briefs.edit",
                  params: { id: _vm.notification.data.id },
                },
                target: "_blank",
              },
            },
            [_vm._v("\n    View Detail\n  ")]
          )
        : _c(
            "v-btn",
            {
              attrs: {
                color: "info",
                dark: "",
                "x-small": "",
                to: {
                  name: "guest.brief.detail",
                  params: { id: _vm.notification.data.id },
                },
                target: "_blank",
              },
            },
            [_vm._v("\n    View Detail\n  ")]
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/PaymentPaidByCustomer.vue?vue&type=template&id=79837ae5& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    "v-col",
    { attrs: { cols: "12" } },
    [
      _vm._v("\n  Payment "),
      _c("strong", [_vm._v(_vm._s(_vm.notification.data.status))]),
      _vm._v(", Lead "),
      _c("strong", [_vm._v(_vm._s(_vm.notification.data.lead_id))]),
      _vm._v("\n  >, Payment ID "),
      _c("strong", [_vm._v(_vm._s(_vm.notification.data.payment_id))]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            color: "info",
            dark: "",
            "x-small": "",
            to: {
              name: "auth.payment.create",
              params: { id: _vm.notification.data.lead_id },
              query: { payment_id: _vm.notification.data.payment_id },
            },
            target: "_blank",
          },
        },
        [_vm._v("\n    View Detail\n  ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskAssigned.vue?vue&type=template&id=47b815c5&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskAssigned.vue?vue&type=template&id=47b815c5& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "v-col",
    { attrs: { cols: "12" } },
    [
      _vm._v("\n  Task "),
      _c("strong", [_vm._v(_vm._s(_vm.notification.data.task_id))]),
      _vm._v("\n  , Project ID "),
      _c("strong", [_vm._v(_vm._s(_vm.notification.data.project_id))]),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: {
            color: "info",
            dark: "",
            "x-small": "",
            to: {
              name: "auth.task.summary",
              params: { project: _vm.project_id_int },
              query: { task: _vm.notification.data.task_id },
            },
            target: "_blank",
          },
        },
        [_vm._v("\n    View Detail\n  ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskComment.vue?vue&type=template&id=54863590&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/notifications/taskComment.vue?vue&type=template&id=54863590& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "v-col",
    { attrs: { cols: "12" } },
    [
      _vm._v("\n  " + _vm._s(_vm.notification.data.line) + "\n  "),
      _vm.project_id_int > 0
        ? _c(
            "v-btn",
            {
              attrs: {
                color: "info",
                dark: "",
                "x-small": "",
                to: {
                  name: "auth.task.summary",
                  params: { project: _vm.project_id_int },
                  query: { task: _vm.notification.data.task_id },
                },
                target: "_blank",
              },
            },
            [_vm._v("\n    View Detail\n  ")]
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Notifications.vue?vue&type=template&id=08a81e59&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Notifications.vue?vue&type=template&id=08a81e59& ***!
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
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: "9" } },
        _vm._l(_vm.notifications, function (notification) {
          return _c(
            "v-sheet",
            {
              key: notification.id,
              staticClass: "mx-auto mb-2",
              attrs: {
                color: !notification.read_at ? "green lighten-4" : "white",
                elevation: "2",
                height: "50",
                rounded: true,
              },
            },
            [
              notification.type == "App\\Notifications\\PaymentPaidByCustomer"
                ? _c("PaymentPaidByCustomer", {
                    attrs: { notification: notification },
                  })
                : _vm._e(),
              _vm._v(" "),
              notification.type == "App\\Notifications\\taskAssigned"
                ? _c("taskAssigned", { attrs: { notification: notification } })
                : _vm._e(),
              _vm._v(" "),
              notification.type == "App\\Notifications\\taskComment"
                ? _c("taskComment", { attrs: { notification: notification } })
                : _vm._e(),
              _vm._v(" "),
              notification.type == "App\\Notifications\\BriefSubmit"
                ? _c("BriefSubmit", { attrs: { notification: notification } })
                : _vm._e(),
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "3" } },
        [
          _c(
            "v-sheet",
            {
              staticClass: "mx-auto",
              attrs: { elevation: "2", rounded: true },
            },
            [
              _c(
                "v-list",
                [
                  _c(
                    "v-list-item-group",
                    {
                      attrs: { multiple: "", color: "indigo" },
                      model: {
                        value: _vm.model,
                        callback: function ($$v) {
                          _vm.model = $$v
                        },
                        expression: "model",
                      },
                    },
                    _vm._l(_vm.items, function (item, i) {
                      return _c(
                        "v-list-item",
                        { key: i },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c("v-icon", {
                                domProps: { textContent: _vm._s(item.icon) },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", {
                                domProps: { textContent: _vm._s(item.text) },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
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