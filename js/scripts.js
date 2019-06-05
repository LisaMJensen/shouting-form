$(function(){
  $("#formOne").submit(function(event){
    var wordsSubmitted = $("input#wordsInput").val();
    var newWord = wordsSubmitted.toUpperCase();
    $(".wordsInput").text(newWord);

    $(".words").show();

    event.preventDefault();
  })
});
