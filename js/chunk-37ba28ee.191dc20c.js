(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37ba28ee"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?a(t):o(n(t))}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),c=r("2d00"),i=o("species");t.exports=function(t){return c>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),c=r("b622"),i=c("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),c=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||i(e,t,{value:c.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),c=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,c(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),c=r("e8b5"),i=r("861d"),a=r("7b0b"),u=r("50c4"),s=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),b=r("2d00"),p=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",h=b>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=l("concat"),m=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:c(t)},O=!h||!y;n({target:"Array",proto:!0,forced:O},{concat:function(t){var e,r,n,o,c,i=a(this),l=f(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?i:arguments[e],m(c)){if(o=u(c.length),d+o>g)throw TypeError(v);for(r=0;r<o;r++,d++)r in c&&s(l,d,c[r])}else{if(d>=g)throw TypeError(v);s(l,d++,c)}return l.length=d,l}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),c=r("d066"),i=r("c430"),a=r("83ab"),u=r("4930"),s=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),g=r("7b0b"),v=r("fc6a"),h=r("c04e"),y=r("5c6c"),m=r("7c73"),O=r("df75"),j=r("241c"),w=r("057f"),S=r("7418"),x=r("06cf"),A=r("9bf2"),P=r("d1e7"),E=r("9112"),k=r("6eeb"),N=r("5692"),$=r("f772"),J=r("d012"),T=r("90e3"),D=r("b622"),_=r("e538"),C=r("746f"),F=r("d44e"),I=r("69f3"),B=r("b727").forEach,M=$("hidden"),Q="Symbol",U="prototype",W=D("toPrimitive"),q=I.set,z=I.getterFor(Q),G=Object[U],H=o.Symbol,K=c("JSON","stringify"),L=x.f,R=A.f,V=w.f,X=P.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),rt=N("wks"),nt=o.QObject,ot=!nt||!nt[U]||!nt[U].findChild,ct=a&&f((function(){return 7!=m(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=L(G,e);n&&delete G[e],R(t,e,r),n&&t!==G&&R(G,e,n)}:R,it=function(t,e){var r=Y[t]=m(H[U]);return q(r,{type:Q,tag:t,description:e}),a||(r.description=e),r},at=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ut=function(t,e,r){t===G&&ut(Z,e,r),p(t);var n=h(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,M)&&t[M][n]&&(t[M][n]=!1),r=m(r,{enumerable:y(0,!1)})):(l(t,M)||R(t,M,y(1,{})),t[M][n]=!0),ct(t,n,r)):R(t,n,r)},st=function(t,e){p(t);var r=v(e),n=O(r).concat(pt(r));return B(n,(function(e){a&&!lt.call(r,e)||ut(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):st(m(t),e)},lt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===G&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,M)&&this[M][e])||r)},dt=function(t,e){var r=v(t),n=h(e,!0);if(r!==G||!l(Y,n)||l(Z,n)){var o=L(r,n);return!o||!l(Y,n)||l(r,M)&&r[M][n]||(o.enumerable=!0),o}},bt=function(t){var e=V(v(t)),r=[];return B(e,(function(t){l(Y,t)||l(J,t)||r.push(t)})),r},pt=function(t){var e=t===G,r=V(e?Z:v(t)),n=[];return B(r,(function(t){!l(Y,t)||e&&!l(G,t)||n.push(Y[t])})),n};if(u||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===G&&r.call(Z,t),l(this,M)&&l(this[M],e)&&(this[M][e]=!1),ct(this,e,y(1,t))};return a&&ot&&ct(G,e,{configurable:!0,set:r}),it(e,t)},k(H[U],"toString",(function(){return z(this).tag})),k(H,"withoutSetter",(function(t){return it(T(t),t)})),P.f=lt,A.f=ut,x.f=dt,j.f=w.f=bt,S.f=pt,_.f=function(t){return it(D(t),t)},a&&(R(H[U],"description",{configurable:!0,get:function(){return z(this).description}}),i||k(G,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:H}),B(O(rt),(function(t){C(t)})),n({target:Q,stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!u,sham:!a},{create:ft,defineProperty:ut,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(g(t))}}),K){var gt=!u||f((function(){var t=H();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var n,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(n=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,K.apply(null,o)}})}H[U][W]||E(H[U],W,H[U].valueOf),F(H,Q),J[M]=!0},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),c=r("7b0b"),i=r("50c4"),a=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,d=7==t,b=5==t||l;return function(p,g,v,h){for(var y,m,O=c(p),j=o(O),w=n(g,v,3),S=i(j.length),x=0,A=h||a,P=e?A(p,S):r||d?A(p,0):void 0;S>x;x++)if((b||x in j)&&(y=j[x],m=w(y,x,O),t))if(e)P[x]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:u.call(P,y)}else switch(t){case 4:return!1;case 7:u.call(P,y)}return l?-1:s||f?f:P}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),c=r("da84"),i=r("5135"),a=r("861d"),u=r("9bf2").f,s=r("e893"),f=c.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(d,f);var b=d.prototype=f.prototype;b.constructor=d;var p=b.toString,g="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(i(l,t))return"";var r=g?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f147:function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var n=r("7a23"),o={class:"mt-3"},c=Object(n["g"])("h2",{class:"text-center"}," 產品詳細內容 ",-1),i={class:"card mb-3"},a={class:"row g-0"},u={class:"col-md-4"},s={class:"col-md-8"},f={class:"card-body"},l={class:"card-title bg-dark"},d={class:"card-text"},b={class:"list-group list-group-flush"},p={class:"list-group-item"},g={class:"row text-center"},v={class:"text-decoration-line-through col-6"},h=Object(n["f"])(" 原價 "),y=Object(n["f"])(" 元 "),m={class:"text-danger col-6"},O=Object(n["f"])(" 特價 "),j=Object(n["f"])(" 元 ");function w(t,e,r,w,S,x){return Object(n["s"])(),Object(n["d"])("div",o,[c,Object(n["g"])("div",i,[Object(n["g"])("div",a,[Object(n["g"])("div",u,[Object(n["g"])("img",{class:"prd_img_100",src:S.product.imageUrl},null,8,["src"])]),Object(n["g"])("div",s,[Object(n["g"])("div",f,[Object(n["g"])("h3",l,Object(n["A"])(S.product.title),1),Object(n["g"])("p",d,Object(n["A"])(S.product.description),1),Object(n["g"])("ul",b,[Object(n["g"])("li",p,Object(n["A"])(S.product.content),1)]),Object(n["g"])("span",g,[Object(n["g"])("span",v,[h,Object(n["g"])("em",null,Object(n["A"])(S.product.origin_price),1),y]),Object(n["g"])("span",m,[O,Object(n["g"])("em",null,Object(n["A"])(S.product.price),1),j])])])])])])])}r("99af");var S={data:function(){return{id:this.$route.params.id,product:""}},methods:{getProductData:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sim322on","/product/").concat(this.id);this.$http.get(e).then((function(e){e.data.success?(console.log(e.data),t.product=e.data.product):(alert("驗證錯誤，請重新登入!"),console.log(e))})).catch((function(t){console.log(t)}))}},created:function(){console.log(this.$route.params.id)},mounted:function(){this.getProductData()}};S.render=w;e["default"]=S}}]);
//# sourceMappingURL=chunk-37ba28ee.191dc20c.js.map