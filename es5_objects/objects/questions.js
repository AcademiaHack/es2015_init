function Questions(callback, params) {
  this.collection = [];
  this.callback = callback;

  if(params && params.data) {
    this.loadData(params.data);
  } else {
    this.getData();
  }
}

Questions.prototype.getData = function() {
  this.url = 'http://localhost:3000/questions.json';
  this.networkData();
}

Questions.prototype.loadData = function(data) {
  for(var item of data) {
    question = new Question({data:item});
    this.collection.push(question);
  }
  this.invalidate();
}

Questions.prototype.networkData = function() {
  var self = this;
  $.get(this.url, function(data){
    console.log("Data retreive success!");
    self.loadData(data);
    if(self.callback) {
      self.callback();
    }
  });
}

Questions.prototype.draw = function() {
  console.log("Drawing...");
  if(!this.$component) {
    this.$component = $("<div>");
  }

  for(var question of this.collection) {
    this.$component.append(
      question.$component
    );
  }
}

Questions.prototype.invalidate = function() {
  if(this.$component) {
    this.$component.html("");
  }
  this.draw();
}
