(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b0d36dbe","chunk-2d0c09f3":"b10257f9","chunk-92f80c4c":"538b765f"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-92f80c4c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c09f3":"31d6cfe0","chunk-92f80c4c":"601d173f"}[e]+".css",i=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){c=m[s],u=c.getAttribute("data-href");if(u===a||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],d.parentNode.removeChild(d),n(r)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",m.name="ChunkLoadError",m.type=a,m.request=o,n[1](m)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/dist/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2b83":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDE4OUEyRDE1NDhCMTFFMUJDMjBDMkMwN0RDQkE4QjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDE4OUEyRDI1NDhCMTFFMUJDMjBDMkMwN0RDQkE4QjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMTg5QTJDRjU0OEIxMUUxQkMyMEMyQzA3RENCQThCOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMTg5QTJEMDU0OEIxMUUxQkMyMEMyQzA3RENCQThCOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps7mAvIAAAXZSURBVHjatFdbaBRX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"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("main-navbar"),n("main",{staticClass:"container mt-4",attrs:{role:"main"}},[n("router-view")],1),n("login-modal"),n("live-chat-modal")],1)},i=[],r=n("5530"),s=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light shadow"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#/"}},[e._v("Tron")]),e._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"main-navbar"}},[e._m(1),e.isAuthenticated?n("span",{staticClass:"navbar-text mr-2"},[e._v(" Welcome back, "+e._s(e.profile.name)+" ")]):e._e(),e.isAuthenticated?n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("button",{staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("Logout")])]):n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("button",{directives:[{name:"b-modal",rawName:"v-b-modal.prevent.loginModal",modifiers:{prevent:!0,loginModal:!0}}],staticClass:"btn btn-primary my-2 my-sm-0",attrs:{type:"submit"}},[e._v("Login")])])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#main-navbar","aria-controls":"main-navbar","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("a",{staticClass:"nav-link",attrs:{href:"#/"}},[e._v("Home "),n("span",{staticClass:"sr-only"},[e._v("(current)")])])]),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#/Ranking"}},[e._v("Ranking "),n("span",{staticClass:"sr-only"},[e._v("(current)")])])])])}],u={computed:Object(r["a"])({},Object(s["d"])("context",["profile"]),{},Object(s["c"])("context",["isAuthenticated"])),methods:Object(r["a"])({},Object(s["b"])("context",["logout"]))},m=u,d=n("2877"),f=Object(d["a"])(m,l,c,!1,null,null,null),h=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"loginModal",attrs:{id:"loginModal","hide-footer":"",title:"Login"},on:{hidden:e.onHidden}},[n("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),e.onCancel(t)}}},[n("b-form-group",{attrs:{label:"Email:","label-for":"emailInput"}},[n("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter your email address"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("b-form-group",{attrs:{label:"Password:","label-for":"passwordInput"}},[n("b-form-input",{attrs:{id:"passwordInput",type:"password",required:"",placeholder:"Enter your password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("b-form-group",{attrs:{label:"Authentication mode"}},[n("b-form-radio-group",{attrs:{id:"authMode",options:e.authOptions},model:{value:e.authMode,callback:function(t){e.authMode=t},expression:"authMode"}})],1),n("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{type:"submit"}},[e._v("Login")]),n("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"}},[e._v("Cancel")])],1)],1)},p=[],g={data:function(){return{form:{email:"",password:""},authMode:"cookie",authOptions:[{text:"Cookie",value:"cookie"},{text:"JWT Bearer",value:"jwt"}]}},methods:Object(r["a"])({},Object(s["b"])("context",["login"]),{onSubmit:function(){var e=this;this.login({authMethod:this.authMode,credentials:this.form}).then((function(){e.$refs.loginModal.hide()}))},onCancel:function(){this.$refs.loginModal.hide()},onHidden:function(){Object.assign(this.form,{email:"",password:""})}})},v=g,A=Object(d["a"])(v,b,p,!1,null,null,null),w=A.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"liveChatModal",attrs:{id:"liveChatModal","hide-footer":"",title:"Live Chat",size:"lg"},on:{hidden:e.onHidden,hide:e.onHide,show:e.onShow}},[n("div",{staticClass:"bg-light messages-container"},[e.messages.length?n("ul",{staticClass:"list-unstyled container"},e._l(e.messages,(function(t,a){return n("li",{key:a,staticClass:"row my-2"},[n("span",{staticClass:"col-4"},[e._v(e._s(t.username===e.profile.name?"You":t.username))]),n("vue-markdown",{class:{"col-8":!0,"text-muted":t.username===e.profile.name},attrs:{source:t.text}})],1)})),0):n("p",{staticClass:"text-muted text-center"},[e._v(" Welcome to the chat..."),n("br"),e._v(" Say hi! ")])]),n("b-form",{staticClass:"border-top mt-2 pt-2",on:{submit:function(t){return t.preventDefault(),e.onSendMessage(t)}}},[n("b-form-group",{attrs:{label:"Your message:",description:"Press Ctrl + Enter to send","label-for":"messageInput"}},[n("b-form-textarea",{attrs:{id:"messageInput",placeholder:"What do you have to say?",rows:2,"max-rows":10},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),n("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{type:"submit"}},[e._v("Send")])],1)],1)},G=[],M=(n("99af"),n("2909")),k=n("9ce6"),C=n.n(k),I={components:{VueMarkdown:C.a},data:function(){return{messages:[],form:{message:""}}},computed:Object(r["a"])({},Object(s["d"])("context",["profile"])),created:function(){this.$mainHub.$on("chat-message-received",this.onMessageReceived)},beforeDestroy:function(){this.$mainHub.$off("chat-message-received",this.onMessageReceived)},methods:{onMessageReceived:function(e){var t=e.username,n=e.text;this.messages=[{username:t,text:n}].concat(Object(M["a"])(this.messages))},onSendMessage:function(){this.$mainHub.sendMessage(this.form.message),this.form.message=""},onShow:function(){window.addEventListener("keydown",this.onKeyPress)},onHide:function(){window.addEventListener("keydown",this.onKeyPress)},onHidden:function(){Object.assign(this.form,{message:""})},onKeyPress:function(e){e.ctrlKey&&13==e.keyCode&&this.form.message&&this.onSendMessage()}}},R=I,j=(n("6131"),Object(d["a"])(R,y,G,!1,null,"6f70c7a9",null)),U=j.exports,E={name:"App",components:{MainNavbar:h,LoginModal:w,LiveChatModal:U},created:function(){this.restoreContext()},methods:Object(r["a"])({},Object(s["b"])("context",["restoreContext"]))},D=E,S=Object(d["a"])(D,o,i,!1,null,null,null),Z=S.exports,L=n("bc3a"),O=n.n(L),x=(n("d3b7"),n("8c4f")),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"mt-3"},[n("b-button-group",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.addGameModal",modifiers:{addGameModal:!0}}],attrs:{disabled:!e.isAuthenticated,variant:"success"}},[n("i",{staticClass:"fas fa-plus"}),e._v(" New game")]),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.liveChatModal",modifiers:{liveChatModal:!0}}],attrs:{variant:"secondary",disabled:!e.isAuthenticated}},[n("i",{staticClass:"fas fa-comments"}),e._v(" Live chat")])],1)],1),n("div",{staticClass:"mt-4"},[n("b-table",{attrs:{responsive:"",striped:"",hover:"",items:e.games,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[t.item.player1Name===e.userEmail||t.item.player2Name===e.userEmail||t.item.player1Name&&t.item.player2Name?e._e():n("b-button",{staticClass:"mr-1",attrs:{variant:"outline-secondary",size:"sm"},on:{click:function(n){return n.stopPropagation(),e.joinGame(t.item)}}},[e._v(" Join ")]),t.item.player1Name&&t.item.player2Name&&(t.item.player1Name===e.userEmail||t.item.player2Name===e.userEmail)?n("b-button",{staticClass:"mr-1",attrs:{variant:"outline-success",size:"sm"},on:{click:function(n){return n.stopPropagation(),e.startGame(t.item)}}},[e._v(" Start ")]):e._e()]}},{key:"cell(gameLevel)",fn:function(t){return[n("b-badge",{attrs:{variant:3==t.item.gameLevel?"danger":"secondary"}},[e._v(e._s(e.gameLevels[t.item.gameLevel]))])]}}])})],1),n("div",{staticClass:"pt-4 pd-sm-0"},[n("ranking-table")],1),n("add-game-modal",{on:{"game-added":e.onGameAdded}})],1)},T=[],Q=(n("c740"),n("45fc"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"addGameModal",attrs:{id:"addGameModal","hide-footer":"",title:"Add new Game"},on:{hidden:e.onHidden}},[n("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)},reset:function(t){return t.preventDefault(),e.onCancel(t)}}},[n("b-form-group",{attrs:{label:"Name:","label-for":"nameInput"}},[n("b-form-input",{attrs:{id:"nameInput",type:"text",required:"",placeholder:"Please provide a name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("b-form-group",{attrs:{label:"Level:","label-for":"levelInput"}},[n("b-form-select",{attrs:{id:"levelInput",required:"",placeholder:"Please provide a game level",options:e.levelOptions},model:{value:e.form.gameLevel,callback:function(t){e.$set(e.form,"gameLevel",t)},expression:"form.gameLevel"}})],1),n("b-form-group",{attrs:{label:"Note:","label-for":"noteInput"}},[n("b-form-textarea",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.focus.d800",modifiers:{focus:!0,d800:!0}}],attrs:{id:"noteInput",placeholder:"Enter some note",title:"use markdown to format your note ",rows:6,"max-rows":10},model:{value:e.form.note,callback:function(t){e.$set(e.form,"note",t)},expression:"form.note"}})],1),n("button",{staticClass:"btn btn-primary float-right ml-2",attrs:{disabled:e.working,type:"submit"}},[e._v("Submit")]),n("button",{staticClass:"btn btn-secondary float-right",attrs:{type:"reset"}},[e._v("Cancel")])],1)],1)}),B=[],W={data:function(){return{form:{name:"",note:"",gameLevel:1},working:!1}},computed:Object(r["a"])({},Object(s["c"])("context",["gameLevels"]),{levelOptions:function(){return[{value:1,text:this.gameLevels[1]},{value:2,text:this.gameLevels[2]},{value:3,text:this.gameLevels[3]}]}}),methods:{onSubmit:function(){var e=this;this.working=!0,this.$http.post("api/game",this.form).then((function(t){e.working=!1,e.$emit("game-added",t.data),e.$refs.addGameModal.hide()})).catch((function(){e.working=!1}))},onCancel:function(){this.$refs.addGameModal.hide()},onHidden:function(){Object.assign(this.form,{name:"",note:""})}}},Y=W,H=Object(d["a"])(Y,Q,B,!1,null,null,null),P=H.exports,V=n("e599"),z={name:"Home",components:{AddGameModal:P,RankingTable:V["a"]},data:function(){return{fields:[{key:"actions",label:" "},{key:"name",sortable:!0,label:"Game name"},{key:"player1Name",label:"Player 1",sortable:!0},{key:"player2Name",label:"Player 2",sortable:!0},{key:"note",label:"Note",sortable:!0},{key:"gameLevel",label:"Level",sortable:!0},{key:"size",label:"Size",sortable:!0}],games:[],stats:{},statisticsModalShow:!1}},computed:Object(r["a"])({},Object(s["d"])("context",["profile"]),{},Object(s["c"])("context",["isAuthenticated","userName","userEmail","gameLevels"])),created:function(){var e=this;this.$mainHub.$on("game-added",this.onGameAdded),this.$mainHub.$on("game-joined",this.onGameJoined),this.$mainHub.$on("game-removed",this.onGameRemoved),this.$http.get("/api/game").then((function(t){e.games=t.data}))},beforeDestroy:function(){this.$mainHub.$off("game-added",this.onGameAdded),this.$mainHub.$off("game-joined",this.onGameJoined),this.$mainHub.$off("game-removed",this.onGameRemoved)},methods:{onGameAdded:function(e){this.games.some((function(t){return t.gameUid===e.gameUid}))||(this.games=[e].concat(Object(M["a"])(this.games)))},onGameJoined:function(e){if(e){var t=this.games.findIndex((function(t){return t.gameUid===e.gameUid}));this.$set(this.games,t,e)}},onGameRemoved:function(e){if(e){var t=this.games.findIndex((function(t){return t.gameUid===e}));this.$delete(this.games,t)}},joinGame:function(e){var t=this;e.player1Name!==this.userEmail&&e.player2Name!==this.userEmail||this.$bvToast.toast("Already part of the game!",{toaster:"b-toaster-bottom-right",title:"Attempt to join the game",variant:"warning",solid:!0,appendToast:!0}),this.$http.post("api/game/".concat(e.gameUid,"/join"),e).then((function(){t.$bvToast.toast("Successfully join the game!",{toaster:"b-toaster-bottom-right",title:"Attempt to joined the game",variant:"success",solid:!0,appendToast:!0})}))},startGame:function(e){var t=e.player1Name&&e.player1Name.toLowerCase()===this.userEmail?1:e.player2Name&&e.player2Name.toLowerCase()===this.userEmail?2:0;0!==t&&this.$router.push("/game/".concat(e.gameUid,"/").concat(t))},onStatsModalClose:function(){this.statisticsModalShow=!1}}},F=z,J=(n("e1b2"),Object(d["a"])(F,N,T,!1,null,"0bffd94d",null)),X=J.exports;a["default"].use(x["a"]);var K=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/ranking",name:"Ranking",component:function(){return n.e("chunk-2d0c09f3").then(n.bind(null,"4320"))}},{path:"/game/:id/:playerNum",name:"Game",props:function(e){return{gameUid:e.params.id,playerNumStr:e.params.playerNum}},component:function(){return n.e("chunk-92f80c4c").then(n.bind(null,"7d36"))}}],q=new x["a"]({routes:K}),_=q,$=(n("c975"),n("fb6a"),n("b0c0"),n("ac1f"),n("1276"),location.href.indexOf("localhost")<=0),ee="";if($){var te=location.href.split("#")[0];"/"===te[te.length-1]&&(te=te.slice(0,te.length-1)),ee=te}else ee="https://localhost:44305";var ne={namespaced:!0,state:{profile:{},jwtToken:null,baseUrl:ee,gameLevels:{1:"Easy",2:"Medium",3:"Hard"}},getters:{isAuthenticated:function(e){return e.profile.name&&e.profile.email},baseUrl:function(e){return e.baseUrl},userName:function(e){return e.profile.name},userEmail:function(e){return e.profile.email},gameLevels:function(e){return e.gameLevels}},mutations:{setProfile:function(e,t){e.profile=t},setJwtToken:function(e,t){e.jwtToken=t,t?window.localStorage.setItem("jwtToken",t):window.localStorage.removeItem("jwtToken")}},actions:{restoreContext:function(e){var t=e.commit,n=e.getters,o=e.state,i=window.localStorage.getItem("jwtToken");return i&&t("setJwtToken",i),O.a.get("account/context").then((function(e){if(t("setProfile",e.data),n.isAuthenticated)return a["default"].prototype.startSignalR(o.jwtToken)}))},login:function(e,t){var n=e.state,o=e.dispatch,i=t.authMethod,r=t.credentials,s=o("jwt"===i?"loginToken":"loginCookies",r);return s.then((function(){return a["default"].prototype.startSignalR(n.jwtToken)}))},loginCookies:function(e,t){var n=e.commit;return O.a.post("account/login",t).then((function(e){n("setProfile",e.data)}))},loginToken:function(e,t){var n=e.commit;return O.a.post("account/token",t).then((function(e){var t=e.data,a=e.data.token;delete t.token,n("setProfile",t),n("setJwtToken",a)}))},logout:function(e){var t=e.commit,n=e.state,o=n.jwtToken?Promise.resolve():O.a.post("account/logout");return o.then((function(){return t("setProfile",{}),t("setJwtToken",null),a["default"].prototype.stopSignalR()}))}}},ae=ne;a["default"].use(s["a"]);var oe=new s["a"].Store({modules:{context:ae}}),ie=oe,re=n("28bd"),se=n("5f5b"),le=(n("f9e3"),n("2dd8"),n("15f5"),n("1a9a")),ce={install:function(e){var t=new e;e.prototype.$mainHub=t;var n=null,a=null,o=!1;e.prototype.startSignalR=function(i){function r(){return a=n.start().catch((function(e){return console.error("Failed to connect with hub",e),new Promise((function(e,t){return setTimeout((function(){return r().then(e).catch(t)}),5e3)}))})),a}n=(new le["a"]).withUrl("".concat(e.prototype.$http.defaults.baseURL,"/main-hub"),i?{accessTokenFactory:function(){return i}}:null).configureLogging(le["b"].Information).build(),n.on("LiveChatMessageReceived",(function(e,n){t.$emit("chat-message-received",{username:e,text:n})})),n.on("GameAdded",(function(e){t.$emit("game-added",e)})),n.on("GameJoined",(function(e){t.$emit("game-joined",e)})),n.on("GameRemoved",(function(e){t.$emit("game-removed",e)})),n.on("GameStart",(function(e){t.$emit("game-start",e)})),n.on("GamePlayerJoin",(function(e,n,a){t.$emit("game-player-joined",e,n,a)})),n.on("GamePlayerLeave",(function(e,n,a,o){t.$emit("game-player-left",e,n,a,o)})),n.on("GameTicked",(function(e,n,a,o,i,r){t.$emit("game-ticked",e,n,a,o,i,r)})),n.on("GameOver",(function(e,n,a){t.$emit("game-over",e,n,a)})),n.on("GamePaused",(function(e,n){t.$emit("game-paused",e,n)})),n.on("GameResumed",(function(e,n){t.$emit("game-resumed",e,n)})),n.onclose((function(){o||r()})),o=!1,r()},e.prototype.stopSignalR=function(){if(a)return o=!0,a.then((function(){return n.stop()})).then((function(){a=null}))},t.questionOpened=function(e){if(a)return a.then((function(){return n.invoke("JoinQuestionGroup",e)})).catch(console.error)},t.questionClosed=function(e){if(a)return a.then((function(){return n.invoke("LeaveQuestionGroup",e)})).catch(console.error)},t.sendMessage=function(e){if(a)return a.then((function(){return n.invoke("SendLiveChatMessage",e)})).catch(console.error)},t.joinGame=function(e,t,o){if(a)return a.then((function(){return n.invoke("GameJoin",e,t,o)})).catch(console.error)},t.leaveGame=function(e,t,o){if(a)return a.then((function(){return n.invoke("GameLeave",e,t,o)})).catch(console.error)},t.playerMove=function(e,t,o){if(a)return a.then((function(){return n.invoke("PlayerMove",e,t,o)})).catch(console.error)},t.gameTick=function(e){if(a)return a.then((function(){return n.invoke("GameTick",e)})).catch(console.error)},t.outOfTheBoundaries=function(e,t,o){if(a)return a.then((function(){return n.invoke("OutOfTheBoundaries",e,t,o)})).catch(console.error)},t.pauseGame=function(e,t){if(a)return a.then((function(){return n.invoke("PauseGame",e,t)})).catch(console.error)},t.resumeGame=function(e,t){if(a)return a.then((function(){return n.invoke("ResumeGame",e,t)})).catch(console.error)}}};a["default"].config.productionTip=!1,O.a.defaults.baseURL="https://trongamewebserver.azurewebsites.net",O.a.defaults.withCredentials=!0,O.a.interceptors.request.use((function(e){return ie.state.context.jwtToken&&(e.headers["Authorization"]="Bearer "+ie.state.context.jwtToken),e})),a["default"].prototype.$http=O.a,a["default"].use(se["a"]),a["default"].use(ce),a["default"].use(re["a"]),new a["default"]({router:_,store:ie,render:function(e){return e(Z)}}).$mount("#app")},6131:function(e,t,n){"use strict";var a=n("d313"),o=n.n(a);o.a},6352:function(e,t,n){"use strict";var a=n("a3a0"),o=n.n(a);o.a},8763:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0JBN0QwQkE1NDhCMTFFMUEwREFBNDgyQzc2QTQ3NTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0JBN0QwQkI1NDhCMTFFMUEwREFBNDgyQzc2QTQ3NTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQkE3RDBCODU0OEIxMUUxQTBEQUE0ODJDNzZBNDc1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQkE3RDBCOTU0OEIxMUUxQTBEQUE0ODJDNzZBNDc1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps6iUWYAAAYgSURBVHjatFddbBRV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"},a3a0:function(e,t,n){},aef3:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDgzNUUwQUQ1NDhCMTFFMUI0QjlGQjQzM0ZFQzk1QjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDgzNUUwQUU1NDhCMTFFMUI0QjlGQjQzM0ZFQzk1QjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEODM1RTBBQjU0OEIxMUUxQjRCOUZCNDMzRkVDOTVCMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEODM1RTBBQzU0OEIxMUUxQjRCOUZCNDMzRkVDOTVCMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjUStJMAAAZLSURBVHjatFdbbFRV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"},d313:function(e,t,n){},e1b2:function(e,t,n){"use strict";var a=n("e97e"),o=n.n(a);o.a},e599:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mt-4"},[a("h3",[e._v("Ranking")]),a("b-table",{attrs:{responsive:"",striped:"",hover:"",items:e.ranking,fields:e.fields},scopedSlots:e._u([{key:"cell(rank)",fn:function(t){return[1===t.item.rank?a("img",{attrs:{src:n("8763")}}):2===t.item.rank?a("img",{attrs:{src:n("2b83")}}):3===t.item.rank?a("img",{attrs:{src:n("aef3")}}):e._e(),a("span",{staticClass:"ml-2 h5"},[e._v(e._s(t.item.rank))])]}},{key:"cell(name)",fn:function(t){return[a("span",{staticClass:"ml-2",class:e.userEmail&&t.item.name&&e.userEmail.toLowerCase()===t.item.name.toLowerCase()?"h6":""},[e._v(e._s(t.item.name))])]}}])})],1)},o=[],i=n("5530"),r=n("2f62"),s={name:"Ranking",data:function(){return{fields:[{key:"rank",sortable:!0,label:""},{key:"name",sortable:!0,label:"Name"},{key:"score",label:"Score",sortable:!0}],ranking:[]}},computed:Object(i["a"])({},Object(r["c"])("context",["isAuthenticated","userName","userEmail"])),created:function(){var e=this;this.$http.get("/api/statistics").then((function(t){e.ranking=t.data}))}},l=s,c=(n("6352"),n("2877")),u=Object(c["a"])(l,a,o,!1,null,"6522caf2",null);t["a"]=u.exports},e97e:function(e,t,n){}});
//# sourceMappingURL=app.89b36c5e.js.map