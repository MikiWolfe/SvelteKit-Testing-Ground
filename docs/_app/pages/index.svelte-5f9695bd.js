import{S as q,i as J,s as K,e as r,t as g,k as p,c as i,a as d,h as _,d as a,m as b,b as n,g as L,J as t,K as N,n as z}from"../chunks/index-46293cf0.js";function O(x){let e,o,f,k,s,y,E,h,I,M,u,C,c,w,B,m,T,H,D;return{c(){e=r("div"),o=r("title"),f=g("Magic color changing box"),k=p(),s=r("h1"),y=g("I have no idea what I am doing"),E=p(),h=r("p"),I=g("Hello! Click the button to change the color of the box."),M=p(),u=r("div"),C=p(),c=r("button"),w=g("Click me!"),B=p(),m=r("p"),T=g("Made by MikiWolfe 2022"),this.h()},l(v){e=i(v,"DIV",{class:!0});var l=d(e);o=i(l,"TITLE",{class:!0});var P=d(o);f=_(P,"Magic color changing box"),P.forEach(a),k=b(l),s=i(l,"H1",{class:!0});var S=d(s);y=_(S,"I have no idea what I am doing"),S.forEach(a),E=b(l),h=i(l,"P",{class:!0});var V=d(h);I=_(V,"Hello! Click the button to change the color of the box."),V.forEach(a),M=b(l),u=i(l,"DIV",{id:!0,class:!0}),d(u).forEach(a),C=b(l),c=i(l,"BUTTON",{class:!0});var W=d(c);w=_(W,"Click me!"),W.forEach(a),B=b(l),m=i(l,"P",{class:!0});var $=d(m);T=_($,"Made by MikiWolfe 2022"),$.forEach(a),l.forEach(a),this.h()},h(){n(o,"class","svelte-98rs0k"),n(s,"class","svelte-98rs0k"),n(h,"class","welcome svelte-98rs0k"),n(u,"id","box"),n(u,"class","svelte-98rs0k"),n(c,"class","svelte-98rs0k"),n(m,"class","foot svelte-98rs0k"),n(e,"class","container svelte-98rs0k")},m(v,l){L(v,e,l),t(e,o),t(o,f),t(e,k),t(e,s),t(s,y),t(e,E),t(e,h),t(h,I),t(e,M),t(e,u),t(e,C),t(e,c),t(c,w),t(e,B),t(e,m),t(m,T),H||(D=N(c,"click",x[0]),H=!0)},p:z,i:z,o:z,d(v){v&&a(e),H=!1,D()}}}function R(x){const e=s=>Math.floor(Math.random()*s),o=()=>{let s="rgb("+e(255)+","+e(255)+","+e(255)+")";console.log(s,"\u{1F431}\u200D\u{1F464}"),document.getElementById("box").style.backgroundColor=s},f=()=>{let s=Math.floor(Math.random()*501)+"px";console.log(s,"\u{1F918}"),document.getElementById("box").style.height=s,document.getElementById("box").style.width=s};return[()=>{o(),f()}]}class j extends q{constructor(e){super(),J(this,e,R,O,K,{})}}export{j as default};
