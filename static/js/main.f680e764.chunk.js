(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),i=n(5),r=n(7),a=n(1),l=(n(12),n(13),n(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function b(t,e){var n=e.sortType,s=e.isReversed,o=Object(r.a)(t);return o.sort((function(t,e){switch(n){case c.ALPHABET:return t.localeCompare(e);case c.LENGTH:return t.length-e.length;default:return 0}})),s&&o.reverse(),o}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(c.NONE),r=Object(i.a)(o,2),h=r[0],j=r[1];return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:"button is-info ".concat(h===c.ALPHABET?"":"is-light"),onClick:function(){j(c.ALPHABET),s(n)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:"button is-success ".concat(h===c.LENGTH?"":"is-light"),onClick:function(){j(c.LENGTH),s(n)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:"button is-warning ".concat(n?"":"is-light"),onClick:function(){j(h),s(!n)},children:"Reverse"}),(0!==h||!0===n)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(c.NONE),s(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:b(u,{sortType:h,isReversed:n}).map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f680e764.chunk.js.map