import { Container, Sprite } from "pixi.js";
import { Unit } from "./unit";
import { Resources } from "../../app/resourses";
import Game from "../game";

export class Units {
  units: Unit[] = [];
  container = new Container();
 
  constructor(size: number[]) {
    this.container.name = "units";
    const placeholder = new Sprite();
    placeholder.width = size[0] * Game.CELL_SIZE;
    placeholder.height = size[1] * Game.CELL_SIZE;
    this.container.addChild(placeholder);
    this.add(
      new Unit({
        x: 5,
        y: 2,
        width: Game.CELL_SIZE * 2,
        height: Game.CELL_SIZE * 2,
        animatedTexture: Resources.spritesheet.harvester.animations.walk,
      })
    );
  }
  add(unit: Unit) {
    this.units.push(unit);
    this.container.addChild(unit.container);
  }
}
