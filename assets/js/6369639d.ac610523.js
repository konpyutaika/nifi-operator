"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[19323],{77015:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"1_concepts/2_design_principes","title":"Design Principes","description":"Pod level management","source":"@site/versioned_docs/version-v0.14.0/1_concepts/2_design_principes.md","sourceDirName":"1_concepts","slug":"/1_concepts/2_design_principes","permalink":"/nifikop/docs/v0.14.0/1_concepts/2_design_principes","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.0/1_concepts/2_design_principes.md","tags":[],"version":"v0.14.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"2_design_principes","title":"Design Principes","sidebar_label":"Design Principes"},"sidebar":"docs","previous":{"title":"Introduction","permalink":"/nifikop/docs/v0.14.0/1_concepts/1_introduction"},"next":{"title":"Features","permalink":"/nifikop/docs/v0.14.0/1_concepts/3_features"}}');var s=n(62540),o=n(43023);const r={id:"2_design_principes",title:"Design Principes",sidebar_label:"Design Principes"},a=void 0,l={},c=[{value:"Pod level management",id:"pod-level-management",level:2},{value:"Dataflow Lifecycle management",id:"dataflow-lifecycle-management",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"pod-level-management",children:"Pod level management"}),"\n",(0,s.jsxs)(i.p,{children:["NiFi is a stateful application. The first piece of the puzzle is the Node, which is a simple server capable of createing/forming a cluster with other Nodes. Every Node has his own ",(0,s.jsx)(i.strong,{children:"unique"})," configuration which differs slightly from all others."]}),"\n",(0,s.jsxs)(i.p,{children:["All NiFi on Kubernetes setup use ",(0,s.jsx)(i.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/",children:"StatefulSet"})," to create a NiFi Cluster. Just to quickly recap from the K8s docs:"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"StatefulSet manages the deployment and scaling of a set of Pods, and provide guarantees about their ordering and uniqueness. Like a Deployment, a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains sticky identities for each of its Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that is maintained across any rescheduling."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"How does this looks from the perspective of Apache NiFi ?"}),"\n",(0,s.jsx)(i.p,{children:"With StatefulSet we get:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"unique Node IDs generated during Pod startup"}),"\n",(0,s.jsx)(i.li,{children:"networking between Nodes with headless services"}),"\n",(0,s.jsx)(i.li,{children:"unique Persistent Volumes for Nodes"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Using StatefulSet we ",(0,s.jsx)(i.strong,{children:"lose"}),"  the ability to:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"modify the configuration of unique Nodes"}),"\n",(0,s.jsx)(i.li,{children:"remove a specific Node from a cluster (StatefulSet always removes the most recently created Node)"}),"\n",(0,s.jsx)(i.li,{children:"use multiple, different Persistent Volumes for each Node"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The NiFi Operator uses ",(0,s.jsx)(i.code,{children:"simple"})," Pods, ConfigMaps, and PersistentVolumeClaims, instead of StatefulSet (based on the design used by ",(0,s.jsx)(i.a,{href:"https://github.com/banzaicloud/kafka-operator",children:"Banzai Cloud Kafka Operator"}),").\nUsing these resources allows us to build an Operator which is better suited to NiFi."]}),"\n",(0,s.jsx)(i.p,{children:"With the NiFi operator we can:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"modify the configuration of unique Nodes"}),"\n",(0,s.jsx)(i.li,{children:"remove specific Nodes from clusters"}),"\n",(0,s.jsx)(i.li,{children:"use multiple Persistent Volumes for each Node"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"dataflow-lifecycle-management",children:"Dataflow Lifecycle management"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.a,{href:"/nifikop/docs/v0.14.0/1_concepts/3_features#dataflow-lifecycle-management-via-crd",children:"Dataflow Lifecycle management feature"})," introduces 3 new CRDs:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"NiFiRegistryClient:"})," Allowing you to declare a ",(0,s.jsx)(i.a,{href:"https://nifi.apache.org/docs/nifi-registry-docs/html/getting-started.html#connect-nifi-to-the-registry",children:"NiFi registry client"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"NiFiParameterContext:"})," Allowing you to create parameter context, with two kinds of parameters, a simple ",(0,s.jsx)(i.code,{children:"map[string]string"})," for non-sensitive parameters and a ",(0,s.jsx)(i.code,{children:"list of secrets"})," which contains sensitive parameters."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"NiFiDataflow:"})," Allowing you to declare a Dataflow based on a ",(0,s.jsx)(i.code,{children:"NiFiRegistryClient"})," and optionally a ",(0,s.jsx)(i.code,{children:"ParameterContext"}),", which will be deployed and managed by the operator on the ",(0,s.jsx)(i.code,{children:"targeted NiFi cluster"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"The following diagram shows the interactions between all the components:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"dataflow lifecycle management schema",src:n(12671).A+"",width:"1123",height:"1101"})}),"\n",(0,s.jsx)(i.p,{children:"With each CRD comes a new controller, with a reconcile loop:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"NiFiRegistryClient's controller:"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"NiFi registry client&#39;s reconcile loop",src:n(31992).A+"",width:"682",height:"642"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"NiFiParameterContext's controller:"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"NiFi parameter context&#39;s reconcile loop",src:n(21668).A+"",width:"922",height:"829"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"NiFiDataflow's controller:"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"NiFi dataflow&#39;s reconcile loop",src:n(33043).A+"",width:"3146",height:"4117"})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},12671:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/dataflow_lifecycle_management_schema-e39196d2242598106229e66f18e8826d.jpg"},33043:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/dataflow_reconcile_loop-7b564f9232c78a2c651094a8005ba6a8.jpeg"},21668:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/parameter_context_reconcile_loop-0b9f053e9cb447162535e03e5f5e9fbd.jpeg"},31992:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/registry_client_reconcile_loop-0b8e528b249cd93e61f4186050c59c02.jpeg"},43023:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(63696);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);