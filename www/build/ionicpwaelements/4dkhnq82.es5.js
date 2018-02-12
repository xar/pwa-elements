/*! Built with http://stenciljs.com */
ionicpwaelements.loadBundle("4dkhnq82",["exports"],function(t){window.ionicpwaelements.h,window.ionicpwaelements.Context;var i,e,s,n,r=(i=document.documentElement,e=["webkitTransform","-webkit-transform","webkit-transform","transform"].find(function(t){return void 0!==i.style[t]})||"transform",s=["webkitTransition","transition"].find(function(t){return void 0!==i.style[t]})||"transition",{transitionDurationProp:(n=s.indexOf("webkit")>-1?"-webkit-":"")+"transition-duration",transitionTimingFnProp:n+"transition-timing-function",transformProp:e,transitionProp:s}),o={translateX:1,translateY:1,translateZ:1,scale:1,scaleX:1,scaleY:1,scaleZ:1,rotate:1,rotateX:1,rotateY:1,rotateZ:1,skewX:1,skewY:1,perspective:1},a=/(^-?\d*\.?\d*)(.*)/;var h=function(){function t(){this._duration=null,this._easingName=null,this._elements=null,this._destroyed=!1,this.hasChildren=!1,this.isPlaying=!1,this.hasCompleted=!1}return t.prototype.addElement=function(t){if(t)if(t.length)for(var i=0;i<t.length;i++)this._addEl(t[i]);else this._addEl(t);return this},t.prototype._addEl=function(t){1===t.nodeType&&(this._elementTotal=(this._elements=this._elements||[]).push(t))},t.prototype.add=function(t){return t.parent=this,this.hasChildren=!0,this._childAnimationTotal=(this._childAnimations=this._childAnimations||[]).push(t),this},t.prototype.getDuration=function(t){return t&&null!==t.duration&&void 0!==t.duration?t.duration:null!==this._duration?this._duration:this.parent?this.parent.getDuration():0},t.prototype.isRoot=function(){return!this.parent},t.prototype.duration=function(t){return this._duration=t,this},t.prototype.getEasing=function(){return this._isReverse&&this._reversedEasingName?this._reversedEasingName:null!==this._easingName?this._easingName:this.parent&&this.parent.getEasing()||null},t.prototype.easing=function(t){return this._easingName=t,this},t.prototype.easingReverse=function(t){return this._reversedEasingName=t,this},t.prototype.from=function(t,i){return this._addProp("from",t,i),this},t.prototype.to=function(t,i,e){var s=this._addProp("to",t,i);return e&&this.afterClearStyles([s.trans?r.transformProp:t]),this},t.prototype.fromTo=function(t,i,e,s){return this.from(t,i).to(t,e,s)},t.prototype._getProp=function(t){if(this._fxProperties)return this._fxProperties.find(function(i){return i.effectName===t});this._fxProperties=[]},t.prototype._addProp=function(t,i,e){var s=this._getProp(i);if(!s){var n=1===o[i];s={effectName:i,trans:n,wc:n?r.transformProp:i},this._fxProperties.push(s)}var h={val:e,num:null,effectUnit:""};if(s[t]=h,"string"==typeof e&&e.indexOf(" ")<0){var l=e.match(a),_=parseFloat(l[1]);isNaN(_)||(h.num=_),h.effectUnit=l[0]!==l[2]?l[2]:""}else"number"==typeof e&&(h.num=e);return s},t.prototype.beforeAddClass=function(t){return(this._beforeAddClasses=this._beforeAddClasses||[]).push(t),this},t.prototype.beforeRemoveClass=function(t){return(this._beforeRemoveClasses=this._beforeRemoveClasses||[]).push(t),this},t.prototype.beforeStyles=function(t){return this._beforeStyles=t,this},t.prototype.beforeClearStyles=function(t){this._beforeStyles=this._beforeStyles||{};for(var i=0;i<t.length;i++)this._beforeStyles[t[i]]="";return this},t.prototype.beforeAddRead=function(t){return(this._readCallbacks=this._readCallbacks||[]).push(t),this},t.prototype.beforeAddWrite=function(t){return(this._writeCallbacks=this._writeCallbacks||[]).push(t),this},t.prototype.afterAddClass=function(t){return(this._afterAddClasses=this._afterAddClasses||[]).push(t),this},t.prototype.afterRemoveClass=function(t){return(this._afterRemoveClasses=this._afterRemoveClasses||[]).push(t),this},t.prototype.afterStyles=function(t){return this._afterStyles=t,this},t.prototype.afterClearStyles=function(t){this._afterStyles=this._afterStyles||{};for(var i=0;i<t.length;i++)this._afterStyles[t[i]]="";return this},t.prototype.play=function(t){var i=this;i._destroyed||(i._isAsync=i._hasDuration(t),i._clearAsync(),i._playInit(t),window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){i._playDomInspect(t)})}))},t.prototype.syncPlay=function(){if(!this._destroyed){var t={duration:0};this._isAsync=!1,this._clearAsync(),this._playInit(t),this._playDomInspect(t)}},t.prototype._playInit=function(t){this._hasTweenEffect=!1,this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=this.getDuration(t)>32;for(var i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)i[e]._playInit(t);this._hasDur&&(this._progress(0),this._willChange(!0))},t.prototype._playDomInspect=function(t){var i=this;i._beforeAnimation();var e=i.getDuration(t);i._isAsync&&i._asyncEnd(e,!0),i._playProgress(t),i._isAsync&&!this._destroyed&&window.requestAnimationFrame(function(){i._playToStep(1)})},t.prototype._playProgress=function(t){for(var i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)i[e]._playProgress(t);this._hasDur?this._setTrans(this.getDuration(t),!1):(this._progress(1),this._setAfterStyles(),this._didFinish(!0))},t.prototype._playToStep=function(t){if(!this._destroyed){for(var i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)i[e]._playToStep(t);this._hasDur&&this._progress(t)}},t.prototype._asyncEnd=function(t,i){var e=this;e._unregisterTrnsEnd=function(t,i){var e,s,n={passive:!0};function r(){s&&s(),e&&e()}function o(e){t===e.target&&(r(),i(e))}return t&&(t.addEventListener("webkitTransitionEnd",o,n),s=function(){t.removeEventListener("webkitTransitionEnd",o,n)},t.addEventListener("transitionend",o,n),e=function(){t.removeEventListener("transitionend",o,n)}),r}(e._transEl(),function(){e._clearAsync(),e._playEnd(),e._didFinishAll(i,!0,!1)}),e._timerId=setTimeout(function(){console.debug("Animation onTransitionFallback, CSS onTransitionEnd did not fire!"),e._timerId=void 0,e._clearAsync(),e._playEnd(i?1:0),e._didFinishAll(i,!0,!1)},t+400)},t.prototype._playEnd=function(t){for(var i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)i[e]._playEnd(t);this._hasDur&&(null!==t&&void 0!==t&&(this._setTrans(0,!0),this._progress(t)),this._setAfterStyles(),this._willChange(!1))},t.prototype._hasDuration=function(t){if(this.getDuration(t)>32)return!0;for(var i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)if(i[e]._hasDuration(t))return!0;return!1},t.prototype._hasDomReads=function(){if(this._readCallbacks&&this._readCallbacks.length)return!0;for(var t=this._childAnimations,i=0;i<this._childAnimationTotal;i++)if(t[i]._hasDomReads())return!0;return!1},t.prototype.stop=function(t){void 0===t&&(t=1),this._clearAsync(),this._hasDur=!0,this._playEnd(t)},t.prototype._clearAsync=function(){this._unregisterTrnsEnd&&this._unregisterTrnsEnd(),this._timerId&&clearTimeout(this._timerId),this._timerId=this._unregisterTrnsEnd=void 0},t.prototype._progress=function(t){var i,e=this._elements,s=this._fxProperties,n=this._elementTotal;if(e&&s&&n&&!this._destroyed){this._isReverse&&(t=1-t);var o,a=0,h=0,l="";for(a=0;a<s.length;a++)if((o=s[a]).from&&o.to){var _=o.from.num,f=o.to.num,d=_!==f;if(d&&(this._hasTweenEffect=!0),0===t)i=o.from.val;else if(1===t)i=o.to.val;else if(d){var p=(f-_)*t+_,c=o.to.effectUnit;"px"===c&&(p=Math.round(p)),i=p+c}if(null!==i){var u=o.effectName;if(o.trans)l+=u+"("+i+") ";else for(h=0;h<n;h++)e[h].style[u]=i}}if(l.length)for((!this._isReverse&&1!==t||this._isReverse&&0!==t)&&(l+="translateZ(0px)"),a=0;a<e.length;a++)e[a].style[r.transformProp]=l}},t.prototype._setTrans=function(t,i){var e=this._elements,s=this._elementTotal;if(e&&this._fxProperties&&0!==s)for(var n,o=i?"linear":this.getEasing(),a=t+"ms",h=r.transitionProp,l=r.transitionDurationProp,_=r.transitionTimingFnProp,f=0;f<s;f++)n=e[f].style,t>0?(n[h]="",n[l]=a,o&&(n[_]=o)):n[h]="none"},t.prototype._beforeAnimation=function(){this._fireBeforeReadFunc(),this._fireBeforeWriteFunc(),this._setBeforeStyles()},t.prototype._setBeforeStyles=function(){for(var t,i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)i[e]._setBeforeStyles();var s=this._elements,n=this._elementTotal;if(s&&0!==n&&!this._isReverse){var r,o=this._beforeAddClasses,a=this._beforeRemoveClasses;for(e=0;e<n;e++){var h=s[e],l=h.classList;if(o)for(t=0;t<o.length;t++)l.add(o[t]);if(a)for(t=0;t<a.length;t++)l.remove(a[t]);if(this._beforeStyles)for(r in this._beforeStyles)h.style[r]=this._beforeStyles[r]}}},t.prototype._fireBeforeReadFunc=function(){var t=this._childAnimations,i=0;for(i=0;i<this._childAnimationTotal;i++)t[i]._fireBeforeReadFunc();var e=this._readCallbacks;if(e)for(i=0;i<e.length;i++)e[i]()},t.prototype._fireBeforeWriteFunc=function(){var t=this._childAnimations,i=0;for(i=0;i<this._childAnimationTotal;i++)t[i]._fireBeforeWriteFunc();var e=this._writeCallbacks;if(this._writeCallbacks)for(i=0;i<e.length;i++)e[i]()},t.prototype._setAfterStyles=function(){var t,i,e,s,n,o=this._elements;if(o)for(t=0;t<this._elementTotal;t++)if(s=(e=o[t]).classList,e.style[r.transitionDurationProp]=e.style[r.transitionTimingFnProp]="",this._isReverse){if(this._beforeAddClasses)for(i=0;i<this._beforeAddClasses.length;i++)s.remove(this._beforeAddClasses[i]);if(this._beforeRemoveClasses)for(i=0;i<this._beforeRemoveClasses.length;i++)s.add(this._beforeRemoveClasses[i]);if(this._beforeStyles)for(n in this._beforeStyles)e.style[n]=""}else{if(this._afterAddClasses)for(i=0;i<this._afterAddClasses.length;i++)s.add(this._afterAddClasses[i]);if(this._afterRemoveClasses)for(i=0;i<this._afterRemoveClasses.length;i++)s.remove(this._afterRemoveClasses[i]);if(this._afterStyles)for(n in this._afterStyles)e.style[n]=this._afterStyles[n]}},t.prototype._willChange=function(t){var i,e,s=0,n=this._fxProperties;if(t&&n){for(i=[],s=0;s<n.length;s++){var r=n[s].wc;"webkitTransform"===r?i.push("transform","-webkit-transform"):i.push(r)}e=i.join(",")}else e="";for(s=0;s<this._elementTotal;s++)this._elements[s].style.willChange=e},t.prototype.progressStart=function(){this._clearAsync(),this._beforeAnimation(),this._progressStart()},t.prototype._progressStart=function(){for(var t=this._childAnimations,i=0;i<this._childAnimationTotal;i++)t[i]._progressStart();this._setTrans(0,!0),this._willChange(!0)},t.prototype.progressStep=function(t){t=Math.min(1,Math.max(0,t));for(var i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)i[e].progressStep(t);this._progress(t)},t.prototype.progressEnd=function(t,i,e){var s=this;this._isReverse&&(i=-1*i+1);var n=t?1:0,r=Math.abs(i-n);void 0===e&&(e=-1),r<.05?e=0:e<0&&(e=this._duration),this._isAsync=e>30,this._progressEnd(t,n,e,this._isAsync),this._isAsync&&(this._asyncEnd(e,t),this._destroyed||window.requestAnimationFrame(function(){s._playToStep(n)}))},t.prototype._progressEnd=function(t,i,e,s){for(var n=this._childAnimations,r=0;r<this._childAnimationTotal;r++)n[r]._progressEnd(t,i,e,s);s?(this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=!0,this._willChange(!0),this._setTrans(e,!1)):(this._progress(i),this._willChange(!1),this._setAfterStyles(),this._didFinish(t))},t.prototype.onFinish=function(t,i){return i&&i.clearExistingCallacks&&(this._onFinishCallbacks=this._onFinishOneTimeCallbacks=void 0),i&&i.oneTimeCallback?(this._onFinishOneTimeCallbacks=this._onFinishOneTimeCallbacks||[],this._onFinishOneTimeCallbacks.push(t)):(this._onFinishCallbacks=this._onFinishCallbacks||[],this._onFinishCallbacks.push(t)),this},t.prototype._didFinishAll=function(t,i,e){for(var s=this._childAnimations,n=0;n<this._childAnimationTotal;n++)s[n]._didFinishAll(t,i,e);(i&&this._isAsync||e&&!this._isAsync)&&this._didFinish(t)},t.prototype._didFinish=function(t){this.isPlaying=!1,this.hasCompleted=t;var i=0;if(this._onFinishCallbacks)for(i=0;i<this._onFinishCallbacks.length;i++)this._onFinishCallbacks[i](this);if(this._onFinishOneTimeCallbacks){for(i=0;i<this._onFinishOneTimeCallbacks.length;i++)this._onFinishOneTimeCallbacks[i](this);this._onFinishOneTimeCallbacks.length=0}},t.prototype.reverse=function(t){void 0===t&&(t=!0);for(var i=this._childAnimations,e=0;e<this._childAnimationTotal;e++)i[e].reverse(t);return this._isReverse=t,this},t.prototype.destroy=function(){this._destroyed=!0;for(var t=this._childAnimations,i=0;i<this._childAnimationTotal;i++)t[i].destroy();this._clearAsync(),this._elements&&(this._elements.length=this._elementTotal=0),this._readCallbacks&&(this._readCallbacks.length=0),this._writeCallbacks&&(this._writeCallbacks.length=0),this.parent=void 0,this._childAnimations&&(this._childAnimations.length=this._childAnimationTotal=0),this._onFinishCallbacks&&(this._onFinishCallbacks.length=0),this._onFinishOneTimeCallbacks&&(this._onFinishOneTimeCallbacks.length=0)},t.prototype._transEl=function(){for(var t=0;t<this._childAnimationTotal;t++){var i=this._childAnimations[t]._transEl();if(i)return i}return this._hasTweenEffect&&this._hasDur&&this._elements&&this._elementTotal>0?this._elements[0]:null},t.prototype.create=function(){return new t},t}(),l=function(){function t(){}return t.prototype.create=function(t,i,e){return t?t(h,i,e):Promise.resolve(new h)},Object.defineProperty(t,"is",{get:function(){return"ion-animation-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0}}},enumerable:!0,configurable:!0}),t}();t.IonAnimationController=l,Object.defineProperty(t,"__esModule",{value:!0})});