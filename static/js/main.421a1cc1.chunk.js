(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),c=a(7),o=a(1);var m=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"movie"},"About this page"))},l=a(15),u=a.n(l),v=a(29),p=a(10),d=a(11),E=a(13),_=a(12),f=a(30),y=a.n(f);a(55);var g=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,i=e.poster,o=e.genres;return r.a.createElement(c.b,{className:"movie",to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:s,poster:i,genres:o}}},r.a.createElement("img",{src:i,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("div",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,100),"...")))},h=(a(61),function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,genres:e.genres,summary:e.summary,poster:e.medium_cover_image})}))))}}]),a}(r.a.Component)),N=(a(62),function(e){Object(E.a)(a,e);var t=Object(_.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return void 0===e.state?null:r.a.createElement("div",{className:"article",key:e.state.id},r.a.createElement("img",{src:e.state.poster,alt:e.state.poster,name:e.state.poster}),r.a.createElement("div",{className:"article__movieInfo"},r.a.createElement("h3",null,e.state.title),r.a.createElement("h4",null,e.state.year),r.a.createElement("ul",null,e.state.genres.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",null,e.state.summary)))}}]),a}(n.Component));a(63);var b=function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"navigation__menus"},r.a.createElement(c.b,{className:"navigation__menu",to:{pathname:"/"}},r.a.createElement("span",{className:"navigation__text"},"Home")),r.a.createElement(c.b,{className:"navigation__menu",to:{pathname:"/about"}},r.a.createElement("span",{className:"navigation__text"},"about"))))};var k=function(){return r.a.createElement(c.a,{basename:"/react-movie-app"},r.a.createElement(b,null),r.a.createElement(o.a,{path:"/",exact:!0,component:h}),r.a.createElement(o.a,{path:"/about",component:m}),r.a.createElement(o.a,{path:"/movie/:id",component:N}))};i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.421a1cc1.chunk.js.map