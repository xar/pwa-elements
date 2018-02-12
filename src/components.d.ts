/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@ionic/core';


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  CameraModal as IonCameraModal
} from './components/camera-modal/camera-modal';

declare global {
  interface HTMLIonCameraModalElement extends IonCameraModal, HTMLStencilElement {
  }
  var HTMLIonCameraModalElement: {
    prototype: HTMLIonCameraModalElement;
    new (): HTMLIonCameraModalElement;
  };
  interface HTMLElementTagNameMap {
    "ion-camera-modal": HTMLIonCameraModalElement;
  }
  interface ElementTagNameMap {
    "ion-camera-modal": HTMLIonCameraModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ion-camera-modal": JSXElements.IonCameraModalAttributes;
    }
  }
  namespace JSXElements {
    export interface IonCameraModalAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  Camera as IonCamera
} from './components/camera/camera';

declare global {
  interface HTMLIonCameraElement extends IonCamera, HTMLStencilElement {
  }
  var HTMLIonCameraElement: {
    prototype: HTMLIonCameraElement;
    new (): HTMLIonCameraElement;
  };
  interface HTMLElementTagNameMap {
    "ion-camera": HTMLIonCameraElement;
  }
  interface ElementTagNameMap {
    "ion-camera": HTMLIonCameraElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "ion-camera": JSXElements.IonCameraAttributes;
    }
  }
  namespace JSXElements {
    export interface IonCameraAttributes extends HTMLAttributes {
      facingMode?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
