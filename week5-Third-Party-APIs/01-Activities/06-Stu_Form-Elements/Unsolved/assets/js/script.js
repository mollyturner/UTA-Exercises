var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var input = $('input[name="#shopping-input"]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

shoppingFormEl.on('submit', function (event) {
    event.preventDefault();

    var inputVal = input.val();
    var listItem = $('<li>');
    
    listItem.text(inputVal);

    shoppingListEl.append(listItem);

    input.val('');
});


// TODO: Add an event listener to the `shoppingFormEl` to handle submission
