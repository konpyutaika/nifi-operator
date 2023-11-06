"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83459],{6881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(24246),r=n(71670),s=n(23930),i=n(39798);const o={id:"1_getting_started",title:"Getting Started",sidebar_label:"Getting Started"},l=void 0,c={id:"2_setup/1_getting_started",title:"Getting Started",description:"The operator installs the 1.12.1 version of Apache NiFi, can run on Minikube v0.33.1+ and Kubernetes 1.21.0+, and require Helm 3.",source:"@site/versioned_docs/version-v0.11.0/2_setup/1_getting_started.md",sourceDirName:"2_setup",slug:"/2_setup/1_getting_started",permalink:"/nifikop/docs/v0.11.0/2_setup/1_getting_started",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/2_setup/1_getting_started.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1694775175,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{id:"1_getting_started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/nifikop/docs/v0.11.0/1_concepts/4_roadmap"},next:{title:"Google Kubernetes Engine",permalink:"/nifikop/docs/v0.11.0/2_setup/2_platform_setup/1_gke"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Zookeeper",id:"install-zookeeper",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Installation",id:"installation",level:2},{value:"Installing with Helm",id:"installing-with-helm",level:2},{value:"Create custom storage class",id:"create-custom-storage-class",level:2},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster",level:2}];function p(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The operator installs the 1.12.1 version of Apache NiFi, can run on Minikube v0.33.1+ and ",(0,a.jsx)(t.strong,{children:"Kubernetes 1.21.0+"}),", and require ",(0,a.jsx)(t.strong,{children:"Helm 3"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The operator supports NiFi 1.11.0+"})}),"\n",(0,a.jsx)(t.p,{children:"As a pre-requisite it needs a Kubernetes cluster. Also, NiFi requires Zookeeper so you need to first have a Zookeeper cluster if you don't already have one."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["We believe in the ",(0,a.jsx)(t.code,{children:"separation of concerns"})," principle, thus the NiFi operator does not install nor manage Zookeeper."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.h3,{id:"install-zookeeper",children:"Install Zookeeper"}),"\n",(0,a.jsxs)(t.p,{children:["To install Zookeeper we recommend using the ",(0,a.jsx)(t.a,{href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper",children:"Bitnami's Zookeeper chart"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"helm install zookeeper bitnami/zookeeper \\\n    --namespace=zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --create-namespace\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["Replace the ",(0,a.jsx)(t.code,{children:"storageClass"})," parameter value with your own."]})}),"\n",(0,a.jsx)(t.h3,{id:"install-cert-manager",children:"Install cert-manager"}),"\n",(0,a.jsxs)(t.p,{children:["The NiFiKop operator uses ",(0,a.jsx)(t.code,{children:"cert-manager"})," for issuing certificates to users and and nodes, so you'll need to have it setup in case you want to deploy a secured cluster with authentication enabled. The minimum supported cert-manager version is v1.0."]}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"directly",values:[{label:"Directly",value:"directly"},{label:"helm 3",value:"helm3"}],children:[(0,a.jsx)(i.Z,{value:"directly",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Install the CustomResourceDefinitions and cert-manager itself\nkubectl apply -f \\\n    https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.yaml\n"})})}),(0,a.jsx)(i.Z,{value:"helm3",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Install CustomResourceDefinitions first\nkubectl apply --validate=false -f \\\n   https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.crds.yaml\n\n# Add the jetstack helm repo\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# You have to create the namespace before executing following command\nhelm install cert-manager \\\n    --namespace cert-manager \\\n    --version v1.7.2 jetstack/cert-manager\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(t.h2,{id:"installing-with-helm",children:"Installing with Helm"}),"\n",(0,a.jsxs)(t.p,{children:["You can deploy the operator using a Helm chart ",(0,a.jsx)(t.a,{href:"https://github.com/konpyutaika/nifikop/tree/master/helm",children:"Helm chart"}),":"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["To install an other version of the operator use ",(0,a.jsx)(t.code,{children:"helm install --name=nifikop --namespace=nifi --set operator.image.tag=x.y.z konpyutaika-incubator/nifikop"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["In the case where you don't want to deploy the crds using helm (",(0,a.jsx)(t.code,{children:"--skip-crds"}),"), you have to deploy manually the crds :"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now deploy the helm chart :"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# You have to create the namespace before executing following command\nhelm install nifikop \\\n    oci://ghcr.io/konpyutaika/helm-charts/nifikop \\\n    --namespace=nifi \\\n    --version 0.11.0 \\\n    --set image.tag=v0.11.0-release \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set namespaces={"nifi"}\n'})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Add the following parameter if you are using this instance to only deploy unsecured clusters : ",(0,a.jsx)(t.code,{children:"--set certManager.enabled=false"})]})}),"\n",(0,a.jsx)(t.h2,{id:"create-custom-storage-class",children:"Create custom storage class"}),"\n",(0,a.jsxs)(t.p,{children:["We recommend to use a ",(0,a.jsx)(t.strong,{children:"custom StorageClass"})," to leverage the volume binding mode ",(0,a.jsx)(t.code,{children:"WaitForFirstConsumer"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Remember to set your NiFiCluster CR properly to use the newly created StorageClass."})}),"\n",(0,a.jsx)(t.h2,{id:"deploy-nifi-cluster",children:"Deploy NiFi cluster"}),"\n",(0,a.jsx)(t.p,{children:"And after you can deploy a simple NiFi cluster."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},39798:(e,t,n)=>{n.d(t,{Z:()=>i});n(27378);var a=n(38944);const r={tabItem:"tabItem_wHwb"};var s=n(24246);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},23930:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(27378),r=n(38944),s=n(83457),i=n(3620),o=n(9834),l=n(30654),c=n(70784),u=n(71819);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function f(e){var t,n,r,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=p(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),b=g[0],v=g[1],k=m({queryString:c,groupId:d}),y=k[0],x=k[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),w=j[0],_=j[1],N=function(){var e=null!=y?y:w;return h({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),x(e),_(e)}),[x,_,f]),tabValues:f}}var g=n(76457);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=n(24246);function k(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function x(e){var t=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(k,Object.assign({},e,t)),(0,v.jsx)(y,Object.assign({},e,t))]})}function j(e){var t=(0,g.Z)();return(0,v.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},71670:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(27378);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);