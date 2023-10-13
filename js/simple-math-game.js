// Inserts the Random Question into the HTML.
// Returns the Answer to the random question.
function randomQuestion(lowestNum, highestNum) {
// randomNumber1 gets a random number between 11 and 100 (including 11 and 100)
    let randomNumber1 = getRandomInt(lowestNum+1, highestNum);
// randomNumber2 gets a random number between 10 and 99 (including 10 and 99)
    let randomNumber2 = getRandomInt(lowestNum, highestNum-1);
// Recursion to make sure that number 2 is never bigger than number 1.
    if (randomNumber2 > randomNumber1) {
        console.log("IN IF STATEMENT AT SOME POINT");
        return randomQuestion(lowestNum,highestNum);
    } else {
        console.log("IN ELSE STATEMENT");

    let answer = (randomNumber1-randomNumber2);

    console.log("In randQuest: " + [answer,randomNumber1,randomNumber2]);
    return [answer, randomNumber1, randomNumber2];
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
// Start of inserting random Answers
// function randomAnswers(numOfAnswers){
//     let randomAnswers = [];
//     for(let i=0;i<numOfAnswers-1;i++){
//         randomAnswers[i].append()
//     }
// }
function mainDriver() {
     let answer,number1,number2;
    [answer,number1,number2]= randomQuestion(10,100);
    $("#question").append(number1," - ",number2," ? ", answer);
}

mainDriver();