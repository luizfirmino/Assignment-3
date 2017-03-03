/*
The Rock, Paper, Scissors Game (10 points)
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
•	Rock destroys scissors.
•	Scissors cut paper.
•	Paper covers rock.
Our code will break the game into 3 phases:
1.	User makes a choice. How will we collect the user’s choice?
2.	Computer makes a choice. How will we collect the computer’s choice?
3.	A conditional that determines who wins.
In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
1.	Begin by prompting the user for their choice.
*/
var arrChoices = ["R","P","S"];
var isPlaying = true;

window.alert("The Rock, Paper, Scissors Game.\nRock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:\n•	Rock destroys scissors.\n•	Scissors cut paper.\n•	Paper covers rock.");

do {

    /*
    6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
    */
    do {
        var userChoice = window.prompt("Choose (R)-Rock, (P)-Paper, (S)-Scissors");
        if (!(userChoice == null)) 
            userChoice = userChoice.toUpperCase();
    }   
    while ((arrChoices.indexOf(userChoice)==-1) || (userChoice == null));

    /*
    2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
    3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
    */
    var compChoice = arrChoices[Math.floor(Math.random() * 3)];

    /*
    4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
    */
    window.console.log("User choices: " + userChoice + "\nComp choices: " + compChoice + "\n------------------------\n");
    
    if (userChoice == compChoice){
        window.alert("We have a tie!"); 
    } else if (userChoice == "R" && compChoice == "P"){
        window.alert("Computer is the winner! Its choices was Paper.");
    } else if (userChoice == "R" && compChoice == "S"){
        window.alert("Your are the winner! Computer choices was Scissors.");
    } else if (userChoice == "P" && compChoice == "R"){
        window.alert("You are the winner! Computer choices was Rock.");
    } else if (userChoice == "S" && compChoice == "P"){
        window.alert("You are the winner! Computer choices was Paper.");
    } else if (userChoice == "S" && compChoice == "R"){
        window.alert("Computer is the winner! Its choices was Rock.");
    } else if (userChoice == "P" && compChoice == "S"){
        window.alert("Computer is the winner! Its choices was Scissors.");
    }
    
    /* 5.	What if the result ends in a tie? Figure out how to handle that as well. */
    isPlaying = window.confirm("Would you like to play again?"); 
    
}
while (isPlaying);

window.alert("Thank you very much for your time! Have a good one!");

