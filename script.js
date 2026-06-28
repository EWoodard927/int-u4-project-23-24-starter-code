let purpleButton1 = document.querySelector(".purpleButton1");
let purpleButton2 = document.querySelector(".purpleButton2");
let purpleButton3 = document.querySelector(".purpleButton3");
let purpleButton4 = document.querySelector(".purpleButton4");
let greenButton1 = document.querySelector(".greenButton1");
let greenButton2 = document.querySelector(".greenButton2");
let greenButton3 = document.querySelector(".greenButton3");
let greenButton4 = document.querySelector(".greenButton4");
let blueButton1 = document.querySelector(".blueButton1");
let blueButton2 = document.querySelector(".blueButton2");
let blueButton3 = document.querySelector(".blueButton3");
let blueButton4 = document.querySelector(".blueButton4");
let yellowButton1 = document.querySelector(".yellowButton1");
let yellowButton2 = document.querySelector(".yellowButton2");
let yellowButton3 = document.querySelector(".yellowButton3");
let yellowButton4 = document.querySelector(".yellowButton4");
let submitButton = document.querySelector(".submitButton");
let questions = document.querySelector(".questions");
let questionOne = document.querySelector(".questionOne");
let questionTwo = document.querySelector(".questionTwo");
let questionThree = document.querySelector(".questionThree");
let questionFour = document.querySelector(".questionFour");
let purpleScore = 0;
let greenScore = 0;
let blueScore = 0;
let yellowScore = 0;
let questionScreen = document.querySelector(".questions");
let resultScreen = document.querySelector(".result");

purpleButton1.addEventListener('click', function(){
    purpleScore += 1;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});

purpleButton2.addEventListener('click', function(){
    purpleScore += 1;
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
});

purpleButton3.addEventListener('click', function(){
    purpleScore += 1;
    questionThree.style.display = "none";
    questionFour.style.display = "block";
});

purpleButton4.addEventListener('click', function(){
    purpleScore += 1;
    questionFour.style.display = "none";
    questions.style.display = "none";
    submitButton.style.display = "block";
});

greenButton1.addEventListener('click', function(){
    greenScore += 1;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});

greenButton2.addEventListener('click', function(){
    greenScore += 1;
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
});

greenButton3.addEventListener('click', function(){
    greenScore += 1;
    questionThree.style.display = "none";
    questionFour.style.display = "block";
});

greenButton4.addEventListener('click', function(){
    greenScore += 1;
    questionFour.style.display = "none";
    questions.style.display = "none";
    submitButton.style.display = "block";
});

blueButton1.addEventListener('click', function(){
    blueScore += 1;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});

blueButton2.addEventListener('click', function(){
    blueScore += 1;
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
});

blueButton3.addEventListener('click', function(){
    blueScore += 1;
    questionThree.style.display = "none";
    questionFour.style.display = "block";
});

blueButton4.addEventListener('click', function(){
    blueScore += 1;
    questionFour.style.display = "none";
    questions.style.display = "none";
    submitButton.style.display = "block";
});

yellowButton1.addEventListener('click', function(){
    yellowScore += 1;
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
});

yellowButton2.addEventListener('click', function(){
    yellowScore += 1;
    questionTwo.style.display = "none";
    questionThree.style.display = "block";
});

yellowButton3.addEventListener('click', function(){
    yellowScore += 1;
    questionThree.style.display = "none";
    questionFour.style.display = "block";
});

yellowButton4.addEventListener('click', function(){
    yellowScore += 1;
    questionFour.style.display = "none";
    questions.style.display = "none";
    submitButton.style.display = "block";
});

submitButton.addEventListener('click', function(){
    submitButton.style.display = "none";
    resultScreen.style.display = "block";
});