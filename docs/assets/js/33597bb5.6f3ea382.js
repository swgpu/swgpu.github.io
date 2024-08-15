"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1435],{1709:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(4848),t=s(8453);const i={},l="Gfx3Mesh",o={id:"Module Gfx3/Gfx3Mesh",title:"Gfx3Mesh",description:"A 3D base mesh object.",source:"@site/docs/Module Gfx3/Gfx3Mesh.md",sourceDirName:"Module Gfx3",slug:"/Module Gfx3/Gfx3Mesh",permalink:"/docs/Module Gfx3/Gfx3Mesh",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx3/Gfx3Mesh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx3Material",permalink:"/docs/Module Gfx3/Gfx3Material"},next:{title:"Gfx3MeshJAM",permalink:"/docs/Module Gfx3/Gfx3MeshJAM"}},c={},d=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const n={br:"br",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"gfx3mesh",children:"Gfx3Mesh"})}),"\n",(0,r.jsx)(n.p,{children:"A 3D base mesh object."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"inherit from: Gfx3Drawable"}),"\n",(0,r.jsx)(n.li,{children:"parent of: Gfx3MeshJAM, Gfx3MeshJSM, Gfx3MeshOBJ"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"new Gfx3Mesh"}),"(): Gfx3Mesh"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"clone"}),"(mesh: Gfx3Mesh, transformMatrix: mat4): Gfx3Mesh",(0,r.jsx)(n.br,{}),"\nClone the object."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mesh"}),": The copy object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"transformMatrix"}),": The transformation matrix."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"delete"}),"(keepMat: boolean): void",(0,r.jsx)(n.br,{}),"\nFree all resources.\r\nWarning: You need to call this method to free allocation for this object."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"keepMat"}),": Determines if the material is deleted or not."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"draw"}),"(): void",(0,r.jsx)(n.br,{}),"\nThe draw function."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getMaterial"}),"(): Gfx3Material",(0,r.jsx)(n.br,{}),"\nReturns the material."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getShadowCasting"}),"(): boolean",(0,r.jsx)(n.br,{}),"\nCheck if shadow casting is enable or not."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setMaterial"}),"(material: Gfx3Material, keepMat: boolean): void",(0,r.jsx)(n.br,{}),"\nSet a material."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"material"}),": The material."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"keepMat"}),": Determines whether to keep the current material or delete it before assigning the new material."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setShadowCasting"}),"(shadowCasting: boolean): void",(0,r.jsx)(n.br,{}),"\nSet the shadow casting."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"shadowCasting"}),": Determines if object cast shadows."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"update"}),"(ts: number): void",(0,r.jsx)(n.br,{}),"\nThe update function."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ts"}),": The timestep."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"static"})," ",(0,r.jsx)(n.strong,{children:"buildVertices"}),"(vertexCount: number, coords: number[], texcoords: number[], colors: number[], normals: number[], groups: Group[])",(0,r.jsx)(n.br,{}),"\nUseful function takes various vertex data and returns vertices with calculated normals, tangents, and binormals in the engine format."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"vertexCount"}),": The total number of vertices in the mesh."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"coords"}),": A list of vertex coordinates."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"texcoords"}),": A list of vertex texture coordinates."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"colors"}),": A list of vertex color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"normals"}),": A list of vertex normal."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"groups"}),": A list of vertex group."]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);