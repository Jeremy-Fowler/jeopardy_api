import { ProxyState } from "../AppState.js";
import { Category } from "../Models/Category.js";
import { jService } from "./AxiosService.js"

class CategoriesService {
  async getCategories(offset) {
    const res = await jService.get('categories', { params: { offset: offset, count: 6 } })
    console.log(res.data);
    ProxyState.categories = res.data.map(c => new Category(c))
  }

}

export const categoriesService = new CategoriesService()