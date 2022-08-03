import { ProxyState } from "../AppState.js";
import { cluesService } from "../Services/CluesService.js";
function _draw() {
  let template = ''
  ProxyState.clues.forEach(c => template += c.ButtonTemplate)
  // @ts-ignore
  document.getElementById('clues').innerHTML = template
}
export class CluesController {
  constructor () {
    ProxyState.on('clues', _draw)
  }

  async getClues(id) {
    await cluesService.getClues(id)
  }
}