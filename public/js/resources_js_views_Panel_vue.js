"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Panel_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/calendar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/calendar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/default */ "./resources/js/services/auth/default.js");


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

var service = new _services_auth_default__WEBPACK_IMPORTED_MODULE_1__["default"]('events');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    getEvents: function getEvents(_ref) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var start, end;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                start = _ref.start, end = _ref.end;
                _this.currentSelections.start = start;
                _this.currentSelections.end = end;
                _context.next = 5;
                return service.getlist('?start=' + start.date + '&end=' + end.date).then(function (e) {
                  return e.data;
                });

              case 5:
                _this.events = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addEvent: function addEvent(event) {
      this.form.date = event.date;
      this.form.event_name = '';
      this.dialog = true;
    },
    saveEvent: function saveEvent() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var formData, res, msg, q;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('title', _this2.form.event_name);
                formData.append('event_time', _this2.form.time);
                formData.append('event_date', _this2.form.date);
                _context2.next = 6;
                return service.create(formData);

              case 6:
                res = _context2.sent;

                if (!res.status) {
                  msg = '';

                  for (q in res.data) {
                    msg += res.data[q] + '</br>';
                  }

                  _this2.$store.commit("setNotification", msg); //errors here

                } else {
                  //suuccess here
                  _this2.dialog = false;
                  _this2.form = {
                    event_name: '',
                    time: '',
                    date: ''
                  };

                  _this2.$store.commit("setNotification", "Event Added");

                  _this2.getEvents(_this2.currentSelections);
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  data: function data() {
    return {
      type: "Day",
      types: ["Month", "Week", "Day"],
      events: [],
      value: "",
      form: {
        date: '',
        event_name: '',
        time: ''
      },
      currentSelections: {
        start: {},
        end: {}
      },
      dialog: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/leads/unseenMessages.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/leads/unseenMessages.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_auth_leadmessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/auth/leadmessages */ "./resources/js/services/auth/leadmessages.js");
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
      loading: true,
      leads: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    _services_auth_leadmessages__WEBPACK_IMPORTED_MODULE_0__["default"].unseenMessages().then(function (e) {
      _this.leads = e;
      _this.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tasks/widget.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tasks/widget.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  props: {
    title: {
      type: String,
      "default": ""
    },
    loading: {
      type: Boolean,
      "default": true
    },
    count: {
      type: Number,
      "default": 0
    },
    icon: {
      type: String,
      "default": ''
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Panel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Panel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sidebars_admin_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/sidebars/admin.vue */ "./resources/js/components/sidebars/admin.vue");
/* harmony import */ var _components_tasks_widget_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/tasks/widget.vue */ "./resources/js/components/tasks/widget.vue");
/* harmony import */ var _components_leads_unseenMessages_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/leads/unseenMessages.vue */ "./resources/js/components/leads/unseenMessages.vue");
/* harmony import */ var _components_common_calendar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/calendar.vue */ "./resources/js/components/common/calendar.vue");
/* harmony import */ var _services_auth_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/auth/task */ "./resources/js/services/auth/task.js");


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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    adminbar: _components_sidebars_admin_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    taskWidget: _components_tasks_widget_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    unseenMessages: _components_leads_unseenMessages_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    calendar: _components_common_calendar_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      tasks: [{
        title: 'Today Tasks',
        loading: true,
        count: 0,
        type: 'today',
        icon: 'mdi-calendar-today'
      }, {
        title: 'Overdue Tasks',
        loading: true,
        count: 0,
        type: 'overdue',
        icon: 'mdi-calendar-alert'
      }, {
        title: 'Upcomming Tasks',
        loading: true,
        count: 0,
        type: 'upcomming',
        icon: 'mdi-calendar-refresh'
      }, {
        title: 'All Tasks',
        loading: true,
        count: 0,
        type: 'all',
        icon: 'mdi-calendar'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.user.role_id == 8 || _this.user.role_id == 7 || _this.user.role_id == 4 || _this.user.role_id == 5)) {
                _context.next = 10;
                break;
              }

              i = 0;

            case 2:
              if (!(i < _this.tasks.length)) {
                _context.next = 10;
                break;
              }

              _context.next = 5;
              return _services_auth_task__WEBPACK_IMPORTED_MODULE_5__["default"].tasks('?perpage=0&getCount=true&type=' + _this.tasks[i].type);

            case 5:
              _this.tasks[i].count = _context.sent;
              _this.tasks[i].loading = false;

            case 7:
              i++;
              _context.next = 2;
              break;

            case 10:
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
    }
  }
});

/***/ }),

/***/ "./resources/js/services/auth/default.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth/default.js ***!
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

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var defaultservice = /*#__PURE__*/function () {
  function defaultservice(baseuri) {
    _classCallCheck(this, defaultservice);

    // Constructor
    this.baseuri = baseuri;
  }

  _createClass(defaultservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/".concat(this.baseuri).concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post('/api/' + this.baseuri, formData).then(function (e) {
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
        }, _callee, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/".concat(this.baseuri, "/").concat(id));
    }
  }, {
    key: "get",
    value: function get(id) {
      return axios.get("/api/".concat(this.baseuri, "/").concat(id)).then(function (e) {
        return e.data.data;
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData.append('_method', 'put');
                _context2.next = 3;
                return axios.post('/api/' + this.baseuri + '/' + id, formData).then(function (e) {
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
                res = _context2.sent;
                return _context2.abrupt("return", res);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return defaultservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultservice);

/***/ }),

/***/ "./resources/js/services/auth/leadmessages.js":
/*!****************************************************!*\
  !*** ./resources/js/services/auth/leadmessages.js ***!
  \****************************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var leadmessagesservice = /*#__PURE__*/function () {
  function leadmessagesservice() {
    _classCallCheck(this, leadmessagesservice);

    _defineProperty(this, "next_url", '');

    _defineProperty(this, "headersEvs", []);
  }

  _createClass(leadmessagesservice, [{
    key: "getMessages",
    value: function () {
      var _getMessages = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(lead_id, search) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.headersEvs.indexOf(lead_id) < 0) {
                  this.headersEvs.push(lead_id);
                }

                _context.next = 3;
                return axios.get(this.next_url == '' ? "/api/lead-messages/" + lead_id + '?search=' + search : this.next_url + '&search=' + search);

              case 3:
                res = _context.sent;

                if (res.data.next_page_url) {
                  this.next_url = res.data.next_page_url;
                } else {
                  this.next_url = '';
                }

                return _context.abrupt("return", res.data.result);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMessages(_x, _x2) {
        return _getMessages.apply(this, arguments);
      }

      return getMessages;
    }()
  }, {
    key: "resetNextUrl",
    value: function resetNextUrl() {
      this.next_url = '';
    }
  }, {
    key: "checkIfNextAvail",
    value: function checkIfNextAvail() {
      return this.next_url == '' ? false : true;
    }
  }, {
    key: "saveMsg",
    value: function saveMsg(lead_id, formData) {
      axios.post('/api/lead-message-send/' + lead_id, formData);
    }
  }, {
    key: "unseenMessages",
    value: function () {
      var _unseenMessages = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", axios.get('/api/unseen-lead-messages').then(function (e) {
                  return e.data;
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function unseenMessages() {
        return _unseenMessages.apply(this, arguments);
      }

      return unseenMessages;
    }()
  }]);

  return leadmessagesservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new leadmessagesservice());

/***/ }),

/***/ "./resources/js/services/auth/task.js":
/*!********************************************!*\
  !*** ./resources/js/services/auth/task.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var taskservice = /*#__PURE__*/function () {
  function taskservice() {
    _classCallCheck(this, taskservice);
  }

  _createClass(taskservice, [{
    key: "summary",
    value: function summary(project_id) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return axios.get("/api/project/".concat(project_id, "/task").concat(query)).then(function (response) {
        return response.data.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "tasks",
    value: function tasks(query) {
      return axios.get('/api/tasks' + query).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "update",
    value: function update(project_id, id, formData) {
      formData.append('_method', 'put');
      return axios.post("/api/project/".concat(project_id, "/task/").concat(id), formData).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "comment",
    value: function comment(task_id, formData) {
      return axios.post("/api/task/".concat(task_id, "/comment"), formData).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "updateStatus",
    value: function updateStatus(project_id, task_id, status) {
      return axios.post("/api/project/".concat(project_id, "/").concat(task_id, "/status/").concat(status)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "usersSummary",
    value: function usersSummary(project_id) {
      return axios.get('/api/task/' + project_id + '/usersSummary').then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "timeUpdate",
    value: function timeUpdate(task_id) {
      return axios.post("/api/task/".concat(task_id, "/update-time")).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "markCommentsread",
    value: function markCommentsread(task_id) {
      return axios.post("/api/task/".concat(task_id, "/mark-comments-read")).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }]);

  return taskservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new taskservice());

/***/ }),

/***/ "./resources/js/components/common/calendar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/common/calendar.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calendar_vue_vue_type_template_id_44cd2e67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.vue?vue&type=template&id=44cd2e67& */ "./resources/js/components/common/calendar.vue?vue&type=template&id=44cd2e67&");
/* harmony import */ var _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.vue?vue&type=script&lang=js& */ "./resources/js/components/common/calendar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _calendar_vue_vue_type_template_id_44cd2e67___WEBPACK_IMPORTED_MODULE_0__.render,
  _calendar_vue_vue_type_template_id_44cd2e67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/calendar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/leads/unseenMessages.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/leads/unseenMessages.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _unseenMessages_vue_vue_type_template_id_3b8b417a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unseenMessages.vue?vue&type=template&id=3b8b417a& */ "./resources/js/components/leads/unseenMessages.vue?vue&type=template&id=3b8b417a&");
/* harmony import */ var _unseenMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unseenMessages.vue?vue&type=script&lang=js& */ "./resources/js/components/leads/unseenMessages.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _unseenMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _unseenMessages_vue_vue_type_template_id_3b8b417a___WEBPACK_IMPORTED_MODULE_0__.render,
  _unseenMessages_vue_vue_type_template_id_3b8b417a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/leads/unseenMessages.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/tasks/widget.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/tasks/widget.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widget_vue_vue_type_template_id_81ba0da0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget.vue?vue&type=template&id=81ba0da0& */ "./resources/js/components/tasks/widget.vue?vue&type=template&id=81ba0da0&");
/* harmony import */ var _widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget.vue?vue&type=script&lang=js& */ "./resources/js/components/tasks/widget.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _widget_vue_vue_type_template_id_81ba0da0___WEBPACK_IMPORTED_MODULE_0__.render,
  _widget_vue_vue_type_template_id_81ba0da0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tasks/widget.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Panel.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Panel.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Panel_vue_vue_type_template_id_21128e75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panel.vue?vue&type=template&id=21128e75& */ "./resources/js/views/Panel.vue?vue&type=template&id=21128e75&");
/* harmony import */ var _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.vue?vue&type=script&lang=js& */ "./resources/js/views/Panel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panel_vue_vue_type_template_id_21128e75___WEBPACK_IMPORTED_MODULE_0__.render,
  _Panel_vue_vue_type_template_id_21128e75___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Panel.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/calendar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/common/calendar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/calendar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/leads/unseenMessages.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/leads/unseenMessages.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unseenMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./unseenMessages.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/leads/unseenMessages.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_unseenMessages_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tasks/widget.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/tasks/widget.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./widget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tasks/widget.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Panel.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Panel.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Panel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Panel.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/calendar.vue?vue&type=template&id=44cd2e67&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/common/calendar.vue?vue&type=template&id=44cd2e67& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_44cd2e67___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_44cd2e67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_calendar_vue_vue_type_template_id_44cd2e67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./calendar.vue?vue&type=template&id=44cd2e67& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/calendar.vue?vue&type=template&id=44cd2e67&");


/***/ }),

/***/ "./resources/js/components/leads/unseenMessages.vue?vue&type=template&id=3b8b417a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/leads/unseenMessages.vue?vue&type=template&id=3b8b417a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unseenMessages_vue_vue_type_template_id_3b8b417a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unseenMessages_vue_vue_type_template_id_3b8b417a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_unseenMessages_vue_vue_type_template_id_3b8b417a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./unseenMessages.vue?vue&type=template&id=3b8b417a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/leads/unseenMessages.vue?vue&type=template&id=3b8b417a&");


/***/ }),

/***/ "./resources/js/components/tasks/widget.vue?vue&type=template&id=81ba0da0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/tasks/widget.vue?vue&type=template&id=81ba0da0& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_vue_vue_type_template_id_81ba0da0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_vue_vue_type_template_id_81ba0da0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_vue_vue_type_template_id_81ba0da0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./widget.vue?vue&type=template&id=81ba0da0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tasks/widget.vue?vue&type=template&id=81ba0da0&");


/***/ }),

/***/ "./resources/js/views/Panel.vue?vue&type=template&id=21128e75&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Panel.vue?vue&type=template&id=21128e75& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_21128e75___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_21128e75___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Panel_vue_vue_type_template_id_21128e75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Panel.vue?vue&type=template&id=21128e75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Panel.vue?vue&type=template&id=21128e75&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/calendar.vue?vue&type=template&id=44cd2e67&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/calendar.vue?vue&type=template&id=44cd2e67& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { attrs: { cols: "6" } },
    [
      _c(
        "v-sheet",
        { staticClass: "d-flex", attrs: { tile: "", height: "54" } },
        [
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: { icon: "" },
              on: {
                click: function ($event) {
                  return _vm.$refs.calendar.prev()
                },
              },
            },
            [_c("v-icon", [_vm._v("mdi-chevron-left")])],
            1
          ),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "ma-2",
            attrs: {
              items: _vm.types,
              dense: "",
              outlined: "",
              "hide-details": "",
              label: "type",
            },
            model: {
              value: _vm.type,
              callback: function ($$v) {
                _vm.type = $$v
              },
              expression: "type",
            },
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: { icon: "" },
              on: {
                click: function ($event) {
                  return _vm.$refs.calendar.next()
                },
              },
            },
            [_c("v-icon", [_vm._v("mdi-chevron-right")])],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-sheet",
        { attrs: { height: "450" } },
        [
          _c("v-calendar", {
            ref: "calendar",
            attrs: {
              type: _vm.type.toLowerCase(),
              events: _vm.events,
              "event-overlap-threshold": 30,
              color: "primary",
            },
            on: {
              change: _vm.getEvents,
              "click:date": _vm.addEvent,
              "click:day": _vm.addEvent,
              "click:time": _vm.addEvent,
              "click:interval": _vm.addEvent,
            },
            model: {
              value: _vm.value,
              callback: function ($$v) {
                _vm.value = $$v
              },
              expression: "value",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "600px" },
              model: {
                value: _vm.dialog,
                callback: function ($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog",
              },
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "text-h5" }, [
                      _vm._v("Reminder/Event for "),
                      _c("b", [_vm._v(_vm._s(_vm.form.date))]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Event Name",
                                      hint: "You can Write the Future calls or about reminders you have here.",
                                      "persistent-hint": "",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.form.event_name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "event_name", $$v)
                                      },
                                      expression: "form.event_name",
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
                                    "v-row",
                                    {
                                      attrs: {
                                        justify: "space-around",
                                        align: "center",
                                      },
                                    },
                                    [
                                      _c("v-time-picker", {
                                        attrs: {
                                          scrollable: "",
                                          "ampm-in-title": "",
                                          format: "ampm",
                                        },
                                        model: {
                                          value: _vm.form.time,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "time", $$v)
                                          },
                                          expression: "form.time",
                                        },
                                      }),
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
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function ($event) {
                              _vm.dialog = false
                            },
                          },
                        },
                        [_vm._v("\n            Close\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.saveEvent },
                        },
                        [_vm._v("\n            Save\n          ")]
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/leads/unseenMessages.vue?vue&type=template&id=3b8b417a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/leads/unseenMessages.vue?vue&type=template&id=3b8b417a& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _vm.loading
        ? _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-sheet",
                { staticClass: "pa-3", attrs: { color: "primary lighten-5" } },
                [
                  _c("v-skeleton-loader", {
                    staticClass: "mx-auto",
                    attrs: { type: "card" },
                  }),
                ],
                1
              ),
            ],
            1
          )
        : _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("h3", { staticClass: "text-center" }, [
                _vm._v("Unseen Messages"),
              ]),
              _vm._v(" "),
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
                                _vm._v("Email"),
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("Name"),
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("Unseen Message"),
                              ]),
                              _vm._v(" "),
                              _c("th"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.leads, function (lead) {
                              return _c("tr", { key: lead.lead_id }, [
                                _c("td", [_vm._v(_vm._s(lead.email))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(lead.first_name) +
                                      " " +
                                      _vm._s(lead.last_name)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(lead.unseen_count))]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "white--text",
                                        attrs: {
                                          link: "",
                                          small: "",
                                          to: {
                                            name: "auth.payment.create",
                                            params: { id: lead.lead_id },
                                          },
                                          color: "blue-grey",
                                        },
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { left: "", dark: "" } },
                                          [_vm._v(" mdi-account ")]
                                        ),
                                        _vm._v(
                                          "\n                          View Summary\n                      "
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ])
                            }),
                            0
                          ),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                }),
              ],
            ],
            2
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tasks/widget.vue?vue&type=template&id=81ba0da0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/tasks/widget.vue?vue&type=template&id=81ba0da0& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm.loading
        ? _c(
            "v-sheet",
            { staticClass: "pa-3", attrs: { color: "primary lighten-5" } },
            [
              _c("v-skeleton-loader", {
                staticClass: "mx-auto",
                attrs: { type: "card" },
              }),
            ],
            1
          )
        : _c(
            "v-card",
            { attrs: { elevation: "2", tile: "" } },
            [
              _c(
                "v-card-title",
                [
                  _vm.icon != ""
                    ? _c("v-icon", { attrs: { color: "indigo", size: "55" } }, [
                        _vm._v(" " + _vm._s(_vm.icon) + " "),
                      ])
                    : _vm._e(),
                  _vm._v("\n      " + _vm._s(_vm.title)),
                  _c(
                    "v-chip",
                    {
                      staticClass: "ma-2",
                      attrs: {
                        color: "pink",
                        label: "",
                        "text-color": "white",
                      },
                    },
                    [_vm._v("\n        " + _vm._s(_vm.count) + "\n      ")]
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Panel.vue?vue&type=template&id=21128e75&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Panel.vue?vue&type=template&id=21128e75& ***!
  \************************************************************************************************************************************************************************************************************/
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
      _vm.user.role_id == 8 ||
      _vm.user.role_id == 7 ||
      _vm.user.role_id == 4 ||
      _vm.user.role_id == 5
        ? _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-row",
                _vm._l(_vm.tasks, function (task, taskk) {
                  return _c(
                    "v-col",
                    { key: taskk, attrs: { cols: "3" } },
                    [
                      _c("taskWidget", {
                        attrs: {
                          icon: task.icon,
                          count: task.count,
                          loading: task.loading,
                          title: task.title,
                        },
                      }),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.user.role_id == 2 || _vm.user.role_id == 4 || _vm.user.role_id == 5
        ? _c(
            "v-col",
            { attrs: { cols: "12" } },
            [_c("unseenMessages", { attrs: { user: _vm.user } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("v-col", { attrs: { cols: "12" } }, [_c("v-divider")], 1),
      _vm._v(" "),
      _c("calendar"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);