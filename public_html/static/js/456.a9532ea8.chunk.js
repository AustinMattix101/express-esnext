"use strict";(self.webpackChunkget_started=self.webpackChunkget_started||[]).push([[456],{3089:function(e,t,a){a.r(t);var r=a(4165),s=a(5861),n=a(9439),o=a(2791),c=a(1044),i=a(7689),l=a(1087),u=a(5398),d=a(1897),p=a(3168),m=a(184);t.default=function(){var e,t=(0,p.$)().t,a=(0,i.s0)(),h=(0,i.TH)(),x=(0,o.useState)(""),g=(0,n.Z)(x,2),v=g[0],f=g[1],j=(0,o.useState)(""),k=(0,n.Z)(j,2),N=k[0],b=k[1];(0,o.useEffect)((function(){try{var e;if(!JSON.parse(localStorage.getItem("user")||"")[0].token)null!==(e=h.state)&&void 0!==e&&e.from?a(h.state.from):a("/signin")}catch(v){a("/signin")}var t=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,a,s,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("user")||"")[0].token,a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}},e.prev=2,e.next=5,c.ZP.get("/api/private",a);case 5:s=e.sent,n=s.data,b(n.message),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),localStorage.removeItem("authToken"),f("You are not authorized please login!");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();t()}),[a,null===(e=h.state)||void 0===e?void 0:e.from]);var w=localStorage.getItem("Username")||"",S=localStorage.getItem("Email")||"";return v?(0,m.jsx)("span",{className:"error-message",children:v}):(0,m.jsx)("div",{className:"fixed-container",children:(0,m.jsx)("div",{className:"App",children:(0,m.jsxs)("header",{className:"App-header",children:[(0,m.jsxs)("p",{className:"h3",children:["Welcome, ",(0,d.kC)(w)]}),(0,m.jsxs)("p",{className:"h3",children:["Email: ",(0,d.kC)(S)]}),(0,m.jsxs)("p",{className:"text-uppercase agis-bold mt-2",children:[t("mattix"),(0,m.jsx)("br",{}),(0,m.jsx)("code",{className:"text-lowercase",children:"mattix.com"})]}),(0,m.jsx)("a",{className:"App-link mb-4 text-decoration-none",href:"https://camunited.000webhostapp.com",target:"_blank",rel:"noopener noreferrer",children:"Go to previous version@1.0"}),(0,m.jsx)(u.lA,{}),(0,m.jsx)(l.rU,{to:"/dashboard/stat",children:"Stat"}),(0,m.jsx)("section",{className:"section",children:(0,m.jsx)(i.j3,{})}),(0,m.jsxs)("div",{style:{background:"green",color:"white"},children:[" ",N]}),(0,m.jsx)("button",{onClick:function(){localStorage.removeItem("TwoFA"),(0,d.EY)("user",0,"token"),a("/"),window.dispatchEvent(new Event("logout"))},children:"Log out"})]})})})}}}]);
//# sourceMappingURL=456.a9532ea8.chunk.js.map