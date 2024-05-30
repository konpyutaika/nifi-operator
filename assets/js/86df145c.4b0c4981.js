"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24784],{21346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=r(62540),n=r(43023);const s={id:"7_external_service_config",title:"External Service Config",sidebar_label:"External Service Config"},d=void 0,c={id:"5_references/1_nifi_cluster/7_external_service_config",title:"External Service Config",description:"ListenersConfig defines the Nifi listener types:",source:"@site/versioned_docs/version-v1.8.0/5_references/1_nifi_cluster/7_external_service_config.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/7_external_service_config",permalink:"/nifikop/docs/v1.8.0/5_references/1_nifi_cluster/7_external_service_config",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.8.0/5_references/1_nifi_cluster/7_external_service_config.md",tags:[],version:"v1.8.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1710354864e3,frontMatter:{id:"7_external_service_config",title:"External Service Config",sidebar_label:"External Service Config"},sidebar:"docs",previous:{title:"Listeners Config",permalink:"/nifikop/docs/v1.8.0/5_references/1_nifi_cluster/6_listeners_config"},next:{title:"NiFi User",permalink:"/nifikop/docs/v1.8.0/5_references/2_nifi_user"}},l={},a=[{value:"ExternalServiceConfig",id:"externalserviceconfig",level:2},{value:"ExternalServiceSpec",id:"externalservicespec",level:2},{value:"PortConfig",id:"portconfig",level:2},{value:"Metadata",id:"metadata",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"ListenersConfig defines the Nifi listener types:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'  externalServices:\n    - name: "clusterip"\n      spec:\n        type: ClusterIP\n        portConfigs:\n          - port: 8080\n            internalListenerName: "http"\n          - port: 7182\n            internalListenerName: "my-custom-listener"\n            protocol: TCP\n      metadata:\n        annotations:\n          toto: tata\n        labels:\n          titi: tutu\n'})}),"\n",(0,i.jsx)(t.p,{children:"Load balancer example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:'externalServices:\n    - name: "nlb"\n      spec:\n        type: LoadBalancer\n        loadBalancerClass: "service.k8s.aws/nlb"\n        portConfigs:\n          - port: 8080\n            internalListenerName: "http"\n          - port: 7890\n            internalListenerName: "my-custom-udp-listener"\n            protocol: UDP\n      metadata:\n        annotations:\n          toto: tata\n        labels:\n          titi: tutu\n'})}),"\n",(0,i.jsx)(t.h2,{id:"externalserviceconfig",children:"ExternalServiceConfig"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"name"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Must be unique within a namespace. Name is primarily intended for creation idempotence and configuration."}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"metadata"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#metadata",children:"Metadata"})}),(0,i.jsx)(t.td,{children:"Defines additional metadata to merge with the associated service."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"spec"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#externalservicespec",children:"ExternalServiceSpec"})}),(0,i.jsx)(t.td,{children:"defines the behavior of a service."}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"externalservicespec",children:"ExternalServiceSpec"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"portConfigs"}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["[\xa0]",(0,i.jsx)(t.a,{href:"#portconfig",children:"PortConfig"})]}),(0,i.jsx)(t.td,{children:"Contains the list port for the service and the associated listener"}),(0,i.jsx)(t.td,{children:"Yes"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clusterIP"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsxs)(t.td,{children:["More info: ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies",children:"https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies"})]}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"type"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#ServiceType",children:"ServiceType"})}),(0,i.jsx)(t.td,{children:"type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"externalIPs"}),(0,i.jsx)(t.td,{children:"[\xa0]string"}),(0,i.jsx)(t.td,{children:"externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"loadBalancerIP"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"Only applies to Service Type: LoadBalancer. LoadBalancer will get created with the IP specified in this field."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"loadBalancerSourceRanges"}),(0,i.jsx)(t.td,{children:"[\xa0]string"}),(0,i.jsx)(t.td,{children:"If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"externalName"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"loadBalancerClass"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"loadBalancerClass is the class of the load balancer implementation this Service belongs to."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"externalTrafficPolicy"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsxs)(t.td,{children:["See the Kubernetes ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-policies",children:"traffic policies"})," documentation."]}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsxs)(t.td,{children:["Depends on the ",(0,i.jsx)(t.code,{children:"Service"})," type."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"internalTrafficPolicy"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsxs)(t.td,{children:["See the Kubernetes ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/networking/virtual-ips/#traffic-policies",children:"traffic policies"})," documentation."]}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsxs)(t.td,{children:["Depends on the ",(0,i.jsx)(t.code,{children:"Service"})," type."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"portconfig",children:"PortConfig"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"port"}),(0,i.jsx)(t.td,{children:"int32"}),(0,i.jsx)(t.td,{children:"The port that will be exposed by this service."}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"internalListenerName"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"The name of the listener which will be used as target container."}),(0,i.jsx)(t.td,{children:"Yes"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nodePort"}),(0,i.jsx)(t.td,{children:"int32"}),(0,i.jsx)(t.td,{children:"The port that will expose this service externally. (Only if the service is of type NodePort)"}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"-"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"protocol"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#Protocol",children:"Protocol"})}),(0,i.jsx)(t.td,{children:"The network protocol for this service port. Must be one of the protocol enum values (i.e. TCP, UDP, SCTP)."}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TCP"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Default"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"annotations"}),(0,i.jsx)(t.td,{children:"map[string]string"}),(0,i.jsxs)(t.td,{children:["Additional annotations to merge with the associated service ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set",children:"annotations"}),"."]}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"nil"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"labels"}),(0,i.jsx)(t.td,{children:"map[string]string"}),(0,i.jsxs)(t.td,{children:["Additional labels to merge with the associated service ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set",children:"labels"}),"."]}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"nil"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},43023:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var i=r(63696);const n={},s=i.createContext(n);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);