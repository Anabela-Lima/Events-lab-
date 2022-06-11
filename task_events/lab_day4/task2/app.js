function displayDate() {  // a function called displayDate, that takes no input

    /*
      TODO
      - display Date in the "date" paragraph
    */

  // when we call function, display date in paragraph = p element 
   
  // we search in our DOM for element with element p tag and assign it an id:  <p id="date"></p>  
  // we then change the inner contents of this element to equal the Date function  so it will print date
  
   document.getElementById(ID="date").innerHTML = Date(); 



}

// next lets search for our button

const button = document.querySelector("#btn2");  // we are saying: in our dom file the button is the thing with id = "btn2" (recall # means with id), we then store this in a button variable


// we then need an eventlistener, so when user clicks button the displayDate function is activatd
// clicking the button = the event, callback= the response = displayDate function 

button.addEventListener("click", displayDate);


