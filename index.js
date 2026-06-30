import{a as f,S as u,i}from"./assets/vendor--e875Ek4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function p(a){return f.get("https://pixabay.com/api/",{params:{key:"56396197-05fcd5e3b9536b865c8ea6b88",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const l=document.querySelector(".gallery"),d=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(a){const r=a.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
        <ul class="info">
          <li class="info-item">
            <span class="info-label">Likes</span>
            <span class="info-value">${t.likes}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Views</span>
            <span class="info-value">${t.views}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Comments</span>
            <span class="info-value">${t.comments}</span>
          </li>
          <li class="info-item">
            <span class="info-label">Downloads</span>
            <span class="info-value">${t.downloads}</span>
          </li>
        </ul>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),d.refresh()}function y(){l.innerHTML=""}const c=document.querySelector(".loader");function h(){c.classList.remove("is-hidden")}function g(){c.classList.add("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();r!==""&&(y(),h(),p(r).then(t=>{if(t.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t)}).catch(t=>{i.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{g()}))});
//# sourceMappingURL=index.js.map
