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
    <div class="col-4 d-flex justify-content-center mb-2">
      <button class="btn btn-success" onclick="app.cluesController.setActiveClue('${this.id}')" data-bs-toggle="modal" data-bs-target="#clue-modal">
        <h2>
          <div class="mb-2 wide-boy">${this.category.title}</div>
        <h2>
         <div>${this.value}</div>
        </h2>
      </button>
    </div>
    `
  }

  get CardTemplate() {
    return `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <h2>
            <div class="mb-3">
              ${this.question}
            </div>
            <div class="d-flex justify-content-center">
              <i class="mdi mdi-magnify me-3 magnify"></i>
              <span class="answer">
               ${this.answer}
              </span>
            </div>
          </h2>
        </div>
      </div>
    </div>
    `
  }
}