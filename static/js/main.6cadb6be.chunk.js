(window.webpackJsonpnasa=window.webpackJsonpnasa||[]).push([[0],{105:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(82),a(83),a(84),a(163)),i=a(27),s=a(58),d=a(66),m=a(59),u=a.n(m),p=a(60),g=a.n(p),h=a(38),f=a.n(h);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=Object(n.createContext)(),y={primary:u.a,secondary:g.a,hazard:f.a[400]},w=Object(d.a)({palette:E({},y,{type:"light",background:{paper:"#f5f5f5",default:"#fff"}})}),_=Object(d.a)({palette:E({},y,{type:"dark",background:{paper:"#333",default:"#212121"}})}),O=function(e){var t=Object(n.useState)("light"===function(){var e=localStorage.getItem("theme");return e||"dark"}()?w:_),a=Object(i.a)(t,2),o=a[0],c=a[1];return r.a.createElement(b.Provider,{value:{theme:o,toggleTheme:function(){"light"===o.palette.type?(c(_),localStorage.setItem("theme","dark")):(c(w),localStorage.setItem("theme","light"))}}},e.children)},j=a(153),k=a(156),S=a(157),x=a(131),P=a(61),z=a.n(P),B=a(132),C=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),A=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"})),D=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"m9,21c0,0.55 0.45,1 1,1l4,0c0.55,0 1,-0.45 1,-1l0,-1l-6,0l0,1zm3,-19c-3.86,0 -7,3.14 -7,7c0,2.38 1.19,4.47 3,5.74l0,2.26c0,0.55 0.45,1 1,1l6,0c0.55,0 1,-0.45 1,-1l0,-2.26c1.81,-1.27 3,-3.36 3,-5.74c0,-3.86 -3.14,-7 -7,-7z"}));var F=function(){var e=C(),t=Object(n.useContext)(b),a=t.theme,o=t.toggleTheme;return r.a.createElement("div",{className:e.root},r.a.createElement(z.a,null),r.a.createElement(k.a,null,r.a.createElement(S.a,null,r.a.createElement(x.a,{variant:"h6",className:e.title},"Asteroids"),r.a.createElement(B.a,{onClick:o},r.a.createElement((function(){return"light"===a.palette.type?A:D}),null)))))},N=(a(105),a(62)),W=a.n(N),I=a(162),L=a(164),R=a(158),T=a(159),H=a(160),U=a(65),M=a.n(U);var V=function(e){var t,a=Object(n.useContext)(b).theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{style:!0===e.asteroid.is_potentially_hazardous_asteroid?{backgroundColor:a.palette.hazard}:{}},r.a.createElement(R.a,{expandIcon:r.a.createElement(M.a,null)},r.a.createElement(x.a,{variant:"body1"},"".concat(e.asteroid.name))),r.a.createElement(T.a,null,r.a.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"}},r.a.createElement("li",null,r.a.createElement(x.a,{variant:"body1",gutterBottom:!0},"ID: ",r.a.createElement(H.a,{href:"https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=".concat(e.asteroid.id,";old=0;orb=1;cov=0;log=0;cad=0#orb"),color:"secondary",variant:"inherit"},e.asteroid.id))),r.a.createElement("li",null,r.a.createElement(x.a,{variant:"body1",gutterBottom:!0},"Close approach: ".concat(null===(t=e.asteroid.close_approach_data[0].close_approach_date_full)?"Unknown":"".concat(t.split(" ")[1]," hrs")))),r.a.createElement("li",null,r.a.createElement(x.a,{variant:"body1",gutterBottom:!0},"Diameter: ".concat(parseFloat(e.asteroid.estimated_diameter.meters.estimated_diameter_min).toLocaleString()," m - ").concat(parseFloat(e.asteroid.estimated_diameter.meters.estimated_diameter_max).toLocaleString()," m"))),r.a.createElement("li",null,r.a.createElement(x.a,{variant:"body1",gutterBottom:!0},"Relative Velocity: ".concat(parseFloat(e.asteroid.close_approach_data[0].relative_velocity.kilometers_per_second).toLocaleString()," km/s"))),r.a.createElement("li",null,r.a.createElement(x.a,{variant:"body1",gutterBottom:!0},"Miss Distance: ".concat(parseFloat(e.asteroid.close_approach_data[0].miss_distance.kilometers).toLocaleString()," km"))),r.a.createElement("li",null,r.a.createElement(x.a,{variant:"body1",gutterBottom:!0},"Orbiting Body: ".concat(e.asteroid.close_approach_data[0].orbiting_body))),r.a.createElement("li",null,r.a.createElement(x.a,{variant:"body1"},"Potentially Hazardous: ".concat(!0===e.asteroid.is_potentially_hazardous_asteroid?"Yes":"No")))))))},G=a(130),J=a(161),Y=a(40),$=a.n(Y)()((function(e){return{progress:{margin:e.spacing(2)}}}));var q=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!0),l=Object(i.a)(c,2),s=l[0],d=l[1],m=$();Object(n.useEffect)((function(){var e=new Date,t="".concat(e.getFullYear(),"-").concat(String(e.getMonth()+1).padStart(2,"0"),"-").concat(String(e.getDate()).padStart(2,"0"));W.a.get("https://secret-meadow-61226.herokuapp.com?date=".concat(t)).then((function(e){o(e.data.near_earth_objects[t]),d(!1)})).catch((function(e){return console.log(e)}))}),[]);var u=a.map((function(e,t){return r.a.createElement(V,{key:t,index:t,asteroid:e})}));return s?r.a.createElement("div",{id:"progress"},r.a.createElement(J.a,{className:m.progress})):r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(I.a,{container:!0,justify:"center"},r.a.createElement("div",{id:"asteroid-list"},r.a.createElement(G.a,{id:"heading-paper"},r.a.createElement(x.a,{variant:"body1",gutterBottom:!0},"Near Earth Asteroids: ".concat(a.length)),r.a.createElement((function(){var e=a.filter((function(e){return!0===e.is_potentially_hazardous_asteroid}));return 0===(e=(e=e.map((function(e){return e.name}))).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(x.a,{variant:"body2"},e))}))).length?r.a.createElement(x.a,{variant:"body1"},"Potentially Hazardous: None"):r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{variant:"body1"},"Potentially Hazardous:"),r.a.createElement("ul",{style:{margin:0,padding:0,listStyle:"none"}},e))}),null)),u)))))};var K=function(){var e=Object(n.useContext)(b).theme;return r.a.createElement("div",{style:{paddingTop:56}},r.a.createElement(l.a,{theme:e},r.a.createElement(F,{style:{position:"fixed",top:0}}),r.a.createElement(q,null)))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(O,null,r.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Asteroids",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Asteroids","/service-worker.js");Q?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(t,e)}))}}()},77:function(e,t,a){e.exports=a(124)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.6cadb6be.chunk.js.map