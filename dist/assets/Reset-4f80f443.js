import{r as l,a as n,j as e}from"./index-f7c5f2e7.js";import{u as m}from"./SetOutFucntions-f088c140.js";import"./firebase-config-409fc865.js";const d=()=>{const[s,a]=l.useState(),{auth:r,sendPasswordResetEmail:i}=m();return n("form",{className:"container flex algin-ce justify-ce flex-direc signup-container",onSubmit:t=>{t.preventDefault(),i(r,t.currentTarget.email.value).then(()=>{a("email had been sent successfully")})},children:[e("h2",{className:"text-ce",children:"reset password"}),e("label",{htmlFor:"email",children:"Email"}),e("input",{id:"email",type:"email",required:!0}),e("button",{className:"btn-submit",children:"send reset email"}),s&&e("div",{className:"message error",children:s})]})};export{d as default};