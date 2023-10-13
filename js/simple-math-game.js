$("#randomNumber1").text(getRandomInt(11,100));
$("#randomNumber2").text(getRandomInt(10,99));
let counter = 0;
 while ($("#randomNumber2").text() > $("#randomNumber1").text()){
     $("#randomNumber2").text(getRandomInt(10,99));
}

$("#operand").text("-")

function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}