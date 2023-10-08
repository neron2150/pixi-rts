import { Application } from "pixi.js";

const pixiApp = new Application({ resizeTo: window, autoStart: false });
// @ts-ignore
globalThis.__PIXI_APP__ = pixiApp;

export default pixiApp;
