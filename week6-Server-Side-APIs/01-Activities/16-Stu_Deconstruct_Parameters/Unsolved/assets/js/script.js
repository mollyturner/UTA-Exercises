fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
  // 1. First parameter is: per_page=10 - Will return a response of up to 10 results per page.
  // 2. Second parameter is: state=open - Will only display reponses that are in the "open" state.
  // 3. Third parameter is: sort=created - Specifies the sequence to display response. This will display by date created.
  // 4. Fourth parameter is: direction=desc - Specifies the direction to display response and this will be in descending order.
