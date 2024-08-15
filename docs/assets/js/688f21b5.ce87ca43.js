"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7399],{5884:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>x});var t=r(4848),s=r(8453);const i={},l="Gfx2TextureManager",o={id:"Module Gfx2/Gfx2TextureManager",title:"Gfx2TextureManager",description:"Singleton textures manager.",source:"@site/docs/Module Gfx2/Gfx2TextureManager.md",sourceDirName:"Module Gfx2",slug:"/Module Gfx2/Gfx2TextureManager",permalink:"/docs/Module Gfx2/Gfx2TextureManager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx2/Gfx2TextureManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx2SpriteJSS",permalink:"/docs/Module Gfx2/Gfx2SpriteJSS"},next:{title:"Gfx2TileLayer",permalink:"/docs/Module Gfx2/Gfx2TileLayer"}},a={},x=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"gfx2texturemanager",children:"Gfx2TextureManager"})}),"\n",(0,t.jsx)(n.p,{children:"Singleton textures manager."}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"new Gfx2TextureManager"}),"(): Gfx2TextureManager"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"deleteTexture"}),"(path: string): void",(0,t.jsx)(n.br,{}),"\nDeletes a texture if it exists, otherwise it throws an error."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"getTexture"}),"(path: string): ImageBitmap",(0,t.jsx)(n.br,{}),"\nReturns an ",(0,t.jsx)(n.code,{children:"ImageBitmap"})," object for a given texture path, or throws an error if the texture doesn't exist."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"hasTexture"}),"(path: string): boolean",(0,t.jsx)(n.br,{}),"\nChecks if texture exists."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"loadTexture"}),"(path: string): Promise",(0,t.jsx)(n.br,{}),"\nLoads asynchronously an image from a given path, caching it for future use and returns it as an ",(0,t.jsx)(n.code,{children:"ImageBitmap"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"releaseTextures"}),"(): void",(0,t.jsx)(n.br,{}),"\nDeletes all stored textures."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(6540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);