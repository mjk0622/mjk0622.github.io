(function(){"use strict";var t={6136:function(t,e,a){var i=a(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.showRouter?e("router-view"):t._e(),e("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.mypage,expression:"mypage"}],attrs:{router:"","active-color":"red"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[e("van-tabbar-item",{attrs:{icon:"home-o",replace:""},on:{click:t.shouye}},[t._v("首页")]),e("van-tabbar-item",{attrs:{icon:"add-o",replace:""},on:{click:t.fabu}},[t._v("发布")]),e("van-tabbar-item",{attrs:{icon:"friends-o",replace:""},on:{click:t.my}},[t._v("我的")])],1)],1)},o=[],n=(a(7658),{data(){return{active:"",showRouter:!0}},provide(){return{reload:this.reload}},methods:{reload(){this.showRouter=!1,this.$nextTick((function(){this.showRouter=!0}))},shouye(){this.$router.push("./")},fabu(){this.$router.push("./fabu")},my(){this.$router.push("./login")}},computed:{mypage(){return this.$route.meta.root}}}),l=n,r=a(1001),c=(0,r.Z)(l,s,o,!1,null,null,null),h=c.exports,u=a(3713),p=(a(5110),a(2631)),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"dingwei"},[e("div",{staticClass:"top"},[e("div",{staticClass:"input",on:{click:t.sousuo}},[e("van-swipe",{staticStyle:{height:"30px"},attrs:{vertical:"",autoplay:1500,"show-indicators":!1}},[e("van-swipe-item",[t._v("二手市场")]),e("van-swipe-item",[t._v("婚恋交友")]),e("van-swipe-item",[t._v("装修装饰")]),e("van-swipe-item",[t._v("明日头条")]),e("van-swipe-item",[t._v("今日头条")]),e("van-swipe-item",[t._v("劳力市场")])],1)],1)]),e("van-tabs",{attrs:{color:"#4fc08d",border:""},on:{click:t.meaxios},model:{value:t.active1,callback:function(e){t.active1=e},expression:"active1"}},t._l(t.rel,(function(t,a){return e("van-tab",{key:a,attrs:{title:t.name}})})),1)],1),e("van-list",{staticClass:"zj",attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.myaxios},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(a,i){return e("div",{key:i,staticClass:"mymjk",on:{click:function(e){return t.myxq(i)}}},[e("li",[t._v(t._s(a.title))]),e("li",[e("img",{attrs:{src:a.imageSrc,alt:""}})]),e("li",[e("span",[t._v("作者："+t._s(a.author))]),t._v(" "),e("span",[t._v("评论:"+t._s(a.comment)+" ")]),t._v("时间："+t._s(new Date(parseInt(a.time)).toLocaleString().replace(/:\d{1,2}$/,"")))]),e("li",[t._v(t._s(t.agoTime(a.time)))])])})),0)],1)},m=[],v={name:"index",data(){return{active1:0,list:[],rel:[],loading:!1,finished:!1,limit:10,time:"",length:"",skip:0}},created(){this.axios.get("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_cate_list").then((t=>{console.log(t.data.data),this.rel=t.data.data,this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_article_list",{cate_id:this.rel[0]._id,skip:0,limit:10}).then((t=>{console.log(t.data.data),this.list=t.data.data}))}))},methods:{myaxios(){setTimeout((()=>{this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_article_list",{cate_id:this.rel[this.active1]._id,skip:this.skip,limit:this.limit}).then((t=>{console.log(t.data),this.list=t.data.data,this.length=t.data.count})),this.limit+=10,this.list.push(this.list.length+10),this.loading=!1}),1e3)},meaxios(){this.myaxios(),this.skip=0,this.limit=10},myxq(t){this.$router.push({path:"./xiangqing",query:{id:this.list[t]._id}})},agoTime(t){t=new Date(t).getTime();let e=null;var a=6e4,i=60*a,s=24*i,o=7*s,n=30*s,l=(new Date).getTime(),r=l-t;if(!(r<0)){var c=r/a,h=r/i,u=r/s,p=r/o,d=r/n;if(d>=1&&d<=3)e=" "+parseInt(d)+"月前";else if(p>=1&&p<=3)e=" "+parseInt(p)+"周前";else if(u>=1&&u<=6)e=" "+parseInt(u)+"天前";else if(h>=1&&h<=23)e=" "+parseInt(h)+"小时前";else if(c>=1&&c<=59)e=" "+parseInt(c)+"分钟前";else if(r>=0&&r<=a)e="刚刚";else{var m=new Date;m.setTime(t);var v=m.getFullYear(),g=m.getMonth()+1<10?"0"+(m.getMonth()+1):m.getMonth()+1,f=m.getDate()<10?"0"+m.getDate():m.getDate();m.getHours()<10?m.getHours():m.getHours(),m.getMinutes()<10?m.getMinutes():m.getMinutes(),m.getSeconds()<10?m.getSeconds():m.getSeconds();e=v+"-"+g+"-"+f}return e}},sousuo(){this.$router.push("./sousuo")}}},g=v,f=(0,r.Z)(g,d,m,!1,null,"2a823c7b",null),_=f.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[null===this.username?e("div",{staticClass:"mjk"},[t._m(0),e("van-cell-group",{staticClass:"input"},[e("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1),e("van-cell-group",{staticClass:"inputs"},[e("van-field",{attrs:{placeholder:"请输入密码"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e("button",{staticClass:"end",on:{click:t.dr}},[t._v("登录")]),e("p",{staticStyle:{"margin-top":"20px"}},[t._v("如果没有账号？去"),e("span",{on:{click:t.login}},[t._v("注册")]),t._v(","),e("span",{on:{click:t.forget}},[t._v("忘记密码")])])],1):e("div",{staticClass:"xs"},[e("ul",[e("li",{staticStyle:{height:"70px","line-height":"70px"}},[t._v("头像"),e("img",{attrs:{src:t.mygrzl.avatar,alt:""}})]),e("li",[t._v("用户名"),e("span",[t._v(t._s(t.mygrzl.nickname))])]),e("li",[t._v("手机号"),e("span",[t._v(t._s(t.mygrzl.username))])]),e("li",[t._v("生日"),e("span",[t._v(t._s(t.mygrzl.birthday))])]),e("li",[t._v("性别"),e("span",[t._v(t._s(t.mygrzl.sex))])]),e("van-grid",[e("van-grid-item",{attrs:{icon:"graphic",text:"修改资料"},on:{click:t.myzl}}),e("van-grid-item",{attrs:{icon:"setting",text:"修改密码"},on:{click:t.xiugai}}),e("van-grid-item",{attrs:{icon:"phone-circle",text:"联系我们"}}),e("van-grid-item",{attrs:{icon:"warning",text:"关于我们"}}),e("van-grid-item",{attrs:{icon:"share",text:"我的发布"},on:{click:t.myfabu}}),e("van-grid-item",{attrs:{icon:"star",text:"我的收藏"},on:{click:t.collection}}),e("van-grid-item",{attrs:{icon:"underway",text:"浏览历史"},on:{click:t.History}})],1)],1),e("button",{staticStyle:{width:"90%",height:"40px",background:"#F5F7F9","margin-top":"20px","margin-left":"5%"},on:{click:t.refresh}},[t._v("退出登入")]),e("p",{staticStyle:{"text-align":"center"}},[t._v("登入时间："+t._s(t.time))])])])},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top"},[e("span",[e("i",{staticClass:"iconfont icon-fanhui"})]),e("h3",[t._v("注册/登入")])])}],k={inject:["reload"],name:"login",data(){return{active:"",value:"",val:!0,time:localStorage.getItem("time"),username:localStorage.getItem("username"),uid:localStorage.getItem("trip"),myfabu1:[],mygrzl:[],id:localStorage.getItem("trip")}},methods:{dr(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/login",{username:this.active,password:this.value}).then((t=>{if(console.log(t),"登录成功"==t.data.msg){this.mygrxx(),this.$toast("登入成功");let e=new Date,a=(new Date).getFullYear(),i=(new Date).getMonth()+1,s=(new Date).getDate(),o=(new Date).getHours(),n=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),l=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();e=a+"/"+i+"/"+s+" "+o+":"+n+":"+l,console.log(e),console.log(t.data.uid),this.$router.push("./"),localStorage.setItem("time",e),localStorage.setItem("trip",t.data.uid),localStorage.setItem("username",t.data.username),localStorage.setItem("token",t.data.token)}else this.$toast("账户或密码错误"),this.value=""}))},mygrxx(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/getuserInfo",{token:localStorage.getItem("token")}).then((t=>{console.log(t.data.userInfo),this.mygrzl=t.data.userInfo,localStorage.setItem("_id",t.data.userInfo._id)}))},myfabu(){this.$router.push("./myfabu")},login(){this.$router.push("./zhuce")},refresh(){localStorage.clear(),this.reload()},myzl(){localStorage.setItem("birthday",this.mygrzl.birthday),localStorage.setItem("nickname",this.mygrzl.nickname),localStorage.setItem("sex",this.mygrzl.sex),localStorage.setItem("avatar",this.mygrzl.avatar),this.$router.push({path:"./myzl",query:{myname:this.mygrzl.nickname}})},xiugai(){this.$router.push("./rivisepassword")},forget(){this.$router.push("./forgetpassword")},collection(){this.$router.push("./collection")},History(){this.$router.push("./history")}},created(){this.mygrxx()}},x=k,w=(0,r.Z)(x,b,y,!1,null,"2dea0dd2",null),S=w.exports,C=function(){var t=this,e=t._self._c;return e("div",[t._m(0),e("div",{staticClass:"a"},[e("van-cell-group",{staticClass:"input"},[e("van-field",{attrs:{placeholder:"请输入用标题"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),e("van-field",{attrs:{readonly:"",clickable:"",label:"分类",value:t.value,placeholder:"选择分类名称"},on:{click:function(e){t.showPicker=!0}}}),e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.columns},on:{cancel:function(e){t.showPicker=!1},confirm:t.onConfirm}})],1),e("van-cell-group",{staticClass:"inputs"},[e("van-field",{attrs:{placeholder:"请输入内容"},model:{value:t.values,callback:function(e){t.values=e},expression:"values"}})],1)],1),e("van-uploader",{ref:"file",staticClass:"uploader",attrs:{multiple:"","max-count":1,"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),e("button",{staticClass:"btn",on:{click:t.fabu}},[t._v("确定")])],1)},I=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top"},[e("h3",[t._v("发布")])])}],$={name:"fabu",data(){return{value1:"",values:"",rel:[],name:localStorage.getItem("_id"),uid:localStorage.getItem("trip"),fileList:[],imageData:{},isShow:!1,showList:!1,token:[],avatar:"",value:"",showPicker:!1,columns:[],id:""}},methods:{onConfirm(t,e){this.value=t,this.showPicker=!1,this.index=e,this.id=this.rel[e]._id},tokens(){this.axios.get("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/upload/token").then((t=>{console.log(t.data.token),this.token=t.data.token}))},afterRead(t){this.tokens();let e=new FormData;e.append("token",this.token),e.append("file",t.file),e.append("key",this.nanoid+t.file.name),this.axios.post("https://upload-z1.qiniup.com",e,{"Content-Type":"multipart/form-data"}).then((t=>{console.log("result: ",t),this.avatar="http://toutiao.longxiaokj.com/"+t.data.key,console.log(this.avatar)})).catch((t=>{console.log("err: ",t)}))},fabu(){this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_article",{title:this.value1,content:this.values,cate_id:this.id,cate_name:this.value,author:this.name,author_id:this.uid,imageSrc:[this.avatar]}).then((t=>{console.log(t),"成功"==t.data.msg&&""!=this.uid?(this.$toast("发布成功"),this.$router.push("./"),this.value=""):this.$toast(t.data.msg)}))}},created(){this.tokens(),this.axios.get("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_cate_list").then((t=>{console.log(t.data.data),this.rel=t.data.data;for(let e=0;e<this.rel.length;e++)this.columns.push(this.rel[e].name)}))}},z=$,L=(0,r.Z)(z,C,I,!1,null,"f3c037c0",null),D=L.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mjk"},[t._m(0),e("van-cell-group",{staticClass:"input"},[e("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1),e("van-cell-group",{staticClass:"inputs"},[e("van-field",{attrs:{placeholder:"请输入密码"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e("van-cell-group",{staticClass:"inputs"},[e("van-field",{attrs:{placeholder:"请输入验证码"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}})],1),t.btn?e("button",{staticClass:"btn",on:{click:t.myyzm}},[t._v("发送验证码")]):e("button",{staticClass:"btn"},[t._v("倒计时："+t._s(t.time))]),e("button",{staticClass:"end",on:{click:t.zc}},[t._v("注册")]),e("p",[t._v("如果有账号？去"),e("span",{on:{click:t.dengru}},[t._v("登入")])])],1)},Z=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"top"},[e("span",[e("i",{staticClass:"iconfont icon-fanhui"})]),e("h3",[t._v("注册/登入")])])}],P={name:"zhuce",data(){return{active:"",value:"",yzm:"",time:10,btn:!0,tishi:""}},methods:{zc(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/reg",{username:this.active,password:this.value,vercode:this.yzm}).then((t=>{console.log(t.data.msg),11==this.active.length&&"注册成功"==t.data.msg&&this.value.length>=6?(this.$toast("注册成功"),localStorage.setItem("password",this.value),this.$router.push("./login")):this.$toast("请输入正确的手机号和密码")}))},myyzm(){this.btn=!1;let t=setInterval((()=>{this.time--,0==this.time&&(this.btn=!0,clearInterval(t),this.time=10)}),1e3);this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/sendSms",{mobile:this.active,type:"register"}).then((t=>{console.log(t),console.log(t.data.data),this.tishi=t.data.data,this.$toast("验证码是"+this.tishi)}))},dengru(){this.$router.push("./login")}}},j=P,O=(0,r.Z)(j,q,Z,!1,null,"4274dee5",null),T=O.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top"},[e("span",{on:{click:t.fanhui}},[e("i",{staticClass:"iconfont icon-fanhui"})]),e("h3",[t._v("列表详情")])]),e("div",{staticClass:"list"},[e("h3",[t._v(t._s(t.xqlist.title))]),e("div",{staticClass:"zuozhe"},[e("img",{attrs:{src:t.xqlist.avatar,alt:""}}),e("p",[t._v("作者:"+t._s(t.xqlist.nickname))]),e("p",{staticStyle:{"font-size":"10px"}},[t._v("发布时间:"+t._s(new Date(parseInt(t.xqlist.time)).toLocaleString().replace(/:\d{1,2}$/,"")))]),t.xqlist.is_fav?e("button",{on:{click:t.dingyueyes}},[t._v("已收藏")]):e("button",{on:{click:t.dingyue}},[t._v("+收藏")])]),e("div",{staticClass:"myimg"},[e("h6",[t._v(t._s(t.xqlist.content))]),e("li",t._l(t.xqlist.imageSrc,(function(t){return e("img",{attrs:{src:t,alt:""}})})),0)])]),e("div",{staticClass:"footr"},[e("span",[t._v("评论："+t._s(t.xqlist.comment))]),e("span",[t._v("点赞："+t._s(t.xqlist.like))])]),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(a,i){return e("div",{key:i,staticClass:"pllb"},[e("img",{attrs:{src:a.info.avatar,alt:""}}),e("li",[t._v(t._s(a.info.nickname))]),e("li",[t._v(t._s(new Date(parseInt(a.create_time)).toLocaleString().replace(/:\d{1,2}$/,"")))]),e("div",{staticClass:"pl"},[e("h5",[t._v(t._s(a.content))]),e("span",[e("van-icon",{attrs:{name:"chat-o",badge:a.reply_num,size:"25"},on:{click:function(e){return t.hfpl(a)}}})],1),a.is_like?e("span",[e("van-icon",{attrs:{name:"like",size:"25",color:"red"},on:{click:function(e){return t.unlike(a)}}})],1):e("span",[e("van-icon",{attrs:{name:"like-o",size:"25"},on:{click:function(e){return t.like(a)}}})],1),t._l(t.hfpllb,(function(i,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.item2==a._id,expression:"item2==item._id"}],key:s,staticClass:"hfpllb"},[e("img",{attrs:{src:i.info.avatar,alt:""}}),e("li",[t._v(t._s(i.info.nickname))]),e("li",[t._v(t._s(new Date(parseInt(i.create_time)).toLocaleString().replace(/:\d{1,2}$/,"")))]),e("p",[t._v(t._s(i.content))])])}))],2)])})),0),e("div",{staticClass:"dibu"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtext,expression:"inputtext"}],attrs:{type:"text",placeholder:"写评论"},domProps:{value:t.inputtext},on:{input:function(e){e.target.composing||(t.inputtext=e.target.value)}}}),e("van-icon",{attrs:{name:"chat-o",badge:t.xqlist.comment,size:"30"},on:{click:t.pinglun}}),t.xqlist.is_like?e("van-icon",{attrs:{name:"like",size:"30",color:"red"},on:{click:t.undianzan}}):e("van-icon",{attrs:{name:"like-o",size:"30"},on:{click:t.dianzan}}),t.xqlist.is_fav?e("van-icon",{attrs:{name:"star",size:"30",color:"red"}}):e("van-icon",{attrs:{name:"star-o",size:"30"}}),e("van-icon",{attrs:{name:"share-o",size:"30"}})],1)],1)},R=[],F={name:"xiangqing",data(){return{id:this.$route.query.id,xqlist:[],inputtext:"",list:[],limit:10,loading:!1,finished:!1,hfpllb:[],likes:[],vals:"",item2:""}},created(){this.aaa(),this.bbb()},methods:{aaa(){this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_article_detail",{article_id:this.id,user_id:localStorage.getItem("trip")}).then((t=>{console.log(t.data.data),this.xqlist=t.data.data}))},fanhui(){this.$router.go(-1)},dianzan(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/like",{user_id:localStorage.getItem("trip"),article_id:this.id}).then((t=>{console.log(t.data),(t.data.msg="点赞成功")&&this.$toast("点赞成功"),this.aaa()}))},undianzan(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/unlike",{user_id:localStorage.getItem("trip"),article_id:this.id}).then((t=>{console.log(t.data),(t.data.msg="取消点赞成功")&&this.$toast("取消点赞成功"),this.aaa()}))},pinglun(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_comment",{user_id:localStorage.getItem("trip"),article_id:this.id,content:this.inputtext,reply_comment_id:"",comment_type:0}).then((t=>{console.log(t),"评论成功"==t.data.msg&&(this.inputtext="",this.onLoad())}))},dingyue(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_fav",{user_id:localStorage.getItem("trip"),article_id:this.id}).then((t=>{console.log(t.data),(t.data.msg="收藏成功")&&this.$toast("收藏成功"),this.aaa()}))},dingyueyes(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/remove_fav",{user_id:localStorage.getItem("trip"),article_id:this.id}).then((t=>{console.log(t),(t.data.msg="取消收藏成功")&&this.$toast("取消收藏成功"),this.aaa()}))},onLoad(){setTimeout((()=>{this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_comment_list",{user_id:localStorage.getItem("trip"),article_id:this.id,skip:"0",limit:this.limit}).then((t=>{console.log(t.data.data),this.list=t.data.data})),this.loading=!1,this.limit+=10,this.list.length<=this.limit&&(this.finished=!0)}),1e3)},hfpl(t){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_comment",{user_id:localStorage.getItem("trip"),article_id:this.id,content:this.inputtext,reply_comment_id:t._id,comment_type:1}).then((e=>{console.log(e),console.log(t._id),this.item2=t._id,console.log(this.item2),this.inputtext="",this.bbb()}))},bbb(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_reply_list",{skip:0,limit:1e7,user_id:localStorage.getItem("trip"),article_id:this.id,reply_comment_id:this.item2,comment_type:"1"}).then((t=>{console.log(t.data.data),this.hfpllb=t.data.data}))},like(t){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/comment_like",{user_id:localStorage.getItem("trip"),comment_id:t._id}).then((t=>{console.log(t),this.likes=t.data,this.onLoad()}))},unlike(t){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/comment_unlike",{user_id:localStorage.getItem("trip"),comment_id:t._id}).then((t=>{console.log(t),this.onLoad()}))}}},N=F,H=(0,r.Z)(N,M,R,!1,null,"5e079d6b",null),J=H.exports,Y=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"我的发布","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._l(t.myfabulist,(function(a,i){return e("div",{key:i,staticClass:"mylist"},[e("h3",{on:{click:function(e){return t.todetails(i)}}},[t._v("用户名:"+t._s(a.author))]),e("li",{on:{click:function(e){return t.todetails(i)}}},[t._v("分类名:"+t._s(a.cate_name))]),e("li",{on:{click:function(e){return t.todetails(i)}}},[t._v("内容:"+t._s(a.title))]),e("li",[t._v("发布时间:"+t._s(new Date(parseInt(a.time)).toLocaleString().replace(/:\d{1,2}$/,""))+" "),e("button",{on:{click:function(e){return t.shanchu(i)}}},[t._v("删除")])]),e("img",{attrs:{src:a.imageSrc,alt:""},on:{click:function(e){return t.todetails(i)}}})])}))],2)},E=[],U={name:"myfabu",data(){return{myfabulist:[],myuid:localStorage.getItem("trip")}},created(){this.mybtn()},methods:{onClickLeft(){this.$router.go(-1)},mybtn(){this.axios.get(`https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_user_article_list?uid=${this.myuid}&skip&limit`).then((t=>{console.log(t.data.data),this.myfabulist=t.data.data}))},shanchu(t){this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/del_user_article",{_id:this.myfabulist[t]._id,uid:localStorage.getItem("trip")}).then((t=>{console.log(t),this.mybtn()}))},todetails(t){this.$router.push({path:"./xiangqing",query:{id:this.myfabulist[t]._id}})}}},A=U,B=(0,r.Z)(A,Y,E,!1,null,null,null),G=B.exports,K=function(){var t=this,e=t._self._c;return e("div",[e("form",{attrs:{action:"/"}},[e("van-search",{attrs:{"show-action":"",background:"#4fc08d",placeholder:"请输入搜索关键词"},on:{search:t.onSearch,cancel:t.onCancel,input:t.mjk},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._l(t.list,(function(a,i){return e("ul",{key:i},[e("li",{on:{click:function(e){return t.lilist(i)}}},[e("i",{staticClass:"iconfont icon-sousuo"},[t._v(t._s(a.title))])])])})),e("div",{staticClass:"Search"},[e("p",[t._v(" 历史搜索"),e("span",{on:{click:t.empty}},[t._v("清除"),e("i",{staticClass:"iconfont icon-shanchu"})])]),t._l(t.historyList,(function(a,i){return e("li",{key:i,on:{click:function(e){return t.lis(i)}}},[t._v(t._s(a))])}))],2)],2)},Q=[],V=(a(541),{name:"sousuo",data(){return{value:"",index:0,list:[],text:localStorage.getItem("sezrch"),historyList:[]}},mounted(){JSON.parse(localStorage.getItem("historyList"))&&(this.historyList=JSON.parse(localStorage.getItem("historyList")))},methods:{onSearch(){this.mjk},mjk(){this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/search",{key_word:this.value,limit:1e4}).then((t=>{console.log(t.data.data),this.list=t.data.data}))},onCancel(){this.$router.go(-1)},lilist(t){if(this.historyList.includes(this.value)){let t=this.historyList.indexOf(this.value);this.historyList.splice(t,1),this.historyList.unshift(this.value),localStorage.setItem("historyList",JSON.stringify(this.historyList))}else this.historyList.unshift(this.value),localStorage.setItem("historyList",JSON.stringify(this.historyList));this.$router.push({path:"./xiangqing",query:{id:this.list[t]._id,cate_id:this.list[t].cate_id}})},lis(t){this.value=this.historyList[t],this.mjk()},empty(){this.$toast.success("清空历史搜索成功"),localStorage.removeItem("historyList"),this.historyList=[]}}}),W=V,X=(0,r.Z)(W,K,Q,!1,null,"77d48814",null),tt=X.exports,et=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"个人资料","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),e("ul",[e("li",{staticStyle:{height:"90px","line-height":"90px"}},[e("span",{staticStyle:{float:"left"}},[t._v("个人头像")]),t._v(":"),e("van-uploader",{ref:"file",staticClass:"uploader",attrs:{multiple:"","max-count":1,"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),e("li",{on:{click:t.names}},[t._v(" 发布姓名:"),t._m(0),e("span",[t._v(t._s(t.nickname))])]),e("li",{on:{click:t.shengri}},[t._v(" 生日"),t._m(1),e("span",[t._v(t._s(t.birthday))])]),e("li",{on:{click:t.sex}},[t._v(" 性别"),t._m(2),e("span",[t._v(t._s(t.sex2))])])]),e("button",{on:{click:t.baocun}},[t._v("保存")])],1)},at=[function(){var t=this,e=t._self._c;return e("span",[e("i",{staticClass:"iconfont icon-xiayiyeqianjinchakangengduo"})])},function(){var t=this,e=t._self._c;return e("span",[e("i",{staticClass:"iconfont icon-xiayiyeqianjinchakangengduo"})])},function(){var t=this,e=t._self._c;return e("span",[e("i",{staticClass:"iconfont icon-xiayiyeqianjinchakangengduo"})])}],it=(a(9564),{name:"myzl",data(){return{uid:localStorage.getItem("trip"),birthday:localStorage.getItem("birthday"),sex2:localStorage.getItem("sex"),nickname:localStorage.getItem("nickname"),mynames:this.$route.query.myname,fileList:[{url:localStorage.getItem("avatar")}],imageData:{},isShow:!1,showList:!1,token:[],avatar:""}},created(){this.tokens()},methods:{afterRead(t){let e=new FormData;e.append("token",this.token),e.append("file",t.file),e.append("key",this.nanoid+t.file.name),this.axios.post("https://upload-z1.qiniup.com",e,{"Content-Type":"multipart/form-data"}).then((t=>{console.log("result: ",t),this.avatar="http://toutiao.longxiaokj.com/"+t.data.key})).catch((t=>{console.log("err: ",t)}))},tokens(){this.axios.get("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/upload/token").then((t=>{console.log(t.data.token),this.token=t.data.token}))},onClickLeft(){this.$router.push({path:"./login"})},names(){this.$router.push("./name")},shengri(){this.$router.push("./shengri")},sex(){this.$router.push("./sex")},baocun(){this.axios.post("https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/editUserInfo",{uid:this.uid,avatar:this.avatar,nickname:this.nickname,birthday:this.birthday,sex:this.sex2}).then((t=>{console.log(t),(t.data.msg="更新成功")?this.$router.push("./login"):this.$toast(t.data.msg)}))}}}),st=it,ot=(0,r.Z)(st,et,at,!1,null,"2e5c7226",null),nt=ot.exports,lt=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"个人资料","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),e("h3",[t._v("请输入你的名称")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.myname,expression:"myname"}],attrs:{type:"text"},domProps:{value:t.myname},on:{input:function(e){e.target.composing||(t.myname=e.target.value)}}})],1)},rt=[],ct={name:"names",data(){return{myname:""}},methods:{onClickLeft(){""===this.myname?this.myname=this.$route.query.mynames1:(this.$router.push("./myzl"),localStorage.setItem("nickname",this.myname))}}},ht=ct,ut=(0,r.Z)(ht,lt,rt,!1,null,"0555eab2",null),pt=ut.exports,dt=function(){var t=this,e=t._self._c;return e("div",[e("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.sr},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)},mt=[],vt={name:"shengri",data(){return{minDate:new Date(1990,0,1),maxDate:new Date(2022,10,1),currentDate:""}},methods:{sr(){this.$router.push("./myzl"),localStorage.setItem("birthday",this.currentDate.getFullYear()+"-"+(this.currentDate.getMonth()+1)+"-"+this.currentDate.getDate())}}},gt=vt,ft=(0,r.Z)(gt,dt,mt,!1,null,null,null),_t=ft.exports,bt=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"性别","left-text":"返回","right-text":"确定","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),e("p",[t._v("请选择性别：")]),e("van-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[e("van-radio",{attrs:{name:"男"}},[t._v("男")]),e("van-radio",{attrs:{name:"女"}},[t._v("女")])],1)],1)},yt=[],kt={name:"sex",data(){return{radio:""}},methods:{onClickLeft(){this.$router.go(-1)},onClickRight(){this.$router.push({path:"./myzl",query:{sex1:this.radio}}),localStorage.setItem("sex",this.radio)}}},xt=kt,wt=(0,r.Z)(xt,bt,yt,!1,null,null,null),St=wt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"修改密码","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),e("van-field",{attrs:{type:"password",label:"请输入旧密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("van-field",{attrs:{type:"password",label:"请输入新密码"},model:{value:t.newpassword,callback:function(e){t.newpassword=e},expression:"newpassword"}}),e("button",{on:{click:t.btn}},[t._v("确认")])],1)},It=[],$t={name:"rivisepassword",data(){return{password:"",newpassword:""}},methods:{onClickLeft(){this.$router.go(-1)},btn(){this.axios.post("  https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/updatePwd",{oldPassword:this.password,newPassword:this.newpassword,uid:localStorage.getItem("trip")}).then((t=>{"修改成功"==t.data.msg?(this.$router.push("./login"),localStorage.clear()):this.$toast(t.data.error.message),console.log(t)}))}},created(){}},zt=$t,Lt=(0,r.Z)(zt,Ct,It,!1,null,"4cd036cc",null),Dt=Lt.exports,qt=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"忘记密码","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),e("van-field",{attrs:{type:"text",label:"请输入手机号"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),e("van-field",{attrs:{type:"password",label:"请输入新密码"},model:{value:t.newpassword,callback:function(e){t.newpassword=e},expression:"newpassword"}}),e("van-field",{attrs:{type:"text",label:"请输入验证码"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}}),t.captcha?e("button",{staticClass:"btn",on:{click:t.captchas}},[t._v("发送验证码")]):e("button",{staticClass:"btn"},[t._v("倒计时："+t._s(t.time))]),e("button",{staticClass:"yes",on:{click:t.yes}},[t._v("确认")])],1)},Zt=[],Pt={name:"forgetpassword",data(){return{captcha:!0,text:"",newpassword:"",yzm:"",time:10}},methods:{onClickLeft(){this.$router.go(-1)},captchas(){this.captcha=!1;let t=setInterval((()=>{this.time--,0==this.time&&(this.captcha=!0,clearInterval(t),this.time=10)}),1e3);this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/sendSms",{mobile:this.text,type:"login"}).then((t=>{console.log(t),console.log(t.data.data),this.$toast("验证码是"+t.data.data)}))},yes(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/user/forget",{username:this.text,password:this.newpassword,vercode:this.yzm}).then((t=>{console.log(t),"密码重置成功"==t.data.msg&&this.$router.push("./login")}))}}},jt=Pt,Ot=(0,r.Z)(jt,qt,Zt,!1,null,"99b87286",null),Tt=Ot.exports,Mt=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"我的收藏","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._l(t.mycollection,(function(a,i){return e("div",{key:i,staticClass:"mycollection"},[e("h3",{on:{click:function(e){return t.mycollections(i)}}},[t._v("用户名:"+t._s(a.author))]),e("li",{on:{click:function(e){return t.mycollections(i)}}},[t._v("分类名:"+t._s(a.cate_name))]),e("li",{on:{click:function(e){return t.mycollections(i)}}},[t._v("内容:"+t._s(a.title))]),e("li",[t._v("发布时间:"+t._s(new Date(parseInt(a.time)).toLocaleString().replace(/:\d{1,2}$/,""))),e("button",{on:{click:function(e){return t.collection(i)}}},[t._v("取消收藏")])]),e("img",{attrs:{src:a.imageSrc,alt:""},on:{click:function(e){return t.mycollections(i)}}})])}))],2)},Rt=[],Ft={name:"collection",data(){return{mycollection:[]}},methods:{onClickLeft(){this.$router.go(-1)},collection(t){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/remove_fav",{user_id:localStorage.getItem("trip"),article_id:this.mycollection[t]._id}).then((t=>{console.log(t),this.collections()}))},collections(){this.axios.post(" https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_fav_list",{user_id:localStorage.getItem("trip"),skip:0,limit:1e5}).then((t=>{console.log(t.data.data),this.mycollection=t.data.data}))},mycollections(t){this.$router.push({path:"./xiangqing",query:{id:this.mycollection[t]._id}})}},created(){this.collections()}},Nt=Ft,Ht=(0,r.Z)(Nt,Mt,Rt,!1,null,null,null),Jt=Ht.exports,Yt=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{attrs:{title:"浏览历史","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._l(t.historylist,(function(a,i){return e("div",{key:i,staticClass:"history",on:{click:function(e){return t.history(i)}}},[e("h3",[t._v("用户名:"+t._s(a.author))]),e("li",[t._v("分类名:"+t._s(a.cate_name))]),e("li",[t._v("内容:"+t._s(a.title))]),e("li",[t._v("发布时间:"+t._s(new Date(parseInt(a.time)).toLocaleString().replace(/:\d{1,2}$/,"")))]),e("img",{attrs:{src:a.imageSrc,alt:""}})])}))],2)},Et=[],Ut={name:"history",data(){return{uid:localStorage.getItem("trip"),historylist:[]}},methods:{onClickLeft(){this.$router.go(-1)},history(t){this.$router.push({path:"./xiangqing",query:{id:this.historylist[t]._id}})}},created(){this.axios.post(`https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_history_list?uid=${this.uid}&skip&limit`).then((t=>{console.log(t.data),this.historylist=t.data.data}))}},At=Ut,Bt=(0,r.Z)(At,Yt,Et,!1,null,null,null),Gt=Bt.exports;i.ZP.use(p.ZP);const Kt=[{path:"/",name:"index",component:_,meta:{root:!0}},{path:"/history",name:"history",component:Gt},{path:"/forgetpassword",name:"forgetpassword",component:Tt},{path:"/collection",name:"collection",component:Jt},{path:"/rivisepassword",name:"rivisepassword",component:Dt},{path:"/sex",name:"sex",component:St},{path:"/shengri",name:"shengri",component:_t},{path:"/name",name:"name",component:pt},{path:"/myzl",name:"myzl",component:nt},{path:"/sousuo",name:"sousuo",component:tt},{path:"/myfabu",name:"myfabu",component:G},{path:"/xiangqing",name:"xiangqing",component:J},{path:"/zhuce",name:"zhuce",component:T,meta:{root:!0}},{path:"/login",name:"login",component:S,meta:{root:!0}},{path:"/fabu",name:"fabu",component:D,meta:{root:!0}}],Qt=new p.ZP({mode:"history",base:"/",routes:Kt});var Vt=Qt,Wt=a(3822);i.ZP.use(Wt.ZP);var Xt=new Wt.ZP.Store({state:{a:1},getters:{},mutations:{},actions:{},modules:{}}),te=a(7652);i.ZP.use(u.ZP),i.ZP.prototype.axios=te.ZP,i.ZP.config.productionTip=!1,new i.ZP({router:Vt,store:Xt,render:t=>t(h)}).$mount("#app")}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,i,s,o){if(!i){var n=1/0;for(h=0;h<t.length;h++){i=t[h][0],s=t[h][1],o=t[h][2];for(var l=!0,r=0;r<i.length;r++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](i[r])}))?i.splice(r--,1):(l=!1,o<n&&(n=o));if(l){t.splice(h--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[i,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,n=i[0],l=i[1],r=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var h=r(a)}for(e&&e(i);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(h)},i=self["webpackChunktoutiao"]=self["webpackChunktoutiao"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(6136)}));i=a.O(i)})();
//# sourceMappingURL=app.2f8b5b89.js.map