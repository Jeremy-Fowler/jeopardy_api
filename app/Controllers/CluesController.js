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
    this.getClues()
  }

  async getClues() {
    try {
      await cluesService.getClues()
    } catch (error) {
      console.error(error);
    }
  }
  setActiveClue(id) {
    let clue = ProxyState.clues.find(c => c.id == id)
    // @ts-ignore
    document.getElementById('modal-header').innerHTML = clue.category.title + ' ' + clue.value
    // @ts-ignore
    document.getElementById('modal-body').innerHTML = clue.CardTemplate
    // @ts-ignore
    console.log('Answer: ' + clue.answer)
    // @ts-ignore
    let template = ''
    ProxyState.players.forEach(p => template += p.ButtonTemplate)
    // @ts-ignore
    document.getElementById('player-buttons').innerHTML = template
  }
}