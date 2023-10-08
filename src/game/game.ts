import Map from "./map";
import pixiApp from "../app/pixiApp";
import { TexturesType } from "../app/assetsHelper";
import Screen from "./screen";

export default class Game {
  map: Map;
  screen: Screen;
  constructor(textures: TexturesType) {
    this.map = new Map([50, 50], textures);
    this.screen = new Screen(pixiApp);
    this.map.addToContainer(this.screen.layers.map);
  }
  run() {
    pixiApp.start();
  }
}
