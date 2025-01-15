"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71348],{4867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start","title":"Quick start","description":"Create custom storage class","source":"@site/versioned_docs/version-v1.11.3/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md","sourceDirName":"3_manage_nifi/1_manage_clusters/1_deploy_cluster","slug":"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start","permalink":"/nifikop/docs/v1.11.3/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.11.3/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md","tags":[],"version":"v1.11.3","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1731506969000,"frontMatter":{"id":"1_quick_start","title":"Quick start","sidebar_label":"Quick start"},"sidebar":"docs","previous":{"title":"Design Principles","permalink":"/nifikop/docs/v1.11.3/3_manage_nifi/1_manage_clusters/0_design_principles"},"next":{"title":"Nodes configuration","permalink":"/nifikop/docs/v1.11.3/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration"}}');var r=t(62540),s=t(43023);t(65457),t(97265);const i={id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},o=void 0,l={},c=[{value:"Create custom storage class",id:"create-custom-storage-class",level:2},{value:"State management",id:"state-management",level:2},{value:"Installing Zookeeper",id:"installing-zookeeper",level:3},{value:"On OpenShift",id:"on-openshift",level:4},{value:"Enabling Kubernetes State Management",id:"enabling-kubernetes-state-management",level:3},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster",level:2},{value:"On OpenShift",id:"on-openshift-1",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"create-custom-storage-class",children:"Create custom storage class"}),"\n",(0,r.jsxs)(n.p,{children:["We recommend to use a ",(0,r.jsx)(n.strong,{children:"custom StorageClass"})," to leverage the volume binding mode ",(0,r.jsx)(n.code,{children:"WaitForFirstConsumer"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Remember to set your NiFiCluster CR properly to use the newly created StorageClass."})}),"\n",(0,r.jsx)(n.h2,{id:"state-management",children:"State management"}),"\n",(0,r.jsxs)(n.p,{children:["To manage its cluster and states, NiFi needs Zookeeper or rights on the Kubernetes cluster to manage ",(0,r.jsx)(n.code,{children:"Leases"})," and ",(0,r.jsx)(n.code,{children:"ConfigMaps"})," resources in the namespace where it is deployed."]}),"\n",(0,r.jsxs)(n.p,{children:["In the case of Zookeeper, you must first have a Zookeeper cluster if you don't already have one.\nOtherwise, you need to provide the corresponding role to the NiFi cluster's ",(0,r.jsx)(n.code,{children:"ServiceAccount"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["We believe in the ",(0,r.jsx)(n.code,{children:"separation of concerns"})," principle, thus the NiFi operator does not install nor manage Zookeeper."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installing-zookeeper",children:"Installing Zookeeper"}),"\n",(0,r.jsxs)(n.p,{children:["To install Zookeeper we recommend using the ",(0,r.jsx)(n.a,{href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper",children:"Bitnami's Zookeeper chart"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm install zookeeper oci://registry-1.docker.io/bitnamicharts/zookeeper \\\n    --namespace=zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --create-namespace\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Replace the ",(0,r.jsx)(n.code,{children:"storageClass"})," parameter value with your own."]})}),"\n",(0,r.jsx)(n.h4,{id:"on-openshift",children:"On OpenShift"}),"\n",(0,r.jsx)(n.p,{children:"We need to get the uid/gid for the RunAsUser and the fsGroup for the namespace we deploy zookeeper in."}),"\n",(0,r.jsx)(n.p,{children:"Get the zookeeper allowed uid/gid."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"zookeper_uid=$(kubectl get namespace zookeeper -o=jsonpath='{.metadata.annotations.openshift\\.io/sa\\.scc\\.supplemental-groups}' | sed 's/\\/10000$//' | tr -d '[:space:]')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the runAsUser and fsGroup Parameter on install of zookeeper."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm install zookeeper oci://registry-1.docker.io/bitnamicharts/zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --set containerSecurityContext.runAsUser=$zookeper_uid \\\n    --set podSecurityContext.fsGroup=$zookeper_uid\n"})}),"\n",(0,r.jsx)(n.h3,{id:"enabling-kubernetes-state-management",children:"Enabling Kubernetes State Management"}),"\n",(0,r.jsxs)(n.p,{children:["When using native Kubernetes State Management from NiFi, you need to make sure that the ",(0,r.jsx)(n.code,{children:"ServiceAccount"})," used by NiFi has the correct rights to manage the needed Kubernetes resources."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: simplenifi\n  namespace: nifi\nrules:\n- apiGroups: ["coordination.k8s.io"]\n  resources: ["leases"]\n  verbs: ["*"]\n- apiGroups: [""]\n  resources: ["configmaps"]\n  verbs: ["*"]\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: simplenifi\n  namespace: nifi\nsubjects:\n  - kind: ServiceAccount\n    name: default\n    namespace: nifi\nroleRef:\n  kind: Role\n  name: simplenifi\n  apiGroup: rbac.authorization.k8s.io\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["In this case, you need to set ",(0,r.jsx)(n.code,{children:"clusterManager"})," in ",(0,r.jsx)(n.code,{children:"NiFiCluster"}),"'s specification to ",(0,r.jsx)(n.code,{children:"kubernetes"}),".\nYou can also use the Helm chart to create your cluster and it will take care of it for you."]})}),"\n",(0,r.jsx)(n.h2,{id:"deploy-nifi-cluster",children:"Deploy NiFi cluster"}),"\n",(0,r.jsx)(n.p,{children:"And after you can deploy a simple NiFi cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"on-openshift-1",children:"On OpenShift"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n### On OpenShift\n\nWe need to get the uid/gid for the RunAsUser and the fsGroup for the namespace we deploy our nificluster in.\n\n```bash\nuid=$(kubectl get namespace nifi -o=jsonpath='{.metadata.annotations.openshift\\.io/sa\\.scc\\.supplemental-groups}' | sed 's/\\/10000$//' | tr -d '[:space:]')\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then update the config/samples/openshift file with our uid value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sed -i "s/1000690000/$uid/g" config/samples/openshift.yaml\n'})}),"\n",(0,r.jsx)(n.p,{children:"And after you can deploy a simple NiFi cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl create -n nifi -f config/samples/openshift.yaml\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},97265:(e,n,t)=>{t.d(n,{A:()=>i});t(63696);var a=t(11750);const r={tabItem:"tabItem_wHwb"};var s=t(62540);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},65457:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(63696),r=t(11750),s=t(93707),i=t(49519),o=t(83604),l=t(95196),c=t(76229),u=t(88030);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.W6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function f(e){var n,t,r,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=p(e),g=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),b=g[0],v=g[1],k=m({queryString:c,groupId:d}),x=k[0],_=k[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Dv)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),j=y[0],w=y[1],N=function(){var e=null!=x?x:j;return h({value:e,tabValues:f})?e:null}();return(0,o.A)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),_(e),w(e)}),[_,w,f]),tabValues:f}}var g=t(95200);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=t(62540);function k(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.A)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,s=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===s}));return o?(0,a.cloneElement)(o,{className:(0,r.A)("margin-top--md",o.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function _(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(k,Object.assign({},n,e)),(0,v.jsx)(x,Object.assign({},n,e))]})}function y(e){var n=(0,g.A)();return(0,v.jsx)(_,Object.assign({},e,{children:d(e.children)}),String(n))}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(63696);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);