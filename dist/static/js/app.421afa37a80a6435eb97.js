webpackJsonp([1],{CnwE:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("7+uW"),i=e("mvHQ"),a=e.n(i);function c(n,t){var e=null;return function(){var o=this,i=arguments;clearTimeout(e),e=setTimeout(function(){n.apply(o,i)},t)}}var s=e("g3tB"),l=e.n(s),r=e("eh2P"),u=e.n(r),p={data:function(){return{myToken:this.token,mySection:{}}},props:{token:{type:String,default:null},section:{type:Object,default:function(){}}},computed:{},mounted:function(){this.mySection=this.section},methods:{onchange:function(){this.$emit("changeToken",this.myToken)}},watch:{}},v={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"v-controlBar"},[e("div",{staticClass:"apple"}),n._v(" "),e("div",{staticClass:"title"},[e("select",{directives:[{name:"model",rawName:"v-model",value:n.myToken,expression:"myToken"}],on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,function(n){return n.selected}).map(function(n){return"_value"in n?n._value:n.value});n.myToken=t.target.multiple?e:e[0]},n.onchange]}},[n._l(n.mySection,function(t,o){return[e("option",{domProps:{value:o}},[n._v(n._s(t.date))])]})],2)])])},staticRenderFns:[]};var m={components:{controlBar:e("VU/8")(p,v,!1,function(n){e("CnwE")},null,null).exports},data:function(){return{section:{date:this.$dayjs().format("YYYY年MM月DD日 HH:mm:ss"),input:"\n\n# h1\n\n## h2\n\n### h3\n\n#### h4\n\n##### h5\n\n###### h6\n\nppppppp\n\n**bbbbbbb**\n\n*iiiiiii*\n\n[aaaaaaa]()\n\n![img](http://oz2tkq0zj.bkt.clouddn.com/17-11-9/76001088.jpg)\n\n> blockquoteblockquote\n> blockquoteblockquote\n\n- ul\n- ul\n- ul\n- ul\n  - ul\n- ul\n  - ul\n- ul\n  - ul\n\n1. ol\n1. ol\n1. ol\n1. ol\n  - ul\n2. ol\n  - ul\n3. ol\n  - ul\n\n---\n\n- [ ] checkBox\n- [ ] checkBox\n- [ ] checkBox\n- [x] checkBox\n- [x] checkBox\n- [x] checkBox\n\n\n&#x60; code &#x60;;\n\n&#x60;&#x60;&#x60; css\n// /将转义字符替换查看效果\n.scale {\n    width: 100%;\n    height: 0;\n    padding-bottom: 50%;\n}\n\n&#x60;&#x60;&#x60;\n\n\n| 事件名 | 说明 | 返回值 |\n| --- | --- | --- |\n| click | 点击按钮时触发 | 无  |\n| click | 点击按钮时触发 | 无  |\n| click | 点击按钮时触发 | 无  |\n| click | 点击按钮时触发 | 无  |\n\n\n"},token:"token"+(new Date).getTime()+Math.floor(1e7*Math.random()),onSaveText:""}},computed:{markToView:function(){return l()(this.section.input,{gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(n){return u.a?u.a.highlightAuto(n).value:n}})},localSection:function(){return JSON.parse(localStorage.getItem("v_mark_section"))||{}}},methods:{update:c(function(n){this.section.input=n.target.value},300),saveSection:function(){this.localSection[this.token]=JSON.parse(a()(this.section)),localStorage.setItem("v_mark_section",a()(this.localSection))},changeToken:function(n){this.token=n}},created:function(){},mounted:function(){this.saveSection()},watch:{"section.input":c(function(n,t){this.saveSection()},3e3),token:function(n,t){this.section.input=this.localSection[n].input}}},h={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"v-mark"},[e("control-bar",{attrs:{token:n.token,section:n.localSection},on:{changeToken:n.changeToken}}),n._v(" "),e("div",{staticClass:"v-editorView"},[e("split-pane",{attrs:{"min-percent":20,"default-percent":50,split:"vertical"}},[e("template",{slot:"paneL"},[e("textarea",{staticClass:"v-editor",domProps:{value:n.section.input},on:{input:n.update}})]),n._v(" "),e("template",{slot:"paneR"},[e("div",{staticClass:"v-view",domProps:{innerHTML:n._s(n.markToView)}})])],2)],1)],1)},staticRenderFns:[]};var d={name:"App",components:{editorView:e("VU/8")(m,h,!1,function(n){e("kNIO")},null,null).exports},data:function(){return{key:""}},computed:{},methods:{}},f={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"markdown-preview",attrs:{id:"app"}},[t("h1",[this._v("v-mark")]),this._v(" "),this._m(0),this._v(" "),t("editor-view")],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"describe"},[e("blockquote",[e("p",[n._v("利用`vue`和`marked`实现的 markdown 编辑器，功能如下：")]),n._v(" "),e("ul",[e("li",[n._v("左右分屏，可以自由调节分屏大小")]),n._v(" "),e("li",[n._v("默认新建文章保存一次，之后每次修改3秒后无操作自动保存")]),n._v(" "),e("li",[n._v("可以查看修改所有保存文章")])]),n._v(" "),e("p",[n._v("计划新增功能：")]),n._v(" "),e("ol",[e("li",[n._v("快捷工具栏")]),n._v(" "),e("li",[n._v("左右分屏同步滚动")])])])])}]};var k=e("VU/8")(d,f,!1,function(n){e("xA3H")},null,null).exports,_=e("bysU"),g=e.n(_),x=e("64iY"),b=e.n(x);e("m7aY"),e("bZ6U");o.a.config.productionTip=!1,o.a.component("split-pane",b.a),o.a.prototype.$dayjs=g.a,new o.a({el:"#app",components:{App:k},template:"<App/>"})},bZ6U:function(n,t){},kNIO:function(n,t){},m7aY:function(n,t){},xA3H:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.421afa37a80a6435eb97.js.map