let purpleButton1 = document.querySelector(".purpleButton1");
let purpleButton2 = document.querySelector(".purpleButton2");
let purpleButton3 = document.querySelector(".purpleButton3");
let purpleButton4 = document.querySelector(".purpleButton4");
let purpleButton5 = document.querySelector(".purpleButton5");
let greenButton1 = document.querySelector(".greenButton1");
let greenButton2 = document.querySelector(".greenButton2");
let greenButton3 = document.querySelector(".greenButton3");
let greenButton4 = document.querySelector(".greenButton4");
let greenButton5 = document.querySelector(".greenButton5");
let blueButton1 = document.querySelector(".blueButton1");
let blueButton2 = document.querySelector(".blueButton2");
let blueButton3 = document.querySelector(".blueButton3");
let blueButton4 = document.querySelector(".blueButton4");
let blueButton5 = document.querySelector(".blueButton5");
let yellowButton1 = document.querySelector(".yellowButton1");
let yellowButton2 = document.querySelector(".yellowButton2");
let yellowButton3 = document.querySelector(".yellowButton3");
let yellowButton4 = document.querySelector(".yellowButton4");
let yellowButton5 = document.querySelector(".yellowButton5");
let submitButton = document.querySelector(".submitButton");
let questions = document.querySelector(".questions");
let questionOne = document.querySelector(".questionOne");
let questionTwo = document.querySelector(".questionTwo");
let questionThree = document.querySelector(".questionThree");
let questionFour = document.querySelector(".questionFour");
let questionFive = document.querySelector(".questionFive");
let purpleScore = 0;
let greenScore = 0;
let blueScore = 0;
let yellowScore = 0;
let questionScreen = document.querySelector(".questions");
let resultScreen = document.querySelector(".result");
let colorResult = document.querySelector(".colorResult");
let resultPic = document.querySelector(".resultPic");
let resultInfo = document.querySelector(".resultInfo");
let userResult = document.querySelector(".userResult");
let userParagraph = document.querySelector(".userParagraph");
let purpleInfo = document.querySelector(".purpleInfo");
let blueInfo = document.querySelector(".blueInfo");
let greenInfo = document.querySelector(".greenInfo");
let yellowInfo = document.querySelector(".yellowInfo");

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
    questionFive.style.display = "block";
});

purpleButton5.addEventListener('click', function(){
    purpleScore += 1;
    questionFive.style.display = "none";
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
    questionFive.style.display = "block";
});

greenButton5.addEventListener('click', function(){
    greenScore += 1;
    questionFive.style.display = "none";
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
    questionFive.style.display = "block";
});

blueButton5.addEventListener('click', function(){
    blueScore += 1;
    questionFive.style.display = "none";
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
    questionFive.style.display = "block";
});

yellowButton5.addEventListener('click', function(){
    yellowScore += 1;
    questionFive.style.display = "none";
    questions.style.display = "none";
    submitButton.style.display = "block";
});

submitButton.addEventListener('click', function(){
    submitButton.style.display = "none";
    resultScreen.style.display = "block";

    if(purpleScore > blueScore && purpleScore > yellowScore && purpleScore > greenScore){
        colorResult.innerHTML = "purple";
        resultPic.src = "PurpleLightsaber3.webp";
        resultInfo.innerHTML = "The purple color of a lightsaber resembles a balance between the light and dark side of the force. Users are able to command the dark side in their battle style, while not allowing it to corrupt them. You're likely a natural leader, who takes on responsibility well.";
        userResult.innerHTML = "Mace Windu, Vernestra Rwoh";
    }

    else if(blueScore > purpleScore && blueScore > greenScore && blueScore > yellowScore){
        colorResult.innerHTML = "blue";
        resultPic.src = "bluelightsaber.webp";
        resultInfo.innerHTML = "Blue lightsabers most commonly belong to Jedi Guardians. Jedi Guardians are the bravest and most practical of the Jedi, and they are often entrusted to lead the most difficult missions. When working in a team, decisions will likely fall to you, because your teammates trust your expertise and your moral compass.";
        userResult.innerHTML = "Anakin Skywalker, Obi-Wan Kenobi";
    }

    else if(yellowScore > purpleScore && yellowScore > blueScore && yellowScore > greenScore){
        colorResult.innerHTML = "yellow";
        resultPic.src = "yellowLightsaber.jpg";
        resultInfo.innerHTML = "Yellow Lightsabers often belong to Jedi Sentinels or Jedi Temple Guards. Users of this lightsaber are often more independent from the Jedi Temple, and are most capable in their specialized fields. You're constantly in pursuit of new skills or knowledge, striving to become the best version of yourself that you can be.";
        userResult.innerHTML = "Rey, Asajj Ventress (post-Clone Wars)";
    }

    else if(greenScore > purpleScore && greenScore > yellowScore && greenScore > blueScore){
        colorResult.innerHTML = "green";
        resultPic.src = "luke-skywalker-disney-plus-mandalorian-the-rescue.webp";
        resultInfo.innerHTML = "Green lightsabers usally belong to Jedi Consulars, Jedi warriors who are more deeply attuned with the force. Users of this lightsaber are more commonly looked to for their wisdom and guidance among their peers. You're likely more understanding and compassionate than most, prioritizing diplomacy over hasty decision-making.";
        userResult.innerHTML = "Qui-Gon Jinn, Yoda";
    }

    else if(purpleScore === blueScore && purpleScore > yellowScore && purpleScore > greenScore){
        colorResult.innerHTML = "tied between purple and blue";
        purpleInfo.style.display = "block";
        blueInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(purpleScore === greenScore && purpleScore > blueScore && purpleScore > yellowScore){
        colorResult.innerHTML = "tied between purple and green";
        purpleInfo.style.display = "block";
        greenInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(purpleScore === yellowScore && purpleScore > blueScore && purpleScore > greenScore){
        colorResult.innerHTML = "tied between purple and yellow";
        purpleInfo.style.display = "block";
        yellowInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(blueScore === greenScore && blueScore > purpleScore && blueScore > yellowScore){
        colorResult.innerHTML = "tied between blue and green";
        blueInfo.style.display = "block";
        greenInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(blueScore === yellowScore && blueScore > purpleScore && blueScore > greenScore){
        colorResult.innerHTML = "tied between blue and yellow";
        blueInfo.style.display = "block";
        yellowInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(greenScore === yellowScore && greenScore > purpleScore && greenScore > blueScore){
        colorResult.innerHTML = "tied between green and yellow";
        greenInfo.style.display = "block";
        yellowInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(purpleScore === greenScore && greenScore === yellowScore && yellowScore > blueScore){
        colorResult.innerHTML = "tied between purple, green, and yellow";
        purpleInfo.style.display = "block";
        greenInfo.style.display = "block";
        yellowInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(purpleScore === blueScore && blueScore === yellowScore && yellowScore > greenScore){
        colorResult.innerHTML = "tied between purple, blue, and yellow";
        purpleInfo.style.display = "block";
        blueInfo.style.display = "block";
        yellowInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(purpleScore === greenScore && greenScore === blueScore && blueScore > yellowScore){
        colorResult.innerHTML = "tied between purple, green, and blue";
        purpleInfo.style.display = "block";
        greenInfo.style.display = "block";
        blueInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(greenScore === blueScore && blueScore === yellowScore && yellowScore > purpleScore){
        colorResult.innerHTML = "tied between green, blue, and yellow";
        greenInfo.style.display = "block";
        blueInfo.style.display = "block";
        yellowInfo.style.display = "block";
        userParagraph.style.display = "none";
    }

    else if(purpleScore === blueScore && blueScore === greenScore && greenScore === yellowScore){
        colorResult.innerHTML = "an all-way tie";
        purpleInfo.style.display = "block";
        blueInfo.style.display = "block";
        greenInfo.style.display = "block";
        yellowInfo.style.display = "block";
        userParagraph.style.display = "none";
    }
});

purpleInfo.addEventListener('click', function(){
        colorResult.innerHTML = "purple";
        userParagraph.style.display = "block";
        resultPic.src = "PurpleLightsaber3.webp";
        resultInfo.innerHTML = "The purple color of a lightsaber resembles a balance between the light and dark side of the force. Users are able to command the dark side in their battle style, while not allowing it to corrupt them. You're likely a natural leader, who takes on responsibility well.";
        userResult.innerHTML = "Mace Windu, Vernestra Rwoh";
        purpleInfo.style.display = "none";
});

blueInfo.addEventListener('click', function(){
        colorResult.innerHTML = "blue";
        userParagraph.style.display = "block";
        resultPic.src = "bluelightsaber.webp";
        resultInfo.innerHTML = "Blue lightsabers most commonly belong to Jedi Guardians. Jedi Guardians are the bravest and most practical of the Jedi, and they are often entrusted to lead the most difficult missions. When working in a team, decisions will likely fall to you, because your teammates trust your expertise and your moral compass.";
        userResult.innerHTML = "Anakin Skywalker, Obi-Wan Kenobi";
        blueInfo.style.display = "none";
});

greenInfo.addEventListener('click', function(){
        colorResult.innerHTML = "green";
        userParagraph.style.display = "block";
        resultPic.src = "luke-skywalker-disney-plus-mandalorian-the-rescue.webp";
        resultInfo.innerHTML = "Green lightsabers usally belong to Jedi Consulars, Jedi warriors who are more deeply attuned with the force. Users of this lightsaber are more commonly looked to for their wisdom and guidance among their peers. You're likely more understanding and compassionate than most, prioritizing diplomacy over hasty decision-making.";
        userResult.innerHTML = "Qui-Gon Jinn, Yoda";
        greenInfo.style.display = "none";
});

yellowInfo.addEventListener('click', function(){
        colorResult.innerHTML = "yellow";
        userParagraph.style.display = "block";
        resultPic.src = "yellowLightsaber.jpg";
        resultInfo.innerHTML = "Yellow Lightsabers often belong to Jedi Sentinels or Jedi Temple Guards. Users of this lightsaber are often more independent from the Jedi Temple, and are most capable in their specialized fields. You're constantly in pursuit of new skills or knowledge, striving to become the best version of yourself that you can be.";
        userResult.innerHTML = "Rey, Asajj Ventress (post-Clone Wars)";
        yellowInfo.style.display = "none";
});