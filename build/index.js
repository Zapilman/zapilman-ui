/*! For license information please see index.js.LICENSE.txt */
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("react"));else if("function"==typeof define&&define.amd)define(["react"],r);else{var t="object"==typeof exports?r(require("react")):r(e.react);for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(self,(e=>(()=>{"use strict";var r={251:(e,r,t)=>{var o=t(156),n=Symbol.for("react.element"),f=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};r.jsx=function(e,r,t){var o,u={},a=null,l=null;for(o in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)f.call(r,o)&&!p.hasOwnProperty(o)&&(u[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===u[o]&&(u[o]=r[o]);return{$$typeof:n,type:e,key:a,ref:l,props:u,_owner:i.current}}},893:(e,r,t)=>{e.exports=t(251)},156:r=>{r.exports=e}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var f=t[e]={exports:{}};return r[e](f,f.exports,o),f.exports}o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{Button:()=>r,Input:()=>t});var e=o(893);const r=function(r){var t=r.title;return(0,e.jsx)("button",{children:t})},t=function(){return(0,e.jsx)("div",{children:"input zalupa"})}})(),n})()));