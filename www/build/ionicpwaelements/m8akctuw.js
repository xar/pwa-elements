/*! Built with http://stenciljs.com */
const{h:e,Context:t}=window.ionicpwaelements;let o=0;const n=new Map;class s{create(e){const t=document.createElement("ion-action-sheet");return t.actionSheetId=o++,Object.assign(t,e),(document.querySelector("ion-app")||document.body).appendChild(t),t.componentOnReady()}dismiss(e,t,o=-1){o=o>=0?o:r();const s=n.get(o);return s?s.dismiss(e,t):Promise.reject("action-sheet does not exist")}getTop(){return n.get(r())}actionSheetWillPresent(e){n.set(e.target.actionSheetId,e.target)}actionSheetWillDismiss(e){n.delete(e.target.actionSheetId)}escapeKeyUp(){!function(){const e=n.get(r());e?e.dismiss():Promise.resolve()}()}static get is(){return"ion-action-sheet-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}function r(){let e=-1;return n.forEach((t,o)=>{o>e&&(e=o)}),e}let i=0;const c=new Map;class a{create(e){const t=document.createElement("ion-modal");return t.modalId=i++,Object.assign(t,e),(document.querySelector("ion-app")||document.body).appendChild(t),t.componentOnReady()}dismiss(e,t,o=-1){o=o>=0?o:d();const n=c.get(o);return n?n.dismiss(e,t):Promise.reject("modal does not exist")}getTop(){return c.get(d())}modalWillPresent(e){c.set(e.target.modalId,e.target)}modalWillDismiss(e){c.delete(e.target.modalId)}escapeKeyUp(){!function(){const e=c.get(d());e?e.dismiss():Promise.resolve()}()}static get is(){return"ion-modal-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}}}function d(){let e=-1;return c.forEach((t,o)=>{o>e&&(e=o)}),e}export{s as IonActionSheetController,a as IonModalController};