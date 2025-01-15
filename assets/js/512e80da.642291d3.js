"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[43875],{63238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"5_references/1_nifi_cluster/3_node_config","title":"Node configuration","description":"NodeConfig defines the node configuration","source":"@site/versioned_docs/version-v1.7.0/5_references/1_nifi_cluster/3_node_config.md","sourceDirName":"5_references/1_nifi_cluster","slug":"/5_references/1_nifi_cluster/3_node_config","permalink":"/nifikop/docs/v1.7.0/5_references/1_nifi_cluster/3_node_config","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.7.0/5_references/1_nifi_cluster/3_node_config.md","tags":[],"version":"v1.7.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1716544902000,"frontMatter":{"id":"3_node_config","title":"Node configuration","sidebar_label":"Node configuration"},"sidebar":"docs","previous":{"title":"Read only configurations","permalink":"/nifikop/docs/v1.7.0/5_references/1_nifi_cluster/2_read_only_config"},"next":{"title":"Node","permalink":"/nifikop/docs/v1.7.0/5_references/1_nifi_cluster/4_node"}}');var s=n(62540),r=n(43023);const d={id:"3_node_config",title:"Node configuration",sidebar_label:"Node configuration"},o=void 0,c={},l=[{value:"NodeConfig",id:"nodeconfig",level:2},{value:"StorageConfig",id:"storageconfig",level:2},{value:"ExternalVolumeConfig",id:"externalvolumeconfig",level:2},{value:"Metadata",id:"metadata",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"NodeConfig defines the node configuration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'   default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      # Set this to true if the instance is a node in a cluster.\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup\n      isNode: true\n      # Additionnal metadata to merge to the pod associated\n      podMetadata:\n        annotations:\n          node-annotation: "node-annotation-value"\n        labels:\n          node-label: "node-label-value"\n      # Docker image used by the operator to create the node associated\n      # https://hub.docker.com/r/apache/nifi/\n#      image: "apache/nifi:1.11.2"\n      # nodeAffinity can be specified, operator populates this value if new pvc added later to node\n      # https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity\n#      nodeAffinity:\n      # imagePullPolicy define the pull policy for NiFi cluster docker image\n      imagePullPolicy: IfNotPresent\n      # priorityClassName define the name of the priority class to be applied to these nodes\n      priorityClassName: "example-priority-class-name"\n      # externalVolumeConfigs specifies a list of volume to mount into the main container.\n      externalVolumeConfigs:\n        - name: example-volume\n          mountPath: "/opt/nifi/example"\n          secret:\n            secretName: "raw-controller"\n      # storageConfigs specifies the node related configs\n      storageConfigs:\n        # Name of the storage config, used to name PV to reuse into sidecars for example.\n        - name: provenance-repository\n          # Retain this PVC throughout NifiCluster deletions.\n          reclaimPolicy: Retain\n          # Path where the volume will be mount into the main nifi container inside the pod.\n          mountPath: "/opt/nifi/provenance_repository"\n          # Metadata to attach to the PVC that gets created\n          metadata:\n            labels:\n              my-label: my-value\n            annotations:\n              my-annotation: my-value\n          # Kubernetes PVC spec\n          # https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          reclaimPolicy: Delete\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n'})}),"\n",(0,s.jsx)(t.h2,{id:"nodeconfig",children:"NodeConfig"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"provenanceStorage"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:["provenanceStorage allow to specify the maximum amount of data provenance information to store at a time: ",(0,s.jsx)(t.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties",children:"write-ahead-provenance-repository-properties"})]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:'"8 GB"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"runAsUser"}),(0,s.jsx)(t.td,{children:"int64"}),(0,s.jsx)(t.td,{children:"define the id of the user to run in the Nifi image"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"1000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"fsGroup"}),(0,s.jsx)(t.td,{children:"int64"}),(0,s.jsx)(t.td,{children:"define the id of the group for each volumes in Nifi image"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"1000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"isNode"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsxs)(t.td,{children:["Set this to true if the instance is a node in a cluster: ",(0,s.jsx)(t.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#basic-cluster-setup",children:"basic-cluster-setup"})]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"true"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"image"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:["Docker image used by the operator to create the node associated. ",(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/apache/nifi/",children:"Nifi docker registry"})]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:'""'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"imagePullPolicy"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#PullPolicy",children:"PullPolicy"})}),(0,s.jsx)(t.td,{children:"define the pull policy for NiFi cluster docker image."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:'""'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nodeAffinity"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsxs)(t.td,{children:["operator populates this value if new pvc added later to node ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#node-affinity",children:"node-affinity"})]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"storageConfigs"}),(0,s.jsxs)(t.td,{children:["[\xa0]",(0,s.jsx)(t.a,{href:"#storageconfig",children:"StorageConfig"})]}),(0,s.jsx)(t.td,{children:"specifies the node related configs."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"externalVolumeConfigs"}),(0,s.jsxs)(t.td,{children:["[\xa0]",(0,s.jsx)(t.a,{href:"#externalvolumeconfig",children:"ExternalVolumeConfig"})]}),(0,s.jsx)(t.td,{children:"specifies a list of volume to mount into the main container."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"serviceAccountName"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"specifies the serviceAccount used for this specific node."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:'"default"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"resourcesRequirements"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#ResourceRequirements",children:"ResourceRequirements"})}),(0,s.jsxs)(t.td,{children:["works exactly like Container resources, the user can specify the limit and the requests through this property ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/",children:"manage-compute-resources-container"}),"."]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"imagePullSecrets"}),(0,s.jsxs)(t.td,{children:["[\xa0]",(0,s.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#TypedLocalObjectReference",children:"LocalObjectReference"})]}),(0,s.jsx)(t.td,{children:"specifies the secret to use when using private registry."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"nodeSelector"}),(0,s.jsx)(t.td,{children:"map[string]string"}),(0,s.jsxs)(t.td,{children:["nodeSelector can be specified, which set the pod to fit on a node ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/assign-pod-node/#nodeselector",children:"nodeselector"})]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"tolerations"}),(0,s.jsxs)(t.td,{children:["[\xa0]",(0,s.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#Toleration",children:"Toleration"})]}),(0,s.jsxs)(t.td,{children:["tolerations can be specified, which set the pod's tolerations ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/#concepts",children:"taint-and-toleration"}),"."]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"podMetadata"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#metadata",children:"Metadata"})}),(0,s.jsx)(t.td,{children:"define additionnal metadata to merge to the Pod associated."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hostAliases"}),(0,s.jsxs)(t.td,{children:["[\xa0]",(0,s.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#HostAlias",children:"HostAlias"})]}),(0,s.jsx)(t.td,{children:"A list of host aliases to include in each pod's /etc/hosts configuration in the scenario where DNS is not available."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"[\xa0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"priorityClassName"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Specify the name of the priority class to apply to pods created with this node config"}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"storageconfig",children:"StorageConfig"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"name"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Name of the storage config, used to name PV to reuse into sidecars for example."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mountPath"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"Path where the volume will be mount into the main nifi container inside the pod."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"reclaimPolicy"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#PersistentVolumeReclaimPolicy",children:"PersistentVolumeReclaimPolicy"})}),(0,s.jsxs)(t.td,{children:["The PVC reclaim policy. Must be one of {Delete, Retain}. Recycle is not supported. If Retain, the PVC is not deleted when the ",(0,s.jsx)(t.code,{children:"NifiCluster"})," is deleted and it will be re-attached to only the node it was previously attached to when the ",(0,s.jsx)(t.code,{children:"NifiCluster"})," is recreated."]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"Delete"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metadata"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#metadata",children:"Metadata"})}),(0,s.jsx)(t.td,{children:"Define additional metadata to merge to the PVC associated."}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pvcSpec"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://godoc.org/k8s.io/api/core/v1#PersistentVolumeClaimSpec",children:"PersistentVolumeClaimSpec"})}),(0,s.jsxs)(t.td,{children:["Kubernetes PVC spec. ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim",children:"create-a-persistentvolumeclaim"}),"."]}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"externalvolumeconfig",children:"ExternalVolumeConfig"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeMount",children:"VolumeMount"})}),(0,s.jsx)(t.td,{children:"describes a mounting of a Volume within a container."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#VolumeSource",children:"VolumeSource"})}),(0,s.jsx)(t.td,{children:"VolumeSource represents the location and type of the mounted volume."}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Required"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"annotations"}),(0,s.jsx)(t.td,{children:"map[string]string"}),(0,s.jsxs)(t.td,{children:["Additionnal annotation to merge to the resource associated ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set",children:"annotations"}),"."]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"labels"}),(0,s.jsx)(t.td,{children:"map[string]string"}),(0,s.jsxs)(t.td,{children:["Additionnal labels to merge to the resource associated ",(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set",children:"labels"}),"."]}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:"nil"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var i=n(63696);const s={},r=i.createContext(s);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);