import { TexturesType } from "./app/assetsHelper";
import pixiApp from "./app/pixiApp";
import { loadResources } from "./app/resourceLoader";
import Game from "./game/game";
import "./style.css";

loadResources().then((textures) => {
  document.body.appendChild(pixiApp.view as HTMLCanvasElement);

  new Game(textures as TexturesType).run();
});
