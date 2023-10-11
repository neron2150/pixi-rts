import {
  Application,
  Container,
  FederatedPointerEvent,
  FederatedWheelEvent,
  Sprite,
  Texture,
} from "pixi.js";
import { TexturesType, createSprite } from "../app/assetsHelper";

export class Cell {
  obstacle: number;
  x: number;
  y: number;
  sprite: Sprite;
  static CellSize = 64;
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
    this.sprite = createSprite(texture);
    this.sprite.x = this.x * Cell.CellSize;
    this.sprite.y = this.y * Cell.CellSize;
  }
}

export default class Map {
  private readonly cells: Cell[][];
  readonly container = new Container();

  private readonly app: Application;

  constructor(
    size: [number, number],
    textures: TexturesType,
    app: Application
  ) {
    this.app = app;
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

    this.container.eventMode = 'static';
    this.container.on("wheel", this.handleMapMove.bind(this));
    this.container.on("pointermove", this.handleMapMove.bind(this));
    this.container.on("db", this.handleMapMove.bind(this));
    const placeholder = new Sprite();
    placeholder.width = size[0] * Cell.CellSize;
    placeholder.height = size[1] * Cell.CellSize;
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

  calcPointToPointDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }
  getCellsInRadius(
    centerX: number,
    centerY: number,
    distanceX: number,
    distanceY: number
  ) {
    const result = [];
    let minX = Math.ceil((centerX - distanceX) / Cell.CellSize);
    let maxX = Math.floor((centerX + distanceX) / Cell.CellSize);
    let minY = Math.ceil((centerY - distanceY) / Cell.CellSize);
    let maxY = Math.floor((centerY + distanceY) / Cell.CellSize);
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
    const centerPositionX = -this.container.x + this.app.screen.width / 2;
    const centerPositionY = -this.container.y + this.app.screen.height / 2;
    const centeredCells = this.getCellsInRadius(
      centerPositionX,
      centerPositionY,
      this.app.screen.width / 2 + Cell.CellSize + 2,
      this.app.screen.height / 2 + Cell.CellSize + 2
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
      this.container.width >= this.app.screen.width - this.container.x - deltaX
    ) {
      this.container.x += deltaX;
    }
    if (
      this.container.y + deltaY < 0 &&
      this.container.height >=
        this.app.screen.height - this.container.y - deltaY
    ) {
      this.container.y += deltaY;
    }
    this.recalculateRenderedCells();
  }
}
