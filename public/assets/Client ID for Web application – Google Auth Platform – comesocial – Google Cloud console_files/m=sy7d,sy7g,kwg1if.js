"use strict";this.default_r_qwpltlpci=this.default_r_qwpltlpci||{};(function(_){var window=this;
try{
var POc=function(a,b){return a.length!==b.length?!1:a.every((c,d)=>c.path===b[d].path)},QOc=function(a){const b=a.children.primary;return b?[...a.segments,...QOc(b)]:a.segments};_.ROc=function(a){(a=a.doc.getElementById("main"))&&a!==document.activeElement&&_.e5b(a)};
_.SOc=class{constructor(a,b,c){this.ha=a;this.doc=b;this.router=c;a=c.events.pipe(_.Qe(d=>d instanceof _.En||d instanceof _.Qh),_.Xf(null),_.Of(),_.Qe(([d,e])=>!(d instanceof _.En&&e instanceof _.En)),_.z(([,d])=>d));b=_.Ke(b,"focus",{capture:!0}).pipe(_.bg(a),_.Qe(([,d])=>d instanceof _.En),_.z(([,d])=>d.id),_.Xf(-1));a.pipe(_.z(d=>{var e=this.router.url,f;const g=(f=this.ha.getContext("primary"))==null?void 0:f.route;f=g?_.Rn(this.router,["."],{jp:g}):null;return{event:d,url:e,u4c:f,WIb:this.aa()}}),
_.Of(),_.Qe(([d])=>d.event instanceof _.En)).pipe(_.bg(b),_.Qe(([[d,e],f])=>{(f=d.event.id===f&&document.activeElement!==document.body||!this.da(d,e))||(d=d.u4c,e=e.u4c,d&&e?(d=QOc(d.root),e=QOc(e.root),e=!POc(d,e)):e=!1,f=!e);return f?!1:!0})).subscribe(()=>{_.ROc(this)},d=>{this.uE(d)})}uE(a){const b=a instanceof Error?a.message:`${a}`;a={stack:a instanceof Error?a.stack||"":""};_.li().logClientError({message:b,metadata:a,eventType:"navigationFocus",eventName:"navigationFocusError",errorExperience:6})}};
_.yl([_.zTa(1,(0,_.A0a)(_.Ph)),_.ATa([_.Fn,Document,_.Tn])],_.SOc);
}catch(e){_._DumpException(e)}
try{
_.Wh("kwg1if");
_.TSa=class extends _.SOc{constructor(){const a=_.n(_.Fn),b=_.n(_.Ph),c=_.n(_.Tn);super(a,b,c)}da(a,b){return!_.Zh(a.url).getPath().endsWith("rif-empty-page")&&!_.Zh(b.url).getPath().endsWith("rif-empty-page")}aa(){return null}};_.TSa.ea=function(a){return new (a||_.TSa)};_.TSa.oa=_.l({token:_.TSa,ma:_.TSa.ea,va:"root"});
_.Xh();
}catch(e){_._DumpException(e)}
}).call(this,this.default_r_qwpltlpci);
// Google Inc.
