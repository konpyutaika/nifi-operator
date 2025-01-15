"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64748],{96495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"5_references/1_nifi_cluster/2_read_only_config","title":"Read only configurations","description":"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node.","source":"@site/versioned_docs/version-v0.13.0/5_references/1_nifi_cluster/2_read_only_config.md","sourceDirName":"5_references/1_nifi_cluster","slug":"/5_references/1_nifi_cluster/2_read_only_config","permalink":"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/2_read_only_config","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/5_references/1_nifi_cluster/2_read_only_config.md","tags":[],"version":"v0.13.0","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1706106652000,"frontMatter":{"id":"2_read_only_config","title":"Read only configurations","sidebar_label":"Read only configurations"},"sidebar":"docs","previous":{"title":"NiFi cluster","permalink":"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/"},"next":{"title":"Node configuration","permalink":"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/3_node_config"}}');var r=n(62540),o=n(43023);const d={id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},a=void 0,s={},c=[{value:"ReadOnlyConfig",id:"readonlyconfig",level:2},{value:"NifiProperties",id:"nifiproperties",level:2},{value:"ZookeeperProperties",id:"zookeeperproperties",level:2},{value:"BootstrapProperties",id:"bootstrapproperties",level:2},{value:"LogbackConfig",id:"logbackconfig",level:2},{value:"AuthorizerConfig",id:"authorizerconfig",level:2},{value:"BootstrapNotificationServicesConfig",id:"bootstrapnotificationservicesconfig",level:2},{value:"ConfigmapReference",id:"configmapreference",level:2},{value:"SecretConfigReference",id:"secretconfigreference",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:'readOnlyConfig:\n  # MaximumTimerDrivenThreadCount define the maximum number of threads for timer driven processors available to the system.\n  maximumTimerDrivenThreadCount: 30\n  # MaximumEventDrivenThreadCount define the maximum number of threads for event driven processors available to the system.\n  maximumEventDrivenThreadCount: 10\n  # Logback configuration that will be applied to the node\n  logbackConfig:\n    # logback.xml configuration that will replace the one produced based on template\n    replaceConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # logback.xml configuration that will replace the one produced based on template and overrideConfigMap\n    replaceSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n  # Authorizer configuration that will be applied to the node\n  authorizerConfig:\n    # An authorizers.xml configuration template that will replace the default template seen in authorizers.go\n    replaceTemplateConfigMap:\n      # The key of the value, in data content, that we want use.\n      data: authorizers.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # An authorizers.xml configuration template that will replace the default template seen in authorizers.go and the replaceTemplateConfigMap\n    replaceTemplateSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: authorizers.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n  # NifiProperties configuration that will be applied to the node.\n  nifiProperties:\n    # Additionnal nifi.properties configuration that will override the one produced based on template and\n    # configuration\n    overrideConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop.\n    # Additionnal nifi.properties configuration that will override the one produced based\n    #\ton template, configurations, overrideConfigMap and overrideConfigs.\n    overrideSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # Additionnal nifi.properties configuration that will override the one produced based\n    #\ton template, configurations and overrideConfigMap\n    overrideConfigs: |\n      nifi.ui.banner.text=NiFiKop\n    # A comma separated list of allowed HTTP Host header values to consider when NiFi\n    # is running securely and will be receiving requests to a different host[:port] than it is bound to.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties\n    #      webProxyHosts:\n    # Nifi security client auth\n    needClientAuth: false\n    # Indicates which of the configured authorizers in the authorizers.xml file to use\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration\n  #      authorizer:\n  # ZookeeperProperties configuration that will be applied to the node.\n  zookeeperProperties:\n    #      # Additionnal zookeeeper.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnal zookeeeper.properties configuration that will override the one produced based\n    #      #\ton template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # Additionnal zookeeper.properties configuration that will override the one produced based\n    # on template and configurations.\n    overrideConfigs: |\n      initLimit=15\n      autopurge.purgeInterval=24\n      syncLimit=5\n      tickTime=2000\n      dataDir=./state/zookeeper\n      autopurge.snapRetainCount=30\n  # BootstrapProperties configuration that will be applied to the node.\n  bootstrapProperties:\n    #      # Additionnal bootstrap.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnal bootstrap.properties configuration that will override the one produced based\n    #      #\ton template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # JVM memory settings\n    nifiJvmMemory: "512m"\n    # Additionnal bootstrap.properties configuration that will override the one produced based\n    # on template and configurations.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#bootstrap_properties\n    overrideConfigs: |\n      # java.arg.4=-Djava.net.preferIPv4Stack=true\n'})}),"\n",(0,r.jsx)(t.h2,{id:"readonlyconfig",children:"ReadOnlyConfig"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maximumTimerDrivenThreadCount"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"define the maximum number of threads for timer driven processors available to the system."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"10"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"maximumEventDrivenThreadCount"}),(0,r.jsx)(t.td,{children:"int32"}),(0,r.jsx)(t.td,{children:"define the maximum number of threads for event driven processors available to the system."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"additionalSharedEnvs"}),(0,r.jsxs)(t.td,{children:["[\xa0]",(0,r.jsx)(t.a,{href:"https://pkg.go.dev/k8s.io/api/core/v1#EnvVar",children:"corev1.EnvVar"})]}),(0,r.jsx)(t.td,{children:"define a set of additional env variables that will shared between all init containers and containers in the pod."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"[\xa0]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"nifiProperties"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#nifiproperties",children:"NifiProperties"})}),(0,r.jsx)(t.td,{children:"nifi.properties configuration that will be applied to the node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"zookeeperProperties"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#zookeeperproperties",children:"ZookeeperProperties"})}),(0,r.jsx)(t.td,{children:"zookeeper.properties configuration that will be applied to the node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bootstrapProperties"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#bootstrapproperties",children:"BootstrapProperties"})}),(0,r.jsx)(t.td,{children:"bootstrap.conf configuration that will be applied to the node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"logbackConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#logbackconfig",children:"LogbackConfig"})}),(0,r.jsx)(t.td,{children:"logback.xml configuration that will be applied to the node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authorizerConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#authorizerconfig",children:"AuthorizerConfig"})}),(0,r.jsx)(t.td,{children:"authorizers.xml configuration template that will be applied to the node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bootstrapNotificationServicesConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#bootstrapnotificationservices",children:"BootstrapNotificationServices"})}),(0,r.jsx)(t.td,{children:"bootstrap_notification_services.xml configuration that will be applied to the node."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"nifiproperties",children:"NifiProperties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideConfigMap"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#configmapreference",children:"ConfigmapReference"})}),(0,r.jsx)(t.td,{children:"Additionnal nifi.properties configuration that will override the one produced based on template and configuration."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideConfigs"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Additionnal nifi.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideSecretConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#secretconfigreference",children:"SecretConfigReference"})}),(0,r.jsx)(t.td,{children:"Additionnal nifi.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"webProxyHosts"}),(0,r.jsx)(t.td,{children:"[\xa0]string"}),(0,r.jsxs)(t.td,{children:["A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host[",":port","] than it is bound to. ",(0,r.jsx)(t.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties",children:"web-properties"})]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"needClientAuth"}),(0,r.jsx)(t.td,{children:"boolean"}),(0,r.jsx)(t.td,{children:"Nifi security client auth."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"false"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"authorizer"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["Indicates which of the configured authorizers in the authorizers.xml file to use ",(0,r.jsx)(t.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration",children:"authorizer-configuration"})]}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'"managed-authorizer"'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"zookeeperproperties",children:"ZookeeperProperties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideConfigMap"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#configmapreference",children:"ConfigmapReference"})}),(0,r.jsx)(t.td,{children:"Additionnal zookeeper.properties configuration that will override the one produced based on template and configuration."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideConfigs"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Additionnal zookeeper.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideSecretConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#secretconfigreference",children:"SecretConfigReference"})}),(0,r.jsx)(t.td,{children:"Additionnal zookeeper.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"bootstrapproperties",children:"BootstrapProperties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideConfigMap"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#configmapreference",children:"ConfigmapReference"})}),(0,r.jsx)(t.td,{children:"Additionnal bootstrap.properties configuration that will override the one produced based on template and configuration."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideConfigs"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Additionnal bootstrap.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"overrideSecretConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#secretconfigreference",children:"SecretConfigReference"})}),(0,r.jsx)(t.td,{children:"Additionnal bootstrap.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NifiJvmMemory"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"JVM memory settings."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'"512m"'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"logbackconfig",children:"LogbackConfig"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"replaceConfigMap"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#configmapreference",children:"ConfigmapReference"})}),(0,r.jsx)(t.td,{children:"logback.xml configuration that will replace the one produced based on template."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"replaceSecretConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#secretconfigreference",children:"SecretConfigReference"})}),(0,r.jsx)(t.td,{children:"logback.xml configuration that will replace the one produced based on template and overrideConfigMap."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"authorizerconfig",children:"AuthorizerConfig"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"replaceTemplateConfigMap"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#configmapreference",children:"ConfigmapReference"})}),(0,r.jsx)(t.td,{children:"authorizers.xml configuration template that will replace the default template."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"replaceTemplateSecretConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#secretconfigreference",children:"SecretConfigReference"})}),(0,r.jsx)(t.td,{children:"authorizers.xml configuration that will replace the default template and the replaceTemplateConfigMap."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"bootstrapnotificationservicesconfig",children:"BootstrapNotificationServicesConfig"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"replaceConfigMap"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#configmapreference",children:"ConfigmapReference"})}),(0,r.jsx)(t.td,{children:"bootstrap_notifications_services.xml configuration that will replace the one produced based on template."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"replaceSecretConfig"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#secretconfigreference",children:"SecretConfigReference"})}),(0,r.jsx)(t.td,{children:"bootstrap_notifications_services.xml configuration that will replace the one produced based on template and overrideConfigMap."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"nil"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"configmapreference",children:"ConfigmapReference"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Name of the configmap that we want to refer."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"namespace"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Namespace where is located the configmap that we want to refer."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The key of the value,in data content, that we want use."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'""'})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"secretconfigreference",children:"SecretConfigReference"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"name"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Name of the secret that we want to refer."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"namespace"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"Namespace where is located the secret that we want to refer."}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:'""'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"The key of the value,in data content, that we want use."}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:'""'})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var i=n(63696);const r={},o=i.createContext(r);function d(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);