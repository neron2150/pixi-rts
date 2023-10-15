import { Application, SCALE_MODES, settings } from "pixi.js";

const pixiApp = new Application({ resizeTo: window, autoStart: false });
// @ts-ignore
globalThis.__PIXI_APP__ = pixiApp;
settings.SCALE_MODE = SCALE_MODES.NEAREST;
export default pixiApp;
