"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[64013],{95988:(e,t,a)=>{a.d(t,{Z:()=>_});var s=a(30808),r=a(27378),i=a(38944),n=a(1965),l=a(58357),c=a(81884),o=a(99213),d=a(3620),m=a(8862);function u(e){var t=(0,d.TH)().pathname;return(0,r.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)}))}),[e,t])}const g={sidebar:"sidebar_CLW8",sidebarItemTitle:"sidebarItemTitle_DQfJ",sidebarItemList:"sidebarItemList_rvuc",sidebarItem:"sidebarItem__RMN",sidebarItemLink:"sidebarItemLink_Ony9",sidebarItemLinkActive:"sidebarItemLinkActive_MJ75"};var b=a(24246);function h(e){var t=e.sidebar,a=u(t.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,b.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:a.map((function(e){return(0,b.jsx)("li",{className:g.sidebarItem,children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=a(63471);function j(e){var t=u(e.sidebar.items);return(0,b.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,b.jsx)(v.Zo,{component:j,props:e})}function f(e){var t=e.sidebar,a=(0,l.i)();return null!=t&&t.items.length?"mobile"===a?(0,b.jsx)(p,{sidebar:t}):(0,b.jsx)(h,{sidebar:t}):null}var x=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,r=e.children,l=(0,s.Z)(e,x),c=t&&t.items.length>0;return(0,b.jsx)(n.Z,Object.assign({},l,{children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(f,{sidebar:t}),(0,b.jsx)("main",{className:(0,i.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog",children:r}),a&&(0,b.jsx)("div",{className:"col col--2",children:a})]})})}))}},6923:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});a(27378);var s=a(38944),r=a(99213),i=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};var n=a(1123),l=a(75484),c=a(95988),o=a(51478),d=a(1999);const m={tag:"tag_FHL6"};var u=a(24246);function g(e){var t=e.letterEntry;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.Z,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((function(e){return(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.Z,Object.assign({},e))},e.permalink)}))}),(0,u.jsx)("hr",{})]})}function b(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],s=t[0];return a.localeCompare(s)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return(0,u.jsx)("section",{className:"margin-vert--lg",children:t.map((function(e){return(0,u.jsx)(g,{letterEntry:e},e.letter)}))})}var h=a(60505);function v(e){var t=e.tags,a=e.sidebar,r=i();return(0,u.jsxs)(n.FG,{className:(0,s.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,u.jsx)(n.d,{title:r}),(0,u.jsx)(h.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(c.Z,{sidebar:a,children:[(0,u.jsx)(d.Z,{as:"h1",children:r}),(0,u.jsx)(b,{tags:t})]})]})}},51478:(e,t,a)=>{a.d(t,{Z:()=>l});a(27378);var s=a(38944),r=a(81884);const i={tag:"tag_otG2",tagRegular:"tagRegular_s0E1",tagWithCount:"tagWithCount_PGyn"};var n=a(24246);function l(e){var t=e.permalink,a=e.label,l=e.count;return(0,n.jsxs)(r.Z,{href:t,className:(0,s.Z)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,n.jsx)("span",{children:l})]})}}}]);