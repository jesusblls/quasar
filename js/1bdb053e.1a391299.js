(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1bdb053e"],{8041:function(e,t,i){"use strict";var a=i("cddb"),s=i.n(a);s.a},"8b24":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex felx-center row q-ma-xs"},[e._l(e.images,function(t){return i("q-card",{key:t,staticClass:"bigger q-ma-md offset-md-3 col-md-6 col-sm-12"},[i("q-card-media",[i("img",{attrs:{src:t.path}})]),i("q-card-title",{staticClass:"relative-position"},[i("div",{staticClass:"ellipsis"},[e._v(e._s(t.title))]),i("div",{staticClass:"row items-center",attrs:{slot:"right"},slot:"right"},[i("q-icon",{staticClass:"q-mr-md",staticStyle:{"font-size":"1rem"},attrs:{name:"fas fa-user"}}),e._v("Alguien\n      ")],1)]),i("q-card-main",[i("p",{staticClass:"text-faded"},[e._v(e._s(t.description))])])],1)}),i("q-btn",{staticClass:"fixed-bottom-right q-mr-sm q-mb-sm",attrs:{round:"",color:"secondary",icon:"fas fa-plus"},on:{click:function(t){e.opened=!0}}}),i("q-modal",{ref:"modalRef",staticClass:"text-center",attrs:{minimized:""},model:{value:e.opened,callback:function(t){e.opened=t},expression:"opened"}},[i("div",{staticStyle:{padding:"50px"}},[i("div",{staticClass:"q-display-1 q-mb-md"},[e._v("Upload image")]),i("form",{attrs:{action:"http://ej-photo.herokuapp.com/upload",method:"post",enctype:"multipart/form-data"}},[i("q-input",{attrs:{required:"",name:"title","float-label":"Title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),i("q-input",{attrs:{required:"",name:"description","float-label":"Description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),i("input",{ref:"file",staticClass:"q-mt-lg",attrs:{type:"file",name:"image"}}),i("br"),i("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"q-mt-md",attrs:{color:"red",label:"Close"}}),i("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"q-mt-md q-ml-sm",attrs:{type:"submit",required:"",color:"green"},on:{click:function(t){e.upload()}}},[e._v("Upload")])],1)])])],2)},s=[];a._withStripped=!0;var l={name:"PageIndex",data:function(){return{file:"",title:null,description:null,images:null,opened:!1}},created:function(){var e=this;this.db.ref("/").on("value",function(t){return e.cargarBase(t.val())})},methods:{cargarBase:function(e){for(var t in this.images=[],e.image)this.images.push({title:e.image[t].title,description:e.image[t].description,filename:e.image[t].filename,path:"https://res.cloudinary.com/jesusblls/image/upload/insta/"+e.image[t].filename+".jpg",originalname:e.image[t].originalname,mimetype:e.image[t].mimetype,size:e.image[t].size,created_at:e.image[t].created_at,key:t});this.images.reverse()},upload:function(){this.file=this.$refs.file.files[0],console.log(this.title),console.log(this.description),console.log(this.file)}}},n=l,o=(i("8041"),i("2877")),r=Object(o["a"])(n,a,s,!1,null,null,null);r.options.__file="Index.vue";t["default"]=r.exports},cddb:function(e,t,i){}}]);