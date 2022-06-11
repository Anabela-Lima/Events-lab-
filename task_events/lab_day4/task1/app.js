

const button = document.querySelector("#btn");  // we are saying: in our dom file the button is the thing with id btn (recall # means with id), we then store this in a button variable


function displayDate() {      // we have a function called displayDate that takes no arguments and 

    document.getElementById("date").innerHTML = Date();    // gets the element with id = date and changes the inner text to date
}


// <!-- TODO use an event (double click) to call displayDate() -->


// we need an eventlistener, so when user double clicks button the displayDate function is activatd
// dblclicking the button = the event, callback= the response = displayDate function 

button.addEventListener("dblclick", displayDate);