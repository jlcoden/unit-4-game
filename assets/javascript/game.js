var wins = 0;
var losses = 0;
var randomNumber = 0; 
var totalScore =0;
var counter =0;
var crystalValue =0; 
//JavaScript function that wraps everything
$(document).ready(function() {

       
        var minNumber = 19;
        var maxNumber = 120;
        
        //specify that the random number will be between 19 and 120
        var randomNumber = rangeGeneratedNumber(minNumber, maxNumber);
        
        // function to radomly select a number from that range
        function rangeGeneratedNumber(min,max)
        {
            return Math.floor(Math.random()*(max-min+1)+min);
        }//console log the number for testing
      

        // ...  dump the random number into our random number paragraph.
        $("p.random-number").text(randomNumber); 

            
           var crystalValue = $("#btn");
           // crystalNumber.each(function() {

    
            $("#btn").on('click', function() {

                for(var i = 0; i <4; i++) {
                    var random = Math.floor(Math.random() * 12 + 1);
                    $(this).attr({
                      "data-random": random 
                    }); 
                crystalValue = ($(this).attr("data-random"));
                crystalValue = parseInt(crystalValue); 
                console.log(crystalValue); 


            $("#scoreDiv").text(counter); 
                
                 counter += crystalValue; 
                if(counter > randomNumber) {
                    alert("Sorry, you lost!"); 
                    losses++;
                    var showLosses= "Losses: " + losses;
                     $('#lossesAmount').text(showLosses);
                }
                else if (counter === randomNumber) {
                    alert("You won!"); 
                    wins++;
                    var showWins= "Wins: " + wins;
                    $("winsAmount").text(showWins); 
                }

                

            }

            
        
            });


        });

    
    //             checkIfWon(); 


    //     });

    //     function checkIfWon(); {

    //         if (playerTotal === randomNumber) {
    //             alert("You won!"); 
    //             reset();
    //             wins++;
    //             $("#wins").text(wins);
    //         }
        
    //         else if (userTotal > random) {
    //             alert("Sorry, you lost!"); 
    //             reset();
    //             losses++;
    //         } 


    //     }

    // });


  //  $("#score").text(userTotal);