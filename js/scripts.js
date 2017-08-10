$(document).ready(function(){
  var userHeight = parseInt(prompt("Enter your height in inches"));
  var standard = 54
  var kidsOnly = 65
  if (userHeight > standard) {
    $("#standard").addClass("highlight");
  }
  if (userHeight < kidsOnly){
    $("#kidsOnly").addClass("highlight");
  }
});
