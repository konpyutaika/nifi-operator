"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[34935],{5671:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"2_setup/2_platform_setup/2_k3d","title":"K3D","description":"Follow these instructions to prepare k3d for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications.","source":"@site/versioned_docs/version-v0.13.0/2_setup/2_platform_setup/2_k3d.md","sourceDirName":"2_setup/2_platform_setup","slug":"/2_setup/2_platform_setup/2_k3d","permalink":"/nifikop/docs/v0.13.0/2_setup/2_platform_setup/2_k3d","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/2_setup/2_platform_setup/2_k3d.md","tags":[],"version":"v0.13.0","lastUpdatedBy":"Alexandre Guitton","lastUpdatedAt":1660941078000,"frontMatter":{"id":"2_k3d","title":"K3D","sidebar_label":"K3D"},"sidebar":"docs","previous":{"title":"Google Kubernetes Engine","permalink":"/nifikop/docs/v0.13.0/2_setup/2_platform_setup/1_gke"},"next":{"title":"Customizable install with Helm","permalink":"/nifikop/docs/v0.13.0/2_setup/3_install/1_customizable_install_with_helm"}}');var n=s(62540),r=s(43023);const o={id:"2_k3d",title:"K3D",sidebar_label:"K3D"},l=void 0,a={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation steps",id:"installation-steps",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Follow these instructions to prepare k3d for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Administrative privileges are required to run k3d."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation-steps",children:"Installation steps"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Install the latest version of ",(0,n.jsx)(t.a,{href:"https://k3d.io/v5.3.0/#installation",children:"k3d"}),", version 5.3.0 or later."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create your Kubernetes cluster. This example uses Kubernetes version 1.21.10. You can change the version to any Kubernetes version supported by NiFiKop by altering the --kubernetes-version value:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"k3d cluster create --image rancher/k3s:v1.21.10-k3s1 --wait\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Expose your NiFi cluster:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'k3d cluster edit k3s-default --port-add "<nifi_cluster_port>:<nifi_cluster_port>@loadbalancer"\n'})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},43023:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var i=s(63696);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);