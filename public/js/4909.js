"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4909],{4929:(e,a,t)=>{t.d(a,{Z:()=>u});var r=t(7757),n=t.n(r);function s(e,a,t,r,n,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?a(c):Promise.resolve(c).then(r,n)}function o(e){return function(){var a=this,t=arguments;return new Promise((function(r,n){var o=e.apply(a,t);function i(e){s(o,r,n,i,c,"next",e)}function c(e){s(o,r,n,i,c,"throw",e)}i(void 0)}))}}function i(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=t(9669);const u=new(function(){function e(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e)}var a,t,r,s,u,l;return a=e,t=[{key:"getlist",value:function(e){return c.get("/api/company".concat(e)).then((function(e){return e.data})).catch((function(e){return e}))}},{key:"delete",value:function(e){e.query;var a=e.id;return c.delete("/api/company/".concat(a))}},{key:"create",value:(l=o(n().mark((function e(a){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.post("/api/company",a).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)})},{key:"get",value:(u=o(n().mark((function e(a){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/api/company/".concat(a));case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)}))),function(e){return u.apply(this,arguments)})},{key:"update",value:(s=o(n().mark((function e(a,t){var r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.append("_method","put"),e.next=3,c.post("/api/company/"+t,a).then((function(e){return{status:1,data:e.data.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),function(e,a){return s.apply(this,arguments)})}],t&&i(a.prototype,t),r&&i(a,r),e}())},9519:(e,a,t)=>{t.d(a,{Z:()=>c});var r=t(7757),n=t.n(r);function s(e,a,t,r,n,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?a(c):Promise.resolve(c).then(r,n)}function o(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=t(9669);const c=new(function(){function e(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e)}var a,t,r,c,u;return a=e,t=[{key:"create",value:(c=n().mark((function e(a){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.post("/api/file",a).then((function(e){return{status:1,data:e.data}})).catch((function(e){return{status:0,data:e.response.data.errors}}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})),u=function(){var e=this,a=arguments;return new Promise((function(t,r){var n=c.apply(e,a);function o(e){s(n,t,r,o,i,"next",e)}function i(e){s(n,t,r,o,i,"throw",e)}o(void 0)}))},function(e){return u.apply(this,arguments)})}],t&&o(a.prototype,t),r&&o(a,r),e}())},4909:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var r=t(7757),n=t.n(r),s=t(4929),o=t(9519);function i(e,a,t,r,n,s,o){try{var i=e[s](o),c=i.value}catch(e){return void t(e)}i.done?a(c):Promise.resolve(c).then(r,n)}function c(e){return function(){var a=this,t=arguments;return new Promise((function(r,n){var s=e.apply(a,t);function o(e){i(s,r,n,o,c,"next",e)}function c(e){i(s,r,n,o,c,"throw",e)}o(void 0)}))}}var u;const l={name:"auth.company.edit",mounted:function(){var e=this;return c(n().mark((function a(){var t;return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.id=e.$route.params.id,a.next=3,s.Z.get(e.id);case 3:t=a.sent,e.brandname=t.company_name,e.email=t.company_email,e.password=t.user.password,e.imageurl=t.image_url;case 8:case"end":return a.stop()}}),a)})))()},methods:{resetError:function(){this.errors={company_name:[],password:[],email:[],file:[]}},addbrand:(u=c(n().mark((function e(){var a,t,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resetError(),!this.$refs.form.validate()){e.next=28;break}return this.btnloading=!0,(a=new FormData).append("company_name",this.brandname),a.append("email",this.email),this.password&&a.append("password",this.password),this.image.size&&a.append("file",this.image),this.btnloading=!1,e.next=11,s.Z.update(a,this.id);case 11:if((t=e.sent).status){e.next=19;break}t.data.company_name&&(this.errors.company_name=t.data.company_name),t.data.email&&(this.errors.email=t.data.email),t.data.password&&(this.errors.password=t.data.password),t.data.file&&(this.errors.file=t.data.file),e.next=28;break;case 19:if(!this.image.size){e.next=27;break}return(r=new FormData).append("ref_id",t.data.id),r.append("table_name","company"),r.append("type","1"),r.append("attachements[0]",this.image),e.next=27,o.Z.create(r);case 27:this.$router.push({name:"auth.company.listing"});case 28:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},data:function(){return{brandname:"",id:0,email:"",password:"",imageurl:"",errors:{company_name:[],password:[],email:[],file:[]},image:{},bread:[{text:"Dashboard",to:{name:"auth.dashboard"},disabled:!1,exact:!0},{text:"Company",to:{name:"auth.company.listing"},disabled:!1,exact:!0},{text:"Edit",to:{name:"auth.company.edit",params:{id:this.$route.params.id}},disabled:!1,exact:!0}],loading:!1,btnloading:!1,rules:{required:function(e){return!!e||"Required."}}}}};const d=(0,t(1900).Z)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-breadcrumbs",{attrs:{items:e.bread},scopedSlots:e._u([{key:"divider",fn:function(){return[t("v-icon",[e._v("mdi-forward")])]},proxy:!0}])}),e._v(" "),t("v-row",{staticClass:"grey lighten-5 pa-10 rounded elevation-10",attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12",sm:"12"}},[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.loading,callback:function(a){e.loading=a},expression:"loading"}},[t("v-row",[t("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[t("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.company_name,label:"Company Name"},model:{value:e.brandname,callback:function(a){e.brandname=a},expression:"brandname"}})],1),e._v(" "),t("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[t("v-text-field",{attrs:{rules:[e.rules.required],"error-messages":e.errors.email,label:"Email"},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}})],1),e._v(" "),t("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[t("v-text-field",{attrs:{"error-messages":e.errors.password,label:"password",type:"password",autocomplete:"new-password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1),e._v(" "),t("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[t("v-file-input",{attrs:{"show-size":"","error-messages":e.errors.file,accept:"image/png, image/jpeg, image/bmp",label:"Title Image",rules:[e.rules.required],"truncate-length":"15"},model:{value:e.image,callback:function(a){e.image=a},expression:"image"}}),e._v(" "),t("v-img",{attrs:{"lazy-src":e.imageurl,"max-height":"100","max-width":"150",contain:"",src:e.imageurl}})],1),e._v(" "),t("v-col",{staticClass:"pb-0",attrs:{cols:"12",sm:"12"}},[t("v-btn",{attrs:{color:"secondary",elevation:"1",large:"",raised:"",loading:e.btnloading,disabled:e.btnloading},on:{click:e.addbrand}},[e._v("Save")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);