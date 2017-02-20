// Creates an array that lists out all of the options.
      var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

      var wins = 0;
      var losses = 0;
      var guessesleft = 10;
      var guessessofar = " ";

      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
        var wintext = document.getElementById("wins");
        var losetext = document.getElementById("losses");
        var guesseslefttext = document.getElementById("guessesleft");
        var guessessofartext = document.getElementById("guessessofar");
        

        // Determines which key was pressed
        var userGuess = event.key;

        // Randomly chooses a choice from the options array. This is the Computer's guess.

        var computerGuess = options[Math.floor(Math.random() * options.length)];
        
        //if userguess does not equal computer guess then lose guesses
        if (userGuess !== computerGuess) {
          guessesleft--;
          guessessofar += " " + userGuess;
          guessessofartext.innerHTML =  guessessofar;
            
        } 
      
        //if gueeses left is below 1 then losses go up
        if (guessesleft < 1) {
          losses++
          reset ()
        }

        //if userguess equals computer guess then wins go up
        if (userGuess === computerGuess) {
          wins++
          reset ()
        }

        //reset game after win or guesses left equals less than 1
        reset = function() {
          guessesleft = 10;
          guessessofar = " ";
        }


        

        wintext.innerHTML = wins;
        losetext.innerHTML = losses;
        guesseslefttext.innerHTML = guessesleft;
        
          }
      

      