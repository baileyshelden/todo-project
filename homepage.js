var cardContainer = $('.card-container');
var btn = $('.submit-btn');

btn.on("click", toDo);

function toDo() {
  var name = $('.name').val();

  cardContainer.append(`<p class="name-card"> ${name} </p>`);

  $('.name').val("");

}
