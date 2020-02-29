(this.webpackJsonppathfindingvisualizer=this.webpackJsonppathfindingvisualizer||[]).push([[1],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var o={"./Dijkstra":[8,0],"./Dijkstra.js":[8,0]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id=17,e.exports=a},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),s=(n(14),n(1)),i=n(2),l=n(4),u=n(3),d=n(5),m=(n(15),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.grid;return a.a.createElement(a.a.Fragment,null,a.a.createElement("table",{id:"grid",onMouseLeave:this.props.setMouseDownFalse},a.a.createElement("tbody",{id:"tableBody"},t.map((function(t,n){return a.a.createElement("tr",{key:n,id:"row_".concat(n)},t.map((function(t,o){return a.a.createElement("td",{key:o,id:"node_".concat(n,"_").concat(o),className:"unvisited",onMouseDown:function(t){e.props.mouseEventHandler(t),e.props.setMouseDownTrue()},onMouseUp:e.props.setMouseDownFalse,onMouseOver:function(t){e.props.mouseDown&&e.props.mouseEventHandler(t)}})})))})))))}}]),t}(o.Component)),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"menu"},a.a.createElement("button",{type:"button",onClick:function(){return e.props.selectNode(e.props.nodes.WALL_NODE)}},"Wall"),a.a.createElement("button",{type:"button",onClick:function(){return e.props.selectNode(e.props.nodes.START_NODE)}},"Start"),a.a.createElement("button",{type:"button",onClick:function(){return e.props.selectNode(e.props.nodes.END_NODE)}},"End"),a.a.createElement("button",{type:"button",onClick:function(){return e.props.runAlgo()}},"Run"),a.a.createElement("button",{type:"button",onClick:function(){return e.props.clearBoard()}},"Clear Board"),a.a.createElement("select",{id:"algos",value:void 0,onChange:function(t){return e.props.updateAlgo(t.target.value)}},a.a.createElement("option",{hidden:!0},"Choose an Algorithm"),a.a.createElement("option",{value:"Dijkstra"},"Dijkstra")))}}]),t}(o.Component),f=(n(16),{WALL_NODE:0,START_NODE:1,END_NODE:2}),h=function(e){function t(e){var o;return Object(s.a)(this,t),(o=Object(l.a)(this,Object(u.a)(t).call(this,e))).setNodeToPlace=function(e){o.nodeToPlace=e},o.mouseEventHandler=function(e){e.preventDefault();var t=e.target.id,n=o.tableElement.querySelector("#".concat(t));"unvisited"===n.className&&(n.className=o.validateNode(t))},o.validateNode=function(e){var t=parseInt(e.split("_")[1]),n=parseInt(e.split("_")[2]),a=o.state.grid[t][n];switch(o.nodeToPlace){case 0:var r=o.state.grid;return r[t][n].isWall=!0,o.setState({grid:r}),"wall";case 1:if(o.startNode)o.tableElement.querySelector("#node_".concat(o.startNode.row,"_").concat(o.startNode.col)).className="unvisited";return o.startNode=a,"start";case 2:if(o.endNode)o.tableElement.querySelector("#node_".concat(o.endNode.row,"_").concat(o.endNode.col)).className="unvisited";return o.endNode=a,"end"}},o.clearBoard=function(){o.setState({grid:v()});var e=document.getElementById("tableBody").children;o.startNode=null,o.endNode=null;for(var t=0;t<e.length;t++)for(var n=e[t].children,a=0;a<n.length;a++)n[a].className="unvisited"},o.animateDijkstra=function(e,t){var n=1,a=o.tableElement.querySelector("#node_".concat(o.endNode.row,"_").concat(o.endNode.col));t.forEach((function(t){var r=o.tableElement.querySelector("#node_".concat(t.row,"_").concat(t.col));r===a&&setTimeout((function(){o.animateSPNodes(e)}),10*n),"start"!==r.className&&"end"!==r.className&&(setTimeout((function(){r.className="visited"}),10*n),n++)}))},o.animateSPNodes=function(e){var t=1;e.forEach((function(e){var n=o.tableElement.querySelector("#node_".concat(e.row,"_").concat(e.col));"start"!==n.className&&"end"!==n.className&&(setTimeout((function(){n.className="shortestPath"}),30*t),t++)}))},o.runAlgo=function(){o.algorithm&&o.startNode&&o.endNode?n(17)("./".concat(o.algorithm)).then((function(e){var t=new e.default(o.state.grid,o.startNode,o.endNode).run();o.animateDijkstra(t.sp,t.visited)})):window.alert("Something's missing! Check if you placed both start and end nodes nad if you chose an algorithm")},o.state={grid:[]},o.nodeToPlace=f.WALL_NODE,o.startNode=null,o.endNode=null,o.mouseDown=!1,o.algorithm=null,o.tableElement=null,o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=v();this.tableElement=document.getElementById("grid"),this.setState({grid:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"main"},a.a.createElement("div",{id:"menu"},a.a.createElement(p,{selectNode:this.setNodeToPlace,nodes:f,runAlgo:this.runAlgo,clearBoard:this.clearBoard,updateAlgo:function(t){e.algorithm=t}})),a.a.createElement("div",{id:"grid"},a.a.createElement(m,{mouseEventHandler:this.mouseEventHandler,setMouseDownFalse:function(){return e.mouseDown=!1},setMouseDownTrue:function(){return e.mouseDown=!0},mouseDown:this.mouseDown,grid:this.state.grid})))}}]),t}(o.Component),v=function(){for(var e=[],t=0;t<17;t++){for(var n=[],o=0;o<70;o++)n.push({row:t,col:o,cost:1/0,path:null,isWall:!1});e.push(n)}return e};var N=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,2,3]]]);
//# sourceMappingURL=main.8d00ea52.chunk.js.map