"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5595],{4569:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>o});var r=s(4848),i=s(8453);const l={},d="Gfx3PhysicsJWM",t={id:"Module Gfx3/Gfx3PhysicsJWM",title:"Gfx3PhysicsJWM",description:"A 3D walkmesh.",source:"@site/docs/Module Gfx3/Gfx3PhysicsJWM.md",sourceDirName:"Module Gfx3",slug:"/Module Gfx3/Gfx3PhysicsJWM",permalink:"/docs/Module Gfx3/Gfx3PhysicsJWM",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx3/Gfx3PhysicsJWM.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx3PhysicsJNM",permalink:"/docs/Module Gfx3/Gfx3PhysicsJNM"},next:{title:"Gfx3RendererAbstract",permalink:"/docs/Module Gfx3/Gfx3RendererAbstract"}},c={},o=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function x(n){const e={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"gfx3physicsjwm",children:"Gfx3PhysicsJWM"})}),"\n",(0,r.jsx)(e.p,{children:"A 3D walkmesh.\r\nIn collision case, the collision response sliding along the edges of the walkmesh to keep a good feeling for the player."}),"\n",(0,r.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"new Gfx3PhysicsJWM"}),"(): Gfx3PhysicsJWM"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"$utilsCreatePoint"}),"(x: number, z: number): Point"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"x"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"z"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"$utilsFindLocationInfo"}),"(x: number, z: number)"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"x"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"z"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"$utilsMove"}),"(sectorIndex: number, x: number, z: number, mx: number, mz: number, i: number)"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"sectorIndex"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"x"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"z"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"mx"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"mz"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.strong,{children:"i"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"addPoint"}),"(id: string, x: number, z: number): void",(0,r.jsx)(e.br,{}),"\nAdd a single point."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"id"}),": A unique identifier."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"x"}),": The x-coordinate of the point position."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"z"}),": The z-coordinate of the point position."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"addWalker"}),"(id: string, x: number, z: number, radius: number): Walker",(0,r.jsx)(e.br,{}),"\nAdd a walker.\r\nNote: A walker is a square composed by 5 rigid points."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"id"}),": A unique identifier."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"x"}),": The x-coordinate of the walker's starting position."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"z"}),": The z-coordinate of the walker's starting position."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"radius"}),": The radius."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"clearWalkers"}),"(): void",(0,r.jsx)(e.br,{}),"\nDelete all walkers."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"draw"}),"(): void",(0,r.jsx)(e.br,{}),"\nThe draw function."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"getPoint"}),"(id: string): Point",(0,r.jsx)(e.br,{}),"\nReturns a point."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"id"}),": A unique identifier."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"getSectorData"}),"(sectorIndex: number): any",(0,r.jsx)(e.br,{}),"\nReturn sector data."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"sectorIndex"}),": The sector index."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"getWalker"}),"(id: string): Walker",(0,r.jsx)(e.br,{}),"\nReturns a walker."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"id"}),": A unique identifier."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"loadFromFile"}),"(path: string): Promise",(0,r.jsx)(e.br,{}),"\nLoad asynchronously walkmesh data from a json file (jwm)."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"movePoint"}),"(point: Point, mx: number, mz: number): ResMovePoint",(0,r.jsx)(e.br,{}),"\nMove a point."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"point"}),": The point reference."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"mx"}),": The movement in the x-axis."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"mz"}),": The movement in the z-axis."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"moveWalker"}),"(walker: Walker, mx: number, mz: number): ResMoveWalker",(0,r.jsx)(e.br,{}),"\nMove a walker."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"walker"}),": The walker reference."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"mx"}),": The movement in the x-axis."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"mz"}),": The movement in the z-axis."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"removePoint"}),"(id: string): void",(0,r.jsx)(e.br,{}),"\nRemove a point."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"id"}),": A unique identifier."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"removeWalker"}),"(id: string): void",(0,r.jsx)(e.br,{}),"\nRemove a walker."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"id"}),": A unique identifier."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"update"}),"(): void",(0,r.jsx)(e.br,{}),"\nThe update function."]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>t});var r=s(6540);const i={},l=r.createContext(i);function d(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);