(this["webpackJsonpgmail-clone"]=this["webpackJsonpgmail-clone"]||[]).push([[0],{155:function(e,s,t){},156:function(e,s,t){},157:function(e,s,t){},170:function(e,s,t){},171:function(e,s,t){},172:function(e,s,t){},174:function(e,s,t){},178:function(e,s,t){},179:function(e,s,t){},180:function(e,s,t){},182:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),n=t(55),i=t.n(n),j=(t(155),t(156),t(157),t(106)),r=t.n(j),l=t(212),o=t(104),d=t(57),b=t(0),O=t.n(b),x=t(2),m=t(75);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(s){return setTimeout((function(){return s({data:e})}),500)}))}var h=Object(m.b)("counter/fetchCount",function(){var e=Object(x.a)(O.a.mark((function e(s){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(s);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),p=Object(m.c)({name:"mail",initialState:{sendMessageIsOpen:!1},reducers:{OpenSendMessage:function(e){e.sendMessageIsOpen=!0},CloseSendMessage:function(e){e.sendMessageIsOpen=!1}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,s){e.status="idle",e.value+=s.payload}))}}),f=p.actions,v=f.OpenSendMessage,_=f.CloseSendMessage,g=function(e){return e.mail.sendMessageIsOpen},N=p.reducer,w=t(66),M=(t(164),t(184),w.a.initializeApp({apiKey:"AIzaSyBQMwTrK_mztiZp2M1Bz2e1pyklo3qLkeo",authDomain:"clone-74c14.firebaseapp.com",projectId:"clone-74c14",storageBucket:"clone-74c14.appspot.com",messagingSenderId:"579103441703",appId:"1:579103441703:web:6d9abfeb90aa6e4a57df02",measurementId:"G-QNGVMYW990"})),I=M.firestore(),S=(w.a.auth(),new w.a.auth.GoogleAuthProvider,t(5));var y=function(){var e=Object(o.a)(),s=e.register,t=e.handleSubmit,c=(e.watch,e.errors),a=Object(d.b)();return Object(S.jsxs)("div",{className:"sendMail",children:[Object(S.jsxs)("div",{className:"sendMail__header",children:[Object(S.jsx)("h3",{children:"New Message"}),Object(S.jsx)(r.a,{onClick:function(){return a(_())},className:"sendMail__close"})]}),Object(S.jsxs)("form",{onSubmit:t((function(e){console.log(e),I.collection("emails").add({to:e.to,subject:e.subject,message:e.message,timestamp:w.a.firestore.FieldValue.serverTimestamp()}),a(_())})),children:[Object(S.jsx)("input",{name:"to",placeholder:"To",type:"email",ref:s({required:!0})}),c.to&&Object(S.jsx)("p",{className:"sendMail__error",children:"To is Required!"}),Object(S.jsx)("input",{name:"subject",placeholder:"Subject",type:"text",ref:s({required:!0})}),c.subject&&Object(S.jsx)("p",{className:"sendMail__error",children:"Subject is Required!"}),Object(S.jsx)("input",{name:"message",placeholder:"Message...",type:"text",className:"sendMail__message",ref:s({required:!0})}),c.message&&Object(S.jsx)("p",{className:"sendMail__error",children:"Message is Required!"}),Object(S.jsx)("div",{className:"sendMail__options",children:Object(S.jsx)(l.a,{className:"sendMail__send",variant:"contained",color:"primary",type:"submit",children:"Send"})})]})]})},R=(t(170),t(109)),k=t.n(R),C=t(210),L=t(216),T=t(110),B=t.n(T),E=t(88),q=t.n(E),A=t(111),z=t.n(A),P=t(112),W=t.n(P);var D=function(){return Object(S.jsxs)("div",{className:"header",children:[Object(S.jsxs)("div",{className:"header__left",children:[Object(S.jsx)(C.a,{children:Object(S.jsx)(k.a,{})}),Object(S.jsx)("img",{src:"gmail.png",alt:""})]}),Object(S.jsxs)("div",{className:"header__middle",children:[Object(S.jsx)(B.a,{}),Object(S.jsx)("input",{placeholder:"Search mail",type:"text"}),Object(S.jsx)(q.a,{className:"header__inputCaret"})]}),Object(S.jsxs)("div",{className:"header__right",children:[Object(S.jsx)(C.a,{children:Object(S.jsx)(z.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(W.a,{})}),Object(S.jsx)(L.a,{src:"gill.jpg"})]})]})};t(171);var F=function(e){var s=e.Icon,t=e.title,c=e.number,a=e.selected;return Object(S.jsxs)("div",{className:"sidebar__option ".concat(a&&"sidebarOption--active"),children:[Object(S.jsx)(s,{}),Object(S.jsx)("h3",{children:t}),Object(S.jsx)("p",{children:c})]})},G=(t(172),t(211)),H=t(113),J=t.n(H),K=t(114),Q=t.n(K),V=t(115),U=t.n(V),Y=t(116),Z=t.n(Y),$=t(74),X=t.n($),ee=t(117),se=t.n(ee),te=t(118),ce=t.n(te),ae=t(100),ne=t.n(ae),ie=t(119),je=t.n(ie),re=t(120),le=t.n(re),oe=t(121),de=t.n(oe);var be=function(){var e=Object(d.b)();return Object(S.jsxs)("div",{className:"sidebar",children:[Object(S.jsx)(G.a,{startIcon:Object(S.jsx)(J.a,{fontSize:"large"}),className:"sidebar__compose",onClick:function(){return e(v())},children:"Compose"}),Object(S.jsx)(F,{Icon:Q.a,title:"Inbox",number:54,selected:!0}),Object(S.jsx)(F,{Icon:U.a,title:"Starred",number:54}),Object(S.jsx)(F,{Icon:Z.a,title:"Snoozed",number:54}),Object(S.jsx)(F,{Icon:X.a,title:"Important",number:54}),Object(S.jsx)(F,{Icon:se.a,title:"Sent",number:54}),Object(S.jsx)(F,{Icon:ce.a,title:"Drafts",number:54}),Object(S.jsx)(F,{Icon:ne.a,title:"More",number:54}),Object(S.jsx)("div",{className:"sidebar__footer",children:Object(S.jsxs)("div",{className:"sidebar__footerIcons",children:[Object(S.jsx)(C.a,{children:Object(S.jsx)(je.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(le.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(de.a,{})})]})})]})},Oe=(t(174),t(123)),xe=t.n(Oe),me=t(124),ue=t.n(me),he=t(125),pe=t.n(he),fe=t(126),ve=t.n(fe),_e=t(127),ge=t.n(_e),Ne=t(128),we=t.n(Ne),Me=t(129),Ie=t.n(Me),Se=t(89),ye=t.n(Se),Re=t(59),ke=t(130),Ce=t.n(ke),Le=t(131),Te=t.n(Le),Be=t(132),Ee=t.n(Be);var qe=function(){var e=Object(Re.f)();return Object(S.jsxs)("div",{className:"mail",children:[Object(S.jsxs)("div",{className:"mail__tools",children:[Object(S.jsxs)("div",{className:"mail__toolsLeft",children:[Object(S.jsx)(C.a,{onClick:function(){return e.push("/")},children:Object(S.jsx)(xe.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(ue.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(pe.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(ve.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(ge.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(we.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Ie.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(X.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(ye.a,{})})]}),Object(S.jsxs)("div",{className:"mail__toolsRight",children:[Object(S.jsx)(C.a,{children:Object(S.jsx)(Ce.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Te.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Ee.a,{})})]})]}),Object(S.jsxs)("div",{className:"mail__body",children:[Object(S.jsxs)("div",{className:"mail__bodyHeader",children:[Object(S.jsx)("h2",{children:"Frontend Focus"}),Object(S.jsx)(X.a,{className:"mail__important"}),Object(S.jsx)("p",{children:"Edge puts on a Tux"}),Object(S.jsx)("p",{className:"mail__time",children:"Nov 3, 2021, 3:16 PM"})]}),Object(S.jsx)("div",{className:"mail__message",children:Object(S.jsxs)("p",{children:["Microsoft\u2019s Edge Browser Now Stable on Linux \u2014 ",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"After over a year in preview, the stable version of Edge for Linux is now available.",Object(S.jsx)("br",{}),"Here's the official blog post from Microsoft covering the news. This release means ",Object(S.jsx)("br",{}),"Edge is now available on Windows, macOS, iOS, Android, and Linux.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"TOM WARREN "]})})]})]})},Ae=t(15),ze=(t(178),t(179),t(213)),Pe=t(133),We=t.n(Pe),De=t(134),Fe=t.n(De);var Ge=function(e){e.id;var s=e.title,t=e.subject,c=e.description,a=e.time,n=Object(Re.f)();return Object(S.jsxs)("div",{onClick:function(){return n.push("/mail")},className:"emailRow",children:[Object(S.jsxs)("div",{className:"emailRow__options",children:[Object(S.jsx)(ze.a,{}),Object(S.jsx)(C.a,{children:Object(S.jsx)(We.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Fe.a,{})})]}),Object(S.jsx)("h3",{className:"emailRow__title",children:s}),Object(S.jsx)("div",{className:"emailRow__message",children:Object(S.jsxs)("h4",{children:[t," ",Object(S.jsxs)("span",{className:"emailRow__description",children:["-"," ",c]})]})}),Object(S.jsx)("p",{className:"emailRow__time",children:a})]})},He=t(135),Je=t.n(He),Ke=t(136),Qe=t.n(Ke),Ve=t(137),Ue=t.n(Ve),Ye=t(138),Ze=t.n(Ye),$e=t(139),Xe=t.n($e),es=t(140),ss=t.n(es);t(180);var ts=function(e){var s=e.Icon,t=e.title,c=e.color,a=e.selected;return Object(S.jsxs)("div",{className:"section ".concat(a&&"section--selected"),style:{borderBottom:"3px solid ".concat(c),color:"".concat(a&&c)},children:[Object(S.jsx)(s,{}),Object(S.jsx)("h4",{children:t})]})},cs=t(141),as=t.n(cs),ns=t(142),is=t.n(ns);var js=function(){var e=Object(c.useState)([]),s=Object(Ae.a)(e,2),t=s[0],a=s[1];return Object(c.useEffect)((function(){I.collection("emails").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(S.jsxs)("div",{className:"emailList",children:[Object(S.jsxs)("div",{className:"emailList__settings",children:[Object(S.jsxs)("div",{className:"emailList__setttingsLeft",children:[Object(S.jsx)(ze.a,{}),Object(S.jsx)(C.a,{children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Je.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(ye.a,{})})]}),Object(S.jsxs)("div",{className:"emailList__settingsRight",children:[Object(S.jsx)(C.a,{children:Object(S.jsx)(Qe.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Ue.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Ze.a,{})}),Object(S.jsx)(C.a,{children:Object(S.jsx)(Xe.a,{})})]})]}),Object(S.jsxs)("div",{className:"emailList__sections",children:[Object(S.jsx)(ts,{Icon:ss.a,title:"Primary",color:"red",selected:!0}),Object(S.jsx)(ts,{Icon:as.a,title:"Social",color:"#1A73E8"}),Object(S.jsx)(ts,{Icon:is.a,title:"Promotions",color:"green"})]}),Object(S.jsx)("div",{className:"emailList__list",children:t.map((function(e){var s=e.id,t=e.data,c=t.to,a=t.subject,n=t.message,i=t.timestamp;return Object(S.jsx)(Ge,{id:s,title:c,subject:a,description:n,time:new Date(1e3*(null===i||void 0===i?void 0:i.seconds)).toUTCString()},s)}))})]})},rs=t(80);var ls=function(){var e=Object(d.c)(g);return Object(S.jsx)(rs.a,{children:Object(S.jsxs)("div",{className:"app",children:[Object(S.jsx)(D,{}),Object(S.jsxs)("div",{className:"app__body",children:[Object(S.jsx)(be,{}),Object(S.jsxs)(Re.c,{children:[Object(S.jsx)(Re.a,{path:"/mail",children:Object(S.jsx)(qe,{})}),Object(S.jsx)(Re.a,{path:"/",children:Object(S.jsx)(js,{})})]})]}),e&&Object(S.jsx)(y,{})]})})},os=Object(m.a)({reducer:{mail:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(d.a,{store:os,children:Object(S.jsx)(ls,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[182,1,2]]]);
//# sourceMappingURL=main.a1e27d06.chunk.js.map