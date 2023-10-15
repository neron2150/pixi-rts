import pixiApp from "../app/pixiApp";
import World from "./world";

export default class Game {
  world;
  static CELL_SIZE = 48;
  constructor() {
    this.world = new World();
    pixiApp.stage.addChild(this.world.container);
  }
  run() {
    pixiApp.start();
  }
}
