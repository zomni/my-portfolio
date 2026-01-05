declare module "vanta/dist/vanta.net.min" {
  import type { Object3D } from "three";

  type VantaEffect = {
    destroy: () => void;
  };

  type VantaOptions = {
    el: HTMLElement;
    THREE: typeof import("three");
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  };

  function NET(options: VantaOptions): VantaEffect;

  export default NET;
}
