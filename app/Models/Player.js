export class Player {
  constructor (data) {
    this.correct = data.correct
    this.incoreect = data.incorrect
    this.name = data.name
    this.questions = data.questions
    this.points = data.points
  }

  get Template() {
    return `
    <div class="col-3 d-flex justify-content-center">
      <h3 class="border rounded border-dark p-3 wide-boy">
        <div>${this.name}</div>
        <div>${this.points}</div>
      </h3>
    </div>
    `
  }

  get ButtonTemplate() {
    return `
    <div class="col-4">
      <div class="border border-dark rounded p-2 d-flex justify-content-between">
        <span>${this.name}</span>
        <div>
          <button onclick="app.playersController.guess(true)" class="btn btn-success"><i class="mdi mdi-check"></i></button>
          <button onclick="app.playersController.guess(false)" class="btn btn-danger"><i class="mdi mdi-close"></i></button>
        </div>
      </div>
    </div>
    `
  }
}