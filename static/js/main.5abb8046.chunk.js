(this.webpackJsonpumbra=this.webpackJsonpumbra||[]).push([[0],{18:function(e,a,t){e.exports=t(35)},23:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),s=t.n(r),l=(t(23),t(8)),u=t(1),m=t(16),o=t.n(m),i=(t(28),t(9));t(29);var p=function(){var e=Object(u.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],s=t[1];return c.a.createElement("form",{onSubmit:function(a){a.preventDefault(),""!==r?e.push("/search/"+r+"/1"):e.push("/")}},c.a.createElement("input",{type:"text",value:r,placeholder:"umbra.",onChange:function(e){s(e.target.value)}}))};t(33);function h(e){return c.a.createElement("div",{className:"flow-item"},c.a.createElement("div",{className:"url"}," ",e.value.formattedUrl," "),c.a.createElement("a",{className:"title",href:e.value.formattedUrl}," ",e.value.title," "),c.a.createElement("div",{className:"snippet"}," ",e.value.snippet," "))}var f=function(e){return c.a.createElement("div",{className:"flow"},e.meta.map((function(e,a){return c.a.createElement(h,{value:e,key:a})})))};t(34);var E=function(){var e=Object(u.g)().keyword,a=Object(u.g)().page,t=Object(u.f)(),r=Object(n.useState)([]),s=Object(i.a)(r,2),l=s[0],m=s[1],o=Object(n.useState)(!0),p=Object(i.a)(o,2),h=p[0],E=p[1];function v(e){return e===parseInt(a)?c.a.createElement("span",{style:{color:"black"}}," ",e," "):c.a.createElement("span",{style:{color:"blue"}}," ",e," ")}return Object(n.useEffect)((function(){E(!0),fetch("https://www.hawia.xyz/api/umbra/search?keyword="+e+"&page="+a).then((function(e){return e.json()})).then((function(e){m(e),E(!1)}))}),[e,a]),h?c.a.createElement("div",{className:"loading"}," \u262a "):c.a.createElement("div",{className:"search-results"},c.a.createElement(f,{meta:l}),c.a.createElement("div",{className:"page-manager"},c.a.createElement("span",{className:"left-button",onClick:function(){var n=parseInt(a);n>1&&t.push("/search/"+e+"/"+(n-1).toString())}}," \u140a "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/1")}}," ",v(1)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/2")}}," ",v(2)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/3")}}," ",v(3)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/4")}}," ",v(4)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/5")}}," ",v(5)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/6")}}," ",v(6)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/7")}}," ",v(7)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/8")}}," ",v(8)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/9")}}," ",v(9)," "),c.a.createElement("span",{className:"jump",onClick:function(){t.push("/search/"+e+"/10")}}," ",v(10)," "),c.a.createElement("span",{className:"right-button",onClick:function(){var n=parseInt(a);n<10&&t.push("/search/"+e+"/"+(n+1).toString())}}," \u1405 ")))};function v(){return c.a.createElement("div",{className:"no-match"},"  ")}var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement("div",{className:"header"},c.a.createElement(p,null)),c.a.createElement("div",{className:"content"},c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/search/:keyword/:page"},c.a.createElement(E,null)),c.a.createElement(u.a,{path:"*"},c.a.createElement(v,null)))),c.a.createElement(o.a,{showUnder:160},c.a.createElement("span",{className:"up-arrow"}," \u2191 ")),c.a.createElement("div",{className:"footer"},"@ ",c.a.createElement("a",{href:"https://github.com/ashawkey"}," hawkey "))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5abb8046.chunk.js.map