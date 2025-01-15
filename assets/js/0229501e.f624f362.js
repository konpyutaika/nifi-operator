"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[95095],{19183:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var r=i(23906),t=i(62540),s=i(43023),l=i(65457),a=i(97265);const c={slug:"2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns",title:"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform",authors:["aguitton"],tags:["gke","nifikop","secured","oidc","google cloud platform","google cloud","gcp","kubernetes"]},o=void 0,d={authorsImageUrls:[void 0]},u=[{value:"Objectives",id:"objectives",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Disclaimer",id:"disclaimer",level:3},{value:"Create OAuth Credentials",id:"create-oauth-credentials",level:3},{value:"Create service account",id:"create-service-account",level:3},{value:"Deploy secured cluster",id:"deploy-secured-cluster",level:2},{value:"Deploy GKE cluster with Terraform",id:"deploy-gke-cluster-with-terraform",level:3},{value:"Deployment",id:"deployment",level:4},{value:"Explanations",id:"explanations",level:4},{value:"Deploy NiFiKop",id:"deploy-nifikop",level:3},{value:"Deploy Let&#39;s encrypt issuer",id:"deploy-lets-encrypt-issuer",level:3},{value:"Deploy Secured NiFi cluster",id:"deploy-secured-nifi-cluster",level:3},{value:"Access to your secured NiFi Cluster",id:"access-to-your-secured-nifi-cluster",level:3},{value:"Cleaning",id:"cleaning",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,t.jsxs)(n.p,{children:["This article is pretty similar to the ",(0,t.jsx)(n.a,{href:"/nifikop/blog/secured_nifi_cluster_on_gcp",children:"Secured NiFi cluster with NiFiKop on the Google Cloud Platform"})," one."]}),"\n",(0,t.jsxs)(n.p,{children:["This time, we will also use ",(0,t.jsx)(n.strong,{children:"NiFiKop"})," and ",(0,t.jsx)(n.strong,{children:"Terraform"})," to quickly:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["deploy ",(0,t.jsx)(n.strong,{children:"a GKE cluster"})," to host our NiFi cluster,"]}),"\n",(0,t.jsxs)(n.li,{children:["deploy ",(0,t.jsxs)(n.strong,{children:["a ",(0,t.jsx)(n.code,{children:"cert-manager"})," issuer"]})," as a convenient way to generate TLS certificates,"]}),"\n",(0,t.jsxs)(n.li,{children:["deploy ",(0,t.jsx)(n.strong,{children:"a zookeeper instance"})," to manage cluster coordination and state across the cluster,"]}),"\n",(0,t.jsxs)(n.li,{children:["deploy ",(0,t.jsx)(n.strong,{children:"X secured NiFi instances in cluster mode"})]}),"\n",(0,t.jsxs)(n.li,{children:["configure ",(0,t.jsx)(n.strong,{children:"NiFi to use OpenId connect"})," for authentication"]}),"\n",(0,t.jsxs)(n.li,{children:["configure ",(0,t.jsx)(n.strong,{children:"HTTPS loadbalancer with Client Ip affinity"})," to access the NiFi cluster"]}),"\n",(0,t.jsx)(n.li,{children:"dynamically re-size the cluster"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We will:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["deploy ",(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dns",children:"external DNS"})," instead of manually declare our DNS names."]}),"\n",(0,t.jsxs)(n.li,{children:["delegate the certificates authority to ",(0,t.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You have your own domain (",(0,t.jsx)(n.a,{href:"https://domains.google/",children:"you can create one with Google"}),"): it will be used to map a domain on the NiFi's web interface. In this post, we will use: ",(0,t.jsx)(n.code,{children:"trycatchlearn.fr"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,t.jsx)(n.p,{children:"This article can get you started for a production deployment, but should not used as so. There are still some steps needed such as Zookeeper, GKE configuration etc."}),"\n",(0,t.jsx)(n.h3,{id:"create-oauth-credentials",children:"Create OAuth Credentials"}),"\n",(0,t.jsx)(n.p,{children:"First step is to create the OAuth Credential:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to your GCP project, and in the left bar: ",(0,t.jsx)(n.strong,{children:"APIs & Services > Credentials"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"CREATE CREDENTIALS: OAuth client ID"})]}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Web Application"})]}),"\n",(0,t.jsxs)(n.li,{children:["Give a name such as ",(0,t.jsx)(n.code,{children:"SecuredNifi"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"Authorised JavaScript origins"}),", use your own domain. I'm using: ",(0,t.jsx)(n.code,{children:"https://nifi.orange.trycatchlearn.fr:8443"})]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"Authorised redirect URIs"})," it's your previous URI + ",(0,t.jsx)(n.code,{children:"/nifi-api/access/oidc/callback"}),", for me: ",(0,t.jsx)(n.code,{children:"https://nifi.orange.trycatchlearn.fr:8443/nifi-api/access/oidc/callback"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OAuth credentials",src:i(18043).A+"",width:"695",height:"820"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create the OAuth credentials"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once the credentials are created, you will get a client ID and a client secret that you will need in ",(0,t.jsx)(n.code,{children:"NifiCluster"})," definition."]}),"\n",(0,t.jsx)(n.h3,{id:"create-service-account",children:"Create service account"}),"\n",(0,t.jsxs)(n.p,{children:["For the GKE cluster deployment you need a service account with ",(0,t.jsx)(n.code,{children:"Editor"})," role, and ",(0,t.jsx)(n.code,{children:"Kubernetes Engine Admin"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"deploy-secured-cluster",children:"Deploy secured cluster"}),"\n",(0,t.jsx)(n.p,{children:"Once you have completed the above prerequisites, deploying you NiFi cluster will only take three steps and few minutes."}),"\n",(0,t.jsx)(n.p,{children:"Open your Google Cloud Console in your GCP project and run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/Okonpyutaika/nifikop.git\ncd nifikop/docs/tutorials/secured_nifi_cluster_on_gcp_with_external_dns\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-gke-cluster-with-terraform",children:"Deploy GKE cluster with Terraform"}),"\n",(0,t.jsx)(n.h4,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsxs)(n.p,{children:["You can configure variables before running the deployment in the file ",(0,t.jsx)(n.code,{children:"terraform/env/demo.tfvars"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"project"}),": GCP project ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"region"}),": GCP region"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"zone"}),": GCP zone"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"cluster_machines_types"}),": defines the machine type for GKE cluster nodes"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"min_node"}),": minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"max_node"}),": maximum number of nodes in the NodePool. Must be >= min_node_count."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"initial_node_count"}),": the number of nodes to create in this cluster's default node pool."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"preemptible"}),": true/false using preemptibles nodes."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd terraform\n./start.sh <service account key's path>\n"})}),"\n",(0,t.jsx)(n.p,{children:"This operation could take 15 minutes (time to the GKE cluster and its nodes to setup)"}),"\n",(0,t.jsx)(n.p,{children:"Once the deployment is ready load the GKE configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"gcloud container clusters get-credentials nifi-cluster --zone <configured gcp zone> --project <GCP project's id>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"explanations",children:"Explanations"}),"\n",(0,t.jsx)(n.p,{children:"The first step is to deploy a GKE cluster, with the required configuration, you can for example check the nodes configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl get nodes\nNAME                                                  STATUS   ROLES    AGE    VERSION\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-2dl3   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5bzb   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-5t3l   Ready    <none>   110m   v1.15.9-gke.24\ngke-nifi-cluster-tracking-ptf20200520-a1aec8fe-w86j   Ready    <none>   110m   v1.15.9-gke.24\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the cluster is deployed, we created all the required namespaces:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl get namespaces\nNAME              STATUS   AGE\ncert-manager      Active   16m\ndefault           Active   27m\nkube-node-lease   Active   27m\nkube-public       Active   27m\nkube-system       Active   27m\nnifikop           Active   16m\nzookeeper         Active   16m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"cert-manager"})," namespace we deployed a ",(0,t.jsx)(n.code,{children:"cert-manager"})," stack in a cluster-wide scope, which will be responsible for all the certificates generation."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["in this post, we will let ",(0,t.jsx)(n.code,{children:"let's encrypt"})," act as certificate authority.\nFor more informations check ",(0,t.jsx)(n.a,{href:"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration#using-an-existing-issuer",children:"documentation page"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl -n cert-manager get pods\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-55fff7f85f-74nf5              1/1     Running   0          72m\ncert-manager-cainjector-54c4796c5d-mfbbx   1/1     Running   0          72m\ncert-manager-webhook-77ccf5c8b4-m6ws4      1/1     Running   2          72m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It will also deploy the Zookeeper cluster based on the ",(0,t.jsx)(n.a,{href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper",children:"bitnami helm chart"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl -n zookeeper get pods\nNAME          READY   STATUS    RESTARTS   AGE\nzookeeper-0   1/1     Running   0          74m\nzookeeper-1   1/1     Running   0          74m\nzookeeper-2   1/1     Running   0          74m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And finally it deploys the ",(0,t.jsx)(n.code,{children:"NiFiKop"})," operator which is ready to create NiFi clusters:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl -n nifikop get pods\nNAME                            READY   STATUS    RESTARTS   AGE\nexternal-dns-5d588c6cd6-dw44f   1/1     Running   0          2m58s\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-nifikop",children:"Deploy NiFiKop"}),"\n",(0,t.jsxs)(n.p,{children:["Now we have to deploy the ",(0,t.jsx)(n.code,{children:"NiFiKop"})," operator:"]}),"\n",(0,t.jsx)(n.p,{children:"Deploy the NiFiKop crds:"}),"\n",(0,t.jsxs)(l.A,{defaultValue:"k8s16+",values:[{label:"k8s version 1.16+",value:"k8s16+"},{label:"k8s previous versions",value:"k8sprev"}],children:[(0,t.jsx)(a.A,{value:"k8s16+",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/nifi.orange.com_nificlusters_crd.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/nifi.orange.com_nifiusers_crd.yaml\n"})})}),(0,t.jsx)(a.A,{value:"k8sprev",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/v1beta1/nifi.orange.com_nificlusters_crd.yaml\nkubectl apply -f https://raw.githubusercontent.com/Orange-OpenSource/nifikop/master/deploy/crds/v1beta1/nifi.orange.com_nifiusers_crd.yaml\n"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add orange-incubator https://orange-kubernetes-charts-incubator.storage.googleapis.com/\nhelm repo update\n"})}),"\n",(0,t.jsxs)(l.A,{defaultValue:"helm3",values:[{label:"helm 3",value:"helm3"},{label:"helm previous",value:"helm"}],children:[(0,t.jsx)(a.A,{value:"helm3",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# You have to create the namespace before executing following command\nhelm install nifikop \\\n    --namespace=nifikop \\\n    --set image.tag=v0.2.1-release \\\n    orange-incubator/nifikop\n"})})}),(0,t.jsx)(a.A,{value:"helm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm install --name=nifikop \\\n    --namespace=nifikop \\\n    --set image.tag=v0.2.1-release \\\n    orange-incubator/nifikop\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-lets-encrypt-issuer",children:"Deploy Let's encrypt issuer"}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned at the start of the article, we want to delegate the certificate authority to ",(0,t.jsx)(n.a,{href:"https://letsencrypt.org/",children:"Let's Encrypt"}),", so to do this with ",(0,t.jsx)(n.code,{children:"cert-manager"})," we have to create an issuer.\nSo edit the ",(0,t.jsx)(n.code,{children:"kubernetes/nifi/letsencryptissuer.yaml"})," and set it with your own values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: cert-manager.io/v1alpha2\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let\'s Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: <your email>\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account\'s private key.\n      name: example-issuer-account-key\n    # Add a single challenge solver, HTTP01 using nginx\n    solvers:\n      - http01:\n          ingress:\n            ingressTemplate:\n              metadata:\n                annotations:\n                  "external-dns.alpha.kubernetes.io/ttl": "5"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You just have to change the ",(0,t.jsx)(n.code,{children:"Spec.Acme.Email"})," field with your own email.\nYou can also change the acme server to prod one ",(0,t.jsx)(n.code,{children:"https://acme-v02.api.letsencrypt.org/directory"})]}),"\n",(0,t.jsxs)(n.p,{children:["Once the configuration is ok, you can deploy the ",(0,t.jsx)(n.code,{children:"Issuer"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"cd ..\nkubectl create -f kubernetes/nifi/letsencryptissuer.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"deploy-secured-nifi-cluster",children:"Deploy Secured NiFi cluster"}),"\n",(0,t.jsxs)(n.p,{children:["You will now deploy your secured cluster to do so edit the ",(0,t.jsx)(n.code,{children:"kubernetes/nifi/secured_nifi_cluster.yaml"})," and set with your own values:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: securednificluster\n  namespace: nifi\nspec:\n  ...\n  initialAdminUser: <your google account email>\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - <nifi's hostname>:8443\n      # Additionnal nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        ...\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        ...\n    ...\n  ...\n  listenersConfig:\n    useExternalDNS: true\n    clusterDomain: <nifi's domain name>\n    sslSecrets:\n      tlsSecretName: \"test-nifikop\"\n      create: true\n      issuerRef:\n        name: letsencrypt-staging\n        kind: Issuer\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Spec.InitialAdminUser"}),": Your GCP account email (this will give you the admin role into the NiFi cluster), in my case ",(0,t.jsx)(n.code,{children:"alexandre.guitton@orange.com"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Spec.ReadOnlyConfig.NifiProperties.WebProxyHosts[0]"}),": The web hostname configured in the Oauth section, in my case ",(0,t.jsx)(n.code,{children:"nifi.orange.trycatchlearn.fr"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Spec.ReadOnlyConfig.NifiProperties.OverrideConfigs"}),": you have to set the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"nifi.security.user.oidc.client.id"}),": OAuth Client ID"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"nifi.security.user.oidc.client.secret"}),": OAuth Client secret"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Spec.ListenersConfig.ClusterDomain"}),": This the domain name you configure into your ",(0,t.jsx)(n.code,{children:"External DNS"})," and ",(0,t.jsx)(n.code,{children:"Cloud DNS"})," zone. In my case ",(0,t.jsx)(n.code,{children:"orange.trycatchlearn.fr"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once the configuration is ok, you can deploy the ",(0,t.jsx)(n.code,{children:"NifiCluster"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl create -f kubernetes/nifi/secured_nifi_cluster.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The first time can take some time, the ",(0,t.jsx)(n.code,{children:"cert-manager"})," and ",(0,t.jsx)(n.code,{children:"Let's encrypt"})," will check that you are able to manage the dns zone, so if you check the pods:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl get pods -n nifikop\nNAME                            READY   STATUS    RESTARTS   AGE\ncm-acme-http-solver-4fg5b       1/1     Running   0          18s\ncm-acme-http-solver-6sw9x       1/1     Running   0          20s\ncm-acme-http-solver-bpzvm       1/1     Running   0          20s\ncm-acme-http-solver-f8xvs       1/1     Running   0          19s\ncm-acme-http-solver-k997c       1/1     Running   0          17s\ncm-acme-http-solver-l5fzz       1/1     Running   0          18s\nexternal-dns-569bf79b57-hjmtt   1/1     Running   0          9h\nnifikop-56cb587d96-p8vdf        1/1     Running   0          29s\n"})}),"\n",(0,t.jsx)(n.p,{children:"And check the ingresses:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get ingresses -n nifikop\nNAME                        HOSTS                                                 ADDRESS          PORTS   AGE\ncm-acme-http-solver-4pff9   nifi-2-node.nifi-headless.orange.trycatchlearn.fr                      80      2m27s\ncm-acme-http-solver-cfsf4   nifi-0-node.nifi-headless.orange.trycatchlearn.fr     34.120.24.109    80      2m30s\ncm-acme-http-solver-hn8jj   nifi-controller.nifikop.mgt.orange.trycatchlearn.fr   34.120.90.24     80      2m29s\ncm-acme-http-solver-llhsp   nifi-1-node.nifi-headless.orange.trycatchlearn.fr                      80      2m27s\ncm-acme-http-solver-v8dmm   nifi-headless.orange.trycatchlearn.fr                 34.120.201.215   80      2m28s\ncm-acme-http-solver-xvs9f   nifi.orange.trycatchlearn.fr                          35.244.202.176   80      2m27s\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can see some ngnix instances that are used to validate all the dns names you required into your certificates (for nodes and services)."}),"\n",(0,t.jsx)(n.p,{children:"After some times your cluster should be running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"kubectl get pods -n nifikop\nNAME                            READY   STATUS    RESTARTS   AGE\nexternal-dns-569bf79b57-hjmtt   1/1     Running   0          9h\nnifi-0-nodekmhgz                1/1     Running   0          27m\nnifi-1-node4465q                1/1     Running   0          27m\nnifi-2-node5jwwx                1/1     Running   0          27m\nnifikop-56cb587d96-p8vdf        1/1     Running   0          40m\n"})}),"\n",(0,t.jsx)(n.h3,{id:"access-to-your-secured-nifi-cluster",children:"Access to your secured NiFi Cluster"}),"\n",(0,t.jsxs)(n.p,{children:["You can now access the NiFi cluster using the loadbalancer service hostname ",(0,t.jsx)(n.code,{children:"<nifi's cluster name>.<DNS name>"}),", in my case it's ",(0,t.jsx)(n.a,{href:"https://nifi.orange.trycatchlearn.fr:8443/nifi",children:"https://nifi.orange.trycatchlearn.fr:8443/nifi"})," and authenticate on the cluster using the admin account email address configured in the ",(0,t.jsx)(n.code,{children:"NifiCluster"})," resource."]}),"\n",(0,t.jsx)(n.p,{children:"Here is my 3-nodes secured NiFi cluster up and running:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"3 nodes cluster",src:i(6563).A+"",width:"1913",height:"587"})}),"\n",(0,t.jsx)(n.p,{children:"3-nodes secured NiFi cluster:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"3 nodes",src:i(25172).A+"",width:"1861",height:"234"})}),"\n",(0,t.jsx)(n.p,{children:"You can now update the authorizations and add additional users/groups."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Just have a look on ",(0,t.jsx)(n.a,{href:"https://orange-opensource.github.io/nifikop/docs/3_tasks/2_security/1_ssl#operator-access-policies",children:"documentation's page"})," to finish cleaning setup.\nAnd you can now start to play with scaling, following the ",(0,t.jsx)(n.a,{href:"https://orange-opensource.github.io/nifikop/docs/3_tasks/2_security/1_ssl#scale-up---node-declaration",children:"documentation's page"})]})}),"\n",(0,t.jsx)(n.h2,{id:"cleaning",children:"Cleaning"}),"\n",(0,t.jsx)(n.p,{children:"Start to remove you NiFi cluster and NiFiKop operator:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl delete nificlusters.nifi.orange.com nifi -n nifikop\nhelm del nifikop\nkubectl delete crds nificlusters.nifi.orange.com\nkubectl delete crds nifiusers.nifi.orange.com\nkubectl delete issuers.cert-manager.io letsencrypt-staging -n nifikop\n"})}),"\n",(0,t.jsx)(n.p,{children:"To destroy all resources you created, you just need to run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-consol",children:"cd terraform\n./destroy.sh <service account key's path>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},97265:(e,n,i)=>{i.d(n,{A:()=>l});i(63696);var r=i(11750);const t={tabItem:"tabItem_wHwb"};var s=i(62540);function l(e){var n=e.children,i=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:i,children:n})}},65457:(e,n,i)=>{i.d(n,{A:()=>k});var r=i(63696),t=i(11750),s=i(93707),l=i(49519),a=i(83604),c=i(95196),o=i(76229),d=i(88030);function u(e){var n,i;return null!=(n=null==(i=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:i.filter(Boolean))?n:[]}function h(e){var n=e.values,i=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(i);return function(e){var n=(0,o.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,i])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function g(e){var n=e.queryString,i=void 0!==n&&n,t=e.groupId,s=(0,l.W6)(),a=function(e){var n=e.queryString,i=void 0!==n&&n,r=e.groupId;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:i,groupId:t});return[(0,c.aZ)(a),(0,r.useCallback)((function(e){if(a){var n=new URLSearchParams(s.location.search);n.set(a,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[a,s])]}function m(e){var n,i,t,s,l=e.defaultValue,c=e.queryString,o=void 0!==c&&c,u=e.groupId,m=h(e),f=(0,r.useState)((function(){return function(e){var n,i=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+i+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return i}var t=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:m})})),x=f[0],j=f[1],y=g({queryString:o,groupId:u}),b=y[0],v=y[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),i=(0,d.Dv)(n),t=i[0],s=i[1],[t,(0,r.useCallback)((function(e){n&&s.set(e)}),[n,s])]),w=k[0],A=k[1],N=function(){var e=null!=b?b:w;return p({value:e,tabValues:m})?e:null}();return(0,a.A)((function(){N&&j(N)}),[N]),{selectedValue:x,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),v(e),A(e)}),[v,A,m]),tabValues:m}}var f=i(95200);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=i(62540);function y(e){var n=e.className,i=e.block,r=e.selectedValue,l=e.selectValue,a=e.tabValues,c=[],o=(0,s.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,i=c.indexOf(n),t=a[i].value;t!==r&&(o(n),l(t))},u=function(e){var n,i=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,t=c.indexOf(e.currentTarget)+1;i=null!=(r=c[t])?r:c[0];break;case"ArrowLeft":var s,l=c.indexOf(e.currentTarget)-1;i=null!=(s=c[l])?s:c[c.length-1]}null==(n=i)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},n),children:a.map((function(e){var n=e.value,i=e.label,s=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){c.push(e)},onKeyDown:u,onClick:d},s,{className:(0,t.A)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=i?i:n}),n)}))})}function b(e){var n=e.lazy,i=e.children,s=e.selectedValue,l=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){var a=l.find((function(e){return e.props.value===s}));return a?(0,r.cloneElement)(a,{className:(0,t.A)("margin-top--md",a.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function v(e){var n=m(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,j.jsx)(y,Object.assign({},n,e)),(0,j.jsx)(b,Object.assign({},n,e))]})}function k(e){var n=(0,f.A)();return(0,j.jsx)(v,Object.assign({},e,{children:u(e.children)}),String(n))}},25172:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/3_nodes-09ddf2fa04ee827ae2632a3019ca2aab.png"},6563:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/3_nodes_cluster-97f4c386a2bec5bd0ab11c3b90ca1f7d.png"},18043:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/oauth_credentials-531aa57e08dcc1e4a0a0bace39d779c3.png"},43023:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(63696);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}},23906:e=>{e.exports=JSON.parse('{"permalink":"/nifikop/blog/2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns","source":"@site/blog/2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns.md","title":"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform","description":"Objectives","date":"2020-06-30T00:00:00.000Z","tags":[{"inline":true,"label":"gke","permalink":"/nifikop/blog/tags/gke"},{"inline":true,"label":"nifikop","permalink":"/nifikop/blog/tags/nifikop"},{"inline":true,"label":"secured","permalink":"/nifikop/blog/tags/secured"},{"inline":true,"label":"oidc","permalink":"/nifikop/blog/tags/oidc"},{"inline":true,"label":"google cloud platform","permalink":"/nifikop/blog/tags/google-cloud-platform"},{"inline":true,"label":"google cloud","permalink":"/nifikop/blog/tags/google-cloud"},{"inline":true,"label":"gcp","permalink":"/nifikop/blog/tags/gcp"},{"inline":true,"label":"kubernetes","permalink":"/nifikop/blog/tags/kubernetes"}],"readingTime":7.88,"hasTruncateMarker":true,"authors":[{"name":"Alexandre Guitton","title":"Alexandre Guitton","url":"https://github.com/erdrix","imageURL":"https://avatars0.githubusercontent.com/u/10503351?s=460&u=ea08d802388c79c17655c314296be58814391572&v=4","key":"aguitton","page":null}],"frontMatter":{"slug":"2020-06-30-secured_nifi_cluster_on_gcp_with_external_dns","title":"Secured NiFi cluster with NiFiKop with external dns on the Google Cloud Platform","authors":["aguitton"],"tags":["gke","nifikop","secured","oidc","google cloud platform","google cloud","gcp","kubernetes"]},"unlisted":false,"nextItem":{"title":"Secured NiFi cluster with NiFiKop on the Google Cloud Platform","permalink":"/nifikop/blog/secured_nifi_cluster_on_gcp"}}')}}]);