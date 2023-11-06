"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[16522],{51104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(24246),a=n(71670);const o={id:"2_v0.14.1_to_v0.15.0",title:"v0.14.1 to v0.15.0",sidebar_label:"v0.14.1 to v0.15.0"},s=void 0,r={id:"7_upgrade_guides/2_v0.14.1_to_v0.15.0",title:"v0.14.1 to v0.15.0",description:"PR #189 changed the default Zookeeper init container image changed from busybox to bash. If you have overridden the NifiCluster.Spec.InitContainerImage then you need to change it to bash or one that contains a bash shell.",source:"@site/versioned_docs/version-v1.3.0/7_upgrade_guides/2_v0.14.1_to_v0.15.0.md",sourceDirName:"7_upgrade_guides",slug:"/7_upgrade_guides/2_v0.14.1_to_v0.15.0",permalink:"/nifikop/docs/v1.3.0/7_upgrade_guides/2_v0.14.1_to_v0.15.0",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.3.0/7_upgrade_guides/2_v0.14.1_to_v0.15.0.md",tags:[],version:"v1.3.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1692604575,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{id:"2_v0.14.1_to_v0.15.0",title:"v0.14.1 to v0.15.0",sidebar_label:"v0.14.1 to v0.15.0"},sidebar:"docs",previous:{title:"v0.7.x to v0.8.0",permalink:"/nifikop/docs/v1.3.0/7_upgrade_guides/1_v0.7.x_to_v0.8.0"},next:{title:"v0.16.0 to v1.0.0",permalink:"/nifikop/docs/v1.3.0/7_upgrade_guides/3_v0.16.0_to_v1.0.0"}},d={},c=[{value:"Getting started",id:"getting-started",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/konpyutaika/nifikop/pull/189",children:"PR #189"})," changed the default Zookeeper init container image changed from ",(0,i.jsx)(t.code,{children:"busybox"})," to ",(0,i.jsx)(t.code,{children:"bash"}),". If you have overridden the ",(0,i.jsx)(t.code,{children:"NifiCluster.Spec.InitContainerImage"})," then you need to change it to ",(0,i.jsx)(t.code,{children:"bash"})," or one that contains a bash shell."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't overridden the default ",(0,i.jsx)(t.code,{children:"NifiCluster.Spec.InitContainerImage"}),", then there are no special upgrade instructions. If you have, like for example below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  initContainerImage:\n    repository: busybox\n    tag: "1.34.0"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Then you must change it to ",(0,i.jsx)(t.code,{children:"bash"})," or an image that contains a bash shell:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  initContainerImage:\n    repository: bash\n    tag: "5.2.2"\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(27378);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);