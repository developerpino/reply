(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"18bc":function(e,t,r){"use strict";var n=r("819f"),s=r.n(n);s.a},"493d":function(e,t,r){"use strict";var n=r("55b8"),s=r.n(n);s.a},"49df":function(e,t,r){"use strict";var n=r("5302"),s=r.n(n);s.a},5302:function(e,t,r){},"55b8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i={name:"App"},o=i,c=(r("49df"),r("2877")),u=Object(c["a"])(o,s,a,!1,null,"b5707502",null),l=u.exports,d=r("2f62"),p={state:{boardList:[{idx:1,title:"생명의 정체",content:"생명 그건 단지 우연일 뿐 큰 우주의 아주 작은 사건일 뿐 미세한 세포를 복제하는 화학적 유전자 돌연변이 그것이 생명의 정체",desc:"chapter",isAllViewReply:!1},{idx:2,title:"생명 불변의 법칙",content:"생명 그건 신의 자연섭리 함부로 다가설 수 없는 세계 오직 신만이 정해놓은 질서에 기대어 보존되는 생태계  그것이 생명 불변의 법칙",desc:"chapter",isAllViewReply:!1},{idx:3,title:"신념도 야망",content:"과학은 생태계를 뛰어넘어 과학은 그 비밀을 밝혀낼 뿐 금단의 사과를 먹었던 것 처럼 언제나 인간은 유혹에 빠지니 당신의 신념도 야망일 뿐",desc:"chapter",isAllViewReply:!1}]},mutations:{toggleIsAllViewReply:function(e,t){e.boardList[t].isAllViewReply=!e.boardList[t].isAllViewReply}},actions:{},getters:{getBoardList:function(e){return e.boardList}}},f=(r("96cf"),r("1da1")),g=r("bc3a"),h=r.n(g),v={getReply:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/api/board/reply",{params:{idx:e}}).catch((function(){return{data:{}}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},setReply:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/api/board/reply/".concat(e.boardIdx),{content:e.content});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getLikes:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("/api/board/likes",{params:{idx:e}}).catch((function(){return{data:{}}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},setLikes:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.post("/api/board/likes/".concat(e.boardIdx),{user:e.user});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},removeLikes:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h.a.delete("/api/board/likes/".concat(e.boardIdx),{params:{user:e.user}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},y={state:{reply:{}},mutations:{setReply:function(e,t){e.reply=t},pushReply:function(e,t){e.reply[t.boardIdx]?e.reply[t.boardIdx].push(t.content):e.reply[t.boardIdx]=[t.content]}},actions:{getReply:function(e,t){return v.getReply(t).then((function(t){var r=t.data;e.commit("setReply",r)}))},saveReply:function(e,t){return v.setReply(t).then((function(r){201===r.status&&e.commit("pushReply",t)}))}},getters:{getReply:function(e){return e.reply}}},m=(r("c975"),r("a434"),{state:{likes:{}},mutations:{setLikes:function(e,t){e.likes=t},pushLikes:function(e,t){e.likes[t.boardIdx]?e.likes[t.boardIdx].push(t.user):e.likes[t.boardIdx]=[t.user]},removeLikes:function(e,t){var r=e.likes[t.boardIdx].indexOf(t.user);r>-1&&e.likes[t.boardIdx].splice(r,1)}},actions:{getLikes:function(e,t){return v.getLikes(t).then((function(t){var r=t.data;e.commit("setLikes",r)}))},saveLikes:function(e,t){return v.setLikes(t).then((function(r){201===r.status&&e.commit("pushLikes",t)}))},removeLikes:function(e,t){return v.removeLikes(t).then((function(r){202===r.status&&e.commit("removeLikes",t)}))}},getters:{getLikes:function(e){return e.likes}}});n["a"].use(d["a"]);var b=new d["a"].Store({modules:{board:p,reply:y,likes:m}}),x=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"mx-auto"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"text-center my-3"},[r("div",{staticClass:"card-deck no-gutters"},e._l(e.getBoardList,(function(t,n){return r("div",{key:n,staticClass:"col-12 col-sm-6 col-md-6 col-lg-3"},[r("div",{staticClass:"card mb-4"},[r("div",{staticClass:"card-header"},[r("h5",{staticClass:"card-title m-0 p-0 font-weight-bolder text-secondary"},[e._v(e._s(t.title))])]),r("div",{staticClass:"card-body text-left"},[r("p",{staticClass:"card-text"},[e._v(e._s(t.content))]),r("div",{staticClass:"masking"},[r("div",{staticClass:"masking-desc"},[e._v(e._s(t.desc))]),r("div",{staticClass:"masking-text"},[e._v(e._s(t.idx))])])]),r("div",{staticClass:"card-footer"},[r("div",{staticClass:"likes"},[r("div",{staticStyle:{position:"relative"}},[r("div",{staticClass:"heart",class:e.getLikes[t.idx]&&e.getLikes[t.idx].includes(e.$router.currentRoute.params.user)?"is-active":"",attrs:{"data-board-idx":t.idx},on:{click:e.toggleLike}})]),r("span",{staticStyle:{"margin-left":"70px"}},[e._v(e._s(e.getLikes[t.idx]?e.getLikes[t.idx].length:0))]),e._v(" 명이 좋아합니다 ")]),r("div",{staticClass:"reply-list"},[e.getReply[t.idx]&&e.getReply[t.idx].length>3&&!1===t.isAllViewReply?r("div",{staticClass:"reply-is-all-view-reply",on:{click:function(t){return e.toggleIsAllViewReply(n)}}},[e._v("댓글 "+e._s(e.getReply[t.idx].length-2)+"개 모두 보기")]):e._e(),e._l(e.getReply[t.idx],(function(n,s){return r("div",{directives:[{name:"show",rawName:"v-show",value:t.isAllViewReply||3===e.getReply[t.idx].length||e.getReply[t.idx].length-s<3,expression:"board.isAllViewReply || getReply[board.idx].length===3 || getReply[board.idx].length-replyKey<3"}],key:s,staticClass:"reply-view"},[e._v(" "+e._s(n)+" ")])}))],2),r("div",[r("input",{staticClass:"form__input",staticStyle:{width:"100%",height:"40px"},attrs:{type:"text",placeholder:"댓글 달기.....",maxlength:"100","data-board-idx":t.idx},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setReply(t)}}})])])])])})),0)])])])])])])])},w=[],R=(r("caad"),r("d81d"),r("d3b7"),r("2532"),r("3ca3"),r("ddb0"),r("5530")),_={name:"Board",mounted:function(){var e=this.getBoardList.map((function(e){return e.idx})),t=this.$store.dispatch("getReply",e),r=this.$store.dispatch("getLikes",e);Promise.all([t,r]).then((function(){}))},computed:Object(R["a"])({},Object(d["b"])(["getBoardList","getReply","getLikes"])),methods:{setReply:function(e){e.target.dataset.boardIdx&&e.target.value.length>0&&this.$store.dispatch("saveReply",{boardIdx:e.target.dataset.boardIdx,content:e.target.value}).then((function(){e.target.value=""}))},toggleLike:function(e){this.getLikes[e.target.dataset.boardIdx].includes(this.$router.currentRoute.params.user)?this.$store.dispatch("removeLikes",{boardIdx:e.target.dataset.boardIdx,user:this.$router.currentRoute.params.user}):this.$store.dispatch("saveLikes",{boardIdx:e.target.dataset.boardIdx,user:this.$router.currentRoute.params.user})},toggleIsAllViewReply:function(e){this.$store.commit("toggleIsAllViewReply",e)}}},L=_,C=(r("493d"),Object(c["a"])(L,k,w,!1,null,"1da55a8c",null)),I=C.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("article",{staticClass:"form__group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userId,expression:"userId"}],staticClass:"form__input",attrs:{type:"text",placeholder:"사용하실 아이디를 입력해주세요.",required:"",autofocus:""},domProps:{value:e.userId},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.tryLogin(t)},input:function(t){t.target.composing||(e.userId=t.target.value)}}})]),r("article",{staticClass:"form__button"},[r("button",{staticClass:"button"},[r("div",{staticClass:"button__content",on:{click:e.tryLogin}},[r("div",{staticClass:"button__icon"})])])])])},j=[],$={methods:{tryLogin:function(){this.userId.length>0&&this.$router.push({path:"/board/".concat(this.userId)})}},data:function(){return{userId:""}}},A=$,V=(r("18bc"),Object(c["a"])(A,O,j,!1,null,"3e6aa177",null)),P=V.exports;n["a"].use(x["a"]);var S=new x["a"]({mode:"history",routes:[{path:"/board/:user",component:I},{path:"*",component:P}]}),B=S;n["a"].config.productionTip=!1,new n["a"]({store:b,router:B,render:function(e){return e(l)}}).$mount("#app")},"819f":function(e,t,r){}});
//# sourceMappingURL=app.0cd5b5ad.js.map