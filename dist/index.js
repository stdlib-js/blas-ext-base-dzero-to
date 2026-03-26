"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(g,n){
function z(e,r,i,y){var t,a;if(e<=0)return r;for(t=y,a=0;a<e;a++)r[t]=a,t+=i;return r}n.exports=z
});var q=o(function(h,v){
var T=require('@stdlib/strided-base-stride2offset/dist'),j=u();function m(e,r,i){return j(e,r,i,T(e,i))}v.exports=m
});var c=o(function(k,f){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),l=u();x(d,"ndarray",l);f.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=c(),s,p=_(R(__dirname,"./native.js"));E(p)?s=O:s=p;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
