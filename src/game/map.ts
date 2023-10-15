import {
  Container,
  FederatedPointerEvent,
  FederatedWheelEvent,
  Sprite,
  Texture,
} from "pixi.js";
import { Resources } from "../app/resourses";
import pixiApp from "../app/pixiApp";
import Game from "./game";

export class Cell {
  obstacle: number;
  x: number;
  y: number;
  sprite: Sprite;
  constructor({
    x = 0,
    y = 0,
    obstacle = 0,
    baseTexture,
    additional,
  }: {
    x: number;
    y: number;
    obstacle: number;
    baseTexture: Texture;
    additional: Texture[];
  }) {
    const textures = [baseTexture, ...additional];
    const texture = textures[Math.floor(Math.random() * textures.length)];
    this.x = x;
    this.y = y;
    this.obstacle = obstacle;
    this.sprite = new Sprite(texture);
    this.sprite.x = this.x * Game.CELL_SIZE;
    this.sprite.y = this.y * Game.CELL_SIZE;
    this.sprite.width = Game.CELL_SIZE;
    this.sprite.height = Game.CELL_SIZE;
  }
}

export default class Map {
  private readonly cells: Cell[][];
  readonly container = new Container();

  constructor(size: [number, number]) {
    const textures = Resources.spritesheet.grass.textures;
    const baseTexture = textures.grass21;
    const additional = [
      textures.grass82,
      textures.grass83,
      textures.grass84,
      textures.grass72,
      textures.grass73,
      textures.grass74,
    ];
    this.cells = Array.from({ length: size[0] }, (_, x) =>
      Array.from(
        { length: size[1] },
        (_, y) => new Cell({ x, y, obstacle: 0, baseTexture, additional })
      )
    );

    this.container.eventMode = "static";
    this.container.on("wheel", this.handleMapMove.bind(this));
    this.container.on("pointermove", this.handleMapMove.bind(this));
    this.container.on("db", this.handleMapMove.bind(this));
    const placeholder = new Sprite();
    placeholder.width = size[0] * Game.CELL_SIZE;
    placeholder.height = size[1] * Game.CELL_SIZE;
    placeholder.name = "placeholder";
    this.container.addChild(placeholder);
    this.recalculateRenderedCells();
  }
  getCells() {
    return this.cells;
  }
  getCell(x: number, y: number) {
    return this.cells[x][y];
  }
  addCellsToContainer(container: Container) {
    container.addChild(...this.cells.flat().map((cell) => cell.sprite));
  }

  getCellsInRadius(
    centerX: number,
    centerY: number,
    distanceX: number,
    distanceY: number
  ) {
    const result = [];
    let minX = Math.ceil((centerX - distanceX) / Game.CELL_SIZE);
    let maxX = Math.floor((centerX + distanceX) / Game.CELL_SIZE);
    let minY = Math.ceil((centerY - distanceY) / Game.CELL_SIZE);
    let maxY = Math.floor((centerY + distanceY) / Game.CELL_SIZE);
    minX = Math.max(0, minX);
    maxX = Math.min(this.cells.length - 1, maxX);
    minY = Math.max(0, minY);
    maxY = Math.min(this.cells[0].length - 1, maxY);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        result.push(this.cells[x][y].sprite);
      }
    }

    return result;
  }
  recalculateRenderedCells() {
    const centerPositionX = -this.container.x + pixiApp.screen.width / 2;
    const centerPositionY = -this.container.y + pixiApp.screen.height / 2;
    const centeredCells = this.getCellsInRadius(
      centerPositionX,
      centerPositionY,
      pixiApp.screen.width / 2 + Game.CELL_SIZE + 2,
      pixiApp.screen.height / 2 + Game.CELL_SIZE + 2
    );
    centeredCells.forEach((cell) => {
      this.container.addChild(cell);
    });
    this.container.children.forEach((child) => {
      if (
        !centeredCells.includes(child as Sprite) &&
        child.name !== "placeholder"
      ) {
        this.container.removeChild(child);
      }
    });
  }
  handleMapMove(e: FederatedWheelEvent | FederatedPointerEvent) {
    let deltaX = 0;
    let deltaY = 0;
    if (e.nativeEvent instanceof WheelEvent) {
      deltaX = -e.nativeEvent.deltaX;
      deltaY = -e.nativeEvent.deltaY;
    }
    if (e.nativeEvent instanceof PointerEvent) {
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
      this.container.height >= pixiApp.screen.height - this.container.y - deltaY
    ) {
      this.container.y += deltaY;
    }
    this.recalculateRenderedCells();
  }
}
