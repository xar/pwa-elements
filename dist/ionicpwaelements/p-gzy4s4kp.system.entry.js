System.register(["./p-90170b2f.system.js"],function(t){"use strict";var e,n,o,r;return{setters:[function(t){e=t.r;n=t.h;o=t.g;r=t.H}],execute:function(){var i=t("pwa_toast",function(){function t(t){e(this,t);this.duration=2e3;this.closing=null}t.prototype.hostData=function(){var t={out:!!this.closing};if(this.closing!==null){t["in"]=!this.closing}return{class:t}};t.prototype.componentDidLoad=function(){var t=this;setTimeout(function(){t.closing=false});setTimeout(function(){t.close()},this.duration)};t.prototype.close=function(){var t=this;this.closing=true;setTimeout(function(){t.el.parentNode.removeChild(t.el)},1e3)};t.prototype.__stencil_render=function(){return n("div",{class:"wrapper"},n("div",{class:"toast"},this.message))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});t.prototype.render=function(){return n(r,this.hostData(),this.__stencil_render())};Object.defineProperty(t,"style",{get:function(){return":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}"},enumerable:true,configurable:true});return t}())}}});