(this["webpackJsonppokemon-list"]=this["webpackJsonppokemon-list"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/types-key.b88d7dd8.png"},20:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),s=(a(25),a(14)),i=a(15),m=a(18),l=a(16),u=a(19),p=(a(26),a(3)),d=a(2),h=a.n(d),v=(a(44),a(17)),f=a.n(v),E=function(e){return Object(n.useEffect)(e,[])},g=function(e){return Math.floor(Math.random()*Math.floor(e))},b=function(e){var t=.328084*e,a=Math.floor(t);return a+"' "+Math.round(12*(t-a))+'"'};var y=function(e){var t=e.endPoint,a=Object(n.useState)(null),c=Object(p.a)(a,2),o=c[0],s=c[1];if(E((function(){t&&h.a.get(t).then((function(e){var t=e.data,a=t.moves.length-1,n=[],r=t.moves;n.push(h()(r.splice(g(a),1)[0].move.url)),n.push(h()(r[g(a-1)].move.url)),Promise.all(n).then((function(e){var a=[];e.forEach((function(e){a.push(e.data)}));var n,r=t.types.map((function(e){return e.type}));s({name:t.name,height:b(t.height),weight:(n=t.weight,Math.round(.220462*n)),types:r,id:t.id,moves:a})}))}))})),!o)return r.a.createElement("div",{className:"placeholder"},r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"double-bounce1"}),r.a.createElement("div",{className:"double-bounce2"})));var i=o.types.map((function(e){return e.name}));return r.a.createElement("div",{className:"card "+i.join(" ")},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"card-title"},o.name),r.a.createElement("div",{className:"type-list",id:"type-list"},o.types.map((function(e){return r.a.createElement("span",{className:e.name+"-type type-img"})})))),r.a.createElement("div",{className:"hero-bg"},r.a.createElement("img",{className:"hero-image",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(o.id,".png"),alt:"front view of "+o.name})),r.a.createElement("div",{className:"pokestats"},"Length: "+o.height+", Weight: "+o.weight+" lbs."),r.a.createElement("div",{className:"move-list",id:"move-list"},o.moves.map((function(e){return r.a.createElement("div",{className:"move-container"},r.a.createElement("span",{className:e.type.name+"-type type-img"}),r.a.createElement("span",{className:"move-description"},r.a.createElement("span",{className:"move-name"},e.name,":")," ",e.flavor_text_entries[2].flavor_text))}))),r.a.createElement("span",{className:"pokenumber"},o.id+"/807")),r.a.createElement("div",{className:"card-back"}))},N=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];return E((function(){h.a.get("https://pokeapi.co/api/v2/pokemon/").then((function(e){c(e.data.results.map((function(e){return e.url})))}))})),r.a.createElement("div",{className:"pokemon-list"},r.a.createElement("h1",null,"Pokemon List"),a.map((function(e){return r.a.createElement(y,{endPoint:e})})),r.a.createElement("h1",null,"Types"),r.a.createElement("img",{className:"types-key",src:f.a,alt:"Key for pokemon types"}))},k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(N,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.65a2e1fb.chunk.js.map