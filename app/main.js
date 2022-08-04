import { CluesController } from "./Controllers/CluesController.js";
import { PlayersController } from "./Controllers/PlayersController.js";

class App {
  cluesController = new CluesController();
  playersController = new PlayersController();
}

window["app"] = new App();
