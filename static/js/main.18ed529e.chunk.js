(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=(n(16),n(7)),s=n(6),u=n(2),i=n(4),m=n(3),d=n(1),p=n(5),b=(n(17),function(e){var t=e.totalCounters;return console.log("NavBar - Rendered"),o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("a",{className:"nav-brand",href:"#"},"NavBar",o.a.createElement("span",{className:"badge badge-pill badge-secondary m-2"}," ",t," "))))}),v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return console.log("Counter - Rendered"),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),o.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"+"),o.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-secondary btn-sm m-2"},"-"),o.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm"},"Delete")))}},{key:"componentDidUpdate",value:function(e,t){console.log("Previous Props",e),console.log("Previous State",t)}},{key:"componentWillUnmount",value:function(){console.log("Counter - Unmounted")}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return e<1?(e=0,o.a.createElement("h6",null," Zero ")):e}}]),t}(a.Component),h=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){console.log("Counters - Rendered");var e=this.props,t=e.counters,n=e.onReset,a=e.onDelete,r=e.onIncrement,c=e.onDecrement;return o.a.createElement("div",null,o.a.createElement("button",{onClick:n,className:"btn btn-primary btn-sm m-2"},"Reset"),t.map(function(e){return o.a.createElement(v,{onDelete:a,onIncrement:r,onDecrement:c,counter:e,key:e.id},o.a.createElement("h3",null," Counter #",e.id," "))}))}}]),t}(a.Component),f=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleReset=function(){var t=e.state.counters.map(function(e){return e.value=0,e});e.setState({counters:t})},e.handleDecrement=function(t){var n=Object(s.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(l.a)({},t),n[a].value--,e.setState({counters:n})},e.handleIncrement=function(t){var n=Object(s.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(l.a)({},t),n[a].value++,e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter(function(e){return e.id!==t});e.setState({counters:n})},console.log("App - Constructor"),e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log("App - Rendered"),o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),o.a.createElement("main",{className:"container"},o.a.createElement(h,{onDelete:this.handleDelete,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onReset:this.handleReset,counters:this.state.counters,key:this.state.counters.id})))}}]),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("App - Mounted")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.18ed529e.chunk.js.map