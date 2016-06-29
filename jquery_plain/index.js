$(document).ready(function(){
  $.get('http://localhost:3000/questions.json', getQuestions);

  function getQuestions(data) {
    var $question, $title, $description;
    var $questions = $(".questions");

    for(var question of data) {
      renderQuestion(question);
    }
  };

  function renderQuestion(question) {
    $question = $('<div>');
    $title = $('<h3>');
    $description = $('<p>');

    $title.html(question.title);
    $title.appendTo($question);

    $description.html(question.description);
    $description.appendTo($question);

    $question.appendTo($questions);
  };
});
