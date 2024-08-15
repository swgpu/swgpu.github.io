"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8288],{1169:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var s=r(4848),i=r(8453);const t={},o="Gfx3View",l={id:"Module Gfx3/Gfx3View",title:"Gfx3View",description:"A 3D view. Used to manipulate camera, viewport, projection mode, background color and more.",source:"@site/docs/Module Gfx3/Gfx3View.md",sourceDirName:"Module Gfx3",slug:"/Module Gfx3/Gfx3View",permalink:"/docs/docs/Module Gfx3/Gfx3View",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx3/Gfx3View.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx3TreePartitionMethod",permalink:"/docs/docs/Module Gfx3/Gfx3TreePartitionMethod"},next:{title:"InputManager",permalink:"/docs/docs/Module Input/InputManager"}},c={},h=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"gfx3view",children:"Gfx3View"})}),"\n",(0,s.jsx)(n.p,{children:"A 3D view. Used to manipulate camera, viewport, projection mode, background color and more."}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"new Gfx3View"}),"(): Gfx3View"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getBgColor"}),"(): vec4",(0,s.jsx)(n.br,{}),"\nReturns the background color."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getCameraMatrix"}),"(): mat4",(0,s.jsx)(n.br,{}),"\nReturns the camera matrix."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getCameraPosition"}),"(): vec3",(0,s.jsx)(n.br,{}),"\nReturns the position of the camera."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getCameraViewMatrix"}),"(): mat4",(0,s.jsx)(n.br,{}),"\nReturns the camera view matrix (nothing else than an inverted camera matrix)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getClientScreenPosition"}),"(x: number, y: number, z: number): vec2",(0,s.jsx)(n.br,{}),"\nReturns the client screen position of a 3D point given its world coordinates."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"x"}),": The x world coordinate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"y"}),": The y world coordinate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"z"}),": The z world coordinate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getClipMatrix"}),"(): mat4",(0,s.jsx)(n.br,{}),"\nReturns the clip matrix."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getClipOffset"}),"(): vec2",(0,s.jsx)(n.br,{}),"\nReturns the clip offset."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getClipOffsetX"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the x-coordinate of the clip offset."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getClipOffsetY"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the y-coordinate of the clip offset."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getOrthographicDepth"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the orthographic depth."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getOrthographicSize"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the orthographic size."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getPerspectiveFar"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the far limit."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getPerspectiveFovy"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the fovy angle (perspective eye-angle)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getPerspectiveNear"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the near limit."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getProjectionClipMatrix"}),"(): mat4",(0,s.jsx)(n.br,{}),"\nReturns the result of multiplying the clip matrix and the projection matrix."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getProjectionMatrix"}),"(): mat4",(0,s.jsx)(n.br,{}),"\nReturns a projection matrix."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getProjectionMode"}),"(): ProjectionMode",(0,s.jsx)(n.br,{}),"\nReturns the projection mode."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getScreenNormalizedPosition"}),"(x: number, y: number, z: number): vec2",(0,s.jsx)(n.br,{}),"\nThe normalized screen position of a 3D point given its world coordinates."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"x"}),": The x world coordinate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"y"}),": The y world coordinate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"z"}),": The z world coordinate."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getScreenSize"}),"(): vec2",(0,s.jsx)(n.br,{}),"\nReturns the screen size."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getViewProjectionClipMatrix"}),"(): mat4",(0,s.jsx)(n.br,{}),"\nReturns the result of multiplying the clip matrix, projection matrix, and camera view matrix together."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getViewport"}),"(): Gfx3Viewport",(0,s.jsx)(n.br,{}),"\nReturns the viewport."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getViewportClientSize"}),"(): vec2",(0,s.jsx)(n.br,{}),"\nReturns the size of the viewport in client coordinates space."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getViewportSize"}),"(): vec2",(0,s.jsx)(n.br,{}),"\nReturns the size of the viewport in pixels."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setBgColor"}),"(r: number, g: number, b: number, a: number): void",(0,s.jsx)(n.br,{}),"\nSet the background color (from 0 to 1)."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"r"}),': The parameter "r" represents the red component.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"g"}),': The parameter "g" represents the green component.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"b"}),': The parameter "b" represents the blue component.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"a"}),': The parameter "a" represents the alpha value.']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setCameraMatrix"}),"(cameraMatrix: mat4): void",(0,s.jsx)(n.br,{}),"\nSet the camera matrix."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cameraMatrix"}),": The camera transformation matrix."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setClipOffset"}),"(x: number, y: number): void",(0,s.jsx)(n.br,{}),"\nSet the clip offset with the given x and y coordinates."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"x"}),": The X coordinate of the clip offset."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"y"}),": The Y coordinate of the clip offset."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setOrthographicDepth"}),"(orthographicDepth: number): void",(0,s.jsx)(n.br,{}),"\nSet orthographic depth."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"orthographicDepth"}),": The depth of the orthographic view."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setOrthographicSize"}),"(orthographicSize: number): void",(0,s.jsx)(n.br,{}),"\nSet orthographic size."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"orthographicSize"}),": Determines how much of the scene is visible within the camera's view frustum."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setPerspectiveFar"}),"(perspectiveFar: number): void",(0,s.jsx)(n.br,{}),"\nSet the far limit."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"perspectiveFar"}),": The maximum distance from the camera at which objects will be rendered."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setPerspectiveFovy"}),"(perspectiveFovy: number): void",(0,s.jsx)(n.br,{}),"\nSet the fovy angle."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"perspectiveFovy"}),": The fovy angle."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setPerspectiveNear"}),"(perspectiveNear: number): void",(0,s.jsx)(n.br,{}),"\nSet the near limit."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"perspectiveNear"}),": The distance to the near clipping plane of a perspective projection."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setProjectionMode"}),"(projectionMode: ProjectionMode): void",(0,s.jsx)(n.br,{}),"\nSet the projection mode."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"projectionMode"}),": The projection mode."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setScreenSize"}),"(width: number, height: number): void",(0,s.jsx)(n.br,{}),"\nSet the screen width and height (internal use).\r\nWarning: Don't change the screen size here please, use CoreManager instead.\r\nIt's method is automatically updated by Gfx3Manager::$handleWindowResize."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"width"}),": The width of the screen size."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"height"}),": The height of the screen size."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setViewport"}),"(viewport: Gfx3Viewport): void",(0,s.jsx)(n.br,{}),"\nSet the viewport."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"viewport"}),": The viewport."]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);