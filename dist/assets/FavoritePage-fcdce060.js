import{u as l,r as s,j as a}from"./index-9fcefab8.js";import{useCategories as m}from"./CategoiresContext-562232d7.js";import{O as v,A as p,f as g}from"./firebase-config-409fc865.js";import{u as y}from"./SetOutFucntions-b315eaf2.js";import{D as F}from"./Gallary-a0a0b2ad.js";function j(){const i=l(),[e,o]=s.useState(),{currentUser:t}=y(),{categories:u,products:c}=m();return s.useEffect(()=>{if(!t)return i("/login");if(!(t!=null&&t.emailVerified))return i("/notverified");(async()=>{o(null);const n=await v(p(g,"favorite",t==null?void 0:t.uid));o(()=>{const{list:f}=n.data();return c.filter(r=>{const d=`${r.category.id}-${r.id}`;return!!f.includes(d)})})})()},[u,t]),a("div",{className:"container",children:a(F,{title:"Favorites",products:e})})}export{j as default};