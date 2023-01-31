function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);
  document.querySelector('#key').textContent = event.key;
  document.querySelector('#code').textContent = event.code;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener('keydown', keydownAction);

