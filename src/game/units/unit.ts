import { AnimatedSprite, Container, Sprite, Texture } from "pixi.js"
import Game from "../game";

export class Unit {
  container = new Container();
  sprite?: Sprite;
  animatedSprite?: AnimatedSprite;

  constructor({
    x,
    y,
    width = Game.CELL_SIZE,
    height = Game.CELL_SIZE,
    texture,
    animatedTexture,
  }: {
    x: number;
    y: number;
    width?: number;
    height?: number;
    texture?: Texture;
    animatedTexture?: Texture[];
  }) {
    this.container.name = "unit";
    this.container.x = x;
    this.container.y = y;
    this.container.width = width;
    this.container.height = height;
    if (texture) {
      this.sprite = new Sprite(texture);
      this.sprite.width = width;
      this.sprite.height = height;
      this.container.addChild(this.sprite);
    }
    console.log(animatedTexture);
    if (animatedTexture) {
      this.animatedSprite = new AnimatedSprite(animatedTexture);
      this.animatedSprite.width = width;
      this.animatedSprite.height = height;
      this.animatedSprite.animationSpeed = 0.1666;
      this.animatedSprite.scale.set(2);
      this.animatedSprite.play();
      this.container.addChild(this.animatedSprite);
    }
  }
}
