var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i["throw"](e))}catch(e){o(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}c((i=i.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return c([e,t])}}function c(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-90170b2f.system.js"],function(e){"use strict";var t,n,i,r;return{setters:[function(e){t=e.r;n=e.d;i=e.h;r=e.g}],execute:function(){var o=window.ImageCapture;if(typeof o==="undefined"){o=function(){function e(e){var t=this;if(e.kind!=="video")throw new DOMException("NotSupportedError");this._videoStreamTrack=e;if(!("readyState"in this._videoStreamTrack)){this._videoStreamTrack.readyState="live"}this._previewStream=new MediaStream([e]);this.videoElement=document.createElement("video");this.videoElementPlaying=new Promise(function(e){t.videoElement.addEventListener("playing",e)});if(HTMLMediaElement){this.videoElement.srcObject=this._previewStream}else{this.videoElement.src=URL.createObjectURL(this._previewStream)}this.videoElement.muted=true;this.videoElement.setAttribute("playsinline","");this.videoElement.play();this.canvasElement=document.createElement("canvas");this.canvas2dContext=this.canvasElement.getContext("2d")}Object.defineProperty(e.prototype,"videoStreamTrack",{get:function(){return this._videoStreamTrack},enumerable:true,configurable:true});e.prototype.getPhotoCapabilities=function(){return new Promise(function e(t,n){var i={current:0,min:0,max:0};t({exposureCompensation:i,exposureMode:"none",fillLightMode:["none"],focusMode:"none",imageHeight:i,imageWidth:i,iso:i,redEyeReduction:false,whiteBalanceMode:"none",zoom:i});n(new DOMException("OperationError"))})};e.prototype.setOptions=function(e){if(e===void 0){e={}}return new Promise(function e(t,n){})};e.prototype.takePhoto=function(){var e=this;return new Promise(function t(n,i){if(e._videoStreamTrack.readyState!=="live"){return i(new DOMException("InvalidStateError"))}e.videoElementPlaying.then(function(){try{e.canvasElement.width=e.videoElement.videoWidth;e.canvasElement.height=e.videoElement.videoHeight;e.canvas2dContext.drawImage(e.videoElement,0,0);e.canvasElement.toBlob(n)}catch(e){i(new DOMException("UnknownError"))}})})};e.prototype.grabFrame=function(){var e=this;return new Promise(function t(n,i){if(e._videoStreamTrack.readyState!=="live"){return i(new DOMException("InvalidStateError"))}e.videoElementPlaying.then(function(){try{e.canvasElement.width=e.videoElement.videoWidth;e.canvasElement.height=e.videoElement.videoHeight;e.canvas2dContext.drawImage(e.videoElement,0,0);n(window.createImageBitmap(e.canvasElement))}catch(e){i(new DOMException("UnknownError"))}})})};return e}()}window.ImageCapture=o;var s=e("pwa_camera",function(){function e(e){t(this,e);this.facingMode="user";this.showShutterOverlay=false;this.flashIndex=0;this.hasMultipleCameras=false;this.hasFlash=false;this.flashModes=[];this.flashMode="off";this.isServer=n(this,"isServer")}e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:if(this.isServer){return[2]}this.defaultConstraints={video:{facingMode:this.facingMode}};return[4,this.queryDevices()];case 1:e.sent();return[4,this.initCamera()];case 2:e.sent();return[2]}})})};e.prototype.componentDidUnload=function(){this.stopStream();this.photoSrc&&URL.revokeObjectURL(this.photoSrc)};e.prototype.hasImageCapture=function(){return"ImageCapture"in window};e.prototype.queryDevices=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:n.trys.push([0,2,,3]);return[4,navigator.mediaDevices.enumerateDevices()];case 1:e=n.sent();this.hasMultipleCameras=e.filter(function(e){return e.kind=="videoinput"}).length>1;return[3,3];case 2:t=n.sent();this.onPhoto(t);return[3,3];case 3:return[2]}})})};e.prototype.initCamera=function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(i){switch(i.label){case 0:if(!e){e=this.defaultConstraints}i.label=1;case 1:i.trys.push([1,3,,4]);return[4,navigator.mediaDevices.getUserMedia(Object.assign({video:true,audio:false},e))];case 2:t=i.sent();this.initStream(t);return[3,4];case 3:n=i.sent();this.onPhoto(n);return[3,4];case 4:return[2]}})})};e.prototype.initStream=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:this.stream=e;this.videoElement.srcObject=e;console.log(e.getVideoTracks()[0]);if(!this.hasImageCapture())return[3,2];this.imageCapture=new window.ImageCapture(e.getVideoTracks()[0]);return[4,this.initPhotoCapabilities(this.imageCapture)];case 1:t.sent();t.label=2;case 2:this.el.forceUpdate();return[2]}})})};e.prototype.initPhotoCapabilities=function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,e.getPhotoCapabilities()];case 1:t=n.sent();if(t.fillLightMode.length>1){this.flashModes=t.fillLightMode.map(function(e){return e});if(this.flashMode){this.flashMode=this.flashModes[this.flashModes.indexOf(this.flashMode)]||"off";this.flashIndex=this.flashModes.indexOf(this.flashMode)||0}else{this.flashIndex=0}}return[2]}})})};e.prototype.stopStream=function(){this.stream&&this.stream.getTracks().forEach(function(e){return e.stop()})};e.prototype.capture=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:if(!this.hasImageCapture())return[3,5];n.label=1;case 1:n.trys.push([1,4,,5]);return[4,this.imageCapture.takePhoto({fillLightMode:this.flashModes.length>1?this.flashMode:undefined})];case 2:e=n.sent();return[4,this.flashScreen()];case 3:n.sent();this.promptAccept(e);return[3,5];case 4:t=n.sent();console.error("Unable to take photo!",t);return[3,5];case 5:return[2]}})})};e.prototype.promptAccept=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.photo=e;this.photoSrc=URL.createObjectURL(e);return[2]})})};e.prototype.rotate=function(){this.stopStream();var e=this.stream&&this.stream.getTracks()[0];if(!e){return}var t=e.getConstraints();var n=t.facingMode;if(!n){var i=e.getCapabilities();n=i.facingMode[0]}if(n==="environment"){this.initCamera({video:{facingMode:"user"}})}else{this.initCamera({video:{facingMode:"environment"}})}};e.prototype.setFlashMode=function(e){console.log("New flash mode: ",e);this.flashMode=e};e.prototype.cycleFlash=function(){if(this.flashModes.length>0){this.flashIndex=(this.flashIndex+1)%this.flashModes.length;this.setFlashMode(this.flashModes[this.flashIndex])}};e.prototype.flashScreen=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return[2,new Promise(function(t,n){e.showShutterOverlay=true;setTimeout(function(){e.showShutterOverlay=false;t()},100)})]})})};e.prototype.handleShutterClick=function(e){console.log();this.capture()};e.prototype.handleRotateClick=function(e){this.rotate()};e.prototype.handleClose=function(e){this.onPhoto&&this.onPhoto(null)};e.prototype.handleFlashClick=function(e){this.cycleFlash()};e.prototype.handleCancelPhoto=function(e){this.photo=null};e.prototype.handleAcceptPhoto=function(e){this.onPhoto&&this.onPhoto(this.photo)};e.prototype.iconExit=function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M402.2,134L378,109.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L139.6,109.8 c-1.6-1.6-4.1-1.6-5.7,0L109.8,134c-1.6,1.6-1.6,4.1,0,5.7l113.5,113.5c1.6,1.6,1.6,4.1,0,5.7L109.8,372.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l113.5-113.5c1.6-1.6,4.1-1.6,5.7,0l113.5,113.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l113.5-113.5C403.7,138.1,403.7,135.5,402.2,134z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"};e.prototype.iconConfirm=function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%232CD865' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_1_'%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M208,301.4l-55.4-55.5c-1.5-1.5-4-1.6-5.6-0.1l-23.4,22.3c-1.6,1.6-1.7,4.1-0.1,5.7l81.6,81.4 c3.1,3.1,8.2,3.1,11.3,0l171.8-171.7c1.6-1.6,1.6-4.2-0.1-5.7l-23.4-22.3c-1.6-1.5-4.1-1.5-5.6,0.1L213.7,301.4 C212.1,303,209.6,303,208,301.4z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E"};e.prototype.iconReverseCamera=function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M352,0H160C72,0,0,72,0,160v192c0,88,72,160,160,160h192c88,0,160-72,160-160V160C512,72,440,0,352,0z M356.7,365.8l-3.7,3.3c-27,23.2-61.4,35.9-96.8,35.9c-72.4,0-135.8-54.7-147-125.6c-0.3-1.9-2-3.3-3.9-3.3H64 c-3.3,0-5.2-3.8-3.2-6.4l61.1-81.4c1.6-2.1,4.7-2.1,6.4-0.1l63.3,81.4c2,2.6,0.2,6.5-3.2,6.5h-40.6c-2.5,0-4.5,2.4-3.9,4.8 c11.5,51.5,59.2,90.6,112.4,90.6c26.4,0,51.8-9.7,73.7-27.9l3.1-2.5c1.6-1.3,3.9-1.1,5.3,0.3l18.5,18.6 C358.5,361.6,358.4,364.3,356.7,365.8z M451.4,245.6l-61,83.5c-1.6,2.2-4.8,2.2-6.4,0.1l-63.3-83.3c-2-2.6-0.1-6.4,3.2-6.4h40.8 c2.5,0,4.4-2.3,3.9-4.8c-5.1-24.2-17.8-46.5-36.5-63.7c-21.2-19.4-48.2-30.1-76-30.1c-26.5,0-52.6,9.7-73.7,27.3l-3.1,2.5 c-1.6,1.3-3.9,1.2-5.4-0.3l-18.5-18.5c-1.6-1.6-1.5-4.3,0.2-5.9l3.5-3.1c27-23.2,61.4-35.9,96.8-35.9c38,0,73.9,13.7,101.2,38.7 c23.2,21.1,40.3,55.2,45.7,90.1c0.3,1.9,1.9,3.4,3.9,3.4h41.3C451.4,239.2,453.3,243,451.4,245.6z'/%3E%3C/g%3E%3C/svg%3E"};e.prototype.iconRetake=function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' enable-background='new 0 0 512 512' xml:space='preserve'%3E%3Ccircle fill='%23727A87' cx='256' cy='256' r='256'/%3E%3Cg id='Icon_5_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M394.2,142L370,117.8c-1.6-1.6-4.1-1.6-5.7,0L258.8,223.4c-1.6,1.6-4.1,1.6-5.7,0L147.6,117.8 c-1.6-1.6-4.1-1.6-5.7,0L117.8,142c-1.6,1.6-1.6,4.1,0,5.7l105.5,105.5c1.6,1.6,1.6,4.1,0,5.7L117.8,364.4c-1.6,1.6-1.6,4.1,0,5.7 l24.1,24.1c1.6,1.6,4.1,1.6,5.7,0l105.5-105.5c1.6-1.6,4.1-1.6,5.7,0l105.5,105.5c1.6,1.6,4.1,1.6,5.7,0l24.1-24.1 c1.6-1.6,1.6-4.1,0-5.7L288.6,258.8c-1.6-1.6-1.6-4.1,0-5.7l105.5-105.5C395.7,146.1,395.7,143.5,394.2,142z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"};e.prototype.iconFlashOff=function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M498,483.7L42.3,28L14,56.4l149.8,149.8L91,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9c1.6,0,2.7,1.3,2.4,2.7 L197.6,507c-1,4.4,5.8,6.9,8.9,3.2l118.6-142.8L469.6,512L498,483.7z'/%3E%3Cpath class='st0' d='M449,218.2c2.5-3,0.1-7.2-3.9-7.2H301.2c-1.6,0-2.7-1.3-2.4-2.7L342.4,5c1-4.4-5.8-6.9-8.9-3.2L214.9,144.6 l161.3,161.3L449,218.2z'/%3E%3C/g%3E%3C/svg%3E"};e.prototype.iconFlashOn=function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3C/svg%3E"};e.prototype.iconFlashAuto=function(){return"data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cpath class='st0' d='M287.2,211c-1.6,0-2.7-1.3-2.4-2.7L328.4,5c1-4.4-5.8-6.9-8.9-3.2L77,293.8c-2.5,3-0.1,7.2,3.9,7.2h143.9 c1.6,0,2.7,1.3,2.4,2.7L183.6,507c-1,4.4,5.8,6.9,8.9,3.2l242.5-292c2.5-3,0.1-7.2-3.9-7.2L287.2,211L287.2,211z'/%3E%3Cg%3E%3Cpath class='st0' d='M321.3,186l74-186H438l74,186h-43.5l-11.9-32.5h-80.9l-12,32.5H321.3z M415.8,47.9l-27.2,70.7h54.9l-27.2-70.7 H415.8z'/%3E%3C/g%3E%3C/svg%3E"};e.prototype.render=function(){var e=this;var t=this.facingMode=="user"?{transform:"scaleX(-1)"}:{};return i("div",{class:"camera-wrapper"},i("div",{class:"camera-header"},i("section",{class:"items"},i("div",{class:"item close",onClick:function(t){return e.handleClose(t)}},i("img",{src:this.iconExit()})),i("div",{class:"item flash",onClick:function(t){return e.handleFlashClick(t)}},this.flashModes.length>0&&i("div",null,this.flashMode=="off"?i("img",{src:this.iconFlashOff()}):"",this.flashMode=="auto"?i("img",{src:this.iconFlashAuto()}):"",this.flashMode=="flash"?i("img",{src:this.iconFlashOn()}):"")))),this.photo&&i("div",{class:"accept"},i("div",{class:"accept-image",style:{backgroundImage:"url("+this.photoSrc+")"}})),i("div",{class:"camera-video",style:{display:this.photo?"none":""}},this.showShutterOverlay&&i("div",{class:"shutter-overlay"}),this.hasImageCapture()?i("video",{style:t,ref:function(t){return e.videoElement=t},autoplay:true,playsinline:true}):i("canvas",{ref:function(t){return e.canvasElement=t},width:"100%",height:"100%"}),i("canvas",{class:"offscreen-image-render",ref:function(t){return e.offscreenCanvas=t},width:"100%",height:"100%"})),i("div",{class:"camera-footer"},!this.photo?[i("div",{class:"shutter",onClick:function(t){return e.handleShutterClick(t)}},i("div",{class:"shutter-button"})),i("div",{class:"rotate",onClick:function(t){return e.handleRotateClick(t)}},i("img",{src:this.iconReverseCamera()})),{}]:i("section",{class:"items"},i("div",{class:"item accept-cancel",onClick:function(t){return e.handleCancelPhoto(t)}},i("img",{src:this.iconRetake()})),i("div",{class:"item accept-use",onClick:function(t){return e.handleAcceptPhoto(t)}},i("img",{src:this.iconConfirm()})))))};Object.defineProperty(e,"assetsDirs",{get:function(){return["icons"]},enumerable:true,configurable:true});Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{--header-height:4em;--footer-height:9em;--shutter-size:6em;--icon-size-header:1.5em;--icon-size-footer:2.5em;--margin-size-header:1.5em;--margin-size-footer:2.0em;font-family:-apple-system,BlinkMacSystemFont,“Segoe UI”,“Roboto”,“Droid Sans”,“Helvetica Neue”,sans-serif;display:block}.items,:host{width:100%;height:100%}.items{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.items .item{-ms-flex:1;flex:1;text-align:center}.items .item:first-child{text-align:left}.items .item:last-child{text-align:right}.camera-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.camera-header{color:#fff;background-color:#000;height:var(--header-height)}.camera-header .items{padding:var(--margin-size-header)}.camera-footer{position:relative;color:#fff;background-color:#000;height:var(--footer-height)}.camera-footer .items{padding:var(--margin-size-footer)}.camera-video{position:relative;-ms-flex:1;flex:1;overflow:hidden}.camera-video,video{background-color:#000}video{width:100%;height:100%;max-height:100%;min-height:100%;z-index:1;-o-object-fit:cover;object-fit:cover}.shutter{position:absolute;left:50%;top:50%;width:var(--shutter-size);height:var(--shutter-size);margin-top:calc(var(--shutter-size) / -2);margin-left:calc(var(--shutter-size) / -2);border-radius:100%;background-color:#c6cdd8;padding:12px;-webkit-box-sizing:border-box;box-sizing:border-box}.shutter:active .shutter-button{background-color:#9da9bb}.shutter-button{background-color:#fff;border-radius:100%;width:100%;height:100%}.rotate{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:absolute;right:var(--margin-size-footer);top:0;height:100%;color:#fff}.rotate,.rotate img{width:var(--icon-size-footer)}.rotate img{height:var(--icon-size-footer)}.shutter-overlay{z-index:5;position:absolute;width:100%;height:100%;background-color:#000}.error{width:100%;height:100%;color:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.accept{background-color:#000;-ms-flex:1;flex:1}.accept .accept-image{width:100%;height:100%;background-position:50%;background-size:cover;background-repeat:no-repeat}.close img,.flash img{width:var(--icon-size-header);height:var(--icon-size-header)}.accept-cancel img,.accept-use img{width:var(--icon-size-footer);height:var(--icon-size-footer)}.offscreen-image-render{top:0;left:0;visibility:hidden;pointer-events:none;width:100%;height:100%}"},enumerable:true,configurable:true});return e}())}}});