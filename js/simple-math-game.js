// =================================================================
// Inserts the Random Question into the HTML
// Returns the Answer to the random question
function randomQuestion() {
// randomNumber1 gets a random number between 11 and 100 (including 11 and 100)
    let randomNumber1 = getRandomInt(11, 100);
// randomNumber2 gets a random number between 10 and 99 (including 10 and 99)
    let randomNumber2 = getRandomInt(10, 99);
// Recursion to make sure that number 2 is never bigger than number 1.
    if (randomNumber2 > randomNumber1) {
        randomQuestion();
    } else {
    $("#question").append(randomNumber1, " - ", randomNumber2, " ?");
    return (randomNumber1-randomNumber2);
    }
}
// Function just to simplify getting whole numbers (ints)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// End of generating random Question
// =================================================================
function mainDriver() {
   //Inserts the question, should follow (Random Number1, (Operand), Random Number2). RandNumber1 > RandNumber2
    randomQuestion();
}

mainDriver();