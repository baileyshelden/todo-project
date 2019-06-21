var mondaycontainer = $('.monday-container');
var tuesdaycontainer = $('.tuesday-container');
var wednesdaycontainer = $('.wednesday-container');
var thursdaycontainer = $('.thursday-container');
var fridaycontainer = $('.friday-container');
var saturdaycontainer = $('.saturday-container');
var sundaycontainer = $('.sunday-container')
var btn = $('.submit-btn');
// var deleteall = $('.delete');

btn.on("click", checkDay);

function checkDay(event){
 event.preventDefault();
 var day = $('.info-stuff').val();
  var name = $('.name').val();

  if(day=="monday"){
  appendDate(mondaycontainer, name);
  } else if(day=="tuesday"){
    appendDate(tuesdaycontainer, name);
  } else if(day=="wednesday"){
    appendDate(wednsdaycontainer, name);
  } else if(day=="thursday"){
    appendDate(thursdaycontainer, name);
  } else if(day=="friday"){
    appendDate(fridaycontainer, name);
  } else if(day=="saturday"){
    appendDate(saturdaycontainer, name);
  } else if(day=="sunday") {
    appendDate(sundaycontainer, name);
  } else{
    appendError();
  }
}

function appendDate(dayContainer, name) {
  dayContainer.append(`<p class="name-card"> -${name} </p>`);
    $('.name').val("");
    $('.info-stuff').val("");
}
function appendError(){
  alert("Error! This is not a valid weekday");  
  $('.name').val("");
  $('.info-stuff').val("");
}
//
// function deleteEverything() {
//   $(".name-card").remove();
// }
