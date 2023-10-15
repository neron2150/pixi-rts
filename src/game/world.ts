import Map from "./map";
import { Container } from "pixi.js";
import { Units } from "./units/units";

export default class World {
  container = new Container();
  map: Map;
  units: Units;
  constructor() {
    this.container.name = "world";
    this.map = new Map([200, 200]);
    this.container.addChild(this.map.container);
    this.units = new Units();
    this.container.addChild(this.units.container);
  }
}
