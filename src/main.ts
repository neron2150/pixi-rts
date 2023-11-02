import { AndroidFullScreen } from "@awesome-cordova-plugins/android-full-screen";
import pixiApp from "./app/pixiApp";
import { Resources } from "./app/resources";
import Game from "./game/game";
import "./style.css";

const hideStatusBar = async () => {
  AndroidFullScreen.isImmersiveModeSupported()
    .then(() => AndroidFullScreen.immersiveMode())
    .catch(console.warn);
};

Resources.loadResources().then(() => {
  document.body.appendChild(pixiApp.view as HTMLCanvasElement);

  hideStatusBar();

  new Game().run();
});
