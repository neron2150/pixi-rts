import { Container, Sprite, Texture } from "pixi.js";
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
// export const CELLS = {
//   // grass1: new Cell({ x: 0, y: 0, obstacle: 0, sprite: SPRITES.grass11 }),
// };

export default class Map {
  private readonly cells: Cell[][];
  constructor(size: [number, number], textures: TexturesType) {
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
  addToContainer(container: Container) {
    this.cells.flat().forEach((cell) => container.addChild(cell.sprite));
    container.x = -Cell.CellSize / 2;
    container.y = -Cell.CellSize / 2;
  }
}
