(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"label":"Item 1","url":"nekiURL1","children":[]},{"label":"Item 2","url":"nekiURL2","children":[]},{"label":"Item 3","url":"nekiURL3","children":[{"label":"SubMenu 1","url":"nekiURL3_1","children":[]},{"label":"SubMenu 2","url":"nekiURL3_2","children":[{"label":"SubSubMenu 1","url":"nekiURL3_2_1","children":[]},{"label":"SubSubMenu 2","url":"nekiURL3_2_2","children":[]},{"label":"SubSubMenu 3","url":"nekiURL3_2_3","children":[]}]},{"label":"SubMenu 3","url":"nekiURL3_3","children":[]}]},{"label":"Item 4","url":"nekiURL4","children":[]}]')},29:function(e,t,n){},3:function(e,t,n){e.exports={verticalMenu:"Menu_verticalMenu__101TD",show:"Menu_show__gnjpH",delayOverflow:"Menu_delayOverflow__3RG1K",hide:"Menu_hide__3mQBj",FaBarsDiv:"Menu_FaBarsDiv__3imeb",faBarsDivPosition:"Menu_faBarsDivPosition__2OrLO",FaBars:"Menu_FaBars__TBZas",menu:"Menu_menu__3xfQ9",menuLine:"Menu_menuLine__3KEbR",menuItem:"Menu_menuItem__1XSOD",navLink:"Menu_navLink__3EG8G",navLinkSelected:"Menu_navLinkSelected__3G-bn",subMenu:"Menu_subMenu__2_Lrj",FaAngleDown:"Menu_FaAngleDown__8plYu",FaAngleRight:"Menu_FaAngleRight__1zy18",hideOnMobile:"Menu_hideOnMobile__4PDps"}},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(16),l=n.n(i),c=n(10),s=n(5),r=n(7),d=n.n(r),o=n(1),u=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],l=n[1];return Object(o.jsx)("div",{className:"".concat(d.a.button," ").concat(i?d.a.clicked:""),onClick:function(){l(!i),"B3"===e.label&&e.handleSidebar()},children:Object(o.jsx)("span",{children:e.label})})},b=function(e){return Object(o.jsxs)("div",{className:"".concat(d.a.rightSidebar," ").concat(e.sidebarOut?"":d.a.hide),children:[Object(o.jsx)("h3",{children:"What is Lorem Ipsum?"}),Object(o.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})},j=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(o.jsxs)("div",{className:d.a.rightButtons,children:[Object(o.jsx)(u,{label:"B3",handleSidebar:function(){i(!n)}}),Object(o.jsx)(u,{label:"B2"}),Object(o.jsx)(u,{label:"B1"}),Object(o.jsx)(b,{sidebarOut:n})]})},h=function(){return Object(o.jsxs)("div",{className:d.a.header,children:[Object(o.jsx)("div",{className:d.a.logo,children:Object(o.jsx)("img",{alt:"",src:"data:image/png;base64,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"})}),Object(o.jsx)(j,{})]})},m=n(17),O=n(9),p=n(0),v=n(3),x=n.n(v),g=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],l=n[1],r=Object(a.useState)(!1),d=Object(s.a)(r,2),u=d[0],b=d[1],j=Object(a.useState)(!1),h=Object(s.a)(j,2),m=h[0],v=h[1],g=function(){v(!m)};return Object(o.jsxs)("div",{className:x.a.menuLine,children:[Object(o.jsx)("div",{className:x.a.menuItem,onMouseOver:function(){l(!0)},onMouseLeave:function(){l(!1)},children:Object(o.jsx)(c.b,{to:"./".concat(e.url),activeClassName:x.a.navLinkSelected,className:x.a.navLink,children:Object(o.jsxs)("span",{children:[e.label,e.children.length?Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(p.b.Provider,{value:{size:"1.5em",className:"".concat(x.a.FaAngleDown)},children:m?Object(o.jsx)(O.c,{onClick:g}):Object(o.jsx)(O.a,{onClick:g})}),Object(o.jsx)(p.b.Provider,{value:{size:"1.5em",className:"".concat(x.a.FaAngleRight)},children:Object(o.jsx)(O.b,{})})]}):null]})})}),Object(o.jsx)("div",{className:"".concat(x.a.subMenu," ").concat(i||u?"":x.a.hide," ").concat(m?"":x.a.hideOnMobile),onMouseOver:function(){b(!0)},onMouseLeave:function(){b(!1)},children:Object(o.jsx)(y,{menuItems:e.children})})]})},y=function(e){var t=e.menuItems.map((function(e,t){return Object(o.jsx)(g,{label:e.label,url:e.url,children:e.children},t)}));return Object(o.jsx)("div",{className:x.a.menu,children:t})},k=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(o.jsxs)("div",{className:"".concat(x.a.verticalMenu," ").concat(n?x.a.show:x.a.hide),children:[Object(o.jsx)("div",{className:x.a.FaBarsDiv,children:Object(o.jsx)(p.b.Provider,{value:{color:"white",size:"2.5em",className:"".concat(x.a.FaBars)},children:Object(o.jsx)(O.d,{onClick:function(){i(!n)}})})}),Object(o.jsx)(y,{menuItems:m})]})},F=n.p+"static/media/iconSticker1.9fe91e5d.png",f=n.p+"static/media/iconSticker2.6843d173.png",I=n.p+"static/media/iconSticker3.a2c55e96.png",A=n.p+"static/media/iconSticker4.04ca9913.png",M=n(6),B=n.n(M),L=function(e){return Object(o.jsxs)("div",{className:B.a.sticker,style:{backgroundColor:e.color,width:e.width},children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{alt:"",src:e.icon})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.label}),Object(o.jsx)("p",{children:e.text})]})]})},R=function(e){var t=e.items.map((function(t,n){return Object(o.jsxs)("label",{children:[t.label,Object(o.jsx)("input",{type:t.type,placeholder:t.label,name:t.label,onChange:e.handleChange,value:t.value})]},n)}));return Object(o.jsx)("div",{className:B.a.FormGroup,children:t})},_=function(){var e={Field1:"",Field2:"",Field3:"",Field4:"",Field5:"",Field6:"",Field7:"",Field8:"",Field9:"",Field10:""},t=Object(a.useState)(e),n=Object(s.a)(t,2),i=n[0],l=n[1],c=function(e){var t=e.target.name,n=Object.assign({},i);n[t]=e.target.value,l(n)};return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),alert("This functionality has not been added to this project yet! Check for the received inputs in the console output!"),console.log(i),l(e)},children:[Object(o.jsx)(R,{items:[{label:"Field1",type:"text",value:i.Field1},{label:"Field2",type:"text",value:i.Field2},{label:"Field3",type:"text",value:i.Field3}],handleChange:c}),Object(o.jsx)(R,{items:[{label:"Field4",type:"text",value:i.Field4},{label:"Field5",type:"text",value:i.Field5},{label:"Field6",type:"text",value:i.Field6}],handleChange:c}),Object(o.jsx)(R,{items:[{label:"Field7",type:"text",value:i.Field7},{label:"Field8",type:"text",value:i.Field8},{label:"Field9",type:"text",value:i.Field9}],handleChange:c}),Object(o.jsx)("div",{className:B.a.FormGroup,children:Object(o.jsxs)("label",{children:[" Field10",Object(o.jsx)("textarea",{name:"Field10",placeholder:"Field10",onChange:c,value:i.Field10})]})}),Object(o.jsx)("div",{className:B.a.formButton,children:Object(o.jsx)("input",{type:"submit",value:"Submit"})})]})},C=function(){return Object(o.jsxs)("div",{className:B.a.mainBodyForm,children:[Object(o.jsxs)("div",{className:B.a.stickers,children:[Object(o.jsx)(L,{color:"#27317D",width:"23%",icon:F,label:"What is Lorem Ipsum?",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),Object(o.jsx)(L,{color:"#DC143C",width:"23%",icon:f,label:"Why do we use it?",text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}),Object(o.jsx)(L,{color:"#2ECC40",width:"23%",icon:I,label:"Where does it come from?",text:"Contrary to popular belief, Lorem Ipsum is not simply random text."}),Object(o.jsx)(L,{color:"#FF851B",width:"23%",icon:A,label:"Where can I get some?",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."})]}),Object(o.jsxs)("div",{className:B.a.formDiv,children:[Object(o.jsx)("div",{className:B.a.header,children:Object(o.jsx)("p",{children:"Form"})}),Object(o.jsx)(_,{})]})]})},S=(n(29),function(){return Object(o.jsx)("div",{className:"main",children:Object(o.jsxs)(c.a,{children:[Object(o.jsx)(k,{}),Object(o.jsxs)("div",{className:"headerAndBody",children:[Object(o.jsx)(h,{}),Object(o.jsx)(C,{})]})]})})});n(30);l.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))},6:function(e,t,n){e.exports={mainBodyForm:"MainBodyForm_mainBodyForm__1lJxo",stickers:"MainBodyForm_stickers__1l2bD",sticker:"MainBodyForm_sticker__TuNUY",formDiv:"MainBodyForm_formDiv__3gq0w",header:"MainBodyForm_header__9Lm_8",FormGroup:"MainBodyForm_FormGroup__1QAp9",formButton:"MainBodyForm_formButton__1AhpJ"}},7:function(e,t,n){e.exports={header:"Header_header__3jhi9",logo:"Header_logo__1hzOW",rightButtons:"Header_rightButtons__1cFjn",button:"Header_button__iXG1Z",clicked:"Header_clicked__2ijHZ",rightSidebar:"Header_rightSidebar__3cOA9",hide:"Header_hide__1kp85",detachRightSidebar:"Header_detachRightSidebar__34rg6"}}},[[31,1,2]]]);
//# sourceMappingURL=main.d7b2e91c.chunk.js.map