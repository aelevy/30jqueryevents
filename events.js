$(document).ready(function(){

 $(".square1").on("click", function(){

  $(this).css("background-color", "red")
 });

$(".square2").on("click", function(){

   $(this).css("height","200px")
});

$(".square3").on("click", function(){
  $(this).css("width", "200px")

});

$( ".square4" ).on("click",function() {
  $(this).fadeOut(1000);
});

$(".square5").mouseover(function(){
    $(this).css("background-color", "green");
  });

  $(".square6").mouseover(function(){
    $(this).slideUp();
  });

$(".square7").click(function(){
  $(this).html("andrew");
});

$(".square8").click(function(){
  $(this).css("border", "2px solid red")
});

$(".square9").on("click",function(){
  $(this).addClass("rotate");
});

$(".square10").on("click",function(){
  $(this).css("border-radius", "100%");
});

$(".square11").mouseout(function(){
 $(this).css("background-color", "pink")
});

$(".square12").on("click", function(){
 $(this).addClass("hidden");
});

$( ".square13" ).mouseover(function() {
  $(this).fadeOut(1000);
});

$( ".square14" ).mouseout(function() {
 $(this).fadeOut(1000);
});

$(".square15").on("click", function(){
 $(this).css("font-size", "2em");
});

$(".square16").mouseover(function(){
 $(this).css("font-size", "2em");
});

$(".square17").mouseout(function(){
 $(this).css("font-size", "2em");
});

$(".square18").mouseover(function(){
  $(this).css("height", "200px");
 });

$(".square19").mouseout(function(){
 $(this).css("height", "200px");
});

$(".square20").mouseover(function(){
 $(this).css("width", "200px");
});

$(".square21").mouseout(function(){
 $(this).css("width", "200px");
});
$(".square22").mouseover(function(){
 $(this).css("border-radius", "100%")
});
$(".square23").mouseout(function(){
 $(this).css("border-radius","100%")
})
$(".square24").mouseover(function(){
 $(this).html("yoooo");
});

$(".square25").mouseout(function(){
 $(this).html("yoooo");
});
$(".square26").mouseover(function(){
 $(this).css("border","4px solid green");
});

$(".square27").mouseout(function(){
 $(this).css("border","4px solid green");
});
$(".square28").on("click", function(){
 $(this).css("font-family", "helvetica");
});

$(".square29").mouseover(function(){
 $(this).css("font-family", "helvetica");
});

$(".square30").mouseout(function(){
 $(this).css("font-family", "helvetica");
});
});
