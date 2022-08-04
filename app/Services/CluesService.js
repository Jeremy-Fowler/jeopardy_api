import { ProxyState } from "../AppState.js";
import { Clue } from "../Models/Clue.js";
import { jService } from "./AxiosService.js"

class CluesService {
  async getClues() {
    const res = await jService.get('', { params: { count: 9 } })
    console.log(res.data);
    ProxyState.clues = res.data.map(c => new Clue(c))
  }

}

export const cluesService = new CluesService()