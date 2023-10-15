import pixiApp from "./app/pixiApp";
import { Resources } from "./app/resourses";
import Game from "./game/game";
import "./style.css";

Resources.loadResources().then(() => {
  document.body.appendChild(pixiApp.view as HTMLCanvasElement);

  new Game().run();
});
