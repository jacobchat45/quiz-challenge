// timed quiz game
// starts on the start button being clicked
// timer which subtracts some time (10 sec) when a question is answered incorrectly
// next question is shown as soon as the one before is answered
// final score is questions answered + time remaining


// question = 0



// after checking the answer, + this by one and then the next question should render

// use this code inside the logic of checking the correct answer for the selected question.
let correctAnswers = 0;
let finishPara = document.querySelector("#end-screen");
let startButton = document.querySelector("#start");
let choicesTitle = document.querySelector("#questions");
let timer = document.querySelector("#time");
let startingText = document.querySelector(".startingPara    ");
let timeCountdown = 50;
timer.innerHTML = timeCountdown;
let currentQuestion = 0;

function timerCount(){

let timerCountInt = setInterval(function(){
     if(timeCountdown <= 1){
        clearInterval(timerCountInt);
     }
      timeCountdown -= 1;
      timer.textContent = timeCountdown;
}, 1000)}

function clearText(){
   startingText.innerHTML = "";
}
startButton.addEventListener("click", function(){
   
   choicesTitle.className = "show";
    timerCount();
    clearText();
    
});


const questTitle = questions.map((item) => {
   return item.question;
 })
 
 const questAnswers = questions.map((item) => {

   return item.answers;
 });
 
 const questCorrect = questions.map((item) => {
   return item.correctAnsw;
 }
 )
 console.log(questTitle);

var li;

function finishGame(){
   if(currentQuestion >= 5){
   alert("finished1");
finishPara.className = "show";
alert("finished");};

}

 function renderQuestions(){
   currentQuestion++

   questionTitle.innerHTML = questTitle[currentQuestion];
   questionChoices.innerHTML = "";

   for (var o = 0; o < 4; o++){
     
     li = document.createElement("li"); 
     li.textContent = questAnswers[currentQuestion][o];
     

     questionChoices.appendChild(li);
      
     li.addEventListener("click", function(clicked){
       
         if( this.textContent === questions[o].correctAnsw){
            
            console.log(currentQuestion);
            finishGame();
           renderQuestions();
         
            
         } else{
            console.log(currentQuestion);
         
           timeCountdown = timeCountdown -10;
           finishGame();
          renderQuestions();
           

           
         }
        
     })
    
   }
}

console.log("noraml" + currentQuestion);
console.log("return" + renderQuestions());