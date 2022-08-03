import { ProxyState } from "../AppState.js";
import { categoriesService } from "../Services/CategoriesService.js";

function _draw() {
  let template = ''
  ProxyState.categories.forEach(c => template += c.Template)
  // @ts-ignore
  document.getElementById('categories').innerHTML = template
}

export class CategoriesController {
  constructor () {
    console.log('hello buddy');
    ProxyState.on('categories', _draw)
    this.getCategories(0)
  }

  async getCategories(offset) {
    await categoriesService.getCategories(offset)
  }
}