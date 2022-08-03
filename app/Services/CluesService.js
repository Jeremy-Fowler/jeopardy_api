import { ProxyState } from "../AppState.js";
import { Clue } from "../Models/Clue.js";
import { jService } from "./AxiosService.js"

class CluesService {
  async getClues(id) {
    const res = await jService.get('clues', { params: { category: id } })
    console.log(res.data);
    ProxyState.clues = res.data.map(c => new Clue(c))
  }

}

export const cluesService = new CluesService()