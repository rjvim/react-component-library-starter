"use strict";(self.webpackChunkapps_docs=self.webpackChunkapps_docs||[]).push([[61],{627:(e,n,t)=>{t.d(n,{A:()=>o});t(4041);var a=t(4357),i=t(2883),s=t(6558),l=t(5720),r=t(1085);function c(e){let{className:n}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(i.Rc,{}),className:(0,a.A)(n,s.G.common.unlistedBanner),children:(0,r.jsx)(i.Uh,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.AE,{}),(0,r.jsx)(c,{...e})]})}},2229:(e,n,t)=>{t.d(n,{A:()=>o});t(4041);var a=t(4357),i=t(3671);const s={tableOfContents:"tableOfContents_TN1Q",docItemContainer:"docItemContainer_JtJJ"};var l=t(1085);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(i.A,{...t,linkClassName:r,linkActiveClassName:c})})}},2431:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(4041);var a=t(4357),i=t(7868),s=t(6558),l=t(5924),r=t(9572),c=t(2229),o=t(2837),d=t(6017);const m={mdxPageWrapper:"mdxPageWrapper_SLvB"};var u=t(1085);function f(e){const{content:n}=e,{metadata:t,assets:f}=n,{title:h,editUrl:v,description:x,frontMatter:g,lastUpdatedBy:p,lastUpdatedAt:j}=t,{keywords:A,wrapperClassName:b,hide_table_of_contents:L}=g,N=f.image??g.image,H=!!(v||j||p);return(0,u.jsx)(i.e3,{className:(0,a.A)(b??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(l.A,{children:[(0,u.jsx)(i.be,{title:h,description:x,keywords:A,image:N}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.A)("col",!L&&"col--8"),children:[(0,u.jsx)(o.A,{metadata:t}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(n,{})})}),H&&(0,u.jsx)(d.A,{className:(0,a.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:v,lastUpdatedAt:j,lastUpdatedBy:p})]}),!L&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},2837:(e,n,t)=>{t.d(n,{A:()=>d});t(4041);var a=t(4357),i=t(2883),s=t(6558),l=t(5720),r=t(1085);function c(e){let{className:n}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(i.Yh,{}),className:(0,a.A)(n,s.G.common.draftBanner),children:(0,r.jsx)(i.TT,{})})}var o=t(627);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:a}=n;return(0,r.jsxs)(r.Fragment,{children:[(t||a.unlisted)&&(0,r.jsx)(o.A,{}),a.draft&&(0,r.jsx)(c,{})]})}},2883:(e,n,t)=>{t.d(n,{AE:()=>c,Rc:()=>l,TT:()=>d,Uh:()=>r,Yh:()=>o});t(4041);var a=t(5141),i=t(2221),s=t(1085);function l(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(i.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3671:(e,n,t)=>{t.d(n,{A:()=>v});var a=t(4041),i=t(4293);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(6279),u=t(1085);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const v=(0,i.p)(),x=o??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:g}}),[r,c,x,g])),(0,u.jsx)(h,{toc:p,className:t,linkClassName:r,...f})}}}]);