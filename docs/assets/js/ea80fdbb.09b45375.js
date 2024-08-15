"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6739],{5462:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(4848),r=s(8453);const i={},o="UIPrompt",d={id:"Module Ui/UIPrompt",title:"UIPrompt",description:"A UI widget displaying prompt with a text content and a menu of actions.",source:"@site/docs/Module Ui/UIPrompt.md",sourceDirName:"Module Ui",slug:"/Module Ui/UIPrompt",permalink:"/docs/Module Ui/UIPrompt",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Ui/UIPrompt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UIPrint",permalink:"/docs/Module Ui/UIPrint"},next:{title:"UISprite",permalink:"/docs/Module Ui/UISprite"}},l={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(n){const e={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"uiprompt",children:"UIPrompt"})}),"\n",(0,t.jsx)(e.p,{children:"A UI widget displaying prompt with a text content and a menu of actions.\r\nIt emit 'E_ITEM_SELECTED' with data { id, index }"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"inherit from: UIWidget"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"new UIPrompt"}),"(): UIPrompt"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"$handleMenuItemSelected"}),"(data: any): void"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.strong,{children:"data"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"addAction"}),"(id: string, text: string): void",(0,t.jsx)(e.br,{}),"\nAdd a new menu button."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"id"}),": The unique identifier."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"text"}),": The text or label."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"clearActions"}),"(): void",(0,t.jsx)(e.br,{}),"\nRemove all menu buttons."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"delete"}),"(): void",(0,t.jsx)(e.br,{}),"\nFree all resources.\r\nWarning: You need to call this method to free allocation for this object."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"focus"}),"(): void",(0,t.jsx)(e.br,{}),"\nFocus on."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"removeAction"}),"(id: string): void",(0,t.jsx)(e.br,{}),"\nRemove a menu button."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"id"}),": The unique identifier."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"setText"}),"(text: string): void",(0,t.jsx)(e.br,{}),"\nSet the text message."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"text"}),": The text content."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"unfocus"}),"(): void",(0,t.jsx)(e.br,{}),"\nFocus off."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"update"}),"(ts: number): void",(0,t.jsx)(e.br,{}),"\nThe update function."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ts"}),": The timestep."]}),"\n"]}),"\n"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>d});var t=s(6540);const r={},i=t.createContext(r);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);