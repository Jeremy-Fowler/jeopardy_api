export class Clue {
  constructor (data) {
    this.category = data.category
    this.answer = data.answer
    this.question = data.question
    this.value = data.value
    this.id = data.id
  }

  get ButtonTemplate() {
    return `
    <div class="col-1 p-2 d-flex justify-content-center">
      <button onclick="app.cluesController.setActive('${this.id}')" class="btn btn-success">${this.value}</button>
    </div>
    `
  }
}