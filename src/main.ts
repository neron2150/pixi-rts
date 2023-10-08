import { TexturesType } from "./app/assetsHelper";
import pixiApp from "./app/pixiApp";
import { loadResources } from "./app/resourceLoader";
import Game from "./game/game";
import "./style.css";

loadResources().then((textures) => {
  document.body.appendChild(pixiApp.view as HTMLCanvasElement);
  console.log(window.devicePixelRatio);
  new Game(textures as TexturesType).run();
});

console.log(pixiApp.renderer.width, pixiApp.renderer.height);
