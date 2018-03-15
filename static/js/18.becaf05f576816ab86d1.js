webpackJsonp([18],{"/072":function(o,t,e){var s=e("9Hvr");"string"==typeof s&&(s=[[o.i,s,""]]),s.locals&&(o.exports=s.locals);e("rjj0")("621484ca",s,!0)},"0AAv":function(o,t,e){"use strict";function s(o){e("/072")}Object.defineProperty(t,"__esModule",{value:!0});var i=e("qPx5"),a=e.n(i);for(var n in i)"default"!==n&&function(o){e.d(t,o,function(){return i[o]})}(n);var r=e("pXvX"),c=e("VU/8"),l=s,u=c(a.a,r.a,!1,l,null,null);t.default=u.exports},"9Hvr":function(o,t,e){t=o.exports=e("FZ+f")(!0),t.push([o.i,"","",{version:3,sources:[],names:[],mappings:"",file:"BookListContent.vue",sourceRoot:""}])},pXvX:function(o,t,e){"use strict";var s=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"book-list-content layout-content"},[e("iv-row",[e("iv-col",{attrs:{xs:24,sm:24,md:24,lg:17}},[e("div",{staticClass:"layout-left"},[e("classify-menu",{attrs:{categorys:o.categorys,defaultCategory:o.top_category},on:{selectCategory:o.selectCategory}}),o._v(" "),e("iv-affix",{staticStyle:{position:"relative","z-index":"12"}},[e("section-title",{attrs:{mainTitle:"图书列表",subTitle:"Books",menus:o.booksMenus,withRefresh:!0,withTimeSelect:!0,datePickerOptions:o.booksDatePickerOptions},on:{refresh:o.refreshBooks,menusControl:o.booksMenusControl,comfirmDateSelect:o.booksDateSelect,clearDateSelect:o.booksDateSelectClear}})],1),o._v(" "),o._l(o.books,function(o){return e("book-cell",{key:o.id,attrs:{book:o}})}),o._v(" "),e("browse-more",{ref:"browseMoreBooks",on:{browseMore:o.browseMoreBooks}})],2)]),o._v(" "),e("iv-col",{attrs:{xs:0,sm:0,md:0,lg:7}},[e("div",{staticClass:"layout-right"},[e("recommend"),o._v(" "),e("tag-wall",{staticStyle:{"margin-top":"15px"}})],1)])],1)],1)},i=[],a={render:s,staticRenderFns:i};t.a=a},qPx5:function(o,t,e){"use strict";function s(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(t,"__esModule",{value:!0});var i=e("nGNg"),a=s(i),n=e("NXNv"),r=s(n),c=e("SLXF"),l=s(c),u=e("qm2k"),m=s(u),k=e("XxWu"),h=s(k),d=e("63Js"),b=s(d),f=e("P9l9");t.default={data:function(){return{books:[],bookNotes:[],categorys:void 0,top_category:void 0,limit_size:10,booksTimeSorted:!1,booksMostComment:void 0,booksRecommend:void 0,booksPage:0,booksTotalCount:0,noMoreBooksData:!1,booksMenus:[{title:"顺序",selectedTitle:"逆序",selected:!0,method:"timeSorted"},{title:"评论最多",selected:!1,method:"mostComment"},{title:"推荐",selected:!1,method:"recommend"}],booksDatePickerOptions:{disabledDate:function(o){return o&&o.valueOf()>Date.now()},shortcuts:[{text:"近一周",value:function(){var o=new Date,t=new Date;return t.setTime(t.getTime()-6048e5),[t,o]}},{text:"近一个月",value:function(){var o=new Date,t=new Date;return t.setTime(t.getTime()-2592e6),[t,o]}},{text:"近三个月",value:function(){var o=new Date,t=new Date;return t.setTime(t.getTime()-7776e6),[t,o]}},{text:"近一年",value:function(){var o=new Date,t=new Date;return t.setTime(t.getTime()-31536e6),[t,o]}}]},booksSelectedDateRange:[]}},created:function(){this.top_category=parseInt(this.$route.params.id),this.getDatas()},methods:{selectCategory:function(o){this.top_category=o,this.booksTimeSorted=!1,this.booksMostComment=void 0,this.booksRecommend=void 0,this.booksPage=0,this.books=[],this.booksTotalCount=0,this.noMoreBooksData=!1,this.booksSelectedDateRange=[],this.getBookBaseInfo()},getDatas:function(){this.getCategorys(),this.getBookBaseInfo()},getCategorys:function(){var o=this;(0,f.getCategorys)({params:{level_min:1,level_max:1,id:this.$Window.__category_info__.reading}}).then(function(t){o.categorys=t.data.results}).catch(function(o){console.log(o)})},getBookBaseInfo:function(){var o=this;if(!this.noMoreBooksData){var t=[];this.booksTimeSorted?t.push("add_time"):t.push("-add_time"),void 0!==this.booksMostComment&&(this.booksMostComment?t.push("comment_num"):t.push("-comment_num")),(0,f.getBookBaseInfo)({params:{top_category:this.top_category,ordering:t.toString(),is_recommend:!1,time_min:this.booksSelectedDateRange[0],time_max:this.booksSelectedDateRange[1],limit:this.limit_size,offset:this.booksPage*this.limit_size}}).then(function(t){o.books=o.books.concat(t.data.results),o.booksTotalCount+=t.data.results.length,o.noMoreBooksData=o.booksTotalCount>=t.data.count,o.$refs.browseMoreBooks.stopLoading(o.noMoreBooksData)}).catch(function(o){console.log(o)})}},browseMoreBooks:function(){console.log("browseMoreBooks"),this.booksPage++,this.getBookBaseInfo()},refreshBooks:function(){this.top_category=parseInt(this.$route.params.id),this.booksTimeSorted=!1,this.booksMostComment=void 0,this.booksRecommend=void 0,this.booksPage=0,this.books=[],this.booksTotalCount=0,this.noMoreBooksData=!1,this.booksSelectedDateRange=[],this.getCategorys(),this.getBookBaseInfo()},booksMenusControl:function(o){switch(o[0]){case"timeSorted":this.booksTimeSorted=!o[1];break;case"mostComment":this.booksMostComment=o[1];break;case"recommend":this.booksRecommend=o[1]}this.booksPage=0,this.books=[],this.booksTotalCount=0,this.noMoreBooksData=!1,this.getBookBaseInfo()},booksDateSelect:function(o){this.booksSelectedDateRange=o,this.booksPage=0,this.limit_size=10,this.books=[],this.booksTotalCount=0,this.noMoreBooksData=!1,this.getBookBaseInfo()},booksDateSelectClear:function(){this.booksSelectedDateRange=[],this.booksPage=0,this.limit_size=10,this.books=[],this.booksTotalCount=0,this.noMoreBooksData=!1,this.getBookBaseInfo()}},components:{"book-cell":a.default,"classify-menu":r.default,"section-title":l.default,recommend:m.default,"tag-wall":h.default,"browse-more":b.default}}}});