"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6781],{9950:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=s(4848),i=s(8453);const l={},t="Gfx2IsoTileMapLayer",o={id:"Module Gfx2/Gfx2IsoTileMapLayer",title:"Gfx2IsoTileMapLayer",description:"A isometric tilemap layer drawable.",source:"@site/docs/Module Gfx2/Gfx2IsoTileMapLayer.md",sourceDirName:"Module Gfx2",slug:"/Module Gfx2/Gfx2IsoTileMapLayer",permalink:"/docs/Module Gfx2/Gfx2IsoTileMapLayer",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx2/Gfx2IsoTileMapLayer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx2IsoTile",permalink:"/docs/Module Gfx2/Gfx2IsoTile"},next:{title:"Gfx2Manager",permalink:"/docs/Module Gfx2/Gfx2Manager"}},d={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"gfx2isotilemaplayer",children:"Gfx2IsoTileMapLayer"})}),"\n",(0,r.jsx)(n.p,{children:"A isometric tilemap layer drawable.\r\nNote: You can draw the layer or get all tiles and draw them in Gfx2IsoDrawer.\r\nIt depends of your usage.\r\nIn both cases don't forget to call the update function to run animations."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"inherit from: Gfx2Drawable"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"new Gfx2IsoTileMapLayer"}),"(): Gfx2IsoTileMapLayer"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getColorDebug"}),"(): string",(0,r.jsx)(n.br,{}),"\nReturns the debug lines color."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getLineWidthDebug"}),"(): number",(0,r.jsx)(n.br,{}),"\nReturns the debug lines width."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"getTiles"}),"()",(0,r.jsx)(n.br,{}),"\nReturns all tile drawables."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"isShowDebug"}),"(): boolean",(0,r.jsx)(n.br,{}),"\nCheck if debug display is enabled."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"loadFromTileMap"}),"(tilemap: Gfx2TileMap, layerIndex: number): void",(0,r.jsx)(n.br,{}),"\nLoad data from tilemap and layer index."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"tilemap"}),": The tilemap."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"layerIndex"}),": The index of the tilelayer."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"paint"}),"(): void",(0,r.jsx)(n.br,{}),"\nThe paint function."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"placeTile"}),"(tileId: number, row: number, col: number): void",(0,r.jsx)(n.br,{}),"\nPlace a tile at specific location."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"tileId"}),": The tile identifier."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"row"}),": The row index."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"col"}),": The col index."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"removeTileAt"}),"(row: number, col: number): void",(0,r.jsx)(n.br,{}),"\nRemove a tile at specific location."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"row"}),": The row index."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"col"}),": The col index."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setColorDebug"}),"(colorDebug: string): void",(0,r.jsx)(n.br,{}),"\nSet the color of debug lines."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"colorDebug"}),": The color."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setLineWidthDebug"}),"(lineWidthDebug: number): void",(0,r.jsx)(n.br,{}),"\nSet the width of debug lines."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"lineWidthDebug"}),": The line width."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"setShowDebug"}),"(showDebug: boolean): void",(0,r.jsx)(n.br,{}),"\nSet the show debug flag."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"showDebug"}),": The showDebug flag."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"update"}),"(ts: number): void",(0,r.jsx)(n.br,{}),"\nThe update function."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ts"}),": The timestep."]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const i={},l=r.createContext(i);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);