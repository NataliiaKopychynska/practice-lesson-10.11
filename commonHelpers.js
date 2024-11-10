import{a as u}from"./assets/vendor-a2e8d7fa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const a=u.create({baseURL:"https://dummyjson.com"});async function d(){try{const{data:e}=await a.get("/products");return e}catch(e){console.log(e.message)}}async function l(e){try{const{data:r}=await a.get(`/products/${e}`);return r}catch(r){console.log(r.message)}}function f(e){return e.map(({thumbnail:r,title:n,description:c})=>`<li class="list-card">
        <img src="${r}" alt="${n}" />
        <h3>${n}</h3>
        <p class="description">${c}</p>
      </li>`).join("")}function p({thumbnail:e,title:r,description:n}){return`<div class="list-card">
        <img src="${e}" alt="${r}" />
        <h3>${r}</h3>
        <p class="description">${n}</p>
      </div>`}const m=document.querySelector("#allProducts"),g=document.querySelector("#singleProductForm"),i=document.querySelector("#singleProduct");g.addEventListener("submit",h);async function y(){const e=await d();m.insertAdjacentHTML("beforeend",f(e.products))}async function h(e){e.preventDefault(),i.innerHTML="";const r=e.target.elements.id.value,n=await l(r);i.insertAdjacentHTML("beforeend",p(n)),e.target.reset()}y();
//# sourceMappingURL=commonHelpers.js.map
