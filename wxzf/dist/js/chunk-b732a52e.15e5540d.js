(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b732a52e"],{"0418":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLeft,expression:"isLeft"}],staticClass:"header-button is-left"},[s("i",{staticClass:"fa fa-chevron-left"}),s("button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])]),s("h1",{staticClass:"header-title"},[e._v(e._s(e.title))])])},n=[],r={name:"Header",props:{title:String,isLeft:{type:Boolean,dafault:!1}}},i=r,c=(s("8a8a"),s("2877")),d=Object(c["a"])(i,a,n,!1,null,"2609c7f0",null);t["a"]=d.exports},"1dde":function(e,t,s){var a=s("d039"),n=s("b622"),r=s("2d00"),i=n("species");e.exports=function(e){return r>=51||!a((function(){var t=[],s=t.constructor={};return s[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},7911:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"myAddress"},[s("Header",{attrs:{isLeft:!0,title:e.title}}),s("div",{staticClass:"address-view"},e._l(e.allAddress,(function(t,a){return s("div",{key:a,staticClass:"address-card"},[s("div",{staticClass:"address-card-select"},[e.selectIndex==a?s("i",{staticClass:"fa fa-check-circle"}):e._e()]),s("div",{staticClass:"address-card-body",on:{click:function(s){return e.setAddressInfo(t,a)}}},[s("p",{staticClass:"address-card-title"},[s("span",{staticClass:"username"},[e._v(e._s(t.name))]),t.sex?s("span",{staticClass:"gender"},[e._v(e._s(t.sex))]):e._e(),s("span",{staticClass:"phone"},[e._v(e._s(t.phone))])]),s("p",{staticClass:"address-card-address"},[t.tag?s("span",{staticClass:"tag"},[e._v(e._s(t.tag))]):e._e(),s("span",{staticClass:"address-text"},[e._v(e._s(t.address))])])]),s("div",{staticClass:"address-card-edit"},[s("i",{staticClass:"fa fa-edit",on:{click:function(s){return e.handleEdit(t)}}}),s("i",{staticClass:"fa fa-close",on:{click:function(s){return e.handleDelete(t,a)}}})])])})),0),s("div",{staticClass:"address-view-bottom",on:{click:e.addAddress}},[s("i",{staticClass:"fa fa-plus-circle"}),s("span",[e._v("新增收货地址")])])],1)},n=[],r=(s("99af"),s("a434"),s("0418")),i={name:"MyAddress",data:function(){return{title:"我的地址",allAddress:[],selectIndex:0}},beforeRouteEnter:function(e,t,s){s((function(e){return e.getData()}))},methods:{addAddress:function(){this.$router.push({name:"addAddress",params:{title:"添加地址",addressInfo:{tag:"",sex:"",address:"",name:"",phone:"",bottom:""}}})},getData:function(){var e=this;this.$axios("/api/user/user_info/".concat(localStorage.ele_login)).then((function(t){e.allAddress=t.data.myAddress}))},handleEdit:function(e){this.$router.push({name:"addAddress",params:{title:"编辑地址",addressInfo:e}})},handleDelete:function(e,t){var s=this;this.$axios.delete("/api/user/address/".concat(localStorage.ele_login,"/").concat(e._id)).then((function(e){s.allAddress.splice(t,1)}))},setAddressInfo:function(e,t){this.selectIndex=t,this.$store.dispatch("setUserInfo",e),this.$router.push("/settlement")}},components:{Header:r["a"]}},c=i,d=(s("9034"),s("2877")),o=Object(d["a"])(c,a,n,!1,null,"5c8f82ba",null);t["default"]=o.exports},8418:function(e,t,s){"use strict";var a=s("c04e"),n=s("9bf2"),r=s("5c6c");e.exports=function(e,t,s){var i=a(t);i in e?n.f(e,i,r(0,s)):e[i]=s}},"8a8a":function(e,t,s){"use strict";var a=s("e596"),n=s.n(a);n.a},9034:function(e,t,s){"use strict";var a=s("e546"),n=s.n(a);n.a},"99af":function(e,t,s){"use strict";var a=s("23e7"),n=s("d039"),r=s("e8b5"),i=s("861d"),c=s("7b0b"),d=s("50c4"),o=s("8418"),l=s("65f0"),f=s("1dde"),u=s("b622"),h=s("2d00"),p=u("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",_=h>=51||!n((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),C=f("concat"),g=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:r(e)},b=!_||!C;a({target:"Array",proto:!0,forced:b},{concat:function(e){var t,s,a,n,r,i=c(this),f=l(i,0),u=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?i:arguments[t],g(r)){if(n=d(r.length),u+n>v)throw TypeError(m);for(s=0;s<n;s++,u++)s in r&&o(f,u,r[s])}else{if(u>=v)throw TypeError(m);o(f,u++,r)}return f.length=u,f}})},a434:function(e,t,s){"use strict";var a=s("23e7"),n=s("23cb"),r=s("a691"),i=s("50c4"),c=s("7b0b"),d=s("65f0"),o=s("8418"),l=s("1dde"),f=s("ae40"),u=l("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,m=9007199254740991,_="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u||!h},{splice:function(e,t){var s,a,l,f,u,h,C=c(this),g=i(C.length),b=n(e,g),x=arguments.length;if(0===x?s=a=0:1===x?(s=0,a=g-b):(s=x-2,a=v(p(r(t),0),g-b)),g+s-a>m)throw TypeError(_);for(l=d(C,a),f=0;f<a;f++)u=b+f,u in C&&o(l,f,C[u]);if(l.length=a,s<a){for(f=b;f<g-a;f++)u=f+a,h=f+s,u in C?C[h]=C[u]:delete C[h];for(f=g;f>g-a+s;f--)delete C[f-1]}else if(s>a)for(f=g-a;f>b;f--)u=f+a-1,h=f+s-1,u in C?C[h]=C[u]:delete C[h];for(f=0;f<s;f++)C[f+b]=arguments[f+2];return C.length=g-a+s,l}})},e546:function(e,t,s){},e596:function(e,t,s){}}]);
//# sourceMappingURL=chunk-b732a52e.15e5540d.js.map