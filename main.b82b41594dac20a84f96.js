(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,e,o){t.exports=o("zUnb")},zUnb:function(t,e,o){"use strict";o.r(e);var n=o("fXoL"),i=o("jhN1"),r=o("3Pt+"),s=o("tyNb"),b=o("tk/3");const c=function(){return["/todo"]},a=function(){return["/beer"]},d=function(){return["/beer-todo-list"]};let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Bb({type:t,selectors:[["app-root"]],decls:20,vars:8,consts:[[1,"navbar","navbar-expand-md","navbar-dark","fixed-top","bg-dark"],[1,"navbar-brand",3,"routerLink"],["type","button","data-toggle","collapse","data-target","#navbarCollapse","aria-controls","navbarCollapse","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarCollapse",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","active"],[1,"nav-link",3,"routerLink"]],template:function(t,e){1&t&&(n.Kb(0,"nav",0),n.Kb(1,"a",1),n.ec(2,"NAVBAR"),n.Jb(),n.Kb(3,"button",2),n.Ib(4,"span",3),n.Jb(),n.Kb(5,"div",4),n.Kb(6,"ul",5),n.Kb(7,"li",6),n.Kb(8,"a",7),n.ec(9,"ToDo"),n.Jb(),n.Jb(),n.Kb(10,"li",6),n.Kb(11,"a",7),n.ec(12,"Beers"),n.Jb(),n.Jb(),n.Kb(13,"li",6),n.Kb(14,"a",7),n.ec(15,"BeersTodoList"),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Jb(),n.Ib(16,"br"),n.Ib(17,"br"),n.Ib(18,"br"),n.Ib(19,"router-outlet")),2&t&&(n.xb(1),n.Ub("routerLink",n.Wb(4,c)),n.xb(7),n.Ub("routerLink",n.Wb(5,c)),n.xb(3),n.Ub("routerLink",n.Wb(6,a)),n.xb(3),n.Ub("routerLink",n.Wb(7,d)))},directives:[s.c,s.e],styles:[""]}),t})();var p=o("ofXK");function u(t,e){if(1&t&&(n.Kb(0,"span"),n.ec(1),n.Jb()),2&t){const t=n.Tb().$implicit;n.xb(1),n.gc(" ",t.info," ")}}function f(t,e){if(1&t&&(n.Kb(0,"span",11),n.ec(1),n.Jb()),2&t){const t=n.Tb().$implicit;n.xb(1),n.gc(" ",t.info,"")}}function g(t,e){if(1&t){const t=n.Lb();n.Kb(0,"li"),n.cc(1,u,2,1,"span",5),n.cc(2,f,2,1,"ng-template",null,8,n.dc),n.Kb(4,"button",9),n.Rb("click",(function(){n.Zb(t);const o=e.$implicit;return n.Tb(2).doneTodo(o)})),n.ec(5," \u2713 "),n.Jb(),n.Kb(6,"button",10),n.Rb("click",(function(){n.Zb(t);const o=e.$implicit;return n.Tb(2).removeTodo(o)})),n.ec(7,"\u2715"),n.Jb(),n.Ib(8,"br"),n.Jb()}if(2&t){const t=e.$implicit,o=n.Yb(3);n.xb(1),n.Ub("ngIf",0==t.done)("ngIfElse",o)}}function m(t,e){if(1&t&&(n.Kb(0,"div"),n.Kb(1,"ul"),n.cc(2,g,9,2,"li",7),n.Jb(),n.Jb()),2&t){const t=n.Tb();n.xb(2),n.Ub("ngForOf",t.todos)}}function h(t,e){1&t&&(n.Kb(0,"span"),n.ec(1,"No todo!"),n.Jb())}let x=(()=>{class t{constructor(){this.todos=JSON.parse(localStorage.getItem("simpleTodos"))||[]}ngOnInit(){}addTodo(){this.valueInput&&this.todos.push({info:this.valueInput,done:!1}),this.valueInput="",localStorage.setItem("simpleTodos",JSON.stringify(this.todos))}doneTodo(t){t.done=!t.done,localStorage.setItem("simpleTodos",JSON.stringify(this.todos))}removeTodo(t){this.todos=this.todos.filter(e=>e!=t),localStorage.setItem("simpleTodos",JSON.stringify(this.todos))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Bb({type:t,selectors:[["app-todo"]],decls:12,vars:3,consts:[[1,"container"],["action","submit",3,"submit"],[1,"input-group","mb-3"],["type","text","placeholder","Input ToDo!","name","valueInput",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-success"],[4,"ngIf","ngIfElse"],["elseBlock",""],[4,"ngFor","ngForOf"],["todoDone",""],[1,"btn","btn-success","btnDone",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"todoDone"]],template:function(t,e){if(1&t&&(n.Kb(0,"div",0),n.Kb(1,"h1"),n.ec(2,"Inpup Todo!"),n.Jb(),n.Kb(3,"form",1),n.Rb("submit",(function(){return e.addTodo()})),n.Kb(4,"div",2),n.Kb(5,"input",3),n.Rb("ngModelChange",(function(t){return e.valueInput=t})),n.Jb(),n.Jb(),n.Kb(6,"button",4),n.ec(7,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),n.Jb(),n.Jb(),n.Ib(8,"br"),n.cc(9,m,3,1,"div",5),n.cc(10,h,2,0,"ng-template",null,6,n.dc),n.Jb()),2&t){const t=n.Yb(11);n.xb(5),n.Ub("ngModel",e.valueInput),n.xb(4),n.Ub("ngIf",0!=e.todos.length)("ngIfElse",t)}},directives:[r.h,r.d,r.e,r.a,r.c,r.f,p.i,p.h],styles:["li[_ngcontent-%COMP%]{margin-bottom:5px;list-style-type:decimal}.btnDone[_ngcontent-%COMP%], .todoDone[_ngcontent-%COMP%]{margin-right:5px}.todoDone[_ngcontent-%COMP%]{text-decoration:line-through}"]}),t})();function v(t,e){if(1&t&&(n.Kb(0,"div",3),n.Ib(1,"img",4),n.Kb(2,"div",5),n.Kb(3,"h5",6),n.ec(4),n.Jb(),n.Kb(5,"p",7),n.ec(6),n.Jb(),n.Kb(7,"a",8),n.ec(8,"Go to beer"),n.Jb(),n.Jb(),n.Jb()),2&t){const t=e.$implicit;n.xb(1),n.Vb("src",t.image_url,n.ac),n.xb(3),n.gc("Beer: ",t.name,""),n.xb(2),n.fc(t.description),n.xb(1),n.Ub("routerLink","/beer/"+t.id)}}const J=function(){return["/beer"]},K=function(){return["/beer-todo-list"]};function O(t,e){if(1&t&&(n.Kb(0,"div",10),n.Ib(1,"img",11),n.Kb(2,"div",12),n.Kb(3,"h5",13),n.ec(4),n.Jb(),n.Kb(5,"p",14),n.ec(6),n.Jb(),n.Kb(7,"a",15),n.ec(8,"Go to beer list!"),n.Jb(),n.Kb(9,"a",16),n.ec(10,"Go to BeerToDoList!"),n.Jb(),n.Jb(),n.Jb()),2&t){const t=e.$implicit;n.xb(1),n.Vb("src",t.image_url,n.ac),n.xb(3),n.gc("Beer: ",t.name,""),n.xb(2),n.fc(t.description),n.xb(1),n.Ub("routerLink",n.Wb(5,J)),n.xb(2),n.Ub("routerLink",n.Wb(6,K))}}function I(t,e){if(1&t&&(n.Kb(0,"span"),n.ec(1),n.Jb()),2&t){const t=n.Tb().$implicit;n.xb(1),n.gc(" ",t.info," ")}}function T(t,e){if(1&t&&(n.Kb(0,"span",21),n.ec(1),n.Jb()),2&t){const t=n.Tb().$implicit;n.xb(1),n.gc(" ",t.info,"")}}function y(t,e){if(1&t){const t=n.Lb();n.Kb(0,"li"),n.cc(1,I,2,1,"span",8),n.cc(2,T,2,1,"ng-template",null,18,n.dc),n.Kb(4,"button",19),n.Rb("click",(function(){n.Zb(t);const o=e.$implicit;return n.Tb(2).doneTodo(o)})),n.ec(5," \u2713 "),n.Jb(),n.Kb(6,"button",20),n.Rb("click",(function(){n.Zb(t);const o=e.$implicit;return n.Tb(2).removeTodo(o)})),n.ec(7,"\u2715"),n.Jb(),n.Ib(8,"br"),n.Jb()}if(2&t){const t=e.$implicit,o=n.Yb(3);n.xb(1),n.Ub("ngIf",0==t.done)("ngIfElse",o)}}function k(t,e){if(1&t&&(n.Kb(0,"div"),n.Kb(1,"ul"),n.cc(2,y,9,2,"li",17),n.Jb(),n.Jb()),2&t){const t=n.Tb();n.xb(2),n.Ub("ngForOf",t.todos)}}function _(t,e){1&t&&(n.Kb(0,"span",22),n.ec(1,"No beer tasks!"),n.Jb())}function w(t,e){if(1&t&&(n.Kb(0,"span",15),n.ec(1),n.Jb()),2&t){const t=n.Tb(2).$implicit,e=n.Tb().$implicit,o=n.Tb().$implicit;n.Ub("routerLink","/beer/"+o.id),n.xb(1),n.hc(" [",e.id,"] ",t.info," ")}}function M(t,e){if(1&t&&(n.Kb(0,"span",16),n.ec(1),n.Jb()),2&t){const t=n.Tb(2).$implicit,e=n.Tb().$implicit,o=n.Tb().$implicit;n.Ub("routerLink","/beer/"+o.id),n.xb(1),n.hc(" [",e.id,"] ",t.info,"")}}function C(t,e){if(1&t){const t=n.Lb();n.Kb(0,"div",10),n.cc(1,w,2,3,"span",11),n.cc(2,M,2,3,"ng-template",null,12,n.dc),n.Kb(4,"button",13),n.Rb("click",(function(){n.Zb(t);const e=n.Tb().$implicit,o=n.Tb().$implicit;return n.Tb(2).doneTodo(e,o.todos,o.id)})),n.ec(5," \u2713 "),n.Jb(),n.Kb(6,"button",14),n.Rb("click",(function(){n.Zb(t);const e=n.Tb().$implicit,o=n.Tb().$implicit;return n.Tb(2).removeTodo(e,o.todos,o.id)})),n.ec(7," \u2715 "),n.Jb(),n.Ib(8,"br"),n.Jb()}if(2&t){const t=n.Yb(3),e=n.Tb().$implicit;n.xb(1),n.Ub("ngIf",0==e.done)("ngIfElse",t)}}function P(t,e){if(1&t&&(n.Kb(0,"div"),n.cc(1,C,9,2,"div",9),n.Jb()),2&t){const t=n.Tb().$implicit,e=n.Tb().$implicit;n.xb(1),n.Ub("ngIf",e.id==t.id)}}function S(t,e){if(1&t&&(n.Kb(0,"div"),n.cc(1,P,2,1,"div",8),n.Jb()),2&t){const t=e.$implicit;n.xb(1),n.Ub("ngForOf",t.todos)}}function U(t,e){if(1&t&&(n.Kb(0,"div",6),n.Kb(1,"div",7),n.cc(2,S,2,1,"div",8),n.Jb(),n.Jb()),2&t){const t=n.Tb();n.xb(2),n.Ub("ngForOf",t.todos)}}function $(t,e){if(1&t){const t=n.Lb();n.Kb(0,"li",17),n.Kb(1,"input",18),n.Rb("click",(function(){n.Zb(t);const o=e.$implicit;return n.Tb().filterBtn(o.id)})),n.Jb(),n.Kb(2,"label",19),n.ec(3),n.Jb(),n.Jb()}if(2&t){const t=e.$implicit;n.xb(1),n.Vb("name",t.id),n.xb(1),n.Vb("for",t.id),n.xb(1),n.hc("",t.id,":",t.name,"")}}const L=[{path:"",component:x},{path:"todo",component:x},{path:"beer",component:(()=>{class t{constructor(t){this.http=t}ngOnInit(){this.http.get("https://api.punkapi.com/v2/beers").subscribe(t=>{this.response=t,console.log(this.response)})}}return t.\u0275fac=function(e){return new(e||t)(n.Hb(b.a))},t.\u0275cmp=n.Bb({type:t,selectors:[["app-beer"]],decls:3,vars:1,consts:[[1,"container"],[1,"wrapper"],["class","card","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"card",2,"width","18rem"],["alt","beer-img",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"routerLink"]],template:function(t,e){1&t&&(n.Kb(0,"div",0),n.Kb(1,"div",1),n.cc(2,v,9,4,"div",2),n.Jb(),n.Jb()),2&t&&(n.xb(2),n.Ub("ngForOf",e.response))},directives:[p.h,s.c],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.card-img-top[_ngcontent-%COMP%]{width:286px;height:286px}.card-body[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column}.card[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})()},{path:"beer/:id",component:(()=>{class t{constructor(t,e){this.http=t,this.activateRoute=e,this.id=this.activateRoute.snapshot.params.id,this.todos=JSON.parse(localStorage.getItem("beer_"+this.id))||[]}refreshBeers(){this.beers=this.beers.filter(t=>t.id!=this.id),this.beers.push({id:this.id,todos:this.todos,filter:!1}),localStorage.setItem("beers",JSON.stringify(this.beers))}ngOnInit(){this.http.get("https://api.punkapi.com/v2/beers/"+this.id).subscribe(t=>{this.response=t,console.log(this.response)}),console.log(this.beers),this.beers=JSON.parse(localStorage.getItem("beers"))||[],this.refreshBeers()}addTodo(){this.valueInput&&this.todos.push({info:this.valueInput,done:!1}),localStorage.setItem("beer_"+this.id,JSON.stringify(this.todos)),this.valueInput="",this.refreshBeers()}doneTodo(t){t.done=!t.done,localStorage.setItem("beer_"+this.id,JSON.stringify(this.todos)),this.refreshBeers()}removeTodo(t){this.todos=this.todos.filter(e=>e!=t),localStorage.setItem("beer_"+this.id,JSON.stringify(this.todos)),this.refreshBeers()}}return t.\u0275fac=function(e){return new(e||t)(n.Hb(b.a),n.Hb(s.a))},t.\u0275cmp=n.Bb({type:t,selectors:[["app-beer-to-do"]],decls:15,vars:4,consts:[[1,"container"],[1,"wrapper__card"],["class","card","style","width: 18rem;",4,"ngFor","ngForOf"],[1,"wrapper__todo"],["action","submit",1,"form-inline",3,"submit"],[1,"form-group","mx-sm-3","mb-2"],["type","text","placeholder","Input ToDo!","name","valueInput",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-success","mb-2"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"card",2,"width","18rem"],["alt","beer-img",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"btn","btn-primary",3,"routerLink"],[1,"btn","btn-primary","btn-floor",3,"routerLink"],[4,"ngFor","ngForOf"],["todoDone",""],[1,"btn","btn-success","btnDone",3,"click"],[1,"btn","btn-danger",3,"click"],[1,"todoDone"],[1,"noTasks"]],template:function(t,e){if(1&t&&(n.Kb(0,"div",0),n.Kb(1,"div",1),n.cc(2,O,11,7,"div",2),n.Jb(),n.Kb(3,"div",3),n.Kb(4,"h1"),n.ec(5,"Add beer task!"),n.Jb(),n.Kb(6,"form",4),n.Rb("submit",(function(){return e.addTodo()})),n.Kb(7,"div",5),n.Kb(8,"input",6),n.Rb("ngModelChange",(function(t){return e.valueInput=t})),n.Jb(),n.Jb(),n.Kb(9,"button",7),n.ec(10,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),n.Jb(),n.Jb(),n.Ib(11,"br"),n.cc(12,k,3,1,"div",8),n.cc(13,_,2,0,"ng-template",null,9,n.dc),n.Jb(),n.Jb()),2&t){const t=n.Yb(14);n.xb(2),n.Ub("ngForOf",e.response),n.xb(6),n.Ub("ngModel",e.valueInput),n.xb(4),n.Ub("ngIf",0!=e.todos.length)("ngIfElse",t)}},directives:[p.h,r.h,r.d,r.e,r.a,r.c,r.f,p.i,s.c],styles:["h1[_ngcontent-%COMP%]{margin-left:16px}li[_ngcontent-%COMP%]{margin-bottom:5px;list-style-type:decimal}.container[_ngcontent-%COMP%]{margin-bottom:10px;display:flex;justify-content:space-around}.wrapper__todo[_ngcontent-%COMP%]{margin-left:50px;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;padding:5px 15px 5px 5px;margin-bottom:20px}.btnDone[_ngcontent-%COMP%], .todoDone[_ngcontent-%COMP%]{margin-right:5px}.todoDone[_ngcontent-%COMP%]{text-decoration:line-through}.noTasks[_ngcontent-%COMP%]{margin-left:16px}.wrapper__card[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.card-img-top[_ngcontent-%COMP%]{width:286px;height:286px}.card-body[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column}.card[_ngcontent-%COMP%]{margin-bottom:20px}.btn-floor[_ngcontent-%COMP%]{margin-top:2px}"]}),t})()},{path:"beer-todo-list",component:(()=>{class t{constructor(t){this.http=t,this.todos=[]}refreshBeers(t,e){this.beers=this.beers.filter(e=>e.id!=t),this.beers.push({id:t,todos:e,filter:!1}),localStorage.setItem("beers",JSON.stringify(this.beers))}ngOnInit(){this.http.get("https://api.punkapi.com/v2/beers").subscribe(t=>{this.response=t}),this.todos=JSON.parse(localStorage.getItem("beers"))||[],this.beers=JSON.parse(localStorage.getItem("beers"))||[]}doneTodo(t,e,o){t.done=!t.done,localStorage.setItem("beer_"+o,JSON.stringify(e)),this.refreshBeers(o,e),console.log(e),console.log(this.todos)}removeTodo(t,e,o){this.todos=this.todos.filter(t=>t.id!=o),e=e.filter(e=>e!=t),this.intermediateTodos={id:o,todos:e,filter:!1},this.todos.push(this.intermediateTodos),localStorage.setItem("beer_"+o,JSON.stringify(e)),this.refreshBeers(o,e)}filterBtn(t){this.todos.forEach(e=>{if(e.id==t)return e.filter=!e.filter}),this.todos=this.todos.filter(t=>t.filter),0==this.todos.length&&(this.todos=JSON.parse(localStorage.getItem("beers")))}}return t.\u0275fac=function(e){return new(e||t)(n.Hb(b.a))},t.\u0275cmp=n.Bb({type:t,selectors:[["app-todo-for-beer"]],decls:7,vars:2,consts:[[1,"container"],["class","wrapper__todo",4,"ngFor","ngForOf"],[1,"dropdown","show","menu-beers"],["href","#","role","button","id","dropdownMenuLink","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","dropdownMenuLink",1,"dropdown-menu"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"wrapper__todo"],[1,"todo-todos"],[4,"ngFor","ngForOf"],["class","span-todo-info",4,"ngIf"],[1,"span-todo-info"],[3,"routerLink",4,"ngIf","ngIfElse"],["todoDone",""],[1,"btn","btn-success","btnDone",3,"click"],[1,"btn","btn-danger",3,"click"],[3,"routerLink"],[1,"todoDone",3,"routerLink"],[1,"dropdown-item"],["type","checkbox",3,"name","click"],[3,"for"]],template:function(t,e){1&t&&(n.Kb(0,"div",0),n.cc(1,U,3,1,"div",1),n.Jb(),n.Kb(2,"div",2),n.Kb(3,"a",3),n.ec(4," Beers list "),n.Jb(),n.Kb(5,"ul",4),n.cc(6,$,4,4,"li",5),n.Jb(),n.Jb()),2&t&&(n.xb(1),n.Ub("ngForOf",e.response),n.xb(5),n.Ub("ngForOf",e.response))},directives:[p.h,p.i,s.b],styles:["div[_ngcontent-%COMP%]{outline:none}.dropdown-menu[_ngcontent-%COMP%]{overflow-y:auto;max-height:300px;transform:translate3d(-210px,36px,0)!important}.menu-beers[_ngcontent-%COMP%]{position:fixed;right:0;top:50px;outline:none}.span-todo-info[_ngcontent-%COMP%]{margin-bottom:4px}.btnDone[_ngcontent-%COMP%], .todoDone[_ngcontent-%COMP%]{margin-right:5px}.todoDone[_ngcontent-%COMP%]{text-decoration:line-through}"]}),t})()}];let B=(()=>{class t{}return t.\u0275mod=n.Fb({type:t,bootstrap:[l]}),t.\u0275inj=n.Eb({factory:function(e){return new(e||t)},providers:[],imports:[[i.a,r.b,s.d.forRoot(L),b.b,r.g]]}),t})();Object(n.R)(),i.b().bootstrapModule(B).catch(t=>console.error(t))},zn8P:function(t,e){function o(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id="zn8P"}},[[0,0,4]]]);
//# sourceMappingURL=main.b82b41594dac20a84f96.js.map