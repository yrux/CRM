"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68],{586:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(7757),r=n.n(a);function s(t,e,n,a,r,s,o){try{var u=t[s](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(a,r)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var o=t.apply(e,n);function u(t){s(o,a,r,u,c,"next",t)}function c(t){s(o,a,r,u,c,"throw",t)}u(void 0)}))}}function u(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i=n(9669);const l=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"next_url",""),c(this,"headersEvs",[])}var e,n,a,s,l;return e=t,n=[{key:"getMessages",value:(l=o(r().mark((function t(e,n){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.headersEvs.indexOf(e)<0&&this.headersEvs.push(e),t.next=3,i.get(""==this.next_url?"/api/lead-messages/"+e+"?search="+n:this.next_url+"&search="+n);case 3:return(a=t.sent).data.next_page_url?this.next_url=a.data.next_page_url:this.next_url="",t.abrupt("return",a.data.result);case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return l.apply(this,arguments)})},{key:"resetNextUrl",value:function(){this.next_url=""}},{key:"checkIfNextAvail",value:function(){return""!=this.next_url}},{key:"saveMsg",value:function(t,e){i.post("/api/lead-message-send/"+t,e)}},{key:"unseenMessages",value:(s=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.get("/api/unseen-lead-messages").then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)}))),function(){return s.apply(this,arguments)})}],n&&u(e.prototype,n),a&&u(e,a),t}())},2448:(t,e,n)=>{function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n.d(e,{Z:()=>s});var r=n(9669);const s=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,s;return e=t,n=[{key:"summary",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.get("/api/project/".concat(t,"/task").concat(e)).then((function(t){return t.data.data})).catch((function(t){return t}))}},{key:"tasks",value:function(t){return r.get("/api/tasks"+t).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:function(t,e,n){return n.append("_method","put"),r.post("/api/project/".concat(t,"/task/").concat(e),n).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"comment",value:function(t,e){return r.post("/api/task/".concat(t,"/comment"),e).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"updateStatus",value:function(t,e,n){return r.post("/api/project/".concat(t,"/").concat(e,"/status/").concat(n)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"usersSummary",value:function(t){return r.get("/api/task/"+t+"/usersSummary").then((function(t){return t.data})).catch((function(t){return t}))}},{key:"timeUpdate",value:function(t){return r.post("/api/task/".concat(t,"/update-time")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"markCommentsread",value:function(t){return r.post("/api/task/".concat(t,"/mark-comments-read")).then((function(t){return t.data})).catch((function(t){return t}))}}],n&&a(e.prototype,n),s&&a(e,s),t}())},8068:(t,e,n)=>{n.r(e),n.d(e,{default:()=>m});var a=n(7757),r=n.n(a),s=n(6256);const o={data:function(){return{}},mounted:function(){},props:{title:{type:String,default:""},loading:{type:Boolean,default:!0},count:{type:Number,default:0},icon:{type:String,default:""}},computed:{}};var u=n(1900);const c=(0,u.Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("v-sheet",{staticClass:"pa-3",attrs:{color:"primary lighten-5"}},[n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"card"}})],1):n("v-card",{attrs:{elevation:"2",tile:""}},[n("v-card-title",[""!=t.icon?n("v-icon",{attrs:{color:"indigo",size:"55"}},[t._v(" "+t._s(t.icon)+" ")]):t._e(),t._v("\n      "+t._s(t.title)),n("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[t._v("\n        "+t._s(t.count)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports;var i=n(586);const l={data:function(){return{loading:!0,leads:[]}},mounted:function(){var t=this;i.Z.unseenMessages().then((function(e){t.leads=e,t.loading=!1}))}};const d=(0,u.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[t.loading?n("v-col",{attrs:{cols:"12"}},[n("v-sheet",{staticClass:"pa-3",attrs:{color:"primary lighten-5"}},[n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"card"}})],1)],1):n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"text-center"},[t._v("Unseen Messages")]),t._v(" "),[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Email")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Name")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Unseen Message")]),t._v(" "),n("th")])]),t._v(" "),n("tbody",t._l(t.leads,(function(e){return n("tr",{key:e.lead_id},[n("td",[t._v(t._s(e.email))]),t._v(" "),n("td",[t._v(t._s(e.first_name)+" "+t._s(e.last_name))]),t._v(" "),n("td",[t._v(t._s(e.unseen_count))]),t._v(" "),n("td",[n("v-btn",{staticClass:"white--text",attrs:{link:"",small:"",to:{name:"auth.payment.create",params:{id:e.lead_id}},color:"blue-grey"}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-account ")]),t._v("\n                          View Summary\n                      ")],1)],1)])})),0)]},proxy:!0}])})]],2)],1)}),[],!1,null,null,null).exports;var f=n(2448);function v(t,e,n,a,r,s,o){try{var u=t[s](o),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(a,r)}const p={components:{adminbar:s.Z,taskWidget:c,unseenMessages:d},data:function(){return{tasks:[{title:"Today Tasks",loading:!0,count:0,type:"today",icon:"mdi-calendar-today"},{title:"Overdue Tasks",loading:!0,count:0,type:"overdue",icon:"mdi-calendar-alert"},{title:"Upcomming Tasks",loading:!0,count:0,type:"upcomming",icon:"mdi-calendar-refresh"},{title:"All Tasks",loading:!0,count:0,type:"all",icon:"mdi-calendar"}]}},mounted:function(){var t,e=this;return(t=r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(8!=e.user.role_id&&7!=e.user.role_id&&4!=e.user.role_id&&5!=e.user.role_id){t.next=10;break}n=0;case 2:if(!(n<e.tasks.length)){t.next=10;break}return t.next=5,f.Z.tasks("?perpage=0&getCount=true&type="+e.tasks[n].type);case 5:e.tasks[n].count=t.sent,e.tasks[n].loading=!1;case 7:n++,t.next=2;break;case 10:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){v(s,a,r,o,u,"next",t)}function u(t){v(s,a,r,o,u,"throw",t)}o(void 0)}))})()},computed:{user:function(){return this.$store.getters.loggedInUser}}};var h=(0,u.Z)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[8==t.user.role_id||7==t.user.role_id||4==t.user.role_id||5==t.user.role_id?n("v-col",{attrs:{cols:"12"}},[n("v-row",t._l(t.tasks,(function(t,e){return n("v-col",{key:e,attrs:{cols:"3"}},[n("taskWidget",{attrs:{icon:t.icon,count:t.count,loading:t.loading,title:t.title}})],1)})),1)],1):t._e(),t._v(" "),2==t.user.role_id||4==t.user.role_id||5==t.user.role_id?n("v-col",{attrs:{cols:"12"}},[n("unseenMessages",{attrs:{user:t.user}})],1):t._e()],1)}),[],!1,null,null,null);const m=h.exports}}]);