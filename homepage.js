var mondaycontainer = $('.monday-container');
var tuesdaycontainer = $('.tuesday-container');
var wednesdaycontainer = $('.wednesday-container');
var thursdaycontainer = $('.thursday-container');
var fridaycontainer = $('.friday-container');
var saturdaycontainer = $('.saturday-container');
var sundaycontainer = $('.sunday-container')
var btn = $('.submit-btn');
var name = $('.name');

btn.on("click", checkDay);

function checkDay(event){
 event.preventDefault();
 var day = $('.info-stuff').val();

  if(day=="monday"){
    mondaycontainer.append(`<p class="name-card"> -${name} </p>`);
    $('.name').val("");

  } else if(day=="tuesday"){
    appendTuesday();
  } else if(day=="wednesday"){
    appendWednesday();
  } else if(day=="thursday"){
    appendThursday();
  } else if(day=="friday"){
    appendFriday();
  } else if(day=="saturday"){
    appendSaturday();
  } else if(day=="sunday") {
    appendSunday();
  } else{
    appendError();
  }

// function appendMonday(){
//
//   mondaycontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
//
// function appendTuesday(){
//   tuesdaycontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
//
// function appendWednesday(){
//   wednesdaycontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
//
// function appendThursday(){
//   thursdaycontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
//
// function appendFriday(){
//   fridaycontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
//
// function appendSaturday(){
//   saturdaycontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
//
// function appendSunday(){
//   sundaycontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
//
// function appendError(){
//   errorcontainer.append(`<p class="name-card"> -${name} </p>`);
//     $('.name').val("");
// }
