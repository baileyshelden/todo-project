var mondaycontainer = $('.monday-container');
var tuesdaycontainer = $('.tuesday-container');
var wednesdaycontainer = $('.wednesday-container');
var thursdaycontainer = $('.thursday-container');
var fridaycontainer = $('.friday-container');
var saturdaycontainer = $('.saturday-container');
var sundaycontainer = $('.sunday-container');
var generalcontainer = $('.general-container');
var btn = $('.submit-btn');
var deleteone = $('.deleteone')
var namecard = $('.name-card')
// var deleteall = $('.delete');

btn.on("click", checkDay);
// deleteone.on("click", strikeOne);
// $('.deleteone').on("click", strikeOne()) ;

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
  } else if(day=="general"){
    appendDate(generalcontainer, name);
  } else{
    appendError();
  }
}

function appendDate(dayContainer, name) {
  dayContainer.append(`<div class="strikethrough"><p class="name-card nostrike"> -${name} </p> </div>`);
  // <input class="deleteone" type="submit" value="delete">
    $('.name').val("");
    $('.info-stuff').val("");
}
function appendError(){
  alert("Error! This is not a valid weekday");  
  $('.name').val("");
  $('.info-stuff').val("");
}

function deleteEverything() {
  $(".name-card").remove();
}

// function strikeOne() {
//   console.log("hello");
//   // var element = $("strikethrough");
//   //   element.classList.addClass('strike');
//   //   element.classList.removeClass('nostrike');
//   // let el=document.querySelector('.target');
//   // el.style.setProperty('text-decoration', 'line-through')
// }
//
// function strikeOne(event){
//   event.preventDefault()
//   console.log("hello");
// // $('.strikethrough').innerText(`<p class="name-strike"> <strike>-${name} </strike></p> <input class="deleteone" type="submit" value="delete">`)
// }
