// // Initialize Firebase
var config = {
//     apiKey: "AIzaSyBDfVYlkT1YhC6fHJV8fQS0iHzPg-WD9Ow",
//     authDomain: "project-elevation-df0b8.firebaseapp.com",
//     databaseURL: "https://project-elevation-df0b8.firebaseio.com",
//     projectId: "project-elevation-df0b8",
//     storageBucket: "project-elevation-df0b8.appspot.com",
//     messagingSenderId: "360955956682"
/};

firebase.initializeApp(config);


//----------------------
// Global Variables
//----------------------
var database = firebase.database();


// // Listener Event for the Submit Button
$("#submit").on("click", function (event) {

    event.preventDefault();

//     address1 = $("#inputAddress").val().trim();
//     city = $("#inputCity").val().trim();
//     state = $("#inputState").val().trim();
//     zip = $("#inputZip").val().trim();

//     $(".results").show();
//     $("#address").html("<h3>" + address1 + "<br>" + city + ", " + state + " " + zip + "</h3>");
//     getGeometry(address1, city, state, zip);
//     playJeopardy = document.createElement("audio");
//     playJeopardy.setAttribute("src", "assets/audio/jeopardy.mp3")
//     playJeopardy.play();
//     removeAddressInfo();
// });

// // remove previous address information entered by the user
// function removeAddressInfo() {
//     $("#inputAddress").val("");
//     $("#inputCity").val("");
//     $("#inputState").val("");
//     $("#inputZip").val("");
// }



// # Firebase Assignment - Train Scheduler (Basic - Recommended)

// In this assignment, you'll create a train schedule application that incorporates 
// Firebase to host arrival and departure data. Your app will retrieve and manipulate 
// this information with Moment.js. This website will provide up-to-date information 
// about various trains, namely their arrival times and how many minutes remain until 
// they arrive at their station.

// ### Instructions:

//   * When adding trains, administrators should be able to submit the following:

//     * Train Name

//     * Destination 

//     * First Train Time -- in military time

//     * Frequency -- in minutes

//   * Code this app to calculate when the next train will arrive; this should 
// be relative to the current time.

//   * Users from many different machines must be able to view same train times.

// ### Bonus (Extra Challenges)

// * Consider updating your "minutes to arrival" and "next train time" text 
// once every minute. This is significantly more challenging; only attempt this 
// if you've completed the actual activity and committed it somewhere on GitHub 
// for safekeeping (and maybe create a second GitHub repo).

// * Try adding `update` and `remove` buttons for each train. Let the user 
// edit the row's elements-- allow them to change a train's Name, Destination 
// and Arrival Time (and then, by relation, minutes to arrival).

// * As a final challenge, make it so that only users who log into the site 
// with their Google or GitHub accounts can use your site. You'll need to read up 
// on Firebase authentication for this bonus exercise.


// ### Create a README.md

// Add a `README.md` to your repository describing the project. Here are some 
// resources for creating your `README.md`. Here are some resources to help you 
// along the way:

// * [About READMEs](https://help.github.com/articles/about-readmes/)

// * [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

// - - -

// ### Add To Your Portfolio

// After completing the homework please add the piece to your portfolio. 
// Make sure to add a link to your updated portfolio in the comments section 
// of your homework so the TAs can easily ensure you completed this step when 
// they are grading the assignment. To receive an 'A' on any assignment, you 
// must link to it from your portfolio.


