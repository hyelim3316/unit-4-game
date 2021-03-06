// Fashion Variables
var fashion = {
    glass:
    {
      name: "Glass",
      value: 0
    },
    cart:
    {
      name: "Cart",
      value: 0
    },
    coke:
    {
      name: "Coke",
      value: 0
    },
    pink:
    {
      name: "Pink",
      value: 0
    }
  };
  
  // Scores (Current and Target)
  var currentScore = 0;
  var targetScore = 0;
  
  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;
  
  
  // FUNCTIONS
  // =================================================================
  
  // Helper Function for getting random numbers
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Starts the Game (and restarts the game)
  var startGame = function() {
  
    // Reset the Current Score
    currentScore = 0;
  
    // Set a new Target Score (between 19 and 120)
    targetScore = getRandom(19, 120);
  
    // Set different values for each of the fashion (between 1 and 12)
    fashion.glass.value = getRandom(1, 12);
    fashion.cart.value = getRandom(1, 12);
    fashion.coke.value = getRandom(1, 12);
    fashion.pink.value = getRandom(1, 12);
  
    // Change the HTML to reflect all of these changes
    $("#nowpoint").text(currentScore);
    $("#targetscore").text(targetScore);
  
  
    // Testing Console
    console.log("-----------------------------------");
    console.log("Target Score: " + targetScore);
    console.log("glass: " + fashion.glass.value + " | cart: " + fashion.cart.value + " | coke: " + fashion.coke.value +
      " | pink: " +  fashion.pink.value);
    console.log("-----------------------------------");
  };
  
  // Check if User Won or Lost and Reset the Game
  var checkWin = function() {
  
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
      alert("Sorry. You lost!");
      console.log("You Lost");
  
      // Add to Loss Counter
      lossCount++;
  
      // Change Loss Count HTML
      $("#loss-count").text(lossCount);
  
      // Restart the game
      startGame();
    }
  
    else if (currentScore === targetScore) {
      alert("Congratulations! You Won!");
      console.log("You Won!");
  
      // Add to the Win Counter
      winCount++;
  
      // Change Win Count HTML
      $("#win-count").text(winCount);
  
      // Restart the game
      startGame();
    }
  
  };
  
  // Respond to clicks on the fashion imgs
  var addValues = function(clickedFashion) {
  
    // Change currentScore
    currentScore += clickedFashion.value;
  
    // Change the HTML to reflect changes in currentScore
    $("#nowpoint").text(currentScore);
  
    // Call the checkWin Function
    checkWin();
  
    // Testing Console
    console.log("Your Score: " + currentScore);
  };
  
  // MAIN PROCESS
  // =================================================================
  
  // Starts the Game the First Time.
  startGame();
  
  $("#glass").click(function() {
    addValues(fashion.glass);
  });
  
  $("#cart").click(function() {
    addValues(fashion.cart);
  });
  
  $("#coke").click(function() {
    addValues(fashion.coke);
  });
  
  $("#pink").click(function() {
    addValues(fashion.pink);
  });
  