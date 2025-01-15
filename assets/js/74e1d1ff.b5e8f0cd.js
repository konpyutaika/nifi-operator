"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[85013],{83339:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service","title":"Kubernetes service","description":"The purpose of this section is to explain how expose your NiFi cluster and access it in and out of kubernetes.","source":"@site/versioned_docs/version-v1.5.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service.md","sourceDirName":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster","slug":"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service","permalink":"/nifikop/docs/v1.5.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.5.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service.md","tags":[],"version":"v1.5.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"1_kubernetes_service","title":"Kubernetes service","sidebar_label":"Kubernetes service"},"sidebar":"docs","previous":{"title":"Nodes configuration","permalink":"/nifikop/docs/v1.5.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration"},"next":{"title":"Istio service mesh","permalink":"/nifikop/docs/v1.5.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/2_istio_service_mesh"}}');var i=s(62540),r=s(43023);const o={id:"1_kubernetes_service",title:"Kubernetes service",sidebar_label:"Kubernetes service"},l=void 0,c={},a=[{value:"Listener configuration",id:"listener-configuration",level:2},{value:"Headless vs All service mode",id:"headless-vs-all-service-mode",level:2},{value:"External service configuration",id:"external-service-configuration",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The purpose of this section is to explain how expose your NiFi cluster and access it in and out of kubernetes."}),"\n",(0,i.jsx)(n.h2,{id:"listener-configuration",children:"Listener configuration"}),"\n",(0,i.jsxs)(n.p,{children:["The first part to manage when you are configuring your cluster is the ports that will be used for the internal need of NiFi, we will call them ",(0,i.jsx)(n.code,{children:"internal listeners"}),"\nThere is 6 types of ",(0,i.jsx)(n.code,{children:"internal listeners"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"cluster"}),": Define the node\u2019s protocol port (used by cluster nodes to discuss together)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"http/https"}),": The HTTP or HTTPS port used to expose NiFi cluster UI (",(0,i.jsx)(n.strong,{children:"Note"}),": use only one of them !)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"s2s"}),": The remote input socket port for Site-to-Site communication"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"load-balance"}),": Cluster node load balancing port"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"prometheus"}),": Port that will be used to expose the promotheus reporting task"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To configure these listeners you must use the ",(0,i.jsx)(n.a,{href:"../../../../5_references/1_nifi_cluster/6_listeners_config#internallistener",children:"Spec.ListernersConfig.InternalListeners"})," field:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'listenersConfig:\n  internalListeners:\n    - type: "https"\n      name: "https"\n      containerPort: 8443\n    - type: "cluster"\n      name: "cluster"\n      containerPort: 6007\n    - type: "s2s"\n      name: "s2s"\n      containerPort: 10000\n    - type: "prometheus"\n      name: "prometheus"\n      containerPort: 9090\n    - type: "load-balance"\n      name: "load-balance"\n      containerPort: 6342\n'})}),"\n",(0,i.jsx)(n.p,{children:"Here we defined a listener by specifying:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": one of the six described above (e.g ",(0,i.jsx)(n.code,{children:"https"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": name of the port that will be attached to pod (e.g ",(0,i.jsx)(n.code,{children:"https"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"containerPort"}),": port that will be used by the container inside the pod and configured in NiFi configuration for the listener (e.g ",(0,i.jsx)(n.code,{children:"8443"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you look at the yaml description of the deployed pod, you should have something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"    ports:\n    - containerPort: 8443\n      name: https\n      protocol: TCP\n    - containerPort: 6007\n      name: cluster\n      protocol: TCP\n    - containerPort: 6342\n      name: load-balance\n      protocol: TCP\n    - containerPort: 10000\n      name: s2s\n      protocol: TCP\n    - containerPort: 9090\n      name: prometheus\n      protocol: TCP\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:["Really important thing, you can add additional ",(0,i.jsx)(n.code,{children:"internal listeners"})," without type, it means that these listeners are not related to internal NiFi behaviour.\nIt might be really useful, if you are exposing a NiFi processor through a port (e.g http endpoint to receive HTTP request inside of NiFi):"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'listenersConfig:\n  internalListeners:\n    ...\n    - name: "http-tracking"\n      containerPort: 8081\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"headless-vs-all-service-mode",children:"Headless vs All service mode"}),"\n",(0,i.jsx)(n.p,{children:"To internally expose the NiFi cluster nodes, there is one major constraint which is that each node must be accessible one by one by the controller and the other nodes!"}),"\n",(0,i.jsx)(n.p,{children:"To do this, a single traditional Kubernetes service will not suffice, as it will balance the traffic between all nodes, which is not what we want."}),"\n",(0,i.jsx)(n.p,{children:"There are two ways to solve this problem:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:["Use a ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#headless-services",children:"headless service"})]}),": this is the most appropriate way to expose your nodes internally, using this method you will simply deploy a service that will allow you to access each pod one by one via DNS resolution."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Use one service per node"}),": this way we create one service per node, giving you one cluster IP per node to access a single node directly!"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To configure how you want to expose your NiFi node internally, you simply set the ",(0,i.jsx)(n.code,{children:"Spec.HeadlessEnabled"})," field, if true you will be in the first mode, if not in the second."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In most cases, the ",(0,i.jsx)(n.code,{children:"headless mode"})," should be used. An example where you need the other mode would be integration with Istio service mesh, which does not support headless service integration."]})}),"\n",(0,i.jsx)(n.h2,{id:"external-service-configuration",children:"External service configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have considered how to expose your service internally in the k8s cluster, you may want to expose your cluster externally, for example to give access to your cluster to your users, or to expose your prometheus endpoint.\nTo configure the external exposure of your cluster pods, you should use the ",(0,i.jsx)(n.a,{href:"../../../../5_references/1_nifi_cluster/7_external_service_config",children:"Spec.ExternalServices"})," field."]}),"\n",(0,i.jsx)(n.p,{children:"It takes as configuration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": which will be used to name the kubernetes service."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"spec"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": how the service is exposed (following the definition of ",(0,i.jsx)(n.a,{href:"https://godoc.org/k8s.io/api/core/v1#ServiceType",children:"ServiceType"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"portConfigs"}),": a list of port configurations:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"}),": the port that will be used by the service to expose the associated ",(0,i.jsx)(n.code,{children:"internal listener"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"internalListernerName"}),": name of the ",(0,i.jsx)(n.code,{children:"internal listener"})," to expose"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If we take a concrete example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'listenersConfig:\n  internalListeners:\n    - type: "https"\n      name: "https"\n      containerPort: 8443\n    - type: "cluster"\n      name: "cluster"\n      containerPort: 6007\n    - type: "s2s"\n      name: "s2s"\n      containerPort: 10000\n    - type: "prometheus"\n      name: "prometheus"\n      containerPort: 9090\n    - type: "load-balance"\n      name: "load-balance"\n      containerPort: 6342\n    - name: "http-tracking"\n      containerPort: 8081\nexternalServices:\n  - name: cluster-access\n    spec:\n      portConfigs:\n        - internalListenerName: https\n          port: 443\n        - internalListenerName: http-tracking\n          port: 80\n      type: LoadBalancer\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here, we expose our ",(0,i.jsx)(n.code,{children:"internal listeners"}),": ",(0,i.jsx)(n.code,{children:"https"})," and ",(0,i.jsx)(n.code,{children:"http-tracking"})," through a Kubernetes service: ",(0,i.jsx)(n.code,{children:"cluster-access"}),", with two different ports: ",(0,i.jsx)(n.code,{children:"443"})," and ",(0,i.jsx)(n.code,{children:"80"}),".\nIf you look at the services, you should see something like this."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"kubectl get services\nNAME                TYPE           CLUSTER-IP    EXTERNAL-IP      PORT(S)                                AGE\ncluster-access      LoadBalancer   10.88.21.98   35.180.241.132   443:30421/TCP,80:30521/TCP             20d\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you add the ",(0,i.jsx)(n.code,{children:"external ip"})," in your ",(0,i.jsx)(n.code,{children:"Spec.ReadOnlyConfig.NifiProperties.WebProxyHosts"})," field, you will be able to access your cluster by: ",(0,i.jsx)(n.code,{children:"https://<external-ip>"})," and your NiFi processor http endpoint by: ",(0,i.jsx)(n.code,{children:"http://<external-ip>"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For any additional configuration please refer to ",(0,i.jsx)(n.a,{href:"../../../../5_references/1_nifi_cluster/7_external_service_config",children:"this page"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(63696);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);