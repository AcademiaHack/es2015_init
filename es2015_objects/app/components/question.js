class Question extends Widget {
  constructor(params, callback) {
    super(params, callback);
  }

  getData() {
    this.url = 'http://localhost:3000/questions/'+this.id+'.json';
    return this.networkData();
  }

  loadData(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.invalidate();
  }

  draw() {
    super.draw();
    this.$component.append(
      $("<h3>").html(this.title),
      $("<p>").html(this.description)
    );
  }

  setTitle(title) {
    this.title = title;
    this.invalidate();
  }

  setDescription(description) {
    this.description = description;
    this.invalidate();
  }

}
