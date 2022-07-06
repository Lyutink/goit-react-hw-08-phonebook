"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[44,932,561,684],{4932:function(e,n,t){t.r(n),t.d(n,{ContactsView:function(){return I}});var r,i,a,s,o=t(885),l=t(2791),c=t(5065),u=t(5705),d=t(3284),m=t(168),h=t(6031),p=h.ZP.h1(r||(r=(0,m.Z)(["\n  padding-bottom: 24px;\n  padding-left: 12px;\n  font-size: 1.5rem;\n  font-weight: 700;\n"]))),x=h.ZP.div(i||(i=(0,m.Z)(["\n  margin-left: 12px;\n  max-width: 320px;\n  padding: 8px;\n  border: solid;\n"]))),f=h.ZP.label(a||(a=(0,m.Z)(["\n  display: block;\n  margin-top: 12px;\n\n  font-size: 1.2rem;\n  font-weight: 500;\n"]))),g=h.ZP.button(s||(s=(0,m.Z)(["\n  display: block;\n  margin-top: 12px;\n  border-radius: 5px;\n\n  cursor: pointer;\n"]))),j=t(184),b=d.Ry({name:d.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required("Please enter your name, it is required"),number:d.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits (at least 5 symbols long), it can contain spaces, dashes, parentheses and can start with +").required("Please enter your phone number, it is required")});function w(e){var n=e.onSubmit,t=e.adding;return(0,j.jsx)(u.J9,{enableReinitialize:!0,initialValues:{name:"",phone:""},validationSchema:b,onSubmit:function(e,t){var r=t.resetForm;n(e),r()},children:(0,j.jsx)(u.l0,{autoComplete:"off",children:(0,j.jsxs)(x,{children:[(0,j.jsx)(f,{htmlFor:"name",children:"Name"}),(0,j.jsx)(u.gN,{type:"text",name:"name"}),(0,j.jsx)(u.Bc,{name:"name"}),(0,j.jsx)(f,{htmlFor:"phone",children:"Phone"}),(0,j.jsx)(u.gN,{type:"tel",name:"phone"}),(0,j.jsx)(u.Bc,{name:"phone"}),(0,j.jsx)(g,{type:"submit",children:t?"Adding...":"Add contact"})]})})})}var Z,v,y,C,L,P,S,k=t(2007),z=t.n(k),V=h.ZP.h2(Z||(Z=(0,m.Z)(["\n  padding-left: 12px;\n  font-size: 1.5rem;\n  font-weight: 500;\n"]))),R=h.ZP.li(v||(v=(0,m.Z)(["\n  margin-top: 4px;\n  font-size: 1.2rem;\n  font-weight: 400;\n"]))),_=h.ZP.span(y||(y=(0,m.Z)(["\n  margin-right: 10px;\n  font-size: 30px;\n  font-weight: 500;\n"]))),q=h.ZP.span(C||(C=(0,m.Z)(["\n  margin-right: 10px;\n  font-size: 30px;\n  font-weight: 500;\n"]))),F=h.ZP.button(L||(L=(0,m.Z)(["\n  margin-left: 8px;\n  border-radius: 5px;\n\n  cursor: pointer;\n"])));function A(e){var n=e.name,t=e.phone,r=e.idContact,i=(0,c.Nt)(),a=(0,o.Z)(i,2),s=a[0],l=a[1].isLoading;return(0,j.jsxs)(R,{children:[(0,j.jsxs)("p",{children:[(0,j.jsxs)(_,{children:[n,":"]}),(0,j.jsx)(q,{children:t})]}),(0,j.jsx)(F,{type:"button",onClick:function(){return s(r)},children:l?"Deleting":"Delete"})]})}function N(e){var n=e.getContactList;return(0,j.jsx)("ul",{children:n.map((function(e){var n=e.id,t=e.name,r=e.phone;return(0,j.jsx)(A,{name:t,phone:r,idContact:n},n)}))})}A.propTypes={getContactList:z().arrayOf(z().shape({id:z().string.isRequired,name:z().string.isRequired,phone:z().string.isRequired}).isRequired)};var D=h.ZP.label(P||(P=(0,m.Z)(["\n  display: block;\n  margin-left: 12px;\n  font-size: 1.2rem;\n  font-weight: 500;\n"]))),B=h.ZP.input(S||(S=(0,m.Z)(["\n  margin-top: 8px;\n  margin-left: 12px;\n"])));function H(e){var n=e.filter,t=e.onChange;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(D,{children:"Find contacts by Name"}),(0,j.jsx)(B,{type:"text",value:n,onChange:t})]})}H.prototype={filter:z().string,onChange:z().func.isRequired};var I=function(){var e=(0,c.Jx)(),n=e.data,t=e.isFetching,r=e.isError,i=(0,c.Lr)(),a=(0,o.Z)(i,2),s=a[0],u=a[1].isLoading,d=(0,l.useState)(""),m=(0,o.Z)(d,2),h=m[0],x=m[1];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p,{children:"Phonebook"}),(0,j.jsx)(w,{onSubmit:function(e){var n=e.name,t=e.phone;!function(e){var n=e.toLowerCase();return!function(e){return n===e.name.toLowerCase()}}(n)?s({name:n,phone:t}):alert("".concat(n," is already in contacts."))},adding:u}),(0,j.jsx)(V,{children:"Contacts"}),(0,j.jsx)(H,{value:h,onChange:function(e){x(e.target.value)}}),(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)("h2",{children:" Something went wrong "}),t&&(0,j.jsx)("h2",{children:" Loading contacts..."}),n&&(0,j.jsx)(N,{getContactList:function(){var e=h.toLocaleLowerCase();return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e)}))}()})]})]})}},6561:function(e,n,t){t.r(n),t.d(n,{HomeView:function(){return a}});t(2791);var r=t(184),i={container:{minHeight:"calc(100vh - 50px)",display:"flex",alignItems:"center",justifyContent:"center"},title:{fontWeight:500,fontSize:48,textAlign:"center"}},a=function(){return(0,r.jsx)("div",{style:i.container,children:(0,r.jsxs)("h1",{style:i.title,children:["\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0438\u0441\u0430"," ",(0,r.jsx)("span",{role:"img","aria-label":"\u0418\u043a\u043e\u043d\u043a\u0430 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f",children:"\ud83d\udc81\u200d\u2640\ufe0f"})]})})}},2745:function(e,n,t){t.r(n),t.d(n,{LoginView:function(){return u}});var r=t(885),i=t(2791),a=t(2978),s=t(2732),o=t(2936),l=t(6157),c=t(184),u=function(){var e=(0,a.I0)(),n=(0,i.useState)(""),t=(0,r.Z)(n,2),u=t[0],d=t[1],m=(0,i.useState)(""),h=(0,r.Z)(m,2),p=h[0],x=h[1],f=function(e){switch(e.target.name){case"email":d(e.target.value);break;case"password":x(e.target.value);break;default:return}};return(0,c.jsx)("div",{children:(0,c.jsxs)(o.Z,{onSubmit:function(n){n.preventDefault(),e(s.Z.logIn({email:u,password:p})),d(""),x("")},style:{display:"flex",justifyContent:"center",flexDirection:"column",width:300},autoComplete:"off",children:[(0,c.jsxs)(o.Z.Group,{className:"mb-3",children:[(0,c.jsx)(o.Z.Label,{children:"Email address"}),(0,c.jsx)(o.Z.Control,{type:"email",placeholder:"name@example.com",name:"email",value:u,onChange:f})]}),(0,c.jsxs)(o.Z.Group,{className:"mb-3",children:[(0,c.jsx)(o.Z.Label,{children:"Password"}),(0,c.jsx)(o.Z.Control,{type:"password",name:"password",value:p,onChange:f})]}),(0,c.jsx)(l.Z,{type:"submit",variant:"primary",style:{marginTop:20},children:"Log in"})]})})}},9684:function(e,n,t){t.r(n),t.d(n,{RegisterView:function(){return c}});var r=t(885),i=t(2791),a=t(2978),s=t(9385),o=t(184),l={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15}},c=function(){var e=(0,a.I0)(),n=(0,i.useState)(""),t=(0,r.Z)(n,2),c=t[0],u=t[1],d=(0,i.useState)(""),m=(0,r.Z)(d,2),h=m[0],p=m[1],x=(0,i.useState)(""),f=(0,r.Z)(x,2),g=f[0],j=f[1],b=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":return u(r);case"email":return p(r);case"password":return j(r);default:return}};return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"}),(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(s.r5.register({name:c,email:h,password:g})),u(""),p(""),j("")},style:l.form,autoComplete:"off",children:[(0,o.jsxs)("label",{style:l.label,children:["\u0418\u043c\u044f",(0,o.jsx)("input",{type:"text",name:"name",value:c,onChange:b})]}),(0,o.jsxs)("label",{style:l.label,children:["\u041f\u043e\u0447\u0442\u0430",(0,o.jsx)("input",{type:"email",name:"email",value:h,onChange:b})]}),(0,o.jsxs)("label",{style:l.label,children:["\u041f\u0430\u0440\u043e\u043b\u044c",(0,o.jsx)("input",{type:"password",name:"password",value:g,onChange:b})]}),(0,o.jsx)("button",{type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})}},1044:function(e,n,t){t.r(n),t.d(n,{ContactsView:function(){return s.ContactsView},HomeView:function(){return r.HomeView},LoginView:function(){return a.LoginView},RegisterView:function(){return i.RegisterView}});var r=t(6561),i=t(9684),a=t(2745),s=t(4932)}}]);
//# sourceMappingURL=44.20f9be26.chunk.js.map