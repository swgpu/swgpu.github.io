"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8135],{959:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=s(4848),o=s(8453);const i={},t="SoundManager",d={id:"Module Sound/SoundManager",title:"SoundManager",description:"Singleton sound manager.",source:"@site/docs/Module Sound/SoundManager.md",sourceDirName:"Module Sound",slug:"/Module Sound/SoundManager",permalink:"/docs/Module Sound/SoundManager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Sound/SoundManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ScriptMachine",permalink:"/docs/Module Script/ScriptMachine"},next:{title:"UIBubble",permalink:"/docs/Module Ui/UIBubble"}},l={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function c(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"soundmanager",children:"SoundManager"})}),"\n",(0,r.jsx)(e.p,{children:"Singleton sound manager."}),"\n",(0,r.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"new SoundManager"}),"(): SoundManager"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"deleteSound"}),"(path: string): void",(0,r.jsx)(e.br,{}),"\nDeletes a sound if it exists, otherwise it throws an error."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"isMuted"}),"(groupId: string): boolean",(0,r.jsx)(e.br,{}),"\nCheck if the group is currently muted or not."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"groupId"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"loadSound"}),"(path: string, groupId: string): Promise",(0,r.jsx)(e.br,{}),"\nLoad asynchronously a sound from a given path and returns it as an ",(0,r.jsx)(e.code,{children:"Sound"}),", caching it for future use.\r\nNote: Use group for categorize your sounds and manage them easily."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"path"}),": The file path."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"groupId"}),": The group identifier."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"mute"}),"(muted: boolean, groupId: string): void",(0,r.jsx)(e.br,{}),"\nMute or demute a group."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"muted"}),": Determines whether the sounds should be muted or not."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"groupId"}),": The group identifier."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"pauseSound"}),"(path: string): void",(0,r.jsx)(e.br,{}),"\nPause a sound if it exists, otherwise it throws an error."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"playSound"}),"(path: string, looped: boolean): Promise",(0,r.jsx)(e.br,{}),"\nPlays a sound if it exists, otherwise it throws an error."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"path"}),": The file path."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"looped"}),": Determine if sound play in loop or not."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"releaseSounds"}),"(): void",(0,r.jsx)(e.br,{}),"\nDeletes all stored sounds."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"setVolume"}),"(volume: number, groupId: string): void",(0,r.jsx)(e.br,{}),"\nSet the audio volume of a group."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"volume"}),": The desired volume level."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"groupId"}),": The group identifier."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>d});var r=s(6540);const o={},i=r.createContext(o);function t(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);