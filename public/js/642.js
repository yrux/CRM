"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[642],{544:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(7757),a=t.n(n);function s(e,r,t,n,a,s,o){try{var i=e[s](o),u=i.value}catch(e){return void t(e)}i.done?r(u):Promise.resolve(u).then(n,a)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){s(o,n,a,i,u,"next",e)}function u(e){s(o,n,a,i,u,"throw",e)}i(void 0)}))}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=t(9669);const c=new(function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,t,n,s,c,l,d,v,p,m;return r=e,t=[{key:"getlist",value:function(e){return u.get("/api/brand".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"delete",value:function(e){e.query;var r=e.id;return u.delete("/api/brand/".concat(r))}},{key:"create",value:(m=o(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/api/brand",r).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"get",value:(p=o(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/api/brand/".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return p.apply(this,arguments)})},{key:"update",value:(v=o(a().mark((function e(r,t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.append("_method","put"),e.next=3,u.post("/api/brand/"+t,r).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),function(e,r){return v.apply(this,arguments)})},{key:"createUser",value:(d=o(a().mark((function e(r,t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/api/brand/"+t+"/user",r).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e,r){return d.apply(this,arguments)})},{key:"getAllCompanyUsers",value:(l=o(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.get("/api/company/user/getallusers").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})},{key:"assignUser",value:(c=o(a().mark((function e(r,t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.post("/api/brand/"+t+"/assign-user",r).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e,r){return c.apply(this,arguments)})},{key:"myBrands",value:(s=o(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/api/brands/me").then((function(e){return e.data})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})}],t&&i(r.prototype,t),n&&i(r,n),e}())},642:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var n=t(7757),a=t.n(n),s=t(6455),o=t.n(s),i=t(544);function u(e,r,t,n,a,s,o){try{var i=e[s](o),u=i.value}catch(e){return void t(e)}i.done?r(u):Promise.resolve(u).then(n,a)}const c={props:["dialog","item","user"],data:function(){return{user_name:"",user_email:"",role_id:5,is_owner:!0,errors:{user_name:[],user_email:[],role:[],is_owner:[]}}},methods:{closeModal:function(){this.$emit("close-useraddmodal",!0)},resetError:function(){this.errors={user_name:[],user_email:[],role:[],is_owner:[]}},saveUser:function(){var e,r=this;return(e=a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.resetError(),(t=new FormData).append("company_id",r.user.company_id),t.append("is_owner",1==r.is_owner?1:0),t.append("user_name",r.user_name),t.append("user_email",r.user_email),t.append("role",r.role_id),e.next=9,i.Z.createUser(t,r.item.id);case 9:(n=e.sent).status?r.closeModal():(n.data.user_email&&(r.errors.user_email=n.data.user_email),n.data.user_name&&(r.errors.user_name=n.data.user_name),n.data.role&&(r.errors.role=n.data.role));case 11:case"end":return e.stop()}}),e)})),function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function o(e){u(s,n,a,o,i,"next",e)}function i(e){u(s,n,a,o,i,"throw",e)}o(void 0)}))})()}}};var l=t(1900);const d=(0,l.Z)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(r){e.dialog=r},expression:"dialog"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"text-h5"},[e._v("Add User")])]),e._v(" "),t("v-card-text",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Name*","error-messages":e.errors.user_name,required:""},model:{value:e.user_name,callback:function(r){e.user_name=r},expression:"user_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Email*","error-messages":e.errors.user_email,required:""},model:{value:e.user_email,callback:function(r){e.user_email=r},expression:"user_email"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-select",{attrs:{items:[{id:4,value:"Sales"},{id:5,value:"Support"}],"item-text":"value","item-value":"id",label:"Role*",required:"","error-messages":e.errors.role},model:{value:e.role_id,callback:function(r){e.role_id=r},expression:"role_id"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-checkbox",{attrs:{label:"Is Owner?"},model:{value:e.is_owner,callback:function(r){e.is_owner=r},expression:"is_owner"}})],1)],1)],1)],1),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeModal}},[e._v("\n        Close\n      ")]),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveUser}},[e._v(" Save ")])],1)],1)],1)}),[],!1,null,null,null).exports;function v(e,r,t,n,a,s,o){try{var i=e[s](o),u=i.value}catch(e){return void t(e)}i.done?r(u):Promise.resolve(u).then(n,a)}function p(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function o(e){v(s,n,a,o,i,"next",e)}function i(e){v(s,n,a,o,i,"throw",e)}o(void 0)}))}}const m={props:["dialogassign","item","user"],data:function(){return{users:[],selectedUser:{},user_email:"",user_name:"",is_owner:!1,errors:{user:[],user_name:[],user_email:[],is_owner:[]}}},mounted:function(){this.getusers()},methods:{closeModal:function(){this.$emit("close-assigndmodal",!0)},getusers:function(){var e=this;return p(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.Z.getAllCompanyUsers();case 2:e.users=r.sent;case 3:case"end":return r.stop()}}),r)})))()},resetError:function(){this.errors={user:[],user_name:[],user_email:[],is_owner:[]}},saveUser:function(){var e=this;return p(a().mark((function r(){var t,n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.resetError(),(t=new FormData).append("company_id",e.user.company_id),t.append("is_owner",1==e.is_owner?1:0),t.append("user_name",e.user_name),t.append("user_email",e.user_email),t.append("user_id",e.selectedUser),r.next=9,i.Z.assignUser(t,e.item.id);case 9:(n=r.sent).status?e.closeModal():(n.data.user_email&&(e.errors.user_email=n.data.user_email),n.data.user_name&&(e.errors.user_name=n.data.user_name),n.data.user_id&&(e.errors.user=n.data.user_id),n.data.is_owner&&(e.errors.is_owner=n.data.is_owner));case 11:case"end":return r.stop()}}),r)})))()}},watch:{selectedUser:function(){for(var e=0;e<this.users.length;e++)this.users[e].id==this.selectedUser&&(this.user_name=this.users[e].name,this.user_email=this.users[e].email)}}};function f(e,r,t,n,a,s,o){try{var i=e[s](o),u=i.value}catch(e){return void t(e)}i.done?r(u):Promise.resolve(u).then(n,a)}function _(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function o(e){f(s,n,a,o,i,"next",e)}function i(e){f(s,n,a,o,i,"throw",e)}o(void 0)}))}}var h;const g={name:"auth.brands.listing",computed:{user:function(){return this.$store.getters.loggedInUser}},components:{userAssign:(0,l.Z)(m,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialogassign,callback:function(r){e.dialogassign=r},expression:"dialogassign"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"text-h5"},[e._v("Assign User")])]),e._v(" "),t("v-card-text",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.users,"item-text":"email","item-value":"id",label:"User*",required:"","error-messages":e.errors.user},model:{value:e.selectedUser,callback:function(r){e.selectedUser=r},expression:"selectedUser"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Name*","error-messages":e.errors.user_name,required:""},model:{value:e.user_name,callback:function(r){e.user_name=r},expression:"user_name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Email*","error-messages":e.errors.user_email,required:""},model:{value:e.user_email,callback:function(r){e.user_email=r},expression:"user_email"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("v-checkbox",{attrs:{label:"Is Owner?"},model:{value:e.is_owner,callback:function(r){e.is_owner=r},expression:"is_owner"}})],1)],1)],1)],1),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeModal}},[e._v(" Close ")]),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveUser}},[e._v(" Save ")])],1)],1)],1)}),[],!1,null,null,null).exports,userAdd:d},data:function(){return{bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Brand",to:{name:"auth.brands.listing"},disabled:!1,exact:!0}],desserts:[],userDialog:!1,assignDialog:!1,selected:{}}},watch:{$route:function(){this.getDataFromApi()},perpage:function(){this.getDataFromApi()},options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){this.getDataFromApi()},methods:{addUser:function(e){this.userDialog=!0,this.assignDialog=!1,this.selected=e},assignUser:function(e){this.userDialog=!1,this.assignDialog=!0,this.selected=e},deletebrand:(h=_(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){if(e.isConfirmed)return!0}));case 2:if(!e.sent){e.next=8;break}return e.next=6,i.Z.delete({id:r});case 6:o().fire("Deleted!","Your record has been deleted.","success"),this.getDataFromApi();case 8:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)}),getDataFromApi:function(){var e=this;return _(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.fakeApiCall();case 2:t=r.sent,e.desserts=t.data;case 4:case"end":return r.stop()}}),r)})))()},fakeApiCall:function(){return i.Z.getlist("")}}};const w=(0,l.Z)(g,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("v-row",{attrs:{"no-gutters":""}},[t("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[t("v-icon",[e._v("mdi-forward")])]},proxy:!0}])})],1),e._v(" "),t("v-row",{attrs:{"no-gutters":""}},e._l(e.desserts,(function(r){return t("v-col",{key:r.id,attrs:{cols:"3"}},[t("v-card",{staticClass:"my-4 mr-4",attrs:{elevation:"7",outlined:""}},[t("v-img",{attrs:{height:"100",src:r.image_url,contain:""}}),e._v(" "),t("v-card-title",[e._v("\r\n  "+e._s(r.brand_name)+"\r\n"),t("v-btn",{attrs:{color:"info",fab:"","x-small":"",dark:"",to:{name:"auth.brands.edit",params:{id:r.id}}}},[t("v-icon",[e._v("mdi-pencil-plus")])],1),e._v(" "),t("v-btn",{attrs:{color:"error",fab:"","x-small":"",dark:""},on:{click:function(t){return e.deletebrand(r.id)}}},[t("v-icon",[e._v("mdi-delete-outline")])],1)],1),e._v(" "),t("v-card-text",[t("v-chip-group",{attrs:{column:""}},[e._l(r.users,(function(r){return t("v-chip",{key:r.id,attrs:{pill:"",small:""}},[t("v-avatar",{attrs:{left:""}},[t("v-img",{attrs:{src:r.user.image_url}})],1),e._v("\r\n      "+e._s(r.user_name)+"\r\n    ")],1)})),e._v(" "),t("v-chip",{attrs:{pill:"",color:"indigo","text-color":"white",small:""},on:{click:function(t){return e.addUser(r)}}},[t("v-avatar",{attrs:{left:""}},[t("v-icon",[e._v("mdi-plus")])],1),e._v("\r\n      Create User\r\n    ")],1),e._v(" "),t("v-chip",{attrs:{pill:"",color:"warning","text-color":"white",small:""},on:{click:function(t){return e.assignUser(r)}}},[t("v-avatar",{attrs:{left:""}},[t("v-icon",[e._v("mdi-account-check")])],1),e._v("\r\n      Assign User\r\n    ")],1)],2)],1)],1)],1)})),1),e._v(" "),t("userAdd",{attrs:{user:e.user,item:e.selected,dialog:e.userDialog},on:{"close-useraddmodal":function(r){e.userDialog=!1,e.getDataFromApi()}}}),e._v(" "),t("userAssign",{attrs:{user:e.user,item:e.selected,dialogassign:e.assignDialog},on:{"close-assigndmodal":function(r){e.assignDialog=!1,e.getDataFromApi()}}})],1)}),[],!1,null,null,null).exports}}]);