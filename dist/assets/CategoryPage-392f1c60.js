import{b as u,j as o}from"./index-9fcefab8.js";import{useCategories as d}from"./CategoiresContext-562232d7.js";import{D as n}from"./Gallary-a0a0b2ad.js";import"./firebase-config-409fc865.js";function v(){var a;const{categories:s,products:r}=d(),{categoryId:t,searchProduct:i}=u();if(s.length===0)return;const l=t===void 0?"best seller":(a=s.find(e=>e.id===t))==null?void 0:a.name;if(i!==void 0){const[,e]=i.split("=");r.filter(({title:c})=>!!c.toLowerCase().includes(e.toLowerCase()))}return o("div",{className:"category-page container",children:t!==void 0?o(n,{title:l,products:r.filter(e=>e.category.id===t?e:null)}):o(n,{title:"Search",products:r})})}export{v as default};