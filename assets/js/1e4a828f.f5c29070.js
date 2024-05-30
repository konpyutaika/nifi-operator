"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[14680],{32250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(62540),i=n(43023),a=n(78296),s=n(22491);const l={id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},o=void 0,c={id:"2_deploy_nifikop/1_quick_start",title:"Quick start",description:"For information about versions compatibilty of the operator features with Kubernetes and Apache NiFi, let's have look of the version compatibility page",source:"@site/versioned_docs/version-v0.16.0/2_deploy_nifikop/1_quick_start.md",sourceDirName:"2_deploy_nifikop",slug:"/2_deploy_nifikop/1_quick_start",permalink:"/nifikop/docs/v0.16.0/2_deploy_nifikop/1_quick_start",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.16.0/2_deploy_nifikop/1_quick_start.md",tags:[],version:"v0.16.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987e3,frontMatter:{id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/nifikop/docs/v0.16.0/1_concepts/4_roadmap"},next:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v0.16.0/2_deploy_nifikop/2_customizable_install_with_helm"}},u={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Cluster Setup",id:"cluster-setup",level:3},{value:"Install kubectl",id:"install-kubectl",level:3},{value:"Configure kubectl",id:"configure-kubectl",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:2},{value:"Deploy NiFiKop",id:"deploy-nifikop",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["For information about versions compatibilty of the operator features with Kubernetes and Apache NiFi, let's have look of the ",(0,r.jsx)(t.a,{href:"../4_compatibility_versions",children:"version compatibility page"})]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.h3,{id:"cluster-setup",children:"Cluster Setup"}),"\n",(0,r.jsx)(t.p,{children:"For local testing we recommend following one of the following setup guides:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://docs.docker.com/desktop/kubernetes",children:"Docker Desktop (Mac)"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://minikube.sigs.k8s.io/docs/start",children:"Minikube"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Start Minikube with at least 4gb RAM with ",(0,r.jsx)(t.code,{children:"minikube start --memory=4000"})]})}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"Kind"})}),"\n",(0,r.jsxs)(t.li,{children:["For testing on GKE you can ",(0,r.jsx)(t.a,{href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster",children:"create a cluster with the command line or the Cloud Console UI"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["For testing on EKS you can ",(0,r.jsx)(t.a,{href:"https://eksctl.io/introduction/",children:"install eksctl"})," and run ",(0,r.jsx)(t.code,{children:"eksctl create cluster"})," to create an EKS cluster/VPC/subnets/etc. This process should take 10-15 minutes."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"install-kubectl",children:"Install kubectl"}),"\n",(0,r.jsxs)(t.p,{children:["If you do not already have the CLI tool ",(0,r.jsx)(t.code,{children:"kubectl"})," installed, please follow ",(0,r.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"these instructions to install"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"configure-kubectl",children:"Configure kubectl"}),"\n",(0,r.jsxs)(t.p,{children:["Configure ",(0,r.jsx)(t.code,{children:"kubectl"})," to connect to your cluster by using ",(0,r.jsx)(t.code,{children:"kubectl config use-context my-cluster-name"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For GKE","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Configure ",(0,r.jsx)(t.code,{children:"gcloud"})," with ",(0,r.jsx)(t.code,{children:"gcloud auth login"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["On the Google Cloud Console, the cluster page will have a ",(0,r.jsx)(t.code,{children:"Connect"})," button, which will give a command to run locally that looks like"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"gcloud container clusters get-credentials CLUSTER_NAME --zone ZONE_NAME --project PROJECT_NAME.\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.code,{children:"kubectl config get-contexts"})," to show the contexts available."]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"kubectl config use-context ${gke context}"})," to access the cluster from ",(0,r.jsx)(t.code,{children:"kubectl"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["For EKS","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"Configure your AWS CLI"})," to connect to your project."]}),"\n",(0,r.jsxs)(t.li,{children:["Install ",(0,r.jsx)(t.a,{href:"https://eksctl.io/introduction/",children:"eksctl"})]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"eksctl utils write-kubeconfig --cluster=${CLUSTER NAME}"})," to make the context available to ",(0,r.jsx)(t.code,{children:"kubectl"})]}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.code,{children:"kubectl config get-context"}),"s to show the contexts available."]}),"\n",(0,r.jsxs)(t.li,{children:["Run ",(0,r.jsx)(t.code,{children:"kubectl config use-context ${eks context}"})," to access the cluster with ",(0,r.jsx)(t.code,{children:"kubectl"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"install-cert-manager",children:"Install cert-manager"}),"\n",(0,r.jsxs)(t.p,{children:["The NiFiKop operator uses ",(0,r.jsx)(t.code,{children:"cert-manager"})," for issuing certificates to users and and nodes, so you'll need to have it setup in case you want to deploy a secured cluster with authentication enabled. The minimum supported cert-manager version is v1.0."]}),"\n",(0,r.jsxs)(a.A,{defaultValue:"directly",values:[{label:"Directly",value:"directly"},{label:"helm 3",value:"helm3"}],children:[(0,r.jsx)(s.A,{value:"directly",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Install the CustomResourceDefinitions and cert-manager itself\nkubectl apply -f \\\n    https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.yaml\n"})})}),(0,r.jsx)(s.A,{value:"helm3",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Install CustomResourceDefinitions first\nkubectl apply --validate=false -f \\\n   https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.crds.yaml\n\n# Add the jetstack helm repo\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# You have to create the namespace before executing following command\nhelm install cert-manager \\\n    --namespace cert-manager \\\n    --version v1.7.2 jetstack/cert-manager\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"deploy-nifikop",children:"Deploy NiFiKop"}),"\n",(0,r.jsxs)(t.p,{children:["You can deploy the operator using a Helm chart ",(0,r.jsx)(t.a,{href:"https://github.com/konpyutaika/nifikop/tree/master/helm",children:"Helm chart"}),":"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["To install an other version of the operator use ",(0,r.jsx)(t.code,{children:"helm install --name=nifikop --namespace=nifi --set operator.image.tag=x.y.z konpyutaika-incubator/nifikop"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the case where you don't want to deploy the crds using helm (",(0,r.jsx)(t.code,{children:"--skip-crds"}),"), you have to deploy manually the crds:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now deploy the helm chart:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# You have to create the namespace before executing following command\nhelm install nifikop \\\n    oci://ghcr.io/konpyutaika/helm-charts/nifikop \\\n    --namespace=nifi \\\n    --version 0.16.0 \\\n    --set image.tag=v0.16.0-release \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set namespaces={"nifi"}\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Add the following parameter if you are using this instance to only deploy unsecured clusters: ",(0,r.jsx)(t.code,{children:"--set certManager.enabled=false"})]})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},22491:(e,t,n)=>{n.d(t,{A:()=>s});n(63696);var r=n(11750);const i={tabItem:"tabItem_wHwb"};var a=n(62540);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},78296:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(63696),i=n(11750),a=n(90766),s=n(49519),l=n(14395),o=n(35043),c=n(44544),u=n(48708);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,a=(0,s.W6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:i});return[(0,o.aZ)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[l,a])]}function m(e){var t,n,i,a,s=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,m=h(e),b=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:m})})),k=b[0],g=b[1],v=f({queryString:c,groupId:d}),x=v[0],j=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Dv)(t),i=n[0],a=n[1],[i,(0,r.useCallback)((function(e){t&&a.set(e)}),[t,a])]),w=y[0],_=y[1],C=function(){var e=null!=x?x:w;return p({value:e,tabValues:m})?e:null}();return(0,l.A)((function(){C&&g(C)}),[C]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),j(e),_(e)}),[j,_,m]),tabValues:m}}var b=n(86681);const k={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=n(62540);function v(e){var t=e.className,n=e.block,r=e.selectedValue,s=e.selectValue,l=e.tabValues,o=[],c=(0,a.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==r&&(c(t),s(i))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,i=o.indexOf(e.currentTarget)+1;n=null!=(r=o[i])?r:o[0];break;case"ArrowLeft":var a,s=o.indexOf(e.currentTarget)-1;n=null!=(a=o[s])?a:o[o.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},a,{className:(0,i.A)("tabs__item",k.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,i=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=a.find((function(e){return e.props.value===i}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})}))})}function j(e){var t=m(e);return(0,g.jsxs)("div",{className:(0,i.A)("tabs-container",k.tabList),children:[(0,g.jsx)(v,Object.assign({},t,e)),(0,g.jsx)(x,Object.assign({},t,e))]})}function y(e){var t=(0,b.A)();return(0,g.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(t))}},43023:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(63696);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);