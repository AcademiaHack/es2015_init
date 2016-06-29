class Component {
  constructor(params) {
    this.params = params;
  }

  invalidate() {
    if(this.$component) {
      this.$component.html("");
    }
    this.draw();
  }

  networkData() {
    return $.get(this.url, (data) => {
      console.log("Data retreive success!");
      this.loadData(data);
    });
  }

  draw() {
    console.log("Drawing...");
    if(!this.$component) {
      this.$component = $("<div>");
    }
  }
}
