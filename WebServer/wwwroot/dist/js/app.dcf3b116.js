(function(e){function t(t){for(var n,o,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==i[s]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},i={app:0},r=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b0d36dbe","chunk-2d0c09f3":"b10257f9","chunk-5c39321c":"0516d0fd"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-5c39321c":1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c09f3":"31d6cfe0","chunk-5c39321c":"3cca77f4"}[e]+".css",i=l.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){c=m[s],u=c.getAttribute("data-href");if(u===n||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete o[e],d.parentNode.removeChild(d),a(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",m.name="ChunkLoadError",m.type=n,m.request=o,a[1](m)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2b83":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDE4OUEyRDE1NDhCMTFFMUJDMjBDMkMwN0RDQkE4QjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDE4OUEyRDI1NDhCMTFFMUJDMjBDMkMwN0RDQkE4QjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMTg5QTJDRjU0OEIxMUUxQkMyMEMyQzA3RENCQThCOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMTg5QTJEMDU0OEIxMUUxQkMyMEMyQzA3RENCQThCOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps7mAvIAAAXZSURBVHjatFdbaBRX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"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main-navbar"),a("main",{staticClass:"container mt-4",attrs:{role:"main"}},[a("router-view")],1),a("login-modal"),a("live-chat-modal")],1)},i=[],r=a("5530"),s=a("2f62"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light shadow"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#/"}},[e._v("Tron")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"main-navbar"}},[e._m(1),e.isAuthenticated?a("span",{staticClass:"navbar-text mr-2"},[e._v(" Welcome back, "+e._s(e.profile.name)+" ")]):e._e(),e.isAuthenticated?a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("Logout")])]):a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("button",{directives:[{name:"b-modal",rawName:"v-b-modal.prevent.loginModal",modifiers:{prevent:!0,loginModal:!0}}],staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[e._v("Login")])])])])},c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#/"}},[e._v("Home "),a("span",{staticClass:"sr-only"},[e._v("(current)")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#/Ranking"}},[e._v("Ranking "),a("span",{staticClass:"sr-only"},[e._v("(current)")])])])])}],u={computed:Object(r["a"])({},Object(s["d"])("context",["profile"]),{},Object(s["c"])("context",["isAuthenticated"])),methods:Object(r["a"])({},Object(s["b"])("context",["logout"]))},m=u,d=a("2877"),f=Object(d["a"])(m,l,c,!1,null,null,null),p=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"loginModal",attrs:{id:"loginModal","hide-footer":"",title:"Login"},on:{hidden:e.onHidden}},[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),e.onCancel(t)}}},[a("b-form-group",{attrs:{label:"Email:","label-for":"emailInput"}},[a("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter your email address"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{label:"Password:","label-for":"passwordInput"}},[a("b-form-input",{attrs:{id:"passwordInput",type:"password",required:"",placeholder:"Enter your password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("b-form-group",{attrs:{label:"Authentication mode"}},[a("b-form-radio-group",{attrs:{id:"authMode",options:e.authOptions},model:{value:e.authMode,callback:function(t){e.authMode=t},expression:"authMode"}})],1),a("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{type:"submit"}},[e._v("Login")]),a("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"}},[e._v("Cancel")])],1)],1)},h=[],g={data:function(){return{form:{email:"",password:""},authMode:"cookie",authOptions:[{text:"Cookie",value:"cookie"},{text:"JWT Bearer",value:"jwt"}]}},methods:Object(r["a"])({},Object(s["b"])("context",["login"]),{onSubmit:function(){var e=this;this.login({authMethod:this.authMode,credentials:this.form}).then((function(){e.$refs.loginModal.hide()}))},onCancel:function(){this.$refs.loginModal.hide()},onHidden:function(){Object.assign(this.form,{email:"",password:""})}})},v=g,A=Object(d["a"])(v,b,h,!1,null,null,null),y=A.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"liveChatModal",attrs:{id:"liveChatModal","hide-footer":"",title:"Live Chat",size:"xl"},on:{hidden:e.onHidden,hide:e.onHide,show:e.onShow}},[a("div",{staticClass:"bg-light messages-container"},[e.filteredMessages.length?a("ul",{staticClass:"list-unstyled container"},e._l(e.filteredMessages,(function(t,n){return a("li",{key:n,staticClass:"row my-2"},[a("span",{staticClass:"col-4"},[e._v(e._s(t.username===e.profile.name?"You":t.username))]),a("vue-markdown",{class:{"col-8":!0,"text-muted":t.username===e.profile.name},attrs:{source:t.text}})],1)})),0):a("p",{staticClass:"text-muted text-center"},[e._v(" Welcome..."),a("br"),e._v(" Say hi! ")])]),a("b-form",{staticClass:"border-top mt-2 pt-2",on:{submit:function(t){return t.preventDefault(),e.onSendMessage(t)}}},[a("b-form-group",{attrs:{label:"Your message:",description:"Press Ctrl + Enter to send","label-for":"messageInput"}},[a("b-form-textarea",{attrs:{id:"messageInput",placeholder:"What do you have to say?",rows:2,"max-rows":10},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),a("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{type:"submit"}},[e._v("Send")])],1)],1)},G=[],M=(a("99af"),a("4de4"),a("2909")),k=a("9ce6"),C=a.n(k),I={components:{VueMarkdown:C.a},data:function(){return{messages:[],form:{message:""}}},computed:Object(r["a"])({},Object(s["d"])("context",["profile","currentGameUid"]),{filteredMessages:function(){var e=this;return this.currentGameUid?this.messages.filter((function(t){return t.gameUid===e.currentGameUid})):this.messages.filter((function(e){return!e.gameUid}))}}),created:function(){this.$mainHub.$on("chat-message-received",this.onMessageReceived)},beforeDestroy:function(){this.$mainHub.$off("chat-message-received",this.onMessageReceived)},methods:{onMessageReceived:function(e){var t=e.username,a=e.text;this.messages=[{username:t,text:a,gameUid:this.currentGameUid}].concat(Object(M["a"])(this.messages))},onSendMessage:function(){this.$mainHub.sendMessage(this.form.message,this.currentGameUid),this.form.message=""},onShow:function(){window.addEventListener("keydown",this.onKeyPress)},onHide:function(){window.addEventListener("keydown",this.onKeyPress)},onHidden:function(){Object.assign(this.form,{message:""})},onKeyPress:function(e){e.ctrlKey&&13==e.keyCode&&this.form.message&&this.onSendMessage()}}},S=I,R=(a("5f00"),Object(d["a"])(S,w,G,!1,null,"0fa3df7d",null)),U=R.exports,j={name:"App",components:{MainNavbar:p,LoginModal:y,LiveChatModal:U},created:function(){this.restoreContext()},methods:Object(r["a"])({},Object(s["b"])("context",["restoreContext"]))},E=j,O=Object(d["a"])(E,o,i,!1,null,null,null),D=O.exports,x=a("bc3a"),Z=a.n(x),L=(a("d3b7"),a("8c4f")),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"mt-3"},[a("b-button-group",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.addGameModal",modifiers:{addGameModal:!0}}],attrs:{disabled:!e.isAuthenticated,variant:"success"}},[a("i",{staticClass:"fas fa-plus"}),e._v(" New game")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.liveChatModal",modifiers:{liveChatModal:!0}}],attrs:{variant:"secondary",disabled:!e.isAuthenticated}},[a("i",{staticClass:"fas fa-comments"}),e._v(" Live chat")])],1)],1),a("div",{staticClass:"mt-4"},[a("b-table",{attrs:{responsive:"",striped:"",hover:"",items:e.games,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[t.item.player1Name===e.userEmail||t.item.player2Name===e.userEmail||t.item.player1Name&&t.item.player2Name?e._e():a("b-button",{staticClass:"mr-1",attrs:{variant:"outline-secondary",size:"sm"},on:{click:function(a){return a.stopPropagation(),e.joinGame(t.item)}}},[e._v(" Join ")]),t.item.player1Name&&t.item.player2Name&&(t.item.player1Name===e.userEmail||t.item.player2Name===e.userEmail)?a("b-button",{staticClass:"mr-1",attrs:{variant:"outline-success",size:"sm"},on:{click:function(a){return a.stopPropagation(),e.startGame(t.item)}}},[e._v(" Start ")]):e._e()]}},{key:"cell(gameLevel)",fn:function(t){return[a("b-badge",{attrs:{variant:3==t.item.gameLevel?"danger":"secondary"}},[e._v(e._s(e.gameLevels[t.item.gameLevel]))])]}}])})],1),a("div",{staticClass:"pt-4 pd-sm-0 v-if="},[a("ranking-table")],1),a("add-game-modal",{on:{"game-added":e.onGameAdded}})],1)},T=[],z=(a("c740"),a("45fc"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"addGameModal",attrs:{id:"addGameModal","hide-footer":"",title:"Add new Game"},on:{hidden:e.onHidden}},[a("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),e.onCancel(t)}}},[a("b-form-group",{attrs:{label:"Name:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",type:"text",required:"",placeholder:"Please provide a name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("b-form-group",{attrs:{label:"Level:","label-for":"levelInput"}},[a("b-form-select",{attrs:{id:"levelInput",required:"",placeholder:"Please provide a game level",options:e.gameLevelOptions},model:{value:e.form.gameLevel,callback:function(t){e.$set(e.form,"gameLevel",t)},expression:"form.gameLevel"}})],1),a("b-form-group",{attrs:{label:"Arena size:","label-for":"arenaSizeInput"}},[a("b-form-select",{attrs:{id:"arenaSizeInput",required:"",placeholder:"Please provide a game arena size",options:e.arenaSizeOptions},model:{value:e.form.arenaSize,callback:function(t){e.$set(e.form,"arenaSize",t)},expression:"form.arenaSize"}})],1),a("b-form-group",{attrs:{label:"Player size:","label-for":"playerSizeInput"}},[a("b-form-select",{attrs:{id:"playerSizeInput",required:"",placeholder:"Please provide a player(element) size",options:e.playerSizeOptions},model:{value:e.form.playerSize,callback:function(t){e.$set(e.form,"playerSize",t)},expression:"form.playerSize"}})],1),a("b-form-group",{attrs:{label:"Note:","label-for":"noteInput"}},[a("b-form-textarea",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.focus.d800",modifiers:{focus:!0,d800:!0}}],attrs:{id:"noteInput",placeholder:"Enter some note",title:"use markdown to format your note ",rows:6,"max-rows":10},model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1),a("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{disabled:e.working,type:"submit"}},[e._v("Submit")]),a("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"}},[e._v("Cancel")])],1)],1)}),Q=[],B={data:function(){return{form:{name:"",note:"",gameLevel:1,arenaSize:700,playerSize:10},working:!1}},computed:Object(r["a"])({},Object(s["c"])("context",["gameLevels","arenaSizeOptions","playerSizeOptions","gameLevelOptions"])),methods:{onSubmit:function(){var e=this;this.working=!0,this.$http.post("api/game",this.form).then((function(t){e.working=!1,e.$emit("game-added",t.data),e.$refs.addGameModal.hide()})).catch((function(){e.working=!1}))},onCancel:function(){this.$refs.addGameModal.hide()},onHidden:function(){Object.assign(this.form,{name:"",note:""})}}},W=B,Y=Object(d["a"])(W,z,Q,!1,null,null,null),H=Y.exports,P=a("e599"),V={name:"Home",components:{AddGameModal:H,RankingTable:P["a"]},data:function(){return{fields:[{key:"actions",label:" "},{key:"name",sortable:!0,label:"Game name"},{key:"player1Name",label:"Player 1",sortable:!0},{key:"player2Name",label:"Player 2",sortable:!0},{key:"note",label:"Note",sortable:!0},{key:"gameLevel",label:"Level",sortable:!0},{key:"size",label:"Size",sortable:!0}],games:[],stats:{},statisticsModalShow:!1}},computed:Object(r["a"])({},Object(s["d"])("context",["profile"]),{},Object(s["c"])("context",["isAuthenticated","userName","userEmail","gameLevels"])),created:function(){var e=this;this.$mainHub.$on("game-added",this.onGameAdded),this.$mainHub.$on("game-joined",this.onGameJoined),this.$mainHub.$on("game-removed",this.onGameRemoved),this.isAuthenticated&&this.$http.get("/api/game").then((function(t){e.games=t.data}))},beforeDestroy:function(){this.$mainHub.$off("game-added",this.onGameAdded),this.$mainHub.$off("game-joined",this.onGameJoined),this.$mainHub.$off("game-removed",this.onGameRemoved)},methods:{onGameAdded:function(e){this.games.some((function(t){return t.gameUid===e.gameUid}))||(this.games=[e].concat(Object(M["a"])(this.games)))},onGameJoined:function(e){if(e){var t=this.games.findIndex((function(t){return t.gameUid===e.gameUid}));this.$set(this.games,t,e)}},onGameRemoved:function(e){if(e){var t=this.games.findIndex((function(t){return t.gameUid===e}));this.$delete(this.games,t)}},joinGame:function(e){var t=this;e.player1Name!==this.userEmail&&e.player2Name!==this.userEmail||this.$bvToast.toast("Already part of the game!",{toaster:"b-toaster-bottom-right",title:"Attempt to join the game",variant:"warning",solid:!0,appendToast:!0}),this.$http.post("api/game/".concat(e.gameUid,"/join"),e).then((function(){t.$bvToast.toast("Successfully join the game!",{toaster:"b-toaster-bottom-right",title:"Attempt to joined the game",variant:"success",solid:!0,appendToast:!0})}))},startGame:function(e){var t=e.player1Name&&e.player1Name.toLowerCase()===this.userEmail?1:e.player2Name&&e.player2Name.toLowerCase()===this.userEmail?2:0;0!==t&&this.$router.push("/game/".concat(e.gameUid,"/").concat(t))},onStatsModalClose:function(){this.statisticsModalShow=!1}}},F=V,J=(a("7228"),Object(d["a"])(F,N,T,!1,null,"0dcf926e",null)),X=J.exports;n["default"].use(L["a"]);var K=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/ranking",name:"Ranking",component:function(){return a.e("chunk-2d0c09f3").then(a.bind(null,"4320"))}},{path:"/game/:id/:playerNum",name:"Game",props:function(e){return{gameUid:e.params.id,playerNumStr:e.params.playerNum}},component:function(){return a.e("chunk-5c39321c").then(a.bind(null,"7d36"))}}],q=new L["a"]({routes:K}),_=q,$=(a("c975"),a("fb6a"),a("b0c0"),a("ac1f"),a("1276"),location.href.indexOf("localhost")<=0),ee="";if($){var te=location.href.split("#")[0];"/"===te[te.length-1]&&(te=te.slice(0,te.length-1)),ee=te}else ee="https://localhost:44305";var ae={namespaced:!0,state:{profile:{},jwtToken:null,baseUrl:ee,gameLevels:{1:"Easy",2:"Medium",3:"Hard"},gameLevelOptions:[{value:1,text:"Easy"},{value:2,text:"Medium"},{value:3,text:"Hard"}],arenaSizeOptions:[{value:500,text:"Small"},{value:700,text:"Medium"},{value:1e3,text:"Large"}],playerSizeOptions:[{value:6,text:"Small"},{value:10,text:"Medium"},{value:14,text:"Large"}],currentGameUid:null},getters:{isAuthenticated:function(e){return e.profile.name&&e.profile.email},baseUrl:function(e){return e.baseUrl},userName:function(e){return e.profile.name},userEmail:function(e){return e.profile.email},gameLevels:function(e){return e.gameLevels},currentGameUid:function(e){return e.currentGameUid},arenaSizeOptions:function(e){return e.arenaSizeOptions},playerSizeOptions:function(e){return e.playerSizeOptions},gameLevelOptions:function(e){return e.gameLevelOptions}},mutations:{setProfile:function(e,t){e.profile=t},setJwtToken:function(e,t){e.jwtToken=t,t?window.localStorage.setItem("jwtToken",t):window.localStorage.removeItem("jwtToken")},setGameUid:function(e,t){e.currentGameUid=t}},actions:{restoreContext:function(e){var t=e.commit,a=e.getters,o=e.state,i=window.localStorage.getItem("jwtToken");return i&&t("setJwtToken",i),Z.a.get("account/context").then((function(e){if(t("setProfile",e.data),a.isAuthenticated)return n["default"].prototype.startSignalR(o.jwtToken)}))},login:function(e,t){var a=e.state,o=e.dispatch,i=t.authMethod,r=t.credentials,s=o("jwt"===i?"loginToken":"loginCookies",r);return s.then((function(){return n["default"].prototype.startSignalR(a.jwtToken)}))},loginCookies:function(e,t){var a=e.commit;return Z.a.post("account/login",t).then((function(e){a("setProfile",e.data)}))},loginToken:function(e,t){var a=e.commit;return Z.a.post("account/token",t).then((function(e){var t=e.data,n=e.data.token;delete t.token,a("setProfile",t),a("setJwtToken",n)}))},logout:function(e){var t=e.commit,a=e.state,o=a.jwtToken?Promise.resolve():Z.a.post("account/logout");return o.then((function(){return t("setProfile",{}),t("setJwtToken",null),n["default"].prototype.stopSignalR()}))},joinGame:function(e,t){var a=e.commit,n=t.gameUid;a("setGameUid",n)},leaveGame:function(e,t){var a=e.commit,n=t.gameUid;a("setGameUid",n)}}},ne=ae;n["default"].use(s["a"]);var oe=new s["a"].Store({modules:{context:ne}}),ie=oe,re=a("28bd"),se=a("5f5b"),le=(a("f9e3"),a("2dd8"),a("15f5"),a("1a9a")),ce={install:function(e){var t=new e;e.prototype.$mainHub=t;var a=null,n=null,o=!1;e.prototype.startSignalR=function(i){function r(){return n=a.start().catch((function(e){return console.error("Failed to connect with hub",e),new Promise((function(e,t){return setTimeout((function(){return r().then(e).catch(t)}),5e3)}))})),n}a=(new le["a"]).withUrl("".concat(e.prototype.$http.defaults.baseURL,"/main-hub"),i?{accessTokenFactory:function(){return i}}:null).configureLogging(le["b"].Information).build(),a.on("LiveChatMessageReceived",(function(e,a){t.$emit("chat-message-received",{username:e,text:a})})),a.on("GameAdded",(function(e){t.$emit("game-added",e)})),a.on("GameJoined",(function(e){t.$emit("game-joined",e)})),a.on("GameRemoved",(function(e){t.$emit("game-removed",e)})),a.on("GameStart",(function(e){t.$emit("game-start",e)})),a.on("GamePlayerJoin",(function(e,a,n){t.$emit("game-player-joined",e,a,n)})),a.on("GamePlayerLeave",(function(e,a,n,o){t.$emit("game-player-left",e,a,n,o)})),a.on("GameTicked",(function(e,a,n,o,i,r){t.$emit("game-ticked",e,a,n,o,i,r)})),a.on("GameOver",(function(e,a,n,o){t.$emit("game-over",e,a,n,o)})),a.on("GamePaused",(function(e,a){t.$emit("game-paused",e,a)})),a.on("GameResumed",(function(e,a){t.$emit("game-resumed",e,a)})),a.onclose((function(){o||r()})),o=!1,r()},e.prototype.stopSignalR=function(){if(n)return o=!0,n.then((function(){return a.stop()})).then((function(){n=null}))},t.sendMessage=function(e,t){if(n)return n.then((function(){return a.invoke("SendLiveChatMessage",e,t)})).catch(console.error)},t.joinGame=function(e,t,o){if(n)return n.then((function(){return a.invoke("GameJoin",e,t,o)})).catch(console.error)},t.leaveGame=function(e,t,o){if(n)return n.then((function(){return a.invoke("GameLeave",e,t,o)})).catch(console.error)},t.playerMove=function(e,t,o){if(n)return n.then((function(){return a.invoke("PlayerMove",e,t,o)})).catch(console.error)},t.gameTick=function(e){if(n)return n.then((function(){return a.invoke("GameTick",e)})).catch(console.error)},t.outOfTheBoundaries=function(e,t,o){if(n)return n.then((function(){return a.invoke("OutOfTheBoundaries",e,t,o)})).catch(console.error)},t.headToHeadCollision=function(e){if(n)return n.then((function(){return a.invoke("HeadToHeadCollision",e)})).catch(console.error)},t.pauseGame=function(e,t){if(n)return n.then((function(){return a.invoke("PauseGame",e,t)})).catch(console.error)},t.resumeGame=function(e,t){if(n)return n.then((function(){return a.invoke("ResumeGame",e,t)})).catch(console.error)}}};n["default"].config.productionTip=!1,Z.a.defaults.baseURL="https://trongamewebserver.azurewebsites.net",Z.a.defaults.withCredentials=!0,Z.a.interceptors.request.use((function(e){return ie.state.context.jwtToken&&(e.headers["Authorization"]="Bearer "+ie.state.context.jwtToken),e})),n["default"].prototype.$http=Z.a,n["default"].use(se["a"]),n["default"].use(ce),n["default"].use(re["a"]),new n["default"]({router:_,store:ie,render:function(e){return e(D)}}).$mount("#app")},"5f00":function(e,t,a){"use strict";var n=a("a2b7"),o=a.n(n);o.a},6352:function(e,t,a){"use strict";var n=a("a3a0"),o=a.n(n);o.a},7228:function(e,t,a){"use strict";var n=a("9c74"),o=a.n(n);o.a},8763:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0JBN0QwQkE1NDhCMTFFMUEwREFBNDgyQzc2QTQ3NTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0JBN0QwQkI1NDhCMTFFMUEwREFBNDgyQzc2QTQ3NTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQkE3RDBCODU0OEIxMUUxQTBEQUE0ODJDNzZBNDc1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQkE3RDBCOTU0OEIxMUUxQTBEQUE0ODJDNzZBNDc1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps6iUWYAAAYgSURBVHjatFddbBRVFD7zt53dpdttKQ1QIwIRFIlBiVrAGBJfJDVoQmKMPqgBE9TgCxIf/CEmPpDwQiIGY0IQiA8EHwwGiZhIhRQqpWJVFmxLS3+3u93Z3Zndnf8fz5mdalm7rS1wk7vZufec73zn3HPPnGE8z4PJwTAM33N447c8C61A6wxDa7D89fYa3DZhbiM08NUmw8cPsGwXTq/afvFF3LMn7fIVSmGe9VqXP/8suLoKjqlDKZmG/iNPGeBaiOMiDotiLHjAIDBOJiAPBOiWJ8kwAsRXLobokiZgBRG4cAQGTv/USjZwFiYNVhIQfbZoSErcBKtQ9A1wYj3cv+1L/BMDK5dA/klgmQxwAu47RHQBOF4d8moCvn4tsBwH/cdfADWdAzUlg1AbhUXr1pQjQTZmIOC75Ko6WCUNTpwd2n+qI/Pn4V3Ljnq2CvKV98GS+0CsXwxCDD2rW4RcbbCUm2AqEphyGvjalRB7bK9v7NVPrr62taVx7UvPLd9jI2YQLmaqQbaCgFfQ3V4dPRciYVi6UDTafs910/l5rgMMvwA1Qn54MRz/ciYYhkcxAVhxETiG7OcO6TYjhhAVwURMwiYbMxGwk1nzgiHlIBSLwsol4qO4JiualzCkXjzH5skgTTEOU9YwaUMNYEl9IKtegnRXIEYNHoGGmGOScZ5szETAPHkhdaKQzIC4MA4LRG69z8oBxTUUdLyu0oEpsSv/8GITuGYBdTyFVghDbIiDOi5BZ6/yY+VtqiRgHP5h7Iap6gadoRgWyGU2rdhdejqB0Y9VJxCwYFDGyA1AWnG6SFcM880MYhmI+fGx/l9mI+Dg1IYzxvel0TSIDbVwaNdDj0/Ido9dkoCL3FfO5GoccI+taQQzPwoTstVDuuGGGMiDSSBMlFBnOwKC1t75/K99xeQEhOMxeGJV7OWD3422W4UxvOImXjGxShTK3oNrgK1mgXRIV4zXgprJA2EGBGZMQhr69aHS2HBKO2cWVVgYC2270lMoWXIKHbSwJjROS4AqGyPEfBlbSQHpkC5hjKTUc4RJ2JV60xGgECk7DiQ+0CQZqxgHX7z78NPZotttZvqAwRCDN30EuMhSIJlsye0mHbqKmqQAYRFmZfirEaCh3hgujYyktDbPcWHjmrqdo1mz05CxAgrRalcAS0EEdGkQRiWzc+MjdTvpahIGYQXhh/9LgJjKbx64RswhFhXWux7jmNlhJBCregdYLoIJOAIkG4sI/hUOMOTpvJ+JgB+FxGBp6Npg8Rg9rFgS2Wxkh7B411YU0ykliY8igXFflh5JlzCqeT8bAWKcb/3w6n7ddKW6qLCaxI3caLkcVyQihd/I3PIhMWKrSYd0CaOa97MRoKHhTH90tG87PUQXi8B4STRWe9vZ+1eQxVcum4Fok+iv7D12cwfpBhgwXwJUmPInz6e6Lybkg3oeHTHzwPLTVEQhDraRBV2x4Uyn9OmJn8evBt47d0KAhoUz88q+Pw4NjGptWgZf5azw3xxgeTCkEgyOaW1vf3b9a9IJdOFOCXhBEiU37+nabShYyl218rWOR2MA7T3zXtdufEwFoffuBgEIei0qJGlFc3qtku73eFOaSbCKJaC94NyVQAfuFoHJfCgls9Z5U84Dw4WmhB8bDiUPtEcys537fAn4/cLlHuWsUcASzXC3n78iA+3NtXueM4G9x/svm3KRyp7fdk1WIVMpAe3dawJUULQi9naGrJQ7MSRBxovlfk+bqejcDQKU1eawZLQZebnc/7MM0H9aC7z37iUBv207dSnzjZ7N/XMT9VweaI325grGVHyaTSvz26GWDQLntfCs24LfRE8i62U19TFo3tTifxeMXbqCUSjQvRvEN+Flx2U6TIfpWPdWx6VqEZm0OxsBvufIplMhDraEmzdATeOD+EESByGkYg4WgAthPbB0cCwRHDsMlhHG/l8BIzsAxvivYDpwZtUb7Vuny4tq34aVIxzi2S3UAakj7WBOtKPHqMjxwGI5ZjjB94+i4DpYdT3bd8I2KD1YCPHMlspvwbkeAX0IPICzYR75QpUwi/NW0JDM6wio3FEPJsD8hhVURrMagb8FGAAG9y3y9OBRoQAAAABJRU5ErkJggg=="},"9c74":function(e,t,a){},a2b7:function(e,t,a){},a3a0:function(e,t,a){},aef3:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDgzNUUwQUQ1NDhCMTFFMUI0QjlGQjQzM0ZFQzk1QjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDgzNUUwQUU1NDhCMTFFMUI0QjlGQjQzM0ZFQzk1QjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEODM1RTBBQjU0OEIxMUUxQjRCOUZCNDMzRkVDOTVCMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEODM1RTBBQzU0OEIxMUUxQjRCOUZCNDMzRkVDOTVCMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjUStJMAAAZLSURBVHjatFdbbFRV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"},e599:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-4"},[n("h3",[e._v("Ranking")]),n("b-table",{attrs:{responsive:"",striped:"",hover:"",items:e.ranking,fields:e.fields},scopedSlots:e._u([{key:"cell(rank)",fn:function(t){return[1===t.item.rank?n("img",{attrs:{src:a("8763")}}):2===t.item.rank?n("img",{attrs:{src:a("2b83")}}):3===t.item.rank?n("img",{attrs:{src:a("aef3")}}):e._e(),n("span",{staticClass:"ml-2 h5"},[e._v(e._s(t.item.rank))])]}},{key:"cell(name)",fn:function(t){return[n("span",{staticClass:"ml-2",class:e.userEmail&&t.item.name&&e.userEmail.toLowerCase()===t.item.name.toLowerCase()?"h6":""},[e._v(e._s(t.item.name))])]}}])})],1)},o=[],i=a("5530"),r=a("2f62"),s={name:"Ranking",data:function(){return{fields:[{key:"rank",sortable:!0,label:""},{key:"name",sortable:!0,label:"Name"},{key:"score",label:"Score",sortable:!0}],ranking:[]}},computed:Object(i["a"])({},Object(r["c"])("context",["isAuthenticated","userName","userEmail"])),created:function(){var e=this;this.$http.get("/api/statistics").then((function(t){e.ranking=t.data}))}},l=s,c=(a("6352"),a("2877")),u=Object(c["a"])(l,n,o,!1,null,"6522caf2",null);t["a"]=u.exports}});
//# sourceMappingURL=app.dcf3b116.js.map