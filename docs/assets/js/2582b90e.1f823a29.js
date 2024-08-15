"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[992],{4947:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(4848),r=s(8453);const i={},l="DNAManager",o={id:"Module Dna/DNAManager",title:"DNAManager",description:"Singleton pure ECS manager.",source:"@site/docs/Module Dna/DNAManager.md",sourceDirName:"Module Dna",slug:"/Module Dna/DNAManager",permalink:"/docs/docs/Module Dna/DNAManager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Dna/DNAManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DNAComponent",permalink:"/docs/docs/Module Dna/DNAComponent"},next:{title:"DNASystem",permalink:"/docs/docs/Module Dna/DNASystem"}},d={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(n){const e={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"dnamanager",children:"DNAManager"})}),"\n",(0,t.jsx)(e.p,{children:"Singleton pure ECS manager."}),"\n",(0,t.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"new DNAManager"}),"(): DNAManager"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"addComponent"}),"(eid: number, component: DNAComponent): void",(0,t.jsx)(e.br,{}),"\nAdds component to an entity."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"eid"}),": The entity's id."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"component"}),": The component."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"createEntity"}),"(): number",(0,t.jsx)(e.br,{}),"\nCreates a new entity and returns its uid."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"draw"}),"(): void",(0,t.jsx)(e.br,{}),"\nThe draw function."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"findEntities"}),"(componentTypeName: string)",(0,t.jsx)(e.br,{}),"\nFind entities having that component."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"componentTypeName"}),": The component typename."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"findEntity"}),"(componentTypeName: string): number",(0,t.jsx)(e.br,{}),"\nFind the first entity having that component. If no match is found, it returns -1."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"componentTypeName"}),": The component typename."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"findSystems"}),"(tag: string)",(0,t.jsx)(e.br,{}),"\nReturns all systems that have specific tag."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"tag"}),": The tag to search."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"getComponent"}),"(eid: number, typename: string): DNAComponent",(0,t.jsx)(e.br,{}),"\nReturns component from an entity."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"eid"}),": The entity's id."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"typename"}),": The component typename."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"getComponents"}),"(eid: number): Map",(0,t.jsx)(e.br,{}),"\nReturns all components from an entity."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"eid"}),": The entity's id."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"getSystems"}),"()",(0,t.jsx)(e.br,{}),"\nReturns the list of systems."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"hasComponent"}),"(eid: number, typename: string): boolean",(0,t.jsx)(e.br,{}),"\nCheck if an entity has a specific component."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"eid"}),": The entity's id."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"typename"}),": The component typename."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"hasEntity"}),"(id: number): boolean",(0,t.jsx)(e.br,{}),"\nChecks if an entity exists."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"id"}),": The entity's id."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"removeComponent"}),"(eid: number, typename: string): void",(0,t.jsx)(e.br,{}),"\nRemoves component to an entity."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"eid"}),": The entity's id."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"typename"}),": The component typename."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"removeComponentIfExist"}),"(eid: number, typename: string): boolean",(0,t.jsx)(e.br,{}),"\nRemoves a component from an entity if it exists and returns true, otherwise it returns false."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"eid"}),": The entity's id."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"typename"}),": The component typename."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"removeEntity"}),"(eid: number): void",(0,t.jsx)(e.br,{}),"\nRemoves entity."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"eid"}),": The entity's id."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"reset"}),"(): void",(0,t.jsx)(e.br,{}),"\nResets all."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"setup"}),"(systems: DNASystem[]): void",(0,t.jsx)(e.br,{}),"\nSetup your systems here."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"systems"}),": A list of systems."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"update"}),"(ts: number): void",(0,t.jsx)(e.br,{}),"\nThe update function."]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"ts"}),": The timestep."]}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);