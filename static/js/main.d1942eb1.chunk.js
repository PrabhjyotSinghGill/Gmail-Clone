(this["webpackJsonpgmail-clone"]=this["webpackJsonpgmail-clone"]||[]).push([[0],{155:function(e,t,c){},156:function(e,t,c){},157:function(e,t,c){},170:function(e,t,c){},171:function(e,t,c){},172:function(e,t,c){},174:function(e,t,c){},178:function(e,t,c){},179:function(e,t,c){},180:function(e,t,c){},182:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(56),i=c.n(n),j=(c(155),c(156),c(157),c(106)),r=c.n(j),l=c(212),d=c(104),o=c(44),b=c(0),O=c.n(b),x=c(2),m=c(75);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var h=Object(m.b)("counter/fetchCount",function(){var e=Object(x.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=Object(m.c)({name:"mail",initialState:{selectedMail:null,sendMessageIsOpen:!1},reducers:{selectMail:function(e,t){e.selectedMail=t.payload},OpenSendMessage:function(e){e.sendMessageIsOpen=!0},CloseSendMessage:function(e){e.sendMessageIsOpen=!1}},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),v=p.actions,_=(v.selectMail,v.OpenSendMessage),f=v.CloseSendMessage,g=function(e){return e.mail.selectedMail},N=function(e){return e.mail.sendMessageIsOpen},M=p.reducer,I=c(66),w=(c(164),c(184),I.a.initializeApp({apiKey:"AIzaSyBQMwTrK_mztiZp2M1Bz2e1pyklo3qLkeo",authDomain:"clone-74c14.firebaseapp.com",projectId:"clone-74c14",storageBucket:"clone-74c14.appspot.com",messagingSenderId:"579103441703",appId:"1:579103441703:web:6d9abfeb90aa6e4a57df02",measurementId:"G-QNGVMYW990"})),S=w.firestore(),y=(I.a.auth(),new I.a.auth.GoogleAuthProvider,c(6));var k=function(){var e=Object(d.a)(),t=e.register,c=e.handleSubmit,s=(e.watch,e.errors),a=Object(o.b)();return Object(y.jsxs)("div",{className:"sendMail",children:[Object(y.jsxs)("div",{className:"sendMail__header",children:[Object(y.jsx)("h3",{children:"New Message"}),Object(y.jsx)(r.a,{onClick:function(){return a(f())},className:"sendMail__close"})]}),Object(y.jsxs)("form",{onSubmit:c((function(e){console.log(e),S.collection("emails").add({to:e.to,subject:e.subject,message:e.message,timestamp:I.a.firestore.FieldValue.serverTimestamp()}),a(f())})),children:[Object(y.jsx)("input",{name:"to",placeholder:"To",type:"email",ref:t({required:!0})}),s.to&&Object(y.jsx)("p",{className:"sendMail__error",children:"To is Required!"}),Object(y.jsx)("input",{name:"subject",placeholder:"Subject",type:"text",ref:t({required:!0})}),s.subject&&Object(y.jsx)("p",{className:"sendMail__error",children:"Subject is Required!"}),Object(y.jsx)("input",{name:"message",placeholder:"Message...",type:"text",className:"sendMail__message",ref:t({required:!0})}),s.message&&Object(y.jsx)("p",{className:"sendMail__error",children:"Message is Required!"}),Object(y.jsx)("div",{className:"sendMail__options",children:Object(y.jsx)(l.a,{className:"sendMail__send",variant:"contained",color:"primary",type:"submit",children:"Send"})})]})]})},C=(c(170),c(109)),R=c.n(C),L=c(210),q=c(216),B=c(110),z=c.n(B),T=c(88),A=c.n(T),P=c(111),D=c.n(P),E=c(112),G=c.n(E);var W=function(){return Object(y.jsxs)("div",{className:"header",children:[Object(y.jsxs)("div",{className:"header__left",children:[Object(y.jsx)(L.a,{children:Object(y.jsx)(R.a,{})}),Object(y.jsx)("img",{src:"gmail.png",alt:""})]}),Object(y.jsxs)("div",{className:"header__middle",children:[Object(y.jsx)(z.a,{}),Object(y.jsx)("input",{placeholder:"Search mail",type:"text"}),Object(y.jsx)(A.a,{className:"header__inputCaret"})]}),Object(y.jsxs)("div",{className:"header__right",children:[Object(y.jsx)(L.a,{children:Object(y.jsx)(D.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(G.a,{})}),Object(y.jsx)(q.a,{src:"gill.jpg"})]})]})};c(171);var J=function(e){var t=e.Icon,c=e.title,s=e.number,a=e.selected;return Object(y.jsxs)("div",{className:"sidebar__option ".concat(a&&"sidebarOption--active"),children:[Object(y.jsx)(t,{}),Object(y.jsx)("h3",{children:c}),Object(y.jsx)("p",{children:s})]})},K=(c(172),c(211)),Q=c(113),V=c.n(Q),F=c(114),H=c.n(F),U=c(115),Y=c.n(U),Z=c(116),$=c.n(Z),X=c(74),ee=c.n(X),te=c(117),ce=c.n(te),se=c(118),ae=c.n(se),ne=c(100),ie=c.n(ne),je=c(119),re=c.n(je),le=c(120),de=c.n(le),oe=c(121),be=c.n(oe);var Oe=function(){var e=Object(o.b)();return Object(y.jsxs)("div",{className:"sidebar",children:[Object(y.jsx)(K.a,{startIcon:Object(y.jsx)(V.a,{fontSize:"large"}),className:"sidebar__compose",onClick:function(){return e(_())},children:"Compose"}),Object(y.jsx)(J,{Icon:H.a,title:"Inbox",number:54,selected:!0}),Object(y.jsx)(J,{Icon:Y.a,title:"Starred",number:54}),Object(y.jsx)(J,{Icon:$.a,title:"Snoozed",number:54}),Object(y.jsx)(J,{Icon:ee.a,title:"Important",number:54}),Object(y.jsx)(J,{Icon:ce.a,title:"Sent",number:54}),Object(y.jsx)(J,{Icon:ae.a,title:"Drafts",number:54}),Object(y.jsx)(J,{Icon:ie.a,title:"More",number:54}),Object(y.jsx)("div",{className:"sidebar__footer",children:Object(y.jsxs)("div",{className:"sidebar__footerIcons",children:[Object(y.jsx)(L.a,{children:Object(y.jsx)(re.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(de.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(be.a,{})})]})})]})},xe=(c(174),c(123)),me=c.n(xe),ue=c(124),he=c.n(ue),pe=c(125),ve=c.n(pe),_e=c(126),fe=c.n(_e),ge=c(127),Ne=c.n(ge),Me=c(128),Ie=c.n(Me),we=c(129),Se=c.n(we),ye=c(89),ke=c.n(ye),Ce=c(59),Re=c(130),Le=c.n(Re),qe=c(131),Be=c.n(qe),ze=c(132),Te=c.n(ze);var Ae=function(){var e=Object(Ce.f)(),t=Object(o.c)(g);return Object(y.jsxs)("div",{className:"mail",children:[Object(y.jsxs)("div",{className:"mail__tools",children:[Object(y.jsxs)("div",{className:"mail__toolsLeft",children:[Object(y.jsx)(L.a,{onClick:function(){return e.push("/")},children:Object(y.jsx)(me.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(he.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(ve.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(fe.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Ne.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Ie.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Se.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(ee.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(ke.a,{})})]}),Object(y.jsxs)("div",{className:"mail__toolsRight",children:[Object(y.jsx)(L.a,{children:Object(y.jsx)(Le.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Be.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Te.a,{})})]})]}),Object(y.jsxs)("div",{className:"mail__body",children:[Object(y.jsxs)("div",{className:"mail__bodyHeader",children:[Object(y.jsx)("h2",{children:null===t||void 0===t?void 0:t.subject}),Object(y.jsx)(ee.a,{className:"mail__important"}),Object(y.jsx)("p",{children:null===t||void 0===t?void 0:t.title}),Object(y.jsx)("p",{className:"mail__time",children:null===t||void 0===t?void 0:t.time})]}),Object(y.jsx)("div",{className:"mail__message",children:Object(y.jsx)("p",{children:null===t||void 0===t?void 0:t.description})})]})]})},Pe=c(15),De=(c(178),c(179),c(213)),Ee=c(133),Ge=c.n(Ee),We=c(134),Je=c.n(We);var Ke=function(e){var t=e.id,c=e.title,s=e.subject,a=e.description,n=e.time,i=Object(Ce.f)(),j=Object(o.b)();return Object(y.jsxs)("div",{onClick:function(){j(M({id:t,title:c,subject:s,description:a,time:n})),i.push("/mail")},className:"emailRow",children:[Object(y.jsxs)("div",{className:"emailRow__options",children:[Object(y.jsx)(De.a,{}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Ge.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Je.a,{})})]}),Object(y.jsx)("h3",{className:"emailRow__title",children:c}),Object(y.jsx)("div",{className:"emailRow__message",children:Object(y.jsxs)("h4",{children:[s," ",Object(y.jsxs)("span",{className:"emailRow__description",children:["-"," ",a]})]})}),Object(y.jsx)("p",{className:"emailRow__time",children:n})]})},Qe=c(135),Ve=c.n(Qe),Fe=c(136),He=c.n(Fe),Ue=c(137),Ye=c.n(Ue),Ze=c(138),$e=c.n(Ze),Xe=c(139),et=c.n(Xe),tt=c(140),ct=c.n(tt);c(180);var st=function(e){var t=e.Icon,c=e.title,s=e.color,a=e.selected;return Object(y.jsxs)("div",{className:"section ".concat(a&&"section--selected"),style:{borderBottom:"3px solid ".concat(s),color:"".concat(a&&s)},children:[Object(y.jsx)(t,{}),Object(y.jsx)("h4",{children:c})]})},at=c(141),nt=c.n(at),it=c(142),jt=c.n(it);var rt=function(){var e=Object(s.useState)([]),t=Object(Pe.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){S.collection("emails").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(y.jsxs)("div",{className:"emailList",children:[Object(y.jsxs)("div",{className:"emailList__settings",children:[Object(y.jsxs)("div",{className:"emailList__setttingsLeft",children:[Object(y.jsx)(De.a,{}),Object(y.jsx)(L.a,{children:Object(y.jsx)(A.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Ve.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(ke.a,{})})]}),Object(y.jsxs)("div",{className:"emailList__settingsRight",children:[Object(y.jsx)(L.a,{children:Object(y.jsx)(He.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(Ye.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)($e.a,{})}),Object(y.jsx)(L.a,{children:Object(y.jsx)(et.a,{})})]})]}),Object(y.jsxs)("div",{className:"emailList__sections",children:[Object(y.jsx)(st,{Icon:ct.a,title:"Primary",color:"red",selected:!0}),Object(y.jsx)(st,{Icon:nt.a,title:"Social",color:"#1A73E8"}),Object(y.jsx)(st,{Icon:jt.a,title:"Promotions",color:"green"})]}),Object(y.jsx)("div",{className:"emailList__list",children:c.map((function(e){var t=e.id,c=e.data,s=c.to,a=c.subject,n=c.message,i=c.timestamp;return Object(y.jsx)(Ke,{id:t,title:s,subject:a,description:n,time:new Date(1e3*(null===i||void 0===i?void 0:i.seconds)).toUTCString()},t)}))})]})},lt=c(80);var dt=function(){var e=Object(o.c)(N);return Object(y.jsx)(lt.a,{children:Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(W,{}),Object(y.jsxs)("div",{className:"app__body",children:[Object(y.jsx)(Oe,{}),Object(y.jsxs)(Ce.c,{children:[Object(y.jsx)(Ce.a,{path:"/mail",children:Object(y.jsx)(Ae,{})}),Object(y.jsx)(Ce.a,{path:"/",children:Object(y.jsx)(rt,{})})]})]}),e&&Object(y.jsx)(k,{})]})})},ot=Object(m.a)({reducer:{mail:M}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(o.a,{store:ot,children:Object(y.jsx)(dt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[182,1,2]]]);
//# sourceMappingURL=main.d1942eb1.chunk.js.map