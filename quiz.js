 const quizForm = document.querySelector(".form-quiz")
 const submitAnswer = document.querySelector("#check-btn")
 const output = document.querySelector(".output")

 const answers = ["Yes", "3", "55°", "No", "vertex", "scalene", "isosceles", "60°"];



 function compareAnswers() {
    
     let score = 0;
     let index = 0;
     const formResults = new FormData(quizForm);
     for (let value of formResults.values()) {
         console.log(value)
         if (value === answers[index]) {
             score++;
             console.log(score)
         }
         index++;


     }
     output.innerText = "Your score is " + score;

 }
 submitAnswer.addEventListener("click", compareAnswers);