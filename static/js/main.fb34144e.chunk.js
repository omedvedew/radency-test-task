(this["webpackJsonpradency-test-task"]=this["webpackJsonpradency-test-task"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);n(0);var c=n(7),s=n.n(c),l=n(9),i=n(22),a=n(17),r=n(10),d=n(21),o=n(19),j=n.n(o),O=n(1),b=function(e){var t=e.data;return Object(O.jsx)(O.Fragment,{children:t.map((function(e,t){return Object(O.jsx)("td",{children:e},t)}))})},x=n(20),u=Object(r.b)((function(e){return{state:e}}),(function(e){return{getCSVInfo:function(t){return e({type:"ADD_INFO_FROM_CSV",value:t})}}}))((function(e){var t=e.state,n=e.getCSVInfo;return console.log(t),t.CSVInfo?t.CSVInfo.forEach((function(e,n){t.CSVItems["item".concat(n)]=e.join().split("; ")})):console.log("waiting for info"),setTimeout((function(){var e=document.querySelectorAll("tr");console.log(e);for(var t=1;t<e.length-1;t++)!1===e[t].cells[3].textContent.includes("@")&&e[t].cells[3].classList.add("invalid"),+e[t].cells[4].textContent<=20&&e[t].cells[4].classList.add("invalid"),(+e[t].cells[5].textContent>+e[t].cells[4].textContent||+e[t].cells[5].textContent<0)&&e[t].cells[5].classList.add("invalid"),+e[t].cells[6].textContent>1e6&&e[t].cells[6].classList.add("invalid"),+e[t].cells[8].textContent.length>2&&(e[t].cells[8].textContent=e[t].cells[8].textContent.slice(0,2)),(+e[t].cells[2].textContent<12||!1===e[t].cells[2].textContent.startsWith("+1"))&&e[t].cells[2].classList.add("invalid"),"true"!==e[t].cells[7].textContent.toLowerCase()&&"false"!==e[t].cells[7].textContent.toLowerCase()&&e[t].cells[7].classList.add("invalid")}),500),Object(O.jsxs)("main",{className:"main",children:[Object(O.jsx)(j.a,{onFileLoaded:function(e,t){return n(e)}}),t.CSVInfo?Object(O.jsx)("table",{border:"1",cellSpacing:"0",cellPadding:"0",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{className:"table-heading-row",children:[Object(O.jsx)("td",{children:"ID"}),Object(O.jsx)("td",{children:"Name"}),Object(O.jsx)("td",{children:"Phone"}),Object(O.jsx)("td",{children:"Email"}),Object(O.jsx)("td",{children:"Age"}),Object(O.jsx)("td",{children:"Experience"}),Object(O.jsx)("td",{children:"Yearly Income"}),Object(O.jsx)("td",{children:"Has children"}),Object(O.jsx)("td",{children:"License States"}),Object(O.jsx)("td",{children:"Expiration date"}),Object(O.jsx)("td",{children:"License number"})]}),Object(x.keys)(t.CSVItems).map((function(e,n){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:n+1}),Object(O.jsx)(b,{data:t.CSVItems[e]})]},n)}))]})}):console.log("waitin for info")]})})),h=(n(33),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"document-title",children:"Radency test task"}),Object(O.jsx)(u,{})]})}),f=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{CSVItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INFO_FROM_CSV":return Object(a.a)(Object(a.a)({},e),{},{CSVInfo:Object(i.a)(t.value)});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(O.jsx)(r.a,{store:f,children:Object(O.jsx)(d.a,{children:Object(O.jsx)(h,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fb34144e.chunk.js.map