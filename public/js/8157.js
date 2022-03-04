"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8157],{2421:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7757),n=r.n(a);function s(e,t,r,a,n,s,o){try{var i=e[s](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){s(o,a,n,i,u,"next",e)}function u(e){s(o,a,n,i,u,"throw",e)}i(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=r(9669);const d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a,s,d,c;return t=e,r=[{key:"getlist",value:function(e){return u.get("/api/departments".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"delete",value:function(e){e.query;var t=e.id;return u.delete("/api/departments/".concat(t))}},{key:"create",value:(c=o(n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/api/departments",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})},{key:"get",value:(d=o(n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/api/departments/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"update",value:(s=o(n().mark((function e(t,r){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,u.post("/api/departments/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)})}],r&&i(t.prototype,r),a&&i(t,a),e}())},2205:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(7757),n=r.n(a);function s(e,t,r,a,n,s,o){try{var i=e[s](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function i(e){s(o,a,n,i,u,"next",e)}function u(e){s(o,a,n,i,u,"throw",e)}i(void 0)}))}}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var u=r(9669);const d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a,s,d;return t=e,r=[{key:"getlist",value:function(e){return u.get("/api/user".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"create",value:(d=o(n().mark((function e(t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/api/user",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"delete",value:function(e){e.query;var t=e.id;return u.delete("/api/user/".concat(t))}},{key:"get",value:function(e){return u.get("/api/user/".concat(e)).then((function(e){return e.data.data}))}},{key:"update",value:(s=o(n().mark((function e(t,r){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,u.post("/api/user/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)})}],r&&i(t.prototype,r),a&&i(t,a),e}())},8157:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(7757),n=r.n(a),s=r(2205),o=r(2421);function i(e,t,r,a,n,s,o){try{var i=e[s](o),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(a,n)}var u,d;const c={name:"auth.users.add",mounted:function(){var e=this;o.Z.getlist("").then((function(t){e.departments=t.data}))},methods:{resetError:function(){this.errors={name:[],email:[],password:[],role_id:[],department_id:[]}},addbrand:(u=n().mark((function e(){var t,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=15;break}return this.btnloading=!0,(t=new FormData).append("name",this.name),t.append("email",this.email),t.append("password",this.password),t.append("role_id",this.role_id),t.append("company_id",this.user.company_id),t.append("department_id",this.department_id),this.btnloading=!1,e.next=13,s.Z.create(t);case 13:(r=e.sent).status?this.$router.push({name:"auth.users.listing"}):(r.data.name&&(this.errors.name=r.data.name),r.data.email&&(this.errors.email=r.data.email),r.data.password&&(this.errors.password=r.data.password),r.data.role_id&&(this.errors.role_id=r.data.role_id),r.data.department_id&&(this.errors.department_id=r.data.department_id));case 15:case"end":return e.stop()}}),e,this)})),d=function(){var e=this,t=arguments;return new Promise((function(r,a){var n=u.apply(e,t);function s(e){i(n,r,a,s,o,"next",e)}function o(e){i(n,r,a,s,o,"throw",e)}s(void 0)}))},function(){return d.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{name:"",email:"",password:"",role_id:"",department_id:"",departments:[],errors:{name:[],email:[],password:[],role_id:[],department_id:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"User",to:{name:"auth.users.listing"},disabled:!1,exact:!0},{text:"Add",to:{name:"auth.users.add"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}}}}};const l=(0,r(1900).Z)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.name,label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.email,label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:[{id:4,value:"Sale"},{id:5,value:"Support"},{id:6,value:"Customer"},{id:7,value:"Production Manager"},{id:8,value:"Developer"},{id:9,value:"Marketing"}],"item-text":"value","item-value":"id",label:"Role*",required:"","error-messages":e.errors.role_id},model:{value:e.role_id,callback:function(t){e.role_id=t},expression:"role_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:e.departments,"item-text":"department_name","item-value":"id",label:"Department*",required:"","error-messages":e.errors.department_id},model:{value:e.department_id,callback:function(t){e.department_id=t},expression:"department_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.password,label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addbrand}},[e._v("Save")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);