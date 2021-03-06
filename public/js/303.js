"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[303],{303:(t,n,e)=>{e.r(n),e.d(n,{default:()=>b});var a=e(7757),i=e.n(a);function o(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var r=e(9669);const s=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,a;return n=t,(e=[{key:"getlist",value:function(t){return r.get("/api/notifications".concat(t)).then((function(t){return t.data})).catch((function(t){return t}))}}])&&o(n.prototype,e),a&&o(n,a),t}());const c={props:{notification:{type:Object,default:{}}}};var l=e(1900);const u=(0,l.Z)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-col",{attrs:{cols:"12"}},[t._v("\n  Payment "),e("strong",[t._v(t._s(t.notification.data.status))]),t._v(", Lead "),e("strong",[t._v(t._s(t.notification.data.lead_id))]),t._v("\n  >, Payment ID "),e("strong",[t._v(t._s(t.notification.data.payment_id))]),t._v(" "),e("v-btn",{attrs:{color:"info",dark:"","x-small":"",to:{name:"auth.payment.create",params:{id:t.notification.data.lead_id},query:{payment_id:t.notification.data.payment_id}},target:"_blank"}},[t._v("\n    View Detail\n  ")])],1)}),[],!1,null,null,null).exports;const f={props:{notification:{type:Object,default:{}}},computed:{user:function(){return this.$store.getters.loggedInUser}}};const d=(0,l.Z)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-col",{attrs:{cols:"12"}},[t._v("\n  "+t._s(t.notification.data.message)+"\n  "),6==t.user.role_id?e("v-btn",{attrs:{color:"info",dark:"","x-small":"",to:{name:"auth.customer.briefs.edit",params:{id:t.notification.data.id}},target:"_blank"}},[t._v("\n    View Detail\n  ")]):e("v-btn",{attrs:{color:"info",dark:"","x-small":"",to:{name:"guest.brief.detail",params:{id:t.notification.data.id}},target:"_blank"}},[t._v("\n    View Detail\n  ")])],1)}),[],!1,null,null,null).exports;const p={props:{notification:{type:Object,default:{}}},computed:{project_id_int:function(){var t=this.notification.data.project_id.split("-");return t[t.length-1]}}};const m=(0,l.Z)(p,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-col",{attrs:{cols:"12"}},[t._v("\n  Task "),e("strong",[t._v(t._s(t.notification.data.task_id))]),t._v("\n  , Project ID "),e("strong",[t._v(t._s(t.notification.data.project_id))]),t._v(" "),e("v-btn",{attrs:{color:"info",dark:"","x-small":"",to:{name:"auth.task.summary",params:{project:t.project_id_int},query:{task:t.notification.data.task_id}},target:"_blank"}},[t._v("\n    View Detail\n  ")])],1)}),[],!1,null,null,null).exports;const _={props:{notification:{type:Object,default:{}}},computed:{project_id_int:function(){if(this.notification.data.project_id){var t=this.notification.data.project_id.split("-");return parseInt(t[t.length-1])}return 0}}};function v(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return y(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return y(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function g(t,n,e,a,i,o,r){try{var s=t[o](r),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(a,i)}const h={data:function(){return{items:[{icon:"mdi-wifi",text:"Payment"},{icon:"mdi-bluetooth",text:"Task"},{icon:"mdi-chart-donut",text:"Client Message"}],model:[],page:1,max_page:0,notifications:[]}},mounted:function(){this.getList()},watch:{},methods:{getList:function(){var t,n=this;return(t=i().mark((function t(){var e,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return 1==n.page&&(n.notifications=[]),t.next=3,s.getlist("?page="+n.page);case 3:a=t.sent,n.max_page=a.last_page,(e=n.notifications).push.apply(e,v(a.data));case 6:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(a,i){var o=t.apply(n,e);function r(t){g(o,a,i,r,s,"next",t)}function s(t){g(o,a,i,r,s,"throw",t)}r(void 0)}))})()}},components:{PaymentPaidByCustomer:u,taskAssigned:m,taskComment:(0,l.Z)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-col",{attrs:{cols:"12"}},[t._v("\n  "+t._s(t.notification.data.line)+"\n  "),t.project_id_int>0?e("v-btn",{attrs:{color:"info",dark:"","x-small":"",to:{name:"auth.task.summary",params:{project:t.project_id_int},query:{task:t.notification.data.task_id}},target:"_blank"}},[t._v("\n    View Detail\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,BriefSubmit:d},computed:{user:function(){return this.$store.getters.loggedInUser}}};const b=(0,l.Z)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-row",[e("v-col",{attrs:{cols:"12"}},t._l(t.notifications,(function(n){return e("v-sheet",{key:n.id,staticClass:"mx-auto mb-2",attrs:{color:n.read_at?"white":"green lighten-4",elevation:"2",height:"50",rounded:!0}},["App\\Notifications\\PaymentPaidByCustomer"==n.type?e("PaymentPaidByCustomer",{attrs:{notification:n}}):t._e(),t._v(" "),"App\\Notifications\\taskAssigned"==n.type?e("taskAssigned",{attrs:{notification:n}}):t._e(),t._v(" "),"App\\Notifications\\taskComment"==n.type?e("taskComment",{attrs:{notification:n}}):t._e(),t._v(" "),"App\\Notifications\\BriefSubmit"==n.type?e("BriefSubmit",{attrs:{notification:n}}):t._e()],1)})),1)],1)}),[],!1,null,null,null).exports}}]);