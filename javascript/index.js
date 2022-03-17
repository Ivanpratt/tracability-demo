
console.log("Jeddy")


// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'f56574e5d5f8427f8eeaced774a70f48',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


let button = document.getElementById('button')


let myfunction = function() {
    console.log("Jeddy")
}

button.addEventListener('click', myfunction)