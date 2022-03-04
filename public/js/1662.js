"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1662],{544:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7757),a=r.n(n);function s(e,t,r,n,a,s,u){try{var o=e[s](u),i=o.value}catch(e){return void r(e)}o.done?t(i):Promise.resolve(i).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function o(e){s(u,n,a,o,i,"next",e)}function i(e){s(u,n,a,o,i,"throw",e)}o(void 0)}))}}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=r(9669);const c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,s,c,d,p,l,f,v;return t=e,r=[{key:"getlist",value:function(e){return i.get("/api/brand".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"delete",value:function(e){e.query;var t=e.id;return i.delete("/api/brand/".concat(t))}},{key:"create",value:(v=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/api/brand",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e){return v.apply(this,arguments)})},{key:"get",value:(f=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/api/brand/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)})},{key:"update",value:(l=u(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,i.post("/api/brand/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return l.apply(this,arguments)})},{key:"createUser",value:(p=u(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/api/brand/"+r+"/user",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return p.apply(this,arguments)})},{key:"getAllCompanyUsers",value:(d=u(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.get("/api/company/user/getallusers").then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})},{key:"assignUser",value:(c=u(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/api/brand/"+r+"/assign-user",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),function(e,t){return c.apply(this,arguments)})},{key:"myBrands",value:(s=u(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/api/brands/me").then((function(e){return e.data})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(){return s.apply(this,arguments)})}],r&&o(t.prototype,r),n&&o(t,n),e}())},4281:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7757),a=r.n(n);function s(e,t,r,n,a,s,u){try{var o=e[s](u),i=o.value}catch(e){return void r(e)}o.done?t(i):Promise.resolve(i).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function o(e){s(u,n,a,o,i,"next",e)}function i(e){s(u,n,a,o,i,"throw",e)}o(void 0)}))}}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=r(9669);const c=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,n,s,c,d,p,l,f;return t=e,r=[{key:"getlist",value:function(e){return i.get("/api/marketing_budgets".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"delete",value:function(e){e.query;var t=e.id;return i.delete("/api/marketing_budgets/".concat(t))}},{key:"create",value:(f=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/api/marketing_budgets",t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)})},{key:"get",value:(l=u(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/api/marketing_budgets/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)})},{key:"update",value:(p=u(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.append("_method","put"),e.next=3,i.post("/api/marketing_budgets/"+r,t).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))),function(e,t){return p.apply(this,arguments)})},{key:"getDailyBudget",value:(d=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/api/current-budget?period="+t).then((function(e){return{status:1,data:e.data}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"getDailyBudgetDetail",value:(c=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/api/marketing_budgets/"+t+"/spendings?sortCol=date&sortByDesc=1").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)})},{key:"saveDailyBudgetDetail",value:(s=u(a().mark((function e(t,r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/api/marketing_budgets/"+t+"/spendings",r).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)})}],r&&o(t.prototype,r),n&&o(t,n),e}())},1662:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(7757),a=r.n(n),s=r(4281),u=r(544);function o(e,t,r,n,a,s,u){try{var o=e[s](u),i=o.value}catch(e){return void r(e)}o.done?t(i):Promise.resolve(i).then(n,a)}var i,c;const d={name:"auth.users.add",mounted:function(){var e=this;u.Z.getlist("").then((function(t){e.brands=t.data}))},methods:{resetError:function(){this.errors={for_period:[],brand_id:[],max_spendings:[],required_leads:[]}},addbudget:(i=a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=13;break}return this.btnloading=!0,(t=new FormData).append("for_period",this.form.for_period+"-01"),t.append("brand_id",this.form.brand_id),t.append("max_spendings",this.form.max_spendings),t.append("required_leads",this.form.required_leads),this.btnloading=!1,e.next=11,s.Z.create(t);case 11:(r=e.sent).status?this.$router.push({name:"auth.marketing_budgets.listing"}):(r.data.for_period&&(this.errors.for_period=r.data.for_period),r.data.brand_id&&(this.errors.brand_id=r.data.brand_id),r.data.max_spendings&&(this.errors.max_spendings=r.data.max_spendings),r.data.required_leads&&(this.errors.required_leads=r.data.required_leads));case 13:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=i.apply(e,t);function s(e){o(a,r,n,s,u,"next",e)}function u(e){o(a,r,n,s,u,"throw",e)}s(void 0)}))},function(){return c.apply(this,arguments)})},computed:{user:function(){return this.$store.getters.loggedInUser}},data:function(){return{brands:[],form:{for_period:"",brand_id:"",max_spendings:0,required_leads:0},errors:{for_period:[],brand_id:[],max_spendings:[],required_leads:[]},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Marketing Budget",to:{name:"auth.marketing_budgets.listing"},disabled:!1,exact:!0},{text:"Add",to:{name:"auth.marketing_budgets.add"},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}}}}};const p=(0,r(1900).Z)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),r("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-row",[r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[e.errors.for_period.length>0?r("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v("\n"+e._s(e.errors.for_period.join(", "))+"\n")]):e._e(),e._v(" "),r("v-date-picker",{attrs:{"error-messages":e.errors.for_period,label:"For Period",type:"month"},model:{value:e.form.for_period,callback:function(t){e.$set(e.form,"for_period",t)},expression:"form.for_period"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.max_spendings,label:"Max Spending",type:"number",min:"0"},model:{value:e.form.max_spendings,callback:function(t){e.$set(e.form,"max_spendings",t)},expression:"form.max_spendings"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"6",sm:"6"}},[r("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.required_leads,label:"Required Leads",type:"number",min:"0"},model:{value:e.form.required_leads,callback:function(t){e.$set(e.form,"required_leads",t)},expression:"form.required_leads"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-select",{attrs:{items:e.brands,"item-text":"brand_name","item-value":"id",label:"Brand*",required:"","error-messages":e.errors.brand_id},model:{value:e.form.brand_id,callback:function(t){e.$set(e.form,"brand_id",t)},expression:"form.brand_id"}})],1),e._v(" "),r("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[r("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addbudget}},[e._v("Save")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);