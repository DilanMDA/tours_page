(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(12),n(2)),u=n.n(o),i=n(5),s=n(1),m=n(6),E=n.n(m),f=function(e){var t=e.loading;return r.a.createElement("main",{className:"loading"},r.a.createElement(E.a,{size:300,color:"#16B6C2",loading:t}))},d=function(e){var t=e.id,n=e.image,c=e.info,l=e.price,o=e.name,u=e.removeTour,i=Object(a.useState)(!1),m=Object(s.a)(i,2),E=m[0],f=m[1];return r.a.createElement("article",{className:"single-tour"},r.a.createElement("img",{src:n,alt:o}),r.a.createElement("footer",null,r.a.createElement("div",{className:"tour-info"},r.a.createElement("h4",null,o),r.a.createElement("h4",{className:"tour-price"}," $",l)),r.a.createElement("p",null,E?c:"".concat(c.substring(0,200),"..."),r.a.createElement("button",{onClick:function(){return f(!E)}},E?"show less":"read more")),r.a.createElement("button",{className:"delete-btn",onClick:function(){return u(t)}},"not interested")))},v=function(e){var t=e.tours,n=e.removeTour;return r.a.createElement("section",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null," our tours"),r.a.createElement("div",{className:"underline"})),r.a.createElement("div",null,t.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e,{removeTour:n}))}))))};var p=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(s.a)(l,2),m=o[0],E=o[1],d=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,setTimeout((function(){c(!1)}),3750),E(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),setTimeout((function(){c(!1)}),3750),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),n?r.a.createElement("main",null,r.a.createElement("div",{className:"loading"},r.a.createElement(f,{loading:n}))):0===m.length?r.a.createElement("main",null,r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"no tours left"),r.a.createElement("button",{className:"btn",onClick:d},"refresh"))):r.a.createElement("main",null,r.a.createElement(v,{tours:m,removeTour:function(e){var t=m.filter((function(t){return t.id!==e}));E(t)}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(20)}},[[7,1,2]]]);
//# sourceMappingURL=main.85cbbdae.chunk.js.map