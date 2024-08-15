"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9913],{7469:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>x});var s=r(4848),i=r(8453);const t={},l="Gfx3Manager",d={id:"Module Gfx3/Gfx3Manager",title:"Gfx3Manager",description:"Singleton 3D graphics manager.",source:"@site/docs/Module Gfx3/Gfx3Manager.md",sourceDirName:"Module Gfx3",slug:"/Module Gfx3/Gfx3Manager",permalink:"/docs/docs/Module Gfx3/Gfx3Manager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx3/Gfx3Manager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx3FlareRenderer",permalink:"/docs/docs/Module Gfx3/Gfx3FlareRenderer"},next:{title:"Gfx3Material",permalink:"/docs/docs/Module Gfx3/Gfx3Material"}},h={},x=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const n={a:"a",br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"gfx3manager",children:"Gfx3Manager"})}),"\n",(0,s.jsx)(n.p,{children:"Singleton 3D graphics manager."}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"new Gfx3Manager"}),"(): Gfx3Manager"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"$handleWindowResize"}),"(): void",(0,s.jsx)(n.br,{}),"\nResizes the canvas, recreates the depth texture and view, and updates the screen size for each view."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"beginDrawing"}),"(): void",(0,s.jsx)(n.br,{}),"\nPrepare the draw process.\r\nWarning: You need to call this method before your draw calls."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"beginPassRender"}),"(viewIndex: number): void",(0,s.jsx)(n.br,{}),"\nPrepare a render pass.\r\nWarning: You need to call this method before the render calls you want include in this pass."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"viewIndex"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"beginRender"}),"(): void",(0,s.jsx)(n.br,{}),"\nPrepare the render process.\r\nWarning: You need to call this method before your render calls."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"changeView"}),"(index: number, view: Gfx3View): void",(0,s.jsx)(n.br,{}),"\nChange the view at a specified index."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index of the view should be changed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"view"}),": The view."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createCubeMapFromBitmap"}),"(bitmaps): Gfx3Texture",(0,s.jsx)(n.br,{}),"\nCreates a cubemap texture from a list of bitmaps or canvas elements."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bitmaps"}),": The list of six bitmaps."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createDynamicGroup"}),"(pipelineId: string, groupIndex: number): Gfx3DynamicGroup",(0,s.jsx)(n.br,{}),"\nCreates a dynamic group for a given pipeline and group index."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pipelineId"}),": The unique identifier of a pipeline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"groupIndex"}),": The uniform group index in the shader."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createEmptyTexture"}),"(width: number, height: number, format: GPUTextureFormat, samplerDescriptor: GPUSamplerDescriptor): Gfx3Texture",(0,s.jsx)(n.br,{}),"\nCreates an empty GPU texture with the given size."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"width"}),": The texture width."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"height"}),": The texture height."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"format"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"samplerDescriptor"}),": The sampler texture configuration, see ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/webgpu/#GPUSamplerDescriptor",children:"https://www.w3.org/TR/webgpu/#GPUSamplerDescriptor"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createRenderingTexture"}),"(format: GPUTextureFormat): Gfx3Texture",(0,s.jsx)(n.br,{}),"\nCreates a default rendering texture."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"format"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createStaticGroup"}),"(pipelineId: string, groupIndex: number): Gfx3StaticGroup",(0,s.jsx)(n.br,{}),"\nCreates a static group for a given pipeline and group index."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pipelineId"}),": The unique identifier of a pipeline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"groupIndex"}),": The uniform group index in the shader."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createTextureFromBitmap"}),"(bitmap, is8bit: boolean, samplerDescriptor: GPUSamplerDescriptor): Gfx3Texture",(0,s.jsx)(n.br,{}),"\nCreates a GPU texture from a given bitmap image or canvas element."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bitmap"}),": The source image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"is8bit"}),": Indicates whether the texture should be treated as an 8-bit texture or not."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"samplerDescriptor"}),": The sampler texture configuration, see ",(0,s.jsx)(n.a,{href:"https://www.w3.org/TR/webgpu/#GPUSamplerDescriptor",children:"https://www.w3.org/TR/webgpu/#GPUSamplerDescriptor"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createVertexBuffer"}),"(size: number): VertexSubBuffer",(0,s.jsx)(n.br,{}),"\nCreates a vertex sub-buffer and returns it.\r\nNote: A sub-buffer is just a reference offset/size pointing to the big one vertex buffer."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"size"}),": The number of vertices."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"createView"}),"(): Gfx3View",(0,s.jsx)(n.br,{}),"\nCreate a new view and return it."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"deletePipeline"}),"(id: string): void",(0,s.jsx)(n.br,{}),"\nDelete a GPU render pipeline."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"id"}),": The identifier of the pipeline."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"destroyVertexBuffer"}),"(sub: VertexSubBuffer): void",(0,s.jsx)(n.br,{}),"\nRemoves a vertex sub-buffer."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sub"}),": The vertex sub-buffer."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"endDrawing"}),"(): void",(0,s.jsx)(n.br,{}),"\nClose the draw process.\r\nWarning: You need to call this method after your draw calls."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"endPassRender"}),"(): void",(0,s.jsx)(n.br,{}),"\nClose a render pass.\r\nWarning: You need to call this method after the render calls you want include in this pass."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"endRender"}),"(): void",(0,s.jsx)(n.br,{}),"\nClose the render process.\r\nWarning: You need to call this method after your render calls."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getClientHeight"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the client height of the canvas."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getClientWidth"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the client width of the canvas."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getCommandEncoder"}),"(): GPUCommandEncoder",(0,s.jsx)(n.br,{}),"\nReturns the GPUCommandEncoder."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getContext"}),"(): GPUCanvasContext",(0,s.jsx)(n.br,{}),"\nReturns the GPUCanvasContext object."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getCurrentRenderingTexture"}),"(): GPUTexture",(0,s.jsx)(n.br,{}),"\nReturns the current rendering texture.\r\nNote: Is the texture used for final rendering."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getCurrentView"}),"(): Gfx3View",(0,s.jsx)(n.br,{}),'\nReturns the current view.\r\nNote: Current view is set by the "begin" function.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getDepthTexture"}),"(): Gfx3Texture",(0,s.jsx)(n.br,{}),"\nReturns the depth texture."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getDevice"}),"(): GPUDevice",(0,s.jsx)(n.br,{}),"\nReturns the GPU device."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getHeight"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the resolution height of the canvas."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getIdsTexture"}),"(): Gfx3Texture",(0,s.jsx)(n.br,{}),"\nReturns the rendering texture contains ids."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getLastRenderTime"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the last render time."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getNormalsTexture"}),"(): Gfx3Texture",(0,s.jsx)(n.br,{}),"\nReturns the rendering texture contains normals."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getNumViews"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the number of views."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getPassEncoder"}),"(): GPURenderPassEncoder",(0,s.jsx)(n.br,{}),"\nReturns the current WebGPU render pass encoder."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getPipeline"}),"(id: string): GPURenderPipeline",(0,s.jsx)(n.br,{}),"\nReturns a GPU render pipeline."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"id"}),": The identifier of the pipeline."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getVertexBuffer"}),"(): GPUBuffer",(0,s.jsx)(n.br,{}),"\nReturns the big one vertex buffer."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getView"}),"(index: number): Gfx3View",(0,s.jsx)(n.br,{}),"\nReturns the view at the specified index."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getWidth"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the resolution width of the canvas."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"hasFilter"}),"(): boolean",(0,s.jsx)(n.br,{}),"\nChecks if the canvas element has an active filter."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"initialize"}),"(): Promise",(0,s.jsx)(n.br,{}),"\nInitializes the WebGPU rendering context (internal use only)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"loadPipeline"}),"(id: string, vertexShader: string, fragmentShader: string, pipelineDesc: GPURenderPipelineDescriptor): GPURenderPipeline",(0,s.jsx)(n.br,{}),"\nCreates and returns a GPU render pipeline using the provided vertex and fragment shaders, and caches it for future use."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"id"}),": A unique identifier for the render pipeline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"vertexShader"}),": The code for the vertex shader."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fragmentShader"}),": The code for the fragment shader."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"pipelineDesc"}),": The configuration of the pipeline, such as the vertex and fragment shaders, the color and depth formats, the primitive topology"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"removeView"}),"(view: Gfx3View): void",(0,s.jsx)(n.br,{}),"\nRemoves a view."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"view"}),": The view."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"removeViewAt"}),"(index: number): void",(0,s.jsx)(n.br,{}),"\nRemoves a view at specified index."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index of the view."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setDestinationTexture"}),"(destinationTexture): void",(0,s.jsx)(n.br,{}),"\nThe destination texture is used for multi-pass rendering.\r\nNote: If destination texture is set, we render to the destination texture and let post-processing effect renderers used it.\r\notherwise we are rendering to the screen directly."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"destinationTexture"}),": The destination texture."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setFilter"}),"(filter: string): void",(0,s.jsx)(n.br,{}),"\nSets the css filter property of the canvas."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"filter"}),": The filter parameter is a string that represents the CSS filter property's value.\r\nIt can be used to apply various visual effects to an element, such as blur, brightness, contrast,\r\ngrayscale, etc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"writeVertexBuffer"}),"(sub: VertexSubBuffer, vertices: number[]): void",(0,s.jsx)(n.br,{}),"\nWrite data on vertex sub-buffer."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sub"}),": The vertex sub-buffer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"vertices"}),": The vertex data."]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>d});var s=r(6540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);