import Map from "./map";
import {
  Container,
  FederatedPointerEvent,
  FederatedWheelEvent,
  Sprite,
} from "pixi.js";
import { Units } from "./units/units";
import Game from "./game";
import pixiApp from "../app/pixiApp";
import SelectionController from "./selectionController";

export default class World {
  container = new Container();
  map: Map;
  units: Units;
  isDoubleTap = false;
  mapMoveConsumers: ((x: number, y: number) => void)[] = [];
  selectionController;
  constructor() {
    this.container.name = "world";
    const placeholder = new Sprite();
    const mapSize = [200, 200];
    placeholder.width = mapSize[0] * Game.CELL_SIZE;
    placeholder.height = mapSize[1] * Game.CELL_SIZE;
    placeholder.name = "placeholder";
    this.map = new Map(mapSize, placeholder);
    this.container.addChild(this.map.container);
    this.units = new Units(mapSize);
    this.mapMoveConsumers.push(this.map.handleMapMove);
    // this.mapMoveConsumers.push(this.units.handleMapMove);
    this.container.addChild(this.units.container);

    this.container.eventMode = "static";
    this.container.on("wheel", this.handleMapMove.bind(this));
    window.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        this.isDoubleTap = true;
      }
    });
    window.addEventListener("touchend", (e) => {
      this.isDoubleTap = false;
    });
    this.container.on("pointermove", this.handleMapMove.bind(this));

    this.selectionController = new SelectionController(this);
  }
  handleMapMove(e: FederatedWheelEvent | FederatedPointerEvent) {
    let deltaX = 0;
    let deltaY = 0;
    if (e.nativeEvent instanceof WheelEvent) {
      deltaX = -e.nativeEvent.deltaX;
      deltaY = -e.nativeEvent.deltaY;
    }

    if (e.nativeEvent instanceof PointerEvent && this.isDoubleTap) {
      deltaX = e.nativeEvent.movementX;
      deltaY = e.nativeEvent.movementY;
    }
    
      if (
        this.container.x + deltaX < 0 &&
        this.container.width >= pixiApp.screen.width - this.container.x - deltaX
      ) {
        this.container.x += deltaX;
      }
      if (
        this.container.y + deltaY < 0 &&
        this.container.height >=
          pixiApp.screen.height - this.container.y - deltaY
      ) {
        this.container.y += deltaY;
      }
    

    this.mapMoveConsumers.forEach((consumer) =>
      consumer(this.container.x, this.container.y)
    );
  }
}
