(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={label:"Filter_label__3P8WK",input:"Filter_input__24x70"}},3:function(e,t,n){e.exports={form:"Form_form__1SX-X",label:"Form_label__2fk0E",input:"Form_input__3KJhd",button:"Form_button__eValR"}},33:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(13),i=n.n(c),s=n(18),o=n(14),l=n(12),u=n(2),m=n.n(u),b=n(8),d=n.n(b),h=n(9),j=n.n(h),p=n(0);function f(e){var t=e.contacts,n=e.onClick;return Object(p.jsx)("ul",{className:j.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(p.jsxs)("li",{className:j.a.item,children:[a,": ",r,Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},className:j.a.button,children:"Delete"})]},t)}))})}var O=n(11),_=n.n(O);function v(e){var t=e.filter,n=e.onChange,a=m.a.generate();return Object(p.jsxs)("label",{htmlFor:a,className:_.a.label,children:["Find contacts by name",Object(p.jsx)("input",{id:a,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:n,className:_.a.input})]})}var x=n(7),A=n(15),g=n(16),C=n(19),N=n(17),S=n(3),y=n.n(S),k=function(e){Object(C.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.nameId=m.a.generate(),e.numberId=m.a.generate(),e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.resetFormInput()},e.hadleAddValue=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(x.a)({},a,r))},e}return Object(g.a)(n,[{key:"resetFormInput",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:y.a.form,children:[Object(p.jsx)("label",{htmlFor:this.nameId,className:y.a.label,children:"Name"}),Object(p.jsx)("input",{id:this.nameId,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.hadleAddValue,className:y.a.input}),Object(p.jsx)("label",{htmlFor:this.numberId,className:y.a.label,children:"Number"}),Object(p.jsx)("input",{id:this.numberId,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.hadleAddValue,className:y.a.input}),Object(p.jsx)("button",{type:"submit",className:y.a.button,children:"Add contact"})]})}}]),n}(a.Component);var F=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),u=i[0],b=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&r(t)}),[]),Object(a.useEffect)((function(e){e!==n&&localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var h=function(){var e=u.toLowerCase().trim();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(p.jsxs)("div",{className:d.a.App,children:[Object(p.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(p.jsx)(k,{onSubmit:function(e){if(n.find((function(t){return t.name===e.name})))alert("".concat(e.name," is already created!"));else{var t=Object(o.a)({id:m.a.generate()},e);r((function(e){return[].concat(Object(s.a)(e),[t])}))}}}),Object(p.jsx)("h2",{className:d.a.title,children:"Contacts:"}),Object(p.jsx)(v,{filter:u,onChange:function(e){b(e.currentTarget.value)}}),Object(p.jsx)(f,{contacts:h,onClick:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={App:"App_App__Gvwzv",title:"App_title__14UdU"}},9:function(e,t,n){e.exports={list:"Contacts_list__2XS-u",item:"Contacts_item__12D7A",button:"Contacts_button__2ye9U"}}},[[33,1,2]]]);
//# sourceMappingURL=main.9cb00df0.chunk.js.map