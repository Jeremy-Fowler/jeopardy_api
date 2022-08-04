import { ProxyState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";

function _draw() {
  let template = ''
  ProxyState.players.forEach(p => template += p.Template)
  // @ts-ignore
  document.getElementById('players').innerHTML = template
}

function _getPlayers() {
  try {
    playersService.getPlayers()
  } catch (error) {
    console.error(error);
  }
}

export class PlayersController {
  constructor () {
    ProxyState.on('players', _draw)
    _getPlayers()
  }

}