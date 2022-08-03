import { CategoriesController } from "./Controllers/CategoriesController.js";
import { CluesController } from "./Controllers/CluesController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  categoriesController = new CategoriesController();
  cluesController = new CluesController();
}

window["app"] = new App();
