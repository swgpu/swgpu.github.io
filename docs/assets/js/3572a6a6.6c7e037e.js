"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8544],{9115:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var s=i(4848),t=i(8453);const d={},r="UIMenu",l={id:"Module Ui/UIMenu",title:"UIMenu",description:"A UI widget displaying a menu with customizable options.",source:"@site/docs/Module Ui/UIMenu.md",sourceDirName:"Module Ui",slug:"/Module Ui/UIMenu",permalink:"/docs/docs/Module Ui/UIMenu",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Ui/UIMenu.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UIManager",permalink:"/docs/docs/Module Ui/UIManager"},next:{title:"UIMenuListView",permalink:"/docs/docs/Module Ui/UIMenuListView"}},o={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"uimenu",children:"UIMenu"})}),"\n",(0,s.jsx)(n.p,{children:"A UI widget displaying a menu with customizable options.\r\nIt emit 'E_ITEM_FOCUSED' with data { id, index }\r\nIt emit 'E_ITEM_UNFOCUSED'\r\nIt emit 'E_ITEM_SELECTED' with data { id, index }\r\nIt emit 'E_ITEM_UNSELECTED'\r\nIt emit 'E_UNSELECTED'\r\nIt emit 'E_CLOSED'"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"inherit from: UIWidget"}),"\n",(0,s.jsx)(n.li,{children:"parent of: UIMenuListView, UIMenuText"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"new UIMenu"}),"(options): UIMenu\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"options"}),": Various options for configuring the behavior of the menu."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"$getViewRectWidget"}),"(index: number)"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"index"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"$handleWidgetClicked"}),"(widget: UIWidget): void"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"widget"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"$handleWidgetHover"}),"(widget: UIWidget): void"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"widget"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"addWidget"}),"(widget: UIWidget, index: number): void",(0,s.jsx)(n.br,{}),"\nAdd a UI widget item."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"widget"}),": The widget."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The position at which the widget should be inserted in the menu. If no index is\r\nprovided (default value is -1), the widget will be added at the end of the menu."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"clear"}),"(): void",(0,s.jsx)(n.br,{}),"\nRemove all widget items."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"delete"}),"(): void",(0,s.jsx)(n.br,{}),"\nFree all resources.\r\nWarning: You need to call this method to free allocation for this object."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"focus"}),"(focusIndex: MenuFocus): void",(0,s.jsx)(n.br,{}),"\nFocus on."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"focusIndex"}),": If MenuFocus.AUTO then refocus the child widget too."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"focusWidget"}),"(index: number, preventScroll: boolean, emit: boolean): void",(0,s.jsx)(n.br,{}),"\nFocus on widget item.\r\nIt emit an 'E_ITEM_FOCUSED' event."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index position of the widget."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"preventScroll"}),": Indicating whether to prevent scrolling to the focused widget."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emit"}),": Determines whether an event should be emitted after focusing the widget."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getFocusedWidgetId"}),"()",(0,s.jsx)(n.br,{}),"\nReturns the ID of the focused widget, or null if there is no focused widget."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getFocusedWidgetIndex"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the index position of the focused widget item, or -1 if no widget is focused."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getSelectedWidgetId"}),"()",(0,s.jsx)(n.br,{}),"\nReturns the ID of the first selected widget, or null if no widget is selected."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getSelectedWidgetIds"}),"()",(0,s.jsx)(n.br,{}),"\nReturns a list of IDs of selected widget items."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getSelectedWidgetIndex"}),"(): number",(0,s.jsx)(n.br,{}),"\nReturns the index position of the first selected widget item or -1 if no widget is selected."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getSelectedWidgetIndexes"}),"()",(0,s.jsx)(n.br,{}),"\nReturns a list of index position of selected widget items."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getWidget"}),"(index: number): UIWidget",(0,s.jsx)(n.br,{}),"\nReturns the widget at the specified index."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index position of the widget."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"getWidgets"}),"()",(0,s.jsx)(n.br,{}),"\nReturns all widgets."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"onAction"}),"(actionId: string): void",(0,s.jsx)(n.br,{}),"\nThe onAction function."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"actionId"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"removeWidget"}),"(index: number): void",(0,s.jsx)(n.br,{}),"\nRemove a UI widget item."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The position of the widget."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"selectWidget"}),"(index: number, emit: boolean): void",(0,s.jsx)(n.br,{}),"\nSelect a widget item.\r\nIt emits an 'E_ITEM_SELECTED' event."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index position of the widget."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emit"}),": Determines whether an event should be emitted after selecting the widget."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setEnabledWidget"}),"(index: number, enabled: boolean): void",(0,s.jsx)(n.br,{}),"\nSet enabled flag of a widget item."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index position of the widget."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"enabled"}),": Determines whether the widget should be enabled or disabled."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"setEnabledWidgets"}),"(enabled: boolean): void",(0,s.jsx)(n.br,{}),"\nSet the enabled flag of all widget items."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"enabled"}),": Determines whether the widgets should be enabled or disabled."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"unfocusWidget"}),"(emit: boolean): void",(0,s.jsx)(n.br,{}),"\nFocus off widget item (if exist).\r\nIt emits an 'E_ITEM_UNFOCUSED' event."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emit"}),": Determines whether an event should be emitted after unfocusing the widget."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"unselectWidget"}),"(index: number, emit: boolean): void",(0,s.jsx)(n.br,{}),"\nUnselects a widget item.\r\nIt emits an 'E_ITEM_UNSELECTED' event."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"index"}),": The index position of the widget."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emit"}),": Determines whether an event should be emitted after unselecting the widget."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"unselectWidgets"}),"(emit: boolean): void",(0,s.jsx)(n.br,{}),"\nUnselect all widget items.\r\nIt emits an 'E_UNSELECTED' event."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"emit"}),": Determines whether an event should be emitted after unselecting all widgets."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"update"}),"(ts: number): void",(0,s.jsx)(n.br,{}),"\nThe update function."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ts"}),": The timestep."]}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},d=s.createContext(t);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);