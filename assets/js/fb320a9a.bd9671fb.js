"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[77174],{66166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=t(24246),a=t(71670);t(23930),t(39798);const s={id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},i=void 0,o={id:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",title:"Quick start",description:"Create custom storage class",source:"@site/versioned_docs/version-v1.4.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",permalink:"/nifikop/docs/v1.4.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.4.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md",tags:[],version:"v1.4.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1695033526,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},sidebar:"docs",previous:{title:"Design Principles",permalink:"/nifikop/docs/v1.4.0/3_manage_nifi/1_manage_clusters/0_design_principles"},next:{title:"Nodes configuration",permalink:"/nifikop/docs/v1.4.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration"}},l={},u=[{value:"Create custom storage class",id:"create-custom-storage-class",level:2},{value:"Install Zookeeper",id:"install-zookeeper",level:2},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster",level:2},{value:"On OpenShift",id:"on-openshift",level:3},{value:"Install Zookeeper",id:"install-zookeeper-1",level:4},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster-1",level:4}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-custom-storage-class",children:"Create custom storage class"}),"\n",(0,r.jsxs)(n.p,{children:["We recommend to use a ",(0,r.jsx)(n.strong,{children:"custom StorageClass"})," to leverage the volume binding mode ",(0,r.jsx)(n.code,{children:"WaitForFirstConsumer"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Remember to set your NiFiCluster CR properly to use the newly created StorageClass."})}),"\n",(0,r.jsx)(n.p,{children:"As a pre-requisite NiFi requires Zookeeper so you need to first have a Zookeeper cluster if you don't already have one."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["We believe in the ",(0,r.jsx)(n.code,{children:"separation of concerns"})," principle, thus the NiFi operator does not install nor manage Zookeeper."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-zookeeper",children:"Install Zookeeper"}),"\n",(0,r.jsxs)(n.p,{children:["To install Zookeeper we recommend using the ",(0,r.jsx)(n.a,{href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper",children:"Bitnami's Zookeeper chart"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm install zookeeper bitnami/zookeeper \\\n    --namespace=zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --create-namespace\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Replace the ",(0,r.jsx)(n.code,{children:"storageClass"})," parameter value with your own."]})}),"\n",(0,r.jsx)(n.h2,{id:"deploy-nifi-cluster",children:"Deploy NiFi cluster"}),"\n",(0,r.jsx)(n.p,{children:"And after you can deploy a simple NiFi cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"on-openshift",children:"On OpenShift"}),"\n",(0,r.jsx)(n.h4,{id:"install-zookeeper-1",children:"Install Zookeeper"}),"\n",(0,r.jsx)(n.p,{children:"We need to get the uid/gid for the RunAsUser and the fsGroup for the namespace we deploy zookeeper in."}),"\n",(0,r.jsx)(n.p,{children:"Get the zookeeper allowed uid/gid."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zookeper_uid=$(kubectl get namespace zookeeper -o=jsonpath='{.metadata.annotations.openshift\\.io/sa\\.scc\\.supplemental-groups}' | sed 's/\\/10000$//' | tr -d '[:space:]')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the runAsUser and fsGroup Parameter on install of zookeeper."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm install zookeeper bitnami/zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --set containerSecurityContext.runAsUser=$zookeper_uid \\\n    --set podSecurityContext.fsGroup=$zookeper_uid\n"})}),"\n",(0,r.jsx)(n.h4,{id:"deploy-nifi-cluster-1",children:"Deploy NiFi cluster"}),"\n",(0,r.jsx)(n.p,{children:"And after you can deploy a simple NiFi cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n### On OpenShift\n\nWe need to get the uid/gid for the RunAsUser and the fsGroup for the namespace we deploy our nificluster in.\n\n```bash\nuid=$(kubectl get namespace nifi -o=jsonpath='{.metadata.annotations.openshift\\.io/sa\\.scc\\.supplemental-groups}' | sed 's/\\/10000$//' | tr -d '[:space:]')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then update the config/samples/openshift file with our uid value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sed -i "s/1000690000/$uid/g" config/samples/openshift.yaml\n'})}),"\n",(0,r.jsx)(n.p,{children:"And after you can deploy a simple NiFi cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl create -n nifi -f config/samples/openshift.yaml\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},39798:(e,n,t)=>{t.d(n,{Z:()=>i});t(27378);var r=t(38944);const a={tabItem:"tabItem_wHwb"};var s=t(24246);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},23930:(e,n,t)=>{t.d(n,{Z:()=>x});var r=t(27378),a=t(38944),s=t(83457),i=t(3620),o=t(9834),l=t(30654),u=t(70784),c=t(71819);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,s=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function f(e){var n,t,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,f=p(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),v=g[0],b=g[1],_=h({queryString:u,groupId:d}),k=_[0],y=_[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],s=t[1],[a,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),j=x[0],w=x[1],N=function(){var e=null!=k?k:j;return m({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){N&&b(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),w(e)}),[y,w,f]),tabValues:f}}var g=t(76457);const v={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=t(24246);function _(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(u(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(_,Object.assign({},e,n)),(0,b.jsx)(k,Object.assign({},e,n))]})}function x(e){var n=(0,g.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},71670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(27378);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);