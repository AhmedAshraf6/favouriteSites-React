(this["webpackJsonpfavourite-react-app"]=this["webpackJsonpfavourite-react-app"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),i=c.n(a),s=(c(13),c(8)),l=c(6),j=c(2),o=c(0),u=function(e){var t=e.items,c=e.removeItem,n=e.editItem;return Object(o.jsx)(o.Fragment,{children:t.map((function(e){var t=e.id,r=e.title,a=e.url;return Object(o.jsxs)("h3",{children:[Object(o.jsx)("span",{className:"nameInput",children:r}),Object(o.jsx)("a",{className:"btn btn-info",target:"_blanc",href:a,children:"Visit"}),Object(o.jsx)("a",{className:"btn btn-success",onClick:function(){return n(t)},children:"Edit"}),Object(o.jsx)("a",{className:"btn btn-danger",onClick:function(){return c(t)},children:"Delete"})]},t)}))})};var b=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),b=i[0],d=i[1],m=Object(n.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),O=Object(j.a)(m,2),h=O[0],f=O[1],x=Object(n.useState)(!1),v=Object(j.a)(x,2),p=v[0],g=v[1],N=Object(n.useState)(!1),S=Object(j.a)(N,2),y=S[0],I=S[1];return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(h))})),Object(o.jsxs)("div",{className:"container special",children:[Object(o.jsx)("div",{className:"header clearfix",children:Object(o.jsx)("h3",{className:"text-muted",children:"Favourite Sites"})}),Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsx)("h3",{children:"Put Your Favourite Sites"}),Object(o.jsxs)("form",{id:"myForm",onSubmit:function(e){if(e.preventDefault(),c||b)if(c)if(b)if(c&&b&&p)f(h.map((function(e){return e.id==y?Object(l.a)(Object(l.a)({},e),{},{title:c,url:b}):e}))),I(null),g(!1),r(""),d("");else{var t={id:(new Date).getTime().toString(),title:c,url:b};f([].concat(Object(s.a)(h),[t])),r(""),d("")}else alert("enter url");else alert("enter name");else alert("enter name and url")},children:[Object(o.jsxs)("div",{className:"col-auto",children:[Object(o.jsx)("label",{htmlFor:"staticEmail2",children:"Site Name"}),Object(o.jsx)("input",{type:"text",className:"form-control",placeholder:"Website Name",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Site Url"}),Object(o.jsx)("input",{type:"text",className:"form-control",id:"siteUrl",placeholder:"Website Url",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(o.jsx)("button",{tybe:"submit",className:"btn btn-primary",children:p?"Edit":"Add"}),Object(o.jsx)("button",{tybe:"submit",className:"btn btn-danger",onClick:function(e){e.preventDefault(),0==h.length?alert("nothing to delete"):f([])},children:"Delete All"})]})]}),h.length>0&&Object(o.jsx)("div",{className:"row marketing",children:Object(o.jsx)("div",{className:"col-lg-12",children:Object(o.jsx)("div",{id:"bookmarksResults",children:Object(o.jsx)("div",{className:"well",children:Object(o.jsx)(u,{items:h,removeItem:function(e){var t=h.filter((function(t){return t.id!==e}));f(t),r(""),d("")},editItem:function(e){var t=h.find((function(t){return t.id===e}));g(!0),I(e),r(t.title),d(t.url)}})})})})}),Object(o.jsx)("footer",{class:"footer",children:Object(o.jsx)("p",{children:"\xa9 2021 Favourite Sites, Designed By Ahmed Ashraf."})})]})};var d=function(){return Object(o.jsx)("main",{children:Object(o.jsx)(b,{})})};c(15);i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e9dcc84d.chunk.js.map