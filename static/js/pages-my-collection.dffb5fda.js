(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-collection"],{"538a":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".list uni-image[data-v-4abce52c]{width:100%;height:50vh}.list[data-v-4abce52c]{padding:%?10?%;border-bottom:1px solid #bbb}.list uni-button[data-v-4abce52c]{background-color:#07c160}",""]),t.exports=i},"87b9":function(t,i,n){"use strict";n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return c})),n.d(i,"a",(function(){return e}));var e={uEmpty:n("bd63").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content"},[t._l(t.list,(function(i){return n("v-uni-view",{staticClass:"list",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.xq(i._id)}}},[n("v-uni-text",[t._v("用户名:"+t._s(i.author))]),n("br"),n("v-uni-text",[t._v("内容:"+t._s(i.title))]),n("br"),n("v-uni-text",[t._v("分类名称:"+t._s(i.cate_name))]),n("br"),n("v-uni-text",[t._v("发布时间:"+t._s(new Date(parseInt(i.time)).toLocaleString().replace(/:\d{1,2}$/,"")))]),t._l(i.imageSrc,(function(t){return n("v-uni-image",{attrs:{src:t,mode:""}})}))],2)})),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.count,expression:"count==0"}]},[n("u-empty",{attrs:{width:"100%",textSize:"50upx",mode:"list",icon:"https://img2.baidu.com/it/u=3249522023,1965097326&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"}})],1)],2)},c=[]},"9f46":function(t,i,n){"use strict";n.r(i);var e=n("b22e"),a=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(i,t,(function(){return e[t]}))}(c);i["default"]=a.a},a12f:function(t,i,n){"use strict";n.r(i);var e=n("87b9"),a=n("9f46");for(var c in a)"default"!==c&&function(t){n.d(i,t,(function(){return a[t]}))}(c);n("c17c");var o,u=n("f0c5"),s=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"4abce52c",null,!1,e["a"],o);i["default"]=s.exports},b22e:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n("08e6"),a={data:function(){return{skip:0,limit:10,list:[],count:0}},onLoad:function(){this.colleclist()},methods:{colleclist:function(){var t=this;(0,e.collectionlist)({user_id:this.$store.state.uid,skip:this.skip,limit:this.limit}).then((function(i){console.log(i),t.list=i.data.data,t.count=i.data.count}))},xq:function(t){uni.redirectTo({url:"/pages/index/article?_id=".concat(t)})}},onReachBottom:function(){var t=this;this.limit+=10,this.list.length<this.count&&uni.showToast({title:"加载中",icon:"loading",duration:1e3,success:function(){t.liulan()}})}};i.default=a},c17c:function(t,i,n){"use strict";var e=n("c98d"),a=n.n(e);a.a},c98d:function(t,i,n){var e=n("538a");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("94da6d38",e,!0,{sourceMap:!1,shadowMode:!1})}}]);