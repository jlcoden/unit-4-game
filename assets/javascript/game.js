//Declare global variables 
var wins = 0;
var losses = 0;
var randomNumber = 0;
var totalScore =0;
var totalValue =0;
var crystalValue =0;
//JavaScript function that wraps everything, begins program when document is loaded
$(document).ready(function() {

    //declaring minimum and maximum varible for RandomNumber in which the player must match, in order to win
        var minNumber = 19;
        var maxNumber = 120;

        //specify that the random number will be between 19 and 120
        var randomNumber = rangeGeneratedNumber(minNumber, maxNumber);

        // function to radomly select a number from that range
        function rangeGeneratedNumber(min,max)
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
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

            //on click button function to 
            $(".btn").on('click', function() {

                //declare var for Crystal, which will be given the data-random attribute
                crystalValue = ($(this).attr("data-random"));
                //ParseInt the value so that it is changed to an integer and can be added
                crystalValue = parseInt(crystalValue);
                console.log(crystalValue);

                //for each crystalValue add it to the existing totalValue
                 totalValue += crystalValue;
                 //If totalValue becomes greater then game generated number, alert player that they loss
                if(totalValue > randomNumber) {
                    alert("Sorry, you lost!");
                    //increment losses
                    losses++;
                    //create var to include text, plus updated losses number
                    var showLosses= "Losses: " + losses;
                    //show on html page
                     $('#lossesAmount').text(showLosses);
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
                }
                $("#scoreDiv").text(totalValue);



            });


        });