var redCrystal;
var blueCrystal;
var yellowCrystal;
var greenCrystal;
var randomNumber; 
var totalScore; 
var wins; 
var loses; 

//JavaScript function that wraps everything
$(document).ready(function() {

//$("#random-button").on("click", function() {

  
        var minNumber = 19;
        var maxNumber = 120;
        
        //specify that the random number will be between 19 and 120
        var randomNumber = randomNumberFromRange(minNumber, maxNumber);
        
        // function to radomly select a number from that range
        function randomNumberFromRange(min,max)
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }//console log the number for testing
          console.log(randomNumber);

        // ...  dump the random number into our random number paragraph.
        $("p.random-number").text(randomNumber); 


      });













        // // Theme Button
        // $(".redCrystal").on("click", function() {
        //   audioElement.play();
        // });
        // $(".blueCrystal").on("click", function() {
        //   audioElement.pause();
        // });

        // // Size Buttons
        // $(".yellowCrystal").on("click", function() {
        //   captainPlanet.animate({ height: "300px" });
        // });
        // $(".greenCrystal").on("click", function() {
        //   captainPlanet.animate({ height: "500px" });
        // });
      

        // // Keyboard move controls
        // $(document).keyup(function(e) {
        //   console.log(e.which);
        //   switch (e.which) {
          
        //   // Move Buttons (Keyboard Down)
        //   case 40:
        //     captainPlanet.animate({ top: "+=200px" }, "normal");
        //     break;

        //     // Move Buttons (Keyboard Right)
        //   case 39:
        //     captainPlanet.animate({ left: "+=200px" }, "normal");
        //     break;

        //     // Move Buttons (Keyboard Up)
        //   case 38:
        //     captainPlanet.animate({ top: "-=200px" }, "normal");
        //     break;

        //     // Move Buttons (Keyboard Left)
        //   case 37:
        //     captainPlanet.animate({ left: "-=200px" }, "normal");
        //     break;

        //   default:
        //     break;
      //     }
     //    });
    //  });

