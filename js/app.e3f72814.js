(function(e){function n(n){for(var r,c,a=n[0],d=n[1],i=n[2],h=0,b=[];h<a.length;h++)c=a[h],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&b.push(u[c][0]),u[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(n);while(b.length)b.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==u[a]&&(r=!1)}r&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},c={app:0},u={app:0},o=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cc046":"d4c340e9","chunk-2d0e5e97":"3bacf97c","chunk-2d0e9004":"d9f920a5","chunk-2d21a403":"1324d2d3","chunk-37ba28ee":"191dc20c","chunk-46e3e54c":"2e934530","chunk-64b910f3":"5e828e74","chunk-7e3e3464":"d893babf","chunk-ba527bba":"7dbf6e80","chunk-b24483e4":"18dd2c83","chunk-b65d80d2":"1ebf1fa8","chunk-c742db2e":"8d0917b7","chunk-d4a30536":"11b0167b"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-46e3e54c":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0cc046":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d0e9004":"31d6cfe0","chunk-2d21a403":"31d6cfe0","chunk-37ba28ee":"31d6cfe0","chunk-46e3e54c":"148ac5e7","chunk-64b910f3":"31d6cfe0","chunk-7e3e3464":"31d6cfe0","chunk-ba527bba":"31d6cfe0","chunk-b24483e4":"31d6cfe0","chunk-b65d80d2":"31d6cfe0","chunk-c742db2e":"31d6cfe0","chunk-d4a30536":"31d6cfe0"}[e]+".css",u=d.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===r||h===u))return n()}var b=document.getElementsByTagName("style");for(a=0;a<b.length;a++){i=b[a],h=i.getAttribute("data-href");if(h===r||h===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],l.parentNode.removeChild(l),t(o)},l.href=u;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){c[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=o);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,d.nc&&h.setAttribute("nonce",d.nc),h.src=a(e);var b=new Error;i=function(n){h.onerror=h.onload=null,clearTimeout(l);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,t[1](b)}u[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=n,i=i.slice();for(var b=0;b<i.length;b++)n(i[b]);var l=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=t("bc3a"),u=t.n(c),o=t("2106"),a=t.n(o),d=(t("7b17"),t("7bb1")),i=t("3aa8"),h=t("cbdf"),b=t("9457");function l(e,n){var t=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(t)}t("8c7d");const f={};f.render=l;var p=f,s=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),m=[{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/",component:function(){return t.e("chunk-7e3e3464").then(t.bind(null,"bb51"))},children:[{path:"",component:function(){return t.e("chunk-2d0cc046").then(t.bind(null,"4bac"))}},{path:"/products",component:function(){return Promise.all([t.e("chunk-ba527bba"),t.e("chunk-b65d80d2")]).then(t.bind(null,"ed84"))}},{path:"/carts",component:function(){return Promise.all([t.e("chunk-ba527bba"),t.e("chunk-b24483e4")]).then(t.bind(null,"bcba"))}},{path:"/orders",component:function(){return t.e("chunk-64b910f3").then(t.bind(null,"b84e"))}},{path:"/product/:id",component:function(){return t.e("chunk-37ba28ee").then(t.bind(null,"f147"))}}]},{path:"/login",component:function(){return t.e("chunk-46e3e54c").then(t.bind(null,"a55b"))}},{path:"/admin",component:function(){return t.e("chunk-d4a30536").then(t.bind(null,"7277"))},children:[{path:"/productsControl",component:function(){return Promise.all([t.e("chunk-ba527bba"),t.e("chunk-c742db2e")]).then(t.bind(null,"b6af"))}},{path:"/ordersList",component:function(){return t.e("chunk-2d21a403").then(t.bind(null,"bb5b"))}},{path:"/coupons",component:function(){return t.e("chunk-2d0e9004").then(t.bind(null,"8c58"))}}]}],k=Object(s["a"])({history:Object(s["b"])(),routes:m}),v=k;Object(d["e"])("required",i["c"]),Object(d["e"])("email",i["a"]),Object(d["e"])("min",i["b"]),Object(d["d"])({generateMessage:Object(h["a"])({zh_TW:b}),validateOnInput:!0}),Object(h["b"])("zh_TW");var g=Object(r["c"])(p);g.component("Form",d["c"]),g.component("Field",d["b"]),g.component("ErrorMessage",d["a"]),g.use(a.a,u.a),g.use(v),g.mount("#app")},8550:function(e,n,t){},"8c7d":function(e,n,t){"use strict";t("8550")}});
//# sourceMappingURL=app.e3f72814.js.map