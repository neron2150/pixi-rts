import {
  Assets,
  BaseTexture,
  SCALE_MODES,
  Sprite,
  Spritesheet,
  Texture,
} from "pixi.js";
import pixiApp from "./pixiApp";
import { Cell } from "../game/map";

const atlasData = {
  frames: {
    grass00: {
      frame: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass01: {
      frame: {
        x: 0,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass02: {
      frame: {
        x: 0,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass03: {
      frame: {
        x: 0,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass04: {
      frame: {
        x: 0,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass05: {
      frame: {
        x: 0,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass10: {
      frame: {
        x: 16,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass11: {
      frame: {
        x: 16,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass12: {
      frame: {
        x: 16,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass13: {
      frame: {
        x: 16,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass14: {
      frame: {
        x: 16,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass15: {
      frame: {
        x: 16,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass20: {
      frame: {
        x: 32,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass21: {
      frame: {
        x: 32,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass22: {
      frame: {
        x: 32,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass23: {
      frame: {
        x: 32,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass24: {
      frame: {
        x: 32,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass25: {
      frame: {
        x: 32,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass30: {
      frame: {
        x: 48,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass31: {
      frame: {
        x: 48,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass32: {
      frame: {
        x: 48,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass33: {
      frame: {
        x: 48,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass34: {
      frame: {
        x: 48,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass35: {
      frame: {
        x: 48,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass40: {
      frame: {
        x: 64,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass41: {
      frame: {
        x: 64,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass42: {
      frame: {
        x: 64,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass43: {
      frame: {
        x: 64,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass44: {
      frame: {
        x: 64,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass45: {
      frame: {
        x: 64,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass50: {
      frame: {
        x: 80,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass51: {
      frame: {
        x: 80,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass52: {
      frame: {
        x: 80,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass53: {
      frame: {
        x: 80,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass54: {
      frame: {
        x: 80,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass55: {
      frame: {
        x: 80,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass06: {
      frame: {
        x: 0,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass07: {
      frame: {
        x: 0,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass08: {
      frame: {
        x: 0,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass09: {
      frame: {
        x: 0,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass16: {
      frame: {
        x: 16,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass17: {
      frame: {
        x: 16,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass18: {
      frame: {
        x: 16,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass19: {
      frame: {
        x: 16,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass26: {
      frame: {
        x: 32,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass27: {
      frame: {
        x: 32,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass28: {
      frame: {
        x: 32,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass29: {
      frame: {
        x: 32,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass36: {
      frame: {
        x: 48,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass37: {
      frame: {
        x: 48,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass38: {
      frame: {
        x: 48,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass39: {
      frame: {
        x: 48,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass46: {
      frame: {
        x: 64,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass47: {
      frame: {
        x: 64,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass48: {
      frame: {
        x: 64,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass49: {
      frame: {
        x: 64,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass56: {
      frame: {
        x: 80,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass57: {
      frame: {
        x: 80,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass58: {
      frame: {
        x: 80,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass59: {
      frame: {
        x: 80,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass60: {
      frame: {
        x: 96,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass61: {
      frame: {
        x: 96,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass62: {
      frame: {
        x: 96,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass63: {
      frame: {
        x: 96,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass64: {
      frame: {
        x: 96,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass65: {
      frame: {
        x: 96,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass66: {
      frame: {
        x: 96,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass67: {
      frame: {
        x: 96,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass68: {
      frame: {
        x: 96,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass69: {
      frame: {
        x: 96,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass70: {
      frame: {
        x: 112,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass71: {
      frame: {
        x: 112,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass72: {
      frame: {
        x: 112,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass73: {
      frame: {
        x: 112,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass74: {
      frame: {
        x: 112,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass75: {
      frame: {
        x: 112,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass76: {
      frame: {
        x: 112,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass77: {
      frame: {
        x: 112,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass78: {
      frame: {
        x: 112,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass79: {
      frame: {
        x: 112,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass80: {
      frame: {
        x: 128,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass81: {
      frame: {
        x: 128,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass82: {
      frame: {
        x: 128,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass83: {
      frame: {
        x: 128,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass84: {
      frame: {
        x: 128,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass85: {
      frame: {
        x: 128,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass86: {
      frame: {
        x: 128,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass87: {
      frame: {
        x: 128,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass88: {
      frame: {
        x: 128,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass89: {
      frame: {
        x: 128,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass90: {
      frame: {
        x: 144,
        y: 0,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass91: {
      frame: {
        x: 144,
        y: 16,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass92: {
      frame: {
        x: 144,
        y: 32,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass93: {
      frame: {
        x: 144,
        y: 48,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass94: {
      frame: {
        x: 144,
        y: 64,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass95: {
      frame: {
        x: 144,
        y: 80,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass96: {
      frame: {
        x: 144,
        y: 96,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass97: {
      frame: {
        x: 144,
        y: 112,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass98: {
      frame: {
        x: 144,
        y: 128,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
    grass99: {
      frame: {
        x: 144,
        y: 144,
        w: 16,
        h: 16,
      },
      sourceSize: {
        w: 16,
        h: 16,
      },
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: 16,
        h: 16,
      },
    },
  },
  meta: {
    image: "terrain_tiles.png",
    format: "RGBA8888",
    size: {
      w: 384,
      h: 256,
    },
    scale: "1",
  },
};

export const texturesPromise = new Spritesheet(
  BaseTexture.from(atlasData.meta.image),
  atlasData
).parse();

//type of what resolve texturesPromise
export type TexturesType = Record<keyof typeof atlasData.frames, Texture>;

export const createSprite = (texture: Texture, size = Cell.CellSize) => {
  const sprite = new Sprite(texture);
  sprite.cullable = false;
  texture.baseTexture.scaleMode = SCALE_MODES.NEAREST;
  sprite.width = size;
  sprite.height = size;
  return sprite;
};
