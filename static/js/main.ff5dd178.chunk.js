(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(6),l=c(2),r=c(4),i=c.n(r),d=c(1),o=c.n(d),j=(c(12),c(13),c(0)),u=o.a.memo((function(e){var t=e.todos,c=e.filteredBy,a=e.searchQuery,s=e.getTodoInfo,n=e.todoId,l=Object(d.useMemo)((function(){return"all"===c&&""!==a?t.filter((function(e){return e.title.includes(a)})):"completed"===c?t.filter((function(e){return!0===e.completed&&e.title.includes(a)})):"active"===c?t.filter((function(e){return!1===e.completed&&e.title.includes(a)})):t}),[a,c,t]);return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:l.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:e.id===n?"has-background-info-light":"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:e.id!==n?"far fa-eye":"far fa-eye-slash"})})})})]},e.id)}))})]})})),b=function(e){var t=e.filteredBy,c=e.selectHandler,a=e.searchValue,s=e.inputHandler,n=e.isDeleteButtonAvailable,l=e.clearInput;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:c,value:t,children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:s}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),n&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:l,"aria-label":"clearSearchButton"})})]})]})},h=(c(15),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),m=o.a.memo((function(e){var t=e.user,c=e.todo,a=e.closeModal,s=e.isError;return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),!t&&!s&&Object(j.jsx)(h,{}),Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",c.id]}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:a,"aria-label":"modal-close"})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[t&&!s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"}),Object(j.jsx)("span",{children:" by "}),Object(j.jsx)("a",{href:null===t||void 0===t?void 0:t.email,children:null===t||void 0===t?void 0:t.name})]})]}),s&&Object(j.jsx)("p",{children:"Error. Data not loaded"})]})]})]})}));function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(d.useState)("all"),r=Object(l.a)(s,2),o=r[0],x=r[1],f=Object(d.useState)(""),p=Object(l.a)(f,2),v=p[0],N=p[1],y=Object(d.useState)(!1),g=Object(l.a)(y,2),k=g[0],S=g[1],B=Object(d.useState)(null),I=Object(l.a)(B,2),w=I[0],E=I[1],T=Object(d.useState)(null),C=Object(l.a)(T,2),D=C[0],_=C[1],A=Object(d.useState)(!1),H=Object(l.a)(A,2),M=H[0],F=H[1],J=Object(d.useState)(!0),L=Object(l.a)(J,2),P=L[0],Q=L[1],V=Object(d.useState)(!1),q=Object(l.a)(V,2),z=q[0],G=q[1],K=function(){var e=Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.prev=1,e.next=4,O("/todos");case 4:t=e.sent,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),G(!0);case 11:return e.prev=11,Q(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){""===v&&S(!1)}),[v]);return Object(d.useEffect)((function(){K()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{filteredBy:o,selectHandler:function(e){x(e.currentTarget.value)},searchValue:v,inputHandler:function(e){N(e.currentTarget.value),S(!0)},isDeleteButtonAvailable:k,clearInput:function(){N(""),S(!1)}})}),Object(j.jsxs)("div",{className:"block",children:[P&&Object(j.jsx)(h,{}),!P&&(!z||M)&&Object(j.jsx)(u,{todos:c,filteredBy:o,searchQuery:v,getTodoInfo:function(e){var t;E(null),F(!0),_(e),(t=e.userId,O("/users/".concat(t))).then((function(e){E(e)})).catch((function(){G(!0)}))},todoId:(null===D||void 0===D?void 0:D.id)||null}),z&&Object(j.jsx)("p",{children:"Error. Data not loaded"})]})]})})}),M&&Object(j.jsx)(m,{user:w,todo:D,closeModal:function(){_(null),F(!1),G(!1)},isError:z})]})};s.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ff5dd178.chunk.js.map