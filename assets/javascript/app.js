var config = {
    apiKey: "AIzaSyAj29L5GeXzJ7GW7gpbVs4mh3irpYmhtHs",
    authDomain: "train-schedule-aea05.firebaseapp.com",
    databaseURL: "https://train-schedule-aea05.firebaseio.com",
    projectId: "train-schedule-aea05",
    storageBucket: "train-schedule-aea05.appspot.com",
    messagingSenderId: "924062577898"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  var trainRef = database.ref("/train");
  
  $("#submitBtn").on("click", function(event) {
    
    event.preventDefault();
  
  
    var trainName = $("#name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFirstTime = moment($("#firstTime-input").val().trim(), "HH:mm").format("LT");
    var trainFrequency = $("#frequency-input").val().trim();
  
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      firstTime: trainFirstTime,   
      frequency: trainFrequency
    };
  
    // adding new train to database;
    trainRef.push(newTrain);
  
    $("#name-input").val("");
    $("#destination-input").val("");
    $("#firstTime-input").val("");
    $("#frequency-input").val("");
  
  });
  
  
  trainRef.on("child_added", function(childSnapshot) {
  
  
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFirstTime = childSnapshot.val().firstTime;
    var trainFrequency = childSnapshot.val().frequency;
    var trainFirstTimeConverted = moment(trainFirstTime,"LT").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(trainFirstTimeConverted), "minutes");
    var tRemainder = diffTime % trainFrequency;
    var tMinutesTillTrain = trainFrequency - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("LT");;
    
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(nextTrain),
      $("<td>").text(tMinutesTillTrain),
    );
  
    $("#train-table").append(newRow);
  });
  
  
  
  
  
  
  
  
  
  
  