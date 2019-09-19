//Declare global variables 

//wins counter
var wins = 0;
//losses counter
var losses = 0;
//randomNumber variable for # player must match
var randomNumber = 0; 
//variable for total score
var totalValue; 
//variable for crystal value
var crystalValue;


//JavaScript function begins program when document is loaded
$(document).ready(function() {

        //start/reset function
       function startReset() {
            //set total value back to 0
            totalValue =0;
            //set crystal value back to 0
            crystalValue =0;


            //Random number generater for number player must match 
            randomNumber = Math.floor(Math.random()* 101 + 19);

            //for loop to loop through and create 4 numbers for each crystal
            for(var i = 0; i <4; i++) {
                //set those 4 values to each button
                var btnname="#btn" +i;
                //generating random numbers 
                var random = Math.floor(Math.random() * 11 + 1);
                //give each button the 'data-random' attribute, which sets the random value
                $(btnname).attr("data-random", random);
                console.log(btnname);
            }

            //place the random number into our random number paragraph.
            $("p.random-number").text(randomNumber);
        }

   startReset(); 

            //on click button function
            $(".btn").on('click', function() {

                //placeholder for Crystal, which will be given the data-random attribute
                crystalValue = ($(this).attr("data-random"));
                //ParseInt the value so that it is changed to an integer and can be added
                crystalValue = parseInt(crystalValue);
                console.log(crystalValue);
                //for each crystalValue add it to the existing totalValue
                 totalValue += crystalValue;
                 //call checkIfWon function
                checkIfWon(); 

            }); 
         
        //If totalValue becomes greater then game generated number, alert player that they loss
        function checkIfWon() {
            if(totalValue > randomNumber) {
                alert("Sorry, you lost!");
                //increment losses
                losses++;
                //create var to include text, plus updated losses number
                var showLosses= "Losses: " + losses;
                //show on html page
                 $('#lossesAmount').text(showLosses);
                 startReset(); 
            }
            //if totalValue equals randomNumber value, alert that the player won. 
            else if (totalValue === randomNumber) {
                alert("You won!");
                //increment wins
                wins++;
                 //create var to include text, plus updated wins number
                var showWins= "Wins: " + wins;
                   //show on html page
                $("#winsAmount").text(showWins);
                //call start reset function
                startReset(); 
            }
            $("#scoreDiv").text(totalValue);

        }
    }); 
