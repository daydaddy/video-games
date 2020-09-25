(this.webpackJsonppresentation=this.webpackJsonppresentation||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),s=(a(14),a(15),a(1)),c=a(2),i=a(4),u=a(3),m=a(8),h=a(5),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).addConsole=function(){var e=n.state.consoles.map((function(e){return e}));e.push(""),n.setState({consoles:e})},n.removeConsole=function(e){var t=n.state.consoles.map((function(e){return e}));t.splice(e,1),n.setState({consoles:t})},n.handleConsoleChange=function(e,t){var a=n.state.consoles.map((function(e){return e}));a[t]=e,n.setState({consoles:a})},n.handleChange=function(e){var t=e.target;console.log(t.value);var a="checkbox"===t.type?t.checked:t.value;a="number"===t.type?parseInt(a):a,n.setState(Object(h.a)({},t.name,a))},n.handleSubmit=function(e){e.preventDefault(),fetch("".concat("http://localhost:4000/v1","/video-games/").concat(n.props.game._id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.refresh).then(n.props.close)};var o=e.game;return n.state={name:o.name,type:o.type,genre:o.genre,release:o.release,players:o.players,consoles:o.consoles,owned:o.owned},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.consoles.map((function(t,a){return o.a.createElement("div",{key:a+3e3},o.a.createElement("select",{value:e.state.consoles[a],onChange:function(t){var n=t.target;return e.handleConsoleChange(n.value,a)}},o.a.createElement("option",{value:""},"Choose a Console"),o.a.createElement("option",{value:"ps1"},"Playstation 1"),o.a.createElement("option",{value:"ps2"},"Playstation 2"),o.a.createElement("option",{value:"ps3"},"Playstation 3"),o.a.createElement("option",{value:"ps4"},"Playstation 4"),o.a.createElement("option",{value:"xbox"},"Xbox"),o.a.createElement("option",{value:"xbox360"},"Xbox 360"),o.a.createElement("option",{value:"xbox1"},"Xbox One"),o.a.createElement("option",{value:"nes"},"NES"),o.a.createElement("option",{value:"snes"},"SNES"),o.a.createElement("option",{value:"n64"},"Nintendo 64"),o.a.createElement("option",{value:"gc"},"GameCube"),o.a.createElement("option",{value:"switch"},"Switch"),o.a.createElement("option",{value:"pc"},"PC")),o.a.createElement("input",{className:"del-btn",type:"button",value:"X",onClick:function(){return e.removeConsole(a)}}))}));return o.a.createElement("form",{className:"update",onSubmit:this.handleSubmit},o.a.createElement("input",{name:"name",type:"text",placeholder:"Game Name",value:this.state.name,onChange:this.handleChange}),o.a.createElement("input",{name:"type",type:"text",placeholder:"Game Type",value:this.state.type,onChange:this.handleChange}),o.a.createElement("input",{name:"genre",type:"text",placeholder:"Game Genre",value:this.state.genre,onChange:this.handleChange}),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"release"},"First Released"),o.a.createElement("input",{name:"release",type:"date",placeholder:"Release Date",value:this.state.release,onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"release"},"Number of Players"),o.a.createElement("input",{name:"players",type:"number",placeholder:"players",value:this.state.players,onChange:this.handleChange})),t,o.a.createElement("input",{type:"button",value:"Add Console",onClick:this.addConsole}),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"owned"},"Owned"),o.a.createElement("input",{name:"owned",type:"checkbox",checked:this.state.owned,onChange:this.handleChange})),o.a.createElement("button",null,"Update Game"))}}]),a}(o.a.Component),d=function(e){var t=e.game,a=e.refresh,l=Object(n.useState)(!1),r=Object(m.a)(l,2),s=r[0],c=r[1],i=function(){return c(!s)},u=s?o.a.createElement("fieldset",null,o.a.createElement(p,{game:t,refresh:a,close:i})):"";return o.a.createElement("div",null,o.a.createElement("span",null,t.name),o.a.createElement("button",{className:"edit",onClick:i},"Edit"),o.a.createElement("button",{className:"del-btn",onClick:function(){fetch("".concat("http://localhost:4000/v1","/video-games/").concat(t._id),{method:"DELETE"}).then(a)}},"X"),u)},v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addConsole=function(){var e=n.state.consoles.map((function(e){return e}));e.push(""),n.setState({consoles:e})},n.removeConsole=function(e){var t=n.state.consoles.map((function(e){return e}));t.splice(e,1),n.setState({consoles:t})},n.handleConsoleChange=function(e,t){var a=n.state.consoles.map((function(e){return e}));a[t]=e,n.setState({consoles:a})},n.handleChange=function(e){var t=e.target;console.log(t.value);var a="checkbox"===t.type?t.checked:t.value;a="number"===t.type?parseInt(a):a,n.setState(Object(h.a)({},t.name,a))},n.handleSubmit=function(e){e.preventDefault(),fetch("".concat("http://localhost:4000/v1","/video-games"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.refresh).then((function(){return n.setState({name:"",type:"",genre:"",release:"",players:0,consoles:[""],owned:!1})}))},n.state={name:"",type:"",genre:"",release:"",players:0,consoles:[""],owned:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.consoles.map((function(t,a){return o.a.createElement("div",{key:a+3e3},o.a.createElement("select",{value:e.state.consoles[a],onChange:function(t){var n=t.target;return e.handleConsoleChange(n.value,a)}},o.a.createElement("option",{value:""},"Choose a Console"),o.a.createElement("option",{value:"ps1"},"Playstation 1"),o.a.createElement("option",{value:"ps2"},"Playstation 2"),o.a.createElement("option",{value:"ps3"},"Playstation 3"),o.a.createElement("option",{value:"ps4"},"Playstation 4"),o.a.createElement("option",{value:"xbox"},"Xbox"),o.a.createElement("option",{value:"xbox360"},"Xbox 360"),o.a.createElement("option",{value:"xbox1"},"Xbox One"),o.a.createElement("option",{value:"nes"},"NES"),o.a.createElement("option",{value:"snes"},"SNES"),o.a.createElement("option",{value:"n64"},"Nintendo 64"),o.a.createElement("option",{value:"gc"},"GameCube"),o.a.createElement("option",{value:"switch"},"Switch"),o.a.createElement("option",{value:"pc"},"PC")),o.a.createElement("input",{className:"del-btn",type:"button",value:"X",onClick:function(){return e.removeConsole(a)}}))}));return o.a.createElement("form",{id:"create",onSubmit:this.handleSubmit},o.a.createElement("input",{name:"name",type:"text",placeholder:"Game Name",value:this.state.name,onChange:this.handleChange}),o.a.createElement("input",{name:"type",type:"text",placeholder:"Game Type",value:this.state.type,onChange:this.handleChange}),o.a.createElement("input",{name:"genre",type:"text",placeholder:"Game Genre",value:this.state.genre,onChange:this.handleChange}),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"release"},"First Released"),o.a.createElement("input",{name:"release",type:"date",placeholder:"Release Date",value:this.state.release,onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"release"},"Number of Players"),o.a.createElement("input",{name:"players",type:"number",placeholder:"players",value:this.state.players,onChange:this.handleChange})),t,o.a.createElement("input",{type:"button",value:"Add Console",onClick:this.addConsole}),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"owned"},"Owned"),o.a.createElement("input",{name:"owned",type:"checkbox",checked:this.state.owned,onChange:this.handleChange})),o.a.createElement("button",null,"Add Game"))}}]),a}(o.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={videoGames:[]},e.getVideoGames=function(){fetch("".concat("http://localhost:4000/v1","/video-games")).then((function(e){return e.json()})).then((function(t){return e.setState({videoGames:t})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getVideoGames()}},{key:"render",value:function(){var e=this,t=this.state.videoGames.map((function(t){return o.a.createElement(d,{game:t,key:t._id,refresh:e.getVideoGames})}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Video Games"),o.a.createElement(v,{refresh:this.getVideoGames}),t)}}]),a}(n.Component);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.53234f74.chunk.js.map