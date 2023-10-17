// Inserts the Random Question into the HTML.
// Returns the Answer to the random question.
function randomQuestion(lowestNum, highestNum) {
// randomNumber1 gets a random number between 11 and 100 (including 11 and 100)
    let randomNumber1 = getRandomInt(lowestNum + 1, highestNum);
// randomNumber2 gets a random number between 10 and 99 (including 10 and 99)
    let randomNumber2 = getRandomInt(lowestNum, highestNum - 1);
// Recursion to make sure that number 2 is never bigger than number 1.
    if (randomNumber2 > randomNumber1) {
        console.log("IN IF STATEMENT AT SOME POINT");
        return randomQuestion(lowestNum, highestNum);
    } else {
        console.log("IN ELSE STATEMENT");

        let answer = (randomNumber1 - randomNumber2);

        console.log("In randQuest: " + [answer, randomNumber1, randomNumber2]);
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
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let currentAnswer;  // Global variable to hold the current answer

function randomAnswers(){
    let answer, number1, number2;
    [answer, number1, number2] = randomQuestion(10, 100);
    $("#question").text(`${number1}  -  ${number2}? ${answer}`);
    let answerArray=[];
    for (let i = 0; i < 4; i++) {
        answerArray.push(getRandomInt(10, 200));
    }
    answerArray.push(answer);
    answerArray = shuffle(answerArray);
    $('.answer-container').empty();
    for (let i = 0; i < answerArray.length; i++) {
        $(".answer-container").append("<button class='shadow btn btn-primary rounded answer button col-sm-2 mx-auto m-1'>" + answerArray[i] + "</button>")
    }
    currentAnswer = answer;  // Set the global variable to the current answer
}

function mainDriver() {
    randomAnswers();

    let scoreNum = 0;
    let outOfScore = 0;

    // Attach the click event listener to the parent element, '.answer-container',
    // and use event delegation to handle clicks on '.answer' buttons
    $(".answer-container").on('click', '.answer', function () {
        if($(this).text().includes(currentAnswer.toString())){  // Updated line
            $(".correctnessCheck").html("<h4>Correct!</h4>")
            outOfScore++;
            scoreNum++;
            $(".score").html(scoreNum + "/" + outOfScore);  // Updated line
            randomAnswers();
        }
        else {
            $(".correctnessCheck").html("<h4>Wrong!</h4>")
            outOfScore++;
            $(".score").html(scoreNum + "/" + outOfScore);
            randomAnswers();
        }
    });
}
mainDriver();


