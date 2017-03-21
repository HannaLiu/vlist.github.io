webpackJsonp([1,0],[function(t,e,s){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}var i=s(8),n=e(i),a=s(31),o=e(a),r=s(48),l=e(r),c=s(47),d=e(c),u=s(34),f=e(u),m=s(37),h=e(m),p=s(36),v=e(p),g=s(38),w=e(g),y=s(35),b=e(y);n.default.use(l.default),n.default.use(d.default);var C=new l.default({mode:"history",base:t,routes:[{path:"/",component:w.default},{path:"/login",component:f.default},{path:"/register",component:h.default},{path:"/profile",component:v.default},{path:"/todolist",component:w.default},{path:"/manage",component:b.default}]});new n.default({router:C,render:function(t){return t(o.default)}}).$mount("#app")}).call(e,"/")},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(5),a=i(n),o="user-vuejs";e.default={fetch:function(){return JSON.parse(window.localStorage.getItem(o)||"[]")},save:function(t){window.localStorage.setItem(o,(0,a.default)(t))}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={findElem:function(t,e,s){for(var i=0;i<t.length;i++)if(t[i][e]==s)return i;return-1}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=s(8),a=i(n),o=s(49),r=i(o),l=s(4),c=i(l);a.default.use(r.default);var d=new r.default.Store({state:{cid:""==c.default.fetch()?"":c.default.fetch()[0].cid,cname:""==c.default.fetch()?"":c.default.fetch()[0].cname,isLogin:""==c.default.fetch()?"":c.default.fetch()[0].islogin},strict:!0,mutations:{login:function(t){t.cid=c.default.fetch()[0].cid,t.cname=c.default.fetch()[0].cname,t.isLogin=c.default.fetch()[0].islogin},singout:function(t){t.cid="",t.cname="",t.isLogin=!1}}});t.exports=d},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(5),a=i(n),o="usercurr";e.default={fetch:function(){return JSON.parse(window.sessionStorage.getItem(o)||"[]")},save:function(t){window.sessionStorage.setItem(o,(0,a.default)(t))}}},,,,,function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(33),a=i(n),o=s(32),r=i(o),l=s(3),c=i(l),d=s(4),u=i(d);e.default={name:"app",components:{vheader:a.default,vfooter:r.default},data:function(){return{user:u.default.fetch()}},mounted:function(){console.log("当前是否已登录:"+(c.default.state.isLogin?" 是 ":" 否 ")+" ,当前id为 "+c.default.state.cid)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer"}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=i(n),o=s(1),r=i(o),l=s(4),c=i(l);e.default={name:"header",data:function(){return{isLogin:a.default.state.isLogin,cname:"",users:r.default.fetch(),user:c.default.fetch()}},components:{},mounted:function(){a.default.state.isLogin&&(this.cname=c.default.fetch()[0].cname,this.isLogin=!0)},methods:{signout:function(){confirm("确定退出吗")&&(window.location.href="./",a.default.commit("singout"),this.user=[],this.user.push({cid:"",islogin:!1}),c.default.save(this.user))}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=i(n),o=s(6),r=i(o),l=s(2),c=i(l),d=s(3),u=i(d),f=s(4),m=i(f);e.default={name:"todolist",data:function(){return{name:"",pwd:"",msg:"",cid:"",users:a.default.fetch(),user:m.default.fetch(),hasLogin:!1}},watch:{},methods:{login:function(){if(""==this.name.trim())return void(this.msg="请输入用户名");if(""==this.pwd.trim())return void(this.msg="请输入密码");var t=c.default.findElem(this.users,"name",this.name);c.default.findElem(this.users,"pwd",(0,r.default)(this.pwd));return t==-1?void(this.msg="该用户名未注册"):t!=-1&&this.users[t].pwd!=(0,r.default)(this.pwd)?void(this.msg="密码错误"):void(t!=-1&&this.users[t].pwd==(0,r.default)(this.pwd)&&(this.user=[],this.user.push({cid:this.users[t].id,cname:this.users[t].name,islogin:!0}),m.default.save(this.user),u.default.commit("login"),this.hasLogin=!0,alert("登录成功"),window.location.href="./"))},clearMsg:function(){this.msg=""}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=(i(n),s(2));i(a);e.default={name:"management",data:function(){return{items:[]}},watch:{},methods:{}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),a=i(n),o=s(1),r=i(o),l=s(6),c=i(l),d=s(2),u=i(d);e.default={name:"profile",data:function(){return{users:r.default.fetch(),id:a.default.state.cid,name:a.default.state.cname,tel:"",email:"",pwd:"",msg:""}},watch:{users:{handler:function(t){r.default.save(t)},deep:!0}},mounted:function(){var t=u.default.findElem(this.users,"name",this.name);this.tel=this.users[t].tel||"",this.email=this.users[t].email||""},methods:{resetprofile:function(){var t=u.default.findElem(this.users,"name",this.name);u.default.findElem(this.users,"pwd",(0,c.default)(this.pwd));if(this.tel.trim()==this.users[t].tel&&this.email.trim()==this.users[t].email)return void(this.msg="您没有修改");if(this.tel.trim()!=this.users[t].tel||this.email.trim()!=this.users[t].email){if(""==this.pwd.trim())return void(this.msg="请确认密码");if(this.users[t].pwd!=(0,c.default)(this.pwd))return void(this.msg="密码错误");this.users[t].pwd==(0,c.default)(this.pwd)&&(this.users[t].tel=this.tel,this.users[t].email=this.email,r.default.save(this.users),alert("修改成功"),window.location.href="./")}},clearMsg:function(){this.msg=""}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),a=i(n),o=s(6),r=i(o),l=s(2),c=i(l);e.default={name:"register",data:function(){return{newName:"",newPwd:"",msg:"",id:"",users:a.default.fetch(),isRegister:!1}},watch:{users:{handler:function(t){a.default.save(t)},deep:!0},isRegister:{handler:function(t){t&&this.$router.push({path:"/login",redirect:function(t){login}})},deep:!0}},methods:{addUser:function(){if(""==this.newName.trim())return void(this.msg="请输入用户名");var t=c.default.findElem(this.users,"name",this.newName);return t!=-1?void(this.msg="该用户名已被注册"):""==this.newPwd.trim()?void(this.msg="请输入密码"):""==this.$refs.checkPwd.value.trim()?void(this.msg="请确认密码"):this.newPwd!=this.$refs.checkPwd.value?void(this.msg="两次密码不一致"):(this.id="vl_"+(new Date).getTime()+Math.floor(100*Math.random()),this.users.push({id:this.id,name:this.newName,pwd:(0,r.default)(this.newPwd)}),this.isRegister=!0,void alert("注册成功"))},clearMsg:function(){this.msg=""}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(17),a=i(n),o=s(2),r=i(o),l=s(3),c=i(l);e.default={name:"todolist",data:function(){return{allitems:a.default.fetch(),newItem:"",name:"",id:"",msg:"",isActive:!0,showFinishedList:!1,items:[],typeLists:[],currIndex:"",isIndex:-1,showInListType:!1,isShowEdit:!1,newType:"",mainItems:[],selectedIndex:-1,showDeleteConfirm:!1,isShowEditType:!1,showEditTypeConfirm:!1}},watch:{allitems:{handler:function(t){a.default.save(t)},deep:!0}},mounted:function(){var t=this;this.allitems.forEach(function(e){e.id==c.default.state.cid&&(""!=e.plan.trim()&&t.items.push(e),t.mainItems.push(e))}),this.mainItems.forEach(function(e){t.typeLists.indexOf(e.subtype)<0&&t.typeLists.push(e.subtype)})},methods:{showAddTypeModal:function(){return c.default.state.cid?void(this.showInListType=!0):void(this.msg="请先登录")},manageList:function(){return c.default.state.cid?(console.log(this.typeLists.length),this.typeLists.length<1?void alert("暂无分类可以管理，请先新建分类"):void(this.isShowEditType=!0)):void(this.msg="请先登录")},getCurrItems:function(){var t=this;this.items=[],this.mainItems=[],this.allitems.forEach(function(e){e.id==c.default.state.cid&&(""!=e.plan.trim()&&t.items.push(e),t.mainItems.push(e))})},getTypeLists:function(){var t=this;this.typeLists=[],this.mainItems.forEach(function(e){t.typeLists.indexOf(e.subtype)<0&&t.typeLists.push(e.subtype)})},getOtherLists:function(){var t=this;this.getCurrItems(),this.items=[],this.mainItems.forEach(function(e){e.subtype==t.currIndex&&""!=e.plan.trim()&&t.items.push(e)})},showAllLists:function(){return c.default.state.cid?(this.isActive=!0,this.isIndex=-1,this.getCurrItems(),void this.getTypeLists()):void(this.msg="请先登录")},showCurrList:function(t){this.currIndex=this.typeLists[t],this.isActive=!1,this.isIndex=t,this.getCurrItems(),this.getOtherLists()},addActive:function(t){this.selectedIndex=t},showEdit:function(t){this.isShowEdit=!1,this.item=t,this.editItem=this.item,this.isShowEdit=!0},hideEdit:function(t){""==this.item.plan.trim()?this.showDeleteConfirm=!0:this.isShowEdit=!1},hideEditType:function(){this.isShowEditType=!1},checkEmpty:function(t){""==this.item.plan.trim()&&(this.showDeleteConfirm=!0)},checkEmptyType:function(t){this.editTypeIndex=t,""==this.typeLists[t].trim()&&(this.showEditTypeConfirm=!0)},deleteList:function(){this.showDeleteConfirm=!1,this.isShowEdit=!1,this.item.type="",this.item.plan="",this.getCurrItems(),this.isActive?this.getTypeLists():this.getOtherLists()},deleteType:function(){this.showEditTypeConfirm=!1,this.isShowEditType=!1},deleteTypePlan:function(){this.showEditTypeConfirm=!1,this.isShowEditType=!1},toggleFinished:function(t){t.isfinished=!t.isfinished},toggleFinishedList:function(){this.showFinishedList=!this.showFinishedList},showDefault:function(){var t=r.default.findElem(this.items,"isfinished",!0);return t<0},checkLogin:function(){c.default.state.cid||(this.msg="请先登录")},clearMsg:function(){this.msg=""},addItem:function(){if(""!=this.newItem.trim()){if(!c.default.state.cid)return void(this.msg="请先登录");this.allitems.push({id:c.default.state.cid,plan:this.newItem,subtype:this.isActive?"未分类":this.currIndex,isfinished:!1}),this.getCurrItems(),this.getTypeLists(),this.isActive?this.getTypeLists():this.getOtherLists(),this.newItem=""}},addNewType:function(){return c.default.state.cid?void(""!=this.newType.trim()&&(this.allitems.push({id:c.default.state.cid,plan:"",subtype:this.newType,isfinished:!1}),this.getCurrItems(),this.getTypeLists(),this.isActive?this.getTypeLists():this.getOtherLists(),this.newType="",this.showInListType=!1)):void(this.msg="请先登录")}}}},function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(5),a=i(n),o="todolist-vuejs";e.default={fetch:function(){return JSON.parse(window.localStorage.getItem(o)||"[]")},save:function(t){window.localStorage.setItem(o,(0,a.default)(t))},delete:function(t){window.localStorage.removeItem(t)}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAA4CAYAAACBrQbcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUVFQzRGQjlFRUEzMTFFNjkyNzlCMUQwNDMwQzMyNDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUVFQzRGQkFFRUEzMTFFNjkyNzlCMUQwNDMwQzMyNDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RUVDNEZCN0VFQTMxMUU2OTI3OUIxRDA0MzBDMzI0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RUVDNEZCOEVFQTMxMUU2OTI3OUIxRDA0MzBDMzI0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj8CbKMAAAeeSURBVHja7F3tjbM4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"},function(t,e,s){var i,n;s(26),i=s(9);var a=s(44);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=i},function(t,e,s){var i,n;s(22),i=s(10);var a=s(40);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-40cbde7f",t.exports=i},function(t,e,s){var i,n;s(23),i=s(11);var a=s(41);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-61fe4271",t.exports=i},function(t,e,s){var i,n;s(25),i=s(12);var a=s(43);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-9cd13f96",t.exports=i},function(t,e,s){var i,n;s(28),i=s(13);var a=s(46);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-fe6a5d6e",t.exports=i},function(t,e,s){var i,n;s(27),i=s(14);var a=s(45);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-b7260516",t.exports=i},function(t,e,s){var i,n;s(21),i=s(15);var a=s(39);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-3d15d087",t.exports=i},function(t,e,s){var i,n;s(24),i=s(16);var a=s(42);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(n=i=i.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,n._scopeId="data-v-95ccc170",t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"register"}},[e("div",{staticClass:"form"},[e("div",{staticClass:"form-group"},[e("label",["请输入您的用户名"])," "," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.newName,expression:"newName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入您的用户名"},domProps:{value:t._s(t.newName)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.addUser(e)},input:function(e){e.target.composing||(t.newName=e.target.value)}}})])," ",e("div",{staticClass:"form-group"},[e("label",["请输入您的密码"])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPwd,expression:"newPwd"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入您的密码"},domProps:{value:t._s(t.newPwd)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.addUser(e)},input:function(e){e.target.composing||(t.newPwd=e.target.value)}}})])," ",e("div",{staticClass:"form-group"},[e("label",["请确认您的密码"])," ",e("input",{ref:"checkPwd",staticClass:"form-control",attrs:{type:"password",placeholder:"请确认您的密码"},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.addUser(e)}}})])," ",e("p",{ref:"msg",staticClass:"message"},[t._s(t.msg)])," ",e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:t.addUser}},["注册"])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;t.$createElement;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("div",{staticClass:"footer"},[e("p",["Copyright © 2017 VList."])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement;return e("header",[e("nav",{staticClass:"container header"},[t._m(0)," ",e("div",{staticClass:"nav-person"},[t.isLogin?e("div",{staticClass:"nav-login"},[e("div",{staticClass:"user-name"},[e("router-link",{attrs:{to:"/profile"}},[t._s(t.cname)])])," ",e("button",{staticClass:"btn btn-warning",attrs:{href:"#",role:"button"},on:{click:t.signout}},["退出"])]):e("div",{staticClass:"nav-login"},[e("button",{staticClass:"btn btn-success",attrs:{href:"#",role:"button"}},[e("router-link",{attrs:{to:"/register"}},["注册"])])," ",e("button",{staticClass:"btn btn-default",attrs:{href:"#",role:"button"}},[e("router-link",{attrs:{to:"/login"}},["登录"])])])," "])," ",e("ul",{staticClass:"nav-menu"},[e("li",[e("router-link",{attrs:{to:"/todolist"}},["TODO"])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("h1",{staticClass:"logo"},[e("img",{attrs:{src:s(30)}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"container",attrs:{id:"todolist"}},[e("div",[e("div",{staticClass:"btn-group m_t_m typeBtn",attrs:{role:"group"}},[e("button",{staticClass:"btn btn-default",class:{"btn-success":t.isActive},attrs:{type:"button"},on:{click:t.showAllLists}},["全部"])," ",t._l(t.typeLists,function(s,i){return e("button",{staticClass:"btn btn-default",class:{"btn-success":t.isIndex==i},attrs:{type:"button"},on:{click:function(e){t.showCurrList(i)}}},[t._s(s)])})," ",e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.showAddTypeModal}},[e("i",{staticClass:"fa fa-plus"})])," "])," ",e("span",{staticClass:"message"},[t._s(t.msg)])])," ",t.showInListType?e("div",[e("div",{staticClass:"model"},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){t.showInListType=!1}}},["×"])])," ",e("h4",{staticClass:"modal-title"},["为新增的分类取个名字"])])," ",e("div",{staticClass:"modal-body"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newType,expression:"newType"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入分类的名称"},domProps:{value:t._s(t.newType)},on:{keyup:function(e){13===e.keyCode&&t.addNewType(e)},input:function(e){e.target.composing||(t.newType=e.target.value)}}})])," ",e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.showInListType=!1}}},["取消"])," ",e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addNewType}},["确定"])])])])])]):t._e()," ",e("div",[e("div",[e("div",{staticClass:"input-group m_t_s m_b_s"},[e("span",{staticClass:"input-group-btn"},[e("button",{staticClass:"btn btn-default btn-lg",attrs:{type:"button"},on:{click:t.addItem}},["+"])])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"添加计划..."},domProps:{value:t._s(t.newItem)},on:{keyup:function(e){13===e.keyCode&&t.addItem(e)},focus:t.checkLogin,blur:t.clearMsg,input:function(e){e.target.composing||(t.newItem=e.target.value)}}})])])," ",e("div",{staticClass:"task-list"},[e("ul",[t._l(t.items,function(s,i){return s.isfinished?t._e():e("li",{staticClass:"plan_list",class:[{finished:s.isfinished},{active:t.selectedIndex==i}],on:{dblclick:function(e){t.showEdit(s)}}},[e("div",{staticClass:"labelforlist"},[e("label",{staticClass:"checkboxInput"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.isfinished,expression:"item.isfinished"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.isfinished)?t._i(s.isfinished,null)>-1:t._q(s.isfinished,!0)},on:{click:t.toggleFinished,change:function(e){var i=s.isfinished,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=null,r=t._i(i,o);a?r<0&&(s.isfinished=i.concat(o)):r>-1&&(s.isfinished=i.slice(0,r).concat(i.slice(r+1)))}else s.isfinished=a}}})])," ",e("span",{staticClass:"item_plan",on:{click:function(e){t.addActive(i)}}},[t._s(s.plan)])])])})])])," ",e("div",{staticClass:"task-list"},[t.showFinishedList?e("button",{staticClass:"btn btn-success m_t_s",on:{click:t.toggleFinishedList}},["显示已完成任务"]):e("button",{staticClass:"btn btn-success m_t_s",on:{click:t.toggleFinishedList}},["收起已完成任务"])," "," ",t.showFinishedList?t._e():e("transition",{attrs:{name:"fade"}},[e("ul",[e("li",[t.showDefault()?e("h5",["暂无完成任务"]):e("h5",["以下为完成任务"])," "])," ",t._l(t.items,function(s,i){return s.isfinished?e("li",{staticClass:"plan_list plan_list_done",class:[{finished:s.isfinished},{active:t.selectedIndex==i}],on:{dblclick:function(e){t.showEdit(s)}}},[e("div",{staticClass:"labelforlist"},[e("label",{staticClass:"checkboxInput"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.isfinished,expression:"item.isfinished"}],staticClass:"nochecked",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(s.isfinished)?t._i(s.isfinished,null)>-1:t._q(s.isfinished,!0)},on:{click:t.toggleFinished,change:function(e){var i=s.isfinished,n=e.target,a=!!n.checked;if(Array.isArray(i)){var o=null,r=t._i(i,o);a?r<0&&(s.isfinished=i.concat(o)):r>-1&&(s.isfinished=i.slice(0,r).concat(i.slice(r+1)))}else s.isfinished=a}}})])," ",e("span",{staticClass:"item_plan line-through",on:{click:function(e){t.addActive(i)}}},[t._s(s.plan)])])]):t._e()})])])])])," ",e("transition",{attrs:{name:"slide-fade"}},[t.isShowEdit?e("div",{staticClass:"fixedEdit"},[e("i",{staticClass:"fa fa-angle-double-right arrow",on:{click:t.hideEdit}})," ",e("i",{staticClass:"fa fa-trash delete",on:{click:function(e){t.showDeleteConfirm=!0}}})," ",e("div",{staticClass:"labelforlist m_t_m editMain clearfix"},[e("label",{staticClass:"checkboxInput float_l"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.item.isfinished,expression:"item.isfinished"}],class:{nochecked:t.item.isfinished},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.item.isfinished)?t._i(t.item.isfinished,null)>-1:t._q(t.item.isfinished,!0)},on:{change:function(e){var s=t.item.isfinished,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=null,o=t._i(s,a);n?o<0&&(t.item.isfinished=s.concat(a)):o>-1&&(t.item.isfinished=s.slice(0,o).concat(s.slice(o+1)))}else t.item.isfinished=n}}})])," ",e("div",{staticClass:"col-xs-11"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.plan,expression:"item.plan"}],staticClass:"form-control editText",attrs:{tabindex:"0"},domProps:{value:t._s(t.item.plan)},on:{blur:function(e){t.checkEmpty()},input:function(e){e.target.composing||(t.item.plan=e.target.value)}}})])," "," "])]):t._e()])," ",e("transition",{attrs:{name:"slide-fade"}},[t.isShowEditType?e("div",{staticClass:"fixedEdit"},[e("i",{staticClass:"fa fa-angle-double-right arrow",on:{click:t.hideEditType}})," ",t._l(t.typeLists,function(s,i){return e("div",{staticClass:"m_t_s"},[e("div",{staticClass:"col-xs-11"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.typeLists[i],expression:"typeLists[index]"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.typeLists[i])},on:{blur:function(e){t.checkEmptyType(i)},input:function(e){if(!e.target.composing){var s=t.typeLists,n=i;Array.isArray(s)?s.splice(n,1,e.target.value):t.typeLists[i]=e.target.value}}}})])," ",e("i",{staticClass:"fa fa-trash",on:{click:function(e){t.showEditTypeConfirm=!0}}})])})]):t._e()])," ",t.showDeleteConfirm?e("div",[e("div",{staticClass:"model text-center"},[e("div",{staticClass:"modal-dialog modal-sm"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){t.showInListType=!1}}},["×"])])," ",e("h4",{staticClass:"modal-title"},["确定删除吗"])])," ",e("div",{staticClass:"modal-body"},[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.showDeleteConfirm=!1}}},["取消"])," ",e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.deleteList}},["确定"])])])])])]):t._e()," ",t.showEditTypeConfirm?e("div",[e("div",{staticClass:"model text-center"},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"},on:{click:function(e){t.showInListType=!1}}},["×"])])," ",e("h4",{staticClass:"modal-title"},["确定删除该分类吗"])])," ",e("div",{staticClass:"modal-body"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteTypePlan}},["删除该类及该类下的计划"])," ",e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.deleteType}},["只删除该类，不删除该类下的计划"])," ",e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.showEditTypeConfirm=!1}}},["取消删除"])])])])])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"row",attrs:{id:"login"}},[e("div",{staticClass:"form"},[e("div",{staticClass:"form-group"},[e("label",["请输入您的用户名"])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"请输入您的用户名"},domProps:{value:t._s(t.name)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.login(e)},input:function(e){e.target.composing||(t.name=e.target.value)}}})])," ",e("div",{staticClass:"form-group"},[e("label",["请输入您的密码"])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"form-control",attrs:{type:"password",placeholder:"请输入您的密码"},domProps:{value:t._s(t.pwd)},on:{focus:t.clearMsg,keyup:function(e){13===e.keyCode&&t.login(e)},input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])," ",e("p",{staticClass:"message"},[t._s(t.msg)])," ",e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:t.login}},["登录"])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("vheader")," ",e("router-view")," ",e("vfooter")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{staticClass:"clearfix",attrs:{id:"profile"}},[e("div",{staticClass:"form-horizontal m_t_m col-sm-8 col-sm-push-2 "},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label"},["ID："])," ",e("div",{staticClass:"col-sm-10"},[e("p",{staticClass:"form-control-static"},[t._s(t.id)])])])," ",e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label"},["用户名："])," ",e("div",{staticClass:"col-sm-10"},[e("p",{staticClass:"form-control-static"},[t._s(t.name)])])])," ",e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label"},["手机号："])," ",e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"form-control",attrs:{type:"tel",id:"inputTel",placeholder:"电话号码"},domProps:{value:t._s(t.tel)},on:{focus:t.clearMsg,input:function(e){e.target.composing||(t.tel=e.target.value)}}})])])," ",e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label"},["邮　箱："])," ",e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"邮箱"},domProps:{value:t._s(t.email)},on:{focus:t.clearMsg,input:function(e){e.target.composing||(t.email=e.target.value)}}})])])," ",e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-sm-2 control-label",attrs:{for:"inputPassword"}},["密　码："])," ",e("div",{staticClass:"col-sm-10"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"确认密码"},domProps:{value:t._s(t.pwd)},on:{focus:t.clearMsg,input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])])," ",e("p",{staticClass:"text-center message"},[t._s(t.msg)])," ",e("div",{staticClass:"text-center m_t_m"},[e("button",{staticClass:"btn btn-success",on:{click:t.resetprofile}},["保存"])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"management"}},[e("h4",[e("center",["当前为管理清单分类页，暂未完成"])])," ",e("ul",[t._l(t.items,function(t){return e("li")})])])},staticRenderFns:[]}},,,,function(t,e){}]);
//# sourceMappingURL=app.d8e1e647820eb41aac05.js.map