$(document).ready(function(){
  var questions, $questions;
  $questions = $(".questions");
  questions = new Questions();

  questions.promise.done(function(){
    $questions.append(questions.$component);
  });
});
