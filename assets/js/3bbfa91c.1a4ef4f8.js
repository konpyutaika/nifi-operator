"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[32286],{20792:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc","title":"OpenId Connect","description":"To enable authentication via OpenId Connect refering to NiFi Administration guide required some configuration into nifi.properties.","source":"@site/../docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc.md","sourceDirName":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication","slug":"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc","permalink":"/nifikop/docs/next/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc.md","tags":[],"version":"current","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1707144987000,"frontMatter":{"id":"1_oidc","title":"OpenId Connect","sidebar_label":"OpenId Connect"},"sidebar":"docs","previous":{"title":"SSL configuration","permalink":"/nifikop/docs/next/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration"},"next":{"title":"Custom User Authorizers","permalink":"/nifikop/docs/next/3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer"}}');var r=i(62540),o=i(43023);const s={id:"1_oidc",title:"OpenId Connect",sidebar_label:"OpenId Connect"},a=void 0,c={},d=[];function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["To enable authentication via OpenId Connect refering to ",(0,r.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html",children:"NiFi Administration guide"})," required some configuration into ",(0,r.jsx)(n.code,{children:"nifi.properties"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In addition and to ensure multiple identity provider support, we recommended to add the following configuration to your ",(0,r.jsx)(n.code,{children:"nifi.properties"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\nnifi.security.identity.mapping.value.dn=$1\nnifi.security.identity.mapping.transform.dn=NONE\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To perform this with ",(0,r.jsx)(n.code,{children:"NiFiKop"})," you just have to configure the ",(0,r.jsx)(n.code,{children:"Spec.NifiProperties.OverrideConfigs"})," field with your OIDC configuration, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: nifi.konpyutaika.com/v1\nkind: NifiCluster\n...\nspec:\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n      # Additionnal nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        nifi.security.user.oidc.discovery.url=<oidc server discovery url>\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\n        nifi.security.identity.mapping.value.dn=$1\n        nifi.security.identity.mapping.transform.dn=NONE\n      ...\n   ...\n...\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(63696);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);