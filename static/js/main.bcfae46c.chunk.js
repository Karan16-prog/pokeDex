(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{58:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(11),s=c.n(a),i=c(17),o=c.n(i),j=c(29),h=c(8),l=c(31),b=c.n(l),u=(c(58),c(59),c(70)),d=c(69),p=c(67),O=c(68),x=c(1);var m=function(){var e=Object(n.useState)("pikachu"),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(h.a)(a,2),i=s[0],l=s[1],m=Object(n.useState)(""),f=Object(h.a)(m,2),g=f[0],v=f[1],k=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,n="https://pokeapi.co/api/v2/pokemon/".concat(c),e.next=5,b.a.get(n);case 5:r=e.sent,t.push(r.data),l(t),v(t[0].types[0].type.name),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k()}),[]),Object(x.jsxs)("div",{class:"app__body bg-light",children:[Object(x.jsx)(u.a,{className:"bg-danger",onSubmit:function(e){e.preventDefault(),k(),console.log(i)},children:Object(x.jsxs)(u.a.Group,{className:"mb-3",children:[Object(x.jsx)(u.a.Label,{children:Object(x.jsx)(u.a.Control,{className:"form__input center-block",type:"text",onChange:function(e){r(e.target.value.toLowerCase())},onFocus:function(e){return e.target.placeholder=""},placeholder:"Pikachu",fluid:!0})}),Object(x.jsx)(d.a,{variant:"danger",children:"Enter Pokemon name (e.g Squirtle, Raichu, Blastoise etc)"})]})}),i.map((function(e){return Object(x.jsxs)("div",{className:"pokemon__container",children:[Object(x.jsx)(p.a,{style:{height:"13.5rem",marginBottom:"2rem"},src:e.sprites.front_default,alt:"Pikachu",thumbnail:!0}),Object(x.jsx)(O.a,{striped:!0,bordered:!0,hover:!0,children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Type"}),Object(x.jsx)("th",{children:g})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Height"}),Object(x.jsx)("th",{children:e.height})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Weight"}),Object(x.jsx)("th",{children:e.weight})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Number of Battle"}),Object(x.jsx)("th",{children:e.game_indices.length})]})]})})]})}))]})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(m,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.bcfae46c.chunk.js.map