import {
  Application,
  Container,
  FederatedPointerEvent,
  FederatedWheelEvent,
} from "pixi.js";
import { Cell } from "./map";

export default class Screen {
  stage = new Container();
  layers = {
    ui: new Container(),
    map: new Container(),
    game: new Container(),
  };
  app: Application;
  constructor(app: Application) {
    app.stage.addChild(this.stage);
    this.app = app;
    this.stage.addChild(this.layers.map);
    this.stage.addChild(this.layers.ui);
    this.stage.addChild(this.layers.game);
    this.layers.map.interactive = true;

    this.layers.map.on("wheel", this.handleMapMove.bind(this));
    this.layers.map.on("pointermove", this.handleMapMove.bind(this));
    this.layers.map.on('db', this.handleMapMove.bind(this));
    }

  handleMapMove(e: FederatedWheelEvent | FederatedPointerEvent) {
    let deltaX = 0;
    let deltaY = 0;
    if (e.nativeEvent instanceof WheelEvent) {
      deltaX = -e.nativeEvent.deltaX;
      deltaY = -e.nativeEvent.deltaY;
    }
    // if (e.nativeEvent instanceof PointerEvent) {
    //   deltaX = e.nativeEvent.movementX;
    //   deltaY = e.nativeEvent.movementY;
    // }
    if (
      this.layers.map.x + deltaX < -Cell.CellSize / 2 &&
      this.layers.map.width >=
        this.app.screen.width - this.layers.map.x - deltaX + Cell.CellSize / 2
    ) {
      this.layers.map.x += deltaX;
    }
    if (
      this.layers.map.y + deltaY < -Cell.CellSize / 2 &&
      this.layers.map.height >=
        this.app.screen.height - this.layers.map.y - deltaY + Cell.CellSize / 2
    ) {
      this.layers.map.y += deltaY;
    }
  }
}
