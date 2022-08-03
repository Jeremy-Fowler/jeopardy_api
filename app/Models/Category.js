export class Category {
  constructor (data) {
    this.id = data.id
    this.cluesCount = data.clues_count
    this.title = data.title
  }

  get Template() {
    return `
    <div class="col-2 d-flex justify-content-center">
        <button onclick="app.cluesController.getClues('${this.id}')" class="btn btn-primary" title="${this.cluesCount}">${this.title}</button>
    </div>
    `
  }
}