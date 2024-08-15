"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[659],{5090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(4848),r=t(8453);const i={},c="EventManager",l={id:"Module Core/EventManager",title:"EventManager",description:"Singleton managing subscribing to and emitting events.",source:"@site/docs/Module Core/EventManager.md",sourceDirName:"Module Core",slug:"/Module Core/EventManager",permalink:"/docs/docs/Module Core/EventManager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Core/EventManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CurveInterpolator",permalink:"/docs/docs/Module Core/CurveInterpolator"},next:{title:"ObjectPool",permalink:"/docs/docs/Module Core/ObjectPool"}},o={},a=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"eventmanager",children:"EventManager"})}),"\n",(0,s.jsx)(n.p,{children:"Singleton managing subscribing to and emitting events."}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"new EventManager"}),"(): EventManager"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"emit"}),"(emitter: any, type: string, data: any): Promise",(0,s.jsx)(n.br,{}),"\nNotifies subscribers of an event and returns a promise that resolves when all subscriber callbacks have been executed."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emitter"}),": Is an object that emits events. It could be any object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"}),": The event type name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"data"}),": Custom data that will be passed to the callback function of each subscriber."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"subscribe"}),"(emitter: any, type: string, listener: any, cb: Function): void",(0,s.jsx)(n.br,{}),"\nAdds a new subscriber."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emitter"}),": Is an object that emits events. It could be any object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"}),": The event type name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"listener"}),": Is the object that is subscribed to the event and usually the context of the callback function."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cb"}),": Is a callback function that will be executed when the event is triggered."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"subscribeOnce"}),"(emitter: any, type: string, listener: any, cb: Function): void",(0,s.jsx)(n.br,{}),"\nAdds a new subscriber and delete self after the first event trigger."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emitter"}),": Is an object that emits events. It could be any object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"}),": The event type name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"listener"}),": Is the object that is subscribed to the event and usually the context of the callback function."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cb"}),": Is a callback function that will be executed when the event is triggered."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"unsubscribe"}),"(emitter: any, type: string, listener: any): void",(0,s.jsx)(n.br,{}),"\nRemoves a specific subscriber for a given emitter, event type and listener."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emitter"}),": Is an object that emits events. It could be any object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"}),": The event type name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"listener"}),": Is the object that is subscribed to the event and usually the context of the callback function."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"unsubscribeAll"}),"(): void",(0,s.jsx)(n.br,{}),"\nRemove all subscribers."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"wait"}),"(emitter: any, type: string): Promise",(0,s.jsx)(n.br,{}),"\nReturns a promise that resolves when a specific event is emitted."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emitter"}),": Is an object that emits events. It could be any object."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"}),": The event type name."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(6540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);