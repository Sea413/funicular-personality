$(document).ready(function() {
alert("The best music is Schwifty");
$("form#formid1").submit(function(event) {

var age = parseInt($("input#age").val());
var musical =$("input#musical").val();
var alien = $("select#alien").val();

if (alien === "Gearhead" && alien !== "Birdperson" && alien !== "Zeke" && age>50 && musical !=='Schwifty') {
  $('#rick').show();
} else {
  $('#rick').hide();
}

if (alien !== "Gearhead" && alien === "Birdperson" && alien !== "Zeke" && age>50 && musical !=='Schwifty') {
  $('#morty').show();
} else {
  $('#morty').hide();
}

if (alien !== "Gearhead" && alien !== "Birdperson" && alien === "Zeke" && age>50 && musical !=='Schwifty') {
  $('#jerry').show();
} else {
  $('#jerry').hide();
}
if (age<=50 && age>= 31 && (musical !=='Schwifty')) {
  $('#beth').show();
} else {
  $('#beth').hide();
}
if (age>=1 && age<=30 && (musical !=='Schwifty')) {
  $('#summer').show();
} else {
  $('#summer').hide();
}
if (age>0 && musical ==='Schwifty') {
  $('#meseeks').show();
} else {
  $('#meseeks').hide();
}
event.preventDefault();
});
});



//
// if (alien === "Birdperson") {
//   $('#morty').show();
// } else {
//   $('#morty').hide();
// }
//
// if (alien === "Zeke") {
//   $('#summer').show();
// }  else {
//     $('#summer').hide();
// }
//
// if (age>=1 && age<10) {
//   $('#meseeks').show();
//   $('#morty').hide();
//   $('#summer').hide();
//   $('#rick').hide();
// } else {
//     $('#meseeks').hide();
// }
//
// if (age>=50 && age<100){
//   $('#jerry').show();
//   $('#morty').hide();
//   $('#summer').hide();
//   $('#rick').hide();
//  else {
//   $('#jerry').hide();
//  }
//  if (musical ==='Schwifty') {
//    $('#beth').show();
//    $('#morty').hide();
//    $('#summer').hide();
//    $('#rick').hide();
//    else {
//     $('#beth').hide();
// }
