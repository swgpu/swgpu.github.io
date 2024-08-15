"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3907],{9439:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=s(4848),r=s(8453);const t={},d="AIPathGraph",l={id:"Module Ai/AIPathGraph",title:"AIPathGraph",description:"A Generic abstract path graph.",source:"@site/docs/Module Ai/AIPathGraph.md",sourceDirName:"Module Ai",slug:"/Module Ai/AIPathGraph",permalink:"/docs/Module Ai/AIPathGraph",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Ai/AIPathGraph.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AIMinMaxTreeAbstract",permalink:"/docs/Module Ai/AIMinMaxTreeAbstract"},next:{title:"AIPathGraph2D",permalink:"/docs/Module Ai/AIPathGraph2D"}},h={},o=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function c(n){const e={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"aipathgraph",children:"AIPathGraph"})}),"\n",(0,i.jsx)(e.p,{children:"A Generic abstract path graph."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"parent of: AIPathGraph2D, AIPathGraph3D"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"new AIPathGraph"}),"(nodes: Map): AIPathGraph\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"nodes"}),": The graph data."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"addNode"}),"(nid: string, node: AIPathNode, biRelations: boolean): AIPathNode",(0,i.jsx)(e.br,{}),"\nAdd a node."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"nid"}),": The unique identifier of the node."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"node"}),": The node."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"biRelations"}),": Determines whether bidirectional relations should be established between the newly added node and its children."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"findNode"}),"(predicateFn: Function)",(0,i.jsx)(e.br,{}),"\nFind the first node matching with the predicate function."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"predicateFn"}),": The predicate function."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"findNodes"}),"(predicateFn: Function)",(0,i.jsx)(e.br,{}),"\nFind all nodes matching with the predicate function."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"predicateFn"}),": The predicate function."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getDistance"}),"(a: AIPathNode, b: AIPathNode): number",(0,i.jsx)(e.br,{}),"\nReturn the distance between two nodes."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"a"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"b"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getNode"}),"(nid: string): AIPathNode",(0,i.jsx)(e.br,{}),"\nReturn the node."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"nid"}),": The unique identifier."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"loadFromFile"}),"(path: string): Promise",(0,i.jsx)(e.br,{}),"\nAsynchronously loads graph data from a json file."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"removeNode"}),"(nid: string): void",(0,i.jsx)(e.br,{}),"\nRemove the node."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"nid"}),": The unique identifier."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"removeNodeRelation"}),"(nid: string, cnid: string, biRelations: boolean): void",(0,i.jsx)(e.br,{}),"\nRemove node relationship."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"nid"}),": The node from which you want to remove a relation."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"cnid"}),": The child to remove."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"biRelations"}),": Determines whether bidirectional relations should be removed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"reset"}),"(): void",(0,i.jsx)(e.br,{}),"\nReset weight values of nodes."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"setNodeProperties"}),"(nid: string, properties: Partial): void",(0,i.jsx)(e.br,{}),"\nSet node properties."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"nid"}),": The unique identifier."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"properties"}),": The properties dataset."]}),"\n"]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function d(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);