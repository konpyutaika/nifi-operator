"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[80721],{59989:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=i(24246),t=i(71670);const o={id:"4_nifi_user_group",title:"Provisioning NiFi Users and Groups",sidebar_label:"NiFi Users and Groups"},r=void 0,a={id:"3_tasks/4_nifi_user_group",title:"Provisioning NiFi Users and Groups",description:"User management",source:"@site/versioned_docs/version-v0.13.0/3_tasks/4_nifi_user_group.md",sourceDirName:"3_tasks",slug:"/3_tasks/4_nifi_user_group",permalink:"/nifikop/docs/v0.13.0/3_tasks/4_nifi_user_group",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/3_tasks/4_nifi_user_group.md",tags:[],version:"v0.13.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1664176632,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{id:"4_nifi_user_group",title:"Provisioning NiFi Users and Groups",sidebar_label:"NiFi Users and Groups"},sidebar:"docs",previous:{title:"NiFi Dataflows",permalink:"/nifikop/docs/v0.13.0/3_tasks/3_nifi_dataflow"},next:{title:"NiFi cluster",permalink:"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/"}},c={},l=[{value:"User management",id:"user-management",level:2},{value:"UserGroup management",id:"usergroup-management",level:2},{value:"Managed groups for simple setup",id:"managed-groups-for-simple-setup",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"user-management",children:"User management"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"NifiUser"})," resource was already introduced for the ",(0,s.jsx)(n.a,{href:"/nifikop/docs/v0.13.0/3_tasks/2_security/1_ssl#create-ssl-credentials",children:"SSL credentials"})," concerns.\nWhat we are covering here is the NiFi user management part introduced in this resource."]}),"\n",(0,s.jsxs)(n.p,{children:["When you create a ",(0,s.jsx)(n.code,{children:"NifiUser"})," resource the operator will :"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Try to check if a user already exists with the same name on the NiFi cluster, if it does, the operator will set ",(0,s.jsx)(n.a,{href:"/nifikop/docs/v0.13.0/3_tasks/2_security/1_ssl#create-ssl-credentials",children:"NifiUser.Status.Id"})," to bind it with the kubernetes resource."]}),"\n",(0,s.jsx)(n.li,{children:"If no user is found, the operator will create and manage it (i.e it will ensure the synchronisation with the NiFi Cluster)."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUser\nmetadata:\n  name: aguitton\nspec:\n  # identity field is use to define the user identity on NiFi cluster side,\n  #\tit use full when the user\'s name doesn\'t suite with Kubernetes resource name.\n  identity: alexandre.guitton@konpyutaika.com\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # Whether or not the the operator also include a Java keystore format (JKS) with you secret\n  includeJKS: false\n  # Whether or not a certificate will be created for this user.\n  createCert: false\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n      # defines the kind of access policy, could be "global" or "component".\n    - type: component\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page :\n      #\thttps://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /data\n      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n      # access policy\n      componentType: "process-groups"\n      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n      # access policy\n      componentId: ""\n'})}),"\n",(0,s.jsx)(n.p,{children:"By default the user name that will be used is the name of the resource."}),"\n",(0,s.jsxs)(n.p,{children:["But as there are some constraints on this name (e.g ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names",children:"RFC 1123"}),") that doesn't match with those applied on NiFi, you can override it with the ",(0,s.jsx)(n.code,{children:"NifiUser.Spec.Identity"})," field which is more permissive.\nIn the example above the kubernetes resource name will be ",(0,s.jsx)(n.code,{children:"aguitton"})," but the NiFi use created on the cluster will be ",(0,s.jsx)(n.code,{children:"alexandre.guitton@konpyutaika.com"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the case the user will not authenticate himself using TLS authentication, the operator doesn't have to create a certificate, so just set ",(0,s.jsx)(n.code,{children:"NifiUser.Spec.CreateCert"})," to false."]}),"\n",(0,s.jsxs)(n.p,{children:["For each user, you have the ability to define a list of ",(0,s.jsx)(n.a,{href:"/nifikop/docs/v0.13.0/5_references/2_nifi_user#accesspolicy",children:"AccessPolicies"})," to give a list of access to your user.\nIn the example above we are giving to user ",(0,s.jsx)(n.code,{children:"alexandre.guitton@konpyutaika.com"})," the right to view metadata et content for the root process group in flowfile queues in outbound connections and through provenance events."]}),"\n",(0,s.jsx)(n.h2,{id:"usergroup-management",children:"UserGroup management"}),"\n",(0,s.jsxs)(n.p,{children:["To simplify the access management Apache NiFi allows to define groups containing a list of users, on which we apply a list of access policies.\nThis part is supported by the operator using the ",(0,s.jsx)(n.code,{children:"NifiUserGroup"})," resource :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  # Contains the reference to the NifiCluster with the one the registry client is linked.\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  # contains the list of reference to NifiUsers that are part to the group.\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n#      namespace: nifikop\n    - name: nc-controller.nifikop.mgt.cluster.local\n  # defines the list of access policies that will be granted to the group.\n  accessPolicies:\n      # defines the kind of access policy, could be "global" or "component".\n    - type: global\n      # defines the kind of action that will be granted, could be "read" or "write"\n      action: read\n      # resource defines the kind of resource targeted by this access policies, please refer to the following page :\n      #\thttps://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#access-policies\n      resource: /counters\n#      # componentType is used if the type is "component", it\'s allow to define the kind of component on which is the\n#      # access policy\n#      componentType: "process-groups"\n#      # componentId is used if the type is "component", it\'s allow to define the id of the component on which is the\n#      # access policy\n#      componentId: ""\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When you create a ",(0,s.jsx)(n.code,{children:"NifiUserGroup"})," resource, the operator will create and manage a group named ",(0,s.jsx)(n.code,{children:"${resource namespace}-${resource name}"})," in Nifi.\nTo declare the users that are part of this group, you just have to declare them in the ",(0,s.jsx)(n.a,{href:"/nifikop/docs/v0.13.0/5_references/6_nifi_usergroup#userreference",children:"NifiUserGroup.UsersRef"})," field."]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/nifikop/docs/v0.13.0/5_references/6_nifi_usergroup#userreference",children:"NifiUserGroup.UsersRef"})," requires to declare the name and namespace of a ",(0,s.jsx)(n.code,{children:"NifiUser"})," resource, so it is previously required to declare the resource."]}),(0,s.jsx)(n.p,{children:"It's required to create the resource even if the user is already declared in NiFi Cluster (In that case the operator will just sync the kubernetes resource)."})]}),"\n",(0,s.jsxs)(n.p,{children:["Like for ",(0,s.jsx)(n.code,{children:"NifiUser"})," you can declare a list of ",(0,s.jsx)(n.a,{href:"/nifikop/docs/v0.13.0/5_references/2_nifi_user#accesspolicy",children:"AccessPolicies"})," to give a list of access to your user."]}),"\n",(0,s.jsxs)(n.p,{children:["In the example above we are giving to users ",(0,s.jsx)(n.code,{children:"nc-0-node.nc-headless.nifikop.svc.cluster.local"})," and ",(0,s.jsx)(n.code,{children:"nc-controller.nifikop.mgt.cluster.local"})," the right to view the counters informations."]}),"\n",(0,s.jsx)(n.h2,{id:"managed-groups-for-simple-setup",children:"Managed groups for simple setup"}),"\n",(0,s.jsxs)(n.p,{children:["In some case these two features could be heavy to define, for example when you have 10 dataflows with one cluster for each of them, it will lead in a lot of ",(0,s.jsx)(n.code,{children:".yaml"})," files ...\nTo simplify this, we implement in the operator 2 ",(0,s.jsx)(n.code,{children:"managed groups"})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Admins :"})," a group giving access to everything on the NiFi Cluster,"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Readers :"})," a group giving access as viewer on the NiFi Cluster."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can directly define the list of users who belong to each of them in the ",(0,s.jsx)(n.code,{children:"NifiCluster.Spec"})," field :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: mynifi\nspec:\n  ...\n  oneNifiNodePerNode: false\n  #\n  propagateLabels: true\n  managedAdminUsers:\n    -  identity : "alexandre.guitton@konpyutaika.com"\n       name: "aguitton"\n    -  identity : "nifiuser@konpyutaika.com"\n       name: "nifiuser"\n  managedReaderUsers:\n    -  identity : "toto@konpyutaika.com"\n       name: "toto"\n    ...\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example the operator will create and manage 3 ",(0,s.jsx)(n.code,{children:"NifiUsers"})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"aguitton"}),", with the identity : ",(0,s.jsx)(n.code,{children:"alexandre.guitton@konpyutaika.com"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"nifiuser"}),", with the identity : ",(0,s.jsx)(n.code,{children:"nifiuser@konpyutaika.com"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"toto"}),", with the identity : ",(0,s.jsx)(n.code,{children:"toto@konpyutaika.com"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"And create and manage two groups :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"managed-admins :"})," that will contain 3 users (",(0,s.jsx)(n.strong,{children:"aguitton"}),", ",(0,s.jsx)(n.strong,{children:"nifiuser"}),", ",(0,s.jsx)(n.strong,{children:"nc-controller.nifikop.mgt.cluster.local"})," which is the controller user)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"managed-readers :"})," that will contain 1 user (",(0,s.jsx)(n.strong,{children:"toto"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["And the rest of the stuff will be reconciled and managed as described for ",(0,s.jsx)(n.code,{children:"NifiUsers"})," and ",(0,s.jsx)(n.code,{children:"NifiUserGroups"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["There is one more group that is created and managed by the operator, this is the ",(0,s.jsx)(n.strong,{children:"managed-nodes"})," group, for each node a ",(0,s.jsx)(n.code,{children:"NifiUser"})," is created, and we automatically add them to this group to give them the right list of accesses."]}),(0,s.jsxs)(n.p,{children:["To get the list of managed groups just check the list of ",(0,s.jsx)(n.code,{children:"NifiUserGroup"})," :"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"kubectl get -n nifikop nifiusergroups.nifi.konpyutaika.com \nNAME              AGE\nmanaged-admins    6d7h\nmanaged-nodes     6d7h\nmanaged-readers   6d7h\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71670:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var s=i(27378);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);