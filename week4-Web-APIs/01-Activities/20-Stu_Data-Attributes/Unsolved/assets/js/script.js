var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  var state = element.getAttribute('data-state');

  console.log(state, "state");
  // element.setAttribute("data-state", "data-number");

  // TODO: Complete function
  if(state === 'hidden') {
    var number = element.getAttribute('data-number');
    element.textContent = number;
    element.setAttribute('data-state', 'visible');
  }
  else {
    element.textContent = '';
    element.setAttribute('data-state', 'hidden');
  }
});

