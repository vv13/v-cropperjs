(function(e){function n(n){for(var r,c,p=n[0],a=n[1],s=n[2],f=0,l=[];f<p.length;f++)c=p[f],o[c]&&l.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);u&&u(n);while(l.length)l.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,p=1;p<t.length;p++){var a=t[p];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={index:0},i=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/v-cropperjs/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],a=p.push.bind(p);p.push=n,p=p.slice();for(var s=0;s<p.length;s++)n(p[s]);var u=a;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("a1ec")},"3d4e":function(e,n,t){var r=t("b5df");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=t("499e").default;o("9f4ceec0",r,!0,{sourceMap:!1,shadowMode:!1})},a1ec:function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"sdasd"},[t("v-cropperjs",{ref:"cropper",attrs:{src:e.cropImg,options:e.cropOptions,domProps:{alt:"test"}}})],1),t("button",{on:{click:e.handleZoomIn}},[e._v("+")]),t("button",{on:{click:e.handleZoomOut}},[e._v("-")])])},i=[],c=t("e74a"),p=t.n(c),a=t("c93e"),s=t("b5fc"),u=(t("6107"),r["a"].extend({name:"v-cropperjs",render:function(e){return e("img",{style:{maxWidth:"100%"},domProps:Object(a["a"])({},this.domProps,{src:this.src}),ref:"img"})},data:function(){return{cropper:null}},props:{options:{type:Object,default:function(){return{}}},src:String,domProps:{type:Object,default:function(){return{}}}},mounted:function(){this.cropper=new s["a"](this.$refs.img,this.options)}})),f={name:"app",data:function(){return{cropImg:p.a,cropOptions:{}}},components:{VCropperjs:u},methods:{handleZoomIn:function(){this.$refs.cropper.cropper.zoom(.1)},handleZoomOut:function(){this.$refs.cropper.cropper.zoom(-.1)}}},l=f,d=(t("d7fb"),t("2877")),m=Object(d["a"])(l,o,i,!1,null,null,null);m.options.__file="App.vue";var h=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},b5df:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,'\n#app {\n  font-family: "Avenir", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n',""])},d7fb:function(e,n,t){"use strict";var r=t("3d4e"),o=t.n(r);o.a},e74a:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=index.d08e051c.js.map