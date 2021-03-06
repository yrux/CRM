"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Task_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskTimer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskTimer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['time', 'status'],
  data: function data() {
    return {
      time_cur: '00:00:00'
    };
  },
  mounted: function mounted() {
    this.time_cur = this.time; // if(parseInt(this.status)==0||parseInt(this.status)==1){
    //     setInterval(()=>{
    //         this.updateTimer()
    //     },1000)
    // }
  },
  methods: {
    updateTimer: function updateTimer() {// console.log(this.time_cur)
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskType.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskType.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    type: {
      "default": 'initial',
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/task */ "./resources/js/services/auth/task.js");
/* harmony import */ var _components_common_taskType_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/taskType.vue */ "./resources/js/components/common/taskType.vue");
/* harmony import */ var _components_common_taskTimer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/common/taskTimer.vue */ "./resources/js/components/common/taskTimer.vue");


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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    taskType: _components_common_taskType_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    taskTimer: _components_common_taskTimer_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      search: "",
      taskType: "",
      tasks: [],
      loading: true,
      totalRecords: 0,
      options: {},
      perpage: 10,
      headers: [{
        text: "#",
        align: "start",
        sortable: true,
        value: "id"
      }, {
        text: "Type",
        align: "start",
        sortable: true,
        value: "task_type"
      }, {
        text: "Title",
        align: "start",
        sortable: true,
        value: "task_title"
      }, {
        text: "Project ID",
        align: "start",
        sortable: true,
        value: "project_id"
      }, {
        text: "Assigned On",
        align: "start",
        sortable: true,
        value: "created_at_formatted"
      }, {
        text: "Resource Working",
        align: "start",
        sortable: true,
        value: "developer_name"
      }, {
        text: "Assigned To",
        align: "start",
        sortable: true,
        value: "assigned_user_name"
      }, {
        text: "Assigned By",
        align: "start",
        sortable: true,
        value: "assigned_by_user_name"
      }, {
        text: "Due",
        align: "start",
        sortable: true,
        value: "due_date"
      }, {
        text: "Time Worked",
        align: "start",
        sortable: false,
        value: "total_time_on_task"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }]
    };
  },
  methods: {
    timeUpdate: function timeUpdate(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.tasks = [];
                _this.loading = true;
                _context.next = 4;
                return _services_auth_task__WEBPACK_IMPORTED_MODULE_1__["default"].timeUpdate(item.id);

              case 4:
                _this.getTasks();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setRowCls: function setRowCls(item) {
      if (item.status == 3) {
        return 'orange lighten-4';
      }

      if (item.status == 2) {
        return 'green lighten-4';
      }

      if (item.status == 1) {
        return 'blue lighten-4';
      }
    },
    getTasks: function getTasks() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var q, page, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                q = "";

                if (_this2.taskType != "all") {
                  q += "?type=" + _this2.taskType;
                }

                page = _this2.options.page;
                q += (q == "" ? "?" : "&") + "page=" + page;

                if (_this2.options.sortBy.length > 0) {
                  q += "&sortCol=" + _this2.options.sortBy[0];
                }

                if (_this2.options.sortDesc.length > 0) {
                  //if 1 then by desc else asc
                  q += "&sortByDesc=" + (_this2.options.sortDesc[0] == true ? 1 : 0);
                }

                q += "&perpage=" + _this2.options.itemsPerPage;

                if (_this2.search != "") {
                  q += "&search=" + _this2.search;
                }

                _context2.next = 11;
                return _services_auth_task__WEBPACK_IMPORTED_MODULE_1__["default"].tasks(q);

              case 11:
                res = _context2.sent;
                _this2.totalRecords = res.total;
                _this2.tasks = res.data;
                _this2.loading = false;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this3.taskType = _this3.$route.params.type;

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  watch: {
    $route: function $route() {
      this.taskType = this.$route.params.type;
    },
    taskType: function taskType() {
      this.getTasks();
    },
    perpage: function perpage() {
      this.getTasks();
    },
    options: {
      handler: function handler() {
        this.getTasks();
      },
      deep: true
    },
    search: function search() {
      this.getTasks();
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  }
});

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

/***/ "./resources/js/components/common/taskTimer.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/common/taskTimer.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskTimer_vue_vue_type_template_id_583181e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskTimer.vue?vue&type=template&id=583181e7& */ "./resources/js/components/common/taskTimer.vue?vue&type=template&id=583181e7&");
/* harmony import */ var _taskTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskTimer.vue?vue&type=script&lang=js& */ "./resources/js/components/common/taskTimer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _taskTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskTimer_vue_vue_type_template_id_583181e7___WEBPACK_IMPORTED_MODULE_0__.render,
  _taskTimer_vue_vue_type_template_id_583181e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/taskTimer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/taskType.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/common/taskType.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskType_vue_vue_type_template_id_5bc8adf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskType.vue?vue&type=template&id=5bc8adf0& */ "./resources/js/components/common/taskType.vue?vue&type=template&id=5bc8adf0&");
/* harmony import */ var _taskType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskType.vue?vue&type=script&lang=js& */ "./resources/js/components/common/taskType.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _taskType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskType_vue_vue_type_template_id_5bc8adf0___WEBPACK_IMPORTED_MODULE_0__.render,
  _taskType_vue_vue_type_template_id_5bc8adf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/taskType.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Task/List.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Task/List.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=bca68e0e& */ "./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/Task/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Task/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/taskTimer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/common/taskTimer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskTimer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskTimer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/taskType.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/common/taskType.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskType.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Task/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Task/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/taskTimer.vue?vue&type=template&id=583181e7&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/common/taskTimer.vue?vue&type=template&id=583181e7& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimer_vue_vue_type_template_id_583181e7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimer_vue_vue_type_template_id_583181e7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskTimer_vue_vue_type_template_id_583181e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskTimer.vue?vue&type=template&id=583181e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskTimer.vue?vue&type=template&id=583181e7&");


/***/ }),

/***/ "./resources/js/components/common/taskType.vue?vue&type=template&id=5bc8adf0&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/common/taskType.vue?vue&type=template&id=5bc8adf0& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskType_vue_vue_type_template_id_5bc8adf0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskType_vue_vue_type_template_id_5bc8adf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_taskType_vue_vue_type_template_id_5bc8adf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./taskType.vue?vue&type=template&id=5bc8adf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskType.vue?vue&type=template&id=5bc8adf0&");


/***/ }),

/***/ "./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_bca68e0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=bca68e0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskTimer.vue?vue&type=template&id=583181e7&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskTimer.vue?vue&type=template&id=583181e7& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("span", [_vm._v(_vm._s(_vm.time_cur))])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskType.vue?vue&type=template&id=5bc8adf0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/common/taskType.vue?vue&type=template&id=5bc8adf0& ***!
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
    "div",
    { staticClass: "d-inline-block" },
    [
      _vm.type == "initial"
        ? _c(
            "v-chip",
            { staticClass: "ma-2", attrs: { color: "primary", small: "" } },
            [_vm._v("\n  Initial\n")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.type == "revision"
        ? _c(
            "v-chip",
            {
              staticClass: "ma-2",
              attrs: { color: "green", "text-color": "white", small: "" },
            },
            [_vm._v("\n  Revision\n")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.type == "innerpages"
        ? _c(
            "v-chip",
            {
              staticClass: "ma-2",
              attrs: { color: "blue", "text-color": "white", small: "" },
            },
            [_vm._v("\n  Inner Pages\n")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.type == "redraw"
        ? _c(
            "v-chip",
            {
              staticClass: "ma-2",
              attrs: { color: "red", "text-color": "white", small: "" },
            },
            [_vm._v("\n  ReDraw\n")]
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/List.vue?vue&type=template&id=bca68e0e& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: {
      headers: _vm.headers,
      items: _vm.tasks,
      options: _vm.options,
      "server-items-length": _vm.totalRecords,
      loading: _vm.loading,
      "item-key": "id",
      "item-class": _vm.setRowCls,
    },
    on: {
      "update:options": function ($event) {
        _vm.options = $event
      },
    },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function () {
          return [
            _c("v-text-field", {
              staticClass: "mx-4",
              attrs: { label: "Search" },
              model: {
                value: _vm.search,
                callback: function ($$v) {
                  _vm.search = $$v
                },
                expression: "search",
              },
            }),
          ]
        },
        proxy: true,
      },
      {
        key: "item.task_type",
        fn: function (ref) {
          var item = ref.item
          return [_c("taskType", { attrs: { type: item.task_type } })]
        },
      },
      {
        key: "item.total_time_on_task",
        fn: function (ref) {
          var item = ref.item
          return [
            _c("taskTimer", {
              attrs: { status: item.status, time: item.total_time_on_task },
            }),
          ]
        },
      },
      {
        key: "item.actions",
        fn: function (ref) {
          var item = ref.item
          return [
            _c(
              "v-tooltip",
              {
                attrs: { top: "" },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "activator",
                      fn: function (ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-badge",
                            {
                              attrs: {
                                content: item.unseen_comments,
                                value: item.unseen_comments,
                                color: "green",
                                overlap: "",
                              },
                            },
                            [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        color: "info",
                                        fab: "",
                                        "x-small": "",
                                        dark: "",
                                        to: {
                                          name: "auth.task.summary",
                                          params: {
                                            project: item.project_id_root,
                                          },
                                          query: { task: item.id },
                                        },
                                      },
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [_c("v-icon", [_vm._v("mdi-file-tree")])],
                                1
                              ),
                            ],
                            1
                          ),
                        ]
                      },
                    },
                  ],
                  null,
                  true
                ),
              },
              [_vm._v(" "), _c("span", [_vm._v("Task Detail")])]
            ),
            _vm._v(" "),
            _vm.user.role_id == 8 && (item.status == 0 || item.status == 1)
              ? _c(
                  "v-tooltip",
                  {
                    attrs: { top: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        color:
                                          item.task_started == 0
                                            ? "primary"
                                            : "error",
                                        fab: "",
                                        "x-small": "",
                                        dark: "",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.timeUpdate(item)
                                        },
                                      },
                                    },
                                    "v-btn",
                                    attrs,
                                    false
                                  ),
                                  on
                                ),
                                [_c("v-icon", [_vm._v("mdi-watch")])],
                                1
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  [
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          item.task_started == 0 ? "Start Timer" : "Stop Timer"
                        )
                      ),
                    ]),
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.user.role_id != 8 && item.task_started == 1
              ? _c(
                  "v-tooltip",
                  {
                    attrs: { top: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function (ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-progress-circular",
                                _vm._g(
                                  _vm._b(
                                    {
                                      attrs: {
                                        indeterminate: "",
                                        color: "primary",
                                      },
                                    },
                                    "v-progress-circular",
                                    attrs,
                                    false
                                  ),
                                  on
                                )
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Timer in Progress")])]
                )
              : _vm._e(),
          ]
        },
      },
    ]),
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);