(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(28),l=a.n(r),i=(a(36),a(37),a(29)),c=a(1),o=a(4),u=a(5),m=a(2),d=a(10),p=a(9),h=a(13),v=a.n(h),b="https://heroku-springbootbackend.herokuapp.com/api/v1/issues",E=new(function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"getIssues",value:function(){return v.a.get(b)}},{key:"createIssue",value:function(e){return v.a.post(b,e)}},{key:"getIssueById",value:function(e){return v.a.get(b+"/"+e)}},{key:"updateIssue",value:function(e,t){return v.a.put(b+"/"+t,e)}},{key:"deleteIssue",value:function(e){return v.a.delete(b+"/"+e)}}]),e}()),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={issues:[]},n.addIssue=n.addIssue.bind(Object(m.a)(n)),n.editIssue=n.editIssue.bind(Object(m.a)(n)),n.deleteIssue=n.deleteIssue.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"deleteIssue",value:function(e){var t=this;E.deleteIssue(e).then((function(a){t.setState({issues:t.state.issues.filter((function(t){return t.id!==e}))})}))}},{key:"viewIssue",value:function(e){this.props.history.push("/view-issue/".concat(e))}},{key:"editIssue",value:function(e){this.props.history.push("/add-issue/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;E.getIssues().then((function(t){e.setState({issues:t.data})}))}},{key:"addIssue",value:function(){this.props.history.push("/add-issue/_add")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",{className:"text-center"},"Bug List"),s.a.createElement("div",{className:"row"},s.a.createElement("button",{className:"btn btn-primary",onClick:this.addIssue}," Add Issue")),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("table",{className:"table table-striped table-bordered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null," Name"),s.a.createElement("th",null," Priority"),s.a.createElement("th",null," Status"),s.a.createElement("th",null," Description"),s.a.createElement("th",null," Actions"))),s.a.createElement("tbody",null,this.state.issues.map((function(t){return s.a.createElement("tr",{key:t.id},s.a.createElement("td",null," ",t.name," "),s.a.createElement("td",null," ",t.priority),s.a.createElement("td",null," ",t.status),s.a.createElement("td",null," ",t.description),s.a.createElement("td",null,s.a.createElement("button",{onClick:function(){return e.editIssue(t.id)},className:"btn btn-info"},"Update "),s.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteIssue(t.id)},className:"btn btn-danger"},"Delete "),s.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.viewIssue(t.id)},className:"btn btn-info"},"View ")))}))))))}}]),a}(n.Component),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},s.a.createElement("div",null,s.a.createElement("a",{href:"https://github.com/ConnorAlbert",className:"navbar-brand"},"Bug Tracker App")))))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("footer",{className:"footer"}))}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).saveOrUpdateIssue=function(e){e.preventDefault();var t={name:n.state.name,priority:n.state.priority,status:n.state.status,description:n.state.description};console.log("issue => "+JSON.stringify(t)),"_add"===n.state.id?E.createIssue(t).then((function(e){n.props.history.push("/issues")})):E.updateIssue(t,n.state.id).then((function(e){n.props.history.push("/issues")}))},n.changeNameHandler=function(e){n.setState({name:e.target.value})},n.changePriorityHandler=function(e){n.setState({priority:e.target.value})},n.changeStatusHandler=function(e){n.setState({status:e.target.value})},n.changeDescriptionHandler=function(e){n.setState({description:e.target.value})},n.state={id:n.props.match.params.id,name:"",priority:"",status:"",description:""},n.changeNameHandler=n.changeNameHandler.bind(Object(m.a)(n)),n.changePriorityHandler=n.changePriorityHandler.bind(Object(m.a)(n)),n.changeStatusHandler=n.changeStatusHandler.bind(Object(m.a)(n)),n.changeDescriptionHandler=n.changeDescriptionHandler.bind(Object(m.a)(n)),n.saveOrUpdateIssue=n.saveOrUpdateIssue.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;"_add"!==this.state.id&&E.getIssueById(this.state.id).then((function(t){var a=t.data;e.setState({name:a.name,priority:a.priority,status:a.status,description:a.description})}))}},{key:"cancel",value:function(){this.props.history.push("/issues")}},{key:"getTitle",value:function(){return"_add"===this.state.id?s.a.createElement("h3",{className:"text-center"},"Add Issue"):s.a.createElement("h3",{className:"text-center"},"Update Issue")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},this.getTitle(),s.a.createElement("div",{className:"card-body"},s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null," Name: "),s.a.createElement("input",{autoComplete:"off",name:"name",className:"form-control",value:this.state.name,onChange:this.changeNameHandler})),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",null,s.a.createElement("label",null,"Priority:",s.a.createElement("select",{name:"priority",className:"form-option",value:this.state.priority,onChange:this.changePriorityHandler},s.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose here"),s.a.createElement("option",{value:"Low"},"Low"),s.a.createElement("option",{value:"Medium"},"Medium"),s.a.createElement("option",{value:"High"},"High"),s.a.createElement("option",{value:"Critical"},"Critical")))),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",null,s.a.createElement("label",null,"Status:",s.a.createElement("select",{name:"Status",className:"form-option",value:this.state.status,onChange:this.changeStatusHandler},s.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose here"),s.a.createElement("option",{value:"Open"},"Open"),s.a.createElement("option",{value:"Closed"},"Closed"),s.a.createElement("option",{value:"Fixed"},"Fixed")))))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null," Description: "),s.a.createElement("input",{autoComplete:"off",name:"description",className:"form-control",value:this.state.description,onChange:this.changeDescriptionHandler})),s.a.createElement("button",{className:"btn btn-success",onClick:this.saveOrUpdateIssue},"Save"),s.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component),k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateIssue=function(e){e.preventDefault();var t={name:n.state.name,priority:n.state.priority,status:n.state.status,description:n.state.description};console.log("issue => "+JSON.stringify(t)),console.log("id => "+JSON.stringify(n.state.id)),E.updateIssue(t,n.state.id).then((function(e){n.props.history.push("/issues")}))},n.changeNameHandler=function(e){n.setState({name:e.target.value})},n.changePriorityHandler=function(e){n.setState({priority:e.target.value})},n.changeStatusHandler=function(e){n.setState({status:e.target.value})},n.changeDescriptionHandler=function(e){n.setState({description:e.target.value})},n.state={id:n.props.match.params.id,name:"",priority:"",status:"",description:""},n.changeNameHandler=n.changeNameHandler.bind(Object(m.a)(n)),n.changePriorityHandler=n.changePriorityHandler.bind(Object(m.a)(n)),n.changeStatusHandler=n.changeStatusHandler.bind(Object(m.a)(n)),n.changeDescriptionHandler=n.changeDescriptionHandler.bind(Object(m.a)(n)),n.updateIssue=n.updateIssue.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.getIssueById(this.state.id).then((function(t){var a=t.data;e.setState({name:a.name,priority:a.priority,status:a.status,description:a.description})}))}},{key:"cancel",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},s.a.createElement("h3",{className:"text-center"},"Update Issue"),s.a.createElement("div",{className:"card-body"},s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null," Name: "),s.a.createElement("input",{name:"name",className:"form-control",value:this.state.name,onChange:this.changeNameHandler})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null," Priority: "),s.a.createElement("input",{name:"priority",className:"form-control",value:this.state.priority,onChange:this.changePriorityHandler})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null," Status: "),s.a.createElement("input",{name:"status",className:"form-control",value:this.state.status,onChange:this.changeStatusHandler})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null," Description: "),s.a.createElement("input",{name:"description",className:"form-control",value:this.state.description,onChange:this.changeDescriptionHandler})),s.a.createElement("button",{className:"btn btn-success",onClick:this.updateIssue},"Save"),s.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleBack=n.handleBack.bind(Object(m.a)(n)),n.state={id:n.props.match.params.id,issue:{}},n}return Object(u.a)(a,[{key:"handleBack",value:function(){this.props.history.goback()}},{key:"componentDidMount",value:function(){var e=this;E.getIssueById(this.state.id).then((function(t){e.setState({issue:t.data})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("div",{className:"card col-md-6 offset-md-3"},s.a.createElement("h3",{className:"text-center"}," View Issue Details"),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"rows"},s.a.createElement("label",null," Name: "),s.a.createElement("div",{className:"data"}," ",this.state.issue.name)),s.a.createElement("div",{className:"rows"},s.a.createElement("label",null," Priority: "),s.a.createElement("div",{className:"data"}," ",this.state.issue.priority)),s.a.createElement("div",{className:"rows"},s.a.createElement("label",null," Status: "),s.a.createElement("div",{className:"data"}," ",this.state.issue.status)),s.a.createElement("div",{className:"rows"},s.a.createElement("label",null," Description: "),s.a.createElement("div",{className:"data"}," ",this.state.issue.description)),s.a.createElement("div",null,s.a.createElement("button",{className:"btn-back",onClick:this.props.history.goBack},"Back")))))}}]),a}(n.Component);var I=function(){return s.a.createElement("div",null,s.a.createElement(i.a,null,s.a.createElement(g,null),s.a.createElement("div",{className:"container"},s.a.createElement(c.c,null,s.a.createElement(c.a,{path:"/",exact:!0,component:f}),s.a.createElement(c.a,{path:"/issues",component:f}),s.a.createElement(c.a,{path:"/add-issue/:id",component:N}),s.a.createElement(c.a,{path:"/view-issue/:id",component:O}),s.a.createElement(c.a,{path:"/update-issue/:id",component:k}))),s.a.createElement(y,null)))};a(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b6111f32.chunk.js.map