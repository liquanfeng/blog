(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{253:function(n,t,e){"use strict";e.r(t);var i=e(5),l=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("整理一下强行头文件定义函数产生重定义的相关方案")]),n._v(" "),e("ul",[e("li",[n._v("头文件宏"),e("div",{staticClass:"language-c++ extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("#ifndef __A\n#define __A\n#endif\n")])])]),n._v("只能避免一个文件多次引用同一个头文件产生重定义的问题")]),n._v(" "),e("li",[n._v("static inline\n"),e("ul",[e("li",[n._v("static让函数定义的可见度为单个源文件，每个源文件会有一份独立的函数，导致链接变慢")]),n._v(" "),e("li",[n._v("可惜inline只是内联提示，不能强行内联")])])]),n._v(" "),e("li",[n._v("类内定义的成员函数默认为inline，即使没有inline修饰，是否内联还是取决于编译器。在类外定义的成员函数不是内联函数")])])])}),[],!1,null,null,null);t.default=l.exports}}]);