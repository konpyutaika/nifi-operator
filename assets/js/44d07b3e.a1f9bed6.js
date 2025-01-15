"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[79188],{82333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"2_deploy_nifikop/2_customizable_install_with_helm","title":"Customizable install with Helm","description":"Prerequisites","source":"@site/versioned_docs/version-v1.5.0/2_deploy_nifikop/2_customizable_install_with_helm.md","sourceDirName":"2_deploy_nifikop","slug":"/2_deploy_nifikop/2_customizable_install_with_helm","permalink":"/nifikop/docs/v1.5.0/2_deploy_nifikop/2_customizable_install_with_helm","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.5.0/2_deploy_nifikop/2_customizable_install_with_helm.md","tags":[],"version":"v1.5.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"2_customizable_install_with_helm","title":"Customizable install with Helm","sidebar_label":"Customizable install with Helm"},"sidebar":"docs","previous":{"title":"Quick start","permalink":"/nifikop/docs/v1.5.0/2_deploy_nifikop/1_quick_start"},"next":{"title":"Kubectl Plugin","permalink":"/nifikop/docs/v1.5.0/2_deploy_nifikop/3_kubectl_plugin"}}');var r=t(62540),s=t(43023),l=t(65457),a=t(97265);const c={id:"2_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},o=void 0,d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Installing the Chart",id:"installing-the-chart",level:3},{value:"Listing deployed charts",id:"listing-deployed-charts",level:3},{value:"Get Status for the helm deployment",id:"get-status-for-the-helm-deployment",level:3},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Install of the CRD",id:"install-of-the-crd",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Perform any necessary ",(0,r.jsx)(n.a,{href:"./1_quick_start",children:"plateform-specific setup"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/helm/helm#install",children:"Install a Helm client"})," with a version higher than 3"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"This Helm chart install NiFiKop the Nifi Kubernetes operator to create/configure/manage NiFi\nclusters in a Kubernetes Namespace."}),"\n",(0,r.jsx)(n.p,{children:"It will use Custom Ressources Definition CRDs:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nificlusters.nifi.konpyutaika.com"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nifiusers.nifi.konpyutaika.com"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nifiusergroups.nifi.konpyutaika.com"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nifiregistryclients.nifi.konpyutaika.com"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nifiparametercontexts.nifi.konpyutaika.com"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nifidataflows.nifi.konpyutaika.com"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nifinodegroupautoscalers.nifi.konpyutaika.com"}),","]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nificonnections.nifi.konpyutaika.com"}),","]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The following tables lists the configurable parameters of the NiFi Operator Helm chart and their default values."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"image.repository"})}),(0,r.jsx)(n.td,{children:"Image"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ghcr.io/konpyutaika/docker-images/nifikop"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"image.tag"})}),(0,r.jsx)(n.td,{children:"Image tag"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"v1.5.0-release"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"image.pullPolicy"})}),(0,r.jsx)(n.td,{children:"Image pull policy"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Always"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"image.imagePullSecrets.enabled"})}),(0,r.jsx)(n.td,{children:"Enable tue use of secret for docker image"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"image.imagePullSecrets.name"})}),(0,r.jsx)(n.td,{children:"Name of the secret to connect to docker registry"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"certManager.enabled"})}),(0,r.jsx)(n.td,{children:"Enable cert-manager integration"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rbacEnable"})}),(0,r.jsx)(n.td,{children:"If true, create & use RBAC resources"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"labels"})}),(0,r.jsx)(n.td,{children:"Labels to add to all deployed resources"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"annotations"})}),(0,r.jsx)(n.td,{children:"Annotations to add to all deployed resources"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"resources"})}),(0,r.jsx)(n.td,{children:"Pod resource requests & limits"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"metrics.enabled"})}),(0,r.jsx)(n.td,{children:"deploy service for metrics"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"metrics.port"})}),(0,r.jsx)(n.td,{children:"Set port for operator metrics"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"8081"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"logLevel"})}),(0,r.jsx)(n.td,{children:"Log level to output"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Info"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"logEncoding"})}),(0,r.jsxs)(n.td,{children:["Log encoding to use. Either ",(0,r.jsx)(n.code,{children:"json"})," or ",(0,r.jsx)(n.code,{children:"console"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"json"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"certManager.clusterScoped"})}),(0,r.jsx)(n.td,{children:"If true setup cluster scoped resources"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"namespaces"})}),(0,r.jsxs)(n.td,{children:["List of namespaces where Operator watches for custom resources. Make sure the operator ServiceAccount is granted ",(0,r.jsx)(n.code,{children:"get"})," permissions on this ",(0,r.jsx)(n.code,{children:"Node"})," resource when using limited RBACs."]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:'""'})," i.e. all namespaces"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"nodeSelector"})}),(0,r.jsx)(n.td,{children:"Node selector configuration for operator pod"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"affinity"})}),(0,r.jsx)(n.td,{children:"Node affinity configuration for operator pod"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"tolerations"})}),(0,r.jsx)(n.td,{children:"Toleration configuration for operator pod"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"serviceAccount.create"})}),(0,r.jsx)(n.td,{children:"Whether the SA creation is delegated to the chart or not"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"serviceAccount.name"})}),(0,r.jsx)(n.td,{children:"Name of the SA used for NiFiKop deployment"}),(0,r.jsx)(n.td,{children:"release name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"webhook.enabled"})}),(0,r.jsx)(n.td,{children:"Enable webhook migration"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"runAsUser"})}),(0,r.jsx)(n.td,{children:"Specify RunAsUser uid for NiFiKop operator pod"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1000"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Specify each parameter using the ",(0,r.jsx)(n.code,{children:"--set key=value[,key=value]"})," argument to ",(0,r.jsx)(n.code,{children:"helm install"}),". For example,"]}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"$ helm install nifikop \\\n      konpyutaika/nifikop \\\n      -f values.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installing-the-chart",children:"Installing the Chart"}),"\n",(0,r.jsxs)(n.admonition,{title:"Skip CRDs",type:"important",children:[(0,r.jsxs)(n.p,{children:["In the case where you don't want to deploy the crds using helm (",(0,r.jsx)(n.code,{children:"--skip-crds"}),") you need to deploy manually the crds beforehand:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifinodegroupautoscalers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificonnections.yaml\n"})})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Conversion webhook",type:"important",children:[(0,r.jsxs)(n.p,{children:["In case you keep the conversions webhook enabled (to handle the conversion of resources from ",(0,r.jsx)(n.code,{children:"v1alpha1"})," to ",(0,r.jsx)(n.code,{children:"v1"}),")\nyou will need to add the following settings to your yaml definition of CRDs:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"...\nannotations:\n    cert-manager.io/inject-ca-from: ${namespace}/${certificate_name}\n...\nspec:\n  ...\n  conversion:\n    strategy: Webhook\n    webhook:\n      clientConfig:\n        service:\n          namespace: ${namespace}\n          name: ${webhook_service_name}\n          path: /convert\n      conversionReviewVersions:\n        - v1\n        - v1alpha1\n  ...\n"})}),(0,r.jsx)(n.p,{children:"Where:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"namespace"}),": is the namespace in which you will deploy your helm chart."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"certificate_name"}),": is ",(0,r.jsx)(n.code,{children:"${helm release name}-webhook-cert"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"webhook_service_name"}),": is ",(0,r.jsx)(n.code,{children:"${helm release name}-webhook-cert"})]}),"\n"]})]}),"\n",(0,r.jsxs)(l.A,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"},{label:"set parameters",value:"set-params"}],children:[(0,r.jsx)(a.A,{value:"dryrun",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'helm install nifikop konpyutaika/nifikop \\\n    --dry-run \\\n    --set logLevel=Debug \\\n    --set namespaces={"nifikop"}\n'})})}),(0,r.jsx)(a.A,{value:"rn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm install <release name> konpyutaika/nifikop\n"})})}),(0,r.jsx)(a.A,{value:"set-params",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'helm install nifikop konpyutaika/nifikop --set namespaces={"nifikop"}\n'})})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["the ",(0,r.jsx)(n.code,{children:"--replace"})," flag allow you to reuses a charts release name"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"listing-deployed-charts",children:"Listing deployed charts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm list\n"})}),"\n",(0,r.jsx)(n.h3,{id:"get-status-for-the-helm-deployment",children:"Get Status for the helm deployment"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm status nifikop\n"})}),"\n",(0,r.jsx)(n.h2,{id:"uninstaling-the-charts",children:"Uninstaling the Charts"}),"\n",(0,r.jsx)(n.p,{children:"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm del nifikop\n"})}),"\n",(0,r.jsx)(n.p,{children:"The command removes all the Kubernetes components associated with the chart and deletes the helm release."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)"})}),"\n",(0,r.jsx)(n.p,{children:"Manually delete the CRD:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl delete crd nificlusters.nifi.konpyutaika.com\nkubectl delete crd nifiusers.nifi.konpyutaika.com\nkubectl delete crd nifiusergroups.nifi.konpyutaika.com\nkubectl delete crd nifiregistryclients.nifi.konpyutaika.com\nkubectl delete crd nifiparametercontexts.nifi.konpyutaika.com\nkubectl delete crd nifidataflows.nifi.konpyutaika.com\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["If you delete the CRD then\nIt will delete ",(0,r.jsx)(n.strong,{children:"ALL"})," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very good care"]})}),"\n",(0,r.jsx)(n.p,{children:"Helm always keeps records of what releases happened. Need to see the deleted releases ?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm list --deleted\n"})}),"\n",(0,r.jsx)(n.p,{children:"Need to see all of the releases (deleted and currently deployed, as well as releases that\nfailed) ?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm list --all\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",(0,r.jsx)(n.code,{children:"--replace"})," flag, but it will simply re-use the existing release and replace its\nresources.)"]}),"\n",(0,r.jsx)(n.p,{children:"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."}),"\n",(0,r.jsx)(n.p,{children:"To purge a release"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"helm delete --purge nifikop\n"})}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.h3,{id:"install-of-the-crd",children:"Install of the CRD"}),"\n",(0,r.jsx)(n.p,{children:"By default, the chart will install the CRDs, but this installation is global for the whole\ncluster, and you may want to not modify the already deployed CRDs."}),"\n",(0,r.jsx)(n.p,{children:"In this case there is a parameter to say to not install the CRDs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'$ helm install --name nifikop ./helm/nifikop --set namespaces={"nifikop"} --skip-crds\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},97265:(e,n,t)=>{t.d(n,{A:()=>l});t(63696);var i=t(11750);const r={tabItem:"tabItem_wHwb"};var s=t(62540);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:t,children:n})}},65457:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(63696),r=t(11750),s=t(93707),l=t(49519),a=t(83604),c=t(95196),o=t(76229),d=t(88030);function h(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,l.W6)(),a=function(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,i.useCallback)((function(e){if(a){var n=new URLSearchParams(s.location.search);n.set(a,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[a,s])]}function m(e){var n,t,r,s,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,h=e.groupId,m=u(e),f=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:m})})),j=f[0],b=f[1],g=x({queryString:o,groupId:h}),k=g[0],y=g[1],v=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,d.Dv)(n),r=t[0],s=t[1],[r,(0,i.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=v[0],_=v[1],C=function(){var e=null!=k?k:w;return p({value:e,tabValues:m})?e:null}();return(0,a.A)((function(){C&&b(C)}),[C]),{selectedValue:j,selectValue:(0,i.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),_(e)}),[y,_,m]),tabValues:m}}var f=t(95200);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=t(62540);function g(e){var n=e.className,t=e.block,i=e.selectedValue,l=e.selectValue,a=e.tabValues,c=[],o=(0,s.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),r=a[t].value;r!==i&&(o(n),l(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var i,r=c.indexOf(e.currentTarget)+1;t=null!=(i=c[r])?i:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;t=null!=(s=c[l])?s:c[c.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){c.push(e)},onKeyDown:h,onClick:d},s,{className:(0,r.A)("tabs__item",j.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===n}),children:null!=t?t:n}),n)}))})}function k(e){var n=e.lazy,t=e.children,s=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var a=l.find((function(e){return e.props.value===s}));return a?(0,i.cloneElement)(a,{className:(0,r.A)("margin-top--md",a.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function y(e){var n=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,Object.assign({},n,e)),(0,b.jsx)(k,Object.assign({},n,e))]})}function v(e){var n=(0,f.A)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},43023:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var i=t(63696);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);