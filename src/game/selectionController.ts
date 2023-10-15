import { Graphics, Point, Rectangle } from "pixi.js";
import { Unit } from "./units/unit";
import World from "./world";

export default class SelectionController {
  selectedUnits: Unit[] = [];
  selectionRectangle?: Rectangle;
  startPoint?: Point;
  graphics = new Graphics();
  worldInstance: World;
  constructor(worldInstance: World) {
    this.worldInstance = worldInstance;
    worldInstance.container.on(
      "pointerdown",
      this.handlePointerDown.bind(this)
    );
    worldInstance.container.on("pointerup", this.handlePointerUp.bind(this));
    worldInstance.container.on("pointerleave", () => {
      this.handlePointerUp();
    });
    worldInstance.container.on(
      "pointermove",
      this.handlePointerMove.bind(this)
    );
    worldInstance.container.addChild(this.graphics);
  }

  handleSelectionChange() {
    this.findUnitsInSelectionRectangle();
    this.drawSelectionRectangles();
    this.drawSelectionForUnits();
  }

  handlePointerDown = (e: any) => {
    console.log(e);
    this.startPoint = new Point(
      e.data.global.x - this.worldInstance.container.x,
      e.data.global.y - this.worldInstance.container.y
    );
    this.selectionRectangle = new Rectangle(
      e.data.global.x - this.worldInstance.container.x,
      e.data.global.y - this.worldInstance.container.y,
      0,
      0
    );
    this.drawSelectionRectangles();
  };

  handlePointerUp = () => {
    if (this.selectionRectangle) {
      this.graphics.clear();
      this.findUnitsInSelectionRectangle();
      this.drawSelectionForUnits();
      this.selectionRectangle = undefined;
      this.startPoint = undefined;
    }
  };

  handlePointerMove = (e: any) => {
    if (this.selectionRectangle && this.startPoint) {
      const currentPoint = new Point(
        e.data.global.x - this.worldInstance.container.x,
        e.data.global.y - this.worldInstance.container.y
      );
      this.selectionRectangle.width = currentPoint.x - this.startPoint.x;
      this.selectionRectangle.height = currentPoint.y - this.startPoint.y;
      this.selectionRectangle.x = Math.min(this.startPoint.x, currentPoint.x);
      this.selectionRectangle.y = Math.min(this.startPoint.y, currentPoint.y);
      this.selectionRectangle.width = Math.abs(this.selectionRectangle.width);
      this.selectionRectangle.height = Math.abs(this.selectionRectangle.height);
    }
    this.handleSelectionChange();
  };

  findUnitsInSelectionRectangle() {
    if (!this.selectionRectangle) {
      this.selectedUnits = [];
      return;
    }
    const selectedUnits: Unit[] = [];
    this.worldInstance.units.units.forEach((unit) => {
      if (
        this.selectionRectangle &&
        unit.container.x + unit.container.width > this.selectionRectangle.x &&
        unit.container.x <
          this.selectionRectangle.x + this.selectionRectangle.width &&
        unit.container.y + unit.container.height > this.selectionRectangle.y &&
        unit.container.y <
          this.selectionRectangle.y + this.selectionRectangle.height
      ) {
        selectedUnits.push(unit);
      }
    });

    this.selectedUnits = selectedUnits;
  }

  drawSelectionRectangles() {
    if (!this.selectionRectangle) {
      return;
    }
    this.graphics.clear();
    this.graphics.lineStyle(1, 0x00ff00);

    this.graphics.drawRect(
      this.selectionRectangle.x,
      this.selectionRectangle.y,
      this.selectionRectangle.width,
      this.selectionRectangle.height
    );
  }

  drawSelectionForUnits() {
    this.selectedUnits.forEach((unit) => {
      this.graphics.lineStyle(2, 0x00ff00);
      this.graphics.drawCircle(
        unit.container.x + unit.container.width / 2,
        unit.container.y + unit.container.height / 2,
        unit.container.width / 1.5 + 5
      );
    });
  }
}
