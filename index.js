(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();window.showDiv=function(n){document.getElementById("mobile-menu").style.display="flex",document.addEventListener("click",onDocumentClick),n.stopPropagation()};window.hideDiv=function(){document.getElementById("mobile-menu").style.display="none",document.removeEventListener("click",onDocumentClick)};window.setActiveLink=function(n){var i=document.getElementsByClassName("active-link");i.length&&i[0].classList.remove("active-link"),n.currentTarget.classList.add("active-link")};var s=window.document.getElementById("mobile-menu");window.onDocumentClick=function(n){s.contains(n.target)||hideDiv()};
//# sourceMappingURL=index.js.map
