(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},n={app:0},r=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-62793de2":"c063e01e"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-62793de2":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-62793de2":"773648ef"}[t]+".css",n=l.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===n))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],u=c.getAttribute("data-href");if(u===s||u===n)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||n,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete i[t],d.parentNode.removeChild(d),a(r)},d.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){i[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",p.name="ChunkLoadError",p.type=s,p.request=i,a[1](p)}n[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/todo-auth-app/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"19fe":function(t,e,a){},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.0ce6e5f4.svg"},"21c4":function(t,e,a){t.exports=a.p+"img/intro_bg.61f7996f.png"},"4ee2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r={name:"App"},o=r,l=(a("e9df"),a("2877")),c=Object(l["a"])(o,i,n,!1,null,null,null),u=c.exports,p=(a("a0d8"),a("4ee2"),a("8c4f")),d=function(){var t=this,e=t._self._c;return e("div",[e("TheHeader"),e("section",{staticClass:"login"},[e("div",{staticClass:"login__intro"},[e("img",{staticClass:"login__bg",attrs:{src:a("21c4"),alt:"background"}}),e("div",{staticClass:"login__wrapper"},[e("h2",{staticClass:"login__title"},[t._v(t._s(t.title))])])]),e("div",{staticClass:"login__wrapper"},[e("LoginContent"),e("LoginForm")],1)]),e("TheFooter")],1)},f=[],_=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"login__content"},[e("p",{staticClass:"login__about"},[e("strong",[t._v("Business Analytics")]),t._v(" — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's ")]),e("ul",{staticClass:"list"},[e("li",{staticClass:"list__item"},[e("div",{staticClass:"list__item-marker"},[e("img",{attrs:{src:a("fdf1"),alt:"check"}})]),e("div",{staticClass:"list__item-wrapper"},[e("h3",{staticClass:"list__item-title"},[t._v("Interactive Reporting")]),e("p",{staticClass:"list__item-text"},[t._v(" In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities. ")])])]),e("li",{staticClass:"list__item"},[e("div",{staticClass:"list__item-marker"},[e("img",{attrs:{src:a("fdf1"),alt:"check"}})]),e("div",{staticClass:"list__item-wrapper"},[e("h3",{staticClass:"list__item-title"},[t._v("Automated data updates")]),e("p",{staticClass:"list__item-text"},[t._v(" The application automatically updates and structures the data in just 60 seconds, saving you time and money. ")])])]),e("li",{staticClass:"list__item"},[e("div",{staticClass:"list__item-marker"},[e("img",{attrs:{src:a("fdf1"),alt:"check"}})]),e("div",{staticClass:"list__item-wrapper"},[e("h3",{staticClass:"list__item-title"},[t._v("Data Security")]),e("p",{staticClass:"list__item-text"},[t._v(" The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality. ")])])])])])}],g={},v=g,h=Object(l["a"])(v,_,m,!1,null,null,null),C=h.exports,y=function(){var t=this,e=t._self._c;return e("form",{staticClass:"form main-wrapper__form",on:{submit:function(e){return e.preventDefault(),t.authorize.apply(null,arguments)}}},[e("div",{staticClass:"form__container"},[e("label",{staticClass:"form__label",attrs:{for:"login"}},[e("span",[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginData.login,expression:"loginData.login",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"text"},domProps:{value:t.loginData.login},on:{input:function(e){e.target.composing||t.$set(t.loginData,"login",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("label",{staticClass:"form__label",attrs:{for:"login"}},[e("span",[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginData.password,expression:"loginData.password",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:t.passwordCheck?"text":"password"},domProps:{value:t.loginData.password},on:{input:function(e){e.target.composing||t.$set(t.loginData,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.authorizeFailed,expression:"authorizeFailed"}],staticClass:"form__err"},[t._v(" wrong login or password. ")])]),e("button",{staticClass:"form__btn"},[t._v("LOGIN")]),e("span",{staticClass:"form__link primary"},[t._v("Forgot Password")])]),t._m(0)])},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"form__footer"},[e("span",{staticClass:"form__link"},[t._v("Register now")])])}],w={data(){return{loginData:{login:"",password:""},passwordCheck:!1,authorizeFailed:!1}},methods:{authorize(){"Admin"===this.loginData.login&&"12345"===this.loginData.password?(localStorage.setItem("todo-user",this.loginData.login),this.$router.push("todo")):this.authorizeFailed=!0}}},k=w,x=Object(l["a"])(k,y,b,!1,null,null,null),O=x.exports,j=function(){var t=this;t._self._c;return t._m(0)},T=[function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"header__line"}),e("div",{staticClass:"container"},[e("div",{staticClass:"header__inner"},[e("div",{staticClass:"header__logo logo"},[e("img",{staticClass:"logo__img",attrs:{src:a("1ae4"),alt:"logo"}})])])])])}],P={},A=Object(l["a"])(P,j,T,!1,null,null,null),D=A.exports,F=function(){var t=this;t._self._c;return t._m(0)},L=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer__wrapper"},[e("div",{staticClass:"footer__logo"},[e("img",{attrs:{src:a("1ae4"),alt:"logo"}})]),e("div",{staticClass:"footer__links"},[e("p",{staticClass:"footer__link"},[t._v("Terms & Conditions")]),e("p",{staticClass:"footer__link"},[t._v("Privacy")]),e("p",{staticClass:"footer__link"},[t._v("Notice at Collection")]),e("p",{staticClass:"footer__link"},[t._v("CA Privacy Hub")]),e("p",{staticClass:"footer__link"},[t._v("Contact Us")]),e("p",{staticClass:"footer__link"},[t._v("Sitemap")])])]),e("hr",{staticClass:"footer__divider"}),e("p",{staticClass:"footer__copy"},[t._v(" Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender. ")])])])}],N={},S=Object(l["a"])(N,F,L,!1,null,null,null),E=S.exports,z={name:"Login",components:{LoginContent:C,LoginForm:O,TheHeader:D,TheFooter:E},data(){return{title:"Welcome to Business Analytics Online"}}},I=z,M=Object(l["a"])(I,d,f,!1,null,null,null),B=M.exports,R=function(){var t=this,e=t._self._c;return e("div",[e("TheHeader"),e("section",{staticClass:"login"},[e("div",{staticClass:"login__intro"},[e("img",{staticClass:"login__bg",attrs:{src:a("21c4"),alt:"background"}}),e("div",{staticClass:"login__wrapper"},[e("h2",{staticClass:"login__title"},[t._v(t._s(t.title))]),e("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("Back to login page")])],1)])]),e("TheFooter")],1)},H=[],$={name:"Login",components:{TheHeader:D,TheFooter:E},data(){return{title:"The page not Found"}}},q=$,U=(a("c098"),Object(l["a"])(q,R,H,!1,null,"744f0ded",null)),G=U.exports;s["a"].use(p["a"]);const J=new p["a"]({mode:"history",routes:[{path:"/",redirect:"/login"},{path:"/login",component:B},{path:"*",component:G},{path:"/todo",component:()=>a.e("chunk-62793de2").then(a.bind(null,"a3b3")),meta:{requiresAuth:!0}}]});J.beforeEach((t,e,a)=>{if(t.matched.some(t=>t.meta.requiresAuth)){const t=localStorage.getItem("todo-user");t?a():a({path:"/login"})}else a()});var K=J;s["a"].config.productionTip=!1,new s["a"]({router:K,render:t=>t(u)}).$mount("#app")},"826f":function(t,e,a){},a0d8:function(t,e,a){},c098:function(t,e,a){"use strict";a("19fe")},e9df:function(t,e,a){"use strict";a("826f")},fdf1:function(t,e,a){t.exports=a.p+"img/check.c6743f18.svg"}});
//# sourceMappingURL=app.9086040c.js.map