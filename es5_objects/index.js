var questions;

$(document).ready(function(){
  $questions = $(".questions");

  questions = new Questions(function(){
    $questions.append(questions.$component);
  });
});
