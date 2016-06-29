class Questions extends Collection {
  constructor() {
    super();
  }

  getData() {
    this.url = 'http://localhost:3000/questions.json';
    return this.networkData();
  }

  loadData(data) {
    let question;
    for(var item of data) {
      question = new Question({data:item});
      this.collection.push(question);
    }
    this.invalidate();
  }

  draw() {
    super.draw();
    for(var question of this.collection) {
      this.$component.append(
        question.$component
      );
    }
  }
}
