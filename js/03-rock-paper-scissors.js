/*eslint-env browser*/


//USER MAKES CHOICE

var UserChoice = window.prompt("Select rock, paper, or scissors");


//COMPUTER MAKES CHOICE

var computChoice;

function computOp() {
    "use strict";
    computChoice = Math.random();
    if (computChoice <= 0.33) {
        computChoice = "scissors";
    } else if (computChoice <= 0.66 && computChoice > 0.33) {
        computChoice = "paper";
    } else {
        computChoice = "rock";
    }
}
computOp();
      
        
//CONDITIONAL STATEMENT TO SEE WHO WINS
             
function game() {
    "use strict";
    if (UserChoice === "paper") {
        if (computChoice === "rock") {
            window.alert("You chose paper and the computer chose rock! You win! Paper covers rock");
            computOp();
        } else if (UserChoice === computChoice) {
            window.alert("It's a tie!");
     
        } else if (computChoice === "scissors") {
            window.alert("You lose! You chose paper and computer chose scissors. Scissors cut paper!");
     
        }
    } else if (UserChoice === "scissors") {
        if (computChoice === "paper") {
            window.alert("You chose scissors and the computer chose paper! You win! Scissors cut paper.");
     
        } else if (UserChoice === computChoice) {
            window.alert("It's a tie! You chose scissors and the computer chose scissors!");
     
        } else if (computChoice === "rock") {
            window.alert("You lose! You chose scissors and computer chose rock. Rock smashes scissors!");
     
        }
    } else if (UserChoice === "rock") {
        if (computChoice === "scissors") {
            window.alert("You chose rock and the computer chose scissors! You win! Rock smashes scissors.");
     
        } else if (UserChoice === computChoice) {
            window.alert("It's a tie! You chose rock and the computer chose rock!");
   
        } else if (computChoice === "rock") {
            window.alert("You lose! You chose rock and computer chose paper. Paper covers rock!");
      
        } 
    } else {
        window.alert("Invalid choice!");
    
    }
    computOp();   
}
game();



//Do/While Loop...haha. Has some issues but works!

/*do {
    var UserChoice = window.prompt("Select rock, paper, or scissors");
    computChoice = Math.random();
    if (computChoice <= 0.33) {
        computChoice = "scissors";
    } else if (computChoice <= 0.66 && computChoice > 0.33) {
        computChoice = "paper";
    } else {
        computChoice = "rock";
    }
 if (UserChoice === "paper") {
        if (computChoice === "rock") {
            window.alert("You chose paper and the computer chose rock! You win! Paper covers rock");
            //computOp();
        } else if (UserChoice === computChoice) {
            window.alert("It's a tie!");
     
        } else if (computChoice === "scissors") {
            window.alert("You lose! You chose paper and computer chose scissors. Scissors cut paper!");
     
        }
    } else if (UserChoice === "scissors") {
        if (computChoice === "paper") {
            window.alert("You chose scissors and the computer chose paper! You win! Scissors cut paper.");
     
        } else if (UserChoice === computChoice) {
            window.alert("It's a tie! You chose scissors and the computer chose scissors!");
     
        } else if (computChoice === "rock") {
            window.alert("You lose! You chose scissors and computer chose rock. Rock smashes scissors!");
     
        }
    } else if (UserChoice === "rock") {
        if (computChoice === "scissors") {
            window.alert("You chose rock and the computer chose scissors! You win! Rock smashes scissors.");
     
        } else if (UserChoice === computChoice) {
            window.alert("It's a tie! You chose rock and the computer chose rock!");
   
        } else if (computChoice === "rock") {
            window.alert("You lose! You chose rock and computer chose paper. Paper covers rock!");
      
    }  
    }
} while (UserChoice !== "scissors" || UserChoice !== "paper" || UserChoice !== "rock"); 
    window.alert("Invalid choice!");

    */



