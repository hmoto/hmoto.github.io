(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c0b734"],{"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeft,expression:"isLeft"}],staticClass:"header-button is-left"},[a("i",{staticClass:"fa fa-chevron-left"}),a("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")])]),a("h1",{staticClass:"header-title"},[t._v(t._s(t.title))])])},r=[],i={name:"Header",props:{title:String,isLeft:{type:Boolean,dafault:!1}}},n=i,o=(a("8a8a"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,"2609c7f0",null);e["a"]=c.exports},"0f76":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"orderInfo"},[a("Header",{attrs:{isLeft:!0,title:"订单详情"}}),t.orderDetail?a("div",{staticClass:"view-body"},[t._m(0),a("div",{staticClass:"restaurant-card"},[t.orderDetail.orderInfo?a("CartGroup",{attrs:{orderInfo:t.orderDetail.orderInfo,totalPrice:t.orderDetail.totalPrice}}):t._e()],1),a("div",{staticClass:"detail-card"},[a("div",{staticClass:"title"},[t._v(" 派送信息 ")]),a("ul",{staticClass:"card-list"},[a("li",{staticClass:"list-item"},[a("span",[t._v("送达时间：")]),a("div",[t._v(t._s(t.orderDetail.date))])]),a("li",{staticClass:"list-item"},[a("span",[t._v("送货地址：")]),a("div",{staticClass:"content"},[a("span",[t._v(t._s(t.orderDetail.userInfo.name)+t._s(t.orderDetail.userInfo.sex))]),a("span",[t._v(" "+t._s(t.orderDetail.userInfo.phone)+" ")]),a("span",[t._v(" "+t._s(t.orderDetail.userInfo.address)+t._s(t.orderDetail.userInfo.bottom)+" ")])])])])]),a("div",{staticClass:"detail-card"},[a("div",{staticClass:"title"},[t._v(" 订单信息 ")]),a("ul",{staticClass:"card-list"},[a("li",{staticClass:"list-item"},[a("span",[t._v("订单号：")]),a("div",[t._v(t._s(t.orderDetail._id))])]),t._m(1),a("li",{staticClass:"list-item"},[a("span",[t._v("下单时间：")]),t._v(" "+t._s(t.orderDetail.date)+" ")]),t.orderDetail.remarkInfo?a("li",{staticClass:"list-item"},[a("span",[t._v("订单备注：")]),a("span",{staticClass:"remark"},[t._v(" "+t._s(t.orderDetail.remarkInfo.remark)+"\\"+t._s(t.orderDetail.remarkInfo.tableware)+" ")])]):t._e()])])]):t._e()],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status-head"},[a("div",{staticClass:"status-text"},[t._v(" 订单已送达 ")]),a("div",{staticClass:"status-title"},[t._v(" 感谢您对xxx的信任，期待再次光临 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-item"},[a("span",[t._v("支付方式：")]),t._v("在线支付 ")])}],i=a("0418"),n=a("df23"),o={name:"OrderInfo",data:function(){return{orderDetail:null}},beforeRouteEnter:function(t,e,a){a((function(e){e.orderDetail=t.params}))},components:{Header:i["a"],CartGroup:n["a"]}},c=o,l=(a("3641"),a("2877")),f=Object(l["a"])(c,s,r,!1,null,"7d4f71b8",null);e["default"]=f.exports},3641:function(t,e,a){"use strict";var s=a("ff0e"),r=a.n(s);r.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var s=a("1d80"),r=a("5899"),i="["+r+"]",n=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(t){return function(e){var a=String(s(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,a){var s=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var i,n;return r&&"function"==typeof(i=e.constructor)&&i!==a&&s(n=i.prototype)&&n!==a.prototype&&r(t,n),t}},"8a8a":function(t,e,a){"use strict";var s=a("e596"),r=a.n(s);r.a},"945a":function(t,e,a){},a9e3:function(t,e,a){"use strict";var s=a("83ab"),r=a("da84"),i=a("94ca"),n=a("6eeb"),o=a("5135"),c=a("c6b6"),l=a("7156"),f=a("c04e"),u=a("d039"),d=a("7c73"),v=a("241c").f,_=a("06cf").f,p=a("9bf2").f,C=a("58a8").trim,I="Number",m=r[I],h=m.prototype,b=c(d(h))==I,N=function(t){var e,a,s,r,i,n,o,c,l=f(t,!1);if("string"==typeof l&&l.length>2)if(l=C(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+l}for(i=l.slice(2),n=i.length,o=0;o<n;o++)if(c=i.charCodeAt(o),c<48||c>r)return NaN;return parseInt(i,s)}return+l};if(i(I,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var E,g=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof g&&(b?u((function(){h.valueOf.call(a)})):c(a)!=I)?l(new m(N(e)),a,g):N(e)},D=s?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;D.length>x;x++)o(m,E=D[x])&&!o(g,E)&&p(g,E,_(m,E));g.prototype=h,h.constructor=g,n(r,I,g)}},c2c7:function(t,e,a){"use strict";var s=a("945a"),r=a.n(s);r.a},df23:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"checkout-section cart-group"},[a("h3",[t._v(t._s(t.orderInfo.shopInfo.name))]),a("ul",[t._l(t.orderInfo.selectFoods,(function(e,s){return a("li",{key:s},[a("img",{attrs:{src:e.image_path,alt:""}}),a("div",{staticClass:"cart-group-info"},[a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.count))]),a("span",[t._v(t._s(e.activity.fixed_price))])])])})),a("li",{staticClass:"cart-group-total"},[a("div",[t._v("配送费")]),a("div",[t._v("￥"+t._s(t.orderInfo.shopInfo.float_delivery_fee))])]),a("li",{staticClass:"cart-group-total"},[a("div",{staticClass:"discounts"}),a("div",{staticClass:"subtotal"},[a("span",[t._v("小计 ￥")]),a("span",{staticClass:"price"},[t._v(t._s(t.totalPrice))])])])],2)])},r=[],i=(a("a9e3"),{name:"CartGroup",props:{orderInfo:Object,totalPrice:Number}}),n=i,o=(a("c2c7"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,"5fa6bb5c",null);e["a"]=c.exports},e596:function(t,e,a){},ff0e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-20c0b734.5420c859.js.map