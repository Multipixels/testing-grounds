(self["webpackChunkcffinitv2"]=self["webpackChunkcffinitv2"]||[]).push([[313],{1364:(e,t,a)=>{"use strict";a.d(t,{n:()=>r});var n=a(1959),o=a(3673);const l=(0,n.iH)({});function r(){return{cff:(0,o.Fl)((()=>l.value)),title:(0,o.Fl)((()=>l.value.title)),setTitle:e=>{l.value.title=e},asYAML:(0,o.Fl)((()=>JSON.stringify(l.value,null)))}}},8150:(e,t,a)=>{"use strict";a.d(t,{g:()=>r});var n=a(1959),o=a(3673);const l=(0,n.iH)(1);function r(){return{step:(0,o.Fl)((()=>l.value)),next:()=>{l.value=l.value+1},previous:()=>{l.value=l.value-1},goto:e=>{l.value=e}}}},4200:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(3673),o=a(3671),l=a.n(o);const r=(0,n.Wm)("img",{src:l()},null,-1);function u(e,t,a,o,l,u){const s=(0,n.up)("q-toolbar-title"),p=(0,n.up)("q-toolbar"),c=(0,n.up)("q-footer");return(0,n.wg)(),(0,n.j4)(c,{class:"bg-grey-4 text-white"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[r])),_:1})])),_:1})])),_:1})}const s=(0,n.aZ)({name:"Footer"});var p=a(1762),c=a(9570),i=a(3747),d=a(7518),v=a.n(d);s.render=u;const m=s;v()(s,"components",{QFooter:p.Z,QToolbar:c.Z,QToolbarTitle:i.Z})},7116:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(3673),o=a(2323);function l(e,t,a,l,r,u){const s=(0,n.up)("q-space"),p=(0,n.up)("q-btn"),c=(0,n.up)("q-btn-group"),i=(0,n.up)("q-toolbar-title"),d=(0,n.up)("q-toolbar"),v=(0,n.up)("q-header");return(0,n.wg)(),(0,n.j4)(v,{class:"bg-grey-4 text-black"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Step: "+(0,o.zw)(e.step.step.value)+" ",1),(0,n.Wm)(s),(0,n.Wm)(i,{align:"right"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{flat:""},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{flat:"",color:"",label:"Report an issue","icon-right":"ion-logo-github",type:"a",href:"",target:"_blank"}),(0,n.Wm)(p,{flat:"",color:"",label:"Documentation"}),(0,n.Wm)(p,{flat:"",color:"",label:"About"})])),_:1})])),_:1})])),_:1})])),_:1})}var r=a(8150);const u=(0,n.aZ)({name:"Header",setup(){const e=(0,r.g)();return{step:e}}});var s=a(3812),p=a(9570),c=a(2025),i=a(3747),d=a(6375),v=a(9892),m=a(7518),f=a.n(m);u.render=l;const g=u;f()(u,"components",{QHeader:s.Z,QToolbar:p.Z,QSpace:c.Z,QToolbarTitle:i.Z,QBtnGroup:d.Z,QBtn:v.Z})},2313:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>U});var n=a(3673);const o=(0,n.HX)("data-v-338ae43a");(0,n.dD)("data-v-338ae43a");const l={class:"row window-height"},r={class:"col-2"},u={class:"col-6"},s={class:"col-4"};(0,n.Cn)();const p=o(((e,t,a,p,c,i)=>{const d=(0,n.up)("Header"),v=(0,n.up)("Stepper"),m=(0,n.up)("router-view"),f=(0,n.up)("Preview"),g=(0,n.up)("q-page"),w=(0,n.up)("q-page-container"),W=(0,n.up)("Footer"),b=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(b,{view:"hhh lpr fff"},{default:o((()=>[(0,n.Wm)(d),(0,n.Wm)(w,null,{default:o((()=>[(0,n.Wm)(g,null,{default:o((()=>[(0,n.Wm)("div",l,[(0,n.Wm)("div",r,[(0,n.Wm)(v)]),(0,n.Wm)("div",u,[(0,n.Wm)(m)]),(0,n.Wm)("div",s,[(0,n.Wm)(f)])])])),_:1})])),_:1}),(0,n.Wm)(W)])),_:1})}));var c=a(7116),i=a(4200),d=a(2323);const v=(0,n.HX)("data-v-0f959576");(0,n.dD)("data-v-0f959576");const m={class:"q-pa-md"},f=(0,n.Uk)(" This step won't show up because it is disabled. ");(0,n.Cn)();const g=v(((e,t,a,o,l,r)=>{const u=(0,n.up)("q-step"),s=(0,n.up)("q-stepper");return(0,n.wg)(),(0,n.j4)("div",m,[(0,n.Wm)(s,{"model-value":o.step.step,"onUpdate:modelValue":o.updateStep,ref:"stepper",vertical:"",animated:"","header-nav":"",flat:"","active-icon":"","inactive-icon":"star"},{default:v((()=>[(0,n.Wm)(u,{title:"Start",icon:"star",name:1,done:o.step.step.value>1},null,8,["done"]),(0,n.Wm)(u,{title:"Authors",icon:"done_all",name:2,done:o.step.step.value>2},null,8,["done"]),(0,n.Wm)(u,{name:100,title:"Finish",icon:"expand_more",disable:""},{default:v((()=>[f])),_:1})])),_:1},8,["model-value","onUpdate:modelValue"]),(0,n.Uk)(" Step: "+(0,d.zw)(o.step.step.value),1)])}));var w=a(9582),W=a(8150);const b={setup(){const e=(0,W.g)(),t=(0,w.tv)(),a=a=>{e.goto(a);const n=`/${e.step.value}`;return t.push({path:n})};return{step:e,updateStep:a}}};var Z=a(3518),h=a(4340),_=a(7518),q=a.n(_);b.render=g,b.__scopeId="data-v-0f959576";const Q=b;function S(e,t,a,o,l,r){const u=(0,n.up)("q-card-section"),s=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)("pre",null,(0,d.zw)(e.yaml),1)])),_:1})])),_:1})}q()(b,"components",{QStepper:Z.Z,QStep:h.Z});var k=a(1364);const y=(0,n.aZ)({name:"Preview",setup(){const e=(0,k.n)();return{yaml:e.asYAML}}});var F=a(151),H=a(5589);y.render=S;const T=y;q()(y,"components",{QCard:F.Z,QCardSection:H.Z});const C=(0,n.aZ)({name:"MainLayout",components:{Header:c.Z,Footer:i.Z,Stepper:Q,Preview:T},setup(){return{}}});var j=a(2936),x=a(2652),P=a(4379);C.render=p,C.__scopeId="data-v-338ae43a";const U=C;q()(C,"components",{QLayout:j.Z,QPageContainer:x.Z,QPage:P.Z})},3671:(e,t,a)=>{e.exports=a.p+"img/nlesc-logo.178a8903.svg"}}]);