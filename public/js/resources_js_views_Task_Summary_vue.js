"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Task_Summary_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/Summary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/Summary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/task */ "./resources/js/services/auth/task.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.project_id = _this.$route.params.project;
              _context.next = 3;
              return _services_auth_project__WEBPACK_IMPORTED_MODULE_2__["default"].get(_this.project_id);

            case 3:
              _this.project = _context.sent;
              _context.next = 6;
              return _this.getTaskSummary();

            case 6:
              if (_this.$route.query.task) {
                for (i = 0; i < _this.tasks.length; i++) {
                  if (_this.tasks[i].id == _this.$route.query.task) {
                    //opens task
                    _this.taskOpen = [];

                    _this.taskOpen.push(i);
                  }
                }
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      project_id: 0,
      taskOpen: [],
      tasks: [],
      dialog: false,
      selectedTask: {},
      project: {}
    };
  },
  methods: {
    getTaskSummary: function getTaskSummary() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_auth_task__WEBPACK_IMPORTED_MODULE_1__["default"].summary(_this2.project_id);

              case 2:
                res = _context2.sent;
                _this2.tasks = res;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    updateDue: function updateDue(task) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                //   this.tasks = [];
                formData = new FormData();
                formData.append("due_date", task.due_date);
                _services_auth_task__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this3.project_id, task.id, formData);
                _this3.dialog = false; //   this.getTaskSummary();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  computed: {},
  watch: {}
});

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
      return axios.get("/api/project/".concat(project_id, "/task")).then(function (response) {
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
  }]);

  return taskservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new taskservice());

/***/ }),

/***/ "./resources/js/views/Task/Summary.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Task/Summary.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Summary_vue_vue_type_template_id_09f730ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=09f730ca& */ "./resources/js/views/Task/Summary.vue?vue&type=template&id=09f730ca&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/views/Task/Summary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Summary_vue_vue_type_template_id_09f730ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _Summary_vue_vue_type_template_id_09f730ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Task/Summary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Task/Summary.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Task/Summary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/Summary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Task/Summary.vue?vue&type=template&id=09f730ca&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Task/Summary.vue?vue&type=template&id=09f730ca& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_09f730ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_09f730ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_09f730ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=template&id=09f730ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/Summary.vue?vue&type=template&id=09f730ca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/Summary.vue?vue&type=template&id=09f730ca&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Task/Summary.vue?vue&type=template&id=09f730ca& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _vm.tasks.length > 0
        ? _c(
            "v-card",
            { staticClass: "mx-auto", attrs: { outlined: "", elevation: "2" } },
            [
              _c("v-card-title", [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.project.project_id) +
                    " " +
                    _vm._s(_vm.project.title) +
                    "\n    "
                ),
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", {
                  domProps: { innerHTML: _vm._s(_vm.project.description) },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mt-2" },
                  _vm._l(_vm.project.files, function (project_files) {
                    return _c(
                      "a",
                      {
                        key: project_files.id,
                        attrs: {
                          target: "_blank",
                          href: project_files.full_url,
                        },
                      },
                      [
                        _c(
                          "v-chip",
                          {
                            staticClass: "ma-2",
                            attrs: { color: "secondary" },
                          },
                          [
                            _vm._v(
                              "\n          " + _vm._s(project_files.url) + " "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  }),
                  0
                ),
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [_c("h3", [_vm._v("Tasks")])]),
              _vm._v(" "),
              _c(
                "v-expansion-panels",
                {
                  attrs: { multiple: "", focusable: "" },
                  model: {
                    value: _vm.taskOpen,
                    callback: function ($$v) {
                      _vm.taskOpen = $$v
                    },
                    expression: "taskOpen",
                  },
                },
                _vm._l(_vm.tasks, function (task) {
                  return _c(
                    "v-expansion-panel",
                    { key: task.id, class: "mt-4" },
                    [
                      _c("v-expansion-panel-header", {
                        directives: [
                          {
                            name: "ripple",
                            rawName: "v-ripple",
                            value: { center: true },
                            expression: "{ center: true }",
                          },
                        ],
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function (ref) {
                                var open = ref.open
                                return [
                                  _c(
                                    "v-row",
                                    { attrs: { "no-gutters": "" } },
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          class: "text-break",
                                          attrs: {
                                            cols: open === true ? 12 : 4,
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n              " +
                                              _vm._s(task.title) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          staticClass: "text--secondary",
                                          attrs: { cols: "8" },
                                        },
                                        [
                                          _c(
                                            "v-fade-transition",
                                            { attrs: { "leave-absolute": "" } },
                                            [
                                              open
                                                ? _c("span")
                                                : _c(
                                                    "v-row",
                                                    {
                                                      staticStyle: {
                                                        width: "100%",
                                                      },
                                                      attrs: {
                                                        "no-gutters": "",
                                                      },
                                                    },
                                                    [
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "6" },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                    Start date:\n                    "
                                                          ),
                                                          _c("strong", [
                                                            _vm._v(
                                                              _vm._s(
                                                                task.created_at_formatted ||
                                                                  "Not set"
                                                              )
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-col",
                                                        {
                                                          attrs: { cols: "6" },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                    Due date:\n                    "
                                                          ),
                                                          _c("strong", [
                                                            _vm._v(
                                                              _vm._s(
                                                                task.due_date ||
                                                                  "Not set"
                                                              )
                                                            ),
                                                          ]),
                                                        ]
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
                                ]
                              },
                            },
                          ],
                          null,
                          true
                        ),
                      }),
                      _vm._v(" "),
                      _c(
                        "v-expansion-panel-content",
                        [
                          _c("div", {
                            staticClass: "mt-2 text-break",
                            domProps: {
                              innerHTML: _vm._s(task.task_description),
                            },
                          }),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            {
                              staticClass: "mt-3",
                              attrs: { "no-gutters": "" },
                            },
                            [_vm._v(" Comments here ")]
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            {
                              staticClass: "mt-3",
                              attrs: { "no-gutters": "" },
                            },
                            [
                              _c("v-col", { attrs: { cols: "4", sm: "4" } }, [
                                _c("small", [
                                  _vm._v("Start date:\n                "),
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(
                                        task.created_at_formatted || "Not set"
                                      )
                                    ),
                                  ]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "4", sm: "4" } },
                                [
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
                                                  "v-btn",
                                                  _vm._g(
                                                    _vm._b(
                                                      {
                                                        attrs: {
                                                          text: "",
                                                          tile: "",
                                                          color: "success",
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            _vm.dialog = true
                                                            _vm.selectedTask =
                                                              task
                                                          },
                                                        },
                                                      },
                                                      "v-btn",
                                                      attrs,
                                                      false
                                                    ),
                                                    on
                                                  ),
                                                  [
                                                    _c(
                                                      "v-icon",
                                                      { attrs: { left: "" } },
                                                      [_vm._v(" mdi-update ")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("small", [
                                                      _vm._v(
                                                        "Due date:\n                      "
                                                      ),
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            task.due_date ||
                                                              "Not set"
                                                          )
                                                        ),
                                                      ]),
                                                    ]),
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
                                    [
                                      _vm._v(" "),
                                      _c("span", [_vm._v("Change Due Date")]),
                                    ]
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
                }),
                1
              ),
            ],
            1
          )
        : _c(
            "v-row",
            _vm._l(10, function (qq) {
              return _c(
                "v-col",
                {
                  key: qq,
                  staticClass: "pa-0",
                  attrs: { cols: "12", md: "12" },
                },
                [
                  _c("v-skeleton-loader", {
                    attrs: { type: "list-item-three-line" },
                  }),
                ],
                1
              )
            }),
            1
          ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
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
                  _vm._v("Update Due Date"),
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
                              _c("v-date-picker", {
                                attrs: { "full-width": "" },
                                model: {
                                  value: _vm.selectedTask.due_date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.selectedTask, "due_date", $$v)
                                  },
                                  expression: "selectedTask.due_date",
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
                    [_vm._v("\n          Close\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function ($event) {
                          return _vm.updateDue(_vm.selectedTask)
                        },
                      },
                    },
                    [_vm._v("\n          Save\n        ")]
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