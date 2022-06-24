"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9702],{544:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(7757),a=r.n(n);function s(t,e,r,n,a,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){s(o,n,a,i,c,"next",t)}function c(t){s(o,n,a,i,c,"throw",t)}i(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=r(9669);const u=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,s,u,l,d,f,v,p;return e=t,r=[{key:"getlist",value:function(t){return c.get("/api/brand".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/brand/".concat(e))}},{key:"create",value:(p=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/brand",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t){return p.apply(this,arguments)})},{key:"get",value:(v=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/api/brand/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.data);case 4:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)})},{key:"update",value:(f=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/brand/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),function(t,e){return f.apply(this,arguments)})},{key:"createUser",value:(d=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/brand/"+r+"/user",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return d.apply(this,arguments)})},{key:"getAllCompanyUsers",value:(l=o(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.get("/api/company/user/getallusers").then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)})},{key:"assignUser",value:(u=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/brand/"+r+"/assign-user",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return u.apply(this,arguments)})},{key:"myBrands",value:(s=o(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/api/brands/me").then((function(t){return t.data})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),function(){return s.apply(this,arguments)})}],r&&i(e.prototype,r),n&&i(e,n),t}())},9556:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(7757),a=r.n(n);function s(t,e,r,n,a,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){s(o,n,a,i,c,"next",t)}function c(t){s(o,n,a,i,c,"throw",t)}i(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=r(9669);const u=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,s,u,l,d,f,v;return e=t,r=[{key:"getlist",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return c.get("/api/leads".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/leads/".concat(e))}},{key:"create",value:(v=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/leads",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)})},{key:"get",value:(f=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/api/leads/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.data);case 4:case"end":return t.stop()}}),t)}))),function(t){return f.apply(this,arguments)})},{key:"update",value:(d=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/leads/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),function(t,e){return d.apply(this,arguments)})},{key:"updateStatus",value:(l=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/leads/"+e+"/"+r).then((function(t){return{status:1}})).catch((function(t){return{status:0}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return l.apply(this,arguments)})},{key:"assignUser",value:(u=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/leads/"+e+"/user/"+r).then((function(t){return{status:1}})).catch((function(t){return{status:0}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return u.apply(this,arguments)})},{key:"createCustomer",value:(s=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/leads-create-user/"+e).then((function(t){return t.data})).catch((function(t){return{status:0}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t){return s.apply(this,arguments)})}],r&&i(e.prototype,r),n&&i(e,n),t}())},937:(t,e,r)=>{r.d(e,{Z:()=>u});var n=r(7757),a=r.n(n);function s(t,e,r,n,a,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){s(o,n,a,i,c,"next",t)}function c(t){s(o,n,a,i,c,"throw",t)}i(void 0)}))}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=r(9669);const u=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,s,u,l;return e=t,r=[{key:"getlist",value:function(t){return c.get("/api/lead_type".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"delete",value:function(t){t.query;var e=t.id;return c.delete("/api/lead_type/".concat(e))}},{key:"create",value:(l=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.post("/api/lead_type",e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),function(t){return l.apply(this,arguments)})},{key:"get",value:(u=o(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/api/lead_type/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.data);case 4:case"end":return t.stop()}}),t)}))),function(t){return u.apply(this,arguments)})},{key:"update",value:(s=o(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,c.post("/api/lead_type/"+r,e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),function(t,e){return s.apply(this,arguments)})}],r&&i(e.prototype,r),n&&i(e,n),t}())},9702:(t,e,r)=>{r.r(e),r.d(e,{default:()=>w});var n=r(7757),a=r.n(n),s=r(9556),o=r(937),i=r(544),c=r(6455),u=r.n(c);function l(t,e,r,n,a,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function o(t){l(s,n,a,o,i,"next",t)}function i(t){l(s,n,a,o,i,"throw",t)}o(void 0)}))}}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=r(9669);const p=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n,s,o,i;return e=t,r=[{key:"getlist",value:function(t,e){return v.get("/api/leads/".concat(t,"/assigned").concat(e)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"delete",value:function(t){var e=t.lead_id,r=t.id;return v.delete("/api/leads/".concat(e,"/assigned/").concat(r))}},{key:"create",value:(i=d(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.post("/api/leads/".concat(e,"/assigned"),r).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return i.apply(this,arguments)})},{key:"get",value:(o=d(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/api/leads/".concat(e,"/assigned/").concat(r));case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)}))),function(t,e){return o.apply(this,arguments)})},{key:"update",value:(s=d(a().mark((function t(e,r,n){var s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.append("_method","put"),t.next=3,v.post("/api/leads/".concat(r,"/assigned/").concat(n),e).then((function(t){return{status:1,data:t.data.data}})).catch((function(t){return{status:0,data:t.response.data.errors}}));case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)}))),function(t,e,r){return s.apply(this,arguments)})}],r&&f(e.prototype,r),n&&f(e,n),t}());function m(t,e,r,n,a,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function o(t){m(s,n,a,o,i,"next",t)}function i(t){m(s,n,a,o,i,"throw",t)}o(void 0)}))}}const _={data:function(){return{dialog:!1,companyusers:[],assignedUsers:[],lead_types:[],fetchingLeadUsers:!1,form:{id:0,first_name:"",last_name:"",company:"",phone:"",email:"",message:"",brand:{},custom_fields:{},assigned_to:0,lead_type:{}}}},methods:{deletassigneduser:function(t){var e=this;return h(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){if(t.isConfirmed)return!0}));case 2:if(!r.sent){r.next=7;break}return r.next=6,p.delete({lead_id:t.lead_id,id:t.id});case 6:u().fire("Deleted!","Your record has been deleted.","success");case 7:e.closeMe();case 8:case"end":return r.stop()}}),r)})))()},getLeadUsers:function(){var t=this;return h(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.form.id>0)){e.next=6;break}return t.fetchingLeadUsers=!0,e.next=4,p.getlist(t.form.id,"").then((function(t){return t.data}));case 4:t.assignedUsers=e.sent,t.fetchingLeadUsers=!1;case 6:case"end":return e.stop()}}),e)})))()},assignUser:function(){var t=this;return h(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.form.id>0&&t.form.assigned_to>0)){e.next=8;break}return(r=new FormData).append("user_id",t.form.assigned_to),e.next=5,p.create(t.form.id,r);case 5:t.$store.commit("setNotification","User Assigned"),t.$emit("refresh-leads"),t.getLeadUsers();case 8:case"end":return e.stop()}}),e)})))()},closeMe:function(){this.dialog=!1,this.$emit("close-leaddialog")},updateLead:function(){var t=this;return h(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(r=new FormData).append("first_name",t.form.first_name),r.append("last_name",t.form.last_name),r.append("company",t.form.company),r.append("phone",t.form.phone),r.append("email",t.form.email),r.append("message",t.form.message),r.append("brand_id",t.form.brand.id),r.append("lead_type",t.form.lead_type.id),!(t.form.id>0)){e.next=16;break}return e.next=13,s.Z.update(r,t.form.id);case 13:t.$store.commit("setNotification","Lead Updated"),e.next=19;break;case 16:return e.next=18,s.Z.create(r);case 18:t.$store.commit("setNotification","Lead Created");case 19:t.$emit("refresh-leads"),t.closeMe(),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),t.$store.commit("setNotification","Lead Data Invalid");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})))()}},computed:{user:function(){return this.$store.getters.loggedInUser}},mounted:function(){var t=this;i.Z.getAllCompanyUsers().then((function(e){t.companyusers=e})),o.Z.getlist("").then((function(e){t.lead_types=e.data}))},watch:{openLeadForm:function(){this.dialog=this.openLeadForm},lead:function(){this.lead.id?(this.form.id=this.lead.id,this.form.first_name=this.lead.first_name,this.form.last_name=this.lead.last_name,this.form.company=this.lead.company,this.form.phone=this.lead.phone,this.form.email=this.lead.email,this.form.message=this.lead.message,this.form.brand=this.lead.brand,this.form.custom_fields=this.lead.custom_fields,this.form.assigned_to=this.lead.assigned_to,this.form.lead_type=this.lead.type,this.getLeadUsers()):(this.form={id:0,first_name:"",last_name:"",company:"",phone:"",email:"",message:"",brand:{},custom_fields:{},assigned_to:0},this.assignedUsers=[])}},props:{lead:Object,openLeadForm:Boolean,brands:Array}};var b=r(1900);function g(t,e,r,n,a,s,o){try{var i=t[s](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function o(t){g(s,n,a,o,i,"next",t)}function i(t){g(s,n,a,o,i,"throw",t)}o(void 0)}))}}const k={components:{LeadForm:(0,b.Z)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeMe}},[r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar-title",[t._v("Lead "+t._s(t.form.id>0?"#"+t.form.id:""))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",[2==t.user.role_id||9==t.user.role_id||4==t.user.role_id?r("v-btn",{attrs:{dark:"",text:""},on:{click:t.updateLead}},[t._v("\n          "+t._s(t.form.id>0?"Update Lead":"Save Lead")+"\n        ")]):t._e()],1)],1),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"First Name*",required:""},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Last Name*",required:""},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Company",required:""},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-text-field",{attrs:{label:"Phone"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-select",{attrs:{required:"",items:t.lead_types,"item-text":"type","item-value":"id",label:"Lead Type*","return-object":""},model:{value:t.form.lead_type,callback:function(e){t.$set(t.form,"lead_type",e)},expression:"form.lead_type"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{attrs:{label:"Message"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{required:"",items:t.brands,"item-text":"brand_name","item-value":"id",label:"Brand*",hint:t.form.brand.brand_name+", "+t.form.brand.brand_code,"persistent-hint":"","return-object":""},model:{value:t.form.brand,callback:function(e){t.$set(t.form,"brand",e)},expression:"form.brand"}})],1),t._v(" "),t.form.id>0?r("v-col",{attrs:{cols:"12"}},[r("h4",[t._v("Custom Fields")])]):t._e(),t._v(" "),t._l(t.form.custom_fields,(function(t,e){return r("v-col",{key:e,attrs:{cols:"4"}},[r("v-text-field",{attrs:{readonly:"",label:e,value:t}})],1)})),t._v(" "),t.form.id>0?r("v-col",{attrs:{cols:"12"}},[t.form.id>0&&3==t.lead.lead_status?r("v-divider"):t._e()],1):t._e(),t._v(" "),t.form.id>0&&0!=t.lead.lead_status&&2!=t.lead.lead_status?r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"ma-2 white--text",attrs:{link:"",to:{name:"auth.payment.create",params:{id:t.form.id}},color:"blue-grey"}},[r("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-account ")]),t._v("\n              Goto Client Summary\n            ")],1)],1):t._e(),t._v(" "),t.form.id>0&&(2==t.user.role_id||9==t.user.role_id||4==t.user.role_id)?r("v-col",{attrs:{cols:"6"}},[r("v-select",{attrs:{required:"",items:t.companyusers,"item-text":"name","item-value":"id",label:"Company Sales/Support"},model:{value:t.form.assigned_to,callback:function(e){t.$set(t.form,"assigned_to",e)},expression:"form.assigned_to"}})],1):t._e(),t._v(" "),t.form.id>0&&(2==t.user.role_id||9==t.user.role_id||4==t.user.role_id)?r("v-col",{attrs:{cols:"6"}},[r("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"success"},on:{click:t.assignUser}},[r("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-account ")]),t._v("\n              Assign User to this Lead\n            ")],1)],1):t._e(),t._v(" "),t.form.id>0&&(2==t.user.role_id||9==t.user.role_id||4==t.user.role_id)?r("v-col",{attrs:{cols:"12"}},[t._l(10,(function(e){return r("v-skeleton-loader",{directives:[{name:"show",rawName:"v-show",value:t.fetchingLeadUsers,expression:"fetchingLeadUsers"}],key:e,attrs:{type:"list-item"}})})),t._v(" "),t.fetchingLeadUsers?t._e():r("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("\n                      Name\n                    ")]),t._v(" "),r("th",{staticClass:"text-left"},[t._v("\n                      Assigned@\n                    ")]),t._v(" "),r("th")])]),t._v(" "),r("tbody",t._l(t.assignedUsers,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.user.email))]),t._v(" "),r("td",[t._v(t._s(e.created_at_formatted))]),t._v(" "),r("td",[r("v-btn",{attrs:{color:"error",fab:"","x-small":"",dark:""},on:{click:function(r){return t.deletassigneduser(e)}}},[r("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)]},proxy:!0}],null,!1,144316870)})],2):t._e()],2)],1)],1)],1)],1)}),[],!1,null,null,null).exports},data:function(){return{search:"",filterBrand:{},sortBy:"id",keys:[{key:"id",value:"ID/Date"},{key:"first_name",value:"First Name"},{key:"last_name",value:"Last Name"},{key:"company",value:"Company"},{key:"email",value:"Email"},{key:"phone",value:"Phone"}],sortDesc:!0,page:1,itemsPerPage:10,numberOfPages:0,itemsPerPageArray:[10,25,50,100],leads:[],selectedLead:{},dialogueOpen:!1,mybrands:[]}},methods:{closeDialog:function(){this.dialogueOpen=!1,this.selectedLead={}},openLeadForm:function(){this.dialogueOpen=!0,this.selectedLead={}},openLeadFormEdit:function(t){this.dialogueOpen=!0,this.selectedLead=t},refreshLeads:function(){this.getLeads()},formerPage:function(){this.page>1&&(this.page=this.page-1)},nextPage:function(){this.page<this.numberOfPages&&(this.page=this.page+1)},updateItemsPerPage:function(t){this.itemsPerPage=t},getLeads:function(){var t=this;return y(a().mark((function e(){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="?page="+t.page,""!=t.search&&null!=t.search&&(r+="&search="+t.search),t.filterBrand&&t.filterBrand.id>0&&(r+="&brand_id="+t.filterBrand.id),r+="&perpage="+t.itemsPerPage,r+="&sortByDesc="+(1==t.sortDesc?1:0),r+="&sortCol="+t.sortBy,e.next=8,s.Z.getlist(r);case 8:n=e.sent,t.leads=n,t.numberOfPages=n.maxPage,t.mybrands=n.brands;case 12:case"end":return e.stop()}}),e)})))()},updateStatus:function(t,e,r,n){var o=this;return y(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.Z.updateStatus(t.id,e);case 2:o.$store.commit("setNotification","Lead Status Updated"),o.getLeads();case 4:case"end":return r.stop()}}),r)})))()}},computed:{user:function(){return this.$store.getters.loggedInUser}},watch:{page:function(){this.getLeads()},itemsPerPage:function(){this.getLeads()},search:function(){this.page=1,this.getLeads()},filterBrand:function(){this.page=1,this.getLeads()},sortDesc:function(){this.page=1,this.getLeads()},sortBy:function(){this.page=1,this.getLeads()},$route:function(){this.$route.query&&this.$route.query.openAdd&&this.openLeadForm()}},mounted:function(){this.getLeads(),this.$route.query&&this.$route.query.openAdd&&this.openLeadForm()}};const w=(0,b.Z)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-2"},[r("v-row",[r("v-toolbar",{staticClass:"mb-1",attrs:{dark:"",color:"blue darken-3"}},[r("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",label:"Search By Email, Name, Phone, Message"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-select",{attrs:{items:t.mybrands,"item-text":"brand_name","item-value":"id",label:"Filter By Brand",clearable:"","return-object":"",flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-watermark"},model:{value:t.filterBrand,callback:function(e){t.filterBrand=e},expression:"filterBrand"}}),t._v(" "),t.$vuetify.breakpoint.mdAndUp?[r("v-spacer"),t._v(" "),r("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"",items:t.keys,"item-text":"value","item-value":"key","prepend-inner-icon":"mdi-magnify",label:"Sort by"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}},[r("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!1}},[r("v-icon",[t._v("mdi-arrow-up")])],1),t._v(" "),r("v-btn",{attrs:{large:"",depressed:"",color:"blue",value:!0}},[r("v-icon",[t._v("mdi-arrow-down")])],1)],1)]:t._e()],2)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("h2",[t._v("New/Pending")]),t._v(" "),r("v-list",{attrs:{flat:""}},[r("v-list-item-group",t._l(t.leads.new,(function(e,n){return r("v-list-item",{key:n},[r("v-list-item-content",{on:{click:function(r){return t.openLeadFormEdit(e)}}},[r("v-list-item-title",[r("v-chip",{attrs:{color:"pink",label:"","text-color":"white"}},[t._v("\n                  #"+t._s(e.brand_code)+" ")]),r("br"),t._v("\n                "+t._s(e.email)+"\n              ")],1),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.first_name+" "+e.last_name)}})],1),t._v(" "),r("v-list-item-action",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,o=a.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(r){return t.updateStatus(e,3,"new",n)}}},"v-btn",o,!1),s),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-arrow-right")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Move to Follow Up")])])],1)],1)})),1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h2",[t._v("Follow Up")]),t._v(" "),r("v-list",{attrs:{flat:""}},[r("v-list-item-group",t._l(t.leads.followup,(function(e,n){return r("v-list-item",{key:n},[r("v-list-item-content",{on:{click:function(r){return t.openLeadFormEdit(e)}}},[r("v-list-item-title",[r("v-chip",{attrs:{color:"pink",label:"","text-color":"white"}},[t._v("\n                  #"+t._s(e.brand_code)+" ")]),r("br"),t._v("\n                "+t._s(e.email)+"\n              ")],1),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.first_name+" "+e.last_name)}})],1),t._v(" "),r("v-list-item-action",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,o=a.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(r){return t.updateStatus(e,1,"followup",n)}}},"v-btn",o,!1),s),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-arrow-right")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Move to Paid")])])],1)],1)})),1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h2",[t._v("Paid")]),t._v(" "),r("v-list",{attrs:{flat:""}},[r("v-list-item-group",t._l(t.leads.paid,(function(e,n){return r("v-list-item",{key:n},[r("v-list-item-content",{on:{click:function(r){return t.openLeadFormEdit(e)}}},[r("v-list-item-title",[r("v-chip",{attrs:{color:"pink",label:"","text-color":"white"}},[t._v("\n                  #"+t._s(e.brand_code)+" ")]),r("br"),t._v("\n                "+t._s(e.email)+"\n              ")],1),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.first_name+" "+e.last_name)}})],1),t._v(" "),r("v-list-item-action",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,o=a.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(r){return t.updateStatus(e,3,"paid",n)}}},"v-btn",o,!1),s),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-arrow-left")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Move to Followup")])]),t._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,o=a.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(r){return t.updateStatus(e,2,"paid",n)}}},"v-btn",o,!1),s),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-arrow-right")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Move to Junk")])])],1)],1)})),1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h2",[t._v("Junk")]),t._v(" "),r("v-list",{attrs:{flat:""}},[r("v-list-item-group",t._l(t.leads.junk,(function(e,n){return r("v-list-item",{key:n},[r("v-list-item-content",{on:{click:function(r){return t.openLeadFormEdit(e)}}},[r("v-list-item-title",[r("v-chip",{attrs:{color:"pink",label:"","text-color":"white"}},[t._v("\n                  #"+t._s(e.brand_code)+" ")]),r("br"),t._v("\n                "+t._s(e.email)+"\n              ")],1),t._v(" "),r("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.first_name+" "+e.last_name)}})],1),t._v(" "),r("v-list-item-action",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,o=a.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(r){return t.updateStatus(e,1,"junk",n)}}},"v-btn",o,!1),s),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-arrow-left")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Move to Paid")])])],1)],1)})),1)],1)],1)],1),t._v(" "),r("v-row",{staticClass:"mt-2",attrs:{align:"center",justify:"center"}},[r("span",{staticClass:"grey--text"},[t._v("Leads per page")]),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{dark:"",text:"",color:"primary"}},"v-btn",a,!1),n),[t._v("\n          "+t._s(t.itemsPerPage)+"\n          "),r("v-icon",[t._v("mdi-chevron-down")])],1)]}}])},[t._v(" "),r("v-list",t._l(t.itemsPerPageArray,(function(e,n){return r("v-list-item",{key:n,on:{click:function(r){return t.updateItemsPerPage(e)}}},[r("v-list-item-title",[t._v(t._s(e))])],1)})),1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("span",{staticClass:"mr-4 grey--text"},[t._v("\n      Page "+t._s(t.page)+" of "+t._s(t.numberOfPages)+"\n    ")]),t._v(" "),r("v-btn",{staticClass:"mr-1",attrs:{fab:"",dark:"",color:"blue darken-3"},on:{click:t.formerPage}},[r("v-icon",[t._v("mdi-chevron-left")])],1),t._v(" "),r("v-btn",{staticClass:"ml-1",attrs:{fab:"",dark:"",color:"blue darken-3"},on:{click:t.nextPage}},[r("v-icon",[t._v("mdi-chevron-right")])],1)],1),t._v(" "),2==t.user.role_id?r("v-btn",{attrs:{color:"pink",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:t.openLeadForm}},[r("v-icon",[t._v("mdi-plus")])],1):t._e(),t._v(" "),r("LeadForm",{attrs:{brands:t.mybrands,openLeadForm:t.dialogueOpen,lead:t.selectedLead},on:{"close-leaddialog":t.closeDialog,"refresh-leads":t.refreshLeads}})],1)}),[],!1,null,null,null).exports}}]);