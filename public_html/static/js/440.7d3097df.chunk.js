"use strict";(self.webpackChunkget_started=self.webpackChunkget_started||[]).push([[440],{8340:function(e,a,s){s.d(a,{C:function(){return i},e:function(){return l}});var t=s(9439),n=s(2791),r=s(184),i=function(e){var a=e.data,s=(0,n.useState)(!0),i=(0,t.Z)(s,2),l=i[0],c=i[1];return l?(0,r.jsxs)("div",{className:"danger",onLoad:function(){return c(!1)},style:{width:380,marginLeft:56},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("svg",{className:"bi flex-shrink-0 me-2",role:"img","aria-label":"Danger:",viewBox:"0 0 16 16",height:22,width:22,children:(0,r.jsx)("path",{d:"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),a.error&&(0,r.jsxs)("span",{children:[a.status," ",a.statusCode," ERROR!"]})]}),(0,r.jsx)("p",{className:"error-message",children:(0,r.jsx)("span",{children:a.error})})]}):(0,r.jsx)("button",{onClick:function(){return c(!0)},className:"w-50 btn btn-outline-danger rounded-3",style:{marginLeft:133},children:"Show Error"})},l=function(e){var a=e.data,s=(0,n.useState)(!0),i=(0,t.Z)(s,2),l=i[0],c=i[1];return l?(0,r.jsxs)("div",{className:"success",onLoad:function(){return c(!1)},style:{width:380,marginLeft:56},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("svg",{className:"bi flex-shrink-0 me-2",role:"img","aria-label":"Danger:",viewBox:"0 0 16 16",height:22,width:22,children:(0,r.jsx)("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})}),a.status," SUCCESS!"]}),(0,r.jsxs)("p",{className:"success-message",children:[(0,r.jsx)("span",{children:a.message}),(0,r.jsx)("br",{}),(a.data.username||a.data.email)&&(0,r.jsx)("span",{children:"Profiles: "}),a.data.username&&(0,r.jsxs)("span",{children:[(0,r.jsx)("br",{}),"Username: ".concat(a.data.username)]}),a.data.email&&(0,r.jsxs)("span",{children:[(0,r.jsx)("br",{}),"Email: ".concat(a.data.email)]})]})]}):(0,r.jsx)("button",{onClick:function(){return c(!0)},className:"w-50 btn btn-outline-success rounded-3",style:{marginLeft:133},children:"Show Success"})}},6440:function(e,a,s){s.r(a),s.d(a,{default:function(){return m}});var t=s(4165),n=s(5861),r=s(9439),i=s(2791),l=s(1044),c=s(7689),o=s(1087),d=s(8340),u=s(184),m=function(){var e,a=(0,c.s0)(),s=(0,c.TH)(),m=localStorage.getItem("Email")||"",h=(0,i.useState)(m),f=(0,r.Z)(h,2),x=f[0],p=f[1],b=(0,i.useState)([{success:!1,status:"INITIALLED",error:"",data:{}}]),j=(0,r.Z)(b,2),v=j[0],g=j[1],N=(0,i.useState)(0),k=(0,r.Z)(N,2),w=k[0],y=k[1],C=(0,i.useState)([{success:!1,status:"INITIALLED",error:"",data:{}}]),L=(0,r.Z)(C,2),S=L[0],E=L[1];(0,i.useEffect)((function(){var e;localStorage.getItem("authToken")&&(null!==(e=s.state)&&void 0!==e&&e.from?a(s.state.from):a("/"))}),[a,null===(e=s.state)||void 0===e?void 0:e.from]),(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(){var s,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,l.ZP.post("/api/auth/sendconfirmemail",{email:x},s);case 4:n=e.sent,n.data&&a("/verifyemail"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),a("/");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();m&&e()}),[m,a]);var Z=function(){var e=(0,n.Z)((0,t.Z)().mark((function e(a){var s,n,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),s={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,l.ZP.post("/api/auth/sendconfirmemail",{email:x},s);case 5:n=e.sent,r=n.data,g([r]),e.next=17;break;case 10:e.prev=10,e.t0=e.catch(2),E([e.t0.response.data]),y(e.t0.response.status),p(""),g([{success:!1,status:"INITIALLED",error:"",data:{}}]),setTimeout((function(){E([{status:"",success:!1,error:"",data:{}}]),y(0)}),5e3);case 17:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();return(0,u.jsx)("div",{className:"emailconfirm-screen",children:(0,u.jsx)("div",{className:"modal position-static d-block pb-3 text-light",tabIndex:-1,role:"dialog",children:(0,u.jsx)("div",{className:"modal-dialog pt-5",role:"document",children:(0,u.jsxs)("div",{className:"modal-content bg-black bg-opacity-25 rounded-5 shadow border",children:[(0,u.jsxs)("div",{className:"modal-header p-5 pb-4 border-bottom-0",children:[(0,u.jsx)("h2",{className:"fw-bold mb-0",children:"Email Confirmation"}),(0,u.jsx)("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:function(){var e;null!==(e=s.state)&&void 0!==e&&e.from?a(s.state.from):a("/")}})]}),v[0].success&&(0,u.jsx)(d.e,{data:v[0]}),S[0].error&&(0,u.jsx)(d.C,{data:S[0],statusCode:w}),(0,u.jsx)("div",{className:"modal-body p-5 pt-0",children:(0,u.jsxs)("form",{className:"emailconfirm-screen__form",onSubmit:Z,children:[(0,u.jsx)("small",{className:"emailconfirm-screen__title text-light",children:"Send an email of tokens which used for email confirmation."}),(0,u.jsxs)("div",{className:"form-floating mt-2 mb-2",children:[(0,u.jsx)("input",{type:"email",required:!0,id:"email",className:"form-control rounded-4 bg-black text-light",autoComplete:"true",placeholder:"name@example.com",value:x,onChange:function(e){return p(e.target.value)}}),(0,u.jsx)("label",{htmlFor:"email",children:"Email address"})]}),(0,u.jsx)("div",{className:"text-center mb-3",children:(0,u.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:Z,children:(0,u.jsx)("span",{children:"Resend Email"})})}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{className:"w-100 btn btn-lg btn-outline-info",type:"submit",children:"Send Email"})}),(0,u.jsx)("hr",{className:"my-4"}),(0,u.jsxs)("span",{className:"emailconfirm-screen__subtext",children:["Email has sent? Verify Token here...",(0,u.jsx)(o.rU,{to:"/verifyemail",className:"emailconfirm-screen__subtext__link",children:"Verify Token"})]})]})})]})})})})}}}]);
//# sourceMappingURL=440.7d3097df.chunk.js.map