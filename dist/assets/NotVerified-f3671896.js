import{a as h,u as m,r as o,j as l,b as a}from"./index-4894d9cd.js";const I=()=>{const r=h(),{sendEmailVerification:d,checkForVerifiction:f,currentUser:e}=m(),[n,s]=o.useState(JSON.parse(localStorage.getItem("waintingTime"))||0),c=()=>{const t=setInterval(()=>{s(i=>i<=0?(clearInterval(t),i):(localStorage.setItem("waintingTime",JSON.stringify(i-1)),i-1))},1e3)};return o.useEffect(()=>{const t=setInterval(()=>{e||(clearInterval(t),r("/Tech-Mode")),e!=null&&e.emailVerified&&(clearInterval(t),r("/Tech-Mode"))},1e3);c()},[]),f(),l("main",{className:"notverified-container",children:[a("h2",{className:"title",children:"Your email is not verified"}),l("div",{children:["left time to resend ",n]}),a("button",{onClick:()=>{n===0&&(s(60),c(),d(e))},disabled:n!==0,children:"resend messege"}),a("p",{children:"if could not find it check in the Span category"})]})};export{I as default};
