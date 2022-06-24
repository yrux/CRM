"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Lead_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/LeadForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/LeadForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_lead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/lead */ "./resources/js/services/auth/lead.js");
/* harmony import */ var _services_auth_lead_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth/lead_type */ "./resources/js/services/auth/lead_type.js");
/* harmony import */ var _services_auth_brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth/brand */ "./resources/js/services/auth/brand.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_leadassigned__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/auth/leadassigned */ "./resources/js/services/auth/leadassigned.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dialog: false,
      companyusers: [],
      assignedUsers: [],
      lead_types: [],
      fetchingLeadUsers: false,
      form: {
        id: 0,
        first_name: "",
        last_name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
        brand: {},
        custom_fields: {},
        assigned_to: 0,
        lead_type: {}
      }
    };
  },
  methods: {
    deletassigneduser: function deletassigneduser(item) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var isConfirmed;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then(function (result) {
                  if (result.isConfirmed) {
                    return true;
                  }
                });

              case 2:
                isConfirmed = _context.sent;

                if (!isConfirmed) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return _services_auth_leadassigned__WEBPACK_IMPORTED_MODULE_5__["default"]["delete"]({
                  lead_id: item.lead_id,
                  id: item.id
                });

              case 6:
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire("Deleted!", "Your record has been deleted.", "success"); // this.getLeadUsers();

              case 7:
                _this.closeMe();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getLeadUsers: function getLeadUsers() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.form.id > 0)) {
                  _context2.next = 6;
                  break;
                }

                _this2.fetchingLeadUsers = true;
                _context2.next = 4;
                return _services_auth_leadassigned__WEBPACK_IMPORTED_MODULE_5__["default"].getlist(_this2.form.id, '').then(function (e) {
                  return e.data;
                });

              case 4:
                _this2.assignedUsers = _context2.sent;
                _this2.fetchingLeadUsers = false;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    assignUser: function assignUser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var formdata;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.form.id > 0 && _this3.form.assigned_to > 0)) {
                  _context3.next = 8;
                  break;
                }

                formdata = new FormData();
                formdata.append('user_id', _this3.form.assigned_to);
                _context3.next = 5;
                return _services_auth_leadassigned__WEBPACK_IMPORTED_MODULE_5__["default"].create(_this3.form.id, formdata);

              case 5:
                _this3.$store.commit("setNotification", "User Assigned");

                _this3.$emit("refresh-leads");

                _this3.getLeadUsers();

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    closeMe: function closeMe() {
      this.dialog = false;
      this.$emit("close-leaddialog");
    },
    updateLead: function updateLead() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                formData = new FormData();
                formData.append("first_name", _this4.form.first_name);
                formData.append("last_name", _this4.form.last_name);
                formData.append("company", _this4.form.company);
                formData.append("phone", _this4.form.phone);
                formData.append("email", _this4.form.email);
                formData.append("message", _this4.form.message);
                formData.append("brand_id", _this4.form.brand.id);
                formData.append("lead_type", _this4.form.lead_type.id);

                if (!(_this4.form.id > 0)) {
                  _context4.next = 16;
                  break;
                }

                _context4.next = 13;
                return _services_auth_lead__WEBPACK_IMPORTED_MODULE_1__["default"].update(formData, _this4.form.id);

              case 13:
                _this4.$store.commit("setNotification", "Lead Updated");

                _context4.next = 19;
                break;

              case 16:
                _context4.next = 18;
                return _services_auth_lead__WEBPACK_IMPORTED_MODULE_1__["default"].create(formData);

              case 18:
                _this4.$store.commit("setNotification", "Lead Created");

              case 19:
                _this4.$emit("refresh-leads");

                _this4.closeMe();

                _context4.next = 26;
                break;

              case 23:
                _context4.prev = 23;
                _context4.t0 = _context4["catch"](0);

                _this4.$store.commit("setNotification", "Lead Data Invalid");

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 23]]);
      }))();
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    _services_auth_brand__WEBPACK_IMPORTED_MODULE_3__["default"].getAllCompanyUsers().then(function (e) {
      _this5.companyusers = e;
    });
    _services_auth_lead_type__WEBPACK_IMPORTED_MODULE_2__["default"].getlist("").then(function (e) {
      _this5.lead_types = e.data;
    });
  },
  watch: {
    openLeadForm: function openLeadForm() {
      this.dialog = this.openLeadForm;
    },
    lead: function lead() {
      if (this.lead.id) {
        this.form.id = this.lead.id;
        this.form.first_name = this.lead.first_name;
        this.form.last_name = this.lead.last_name;
        this.form.company = this.lead.company;
        this.form.phone = this.lead.phone;
        this.form.email = this.lead.email;
        this.form.message = this.lead.message;
        this.form.brand = this.lead.brand;
        this.form.custom_fields = this.lead.custom_fields;
        this.form.assigned_to = this.lead.assigned_to;
        this.form.lead_type = this.lead.type;
        this.getLeadUsers();
      } else {
        this.form = {
          id: 0,
          first_name: "",
          last_name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
          brand: {},
          custom_fields: {},
          assigned_to: 0
        };
        this.assignedUsers = [];
      }
    }
  },
  props: {
    lead: Object,
    openLeadForm: Boolean,
    brands: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_lead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth/lead */ "./resources/js/services/auth/lead.js");
/* harmony import */ var _LeadForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeadForm.vue */ "./resources/js/views/Lead/LeadForm.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    LeadForm: _LeadForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      search: "",
      filterBrand: {},
      sortBy: "id",
      keys: [{
        key: "id",
        value: "ID/Date"
      }, {
        key: "first_name",
        value: "First Name"
      }, {
        key: "last_name",
        value: "Last Name"
      }, {
        key: "company",
        value: "Company"
      }, {
        key: "email",
        value: "Email"
      }, {
        key: "phone",
        value: "Phone"
      }],
      sortDesc: true,
      page: 1,
      itemsPerPage: 10,
      numberOfPages: 0,
      itemsPerPageArray: [10, 25, 50, 100],
      leads: [],
      selectedLead: {},
      dialogueOpen: false,
      mybrands: []
    };
  },
  methods: {
    closeDialog: function closeDialog() {
      this.dialogueOpen = false;
      this.selectedLead = {};
    },
    openLeadForm: function openLeadForm() {
      this.dialogueOpen = true;
      this.selectedLead = {};
    },
    openLeadFormEdit: function openLeadFormEdit(lead) {
      this.dialogueOpen = true;
      this.selectedLead = lead;
    },
    refreshLeads: function refreshLeads() {
      this.getLeads();
    },
    formerPage: function formerPage() {
      if (this.page > 1) {
        this.page = this.page - 1;
      }
    },
    nextPage: function nextPage() {
      if (this.page < this.numberOfPages) {
        this.page = this.page + 1;
      }
    },
    updateItemsPerPage: function updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    getLeads: function getLeads() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var q, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                q = "?page=" + _this.page;

                if (_this.search != "" && _this.search != null) {
                  q += "&search=" + _this.search;
                }

                if (_this.filterBrand && _this.filterBrand.id > 0) {
                  q += "&brand_id=" + _this.filterBrand.id;
                }

                q += "&perpage=" + _this.itemsPerPage;
                q += "&sortByDesc=" + (_this.sortDesc == true ? 1 : 0);
                q += "&sortCol=" + _this.sortBy;
                _context.next = 8;
                return _services_auth_lead__WEBPACK_IMPORTED_MODULE_1__["default"].getlist(q);

              case 8:
                res = _context.sent;
                //find max page
                _this.leads = res;
                _this.numberOfPages = res.maxPage;
                _this.mybrands = res.brands;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateStatus: function updateStatus(lead, status, type, index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _services_auth_lead__WEBPACK_IMPORTED_MODULE_1__["default"].updateStatus(lead.id, status);

              case 2:
                _this2.$store.commit("setNotification", "Lead Status Updated");

                _this2.getLeads();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.loggedInUser;
    }
  },
  watch: {
    page: function page() {
      this.getLeads();
    },
    itemsPerPage: function itemsPerPage() {
      this.getLeads();
    },
    search: function search() {
      this.page = 1;
      this.getLeads();
    },
    filterBrand: function filterBrand() {
      this.page = 1;
      this.getLeads();
    },
    sortDesc: function sortDesc() {
      this.page = 1;
      this.getLeads();
    },
    sortBy: function sortBy() {
      this.page = 1;
      this.getLeads();
    },
    $route: function $route() {
      if (this.$route.query) {
        if (this.$route.query.openAdd) {
          this.openLeadForm();
        }
      }
    }
  },
  mounted: function mounted() {
    this.getLeads(); //open lead form

    if (this.$route.query) {
      if (this.$route.query.openAdd) {
        this.openLeadForm();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/services/auth/brand.js":
/*!*********************************************!*\
  !*** ./resources/js/services/auth/brand.js ***!
  \*********************************************/
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

var brandservice = /*#__PURE__*/function () {
  function brandservice() {
    _classCallCheck(this, brandservice);
  }

  _createClass(brandservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/brand".concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/brand/".concat(id));
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
                return axios.post('/api/brand', formData).then(function (e) {
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

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/brand/".concat(id));

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

      function get(_x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData.append('_method', 'put');
                _context3.next = 3;
                return axios.post('/api/brand/' + id, formData).then(function (e) {
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

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(formData, brandid) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post('/api/brand/' + brandid + '/user', formData).then(function (e) {
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
                res = _context4.sent;
                return _context4.abrupt("return", res);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function createUser(_x5, _x6) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "getAllCompanyUsers",
    value: function () {
      var _getAllCompanyUsers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", axios.get('/api/company/user/getallusers').then(function (e) {
                  return e.data;
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getAllCompanyUsers() {
        return _getAllCompanyUsers.apply(this, arguments);
      }

      return getAllCompanyUsers;
    }()
  }, {
    key: "assignUser",
    value: function () {
      var _assignUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(formData, brandid) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.post('/api/brand/' + brandid + '/assign-user', formData).then(function (e) {
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
                res = _context6.sent;
                return _context6.abrupt("return", res);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function assignUser(_x7, _x8) {
        return _assignUser.apply(this, arguments);
      }

      return assignUser;
    }()
  }, {
    key: "myBrands",
    value: function () {
      var _myBrands = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios.get('/api/brands/me').then(function (e) {
                  return e.data;
                })["catch"](function (e) {
                  return {
                    status: 0,
                    data: e.response.data.errors
                  };
                });

              case 2:
                res = _context7.sent;
                return _context7.abrupt("return", res);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function myBrands() {
        return _myBrands.apply(this, arguments);
      }

      return myBrands;
    }()
  }]);

  return brandservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new brandservice());

/***/ }),

/***/ "./resources/js/services/auth/lead.js":
/*!********************************************!*\
  !*** ./resources/js/services/auth/lead.js ***!
  \********************************************/
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

var leadservice = /*#__PURE__*/function () {
  function leadservice() {
    _classCallCheck(this, leadservice);
  }

  _createClass(leadservice, [{
    key: "getlist",
    value: function getlist() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return axios.get("/api/leads".concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/leads/".concat(id));
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
                return axios.post('/api/leads', formData).then(function (e) {
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

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/leads/".concat(id));

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

      function get(_x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData.append('_method', 'put');
                _context3.next = 3;
                return axios.post('/api/leads/' + id, formData).then(function (e) {
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

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "updateStatus",
    value: function () {
      var _updateStatus = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(lead_id, status) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.post('/api/leads/' + lead_id + '/' + status).then(function (e) {
                  return {
                    status: 1
                  };
                })["catch"](function (e) {
                  return {
                    status: 0
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

      function updateStatus(_x5, _x6) {
        return _updateStatus.apply(this, arguments);
      }

      return updateStatus;
    }()
  }, {
    key: "assignUser",
    value: function () {
      var _assignUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(lead_id, user_id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.post('/api/leads/' + lead_id + '/user/' + user_id).then(function (e) {
                  return {
                    status: 1
                  };
                })["catch"](function (e) {
                  return {
                    status: 0
                  };
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

      function assignUser(_x7, _x8) {
        return _assignUser.apply(this, arguments);
      }

      return assignUser;
    }()
  }, {
    key: "createCustomer",
    value: function () {
      var _createCustomer = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(lead_id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios.post('/api/leads-create-user/' + lead_id).then(function (e) {
                  return e.data;
                })["catch"](function (e) {
                  return {
                    status: 0
                  };
                });

              case 2:
                res = _context6.sent;
                return _context6.abrupt("return", res);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function createCustomer(_x9) {
        return _createCustomer.apply(this, arguments);
      }

      return createCustomer;
    }()
  }]);

  return leadservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new leadservice());

/***/ }),

/***/ "./resources/js/services/auth/lead_type.js":
/*!*************************************************!*\
  !*** ./resources/js/services/auth/lead_type.js ***!
  \*************************************************/
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

var lead_typeservice = /*#__PURE__*/function () {
  function lead_typeservice() {
    _classCallCheck(this, lead_typeservice);
  }

  _createClass(lead_typeservice, [{
    key: "getlist",
    value: function getlist(params) {
      return axios.get("/api/lead_type".concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var query = _ref.query,
          id = _ref.id;
      return axios["delete"]("/api/lead_type/".concat(id));
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
                return axios.post('/api/lead_type', formData).then(function (e) {
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

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/lead_type/".concat(id));

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

      function get(_x2) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(formData, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData.append('_method', 'put');
                _context3.next = 3;
                return axios.post('/api/lead_type/' + id, formData).then(function (e) {
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

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }]);

  return lead_typeservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new lead_typeservice());

/***/ }),

/***/ "./resources/js/services/auth/leadassigned.js":
/*!****************************************************!*\
  !*** ./resources/js/services/auth/leadassigned.js ***!
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

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var leadassignedservice = /*#__PURE__*/function () {
  function leadassignedservice() {
    _classCallCheck(this, leadassignedservice);
  }

  _createClass(leadassignedservice, [{
    key: "getlist",
    value: function getlist(lead_id, params) {
      return axios.get("/api/leads/".concat(lead_id, "/assigned").concat(params)).then(function (response) {
        return response.data;
      })["catch"](function (error) {
        return error;
      });
    }
  }, {
    key: "delete",
    value: function _delete(_ref) {
      var lead_id = _ref.lead_id,
          id = _ref.id;
      return axios["delete"]("/api/leads/".concat(lead_id, "/assigned/").concat(id));
    }
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(lead_id, formData) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("/api/leads/".concat(lead_id, "/assigned"), formData).then(function (e) {
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
      var _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(lead_id, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get("/api/leads/".concat(lead_id, "/assigned/").concat(id));

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
      var _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(formData, lead_id, id) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData.append('_method', 'put');
                _context3.next = 3;
                return axios.post("/api/leads/".concat(lead_id, "/assigned/").concat(id), formData).then(function (e) {
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
  }]);

  return leadassignedservice;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new leadassignedservice());

/***/ }),

/***/ "./resources/js/views/Lead/LeadForm.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Lead/LeadForm.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LeadForm_vue_vue_type_template_id_1df5eba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeadForm.vue?vue&type=template&id=1df5eba4& */ "./resources/js/views/Lead/LeadForm.vue?vue&type=template&id=1df5eba4&");
/* harmony import */ var _LeadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeadForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Lead/LeadForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LeadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeadForm_vue_vue_type_template_id_1df5eba4___WEBPACK_IMPORTED_MODULE_0__.render,
  _LeadForm_vue_vue_type_template_id_1df5eba4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Lead/LeadForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Lead/List.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Lead/List.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_26447102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=26447102& */ "./resources/js/views/Lead/List.vue?vue&type=template&id=26447102&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/views/Lead/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_26447102___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_26447102___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Lead/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Lead/LeadForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Lead/LeadForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LeadForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/LeadForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Lead/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Lead/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Lead/LeadForm.vue?vue&type=template&id=1df5eba4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Lead/LeadForm.vue?vue&type=template&id=1df5eba4& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadForm_vue_vue_type_template_id_1df5eba4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadForm_vue_vue_type_template_id_1df5eba4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadForm_vue_vue_type_template_id_1df5eba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LeadForm.vue?vue&type=template&id=1df5eba4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/LeadForm.vue?vue&type=template&id=1df5eba4&");


/***/ }),

/***/ "./resources/js/views/Lead/List.vue?vue&type=template&id=26447102&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Lead/List.vue?vue&type=template&id=26447102& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_26447102___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_26447102___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_26447102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=26447102& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/List.vue?vue&type=template&id=26447102&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/LeadForm.vue?vue&type=template&id=1df5eba4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/LeadForm.vue?vue&type=template&id=1df5eba4& ***!
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
    "v-dialog",
    {
      attrs: {
        fullscreen: "",
        "hide-overlay": "",
        transition: "dialog-bottom-transition",
      },
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
          _c(
            "v-toolbar",
            { attrs: { dark: "", color: "primary" } },
            [
              _c(
                "v-btn",
                { attrs: { icon: "", dark: "" }, on: { click: _vm.closeMe } },
                [_c("v-icon", [_vm._v("mdi-close")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [
                _vm._v(
                  "Lead " + _vm._s(_vm.form.id > 0 ? "#" + _vm.form.id : "")
                ),
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-toolbar-items",
                [
                  _vm.user.role_id == 2 ||
                  _vm.user.role_id == 9 ||
                  _vm.user.role_id == 4
                    ? _c(
                        "v-btn",
                        {
                          attrs: { dark: "", text: "" },
                          on: { click: _vm.updateLead },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(
                                _vm.form.id > 0 ? "Update Lead" : "Save Lead"
                              ) +
                              "\n        "
                          ),
                        ]
                      )
                    : _vm._e(),
                ],
                1
              ),
            ],
            1
          ),
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
                        { attrs: { cols: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Email*", required: "" },
                            model: {
                              value: _vm.form.email,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "email", $$v)
                              },
                              expression: "form.email",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "First Name*", required: "" },
                            model: {
                              value: _vm.form.first_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "first_name", $$v)
                              },
                              expression: "form.first_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Last Name*", required: "" },
                            model: {
                              value: _vm.form.last_name,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "last_name", $$v)
                              },
                              expression: "form.last_name",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Company", required: "" },
                            model: {
                              value: _vm.form.company,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "company", $$v)
                              },
                              expression: "form.company",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Phone" },
                            model: {
                              value: _vm.form.phone,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "phone", $$v)
                              },
                              expression: "form.phone",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-select", {
                            attrs: {
                              required: "",
                              items: _vm.lead_types,
                              "item-text": "type",
                              "item-value": "id",
                              label: "Lead Type*",
                              "return-object": "",
                            },
                            model: {
                              value: _vm.form.lead_type,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "lead_type", $$v)
                              },
                              expression: "form.lead_type",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Message" },
                            model: {
                              value: _vm.form.message,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "message", $$v)
                              },
                              expression: "form.message",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-select", {
                            attrs: {
                              required: "",
                              items: _vm.brands,
                              "item-text": "brand_name",
                              "item-value": "id",
                              label: "Brand*",
                              hint:
                                _vm.form.brand.brand_name +
                                ", " +
                                _vm.form.brand.brand_code,
                              "persistent-hint": "",
                              "return-object": "",
                            },
                            model: {
                              value: _vm.form.brand,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "brand", $$v)
                              },
                              expression: "form.brand",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.form.id > 0
                        ? _c("v-col", { attrs: { cols: "12" } }, [
                            _c("h4", [_vm._v("Custom Fields")]),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.form.custom_fields, function (cf, cfk) {
                        return _c(
                          "v-col",
                          { key: cfk, attrs: { cols: "4" } },
                          [
                            _c("v-text-field", {
                              attrs: { readonly: "", label: cfk, value: cf },
                            }),
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _vm.form.id > 0
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _vm.form.id > 0 && _vm.lead.lead_status == 3
                                ? _c("v-divider")
                                : _vm._e(),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.id > 0 &&
                      _vm.lead.lead_status != 0 &&
                      _vm.lead.lead_status != 2
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-2 white--text",
                                  attrs: {
                                    link: "",
                                    to: {
                                      name: "auth.payment.create",
                                      params: { id: _vm.form.id },
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
                                    "\n              Goto Client Summary\n            "
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.id > 0 &&
                      (_vm.user.role_id == 2 ||
                        _vm.user.role_id == 9 ||
                        _vm.user.role_id == 4)
                        ? _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  required: "",
                                  items: _vm.companyusers,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Company Sales/Support",
                                },
                                model: {
                                  value: _vm.form.assigned_to,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "assigned_to", $$v)
                                  },
                                  expression: "form.assigned_to",
                                },
                              }),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.id > 0 &&
                      (_vm.user.role_id == 2 ||
                        _vm.user.role_id == 9 ||
                        _vm.user.role_id == 4)
                        ? _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "ma-2 white--text",
                                  attrs: { color: "success" },
                                  on: { click: _vm.assignUser },
                                },
                                [
                                  _c(
                                    "v-icon",
                                    { attrs: { left: "", dark: "" } },
                                    [_vm._v(" mdi-account ")]
                                  ),
                                  _vm._v(
                                    "\n              Assign User to this Lead\n            "
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.id > 0 &&
                      (_vm.user.role_id == 2 ||
                        _vm.user.role_id == 9 ||
                        _vm.user.role_id == 4)
                        ? _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _vm._l(10, function (i) {
                                return _c("v-skeleton-loader", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.fetchingLeadUsers,
                                      expression: "fetchingLeadUsers",
                                    },
                                  ],
                                  key: i,
                                  attrs: { type: "list-item" },
                                })
                              }),
                              _vm._v(" "),
                              !_vm.fetchingLeadUsers
                                ? _c("v-simple-table", {
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function () {
                                            return [
                                              _c("thead", [
                                                _c("tr", [
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      Name\n                    "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "th",
                                                    {
                                                      staticClass: "text-left",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                      Assigned@\n                    "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c("th"),
                                                ]),
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "tbody",
                                                _vm._l(
                                                  _vm.assignedUsers,
                                                  function (item) {
                                                    return _c(
                                                      "tr",
                                                      { key: item.id },
                                                      [
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.user.email
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("td", [
                                                          _vm._v(
                                                            _vm._s(
                                                              item.created_at_formatted
                                                            )
                                                          ),
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "td",
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    "error",
                                                                  fab: "",
                                                                  "x-small": "",
                                                                  dark: "",
                                                                },
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.deletassigneduser(
                                                                        item
                                                                      )
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                _c("v-icon", [
                                                                  _vm._v(
                                                                    "mdi-delete-outline"
                                                                  ),
                                                                ]),
                                                              ],
                                                              1
                                                            ),
                                                          ],
                                                          1
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              ),
                                            ]
                                          },
                                          proxy: true,
                                        },
                                      ],
                                      null,
                                      false,
                                      144316870
                                    ),
                                  })
                                : _vm._e(),
                            ],
                            2
                          )
                        : _vm._e(),
                    ],
                    2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/List.vue?vue&type=template&id=26447102&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lead/List.vue?vue&type=template&id=26447102& ***!
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
  return _c(
    "div",
    { staticClass: "ml-2" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-toolbar",
            {
              staticClass: "mb-1",
              attrs: { dark: "", color: "blue darken-3" },
            },
            [
              _c("v-text-field", {
                attrs: {
                  clearable: "",
                  flat: "",
                  "solo-inverted": "",
                  "hide-details": "",
                  "prepend-inner-icon": "mdi-magnify",
                  label: "Search By Email, Name, Phone, Message",
                },
                model: {
                  value: _vm.search,
                  callback: function ($$v) {
                    _vm.search = $$v
                  },
                  expression: "search",
                },
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  items: _vm.mybrands,
                  "item-text": "brand_name",
                  "item-value": "id",
                  label: "Filter By Brand",
                  clearable: "",
                  "return-object": "",
                  flat: "",
                  "solo-inverted": "",
                  "hide-details": "",
                  "prepend-inner-icon": "mdi-watermark",
                },
                model: {
                  value: _vm.filterBrand,
                  callback: function ($$v) {
                    _vm.filterBrand = $$v
                  },
                  expression: "filterBrand",
                },
              }),
              _vm._v(" "),
              _vm.$vuetify.breakpoint.mdAndUp
                ? [
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        flat: "",
                        "solo-inverted": "",
                        "hide-details": "",
                        items: _vm.keys,
                        "item-text": "value",
                        "item-value": "key",
                        "prepend-inner-icon": "mdi-magnify",
                        label: "Sort by",
                      },
                      model: {
                        value: _vm.sortBy,
                        callback: function ($$v) {
                          _vm.sortBy = $$v
                        },
                        expression: "sortBy",
                      },
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-btn-toggle",
                      {
                        attrs: { mandatory: "" },
                        model: {
                          value: _vm.sortDesc,
                          callback: function ($$v) {
                            _vm.sortDesc = $$v
                          },
                          expression: "sortDesc",
                        },
                      },
                      [
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              large: "",
                              depressed: "",
                              color: "blue",
                              value: false,
                            },
                          },
                          [_c("v-icon", [_vm._v("mdi-arrow-up")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: {
                              large: "",
                              depressed: "",
                              color: "blue",
                              value: true,
                            },
                          },
                          [_c("v-icon", [_vm._v("mdi-arrow-down")])],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                : _vm._e(),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "3" } },
            [
              _c("h2", [_vm._v("New/Pending")]),
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-list-item-group",
                    _vm._l(_vm.leads.new, function (item, i) {
                      return _c(
                        "v-list-item",
                        { key: i },
                        [
                          _c(
                            "v-list-item-content",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.openLeadFormEdit(item)
                                },
                              },
                            },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-chip",
                                    {
                                      attrs: {
                                        color: "pink",
                                        label: "",
                                        "text-color": "white",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  #" +
                                          _vm._s(item.brand_code) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.email) +
                                      "\n              "
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    item.first_name + " " + item.last_name
                                  ),
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                    attrs: { icon: "" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.updateStatus(
                                                          item,
                                                          3,
                                                          "new",
                                                          i
                                                        )
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
                                                  {
                                                    attrs: {
                                                      color: "grey lighten-1",
                                                    },
                                                  },
                                                  [_vm._v("mdi-arrow-right")]
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
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Move to Follow Up")]),
                                ]
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
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "3" } },
            [
              _c("h2", [_vm._v("Follow Up")]),
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-list-item-group",
                    _vm._l(_vm.leads.followup, function (item, i) {
                      return _c(
                        "v-list-item",
                        { key: i },
                        [
                          _c(
                            "v-list-item-content",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.openLeadFormEdit(item)
                                },
                              },
                            },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-chip",
                                    {
                                      attrs: {
                                        color: "pink",
                                        label: "",
                                        "text-color": "white",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  #" +
                                          _vm._s(item.brand_code) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.email) +
                                      "\n              "
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    item.first_name + " " + item.last_name
                                  ),
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                    attrs: { icon: "" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.updateStatus(
                                                          item,
                                                          1,
                                                          "followup",
                                                          i
                                                        )
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
                                                  {
                                                    attrs: {
                                                      color: "grey lighten-1",
                                                    },
                                                  },
                                                  [_vm._v("mdi-arrow-right")]
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
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Move to Paid")]),
                                ]
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
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "3" } },
            [
              _c("h2", [_vm._v("Paid")]),
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-list-item-group",
                    _vm._l(_vm.leads.paid, function (item, i) {
                      return _c(
                        "v-list-item",
                        { key: i },
                        [
                          _c(
                            "v-list-item-content",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.openLeadFormEdit(item)
                                },
                              },
                            },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-chip",
                                    {
                                      attrs: {
                                        color: "pink",
                                        label: "",
                                        "text-color": "white",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  #" +
                                          _vm._s(item.brand_code) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.email) +
                                      "\n              "
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    item.first_name + " " + item.last_name
                                  ),
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                    attrs: { icon: "" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.updateStatus(
                                                          item,
                                                          3,
                                                          "paid",
                                                          i
                                                        )
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
                                                  {
                                                    attrs: {
                                                      color: "grey lighten-1",
                                                    },
                                                  },
                                                  [_vm._v("mdi-arrow-left")]
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
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Move to Followup")]),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                    attrs: { icon: "" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.updateStatus(
                                                          item,
                                                          2,
                                                          "paid",
                                                          i
                                                        )
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
                                                  {
                                                    attrs: {
                                                      color: "grey lighten-1",
                                                    },
                                                  },
                                                  [_vm._v("mdi-arrow-right")]
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
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Move to Junk")]),
                                ]
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
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "3" } },
            [
              _c("h2", [_vm._v("Junk")]),
              _vm._v(" "),
              _c(
                "v-list",
                { attrs: { flat: "" } },
                [
                  _c(
                    "v-list-item-group",
                    _vm._l(_vm.leads.junk, function (item, i) {
                      return _c(
                        "v-list-item",
                        { key: i },
                        [
                          _c(
                            "v-list-item-content",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.openLeadFormEdit(item)
                                },
                              },
                            },
                            [
                              _c(
                                "v-list-item-title",
                                [
                                  _c(
                                    "v-chip",
                                    {
                                      attrs: {
                                        color: "pink",
                                        label: "",
                                        "text-color": "white",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  #" +
                                          _vm._s(item.brand_code) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  _c("br"),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.email) +
                                      "\n              "
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", {
                                domProps: {
                                  innerHTML: _vm._s(
                                    item.first_name + " " + item.last_name
                                  ),
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-action",
                            [
                              _c(
                                "v-tooltip",
                                {
                                  attrs: { bottom: "" },
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
                                                    attrs: { icon: "" },
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.updateStatus(
                                                          item,
                                                          1,
                                                          "junk",
                                                          i
                                                        )
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
                                                  {
                                                    attrs: {
                                                      color: "grey lighten-1",
                                                    },
                                                  },
                                                  [_vm._v("mdi-arrow-left")]
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
                                [
                                  _vm._v(" "),
                                  _c("span", [_vm._v("Move to Paid")]),
                                ]
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
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "mt-2", attrs: { align: "center", justify: "center" } },
        [
          _c("span", { staticClass: "grey--text" }, [_vm._v("Leads per page")]),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: { "offset-y": "" },
              scopedSlots: _vm._u([
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
                              staticClass: "ml-2",
                              attrs: { dark: "", text: "", color: "primary" },
                            },
                            "v-btn",
                            attrs,
                            false
                          ),
                          on
                        ),
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.itemsPerPage) +
                              "\n          "
                          ),
                          _c("v-icon", [_vm._v("mdi-chevron-down")]),
                        ],
                        1
                      ),
                    ]
                  },
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "v-list",
                _vm._l(_vm.itemsPerPageArray, function (number, index) {
                  return _c(
                    "v-list-item",
                    {
                      key: index,
                      on: {
                        click: function ($event) {
                          return _vm.updateItemsPerPage(number)
                        },
                      },
                    },
                    [_c("v-list-item-title", [_vm._v(_vm._s(number))])],
                    1
                  )
                }),
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("span", { staticClass: "mr-4 grey--text" }, [
            _vm._v(
              "\n      Page " +
                _vm._s(_vm.page) +
                " of " +
                _vm._s(_vm.numberOfPages) +
                "\n    "
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mr-1",
              attrs: { fab: "", dark: "", color: "blue darken-3" },
              on: { click: _vm.formerPage },
            },
            [_c("v-icon", [_vm._v("mdi-chevron-left")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ml-1",
              attrs: { fab: "", dark: "", color: "blue darken-3" },
              on: { click: _vm.nextPage },
            },
            [_c("v-icon", [_vm._v("mdi-chevron-right")])],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _vm.user.role_id == 2
        ? _c(
            "v-btn",
            {
              attrs: {
                color: "pink",
                dark: "",
                fixed: "",
                bottom: "",
                right: "",
                fab: "",
              },
              on: { click: _vm.openLeadForm },
            },
            [_c("v-icon", [_vm._v("mdi-plus")])],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("LeadForm", {
        attrs: {
          brands: _vm.mybrands,
          openLeadForm: _vm.dialogueOpen,
          lead: _vm.selectedLead,
        },
        on: {
          "close-leaddialog": _vm.closeDialog,
          "refresh-leads": _vm.refreshLeads,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);