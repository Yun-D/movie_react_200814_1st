(this.webpackJsonpmovie_react_200814_1st=this.webpackJsonpmovie_react_200814_1st||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),o=(a(37),a(8)),c=a(1);a(38);var l=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\uc5b4\ubc14\uc6c3 \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4. \uc57c\ud638!"),r.a.createElement("span",null," - 2020.09.10"))},m=a(15),u=a.n(m),v=a(29),p=a(10),d=a(11),E=a(13),y=a(12),f=a(30),g=a.n(f),_=a(6),h=a.n(_);a(59);function b(e){var t=e.title,a=e.year,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:s,genres:i}}},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"}," ",t," "),r.a.createElement("h5",{className:"movie__year"}," ",a," "),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genre"}," ",e," ")}))),r.a.createElement("p",{className:"movie__summary"}," ",n.slice(0,180)," ... "))))}b.prototype={year:h.a.number.isRequired,title:h.a.string.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var N=b,j=(a(63),function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},r.a.createElement("h4",null,"200822 ~ 200910 \ub9ac\uc561\ud2b8 \uc601\ud654 \uc571 \ud074\ub860\ucf54\ub529"),a.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(64);var O=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))},k=function(e){Object(E.a)(a,e);var t=Object(y.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",null,r.a.createElement("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),r.a.createElement("span",null," ",e.state.title," ")):null}}]),a}(r.a.Component);var w=function(){return r.a.createElement(o.a,null,r.a.createElement(O,null),r.a.createElement(c.a,{path:"/",exact:!0,component:j}),r.a.createElement(c.a,{path:"/about",component:l}),r.a.createElement(c.a,{path:"/movie-detail",component:k}))};i.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0c2ae4b4.chunk.js.map