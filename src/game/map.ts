import {
  Container,
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

  constructor(size: number[], placeholder: Sprite) {
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
    this.container.addChild(placeholder);
    this.handleMapMove();
  }
  getCells() {
    return this.cells;
  }
  getCell(x: number, y: number) {
    return this.cells[x][y];
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
  handleMapMove = (x: number = 0, y: number = 0) => {
    const centerX = -x + pixiApp.screen.width / 2;
    const centerY = -y + pixiApp.screen.height / 2;
    const distanceX = pixiApp.screen.width / 2 + Game.CELL_SIZE + 2;
    const distanceY = pixiApp.screen.height / 2 + Game.CELL_SIZE + 2;

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

    this.container.removeChildren();
    result.forEach((cell) => {
      this.container.addChild(cell);
    });
  };
}
