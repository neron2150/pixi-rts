import { grass, harvester } from "../assets/atlasses.json";
import { BaseTexture, Spritesheet } from "pixi.js";
type GrassSpritesheetType = Spritesheet<typeof grass>;
type HarvesterSpritesheetType = Spritesheet<typeof harvester>;
export class Resources {
  static spritesheet: {
    harvester: HarvesterSpritesheetType;
    grass: GrassSpritesheetType;
  };

  static async loadResources() {
    const harvesterSpritesheet = new Spritesheet(
      BaseTexture.from(harvester.meta.image),
      harvester
    );
    const grassSpritesheet = new Spritesheet(
      BaseTexture.from(grass.meta.image),
      grass
    );

    await harvesterSpritesheet.parse();
    await grassSpritesheet.parse();
    Resources.spritesheet = {
      harvester: harvesterSpritesheet,
      grass: grassSpritesheet,
    };
  }
}
