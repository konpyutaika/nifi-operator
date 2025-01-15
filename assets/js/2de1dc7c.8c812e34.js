"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[76290],{7999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration","title":"SSL configuration","description":"The NiFi operator makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration.","source":"@site/versioned_docs/version-v1.4.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration.md","sourceDirName":"3_manage_nifi/1_manage_clusters/1_deploy_cluster","slug":"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration","permalink":"/nifikop/docs/v1.4.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.4.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration.md","tags":[],"version":"v1.4.1","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"4_ssl_configuration","title":"SSL configuration","sidebar_label":"SSL configuration"},"sidebar":"docs","previous":{"title":"Istio service mesh","permalink":"/nifikop/docs/v1.4.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/2_istio_service_mesh"},"next":{"title":"OpenId Connect","permalink":"/nifikop/docs/v1.4.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc"}}');var r=t(62540),i=t(43023);const c={id:"4_ssl_configuration",title:"SSL configuration",sidebar_label:"SSL configuration"},a=void 0,l={},o=[{value:"Using an existing Issuer",id:"using-an-existing-issuer",level:2},{value:"Example: Let&#39;s encrypt",id:"example-lets-encrypt",level:3},{value:"Create SSL credentials",id:"create-ssl-credentials",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NiFi operator"})," makes securing your NiFi cluster with SSL. You may provide your own certificates, or instruct the operator to create them for from your cluster configuration."]}),"\n",(0,r.jsx)(n.p,{children:"Below this is an example configuration required to secure your cluster with SSL:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\n...\nspec:\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n        ...\n  ...\n  listenersConfig:\n    internalListeners:\n      - type: "https"\n        name: "https"\n        containerPort: 8443\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"readOnlyConfig.nifiProperties.webProxyHosts"}),": A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host[",":port","] than it is bound to. ",(0,r.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties",children:"web-properties"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"listenersConfig.sslSecrets.create"})," is set to ",(0,r.jsx)(n.code,{children:"false"}),", the operator will look for the secret at ",(0,r.jsx)(n.code,{children:"listenersConfig.sslSecrets.tlsSecretName"})," and expect these values:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"caCert"}),(0,r.jsx)(n.td,{children:"The CA certificate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"caKey"}),(0,r.jsx)(n.td,{children:"The CA private key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientCert"}),(0,r.jsx)(n.td,{children:"A client certificate (this will be used by operator for NiFI operations)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientKey"}),(0,r.jsx)(n.td,{children:"The private key for clientCert"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"using-an-existing-issuer",children:"Using an existing Issuer"}),"\n",(0,r.jsxs)(n.p,{children:["As described in the ",(0,r.jsx)(n.a,{href:"/nifikop/docs/v1.4.1/5_references/1_nifi_cluster/6_listeners_config#sslsecrets",children:"Reference section"}),", instead of using a self-signed certificate as CA, you can use an existing one.\nIn order to do so, you only have to refer it into your ",(0,r.jsx)(n.code,{children:"Spec.ListenerConfig.SslSecrets.IssuerRef"})," field."]}),"\n",(0,r.jsx)(n.h3,{id:"example-lets-encrypt",children:"Example: Let's encrypt"}),"\n",(0,r.jsxs)(n.p,{children:["Let's say you have an existing DNS server, with ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-sigs/external-dns",children:"external dns"})," deployed into your cluster's namespace.\nYou can easily use Let's encrypt as authority for your certificate."]}),"\n",(0,r.jsx)(n.p,{children:"To do this, you have to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create an issuer:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: cert-manager.io/v1alpha2\nkind: Issuer\nmetadata:\n  name: letsencrypt-staging\nspec:\n  acme:\n    # You must replace this email address with your own.\n    # Let\'s Encrypt will use this to contact you about expiring\n    # certificates, and issues related to your account.\n    email: <your email address>\n    server: https://acme-staging-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      # Secret resource used to store the account\'s private key.\n      name: example-issuer-account-key\n    # Add a single challenge solver, HTTP01 using nginx\n    solvers:\n      - http01:\n          ingress:\n            ingressTemplate:\n              metadata:\n                annotations:\n                  "external-dns.alpha.kubernetes.io/ttl": "5"\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Setup External dns and correctly create your issuer into your cluster configuration:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\n...\nspec:\n  ...\n  clusterSecure: true\n  siteToSiteSecure: true\n  ...\n  listenersConfig:\n    clusterDomain: <DNS zone name>\n    useExternalDNS: true\n    ...\n    sslSecrets:\n      tlsSecretName: "test-nifikop"\n      create: true\n      issuerRef:\n        name: letsencrypt-staging\n        kind: Issuer\n'})}),"\n",(0,r.jsx)(n.h2,{id:"create-ssl-credentials",children:"Create SSL credentials"}),"\n",(0,r.jsxs)(n.p,{children:["You may use ",(0,r.jsx)(n.code,{children:"NifiUser"})," resource to create new certificates for your applications, allowing them to query your Nifi cluster."]}),"\n",(0,r.jsxs)(n.p,{children:["To create a new client you will need to generate new certificates sign by the CA. The operator can automate this for you using the ",(0,r.jsx)(n.code,{children:"NifiUser"})," CRD:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"cat << EOF | kubectl apply -n nifi -f -\napiVersion:  nifi.konpyutaika.com/v1\nkind: NifiUser\nmetadata:\n  name: example-client\n  namespace: nifi\nspec:\n  clusterRef:\n    name: nifi\n  secretName: example-client-secret\nEOF\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will create a user and store its credentials in the secret ",(0,r.jsx)(n.code,{children:"example-client-secret"}),". The secret contains these fields:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ca.crt"}),(0,r.jsx)(n.td,{children:"The CA certificate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tls.crt"}),(0,r.jsx)(n.td,{children:"The user certificate"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tls.key"}),(0,r.jsx)(n.td,{children:"The user private key"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"You can then mount these secret to your pod. Alternatively, you can write them to your local machine by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"kubectl get secret example-client-secret -o jsonpath=\"{['data']['ca\\.crt']}\" | base64 -d > ca.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.crt']}\" | base64 -d > tls.crt\nkubectl get secret example-client-secret -o jsonpath=\"{['data']['tls\\.key']}\" | base64 -d > tls.key\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The operator can also include a Java keystore format (JKS) with your user secret if you'd like. Add ",(0,r.jsx)(n.code,{children:"includeJKS"}),": ",(0,r.jsx)(n.code,{children:"true"})," to the ",(0,r.jsx)(n.code,{children:"spec"})," like shown above, and then the user-secret will gain these additional fields:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"key"}),(0,r.jsx)(n.th,{children:"value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tls.jks"}),(0,r.jsx)(n.td,{children:"The java keystore containing both the user keys and the CA (use this for your keystore AND truststore)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pass.txt"}),(0,r.jsx)(n.td,{children:"The password to decrypt the JKS (this will be randomly generated)"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(63696);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);