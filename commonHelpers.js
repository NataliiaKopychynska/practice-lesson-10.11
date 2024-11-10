import{a as u}from"./assets/vendor-a2e8d7fa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const i=u.create({baseURL:"https://dummyjson.com"});async function l(){try{const{data:e}=await i.get("/products");return e}catch(e){console.log(e.message)}}async function p(e){try{const{data:t}=await i.get(`/products/${e}`);return t}catch(t){console.log(t.message)}}async function f(e){try{const{data:t}=await i.post("/products/add",e);return t}catch(t){console.log(t.message)}}function m(e){return e.map(({thumbnail:t,title:n,description:c})=>`<li class="list-card">
        <img src="${t}" alt="${n}" />
        <h3>${n}</h3>
        <p class="description">${c}</p>
      </li>`).join("")}function g({thumbnail:e,title:t,description:n}){return`<div class="list-card">
        <img src="${e}" alt="${t}" />
        <h3>${t}</h3>
        <p class="description">${n}</p>
      </div>`}function y({title:e,description:t,price:n}){return`<div class="list-card">
        <h3>${e}</h3>
        <p class="description">${t}</p>
        <p class="description">${n}</p>
      </div>`}const P=document.querySelector("#allProducts"),h=document.querySelector("#singleProductForm"),a=document.querySelector("#singleProduct"),w=document.querySelector("#newProductForm"),d=document.querySelector("#newProductSection");h.addEventListener("submit",$);w.addEventListener("submit",b);async function L(){const e=await l();P.insertAdjacentHTML("beforeend",m(e.products))}async function $(e){e.preventDefault(),a.innerHTML="";const t=e.target.elements.id.value,n=await p(t);a.insertAdjacentHTML("beforeend",g(n)),e.target.reset()}L();async function b(e){e.preventDefault();const t=e.target.elements.title.value,n=e.target.elements.description.value,c=e.target.elements.price.value,o=await f({title:t,description:n,price:c});d.innerHTML="",d.insertAdjacentHTML("beforeend",y(o))}
//# sourceMappingURL=commonHelpers.js.map
