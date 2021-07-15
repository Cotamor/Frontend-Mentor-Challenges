(this["webpackJsonpjob-listing"]=this["webpackJsonpjob-listing"]||[]).push([[0],{14:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),l=o(7),r=o.n(l),s=o(2),c=o(6),i=o(0),d=function(e){var t=e.job,o=t.company,a=t.logo,n=t.brandNew,l=t.featured,r=t.position,c=t.role,d=t.level,p=t.postedAt,u=t.contract,g=t.location,m=t.languages,b=t.tools,x=e.handleClick,j=[c,d];return b&&j.push.apply(j,Object(s.a)(b)),m&&j.push.apply(j,Object(s.a)(m)),Object(i.jsx)("div",{className:"container my-0 mx-auto",children:Object(i.jsxs)("div",{className:"".concat(l&&"border-l-8 border-green-500"," flex flex-col items-start md:items-center  px-12 md:px-4  md:flex-row bg-white shadow-lg m-5 mb-12 p-6 pt-12 md:pt-6 rounded-lg "),children:[Object(i.jsx)("div",{className:"mr-6 -mt-20 mb-3 md:-mt-0 md:mb-3",children:Object(i.jsx)("img",{className:"w-14 md:w-20",src:a,alt:"logo"})}),Object(i.jsxs)("div",{className:"flex-col mr-6",children:[Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)("div",{className:"text-green-400 capitalize text-base font-bold mr-2",children:o}),n&&Object(i.jsx)("div",{className:"rounded-full py-1 px-3 mx-1 text-xs uppercase font-bold text-white bg-green-500",children:"new"}),l&&Object(i.jsx)("div",{className:"rounded-full py-1 px-3 mx-1 text-xs uppercase font-bold text-white bg-black",children:"featured"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("h2",{className:"text-xl tracking-wide font-bold my-1",children:r})}),Object(i.jsx)("div",{className:"text-gray-400 text-base border-b-1",children:"".concat(p," \u2022 ").concat(u," \u2022 ").concat(g)})]}),Object(i.jsx)("div",{className:"flex items-start justify-start md:ml-auto flex-wrap mt-4 pt-2 md:mt-0 md:pt-0 border-t border-gray-300 md:border-t-0",children:j?j.map((function(e,t){return Object(i.jsx)("span",{onClick:function(){return x(e)},className:"cursor-pointer rounded px-2 py-1 mr-4 my-2 bg-green-100 text-green-400 text-xs",children:e},t)})):""})]})})},p=o(8);var u=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),o=t[0],n=t[1],l=Object(a.useState)([]),r=Object(c.a)(l,2),u=r[0],g=r[1];Object(a.useEffect)((function(){n(p)}),[]);var m=function(e){u.includes(e)||g([].concat(Object(s.a)(u),[e]))},b=o.filter((function(e){var t=e.role,o=e.level,a=e.languages,n=e.tools;if(0===u.length)return!0;var l=[t,o];return n&&l.push.apply(l,Object(s.a)(n)),a&&l.push.apply(l,Object(s.a)(a)),console.log(u),u.every((function(e){return l.includes(e)}))}));return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"bg-green-700 bg-opacity-70 h-40 mb-20",children:Object(i.jsx)("img",{className:"bg-center bg-cover h-full",src:"./images/bg-header-desktop.svg",alt:"desktop"})}),Object(i.jsx)("div",{className:"",children:u.length>0&&Object(i.jsxs)("div",{className:"-mt-40 ms:container relative flex items-center flex-wrap bg-white shadow-md my-16 mx-20 p-6 pt-9 rounded",children:[u.map((function(e,t){return Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("span",{className:"rounded-l pl-2 pr-1 py-1 my-2 bg-green-100 text-green-400 text-xs",children:e},t),Object(i.jsx)("span",{onClick:function(){return t=e,void g(u.filter((function(e){return e!==t})));var t},className:"cursor-pointer rounded-r pl-1 pr-2 py-1 mr-4 my-2 bg-green-400 text-green-100 text-xs",children:"X"})]})})),Object(i.jsx)("span",{onClick:function(){g([])},className:"absolute top-2 right-2 ml-auto text-gray-400 cursor-pointer hover:text-gray-500 text-xs underline",children:"Clear"})]})}),0===o.length?Object(i.jsx)("p",{children:"Jobs are loading..."}):b.map((function(e){return Object(i.jsx)(d,{job:e,handleClick:m},e.id)}))]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","brandNew":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","brandNew":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","brandNew":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","brandNew":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","brandNew":false,"featured":false,"position":"Software Engineer","role":"Fullstack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","brandNew":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","brandNew":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","brandNew":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","brandNew":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","brandNew":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.ed3ffef8.chunk.js.map