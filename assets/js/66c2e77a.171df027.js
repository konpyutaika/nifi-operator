"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[13796],{22909:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer","title":"Custom User Authorizers","description":"This is an advanced configuration topic. In most cases, the default NiFi authorizer configuration is sufficient.","source":"@site/versioned_docs/version-v1.11.4/3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer.md","sourceDirName":"3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization","slug":"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer","permalink":"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer","draft":false,"unlisted":false,"editUrl":"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.11.4/3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer.md","tags":[],"version":"v1.11.4","lastUpdatedBy":"Juldrixx","lastUpdatedAt":1731668582000,"frontMatter":{"id":"1_custom_user_authorizer","title":"Custom User Authorizers","sidebar_label":"Custom User Authorizers"},"sidebar":"docs","previous":{"title":"OpenId Connect","permalink":"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc"},"next":{"title":"Scaling mechanism","permalink":"/nifikop/docs/3_manage_nifi/1_manage_clusters/2_cluster_scaling/1_scaling_mechanism"}}');var o=i(62540),n=i(43023);const s={id:"1_custom_user_authorizer",title:"Custom User Authorizers",sidebar_label:"Custom User Authorizers"},a=void 0,c={},d=[];function u(e){const r={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.admonition,{type:"info",children:(0,o.jsx)(r.p,{children:"This is an advanced configuration topic. In most cases, the default NiFi authorizer configuration is sufficient."})}),"\n",(0,o.jsxs)(r.p,{children:["According to the NiFi Admin Guide, an ",(0,o.jsx)(r.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration",children:"Authorizer"})," grants users the privileges to manage users and policies by creating preliminary authorizations at startup. By default, the ",(0,o.jsx)(r.code,{children:"StandardManagedAuthorizer"})," leverages a ",(0,o.jsx)(r.code,{children:"FileUserGroupProvider"})," and a ",(0,o.jsx)(r.code,{children:"FileAccessPolicyProvider"})," which are file-based rules for each user you allow to interact with your NiFi cluster."]}),"\n",(0,o.jsxs)(r.p,{children:["In many cases, the default authorizer configuration is enough to control access to a NiFi cluster. However, there may be advanced cases where the default ",(0,o.jsx)(r.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#standardmanagedauthorizer",children:(0,o.jsx)(r.code,{children:"managed-authorizer"})})," isn't sufficient to make every authorization decision you need. In this case, you can provide a custom authorizer extension and use that instead."]}),"\n",(0,o.jsxs)(r.p,{children:["Suppose a custom Authorizer is written and deployed with NiFi that reads the rules from a remote database rather than a local file. We'll call this ",(0,o.jsx)(r.code,{children:"DatabaseAuthorizer"}),". Also suppose it is composed of a ",(0,o.jsx)(r.code,{children:"DatabaseUserGroupProvider"})," and a ",(0,o.jsx)(r.code,{children:"DatabaseAccessPolicyProvider"}),". In order to leverage these, they must end up on NiFi's classpath."]}),"\n",(0,o.jsxs)(r.p,{children:["In order to use this authorizer, you need to update NiFi's ",(0,o.jsx)(r.code,{children:"authorizers.xml"})," configuration. This can be done through NiFiKOp by setting either the ",(0,o.jsx)(r.code,{children:"Spec.readOnlyConfig.authorizerConfig.replaceTemplateConfigMap"})," or ",(0,o.jsx)(r.code,{children:"Spec.readOnlyConfig.authorizerConfig.replaceTemplateSecretConfig"}),". The NiFiKOp deployment is dynamic in that node identities are determined at deploy time, so the authorizer configuration is templated to account for this. This means that the replacement ConfigMap or Secret must also be templated."]}),"\n",(0,o.jsx)(r.p,{children:"Following the example, the below would be a sufficient authorizer template replacement:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:'{{- $nodeList := .NodeList }}\n{{- $clusterName := .ClusterName }}\n{{- $namespace := .Namespace }}<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<authorizers>\n    <userGroupProvider>\n        <identifier>file-user-group-provider</identifier>\n        <class>org.apache.nifi.authorization.FileUserGroupProvider</class>\n        <property name="Users File">../data/users.xml</property>\n        <property name="Legacy Authorized Users File"></property>\n        <property name="Initial User Identity admin">{{ .ControllerUser }}</property>\n{{- range $i, $host := .NodeList }}\n        <property name="Initial User Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n    </userGroupProvider>\n    <userGroupProvider>\n        <identifier>database-user-group-provider</identifier>\n        <class>my.custom.DatabaseUserGroupProvider</class>\n        \x3c!-- Any extra configuration for this provider goes here --\x3e\n{{- range $i, $host := .NodeList }}\n        <property name="Initial User Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n    </userGroupProvider>\n    <accessPolicyProvider>\n        <identifier>file-access-policy-provider</identifier>\n        <class>org.apache.nifi.authorization.FileAccessPolicyProvider</class>\n        <property name="User Group Provider">file-user-group-provider</property>\n        <property name="Authorizations File">../data/authorizations.xml</property>\n        <property name="Initial Admin Identity">{{ .ControllerUser }}</property>\n        <property name="Legacy Authorized Users File"></property>\n{{- range $i, $host := .NodeList }}\n        <property name="Node Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n\t\t<property name="Node Group"></property>\n    </accessPolicyProvider>\n    <accessPolicyProvider>\n        <identifier>database-access-policy-provider</identifier>\n        <class>my.custom.DatabaseAccessPolicyProvider</class>\n        \x3c!-- Any extra configuration for this provider goes here --\x3e\n{{- range $i, $host := .NodeList }}\n        <property name="Node Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n\t\t<property name="Node Group"></property>\n    </accessPolicyProvider>\n    <authorizer>\n        <identifier>managed-authorizer</identifier>\n        <class>org.apache.nifi.authorization.StandardManagedAuthorizer</class>\n        <property name="Access Policy Provider">file-access-policy-provider</property>\n    </authorizer>\n    <authorizer>\n        <identifier>custom-database-authorizer</identifier>\n        <class>my.custom.DatabaseAuthorizer</class>\n        <property name="Access Policy Provider">database-access-policy-provider</property>\n    </authorizer>\n</authorizers>\n'})}),"\n",(0,o.jsxs)(r.p,{children:["And finally, the NiFi property ",(0,o.jsx)(r.code,{children:"nifi.security.user.authorizer"})," indicates which of the configured authorizers in the authorizers.xml file to use. Following the example, we'd set the property to:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-sh",children:"nifi.security.user.authorizer=custom-database-authorizer\n"})})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},43023:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>a});var t=i(63696);const o={},n=t.createContext(o);function s(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);