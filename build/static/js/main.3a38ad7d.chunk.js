(this["webpackJsonpcommit-stalker"]=this["webpackJsonpcommit-stalker"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o);a(46),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(10),l=a.n(i),s=a(17),u=a(57),m=a(58),d=a(70),h=a(69),p=a(152);a(81);function f(e){var t=1+(e.totalCommitNum/100|0);return r.a.createElement("div",{className:"page-info"},"".concat(e.page," / ").concat(t))}var g=a(40),v=a.n(g),y=function(e,t,a){c.a.render(r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("div",null,e)),document.getElementById(t)),a&&a()},k=function(e){document.querySelectorAll(e).forEach((function(e){c.a.render(r.a.createElement(r.a.Fragment,null),e)}))},E=function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://secure-tundra-40881.herokuapp.com/count?user=".concat(t,"&repo=").concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.message,"commit-history",(function(){return k(".page-info-wrap")}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(l.a.mark((function e(t,a,n){var r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://api.github.com/repos/".concat(t,"/").concat(a,"/commits?page=").concat(n,"&per_page=100"));case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.message,"commit-history",(function(){return k(".page-info-wrap")}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),C=a(157),N={marginLeft:"auto",marginRight:"auto",maxWidth:"900px"},b={color:"#fff",fontSize:"2rem"},D=function(){return r.a.createElement("div",{style:N},r.a.createElement(C.a,{href:"https://github.com/9sako6/commit-stalker",target:"_blank",rel:"noopener noreferrer",style:b,underline:"none"},"Commit Stalker"))},K=a(154),x=a(150),j=(a(102),Object(x.a)({root:{fontSize:"1.5em",marginRight:"10px","& label":{color:"#ddf",fontWeight:"700"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}}},input:{color:"white"}}));function S(e){var t=j();return r.a.createElement(K.a,{color:"primary",className:t.root,value:e.value,label:"User",onChange:e.handleChange,onKeyDown:e.handleKeyDown,InputProps:{className:t.input}})}function O(e){var t=j();return r.a.createElement(K.a,{color:"primary",className:t.root,type:"text",value:e.value,label:"Repository",onChange:e.handleChange,onKeyDown:e.handleKeyDown,InputProps:{className:t.input}})}function H(e){var t=j();return r.a.createElement(K.a,{color:"primary",className:t.root,type:"text",value:e.value,label:"Page Number",onChange:e.handleChange,onKeyDown:e.handleKeyDown,InputProps:{className:t.input}})}a(103);var L=a(155),M=a(61),I=a.n(M),B=a(63),F=a.n(B),z=a(64),P=a.n(z),_=a(62),R=a.n(_),q=a(65),A=a.n(q),T=Object(x.a)({root:{display:"inline-block","& svg":{color:"white"}}});function W(e){var t=T();return r.a.createElement("div",{className:t.root,id:"request",onKeyDown:e.handleKeyDown},r.a.createElement(L.a,{"aria-label":"delete",onClick:e.handleClick},r.a.createElement(I.a,{fontSize:"inherit",color:"primary"})))}function U(e){var t=T();return r.a.createElement("div",{className:t.root,onKeyDown:e.handleKeyDown},r.a.createElement(L.a,{"aria-label":"delete",onClick:e.handleClick},r.a.createElement(R.a,{fontSize:"inherit",color:"primary"})))}function J(e){var t=T();return r.a.createElement("div",{className:t.root,onKeyDown:e.handleKeyDown},r.a.createElement(L.a,{"aria-label":"delete",onClick:e.handleClick},r.a.createElement(F.a,{fontSize:"inherit",color:"primary"})))}function G(e){var t=T();return r.a.createElement("div",{className:t.root,onKeyDown:e.handleKeyDown},r.a.createElement(L.a,{"aria-label":"delete",onClick:e.handleClick},r.a.createElement(P.a,{fontSize:"inherit",color:"primary"})))}function V(e){var t=T();return r.a.createElement("div",{className:t.root,onKeyDown:e.handleKeyDown},r.a.createElement(L.a,{"aria-label":"delete",onClick:e.handleClick},r.a.createElement(A.a,{fontSize:"inherit",color:"primary"})))}var $=a(66),Q=a.n($),X=(a(109),function(e){var t=null===e.json.author?"anonymous author":e.json.author.login,a=null===e.json.author?"#":e.json.author.html_url,n=null===e.json.author?"#":e.json.author.avatar_url,o=new Date(e.json.commit.author.date),c=!0===e.json.commit.verification.verified?r.a.createElement("div",{className:"table-list-cell"},r.a.createElement("div",{className:"verify-mark"},"Verified")):r.a.createElement(r.a.Fragment,null);return r.a.createElement("li",{className:"commit-list-item"},r.a.createElement("div",{className:"table-list-cell",style:{width:"800px"}},r.a.createElement("p",{className:"commit-title"},r.a.createElement("a",{className:"message-link","data-pjax":"true",href:e.json.html_url,target:"_blank",rel:"noopener noreferrer"},Q.a.emojify(e.json.commit.message))),r.a.createElement("div",{className:"author-area"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"author-avatar",alt:"author-avatar",src:n})),r.a.createElement("a",{className:"author-link","data-pjax":"true",href:"https://github.com/".concat(t,"/").concat(e.repo,"/commit?author=").concat(t),target:"_blank",rel:"noopener noreferrer"},t),r.a.createElement("span",{className:"date"},"committed on ",o.toLocaleDateString(),"\xa0",o.toLocaleTimeString()))),c)});a(110);function Y(e){var t="";return void 0!==e.jsonList?r.a.createElement(r.a.Fragment,null,e.jsonList.map((function(a,n){var o=String(new Date(a.commit.author.date)).split(" ").slice(1,4),c="".concat(o[0]," ").concat(o[1],", ").concat(o[2]);return c!==t?(t=c,r.a.createElement(r.a.Fragment,{key:n},r.a.createElement("div",{className:"commit-group-title"},c),r.a.createElement(X,{json:a,user:e.user,repo:e.repo}))):r.a.createElement(X,{key:n,json:a,user:e.user,repo:e.repo})}))):r.a.createElement(r.a.Fragment,null)}a(111);function Z(){return r.a.createElement("div",{className:"sk-fading-circle"},r.a.createElement("div",{className:"sk-circle1 sk-circle"}),r.a.createElement("div",{className:"sk-circle2 sk-circle"}),r.a.createElement("div",{className:"sk-circle3 sk-circle"}),r.a.createElement("div",{className:"sk-circle4 sk-circle"}),r.a.createElement("div",{className:"sk-circle5 sk-circle"}),r.a.createElement("div",{className:"sk-circle6 sk-circle"}),r.a.createElement("div",{className:"sk-circle7 sk-circle"}),r.a.createElement("div",{className:"sk-circle8 sk-circle"}),r.a.createElement("div",{className:"sk-circle9 sk-circle"}),r.a.createElement("div",{className:"sk-circle10 sk-circle"}),r.a.createElement("div",{className:"sk-circle11 sk-circle"}),r.a.createElement("div",{className:"sk-circle12 sk-circle"}))}a(112);var ee=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).commitHistory=void 0,n.totalCommitNumHistory=void 0,n.handleUserChange=function(e){n.setState({user:e.currentTarget.value})},n.handleRepoChange=function(e){n.setState({repo:e.currentTarget.value})},n.handlePageChange=function(e){n.setState({page:e.currentTarget.value})},n.renderLoading=function(){document.querySelectorAll(".page-info-wrap").forEach((function(e){c.a.render(r.a.createElement(Z,null),e)})),c.a.render(r.a.createElement(Z,null),document.getElementById("commit-history"))},n.renderCommitHistory=function(){var e=Object(s.a)(l.a.mark((function e(t,a,o){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i="".concat(t,"/").concat(a,"/").concat(o),!1!==n.commitHistory.has(i)){e.next=4;break}return e.next=4,w(t,a,o).then((function(e){n.commitHistory.set(i,e)}));case 4:c.a.render(r.a.createElement(Y,{jsonList:n.commitHistory.get(i),user:t,repo:a}),document.getElementById("commit-history"));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.renderPageInfo=function(){var e=Object(s.a)(l.a.mark((function e(t,a,o){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i="".concat(t,"/").concat(a),!1!==n.totalCommitNumHistory.has(i)){e.next=4;break}return e.next=4,E(t,a).then((function(e){var t=Number(e);n.totalCommitNumHistory.set(i,t)}));case 4:document.querySelectorAll(".page-info-wrap").forEach((function(e){c.a.render(r.a.createElement(f,{page:o,totalCommitNum:n.totalCommitNumHistory.get(i)}),e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.renderMain=function(e,t,a){if(""===e||""===t)return!1;n.renderLoading(),n.renderCommitHistory(e,t,a),n.renderPageInfo(e,t,a)},n.handleFormKeyDown=function(e){13===e.keyCode&&n.renderMain(n.state.user,n.state.repo,Number(n.state.page))},n.handleLatestClick=function(){if(""===n.state.user||""===n.state.repo)return!1;n.renderLoading(),n.setState({page:"1"}),n.renderMain(n.state.user,n.state.repo,1)},n.handleBackClick=function(){if(""===n.state.user||""===n.state.repo)return!1;var e=Number(n.state.page);if(isNaN(e)||e<=1)return!1;n.renderLoading(),n.setState({page:String(e-1)}),n.renderMain(n.state.user,n.state.repo,e-1)},n.handleNextClick=Object(s.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.state.user&&""!==n.state.repo){e.next=2;break}return e.abrupt("return",!1);case 2:if(n.renderLoading(),t=Number(n.state.page),a="".concat(n.state.user,"/").concat(n.state.repo),!1!==n.totalCommitNumHistory.has(a)){e.next=8;break}return e.next=8,E(n.state.user,n.state.repo).then((function(e){var t=Number(e);n.totalCommitNumHistory.set(a,t)}));case 8:if(r=1+(n.totalCommitNumHistory.get(a)/100|0),!(isNaN(t)||t>=r)){e.next=14;break}return n.renderMain(n.state.user,n.state.repo,t),e.abrupt("return",!1);case 14:n.setState({page:String(t+1)}),n.renderMain(n.state.user,n.state.repo,t+1);case 16:case"end":return e.stop()}}),e)}))),n.handleOldestClick=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n.state.user&&""!==n.state.repo){e.next=2;break}return e.abrupt("return",!1);case 2:if(n.renderLoading(),t="".concat(n.state.user,"/").concat(n.state.repo),!1!==n.totalCommitNumHistory.has(t)){e.next=7;break}return e.next=7,E(n.state.user,n.state.repo).then((function(e){var a=Number(e);n.totalCommitNumHistory.set(t,a)}));case 7:a=1+(n.totalCommitNumHistory.get(t)/100|0),n.setState({page:String(a)}),n.renderMain(n.state.user,n.state.repo,a);case 10:case"end":return e.stop()}}),e)}))),n.handleSearchKeyDown=function(e){13===e.keyCode&&n.renderMain(n.state.user,n.state.repo,Number(n.state.page))},n.handleLatestKeyDown=function(e){13===e.keyCode&&n.handleLatestClick()},n.handleBackKeyDown=function(e){13===e.keyCode&&n.handleBackClick()},n.handleNextKeyDown=function(e){13===e.keyCode&&n.handleNextClick()},n.handleOldestKeyDown=function(e){13===e.keyCode&&n.handleOldestClick()},n.state={user:"",repo:"",page:"1"},n.commitHistory=new Map,n.totalCommitNumHistory=new Map,n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"site-header"},r.a.createElement(D,null),r.a.createElement(p.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement("div",null,r.a.createElement(S,{value:String(this.state.user),handleChange:this.handleUserChange,handleKeyDown:this.handleFormKeyDown}),r.a.createElement(O,{value:String(this.state.repo),handleChange:this.handleRepoChange,handleKeyDown:this.handleFormKeyDown}),r.a.createElement(H,{value:String(this.state.page),handleChange:this.handlePageChange,handleKeyDown:this.handleFormKeyDown}),r.a.createElement(W,{handleClick:function(){return e.renderMain(e.state.user,e.state.repo,Number(e.state.page))},handleKeyDown:this.handleSearchKeyDown}),r.a.createElement(U,{handleClick:this.handleLatestClick,handleKeyDown:this.handleLatestKeyDown}),r.a.createElement(J,{handleClick:this.handleBackClick,handleKeyDown:this.handleBackKeyDown}),r.a.createElement(G,{handleClick:this.handleNextClick,handleKeyDown:this.handleNextKeyDown}),r.a.createElement(V,{handleClick:this.handleOldestClick,handleKeyDown:this.handleOldestKeyDown}))))}}]),a}(n.Component),te=a(68),ae=a(153),ne=a(156),re=a(67),oe=a.n(re),ce=function(e){var t=r.a.useState(!0),a=Object(te.a)(t,2),n=a[0],o=a[1];return r.a.createElement(ae.a,{in:n},r.a.createElement(ne.a,Object.assign({elevation:6,variant:"filled",action:r.a.createElement(L.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){o(!1)}},r.a.createElement(oe.a,{fontSize:"inherit"}))},e)))},ie=Object(x.a)({root:{maxWidth:"900px",marginLeft:"auto",marginRight:"auto","& a":{color:"#fff"}}}),le=function(){var e=ie();return r.a.createElement(ce,{severity:"info",className:e.root},r.a.createElement("a",{href:"https://developer.github.com/v3/#rate-limiting",target:"_blank",rel:"noopener noreferrer"},"The GitHub API's rate limit allows for up to 60 requests per hour"))},se=(a(56),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement("div",{className:"page-info-wrap"}),r.a.createElement("div",{id:"commit-history"}),r.a.createElement("div",{className:"page-info-wrap"}),r.a.createElement(le,null))});c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){},56:function(e,t,a){},75:function(e,t,a){e.exports=a(113)},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.3a38ad7d.chunk.js.map