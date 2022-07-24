/*
$("h1").click(function() {
  $("h1").css("color", "purple");

  setTimeout(function() {
    $("h1").css("color", "black");
  }, 1000);
});*/

$("button").click(function(){
  $("h1").css("color", "purple");

  setTimeout(function(){
    $("h1").css("color", "black");
  }, 1000);
});

/*
$(document).keypress(function(event){
  $("h1").html(`<em>${event.key}</em>`);
});*/
$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
