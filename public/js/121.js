"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[121],{2448:(t,e,n)=>{function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n.d(e,{Z:()=>s});var r=n(9669);const s=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,s;return e=t,n=[{key:"summary",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r.get("/api/project/".concat(t,"/task").concat(e)).then((function(t){return t.data.data})).catch((function(t){return t}))}},{key:"tasks",value:function(t){return r.get("/api/tasks"+t).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"update",value:function(t,e,n){return n.append("_method","put"),r.post("/api/project/".concat(t,"/task/").concat(e),n).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"comment",value:function(t,e){return r.post("/api/task/".concat(t,"/comment"),e).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"updateStatus",value:function(t,e,n){return r.post("/api/project/".concat(t,"/").concat(e,"/status/").concat(n)).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"usersSummary",value:function(t){return r.get("/api/task/"+t+"/usersSummary").then((function(t){return t.data})).catch((function(t){return t}))}},{key:"timeUpdate",value:function(t){return r.post("/api/task/".concat(t,"/update-time")).then((function(t){return t.data})).catch((function(t){return t}))}},{key:"markCommentsread",value:function(t){return r.post("/api/task/".concat(t,"/mark-comments-read")).then((function(t){return t.data})).catch((function(t){return t}))}}],n&&a(e.prototype,n),s&&a(e,s),t}())},2825:(t,e,n)=>{n.d(e,{Z:()=>r});const a={props:{type:{default:"initial",type:String}}};const r=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-inline-block"},["initial"==t.type?n("v-chip",{staticClass:"ma-2",attrs:{color:"primary",small:""}},[t._v("\n  Initial\n")]):t._e(),t._v(" "),"revision"==t.type?n("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"white",small:""}},[t._v("\n  Revision\n")]):t._e(),t._v(" "),"innerpages"==t.type?n("v-chip",{staticClass:"ma-2",attrs:{color:"blue","text-color":"white",small:""}},[t._v("\n  Inner Pages\n")]):t._e(),t._v(" "),"redraw"==t.type?n("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white",small:""}},[t._v("\n  ReDraw\n")]):t._e()],1)}),[],!1,null,null,null).exports},2121:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var a=n(7757),r=n.n(a),s=n(2448),o=n(2825);const i={props:["time","status"],data:function(){return{time_cur:"00:00:00"}},mounted:function(){this.time_cur=this.time},methods:{updateTimer:function(){}}};var c=n(1900);const u=(0,c.Z)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time_cur))])}),[],!1,null,null,null).exports;function l(t,e,n,a,r,s,o){try{var i=t[s](o),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(a,r)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var s=t.apply(e,n);function o(t){l(s,a,r,o,i,"next",t)}function i(t){l(s,a,r,o,i,"throw",t)}o(void 0)}))}}const v={components:{taskType:o.Z,taskTimer:u},data:function(){return{search:"",taskType:"",tasks:[],loading:!0,totalRecords:0,options:{},perpage:10,headers:[{text:"#",align:"start",sortable:!0,value:"id"},{text:"Type",align:"start",sortable:!0,value:"task_type"},{text:"Title",align:"start",sortable:!0,value:"task_title"},{text:"Project ID",align:"start",sortable:!0,value:"project_id"},{text:"Assigned On",align:"start",sortable:!0,value:"created_at_formatted"},{text:"Resource Working",align:"start",sortable:!0,value:"developer_name"},{text:"Assigned To",align:"start",sortable:!0,value:"assigned_user_name"},{text:"Assigned By",align:"start",sortable:!0,value:"assigned_by_user_name"},{text:"Due",align:"start",sortable:!0,value:"due_date"},{text:"Time Worked",align:"start",sortable:!1,value:"total_time_on_task"},{text:"Actions",value:"actions",sortable:!1}]}},methods:{timeUpdate:function(t){var e=this;return p(r().mark((function n(){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.tasks=[],e.loading=!0,n.next=4,s.Z.timeUpdate(t.id);case 4:e.getTasks();case 5:case"end":return n.stop()}}),n)})))()},setRowCls:function(t){return 3==t.status?"orange lighten-4":2==t.status?"green lighten-4":1==t.status?"blue lighten-4":void 0},getTasks:function(){var t=this;return p(r().mark((function e(){var n,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n="","all"!=t.taskType&&(n+="?type="+t.taskType),a=t.options.page,n+=(""==n?"?":"&")+"page="+a,t.options.sortBy.length>0&&(n+="&sortCol="+t.options.sortBy[0]),t.options.sortDesc.length>0&&(n+="&sortByDesc="+(1==t.options.sortDesc[0]?1:0)),n+="&perpage="+t.options.itemsPerPage,""!=t.search&&(n+="&search="+t.search),e.next=11,s.Z.tasks(n);case 11:o=e.sent,t.totalRecords=o.total,t.tasks=o.data,t.loading=!1;case 15:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return p(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.taskType=t.$route.params.type;case 1:case"end":return e.stop()}}),e)})))()},watch:{$route:function(){this.taskType=this.$route.params.type},taskType:function(){this.getTasks()},perpage:function(){this.getTasks()},options:{handler:function(){this.getTasks()},deep:!0},search:function(){this.getTasks()}},computed:{user:function(){return this.$store.getters.loggedInUser}}};const d=(0,c.Z)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tasks,options:t.options,"server-items-length":t.totalRecords,loading:t.loading,"item-key":"id","item-class":t.setRowCls},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-text-field",{staticClass:"mx-4",attrs:{label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]},proxy:!0},{key:"item.task_type",fn:function(t){var e=t.item;return[n("taskType",{attrs:{type:e.task_type}})]}},{key:"item.total_time_on_task",fn:function(t){var e=t.item;return[n("taskTimer",{attrs:{status:e.status,time:e.total_time_on_task}})]}},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[n("v-badge",{attrs:{content:a.unseen_comments,value:a.unseen_comments,color:"green",overlap:""}},[n("v-btn",t._g(t._b({attrs:{color:"info",fab:"","x-small":"",dark:"",to:{name:"auth.task.summary",params:{project:a.project_id_root},query:{task:a.id}}}},"v-btn",s,!1),r),[n("v-icon",[t._v("mdi-file-tree")])],1)],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Task Detail")])]),t._v(" "),8!=t.user.role_id||0!=a.status&&1!=a.status?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,s=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:0==a.task_started?"primary":"error",fab:"","x-small":"",dark:""},on:{click:function(e){return t.timeUpdate(a)}}},"v-btn",s,!1),r),[n("v-icon",[t._v("mdi-watch")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(0==a.task_started?"Start Timer":"Stop Timer"))])]),t._v(" "),8!=t.user.role_id&&1==a.task_started?n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-progress-circular",t._g(t._b({attrs:{indeterminate:"",color:"primary"}},"v-progress-circular",r,!1),a))]}}],null,!0)},[t._v(" "),n("span",[t._v("Timer in Progress")])]):t._e()]}}])})}),[],!1,null,null,null).exports}}]);