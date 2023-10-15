import { Container } from "pixi.js";
import { Unit } from "./unit";
import { Resources } from "../../app/resourses";
import Game from "../game";

export class Units {
  units: Unit[] = [];
  container = new Container();
  constructor() {
    this.container.name = "units";

    this.add(
      new Unit({
        x: 0,
        y: 0,
        width: Game.CELL_SIZE * 2,
        height: Game.CELL_SIZE * 2,
        animatedTexture: Resources.spritesheet.harvester.animations.dig,
      })
    );
  }
  add(unit: Unit) {
    this.units.push(unit);
    this.container.addChild(unit.container);
  }
}
