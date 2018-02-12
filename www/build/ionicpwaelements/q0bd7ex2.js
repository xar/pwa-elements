/*! Built with http://stenciljs.com */
const{h,Context}=window.ionicpwaelements;function isDef(e){return void 0!==e&&null!==e}function isString(e){return"string"==typeof e}function playAnimationAsync(e){return new Promise(t=>{e.onFinish(e=>{t(e)}),e.play()})}function domControllerAsync(e,t){return new Promise(o=>{e(()=>{if(!t)return o();Promise.resolve(t()).then((...e)=>{o(e)})})})}function createThemedClasses(e,t,o){return o.split(" ").reduce((o,n)=>(o[n]=!0,e&&(o[`${n}-${e}`]=!0,t&&(o[`${n}-${t}`]=!0,o[`${n}-${e}-${t}`]=!0)),o),{})}function getClassMap(e){const t={};return e&&e.split(" ").filter(e=>""!==e.trim()).forEach(e=>t[e]=!0),t}function iosEnterAnimation(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".action-sheet-backdrop"));const i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),n.fromTo("opacity",.01,.4),i.fromTo("translateY","100%","0%");const s=o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(i);return Promise.resolve(s)}function iosLeaveAnimation(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".action-sheet-backdrop"));const i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),n.fromTo("opacity",.4,0),i.fromTo("translateY","0%","100%");const s=o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(n).add(i);return Promise.resolve(s)}function mdEnterAnimation(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".action-sheet-backdrop"));const i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),n.fromTo("opacity",.01,.26),i.fromTo("translateY","100%","0%");const s=o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(i);return Promise.resolve(s)}function mdLeaveAnimation(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".action-sheet-backdrop"));const i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),n.fromTo("opacity",.26,0),i.fromTo("translateY","0%","100%");const s=o.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(n).add(i);return Promise.resolve(s)}class ActionSheet{constructor(){this.animation=null,this.enableBackdropDismiss=!0,this.translucent=!1,this.willAnimate=!0}present(){this.animation&&(this.animation.destroy(),this.animation=null),this.ionActionSheetWillPresent.emit(),this.el.style.zIndex=`${2e4+this.actionSheetId}`;const e=this.enterAnimation||this.config.get("actionSheetEnter","ios"===this.mode?iosEnterAnimation:mdEnterAnimation);return this.animationCtrl.create(e,this.el).then(e=>(this.animation=e,(!this.willAnimate||isDef(this.config.get("willAnimate"))&&!1===this.config.get("willAnimate"))&&(this.animation=e.duration(0)),playAnimationAsync(e))).then(e=>{e.destroy(),this.ionActionSheetDidPresent.emit()})}dismiss(e,t){this.animation&&(this.animation.destroy(),this.animation=null),this.ionActionSheetWillDismiss.emit({data:e,role:t});const o=this.leaveAnimation||this.config.get("actionSheetLeave","ios"===this.mode?iosLeaveAnimation:mdLeaveAnimation);return this.animationCtrl.create(o,this.el).then(e=>(this.animation=e,(!this.willAnimate||isDef(this.config.get("willAnimate"))&&!1===this.config.get("willAnimate"))&&(this.animation=e.duration(0)),playAnimationAsync(e))).then(o=>{o.destroy(),this.ionActionSheetDidDismiss.emit({data:e,role:t})}).then(()=>domControllerAsync(this.dom.write,()=>{this.el.parentNode.removeChild(this.el)}))}componentDidLoad(){this.ionActionSheetDidLoad.emit()}componentDidUnload(){this.ionActionSheetDidUnload.emit()}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}backdropClick(){this.enableBackdropDismiss&&this.dismiss()}buttonClick(e){let t=!0;e.handler&&!1===e.handler()&&(t=!1),t&&this.dismiss()}hostData(){const e=this.translucent?createThemedClasses(this.mode,this.color,"action-sheet-translucent"):{};return{class:Object.assign({},e,getClassMap(this.cssClass))}}render(){const e=this.buttons.map(e=>("string"==typeof e&&(e={text:e}),e.cssClass||(e.cssClass=""),e)),t=e.find(e=>"cancel"===e.role),o=e.filter(e=>"cancel"!==e.role);return[h("ion-backdrop",{onClick:this.backdropClick.bind(this),class:"action-sheet-backdrop"}),h("div",{class:"action-sheet-wrapper",role:"dialog"},h("div",{class:"action-sheet-container"},h("div",{class:"action-sheet-group"},this.title?h("div",{class:"action-sheet-title"},this.title,this.subTitle?h("div",{class:"action-sheet-sub-title"},this.subTitle):null):null,o.map(e=>h("button",{class:buttonClass(e),onClick:()=>this.buttonClick(e)},h("span",{class:"button-inner"},e.icon?h("ion-icon",{name:e.icon,class:"action-sheet-icon"}):null,e.text)))),t?h("div",{class:"action-sheet-group action-sheet-group-cancel"},h("button",{class:buttonClass(t),onClick:()=>this.buttonClick(t)},h("span",{class:"button-inner"},t.icon?h("ion-icon",{name:t.icon,class:"action-sheet-icon"}):null,t.text))):null))]}static get is(){return"ion-action-sheet"}static get host(){return{theme:"action-sheet"}}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},dom:{context:"dom"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},leaveAnimation:{type:"Any",attr:"leave-animation"},present:{method:!0},subTitle:{type:String,attr:"sub-title"},title:{type:String,attr:"title"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionActionSheetDidLoad",method:"ionActionSheetDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidPresent",method:"ionActionSheetDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"ionActionSheetWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"ionActionSheetWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"ionActionSheetDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidUnload",method:"ionActionSheetDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-action-sheet{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%}.action-sheet-wrapper{left:0;right:0;top:0;bottom:0;margin:auto;transform:translate3d(0,100%,0);position:absolute;z-index:10;display:block;width:100%;max-width:500px;pointer-events:none}.action-sheet-button{width:100%;border:0}.action-sheet-button:active,.action-sheet-button:focus{outline:0}.action-sheet-container{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group{overflow:scroll;flex-shrink:2;pointer-events:all}.action-sheet-group-cancel{overflow:hidden;flex-shrink:0}.action-sheet-md{font-family:Roboto,\"Helvetica Neue\",sans-serif}.action-sheet-md .action-sheet-title{padding:11px 16px 17px;text-align:left;text-align:start;font-size:16px;color:var(--ion-text-md-color-step-200,var(--ion-text-color-step-200,#666))}.action-sheet-md .action-sheet-sub-title{padding:16px 0 0;font-size:14px}.action-sheet-md .action-sheet-group{background:var(--ion-background-md-color-step-100,var(--ion-background-color-step-100,#f2f2f2))}.action-sheet-md .action-sheet-group:first-child{padding-top:8px}.action-sheet-md .action-sheet-group:last-child{padding-bottom:8px}.action-sheet-md .action-sheet-button{padding:0 16px;text-align:left;text-align:start;position:relative;overflow:hidden;min-height:48px;font-size:16px;color:var(--ion-text-md-color-step-100,var(--ion-text-color-step-100,#222));background:0 0}.action-sheet-md .action-sheet-button.activated{background:var(--ion-background-md-color-step-100,var(--ion-background-color-step-100,#f2f2f2))}.action-sheet-md .action-sheet-icon{margin:0 32px 0 0;font-size:24px}.action-sheet-md .action-sheet-group .button-inner{justify-content:flex-start}.action-sheet-md .action-sheet-selected{font-weight:700}"}static get styleMode(){return"md"}}function buttonClass(e){const t=Object.assign({"action-sheet-button":!0},getClassMap(e.cssClass));return e.role&&(t[`action-sheet-${e.role}`]=!0),t}let ids=0;const actionSheets=new Map;class ActionSheetController{create(e){const t=document.createElement("ion-action-sheet");return t.actionSheetId=ids++,Object.assign(t,e),(document.querySelector("ion-app")||document.body).appendChild(t),t.componentOnReady()}dismiss(e,t,o=-1){o=o>=0?o:getHighestId();const n=actionSheets.get(o);return n?n.dismiss(e,t):Promise.reject("action-sheet does not exist")}getTop(){return actionSheets.get(getHighestId())}actionSheetWillPresent(e){actionSheets.set(e.target.actionSheetId,e.target)}actionSheetWillDismiss(e){actionSheets.delete(e.target.actionSheetId)}escapeKeyUp(){removeLastActionSheet()}static get is(){return"ion-action-sheet-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}function getHighestId(){let e=-1;return actionSheets.forEach((t,o)=>{o>e&&(e=o)}),e}function removeLastActionSheet(){const e=actionSheets.get(getHighestId());return e?e.dismiss():Promise.resolve()}class Backdrop{static get is(){return"ion-backdrop"}static get host(){return{theme:"backdrop"}}static get properties(){return{mode:{type:"Any",attr:"mode"}}}static get style(){return"ion-backdrop{left:0;top:0;position:absolute;z-index:2;display:block;width:100%;height:100%;opacity:.01;transform:translateZ(0);contain:strict}ion-backdrop.backdrop-no-tappable{cursor:auto}.backdrop-md{background-color:var(--ion-backdrop-md-color,var(--ion-backdrop-color,#000))}"}static get styleMode(){return"md"}}class Icon{constructor(){this.ariaLabel="",this.ios="",this.md="",this.name="",this.svgContent=null}get iconName(){let e=this.name.toLowerCase();const t=this.mode||"md";this.ios&&"ios"===t?e=this.ios.toLowerCase():this.md&&"md"===t?e=this.md.toLowerCase():e&&!/^md-|^ios-|^logo-/.test(e)&&(e=t+"-"+e);const o=e.replace(/[a-z]|-|\d/g,"");return""!==o?(console.error(`invalid characters in ion-icon name: ${o}`),null):e}hostData(){const e={role:"img"};if(this.ariaLabel)e["aria-label"]=this.ariaLabel;else{const t=this.iconName;t&&(e["aria-label"]=t.replace("ios-","").replace("md-","").replace("-outline","").replace(/\-/g," "))}return e}render(){if(this.isServer)return h("div",{class:"icon-inner"});const e=this.iconName;if(!e)return h("div",{class:"icon-inner"});const t=svgContents[e];return t===this.svgContent?h("div",{class:"icon-inner",innerHTML:t}):(loadSvgContent(e,this.publicPath,e=>{this.svgContent=e}),h("div",{class:"icon-inner"}))}static get is(){return"ion-icon"}static get host(){return{theme:"icon"}}static get properties(){return{ariaLabel:{type:String},ios:{type:String},isServer:{context:"isServer"},md:{type:String},mode:{context:"mode"},name:{type:String},publicPath:{context:"publicPath"},svgContent:{state:!0}}}static get style(){return"ion-icon{display:inline-block;font-size:inherit}ion-icon .icon-inner{height:1em;width:1em}ion-icon svg{fill:currentColor;stroke:currentColor}"}}function loadSvgContent(e,t,o){if((loadCallbacks[e]=loadCallbacks[e]||[]).push(o),!activeRequests[e]){activeRequests[e]=!0;var n=document.createElement("script");n.charset="utf-8",n.async=!0,n.src=`${t}svg/${e}.js`;var i=setTimeout(s,12e4);n.onerror=n.onload=s,document.head.appendChild(n)}function s(){clearTimeout(i),n.onerror=n.onload=null,n.parentNode.removeChild(n),delete activeRequests[e]}}const activeRequests={},loadCallbacks=[],svgContents={};window.loadIonicon=function(e,t){delete activeRequests[t],svgContents[t]=e;const o=loadCallbacks[t];o&&(o.forEach(t=>{t(e)}),delete loadCallbacks[t])};class DomFrameworkDelegate{attachViewToDom(e,t,o={},n=[]){return new Promise(i=>{const s=isString(t)?document.createElement(t):t;if(Object.assign(s,o),n.length)for(const e of n)s.classList.add(e);e.appendChild(s),i({element:s,data:o,component:t})})}removeViewFromDom(e,t){return e.removeChild(t),Promise.resolve()}shouldDeferToRouter(e){return Promise.resolve(!1)}routeToUrl(e){return Promise.resolve("todo")}}function iosEnterAnimation$1(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".modal-backdrop"));const i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),n.fromTo("opacity",.01,.4),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(n).add(i))}function iosLeaveAnimation$1(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".modal-backdrop"));const i=new e,s=t.querySelector(".modal-wrapper");i.addElement(s);const a=s.getBoundingClientRect();return i.beforeStyles({opacity:1}).fromTo("translateY","0%",`${window.innerHeight-a.top}px`),n.fromTo("opacity",.4,0),Promise.resolve(o.addElement(t).easing("ease-out").duration(250).add(n).add(i))}function mdEnterAnimation$1(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".modal-backdrop"));const i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),n.fromTo("opacity",.01,.4),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(n).add(i))}function mdLeaveAnimation$1(e,t){const o=new e,n=new e;n.addElement(t.querySelector(".modal-backdrop"));const i=new e,s=t.querySelector(".modal-wrapper");return i.addElement(s),i.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),n.fromTo("opacity",.4,0),Promise.resolve(o.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(n).add(i))}class Modal{constructor(){this.data={},this.enableBackdropDismiss=!0,this.showBackdrop=!0,this.willAnimate=!0}present(){this.animation&&(this.animation.destroy(),this.animation=null),this.ionModalWillPresent.emit(),this.el.style.zIndex=`${2e4+this.modalId}`;const e=this.enterAnimation||this.config.get("modalEnter","ios"===this.mode?iosEnterAnimation$1:mdEnterAnimation$1),t=this.el.querySelector(`.${USER_COMPONENT_MODAL_CONTAINER_CLASS}`);this.delegate||(this.delegate=new DomFrameworkDelegate);const o=[];return this.cssClass&&this.cssClass.length&&o.push(this.cssClass),this.data=this.data||{},this.data.modal=this.el,this.delegate.attachViewToDom(t,this.component,this.data,o).then(e=>{this.usersComponentElement=e.element}),this.animationCtrl.create(e,this.el).then(e=>(this.animation=e,this.willAnimate||(this.animation=e.duration(0)),playAnimationAsync(e))).then(e=>{e.destroy(),this.ionModalDidPresent.emit()})}dismiss(e,t){this.animation&&(this.animation.destroy(),this.animation=null),this.ionModalWillDismiss.emit({data:e,role:t}),this.delegate||(this.delegate=new DomFrameworkDelegate);const o=this.leaveAnimation||this.config.get("modalLeave","ios"===this.mode?iosLeaveAnimation$1:mdLeaveAnimation$1);return this.animationCtrl.create(o,this.el).then(e=>(this.animation=e,this.willAnimate||(this.animation=e.duration(0)),playAnimationAsync(e))).then(o=>{o.destroy(),this.ionModalDidDismiss.emit({data:e,role:t})}).then(()=>domControllerAsync(this.dom.write,()=>{const e=this.el.querySelector(`.${USER_COMPONENT_MODAL_CONTAINER_CLASS}`);this.delegate.removeViewFromDom(e,this.usersComponentElement),this.el.parentNode.removeChild(this.el)}))}getUserComponentContainer(){return this.el.querySelector(`.${USER_COMPONENT_MODAL_CONTAINER_CLASS}`)}onDismiss(e){e.stopPropagation(),e.preventDefault(),this.dismiss()}componentDidLoad(){this.ionModalDidLoad.emit()}componentDidUnload(){this.ionModalDidUnload.emit()}backdropClick(){this.enableBackdropDismiss&&this.dismiss()}render(){const e=createThemedClasses(this.mode,this.color,"modal-backdrop"),t=createThemedClasses(this.mode,this.color,"modal-wrapper");return[h("div",{onClick:this.backdropClick.bind(this),class:Object.assign({},e,{"hide-backdrop":!this.showBackdrop})}),h("div",{role:"dialog",class:t})]}static get is(){return"ion-modal"}static get host(){return{theme:"modal"}}static get properties(){return{animationCtrl:{connect:"ion-animation-controller"},color:{type:String,attr:"color"},component:{type:"Any",attr:"component"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},data:{type:"Any",attr:"data"},delegate:{type:"Any",attr:"delegate",mutable:!0},dismiss:{method:!0},dom:{context:"dom"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},getUserComponentContainer:{method:!0},leaveAnimation:{type:"Any",attr:"leave-animation"},modalId:{type:Number,attr:"modal-id"},mode:{type:"Any",attr:"mode"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},willAnimate:{type:Boolean,attr:"will-animate"}}}static get events(){return[{name:"ionModalDidLoad",method:"ionModalDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidPresent",method:"ionModalDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillPresent",method:"ionModalWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillDismiss",method:"ionModalWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidDismiss",method:"ionModalDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidUnload",method:"ionModalDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-modal{left:0;top:0;position:absolute;display:block;width:100%;height:100%;contain:strict}ion-modal-controller{display:none}.modal-backdrop{left:0;top:0;position:absolute;z-index:2;display:block;width:100%;height:100%;opacity:.01;transform:translateZ(0)}\@media not all and (min-width:768px) and (min-height:600px){.modal-backdrop{visibility:hidden}}.modal-backdrop.backdrop-no-tappable{cursor:auto}.modal-backdrop.hide-backdrop{visibility:hidden}.modal-wrapper{z-index:10;height:100%;contain:strict}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (500px/2));position:absolute;width:600px;height:500px}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (600px/2));position:absolute;width:600px;height:600px}}.modal-backdrop-md{background-color:var(--ion-backdrop-md-color,var(--ion-backdrop-color,#000))}.modal-wrapper-md{transform:translate3d(0,40px,0);opacity:.01}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper-md{border-radius:2px;overflow:hidden;box-shadow:0 28px 48px rgba(0,0,0,.4)}}"}static get styleMode(){return"md"}}const USER_COMPONENT_MODAL_CONTAINER_CLASS="modal-wrapper";let ids$1=0;const modals=new Map;class ModalController{create(e){const t=document.createElement("ion-modal");return t.modalId=ids$1++,Object.assign(t,e),(document.querySelector("ion-app")||document.body).appendChild(t),t.componentOnReady()}dismiss(e,t,o=-1){o=o>=0?o:getHighestId$1();const n=modals.get(o);return n?n.dismiss(e,t):Promise.reject("modal does not exist")}getTop(){return modals.get(getHighestId$1())}modalWillPresent(e){modals.set(e.target.modalId,e.target)}modalWillDismiss(e){modals.delete(e.target.modalId)}escapeKeyUp(){removeLastModal()}static get is(){return"ion-modal-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}function getHighestId$1(){let e=-1;return modals.forEach((t,o)=>{o>e&&(e=o)}),e}function removeLastModal(){const e=modals.get(getHighestId$1());return e?e.dismiss():Promise.resolve()}export{ActionSheet as IonActionSheet,ActionSheetController as IonActionSheetController,Backdrop as IonBackdrop,Icon as IonIcon,Modal as IonModal,ModalController as IonModalController};