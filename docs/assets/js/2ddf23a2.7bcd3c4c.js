"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1295],{9746:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(4848),i=s(8453);const t={},o="Gfx3MeshRenderer",l={id:"Module Gfx3/Gfx3MeshRenderer",title:"Gfx3MeshRenderer",description:"Singleton mesh renderer.",source:"@site/docs/Module Gfx3/Gfx3MeshRenderer.md",sourceDirName:"Module Gfx3",slug:"/Module Gfx3/Gfx3MeshRenderer",permalink:"/docs/docs/Module Gfx3/Gfx3MeshRenderer",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx3/Gfx3MeshRenderer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx3MeshOBJ",permalink:"/docs/docs/Module Gfx3/Gfx3MeshOBJ"},next:{title:"Gfx3MeshShadowRenderer",permalink:"/docs/docs/Module Gfx3/Gfx3MeshShadowRenderer"}},h={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"gfx3meshrenderer",children:"Gfx3MeshRenderer"})}),"\n",(0,r.jsx)(n.p,{children:"Singleton mesh renderer."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"inherit from: Gfx3RendererAbstract"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"new Gfx3MeshRenderer"}),"(): Gfx3MeshRenderer"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"drawDecal"}),"(group: number, sx: number, sy: number, sw: number, sh: number, position: vec3, orientationX: vec3, orientationY: vec3, orientationZ: vec3, size: vec3, opacity: number): void",(0,r.jsx)(n.br,{}),"\nDraw a decal."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"group"}),": The group target (mesh is identified by its 'g' id component)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sx"}),": The x-coordinate of the decal sprite in the atlas texture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sy"}),": The y-coordinate of the decal sprite in the atlas texture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sw"}),": The width of the decal sprite in the atlas texture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sh"}),": The height of the decal sprite in the atlas texture."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"position"}),": The position of projector (center)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"orientationX"}),": The x-axis orientation of the projector."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"orientationY"}),": The y-axis orientation of the projector."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"orientationZ"}),": The z-axis orientation of the projector."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"size"}),": The size (width, height, depth) of the projector."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"opacity"}),": The opacity or transparency of the decal."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"drawDirLight"}),"(direction: vec3, ambient: vec3, diffuse: vec3, specular: vec3, intensity: number): void",(0,r.jsx)(n.br,{}),"\nDraw a directional light."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"direction"}),": The direction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ambient"}),": The ambient color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"diffuse"}),": The diffuse color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"specular"}),": The specular color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"intensity"}),": The strength or brightness."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"drawMesh"}),"(mesh: Gfx3Mesh, matrix): void",(0,r.jsx)(n.br,{}),"\nDraw a mesh."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"mesh"}),": The mesh."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"matrix"}),": The transformation matrix."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"drawPointLight"}),"(position: vec3, ambient: vec3, diffuse: vec3, specular: vec3, intensity: number, constant: number, linear: number, exp: number): void",(0,r.jsx)(n.br,{}),"\nDraw a point light."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"position"}),": The position."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ambient"}),": The ambient color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"diffuse"}),": The diffuse color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"specular"}),": The specular color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"intensity"}),": The brightness or strength."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"constant"}),": The constant attenuation factor of the point light."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"linear"}),": The linear attenuation factor of the point light."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"exp"}),": The exponent of the attenuation equation for the point light."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"enableFog"}),"(enabled: boolean, from: vec3, color: vec3, near: number, far: number): void",(0,r.jsx)(n.br,{}),"\nEnable the fog."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"enabled"}),": Indicating whether the fog is enabled or not."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"from"}),": The fog origin point."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"color"}),": The fog color."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"near"}),": The distance from the camera at which the fog starts to appear."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"far"}),": The distance from the camera at which the fog effect should start to fade out."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"enableShadow"}),"(enabled: boolean): void",(0,r.jsx)(n.br,{}),"\nEnable the shadowing projection."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"enabled"}),": Indicating whether the shadow should be enabled or disabled."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"render"}),"(): void",(0,r.jsx)(n.br,{}),"\nThe render function."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setDecalAtlas"}),"(decalAtlas: Gfx3Texture): void",(0,r.jsx)(n.br,{}),"\nSet the decal texture atlas."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"decalAtlas"}),": The decal texture atlas."]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);