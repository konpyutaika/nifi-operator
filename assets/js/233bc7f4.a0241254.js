"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4856],{31008:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var i=s(24246),t=s(71670);const n={id:"6_nifi_usergroup",title:"NiFi UserGroup",sidebar_label:"NiFi UserGroup"},d=void 0,c={id:"5_references/6_nifi_usergroup",title:"NiFi UserGroup",description:"NifiUserGroup is the Schema for the nifi user groups API.",source:"@site/versioned_docs/version-v0.16.0/5_references/6_nifi_usergroup.md",sourceDirName:"5_references",slug:"/5_references/6_nifi_usergroup",permalink:"/nifikop/docs/v0.16.0/5_references/6_nifi_usergroup",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.16.0/5_references/6_nifi_usergroup.md",tags:[],version:"v0.16.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1692885742,formattedLastUpdatedAt:"Aug 24, 2023",frontMatter:{id:"6_nifi_usergroup",title:"NiFi UserGroup",sidebar_label:"NiFi UserGroup"},sidebar:"docs",previous:{title:"NiFi Dataflow",permalink:"/nifikop/docs/v0.16.0/5_references/5_nifi_dataflow"},next:{title:"NiFi NodeGroup Autoscaler",permalink:"/nifikop/docs/v0.16.0/5_references/7_nifi_nodegroup_autoscaler"}},l={},h=[{value:"NifiUserGroup",id:"nifiusergroup",level:2},{value:"NifiUserGroupSpec",id:"nifiusergroupspec",level:2},{value:"NifiUserGroupStatus",id:"nifiusergroupstatus",level:2},{value:"UserReference",id:"userreference",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"NifiUserGroup"})," is the Schema for the nifi user groups API."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n    - name: nc-controller.nifikop.mgt.cluster.local\n  accessPolicies:\n    - type: global\n      action: read\n      resource: /counters\n"})}),"\n",(0,i.jsx)(r.h2,{id:"nifiusergroup",children:"NifiUserGroup"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"metadata"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta",children:"ObjectMetadata"})}),(0,i.jsx)(r.td,{children:"is metadata that all persisted resources must have, which includes all objects usergroups must create."}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"nil"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spec"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"#nifiusergroupspec",children:"NifiUserGroupSpec"})}),(0,i.jsx)(r.td,{children:"defines the desired state of NifiUserGroup."}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"nil"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"status"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"#nifiusergroupstatus",children:"NifiUserGroupStatus"})}),(0,i.jsx)(r.td,{children:"defines the observed state of NifiUserGroup."}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"nil"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"nifiusergroupspec",children:"NifiUserGroupSpec"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"clusterRef"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"./2_nifi_user#clusterreference",children:"ClusterReference"})}),(0,i.jsx)(r.td,{children:"contains the reference to the NifiCluster with the one the user is linked."}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"usersRef"}),(0,i.jsxs)(r.td,{children:["[ ]",(0,i.jsx)(r.a,{href:"#userref",children:"UserReference"})]}),(0,i.jsx)(r.td,{children:"contains the list of reference to NifiUsers that are part to the group."}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"[]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"accessPolicies"}),(0,i.jsxs)(r.td,{children:["[ ]",(0,i.jsx)(r.a,{href:"./2_nifi_user#accesspolicy",children:"AccessPolicy"})]}),(0,i.jsx)(r.td,{children:"defines the list of access policies that will be granted to the group."}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"[]"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"nifiusergroupstatus",children:"NifiUserGroupStatus"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"id"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"the nifi usergroup's node id."}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"version"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"the last nifi usergroup's node revision version catched."}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"userreference",children:"UserReference"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Field"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"name"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"name of the NifiUser."}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"namespace"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"the NifiUser namespace location."}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"-"})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},71670:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>d});var i=s(27378);const t={},n=i.createContext(t);function d(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);