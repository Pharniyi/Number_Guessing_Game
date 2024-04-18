let randomNum= Math.floor(Math.random() * 100) + 1;
/*+1 ensures that the generated number is between 1 and 100 than between 0 and 99 */

const guesses = document.querySelector(".guesses");
/* selects an html element with the class name "guesses using document.querySelector method */
const lastResult = document.querySelector(".lastResult");
/* selects an html element with the class name lastResult using document.querySelector method */
const lowOrHigh = document.querySelector(".lowOrHigh");
/* selects an html element with the class name lowOrHigh using document.querySelector method */
const guessSubmit = document.querySelector(".guessSubmit");
/* selects an html element with the class name guessSubmit using document.querySelector method */
const guessField = document.querySelector(".guessField");
/* selects an html element with the class name guessField using document.querySelector method */

let guessCount =1;
let resetButton;

function checkGuess(){
    const userGuess = Number(guessField.value);
    /*it retrieves the value entered by the user in the 'guessField' input element and convert it to a number using "Number() and then assigns the number to the constant variable "userGuess" */

    if(guessCount == 1){
        guesses.textContent = "previous guesses:"
        /*it sets the textcontent property of the guesses element to previous guesses*/
        guesses.textContent= `${guesses.textContent} ${userGuess}`;
        /* it appends the userguess value to the textcontent of the guesses element, it uses template literals to concatenate the new guesses with the existing content*/
    }
}

if(userGuess == randomNum){
    lastResult.textContent = "Congratulations! You got it right!"; /* it sets the textcontent of the lastresult element to congrat........*/
    lastResult.style.backgroundColor = "green";
    lowOrHigh.textContent=""
    setGameOver();
}
else if{
    
}

 checkGuess();

