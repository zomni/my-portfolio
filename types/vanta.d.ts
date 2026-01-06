declare module "vanta/dist/vanta.birds.min" {
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

    backgroundColor?: number;
    color1?: number;
    color2?: number;

    birdSize?: number;
    wingSpan?: number;
    speedLimit?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
  };

  function BIRDS(options: VantaOptions): VantaEffect;

  export default BIRDS;
}
