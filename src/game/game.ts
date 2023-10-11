import Map from "./map";
import pixiApp from "../app/pixiApp";
import { TexturesType } from "../app/assetsHelper";
import { Container } from "pixi.js";

export default class Game {
  map: Map;
  stage = new Container();
  constructor(textures: TexturesType) {
    this.map = new Map([200, 200], textures, pixiApp);
    this.stage.addChild(this.map.container);
    pixiApp.stage.addChild(this.stage);
  }
  run() {
    pixiApp.start();
  }
}
