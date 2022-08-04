import { ProxyState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { sandboxApi } from "./AxiosService.js"

class PlayersService {
  async getPlayers() {
    const res = await sandboxApi.get()
    console.log(res.data);
    ProxyState.players = res.data.map(p => new Player(p))
  }

}

export const playersService = new PlayersService()