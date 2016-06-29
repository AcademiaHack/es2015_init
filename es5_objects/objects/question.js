function Question(params, callback) {
  this.callback = callback;
  if(params) {
    if(params.data) {
      this.loadData(params.data);
    } else if(params.id) {
        this.id = params.id;
        this.getData();
    } else {
      console.log("No params, data or id, cant create component");
    }
  }
}

Question.prototype.getData = function() {
  this.url = 'http://localhost:3000/questions/'+this.id+'.json';
  this.networkData();
}

Question.prototype.loadData = function(data) {
  this.id = data.id;
  this.title = data.title;
  this.description = data.description;
  this.invalidate();
}

Question.prototype.networkData = function() {
  var self = this;
  $.get(this.url, function(data){
    console.log("Data retreive success!");
    self.loadData(data);
    if(self.callback){
      self.callback();
    }
  });
}

Question.prototype.draw = function() {
  console.log("Drawing...");
  if(!this.$component) {
    this.$component = $("<div>");
  }

  this.$component.append(
    $("<h3>").html(this.title),
    $("<p>").html(this.description)
  );
}

Question.prototype.setTitle = function(title) {
  this.title = title;
  this.invalidate();
}

Question.prototype.setDescription = function(description) {
  this.description = description;
  this.invalidate();
}

Question.prototype.invalidate = function() {
  if(this.$component) {
    this.$component.html("");
  }
  this.draw();
}
