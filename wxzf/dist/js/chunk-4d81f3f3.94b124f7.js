(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d81f3f3"],{"4f57":function(t,a,r){"use strict";var s=r("542c"),e=r.n(s);e.a},"542c":function(t,a,r){},cf2a:function(t,a,r){"use strict";r.r(a);var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"order"},t._l(t.orderlist,(function(a,s){return r("div",{key:s,staticClass:"order-card-body"},[a.orderInfo?r("div",{staticClass:"order-card-wrap",on:{click:function(r){return t.$router.push({name:"orderinfo",params:a})}}},[r("img",{attrs:{src:a.orderInfo.shopInfo.image_path,alt:""}}),r("div",{staticClass:"order-card-content"},[r("div",{staticClass:"order-card-head"},[r("div",{staticClass:"title"},[r("a",{attrs:{href:""}},[r("span",[t._v(" "+t._s(a.orderInfo.shopInfo.name)+" ")]),r("i",{staticClass:"fa fa-angle-right"})]),r("p",[t._v("订单已经完成")])]),r("p",{staticClass:"date-time"},[t._v(t._s(a.date))])]),r("div",{staticClass:"order-card-detail"},[r("p",{staticClass:"detail"},[t._v(" "+t._s(a.orderInfo.selectFoods[0].name)+" ")]),r("p",{staticClass:"price"},[t._v(" ￥"+t._s(a.totalPrice)+" ")])])])]):t._e(),r("div",{staticClass:"order-card-bottom"},[r("button",{staticClass:"cardbutton",on:{click:function(a){return t.$router.push("/shop")}}},[t._v("再来一单")])])])})),0)},e=[],o={name:"Order",data:function(){return{orderlist:[]}},beforeRouteEnter:function(t,a,r){r((function(t){t.getData()}))},methods:{getData:function(){var t=this;this.$axios("/api/user/orders/".concat(localStorage.ele_login)).then((function(a){t.orderlist=a.data.orderlist}))}}},n=o,i=(r("4f57"),r("2877")),c=Object(i["a"])(n,s,e,!1,null,"224036a8",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-4d81f3f3.94b124f7.js.map