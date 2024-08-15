"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8960],{9143:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=s(4848),r=s(8453);const t={},d="InputManager",l={id:"Module Input/InputManager",title:"InputManager",description:"Singleton input manager.",source:"@site/docs/Module Input/InputManager.md",sourceDirName:"Module Input",slug:"/Module Input/InputManager",permalink:"/docs/docs/Module Input/InputManager",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Input/InputManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx3View",permalink:"/docs/docs/Module Gfx3/Gfx3View"},next:{title:"Motion",permalink:"/docs/docs/Module Motion/Motion"}},c={},o=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(n){const e={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"inputmanager",children:"InputManager"})}),"\n",(0,i.jsx)(e.p,{children:"Singleton input manager.\r\nHandle various sources such as keyboard, mouse and gamepad.\r\nIt emit 'E_ACTION_ONCE' with data { actionId }.\r\nIt emit 'E_ACTION' with data { actionId }.\r\nIt emit 'E_ACTION_RELEASED' with data { actionId }\r\nIt emit 'E_MOUSE_DOWN' with data { buttons }\r\nIt emit 'E_MOUSE_UP'\r\nIt emit 'E_MOUSE_MOVE' with data { movementX, movementY }\r\nIt emit 'E_MOUSE_DRAG' with data { movementX, movementY }\r\nIt emit 'E_MOUSE_WHEEL' with data { delta }"}),"\n",(0,i.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"new InputManager"}),"(): InputManager"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$addPad"}),"(pad: Pad): void"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"pad"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handleGamePadConnected"}),"(e: GamepadEvent): void"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handleGamePadDisconnected"}),"(e: GamepadEvent): void"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handleKeyDown"}),"(e: KeyboardEvent): boolean"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handleKeyUp"}),"(e: KeyboardEvent): void"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handlePointerDown"}),"(e: PointerEvent): void"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handlePointerMove"}),"(e: PointerEvent): void"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handlePointerUp"}),"(): void"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$handleWheel"}),"(e: WheelEvent): void"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.strong,{children:"e"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"$updatePadsStatus"}),"(): void"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"findActionIds"}),"(inputSource: string, eventKey: string)",(0,i.jsx)(e.br,{}),"\nReturns the action list that match the given input source and event key."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"inputSource"}),": The device from which the input is received."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"eventKey"}),": The key or button that triggers the action."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getDragDelta"}),"(): vec2",(0,i.jsx)(e.br,{}),"\nReturns the current drag movement."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getMousePosition"}),"(): vec2",(0,i.jsx)(e.br,{}),"\nReturns the mouse position."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getMouseWheel"}),"(): number",(0,i.jsx)(e.br,{}),"\nReturns the mouse wheel value."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getPad"}),"(index: number)",(0,i.jsx)(e.br,{}),"\nReturns a pad or undefined if not found.\r\nNote: Pads are automatically added on plug-in."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"index"}),": The index of the pad."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"isActiveAction"}),"(actionId: string)",(0,i.jsx)(e.br,{}),"\nChecks if an action is currently active."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"actionId"}),": The action identifier."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"isMouseDown"}),"(): boolean",(0,i.jsx)(e.br,{}),"\nChecks if mouse click is currently active."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"registerAction"}),"(inputSource: string, eventKey: string, actionId: string): void",(0,i.jsx)(e.br,{}),"\nAdd an action mapping."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"inputSource"}),": The device from which the input is received."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"eventKey"}),": The key or button that triggers the action."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"actionId"}),": The unique action identifier."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"removePad"}),"(id: string): void",(0,i.jsx)(e.br,{}),"\nRemoves a pad."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"id"}),": The unique identifier of the pad"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"unregisterAction"}),"(inputSource: string, eventKey: string, actionId: string): void",(0,i.jsx)(e.br,{}),"\nRemove an action mapping."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"inputSource"}),": The device from which the input is received."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"eventKey"}),": The key or button that triggers the action."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"actionId"}),": The unique action identifier."]}),"\n"]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function d(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);