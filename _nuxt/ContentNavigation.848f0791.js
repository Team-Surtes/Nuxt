import{u as f}from"./asyncData.8c1bf453.js";import{m as v,_ as g,d,R as l,S as h,q as _,O as y,Q as r,D as C}from"./entry.2b489d1b.js";import{q as w,w as m,h as p,e as P,s as $,j as N,u as j}from"./query.558e01b7.js";import{u as D}from"./preview.5618d2fc.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=w(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if($())return(await g(()=>import("./client-db.aa0194f8.js"),["./client-db.aa0194f8.js","./entry.2b489d1b.js","./entry.f6803e55.css","./query.558e01b7.js","./preview.5618d2fc.js","./index.13aa9e49.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:D().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},E=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(C,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),S=E;export{S as default};